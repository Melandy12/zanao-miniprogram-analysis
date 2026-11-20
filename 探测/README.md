# 赞噢校园集市 小程序客户端源码（本机微信缓存解包）

## 来源

| 项 | 值 |
|---|---|
| AppID | `wxa16ce35c0ad1a203` |
| 缓存路径 | `%APPDATA%\Tencent\xwechat\radium\users\<hash>\applet\packages\wxa16ce35c0ad1a203\73\` |
| 抓取时间 | 2026-11-13 13:56（PC 微信 4.x 打开小程序时落盘） |
| 分包 | `__APP__`（主包）、`_pages_com_`、`_pages_mx_`、`_pkgs_msg_`、`_pkgs_post_` |

## 解密方式（PC 微信 4.x，`V1MMWX` 头）

1. `key = PBKDF2(appid, "saltiest", 32, 1000, SHA1)`
2. `iv = "the iv: 16 bytes"`
3. 头 6 字节是魔数 `V1MMWX`，跳过；紧接的 **1024 字节**用 AES-256-CBC 解密
4. 余下全部字节与 `appid` 倒数第 2 个字符的 ASCII 异或（本例是 `'0'` → `0x30`）
5. 拼接后得到标准 wxapkg（`0xBE` 开头）

注意：4.x 的索引区在标准 14 字节头之后多 4 字节（文件数），且偏移是**文件内绝对偏移**；
个别文件名字段会混入 1 个控制字符，解析时要容错。

## 目录

```
src/                 483 个文件，按分包分目录
├─ APP/              主包：app-service.js（1.0MB，全部业务逻辑）、app-config.json、app-wxss.js、静态图
├─ pages_com/        分包：通用页面（登录/认证/切换学校等）
├─ pages_mx/         分包：集市主页面（324KB 逻辑）
├─ pkgs_msg/         分包：消息
└─ pkgs_post/        分包：发帖
pretty/
├─ app-service.pretty.js  美化版主逻辑（约 2 万行，可搜）
└─ api-list.json          正则提取的 75 个接口路径
```

## 后端与鉴权

- 业务接口：`https://api.x.zanao.com`
- 分享/H5：`https://c.zanao.com/sc-api/...`
- 图片 CDN：`b1.cdn.zanao.com` / `b2.cdn.zanao.com`（直链，无鉴权）

请求签名参数 `_ut_`：

```
_ut_ = AES( 随机串(20) + "$##$" + userToken + "$##$" + 当前时间戳 )
```

AES KEY/IV 硬编码在 `app-service.js` 内（`_shareImgAesConf` 等，共 3 组），
即签名可离线复现，签名本身不构成障碍。

真正的限制是 **userToken**：只能由 `wx.login` + 校园身份认证换取，
认证为人工审核，因此只能以「当前已认证账号」可见的学校/校区身份取数。

## 核心接口

| 用途 | 路径 | 关键参数 |
|---|---|---|
| 帖子列表 | `/thread/v2/list` | `from_time`（时间游标）、`cate_id`、`with_comment`、`with_reply` |
| 帖子详情 | `/thread/info` | `id` |
| 热榜 | `/thread/hot`、`/thread/toplist` | `cid` |
| 点赞 | `/thread/like` | `id` |
| 评论 | `/comment/list` | `id` |
| 学校社区信息 | `/community/info` | `cid` |
| 学校搜索/切换 | `/community/sug`、`/community/schoolselect` | 关键词 |

公共查询参数：`cid`（学校/校区别名）、`_fmc_=wxmp`。

## 合规提示

- 客户端源码属公开可下载的前端资源，但《用户协议》禁止未经许可的抓取；
- 帖子含个人信息（微信、手机、学号），批量采集受《个人信息保护法》约束；
- 仅作技术研究与自有账号数据导出时风险最低。
