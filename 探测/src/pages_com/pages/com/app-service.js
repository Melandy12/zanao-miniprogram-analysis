}/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx2=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx2:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx2 || [];
function gz$gwx2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_1)return __WXML_GLOBAL__.ops_cached.$gwx2_1
__WXML_GLOBAL__.ops_cached.$gwx2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'pageLoaded']])
Z([3,'mine-comswitch'])
Z([3,'onSearchCancel'])
Z([3,'onSearchInput'])
Z([3,'输入学校名字搜索'])
Z([3,'round'])
Z([[7],[3,'wd']])
Z(z[6])
Z([[7],[3,'searchLoading']])
Z([3,'25'])
Z([[2,'>'],[[6],[[7],[3,'virtualList']],[3,'length']],[1,0]])
Z([3,'pageNum'])
Z([3,'pageItem'])
Z([[7],[3,'virtualList']])
Z(z[11])
Z([3,'item'])
Z([[7],[3,'pageItem']])
Z([3,'cid'])
Z([3,'onSearchSelect'])
Z([3,'community-cell'])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'right_text']])
Z([3,'community-cell-arrow'])
Z([3,'arrow'])
Z([3,'未找到相关学校'])
Z([[2,'&&'],[[7],[3,'communityList']],[[2,'>'],[[6],[[7],[3,'communityList']],[3,'length']],[1,0]]])
Z([3,'访问过的学校'])
Z([3,'communityOne'])
Z([[7],[3,'communityList']])
Z(z[17])
Z([3,'onCertSelect'])
Z(z[19])
Z([[7],[3,'communityOne']])
Z([[6],[[7],[3,'communityOne']],[3,'right_text']])
Z(z[22])
Z(z[23])
Z([3,'bindSwitchPopupClose'])
Z([[7],[3,'switchPopupShow']])
Z([3,'action-box'])
Z([3,'onOldSwitchSelected'])
Z([3,'van-hairline--bottom btn-item'])
Z([3,'cert'])
Z(z[23])
Z(z[39])
Z([a,[3,'van-hairline--bottom btn-item '],[[2,'?:'],[[2,'=='],[[7],[3,'changeCount']],[1,0]],[1,'btn-disabled'],[1,'']]])
Z([3,'card'])
Z([[2,'+'],[1,'arrow-icon '],[[2,'?:'],[[2,'>'],[[7],[3,'changeCount']],[1,0]],[1,'arrow-icon-color'],[1,'btn-disabled']]])
Z(z[23])
Z([3,'bindNewSwitchPopupClose'])
Z([3,'top: 44%;'])
Z([[7],[3,'newSwitchPopupShow']])
Z([3,'switch-main'])
Z(z[48])
Z([3,'switch-close'])
Z([3,'cross'])
Z([3,'switch-action-list'])
Z([[2,'!='],[[7],[3,'selectedCertStatus']],[1,'cancel']])
Z([3,'onUncertifiedSwitchSelected'])
Z([3,'switch-action-item'])
Z(z[41])
Z([[2,'||'],[[2,'=='],[[7],[3,'selectedCertStatus']],[1,'wait']],[[2,'=='],[[7],[3,'selectedCertStatus']],[1,'fail']]])
Z([3,'switch-action-arrow'])
Z(z[23])
Z(z[57])
Z([3,'switch-action-item switch-action-item-pay'])
Z([3,'pay'])
Z([[7],[3,'hasFreeSwitch']])
Z(z[61])
Z(z[23])
Z([3,'van-dialog'])
Z([3,'pay-select'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_1);return __WXML_GLOBAL__.ops_cached.$gwx2_1
}
function gz$gwx2_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_2)return __WXML_GLOBAL__.ops_cached.$gwx2_2
__WXML_GLOBAL__.ops_cached.$gwx2_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindGoToThreadInfo'])
Z([a,[3,'common-thread-item van-hairline--bottom '],[[7],[3,'hideClass']],[3,' '],[[7],[3,'loadingClass']]])
Z([3,'common-hover-bg'])
Z([3,'100'])
Z([a,[3,'com-thread-item-'],[[6],[[7],[3,'threadItem']],[3,'thread_id']]])
Z([3,'user-section'])
Z([3,'left-sec'])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'is_forbid']],[1,1]])
Z([[6],[[7],[3,'threadItem']],[3,'user_level']])
Z([[6],[[7],[3,'threadItem']],[3,'user_level_title']])
Z([3,'right-sec'])
Z([[2,'&&'],[[7],[3,'hotIconShow']],[[2,'>'],[[6],[[7],[3,'threadItem']],[3,'hot_val']],[1,0]]])
Z([[2,'>'],[[6],[[7],[3,'threadItem']],[3,'hot_val']],[1,0]])
Z([[6],[[7],[3,'threadItem']],[3,'check_fail']])
Z([3,'pay-icon'])
Z([3,'warning-o'])
Z([[6],[[7],[3,'threadItem']],[3,'need_pay']])
Z(z[14])
Z([3,'clock-o'])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'threadItem']],[3,'hot_val']],[1,0]],[[2,'<='],[[6],[[7],[3,'threadItem']],[3,'hot_rank']],[1,3]]])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'threadItem']],[3,'hot_val']],[1,0]],[[2,'>'],[[6],[[7],[3,'threadItem']],[3,'hot_rank']],[1,3]]])
Z([3,'detail-section'])
Z([[7],[3,'isRichText']])
Z([[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'title']],[[6],[[7],[3,'threadItem']],[3,'content']]])
Z([[2,'&&'],[[2,'>'],[[7],[3,'imgCount']],[1,0]],[[7],[3,'imgSpreadShow']]])
Z([3,'r-sec'])
Z([[6],[[7],[3,'threadItem']],[3,'like_num']])
Z([3,'thread'])
Z([1,true])
Z(z[28])
Z([3,'26rpx'])
Z([3,'like-o'])
Z([3,'like'])
Z([3,'18'])
Z([1,false])
Z(z[26])
Z([3,''])
Z(z[28])
Z(z[28])
Z([3,'#E85A57'])
Z(z[4][2])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'finish_status']],[1,20]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_2);return __WXML_GLOBAL__.ops_cached.$gwx2_2
}
function gz$gwx2_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_3)return __WXML_GLOBAL__.ops_cached.$gwx2_3
__WXML_GLOBAL__.ops_cached.$gwx2_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'slicedList']],[3,'length']])
Z([3,'changeShowType'])
Z([3,'component-liked-list'])
Z([[7],[3,'showImg']])
Z([3,'itemList'])
Z([[7],[3,'slicedList']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'itemList']])
Z(z[6])
Z([[6],[[7],[3,'item']],[3,'headimgurl']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'clip']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'empty']])
Z([3,'liked-text'])
Z([[7],[3,'textList']])
Z(z[6])
Z([[2,'<'],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'textList']],[3,'length']],[1,1]]])
Z([[2,'&&'],[[7],[3,'isClip']],[[7],[3,'textIsExistClip']]])
})(__WXML_GLOBAL__.ops_cached.$gwx2_3);return __WXML_GLOBAL__.ops_cached.$gwx2_3
}
function gz$gwx2_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_4)return __WXML_GLOBAL__.ops_cached.$gwx2_4
__WXML_GLOBAL__.ops_cached.$gwx2_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list-box'])
Z([3,'padding-top:30rpx'])
Z([3,'threadItem'])
Z([[7],[3,'threadList']])
Z([3,'thread_id'])
Z([[7],[3,'group_code']])
Z([[7],[3,'threadItem']])
Z([[7],[3,'finished']])
})(__WXML_GLOBAL__.ops_cached.$gwx2_4);return __WXML_GLOBAL__.ops_cached.$gwx2_4
}
function gz$gwx2_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_5)return __WXML_GLOBAL__.ops_cached.$gwx2_5
__WXML_GLOBAL__.ops_cached.$gwx2_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container x-border-top'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'threadShow']],[[7],[3,'threadItem']]],[[6],[[7],[3,'threadItem']],[3,'thread_need_cert']]])
Z([3,'openServiceDialog_info'])
Z([3,'c-m-content'])
Z([3,'icon-lock c-sub'])
Z([3,'lock'])
Z(z[2])
Z([3,'btn-to-cert'])
Z([3,'padding:0 24rpx;'])
Z([3,'small'])
Z([3,'primary'])
Z([[7],[3,'threadShow']])
Z([a,[3,'thread-box '],[[2,'?:'],[[2,'&&'],[[7],[3,'threadItem']],[[2,'=='],[[6],[[7],[3,'threadItem']],[3,'thread_need_cert']],[1,true]]],[1,'page-thread-blur'],[1,'']]])
Z([[7],[3,'userNotify']])
Z([3,'thread-wrapper'])
Z([3,'user-section-left'])
Z([[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'is_mine']],[[6],[[7],[3,'threadItem']],[3,'is_anon']]])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'is_forbid']],[1,1]])
Z([[6],[[7],[3,'threadItem']],[3,'medal_exp_2023']])
Z(z[18])
Z([[6],[[7],[3,'threadItem']],[3,'user_level']])
Z([[6],[[7],[3,'threadItem']],[3,'user_level_title']])
Z([3,'detail-section'])
Z([[6],[[7],[3,'threadItem']],[3,'content_notify']])
Z([3,'warning-o'])
Z([[2,'>'],[[6],[[6],[[7],[3,'threadItem']],[3,'img_paths']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'threadItem']],[3,'view_show']])
Z([3,'d-other-action'])
Z([[6],[[7],[3,'threadItem']],[3,'cate_name']])
Z([3,'info-share'])
Z([[6],[[7],[3,'threadItem']],[3,'content']])
Z([3,'24'])
Z([[6],[[7],[3,'threadItem']],[3,'img_paths']])
Z([[6],[[7],[3,'threadItem']],[3,'short_url']])
Z([[6],[[7],[3,'threadItem']],[3,'title']])
Z([[6],[[7],[3,'threadItem']],[3,'view_count']])
Z([3,'updateLikeData'])
Z([3,'thread'])
Z([[2,'?:'],[[7],[3,'threadDislikeShow']],[1,'info-like-2'],[1,'info-like-1']])
Z([[6],[[7],[3,'threadItem']],[3,'dislike_num']])
Z([3,'踩'])
Z([[7],[3,'threadDislikeShow']])
Z([[6],[[7],[3,'threadItem']],[3,'dislike_has']])
Z([3,'26rpx'])
Z(z[31])
Z([[6],[[7],[3,'threadItem']],[3,'like_num']])
Z([3,'赞噢'])
Z([1,true])
Z([[6],[[7],[3,'threadItem']],[3,'like_has']])
Z([[6],[[7],[3,'threadItem']],[3,'thread_id']])
Z([[2,'||'],[[7],[3,'group_code']],[1,'']])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'like_has']],[1,false]])
Z([[2,'||'],[[7],[3,'threadSign']],[1,'']])
Z(z[49])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'finish_status']],[1,20]])
Z([[6],[[7],[3,'commentConf']],[3,'needCommentShowCert']])
Z([3,'onPhoneVerified'])
Z([3,'infoReload'])
Z([[7],[3,'commentMineInfo']])
Z([[7],[3,'commentConf']])
Z([3,'commentComRef'])
Z([[7],[3,'isAdmin']])
Z([[7],[3,'profileNeed']])
Z([[7],[3,'threadSign']])
Z([[7],[3,'queryCommentId']])
Z([[7],[3,'threadId']])
Z([[7],[3,'threadItem']])
Z([3,'onReply'])
Z([[6],[[7],[3,'commentConf']],[3,'commentForbidTip']])
Z([[6],[[7],[3,'commentMineInfo']],[3,'user_info']])
Z([3,'group-info'])
Z(z[66])
Z([[7],[3,'emptyShow']])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
Z([3,'10010'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_5);return __WXML_GLOBAL__.ops_cached.$gwx2_5
}
function gz$gwx2_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_6)return __WXML_GLOBAL__.ops_cached.$gwx2_6
__WXML_GLOBAL__.ops_cached.$gwx2_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'active']])
Z([3,'onChange'])
Z([3,'40'])
Z([3,'list-nav-class'])
Z([3,'#ee0a24'])
Z([3,'10000'])
Z([3,'time'])
Z([3,'最新'])
Z([[7],[3,'group_code']])
Z([3,'thread-list-time'])
Z(z[6])
Z([3,'like'])
Z([3,'榜单'])
Z(z[8])
Z([3,'thread-list-like'])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx2_6);return __WXML_GLOBAL__.ops_cached.$gwx2_6
}
function gz$gwx2_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx2_7)return __WXML_GLOBAL__.ops_cached.$gwx2_7
__WXML_GLOBAL__.ops_cached.$gwx2_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'schoolSelect'])
Z([3,'custom-search-box'])
Z([3,'com-school-select'])
Z([3,'/community/list'])
})(__WXML_GLOBAL__.ops_cached.$gwx2_7);return __WXML_GLOBAL__.ops_cached.$gwx2_7
}
__WXML_GLOBAL__.ops_set.$gwx2=z;
__WXML_GLOBAL__.ops_init.$gwx2=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/com/change/change.wxml','./pages/com/components/threadItem/thread-item.wxml','./pages/com/components/threadLikedList/index.wxml','./pages/com/components/threadList/index.wxml','./pages/com/group/info/info.wxml','./pages/com/group/list/list.wxml','./pages/com/select/select.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx2_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var fE=_mz(z,'van-search',['bind:cancel',2,'bind:change',1,'placeholder',2,'shape',3,'value',4],[],e,s,gg)
_(xC,fE)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
var cF=_v()
_(oD,cF)
if(_oz(z,8,e,s,gg)){cF.wxVkey=1
var hG=_n('van-loading')
_rz(z,hG,'size',9,e,s,gg)
_(cF,hG)
}
else if(_oz(z,10,e,s,gg)){cF.wxVkey=2
var oH=_v()
_(cF,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_v()
_(aL,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_mz(z,'view',['bindtap',18,'class',1,'data-item',2],[],xQ,oP,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,21,xQ,oP,gg)){hU.wxVkey=1
}
var oV=_mz(z,'van-icon',['class',22,'name',1],[],xQ,oP,gg)
_(cT,oV)
hU.wxXCkey=1
_(oR,cT)
return oR
}
eN.wxXCkey=4
_2z(z,16,bO,lK,oJ,gg,eN,'item','index','cid')
return aL
}
oH.wxXCkey=4
_2z(z,13,cI,e,s,gg,oH,'pageItem','pageNum','pageNum')
}
else{cF.wxVkey=3
var cW=_n('van-empty')
_rz(z,cW,'description',24,e,s,gg)
_(cF,cW)
}
cF.wxXCkey=1
cF.wxXCkey=3
cF.wxXCkey=3
cF.wxXCkey=3
}
else{oD.wxVkey=2
var oX=_v()
_(oD,oX)
if(_oz(z,25,e,s,gg)){oX.wxVkey=1
var lY=_n('van-cell-group')
_rz(z,lY,'title',26,e,s,gg)
var aZ=_v()
_(lY,aZ)
var t1=function(b3,e2,o4,gg){
var o6=_mz(z,'view',['bindtap',30,'class',1,'data-item',2],[],b3,e2,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,33,b3,e2,gg)){f7.wxVkey=1
}
var c8=_mz(z,'van-icon',['class',34,'name',1],[],b3,e2,gg)
_(o6,c8)
f7.wxXCkey=1
_(o4,o6)
return o4
}
aZ.wxXCkey=4
_2z(z,28,t1,e,s,gg,aZ,'communityOne','index','cid')
_(oX,lY)
}
oX.wxXCkey=1
oX.wxXCkey=3
}
var h9=_mz(z,'van-popup',['round',-1,'bind:close',36,'show',1],[],e,s,gg)
var o0=_n('view')
_rz(z,o0,'class',38,e,s,gg)
var cAB=_mz(z,'view',['bindtap',39,'class',1,'data-type',2],[],e,s,gg)
var oBB=_n('van-icon')
_rz(z,oBB,'name',42,e,s,gg)
_(cAB,oBB)
_(o0,cAB)
var lCB=_mz(z,'view',['bindtap',43,'class',1,'data-type',2],[],e,s,gg)
var aDB=_mz(z,'van-icon',['class',46,'name',1],[],e,s,gg)
_(lCB,aDB)
_(o0,lCB)
_(h9,o0)
_(xC,h9)
var tEB=_mz(z,'van-popup',['round',-1,'bind:close',48,'customStyle',1,'show',2],[],e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',51,e,s,gg)
var bGB=_mz(z,'view',['bindtap',52,'class',1],[],e,s,gg)
var oHB=_n('van-icon')
_rz(z,oHB,'name',54,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
var xIB=_n('view')
_rz(z,xIB,'class',55,e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,56,e,s,gg)){oJB.wxVkey=1
var fKB=_mz(z,'view',['bindtap',57,'class',1,'data-type',2],[],e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,60,e,s,gg)){cLB.wxVkey=1
}
var hMB=_mz(z,'van-icon',['class',61,'name',1],[],e,s,gg)
_(fKB,hMB)
cLB.wxXCkey=1
_(oJB,fKB)
}
var oNB=_mz(z,'view',['bindtap',63,'class',1,'data-type',2],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,66,e,s,gg)){cOB.wxVkey=1
}
var oPB=_mz(z,'van-icon',['class',67,'name',1],[],e,s,gg)
_(oNB,oPB)
cOB.wxXCkey=1
_(xIB,oNB)
oJB.wxXCkey=1
oJB.wxXCkey=3
_(eFB,xIB)
_(tEB,eFB)
_(xC,tEB)
var lQB=_n('van-dialog')
_rz(z,lQB,'id',69,e,s,gg)
_(xC,lQB)
var aRB=_n('pay-select')
_rz(z,aRB,'id',70,e,s,gg)
_(xC,aRB)
oD.wxXCkey=1
oD.wxXCkey=3
oD.wxXCkey=3
_(oB,xC)
}
oB.wxXCkey=1
oB.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx2_2()
var eTB=_mz(z,'view',['bindtap',0,'class',1,'hoverClass',1,'hoverStayTime',2,'id',3],[],e,s,gg)
var oXB=_n('view')
_rz(z,oXB,'class',5,e,s,gg)
var fYB=_n('view')
_rz(z,fYB,'class',6,e,s,gg)
var cZB=_n('forbid-icon')
_rz(z,cZB,'isForbid',7,e,s,gg)
_(fYB,cZB)
var h1B=_mz(z,'exp-flag',['level',8,'title',1],[],e,s,gg)
_(fYB,h1B)
_(oXB,fYB)
var o2B=_n('view')
_rz(z,o2B,'class',10,e,s,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,11,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(o2B,o4B)
if(_oz(z,12,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(o2B,l5B)
if(_oz(z,13,e,s,gg)){l5B.wxVkey=1
var t7B=_mz(z,'van-icon',['class',14,'name',1],[],e,s,gg)
_(l5B,t7B)
}
var a6B=_v()
_(o2B,a6B)
if(_oz(z,16,e,s,gg)){a6B.wxVkey=1
var e8B=_mz(z,'van-icon',['class',17,'name',1],[],e,s,gg)
_(a6B,e8B)
}
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
l5B.wxXCkey=3
a6B.wxXCkey=1
a6B.wxXCkey=3
_(oXB,o2B)
_(eTB,oXB)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,19,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(eTB,oVB)
if(_oz(z,20,e,s,gg)){oVB.wxVkey=1
}
var b9B=_n('view')
_rz(z,b9B,'class',21,e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,22,e,s,gg)){o0B.wxVkey=1
}
else{o0B.wxVkey=2
var oBC=_v()
_(o0B,oBC)
if(_oz(z,23,e,s,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,24,e,s,gg)){xAC.wxVkey=1
}
var fCC=_n('view')
_rz(z,fCC,'class',25,e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,26,e,s,gg)){cDC.wxVkey=1
var hEC=_mz(z,'like',['bizType',27,'disabled',1,'dislikeDisabled',2,'fontSize',3,'iconNameNo',4,'iconNameYes',5,'iconSize',6,'isSvg',7,'likeNum',8,'likeText',9,'likeShow',10,'liked',11,'likedColor',12,'threadId',13],[],e,s,gg)
_(cDC,hEC)
}
else{cDC.wxVkey=2
}
cDC.wxXCkey=1
cDC.wxXCkey=3
_(b9B,fCC)
o0B.wxXCkey=1
xAC.wxXCkey=1
_(eTB,b9B)
var xWB=_v()
_(eTB,xWB)
if(_oz(z,41,e,s,gg)){xWB.wxVkey=1
}
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
_(r,eTB)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx2_3()
var cGC=_v()
_(r,cGC)
if(_oz(z,0,e,s,gg)){cGC.wxVkey=1
var oHC=_mz(z,'view',['catch:tap',1,'class',1],[],e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,3,e,s,gg)){lIC.wxVkey=1
var aJC=_v()
_(lIC,aJC)
var tKC=function(bMC,eLC,oNC,gg){
var oPC=_v()
_(oNC,oPC)
var fQC=function(hSC,cRC,oTC,gg){
var oVC=_v()
_(oTC,oVC)
if(_oz(z,10,hSC,cRC,gg)){oVC.wxVkey=1
}
var lWC=_v()
_(oTC,lWC)
if(_oz(z,11,hSC,cRC,gg)){lWC.wxVkey=1
}
var aXC=_v()
_(oTC,aXC)
if(_oz(z,12,hSC,cRC,gg)){aXC.wxVkey=1
}
oVC.wxXCkey=1
lWC.wxXCkey=1
aXC.wxXCkey=1
return oTC
}
oPC.wxXCkey=2
_2z(z,8,fQC,bMC,eLC,gg,oPC,'item','index','index')
return oNC
}
aJC.wxXCkey=2
_2z(z,5,tKC,e,s,gg,aJC,'itemList','index','index')
}
else{lIC.wxVkey=2
var tYC=_n('view')
_rz(z,tYC,'class',13,e,s,gg)
var b1C=_v()
_(tYC,b1C)
var o2C=function(o4C,x3C,f5C,gg){
var h7C=_v()
_(f5C,h7C)
if(_oz(z,16,o4C,x3C,gg)){h7C.wxVkey=1
}
h7C.wxXCkey=1
return f5C
}
b1C.wxXCkey=2
_2z(z,14,o2C,e,s,gg,b1C,'item','index','index')
var eZC=_v()
_(tYC,eZC)
if(_oz(z,17,e,s,gg)){eZC.wxVkey=1
}
eZC.wxXCkey=1
_(lIC,tYC)
}
lIC.wxXCkey=1
_(cGC,oHC)
}
cGC.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx2_4()
var c9C=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var lAD=_v()
_(c9C,lAD)
var aBD=function(eDD,tCD,bED,gg){
var xGD=_mz(z,'thread-item',['group_code',5,'threadItem',1],[],eDD,tCD,gg)
_(bED,xGD)
return bED
}
lAD.wxXCkey=4
_2z(z,3,aBD,e,s,gg,lAD,'threadItem','index','thread_id')
var o0C=_v()
_(c9C,o0C)
if(_oz(z,7,e,s,gg)){o0C.wxVkey=1
}
o0C.wxXCkey=1
_(r,c9C)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx2_5()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var cJD=_v()
_(fID,cJD)
if(_oz(z,1,e,s,gg)){cJD.wxVkey=1
var cMD=_mz(z,'view',['bindtap',2,'class',1],[],e,s,gg)
var oND=_mz(z,'van-icon',['class',4,'name',1],[],e,s,gg)
_(cMD,oND)
var lOD=_mz(z,'van-button',['round',-1,'catchtap',6,'class',1,'customStyle',2,'size',3,'type',4],[],e,s,gg)
_(cMD,lOD)
_(cJD,cMD)
}
var hKD=_v()
_(fID,hKD)
if(_oz(z,11,e,s,gg)){hKD.wxVkey=1
var aPD=_n('view')
_rz(z,aPD,'class',12,e,s,gg)
var tQD=_v()
_(aPD,tQD)
if(_oz(z,13,e,s,gg)){tQD.wxVkey=1
}
var bSD=_n('view')
_rz(z,bSD,'class',14,e,s,gg)
var oTD=_n('view')
_rz(z,oTD,'class',15,e,s,gg)
var xUD=_v()
_(oTD,xUD)
if(_oz(z,16,e,s,gg)){xUD.wxVkey=1
}
var fWD=_n('forbid-icon')
_rz(z,fWD,'isForbid',17,e,s,gg)
_(oTD,fWD)
var oVD=_v()
_(oTD,oVD)
if(_oz(z,18,e,s,gg)){oVD.wxVkey=1
var cXD=_n('rank-medal')
_rz(z,cXD,'rank',19,e,s,gg)
_(oVD,cXD)
}
var hYD=_mz(z,'exp-flag',['level',20,'title',1],[],e,s,gg)
_(oTD,hYD)
xUD.wxXCkey=1
oVD.wxXCkey=1
oVD.wxXCkey=3
_(bSD,oTD)
var oZD=_n('view')
_rz(z,oZD,'class',22,e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,23,e,s,gg)){c1D.wxVkey=1
var t5D=_n('van-icon')
_rz(z,t5D,'name',24,e,s,gg)
_(c1D,t5D)
}
var o2D=_v()
_(oZD,o2D)
if(_oz(z,25,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(oZD,l3D)
if(_oz(z,26,e,s,gg)){l3D.wxVkey=1
}
var e6D=_n('view')
_rz(z,e6D,'class',27,e,s,gg)
var b7D=_mz(z,'share',['cate_name',28,'class',1,'content',2,'iconSize',3,'imgpaths',4,'short_url',5,'title',6,'view_count',7],[],e,s,gg)
_(e6D,b7D)
var o8D=_mz(z,'like',['vertical',-1,'bind:success',36,'bizType',1,'class',2,'dislikeNum',3,'dislikeText',4,'dislikeShow',5,'disliked',6,'fontSize',7,'iconSize',8,'likeNum',9,'likeText',10,'likeShow',11,'liked',12,'threadId',13],[],e,s,gg)
_(e6D,o8D)
_(oZD,e6D)
var x9D=_mz(z,'thread-liked-list',['group_code',50,'liked',1,'sign',2,'threadId',3],[],e,s,gg)
_(oZD,x9D)
var a4D=_v()
_(oZD,a4D)
if(_oz(z,54,e,s,gg)){a4D.wxVkey=1
}
c1D.wxXCkey=1
c1D.wxXCkey=3
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
_(bSD,oZD)
_(aPD,bSD)
var eRD=_v()
_(aPD,eRD)
if(_oz(z,55,e,s,gg)){eRD.wxVkey=1
var o0D=_n('no-cert')
_(eRD,o0D)
}
else{eRD.wxVkey=2
var fAE=_mz(z,'comment-list',['bind:phone-verified',56,'bind:reload',1,'commentMineInfo',2,'commentConf',3,'id',4,'isAdmin',5,'profileNeed',6,'threadSign',7,'queryCommentId',8,'threadId',9,'threadItem',10],[],e,s,gg)
fAE.rawAttr={"model:profile-need":"{{profileNeed}}","model:thread-sign":"{{threadSign}}",};_(eRD,fAE)
}
var cBE=_mz(z,'bottom-input',['bind:reply',67,'commentForbidTip',1,'mineInfo',2,'pageFrom',3,'threadItem',4],[],e,s,gg)
_(aPD,cBE)
var hCE=_n('copyright')
_(aPD,hCE)
tQD.wxXCkey=1
eRD.wxXCkey=1
eRD.wxXCkey=3
eRD.wxXCkey=3
_(hKD,aPD)
}
var oLD=_v()
_(fID,oLD)
if(_oz(z,72,e,s,gg)){oLD.wxVkey=1
}
var oDE=_mz(z,'van-dialog',['confirmButtonColor',73,'id',1,'zIndex',2],[],e,s,gg)
_(fID,oDE)
cJD.wxXCkey=1
cJD.wxXCkey=3
hKD.wxXCkey=1
hKD.wxXCkey=3
oLD.wxXCkey=1
_(r,fID)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx2_6()
var oFE=_mz(z,'van-tabs',['sticky',-1,'swipeable',-1,'active',0,'bind:change',1,'lineWidth',1,'navClass',2,'titleActiveColor',3,'zIndex',4],[],e,s,gg)
var lGE=_mz(z,'van-tab',['name',6,'title',1],[],e,s,gg)
var aHE=_mz(z,'thread-list',['group_code',8,'id',1,'tag',2],[],e,s,gg)
_(lGE,aHE)
_(oFE,lGE)
var tIE=_mz(z,'van-tab',['name',11,'title',1],[],e,s,gg)
var eJE=_mz(z,'thread-list',['group_code',13,'id',1,'tag',2],[],e,s,gg)
_(tIE,eJE)
_(oFE,tIE)
_(r,oFE)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx2_7()
var oLE=_mz(z,'school-select',['bind:choose',0,'customSearchClass',1,'id',1,'url',2],[],e,s,gg)
_(r,oLE)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/com/change/change.json'] = {"navigationBarTitleText":"切换社区","backgroundColor":"#f4f4f4","usingComponents":{"van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-empty":"../../../miniprogram_npm/@vant/weapp/empty/index","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-loading":"../../../miniprogram_npm/@vant/weapp/loading/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","pay-select":"/components/common/paySelect/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/com/change/change.wxml'] = [$gwx2, './pages/com/change/change.wxml'];else __wxAppCode__['pages/com/change/change.wxml'] = $gwx2( './pages/com/change/change.wxml' );
		__wxAppCode__['pages/com/components/threadItem/thread-item.json'] = {"component":true,"usingComponents":{"exp-flag":"/components/common/expflag/expflag","van-skeleton":"../../../../miniprogram_npm/@vant/weapp/skeleton/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","forbid-icon":"/components/common/forbidicon/forbidicon","like":"/components/common/like/like","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/com/components/threadItem/thread-item.wxml'] = [$gwx2, './pages/com/components/threadItem/thread-item.wxml'];else __wxAppCode__['pages/com/components/threadItem/thread-item.wxml'] = $gwx2( './pages/com/components/threadItem/thread-item.wxml' );
		__wxAppCode__['pages/com/components/threadLikedList/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/com/components/threadLikedList/index.wxml'] = [$gwx2, './pages/com/components/threadLikedList/index.wxml'];else __wxAppCode__['pages/com/components/threadLikedList/index.wxml'] = $gwx2( './pages/com/components/threadLikedList/index.wxml' );
		__wxAppCode__['pages/com/components/threadList/index.json'] = {"component":true,"onReachBottomDistance":200,"usingComponents":{"thread-item":"/pages/com/components/threadItem/thread-item","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/com/components/threadList/index.wxml'] = [$gwx2, './pages/com/components/threadList/index.wxml'];else __wxAppCode__['pages/com/components/threadList/index.wxml'] = $gwx2( './pages/com/components/threadList/index.wxml' );
		__wxAppCode__['pages/com/group/info/info.json'] = {"usingComponents":{"post-dialog":"/components/common/postdialog/post-dialog","postbar":"/components/common/postbar/postbar","hoverbar":"/components/common/hoverbar/hoverbar","homebar":"/components/common/homebar/homebar","no-cert":"/components/threadinfo/comment/noCert/index","comment-list":"/components/threadinfo/comment/commentList/index","action":"/components/threadinfo/action/action","like":"/components/common/like/like","copyright":"/components/common/copyright/copyright","service-dialog":"/components/common/servicedialog/service-dialog","exp-flag":"/components/common/expflag/expflag","threadhot":"/components/common/threadhot/threadhot","forbid-icon":"/components/common/forbidicon/forbidicon","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-button":"../../../../miniprogram_npm/@vant/weapp/button/index","share":"/components/common/shareimage/shareimage","rank-medal":"/components/common/rankmedal/rank-medal","thread-liked-list":"/pages/com/components/threadLikedList/index","bottom-input":"/components/threadinfo/bottomInput/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","icon":"/components/ui/icon/index"},"navigationBarTitleText":"详情"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/com/group/info/info.wxml'] = [$gwx2, './pages/com/group/info/info.wxml'];else __wxAppCode__['pages/com/group/info/info.wxml'] = $gwx2( './pages/com/group/info/info.wxml' );
		__wxAppCode__['pages/com/group/list/list.json'] = {"usingComponents":{"thread-list":"/pages/com/components/threadList/index","van-tab":"../../../../miniprogram_npm/@vant/weapp/tab/index","van-tabs":"../../../../miniprogram_npm/@vant/weapp/tabs/index","icon":"/components/ui/icon/index"},"enablePullDownRefresh":true};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/com/group/list/list.wxml'] = [$gwx2, './pages/com/group/list/list.wxml'];else __wxAppCode__['pages/com/group/list/list.wxml'] = $gwx2( './pages/com/group/list/list.wxml' );
		__wxAppCode__['pages/com/select/select.json'] = {"navigationBarTitleText":"选择学校","usingComponents":{"school-select":"/components/common/schoolselectNew/schoolselect","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/com/select/select.wxml'] = [$gwx2, './pages/com/select/select.wxml'];else __wxAppCode__['pages/com/select/select.wxml'] = $gwx2( './pages/com/select/select.wxml' );
	
	__wxRoute = 'pages/com/components/threadItem/thread-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/com/components/threadItem/thread-item.js';	define("pages/com/components/threadItem/thread-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{threadItem:{type:Object,value:{}},from:{type:String,value:""},isRichText:{type:Boolean,value:!1},hotIconShow:{type:Boolean,value:!1},group_code:{type:String}},data:{APP_CONST:t.Const,hideClass:"",loadingClass:"",imgCount:0,imgSpreadShow:!0},observers:{threadItem:function(t){var a=(t||{}).img_paths;a&&a.length&&this.setData({imgCount:a.length})},"threadItem.need_pay":function(t){t?this.setData({hideClass:"c-hide"}):this.setData({hideClass:""})},"threadItem.loading":function(t){t?this.setData({loadingClass:"t-loading"}):this.setData({loadingClass:""})}},attached:function(){this.setData({APP_CONST:t.Const})},methods:{bindGoToThreadInfo:function(t){wx.navigateTo({url:"/pages/com/group/info/info?id=".concat(this.data.threadItem.thread_id,"&cid=").concat(this.data.threadItem.cid,"&group_code=").concat(this.data.group_code)})}}}); 
 			}); 	require("pages/com/components/threadItem/thread-item.js");
 		__wxRoute = 'pages/com/components/threadLikedList/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/com/components/threadLikedList/index.js';	define("pages/com/components/threadLikedList/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{group_code:{type:String,value:""},liked:{type:Boolean,value:!1},threadId:{type:[Number,String],value:""},sign:{type:String,value:""},from:{type:String,value:"group"},isMine:{type:Boolean,value:!1}},data:{list:[],showImg:!1,isClip:!0,textIsExistClip:!1,imgIsExistClip:!1,imgClipState:!0,textClipState:!0,textClipNum:0,textList:[],slicedList:[]},ready:function(){},observers:{liked:function(){this.getLikedList()}},methods:{getTextList:function(t){var i=this.data.list||[],e=this.data||{},a=e.textIsExistClip,s=e.textClipNum;this.data.list.length>26&&(a=!0),this.data.isClip&&t&&this.data.list.length>26&&(i=i.slice(0,20),s=this.data.list.length-i.length),this.data.isClip&&!t&&(s=0),this.setData({textClipState:t,textClipNum:s,textIsExistClip:a,textList:i})},getSlicedList:function(t){for(var i=5,e=this.data.list,a=[],s=0;s<e.length;s+=9){if(0==i&&this.setData({imgIsExistClip:!0}),this.data.isClip&&t&&0==i){var l=a[a.length-1].slice(0,8);l.push({type:"clip",text:"+"+(this.data.list.length-45+1)}),a[a.length-1]=l;break}for(var p=e.slice(s,s+9);p.length<9;)p.push({type:"empty"});a.push(p),i--}if(this.data.isClip&&this.data.imgIsExistClip&&!t){var h=a[a.length-1],n={type:"clip",text:"收起"},d=h.findIndex((function(t){return"empty"===t.type}));if(-1!==d)h[d]=n;else{var g=new Array(9).fill({});g[0]=n,a.push(g)}}this.setData({slicedList:a,imgClipState:t})},changClipState:function(t){var i=t.currentTarget.dataset.type||"",e=this.data,a=e.imgClipState,s=e.textClipState;"img"==i?this.getSlicedList(!a):this.getTextList(!s)},changeShowType:function(){this.setData({showImg:!this.data.showImg})},getLikedList:function(){var i=this,e={sign:this.data.sign,id:this.data.threadId};this.data.group_code&&(e.group_code=this.data.group_code);var a="/thread/likelist";"mx"==this.data.from&&(a="/mx"+a),t.Kp.Req({url:a,data:e,callback:function(t){var e=t.list||[];if(e.length){i.setData({list:e});var a=i.data,s=a.imgClipState,l=a.textClipState;i.getSlicedList(s),i.getTextList(l)}}})}}}); 
 			}); 	require("pages/com/components/threadLikedList/index.js");
 		__wxRoute = 'pages/com/components/threadList/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/com/components/threadList/index.js';	define("pages/com/components/threadList/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{group_code:String,tag:String},attached:function(){},ready:function(){},data:{inited:!1,loadFlag:!1,curPage:1,total:0,finished:!1,threadList:[]},methods:{initList:function(){this.data.inited||(this.setData({inited:!0}),this.getList("加载中..."))},getList:function(a){var e=this,i=this.data.finished;if(this.data.loadFlag)console.log("load frequncy!");else if(i)console.log("load all");else{this.setData({loadFlag:!0});var o=this.data.curPage;t.Kp.Req({url:"/group/threadlist",data:{cur_page:this.data.curPage,group_code:this.data.group_code,tag:this.data.tag},loadingText:a||"",callback:function(t){var a=t.list||[],s=e.data.threadList,d=t.total||0;a.length&&(s=s.concat(a)),(s.length>=d||!a.length)&&(i=!0),o++,e.setData({curPage:o,total:d,threadList:s,finished:i})},complete:function(){e.setData({loadFlag:!1})}})}}}}); 
 			}); 	require("pages/com/components/threadList/index.js");
 		__wxRoute = 'pages/com/select/select';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/com/select/select.js';	define("pages/com/select/select.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../348D6125C5DCED5F52EB0922CF1135D0.js"),t=getApp();Page({data:{indexList:[],letterData:{},scrollTop:0,needBack:!1,url:""},onLoad:function(e){var t=this;this.setData({url:e.url?decodeURIComponent(e.url):"",needBack:e.need_back>0}),wx.nextTick((function(){var e=t.selectComponent("#com-school-select");e&&e.schoolPrepare()}))},onShow:function(){wx.hideHomeButton&&wx.hideHomeButton()},getComList:function(){var e=this;t.Kp.Req({url:"/community/list",enableHttpDNS:!0,callback:function(t){var o=t.list||{},n=[];for(var a in o)n.push(a);e.setData({pageLoaded:!0,indexList:n,letterData:o})}})},schoolSelect:function(e){var t=this,o=e.detail||{},n=o.cid||"",a=o.school_name||"";n?wx.showModal({title:"提示",content:"一旦选定，您的账号将与 "+a+" 绑定，无法更改",success:function(e){e.confirm&&t.goToComPage(n)}}):wx.showToast({title:"社区未开通",icon:"none"})},goToComPage:function(o){if(this.data.needBack){var n=this.data.url;return n.indexOf("?")>-1?n+="&force_cid="+o:n+="?force_cid="+o,e.saveAliasName(o),void t.Kp.Req({url:"/community/v2/info",data:{cid:o},callback:function(){wx.redirectTo({url:n})}})}wx.reLaunch({url:"/pages/entry/entry?force_cid="+o})}}); 
 			}); 	require("pages/com/select/select.js");
 		__wxRoute = 'pages/com/change/change';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/com/change/change.js';	define("pages/com/change/change.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault").default,e=require("../../../@babel/runtime/helpers/objectSpread2"),i=t(require("../../../348D6125C5DCED5F52EB0922CF1135D0.js")),a=t(require("@vant/weapp/dialog/dialog")),o=getApp(),s=require("../../../2B4290E1C5DCED5F4D24F8E68AA135D0.js"),c=require("../../../B94652A1C5DCED5FDF203AA6A59135D0.js"),n=require("../../../F5C60176C5DCED5F93A06971514F25D0.js"),r=null;Page({options:{styleIsolation:"apply-shared"},data:{pageLoaded:!1,communityList:[],wd:"",searchLoading:!1,virtualList:[],switchPopupShow:!1,newSwitchPopupShow:!1,changeCount:0,hasFreeSwitch:!1,switchPreparing:!1,freeSwitching:!1,selectedCid:0,selectedId:0,selectedSchoolName:"",selectedCertStatus:"",payPrice:0,payPriceText:"",adUnitId:"",adSwitching:!1,paySwitching:!1},onLoad:function(t){this.getComList(),this.getSchoolList()},onUnload:function(){this.destroyRewardVideoAd(),this.searchListHelper&&(this.searchListHelper.clearObserver(),this.searchListHelper=null)},onShow:function(){wx.hideHomeButton&&wx.hideHomeButton()},getComList:function(){var t=this;o.Kp.Req({url:"/community/v3/changelist",loadingText:"加载中...",callback:function(e){var i={},a=e.community_list||[];a.forEach((function(t){t&&t.cid&&(i[t.cid]=t)})),t.communityMap=i,t.setData({communityList:a,changeCount:e.change_count||0,payPrice:e.pay_price,payPriceText:e.pay_price_text,adUnitId:e.adunit_id,pageLoaded:!0},(function(){t.initRewardVideoAd()}))}})},getSchoolList:function(){var t=this,e=c.STORAGE_CONFIG.SCHOOL_SELECT_LIST_CACHE,i=(c.get(e,null)||{}).list||{};Object.keys(i).length?this.schoolAll=i:(this.setData({searchLoading:!0}),o.Kp.Req({url:"/community/list",callback:function(i){var a=(i=i||{}).list||{};t.schoolAll=a,Object.keys(a).length&&c.set(e,i)},complete:function(){t.setData({searchLoading:!1})}}))},onSearchInput:function(t){var i=(t.detail||"").trim();if(this.setData({wd:i}),i){var a=o.Kp.Utils.filterChineseOnlyChar(i);if(a){var s=this.schoolAll||{},c=this.communityMap||{},n=[];for(var r in s)for(var h=s[r]||[],d=0;d<h.length;d++){var l=h[d].school_name||"",u=l.indexOf(a)>=0;if(!u)for(var w=0,p=0;p<l.length;p++)if(l[p]===a[w]&&++w>=a.length){u=!0;break}if(u){var f=c[h[d].cid];f?n.push(e(e({},h[d]),{},{in_change_list:!0,cert_status:f.cert_status||"",right_text:f.right_text||""})):n.push(h[d])}}n.sort((function(t,e){var i=t.right_text?1:0;return(e.right_text?1:0)-i})),this.setSearchResult(n)}else this.setSearchResult([])}else this.setSearchResult([])},onSearchCancel:function(){this.setData({wd:""}),this.setSearchResult([])},setSearchResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.searchListHelper?this.searchListHelper.upDateAll(t):(this.searchListHelper=new n(this,{pageSize:24,mainListKey:"virtualList"}),this.searchListHelper.init(t))},onReachBottom:function(){this.data.wd&&this.searchListHelper&&this.searchListHelper.onReachBottom()},onCertSelect:function(t){var e=t.currentTarget.dataset.item||{};this.selectCommunity(e)},selectCommunity:function(t){var e=this;t.cid&&("pass"!=t.cert_status?this.setData({selectedCid:t.cid,selectedId:t.school_id||0,selectedSchoolName:t.school_name||"",selectedCertStatus:t.cert_status||"",switchPopupShow:!1},(function(){e.prepareNewSwitchPopup()})):this.communityChangePost(t.cid))},onSearchSelect:function(t){var e=this,a=t.currentTarget.dataset.item||{};a.cid?a.in_change_list?this.selectCommunity(a):a.cid!=i.default.getAliasName()?this.setData({selectedCid:a.cid,selectedId:a.school_id||0,selectedSchoolName:a.school_name||"",selectedCertStatus:"",switchPopupShow:!1,newSwitchPopupShow:!1},(function(){e.prepareNewSwitchPopup()})):wx.showToast({title:"不能选择当前社区",icon:"none"}):wx.showToast({title:"社区未开通",icon:"none"})},prepareNewSwitchPopup:function(){var t=this;this.data.switchPreparing||(this.setData({switchPreparing:!0,newSwitchPopupShow:!1}),o.Kp.Req({url:"/community/switch/prepare",callback:function(e){t.setData({hasFreeSwitch:e.change_count>0,newSwitchPopupShow:!0})},complete:function(){t.setData({switchPreparing:!1})}}))},startFreeSwitch:function(){var t=this;if(!this.data.freeSwitching&&this.data.selectedCid){var e=this.data.selectedCid;this.setData({freeSwitching:!0}),o.Kp.Req({url:"/community/v2/userchange",data:{cid:e,use_card:1},callback:function(){t.goToComPage(e)},complete:function(){t.setData({freeSwitching:!1})}})}},bindSwitchPopupClose:function(){this.setData({switchPopupShow:!1})},bindNewSwitchPopupClose:function(){this.setData({newSwitchPopupShow:!1})},startCertSwitch:function(){this.data.selectedId&&(this.bindNewSwitchPopupClose(),this.goCertToOther(this.data.selectedId))},onUncertifiedSwitchSelected:function(t){var e=t.currentTarget.dataset.type||"";if("cert"!=e){if("pay"==e){if(this.data.hasFreeSwitch)return void this.startFreeSwitch();this.startPaySwitch()}}else this.startCertSwitch()},onOpenNewSwitchPopup:function(){var t=this;this.setData({switchPopupShow:!1},(function(){t.prepareNewSwitchPopup()}))},onOldSwitchSelected:function(t){var e=this,i=t.currentTarget.dataset.type||"";if("card"==i){if(0==this.data.changeCount)return void wx.showToast({title:"您的传送卡已用完",icon:"none"});a.default.alert({title:"提示",message:"成功进入".concat(this.data.selectedSchoolName,"将消耗一张传送卡，是否确认使用?"),closeOnPopstate:!0,showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"使用",confirmButtonColor:"#1eba9d"}).then((function(){e.communityChangePost(e.data.selectedCid,1)})).catch((function(){}))}"cert"==i&&this.goCertToOther(this.data.selectedId)},onNewSwitchSelected:function(t){if(!this.data.adSwitching&&!this.data.paySwitching){var e=t.currentTarget.dataset.type||"";"ad"==e&&this.startAdSwitch(),"pay"==e&&this.startPaySwitch()}},communityChangePost:function(t){var e=this,i={cid:t};1==(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)&&(i.use_card=1),o.Kp.Req({url:"/community/v2/userchange",data:i,callback:function(i){e.goToComPage(t)}})},goCertToOther:function(t){wx.navigateTo({url:"/pkgs/mine/usercert/usercert?school_id=".concat(t)})},goToComPage:function(t){s.clearAll(),wx.reLaunch({url:"/pages/entry/entry?force_cid="+t})},initRewardVideoAd:function(){var t=this;if(wx.createRewardedVideoAd){var e=this.data.adUnitId;e&&(r&&this._rewardAdUnitId===e||(this.destroyRewardVideoAd(),r=wx.createRewardedVideoAd({adUnitId:e}),this._rewardAdUnitId=e,this._videoAdLoadCb=function(){},this._videoAdErrorCb=function(e){console.error("激励视频广告加载失败",e),t.data.adSwitching&&(wx.showToast({title:"广告加载失败，请稍后再试",icon:"none"}),t.resetAdSwitchState())},this._videoAdCloseCb=function(e){t.handleVideoAdClose(e)},r.onLoad(this._videoAdLoadCb),r.onError(this._videoAdErrorCb),r.onClose(this._videoAdCloseCb)))}},destroyRewardVideoAd:function(){r&&(this._videoAdLoadCb&&r.offLoad&&r.offLoad(this._videoAdLoadCb),this._videoAdErrorCb&&r.offError&&r.offError(this._videoAdErrorCb),this._videoAdCloseCb&&r.offClose&&r.offClose(this._videoAdCloseCb),this._videoAdLoadCb=null,this._videoAdErrorCb=null,this._videoAdCloseCb=null,this._rewardAdUnitId="",r=null)},startAdSwitch:function(){var t=this;!this.data.adSwitching&&this.data.selectedCid&&(this.setData({adSwitching:!0}),o.Kp.Req({url:"/community/switch/mpadstart",data:{cid:this.data.selectedCid},callback:function(e){var i=e.order_id||0;t._adOrderId=i,t.showRewardVideoAd()},errorCallback:function(){t.resetAdSwitchState()},fail:function(){t.resetAdSwitchState()}}))},showRewardVideoAd:function(){var t=this;if(!r)return wx.showToast({title:"广告暂不可用，请稍后再试",icon:"none"}),void this.resetAdSwitchState();r.show().catch((function(){r.load().then((function(){return r.show()})).catch((function(e){console.error("激励视频广告显示失败",e),wx.showToast({title:"当日免费切换机会已用完",icon:"none"}),t.resetAdSwitchState()}))}))},handleVideoAdClose:function(t){var e=this;if(t&&t.isEnded){var i=this.data.selectedCid;i?(wx.showToast({title:"正在前往"+this.data.selectedSchoolName,icon:"none"}),o.Kp.Req({url:"/community/switch/mpadfinish",data:{order_id:this._adOrderId},success:function(){setTimeout((function(){e.goToComPage(i)}),1500)},complete:function(){e.resetAdSwitchState()}})):this.resetAdSwitchState()}else a.default.confirm({title:"提示",message:"完整观看广告后才能完成切换",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"继续观看",cancelButtonColor:"#969799",confirmButtonColor:"#1eba9d"}).then((function(){e.showRewardVideoAd()})).catch((function(){e.resetAdSwitchState()}))},resetAdSwitchState:function(){this._adOrderId=0,this.setData({adSwitching:!1})},startPaySwitch:function(){var t=this;if(!this.data.paySwitching&&this.data.selectedCid){this.setData({paySwitching:!0});var e=this.data.selectedCid,i=this.selectComponent("#pay-select");if(!i)return wx.showToast({title:"支付组件加载失败，请稍后重试",icon:"none"}),void this.resetPaySwitchState();i.pay({scene:"community_switch",createUrl:"/community/switch/ordercreate",checkUrl:"/community/switch/ordercheck",payPrice:this.data.payPrice,data:{cid:e},success:function(){t.resetPaySwitchState(),wx.showToast({title:"正在前往"+t.data.selectedSchoolName,icon:"none"}),setTimeout((function(){t.goToComPage(e)}),1500)},cancel:function(){t.resetPaySwitchState()},fail:function(e){console.log("切换社区支付失败",e),t.resetPaySwitchState()}})}},resetPaySwitchState:function(){this.setData({paySwitching:!1})}}); 
 			}); 	require("pages/com/change/change.js");
 		__wxRoute = 'pages/com/group/list/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/com/group/list/list.js';	define("pages/com/group/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({options:{styleIsolation:"apply-shared"},data:{active:"time",group_code:"",from:"",cid:"",sticky:!0},onLoad:function(t){var i=(t||{}).group_code,o=void 0===i?"":i;this.setData({group_code:o}),this.getGroupInfo(o)},onShow:function(){},getGroupInfo:function(i){var o=this;t.Kp.Req({url:"/group/info",method:"post",data:{group_code:i},callback:function(t){var i=(t.group_info||{}).group_name||"赞噢校园集市";setTimeout((function(){wx.setNavigationBarTitle({title:i})}),200),wx.nextTick((function(){o.initList(o.data.active)}))}})},onChange:function(t){var i=t.detail.name;this.setData({active:i}),this.initList(i)},initList:function(t){var i=this.selectComponent("#thread-list-"+t);i&&i.initList()},onReachBottom:function(){var t=this.selectComponent("#thread-list-"+this.data.active);t&&t.getList()}}); 
 			}); 	require("pages/com/group/list/list.js");
 		__wxRoute = 'pages/com/group/info/info';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/com/group/info/info.js';	define("pages/com/group/info/info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../@babel/runtime/helpers/interopRequireDefault").default,t=require("../../../../@babel/runtime/helpers/objectSpread2"),n=e(require("../../../../2B183D93C5DCED5F4D7E559467B135D0.js")),o=e(require("@vant/weapp/dialog/dialog")),a=getApp(),i=(require("../../../../14EA9414C5DCED5F728CFC135C8135D0.js"),require("../../../../600A5D42C5DCED5F066C35456D5135D0.js")),r=a.Const.IMG_STYLE;Page({data:{APP_CONST:a.Const,aliasName:"",communityName:"校园集市",group_code:"",hotOpen:!1,threadShow:!1,emptyShow:!1,ignoreCover:!1,from:"",threadId:0,threadItem:{},bannerList:[],commentId:0,postPrice:0,reportTypeList:[],topConf:[],contactView:!1,isSub:!1,subTip:"获取联系方式，请先关注公众号",commentMineInfo:{},threadSign:"",commentConf:{needCommentShowCert:!1,commentForbid:!1,commentForbidTip:"",commentCertValid:!0,noCertCommentOpen:!1,uSwitchOpen:!1,commentDislikeShow:!0,commentDislikeNumShow:!1},queryCommentId:0,isAdmin:!1,userNotify:"",emptyTip:"帖子不存在或已删除",imgList:[],contactPopupShow:!1,jumpShowType:"one",autoplay:!0,circular:!0,interval:3e3,duration:1e3,activeColor:a.GData.baseColor,threadDislikeShow:!1,blackOpen:!1,isBlack:!1},onLoad:function(e){var t=this;this.setData({aliasName:e.cid||"",communityName:a.GData.communityName,threadId:e.id||0,queryCommentId:e.comment_id||0,ignoreCover:e.ignore_cover>0,group_code:e.group_code||"",from:"group",APP_CONST:a.Const}),wx.nextTick((function(){t.getThreadInfo()})),i.on("comment-identity-change",this.data.threadId+"",this.commentIdentityChange,this)},onUnload:function(){i.off("comment-identity-change",this.data.threadId+"",this.commentIdentityChange,this)},onShow:function(){if(a.GData.ignoreOnShow)return console.log("ignore on show"),void a.setGData({ignoreOnShow:!1})},infoReload:function(){((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail||{}).ignore_cover&&this.setData({ignoreCover:!0}),this.getThreadInfo()},onPullDownRefresh:function(){var e=this;wx.stopPullDownRefresh(),wx.showLoading({title:"加载中"}),setTimeout((function(){e.getThreadInfo()}),800)},getThreadInfo:function(){var e=this,t={need_community:!0,id:this.data.threadId,from:this.data.from};(this.data.ignoreCover||this.data.isBlack)&&(t.ignore_cover=1),a.Kp.Req({url:"/thread/info",aliasName:this.data.aliasName,data:t,callback:function(t){if(0!=t.is_show){var o=t.report_type_map||{},i=[];for(var s in o)i.push({label:o[s],value:s});var c=t.detail||{},d=c.img_paths||[],m=[];d.forEach((function(e){m.push(a.Const.IMG_HOST+e+r.common)})),t.mine_info&&t.mine_info.user_info&&t.mine_info.user_info.headimgurl?e.setData({commentMineInfo:t.mine_info||{}}):n.default.getCommentMineInfo({thread_id:e.data.threadId,from:"detail"}).then((function(t){e.setData({commentMineInfo:t||{}})})).catch((function(){}));var u={needCommentShowCert:t.need_comment_show_cert||!1,commentForbid:t.comment_forbid||!1,commentForbidTip:t.comment_forbid_tip||"",commentCertValid:t.comment_cert_valid||!1,noCertCommentOpen:t.no_cert_comment_open||!1,commentDislikeShow:t.comment_dislike_open||!1,commentDislikeNumShow:t.comment_dislikenum_open||!1};e.setData({threadSign:t.t_sign||"",threadItem:c,bannerList:t.banner_list||[],reportTypeList:i,topConf:t.top_conf||[],isSub:t.is_sub||!1,subTip:t.sub_tip||"",isAdmin:t.is_admin||!1,userNotify:t.user_notify||"",imgList:m,threadDislikeShow:t.thread_dislike_open||!1,blackOpen:t.black_open||!1,isBlack:t.is_black||!1,commentConf:u}),e.data.threadShow?e.refreshCommentList():(e.setData({threadShow:!0}),e.viewStatReq(),c.need_pay&&(e.setData({postPrice:parseInt(c.post_price,10)}),e.needPayOpen()),c.thread_need_cert)}else e.setData({emptyShow:!0,emptyTip:t.empty_tip||"帖子不存在或已删除"})},errorCallback:function(t){wx.showModal({title:"",content:t.errmsg,showCancel:!1,success:function(t){e.pageBack()}})},complete:function(){wx.hideLoading()}})},commentIdentityChange:function(e,n){var o=this.data.commentMineInfo.user_info||{};this.setData({commentMineInfo:t(t({},this.data.commentMineInfo),{},{user_info:t(t({},o),{},{use_anon:n.use_anon||!1})})})},onPhoneVerified:function(){this.setData({commentMineInfo:t(t({},this.data.commentMineInfo||{}),{},{phone_need:!1})})},bannerTapCb:function(e){var t=e.currentTarget.dataset.item||{};t&&t.link_url&&t.link_url.length>10&&wx.navigateTo({url:"/pages/webview/common/common?url="+encodeURIComponent(t.link_url)})},refreshCommentList:function(){var e=this.selectComponent("#commentComRef");e&&e.updateList()},onReply:function(){var e=this.selectComponent("#commentComRef");e&&e.onReply({})},viewStatReq:function(){a.Kp.Req({url:"/thread/stat",data:{sign:this.data.threadItem.sign},success:function(e){}})},contactViewSet:function(){0==this.data.contactView&&this.setData({contactView:!0})},goToPageUserCert:function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})},bindCommentCertOpen:function(){this.openCertDialog("您需要先完成身份认证后，才可以评论")},openCertDialog:function(e){o.default.alert({context:this,title:"提示",message:e||"您需要先完成身份认证",showCancelButton:!0,cancelButtonText:"关闭",confirmButtonText:"立即认证"}).then((function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})})).catch((function(){}))},goToPageIndex:function(){a.setGData({indexNeedNew:!0}),wx.switchTab({url:"/pages/index/index"})},helpPay:function(){var e=this;this.openPayDialog("help",(function(){e.goToPageIndex()}))},actionPayOpen:function(){var e=this;this.openPayDialog("info",(function(){e.goToPageIndex()}))},needPayOpen:function(){var e=this;this.openPayDialog("need-pay",(function(){e.goToPageIndex()}),(function(){e.goToPageIndex()}))},openPayDialog:function(e,t,n){this.selectComponent("#com-thread-pay").openPayDialog(e,t,n)},onImgPreview:function(e){var t=e.currentTarget.dataset.index,n=this.data.imgList,o=n[t]||n[0],i=10==this.data.threadItem.img_status;a.previewImage({showmenu:i,current:o,urls:n})},contactPopupClose:function(){this.setData({contactPopupShow:!1})},contactPopupOpen:function(){this.setData({contactPopupShow:!0})},pageBack:function(){var e=getCurrentPages();console.log(e),e&&1==e.length?wx.switchTab({url:"/pages/index/index"}):wx.navigateBack()},addBlack:function(){var e=this,t=!(!this.data.threadItem||!this.data.threadItem.is_anon)?"拉黑后，我们将为您屏蔽对方的内容":"拉黑后，我们将为您屏蔽对方的内容。您可以在 个人中心 — 黑名单 中取消拉黑。";o.default.confirm({confirmButtonColor:"#ff3d3d",title:"拉黑用户",message:t}).then((function(){a.Kp.Req({url:"/user/blackadd",method:"post",data:{thread_id:e.data.threadItem.thread_id},message:"已拉黑",callback:function(){setTimeout((function(){e.infoReload({detail:{ignore_cover:!0}})}),500)}})})).catch((function(){}))},cancelBlack:function(){var e=this;o.default.confirm({confirmButtonColor:"#1eba9d",title:"取消拉黑用户"}).then((function(){a.Kp.Req({url:"/user/blackremove",method:"post",data:{thread_id:e.data.threadItem.thread_id},message:"已取消拉黑",callback:function(){setTimeout((function(){e.getThreadInfo()}),500)}})})).catch((function(){}))},bindReportChange:function(e){var t=e.detail.value,n=this.data.reportTypeList[t];a.Kp.Req({url:"/thread/report",data:{id:this.data.threadId,report_type:n.value},loadingText:"提交中...",message:"举报成功",callback:function(){}})},bindCopyPhone:function(){wx.setClipboardData({data:this.data.threadItem.contact_phone,success:function(e){wx.showToast({title:"手机号已复制",icon:"success"})}})},bindCopyWx:function(){wx.setClipboardData({data:this.data.threadItem.contact_wx,success:function(e){wx.showToast({title:"微信号已复制",icon:"success"})}})},bindCopyQQ:function(){wx.setClipboardData({data:this.data.threadItem.contact_qq,success:function(e){wx.showToast({title:"QQ号已复制",icon:"success"})}})},goToReportPage:function(){wx.navigateTo({url:"/pages/report/report?thread_id="+this.data.threadId+"&cid=".concat(a.getCurAliasName())})},bindPhoneCall:function(){wx.makePhoneCall({phoneNumber:this.data.threadItem.contact_phone})},subCheck:function(e){console.log(e)},subLoad:function(e){console.log(e)},subError:function(e){console.log(e)},openPostDialog:function(){this.selectComponent("#post-cate-dialog").openDialog()},onCateSelect:function(e){var t=e.detail.id||0;wx.navigateTo({url:"/pkgs/post/local/local?id="+t})},onShareAppMessage:function(e){if(this.data.emptyShow)return a.getShareOption();var t="/pages/com/group/info/info?id="+this.data.threadItem.thread_id,n=this.data.threadItem.title;return a.getShareOption(t,n,!0)},updateLikeData:function(e){var t=this.data.threadItem;console.log(e),e.detail.curLiked?(t.like_has=!0,t.dislike_has=!1):e.detail.curDisliked?(t.dislike_has=!0,t.like_has=!1):(t.dislike_has=!1,t.like_has=!1),t.like_num=e.detail.curLikeNum,t.dislike_num=e.detail.curDislikeNum,this.setData({threadItem:t})}}); 
 			}); 	require("pages/com/group/info/info.js");
 