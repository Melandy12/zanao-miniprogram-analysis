}/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx0:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
function gz$gwx0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_1
__WXML_GLOBAL__.ops_cached.$gwx0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'expOpen']],[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onCatchTouchMove'])
Z([3,'onClose'])
Z([3,'exp-info-popover'])
Z([a,[3,'bottom: '],[[6],[[7],[3,'positionInfo']],[3,'bottom']],[3,'; top: '],[[6],[[7],[3,'positionInfo']],[3,'top']],[3,';']])
Z(z[2])
Z([3,'backgroundColor:rgba(0,0,0,0.53)'])
Z([[7],[3,'popoverShow']])
Z(z[0])
Z([3,'popup-content-wrapper'])
Z([3,'expPopupContent'])
Z([a,[3,'user-exp-wrapper '],[[2,'?:'],[[7],[3,'arrowCornerSide']],[[2,'+'],[1,'arrow-corner--'],[[7],[3,'arrowCornerSide']]],[1,'']]])
Z([[6],[[7],[3,'userInfo']],[3,'reg_days']])
Z([[2,'>'],[[6],[[7],[3,'userInfo']],[3,'today_active_exp']],[1,0]])
Z([a,[3,'progress-area '],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'userInfo']],[3,'user_today_exp']],[1,0]],[1,'has-today'],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'userInfo']],[3,'user_exp']],[1,0]],[1,'has-exp'],[1,'']]]])
Z([3,'l-num'])
Z([a,[3,'left:'],[[7],[3,'percent']],[3,'%']])
Z([[2,'>'],[[6],[[7],[3,'userInfo']],[3,'user_today_exp']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'userInfo']],[3,'user_exp']],[1,0]])
Z([3,'#D9D9D9'])
Z([3,'linear-gradient(90deg, #FF6F00 0%, #FFDA9F 100%)'])
Z([3,'l-progress'])
Z(z[15][2])
Z([3,'#f1875e'])
Z([3,''])
Z([1,false])
Z([3,'arrow-icon'])
Z([3,'arrow'])
Z([[7],[3,'showActions']])
Z([3,'user-action-section'])
Z([[7],[3,'showRewardSelect']])
Z([[7],[3,'showChatEntry']])
Z([3,'popover-chat-entry'])
Z([[7],[3,'commentId']])
Z([3,'发起私聊'])
Z([3,'mx'])
Z([[7],[3,'threadId']])
Z([3,'popover'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
function gz$gwx0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_3)return __WXML_GLOBAL__.ops_cached.$gwx0_3
__WXML_GLOBAL__.ops_cached.$gwx0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'component-form-card custom-class'])
Z([3,'inner-round-icon'])
Z([3,'#FFFFFF'])
Z([3,'inner-round'])
Z([3,'17'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_3);return __WXML_GLOBAL__.ops_cached.$gwx0_3
}
function gz$gwx0_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_4)return __WXML_GLOBAL__.ops_cached.$gwx0_4
__WXML_GLOBAL__.ops_cached.$gwx0_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'imgList']],[[6],[[7],[3,'imgList']],[3,'length']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_4);return __WXML_GLOBAL__.ops_cached.$gwx0_4
}
function gz$gwx0_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_5)return __WXML_GLOBAL__.ops_cached.$gwx0_5
__WXML_GLOBAL__.ops_cached.$gwx0_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'limit-content'])
Z([[2,'=='],[[6],[[7],[3,'limitConf']],[3,'type']],[1,'985']])
Z([[6],[[7],[3,'limitConf']],[3,'tip']])
Z([[6],[[7],[3,'limitConf']],[3,'btn_show']])
Z([3,'onBtnTap'])
Z([3,'#536CFF'])
Z([3,'btn-to-cert'])
Z([3,'btn-arrow'])
Z([3,'arrow'])
Z([[2,'=='],[[6],[[7],[3,'limitConf']],[3,'type']],[1,'femail']])
Z(z[2])
Z(z[3])
Z(z[4])
Z([3,'#F190B7'])
Z(z[6])
Z(z[7])
Z(z[8])
Z([3,'limit-tip'])
Z([3,'icon-lock'])
Z([3,'lock'])
Z(z[2])
Z(z[3])
Z(z[4])
Z([3,'#1eba9d'])
Z(z[6])
Z(z[7])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx0_5);return __WXML_GLOBAL__.ops_cached.$gwx0_5
}
function gz$gwx0_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_6)return __WXML_GLOBAL__.ops_cached.$gwx0_6
__WXML_GLOBAL__.ops_cached.$gwx0_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_6);return __WXML_GLOBAL__.ops_cached.$gwx0_6
}
function gz$gwx0_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_7)return __WXML_GLOBAL__.ops_cached.$gwx0_7
__WXML_GLOBAL__.ops_cached.$gwx0_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onGotoTagIndex'])
Z([3,'tag-item'])
Z([[6],[[7],[3,'item']],[3,'sub_title']])
Z([a,[3,'right-content '],[[2,'?:'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'item']],[3,'right_text']]],[[2,'=='],[[7],[3,'type']],[1,'more']]],[1,'right-content-center'],[1,'']]])
Z([[2,'||'],[[2,'=='],[[7],[3,'type']],[1,'follow']],[[2,'&&'],[[2,'=='],[[7],[3,'type']],[1,'hot']],[[7],[3,'showCancelEllipsis']]]])
Z([3,'onOpenAction'])
Z([3,'action-ellipsis'])
Z([[7],[3,'item']])
Z([3,'ellipsis'])
Z([[2,'||'],[[2,'==='],[[7],[3,'type']],[1,'more']],[[2,'=='],[[7],[3,'type']],[1,'hot']]])
Z([[2,'!'],[[7],[3,'isFollow']]])
Z([3,'onFollowChange'])
Z([3,'#00baad'])
Z([3,'follow-btn'])
Z([[7],[3,'followLoading']])
Z([3,'26rpx'])
Z([3,'加入'])
Z([3,'spinner'])
Z([3,'primary'])
Z([[7],[3,'isFollow']])
Z(z[11])
Z([3,'follow-btn followed-btn'])
Z(z[14])
Z(z[15])
Z([3,'已加入'])
Z(z[17])
Z([3,'default'])
Z([3,'icon-success'])
Z([3,'success'])
Z([3,'11'])
Z([[6],[[7],[3,'item']],[3,'right_text']])
Z([[7],[3,'actionList']])
Z([3,'onCloseAction'])
Z(z[32])
Z([3,'onActionSelect'])
Z([3,'取消'])
Z([[7],[3,'actionShow']])
Z([3,'10010'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_7);return __WXML_GLOBAL__.ops_cached.$gwx0_7
}
function gz$gwx0_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_8)return __WXML_GLOBAL__.ops_cached.$gwx0_8
__WXML_GLOBAL__.ops_cached.$gwx0_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isBeauty']])
Z([3,'component-post-bar_beauty custom-class'])
Z([3,'btn-box-icon'])
Z([3,'76rpx'])
Z([3,'mx-school-btn'])
Z([3,'140rpx'])
Z([3,'btn-left-icon'])
Z([3,'plus'])
Z([3,'19'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_8);return __WXML_GLOBAL__.ops_cached.$gwx0_8
}
function gz$gwx0_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_9)return __WXML_GLOBAL__.ops_cached.$gwx0_9
__WXML_GLOBAL__.ops_cached.$gwx0_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'bindOpenAction'])
Z([3,'showicon'])
Z([[7],[3,'shareColor']])
Z([3,'tag-index-share'])
Z([[7],[3,'iconSize']])
Z([3,'bindActionClose'])
Z([3,'bindActionSelect'])
Z([[7],[3,'shareDuration']])
Z([[7],[3,'shareAction']])
Z([[7],[3,'shareActionShow']])
Z([3,'立即分享给好友'])
Z([[2,'&&'],[[7],[3,'isLoading']],[[2,'!'],[[7],[3,'imageurl']]]])
Z([3,'killdialog'])
Z([3,'wrapper'])
Z([3,'onImgErr'])
Z([3,'onImgOK'])
Z([[7],[3,'template']])
Z([3,'5'])
Z([[2,'==='],[[7],[3,'imageurl']],[1,'']])
Z([[2,'&&'],[[7],[3,'isShowDom']],[[2,'!'],[[7],[3,'imageurl']]]])
Z([3,'main_box'])
Z([[6],[[7],[3,'tagInfo']],[3,'thread_count']])
Z([[7],[3,'showEllipsis']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_9);return __WXML_GLOBAL__.ops_cached.$gwx0_9
}
function gz$gwx0_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_10)return __WXML_GLOBAL__.ops_cached.$gwx0_10
__WXML_GLOBAL__.ops_cached.$gwx0_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tag-info-wrapper__beauty'])
Z([3,'top-img-wrapper'])
Z([[6],[[7],[3,'tagInfo']],[3,'top_bg_img_url']])
Z([[2,'!'],[[7],[3,'statHide']]])
Z([3,'tag-info-stat'])
Z([[6],[[7],[3,'tagInfo']],[3,'view_count']])
Z([[6],[[7],[3,'tagInfo']],[3,'user_count']])
Z([[6],[[7],[3,'tagInfo']],[3,'like_count']])
Z([[2,'&&'],[[7],[3,'bannerShow']],[[6],[[7],[3,'tagInfo']],[3,'banner_img_url']]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_10);return __WXML_GLOBAL__.ops_cached.$gwx0_10
}
function gz$gwx0_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_11)return __WXML_GLOBAL__.ops_cached.$gwx0_11
__WXML_GLOBAL__.ops_cached.$gwx0_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tag-info-wrapper__default'])
Z([3,'#000000'])
Z([3,'group-icon'])
Z([3,'mx_group_icon'])
Z([3,'24'])
Z([[2,'!'],[[7],[3,'statHide']]])
Z([3,'count-stat'])
Z([[6],[[7],[3,'tagInfo']],[3,'view_count']])
Z([[6],[[7],[3,'tagInfo']],[3,'user_count']])
Z(z[8])
Z([[6],[[7],[3,'tagInfo']],[3,'thread_count']])
Z(z[10])
Z([[6],[[7],[3,'tagInfo']],[3,'banner_img_url']])
Z([[2,'!'],[[6],[[7],[3,'tagInfo']],[3,'view_limit']]])
Z([3,'onGoSearch'])
Z([3,'search-btn'])
Z([3,'#333333'])
Z([3,'search'])
Z([3,'20'])
Z([3,'action-item'])
Z(z[1])
Z([3,'20rpx'])
Z(z[18])
Z([[7],[3,'tagId']])
Z([[7],[3,'tagInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_11);return __WXML_GLOBAL__.ops_cached.$gwx0_11
}
function gz$gwx0_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_12)return __WXML_GLOBAL__.ops_cached.$gwx0_12
__WXML_GLOBAL__.ops_cached.$gwx0_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'component-tag-info'])
Z([[2,'=='],[[6],[[7],[3,'tagInfo']],[3,'style']],[1,'beauty']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_12);return __WXML_GLOBAL__.ops_cached.$gwx0_12
}
function gz$gwx0_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_13)return __WXML_GLOBAL__.ops_cached.$gwx0_13
__WXML_GLOBAL__.ops_cached.$gwx0_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'common-thread-item-new'])
Z([[6],[[7],[3,'threadItem']],[3,'thread_id']])
Z([[6],[[7],[3,'threadItem']],[3,'loading']])
Z([3,'skeleton-box'])
Z(z[2])
Z([3,'2'])
Z([3,'com-thread-wrapper'])
Z([3,'goToPage'])
Z([3,'user-section'])
Z([3,'u-info-sec'])
Z([3,'left-top-area'])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'is_forbid']],[1,1]])
Z([[6],[[7],[3,'threadItem']],[3,'medal_exp_2023']])
Z(z[12])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'user_level']],[1,0]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'user_level_title']],[1,'']])
Z([[2,'>'],[[6],[[7],[3,'threadItem']],[3,'top_time']],[1,0]])
Z([3,'left-bottom-area'])
Z([[6],[[7],[3,'threadItem']],[3,'school_name']])
Z([[2,'!='],[[7],[3,'sortType']],[1,'comment']])
Z([[6],[[7],[3,'threadItem']],[3,'from_app']])
Z([[2,'||'],[[2,'||'],[[6],[[7],[3,'threadItem']],[3,'check_fail']],[[6],[[7],[3,'threadItem']],[3,'need_pay']]],[[6],[[7],[3,'threadItem']],[3,'need_check']]])
Z([3,'right-sec'])
Z([[6],[[7],[3,'threadItem']],[3,'check_fail']])
Z([3,'wait-icon'])
Z([3,'warning-o'])
Z([[6],[[7],[3,'threadItem']],[3,'need_pay']])
Z(z[24])
Z([3,'clock-o'])
Z([[6],[[7],[3,'threadItem']],[3,'need_check']])
Z(z[24])
Z(z[28])
Z([[2,'=='],[[7],[3,'sortType']],[1,'comment']])
Z(z[22])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'time_show']],[1,'comment']])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'time_show']],[1,'post']])
Z([3,'detail-section'])
Z([[6],[[7],[3,'threadItem']],[3,'need_cert']])
Z([3,'bindOpenCertDialog'])
Z([3,'d-cert-tip'])
Z([3,'icon-lock c-sub'])
Z([3,'lock'])
Z([[6],[[7],[3,'threadItem']],[3,'is_cover']])
Z(z[7])
Z([[7],[3,'isRichText']])
Z([[2,'>'],[[6],[[7],[3,'threadItem']],[3,'reward_price']],[1,0]])
Z([3,'红包'])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'reward_price']],[1,0]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'reward_suffix']],[1,'']])
Z([[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'img_paths']],[[6],[[6],[[7],[3,'threadItem']],[3,'img_paths']],[3,'length']]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'img_paths']],[[4],[[5]]]])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'img_status']],[1,10]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'actionDisabled']]],[[7],[3,'commentList']]],[[6],[[7],[3,'commentList']],[3,'length']]],[[2,'!='],[[7],[3,'from']],[1,'search']]])
Z([3,'commentItem'])
Z([[7],[3,'commentList']])
Z([3,'comment_id'])
Z([3,'comment-item'])
Z([3,'t-list-like'])
Z([[6],[[7],[3,'commentItem']],[3,'comment_id']])
Z([3,'28rpx'])
Z([3,'16'])
Z([1,true])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'like_num']],[1,0]])
Z([3,''])
Z([[7],[3,'actionDisabled']])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'like_need_cert']],[1,false]])
Z(z[61])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'l_has']],[1,false]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'thread_id']],[1,0]])
Z([[6],[[7],[3,'commentItem']],[3,'is_clip']])
Z(z[7])
Z([3,'footer-section'])
Z([3,'d-o-right'])
Z([[7],[3,'isFep']])
Z([3,'thread'])
Z(z[64])
Z(z[59])
Z(z[61])
Z([3,'like-o'])
Z([3,'like'])
Z(z[60])
Z(z[61])
Z([1,false])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'l_count']],[1,0]])
Z(z[63])
Z(z[64])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'like_need_cert']],[1,false]])
Z(z[61])
Z([[6],[[7],[3,'threadItem']],[3,'l_has']])
Z([3,'#E85A57'])
Z(z[68])
Z(z[74])
Z(z[64])
Z(z[59])
Z([3,'18'])
Z(z[61])
Z(z[83])
Z(z[64])
Z(z[61])
Z(z[63])
Z(z[88])
Z(z[68])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
Z([3,'10010'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_13);return __WXML_GLOBAL__.ops_cached.$gwx0_13
}
function gz$gwx0_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_14)return __WXML_GLOBAL__.ops_cached.$gwx0_14
__WXML_GLOBAL__.ops_cached.$gwx0_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goToPage'])
Z([3,'me-waterfall-item'])
Z([a,[3,'top:'],[[7],[3,'top']],[3,'px;'],[[2,'?:'],[[2,'>'],[[7],[3,'colIndex']],[1,0]],[1,'right:0'],[1,'left:0']],[3,';;;width:'],[[7],[3,'width']],[3,'px;visibility:'],[[7],[3,'visibility']]])
Z([[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'img_info']],[[6],[[6],[[7],[3,'threadItem']],[3,'img_info']],[3,'prv_url']]])
Z([3,'wf-top-sec--img wf-top-sec'])
Z([[2,'>'],[[6],[[7],[3,'threadItem']],[3,'reward_price']],[1,0]])
Z([3,'reward-label--img'])
Z([3,''])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'reward_price']],[1,0]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'reward_suffix']],[1,'']])
Z([[6],[[7],[3,'threadItem']],[3,'title']])
Z([3,'wf-top-sec--text wf-top-sec'])
Z([[2,'?:'],[[2,'>'],[[6],[[7],[3,'threadItem']],[3,'reward_price']],[1,0]],[1,'padding-top: 50rpx'],[1,'']])
Z(z[5])
Z([3,'reward-label--text'])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[6],[[7],[3,'threadItem']],[3,'content']])
Z([a,[3,'bottom-sec '],[[2,'?:'],[[7],[3,'isAnonTag']],[1,'bottom-sec--anon'],[1,'']]])
Z([[7],[3,'isAnonTag']])
Z([3,'l-sec l-sec-time'])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'time_show']],[1,'comment']])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'time_show']],[1,'post']])
Z([[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'is_mine']],[[6],[[7],[3,'threadItem']],[3,'is_anon']]])
Z([3,'like-sec'])
Z([[7],[3,'isFep']])
Z([3,'thread'])
Z([3,'#666'])
Z([1,false])
Z([3,'24rpx'])
Z([1,true])
Z([3,'like-o'])
Z([3,'like'])
Z([3,'14'])
Z(z[31])
Z(z[29])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'l_count']],[1,0]])
Z(z[7])
Z(z[29])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'like_need_cert']],[1,false]])
Z(z[31])
Z([[6],[[7],[3,'threadItem']],[3,'l_has']])
Z([3,'#E85A57'])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'thread_id']],[1,0]])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[30])
Z(z[34])
Z(z[31])
Z(z[37])
Z(z[29])
Z(z[31])
Z(z[7])
Z(z[42])
Z(z[44])
})(__WXML_GLOBAL__.ops_cached.$gwx0_14);return __WXML_GLOBAL__.ops_cached.$gwx0_14
}
function gz$gwx0_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_15)return __WXML_GLOBAL__.ops_cached.$gwx0_15
__WXML_GLOBAL__.ops_cached.$gwx0_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_15);return __WXML_GLOBAL__.ops_cached.$gwx0_15
}
function gz$gwx0_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_16)return __WXML_GLOBAL__.ops_cached.$gwx0_16
__WXML_GLOBAL__.ops_cached.$gwx0_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showBar']])
Z([3,'onShowAction'])
Z([3,'action-btn bg-base action-btn-text'])
Z([3,'icon'])
Z([3,'edit'])
Z([3,'48rpx'])
Z([[7],[3,'actions']])
Z([3,'onCloseAction'])
Z(z[7])
Z([3,'onSelect'])
Z([3,'取消'])
Z([1,true])
Z([[7],[3,'actionShow']])
Z([3,'van-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_16);return __WXML_GLOBAL__.ops_cached.$gwx0_16
}
function gz$gwx0_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_17)return __WXML_GLOBAL__.ops_cached.$gwx0_17
__WXML_GLOBAL__.ops_cached.$gwx0_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'component-bottom-input '],[[2,'?:'],[[7],[3,'isIos']],[1,'ios-bottom-input'],[1,'']]])
Z([3,'comment-content-wrapper'])
Z([[7],[3,'tagId']])
Z([3,'goToPage'])
Z([3,'tag-home-btn-box'])
Z([3,'home'])
Z([3,'#000000'])
Z([3,'tag-icon'])
Z([3,'mx_group_icon'])
Z([3,'24'])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'thread_id']],[1,'']])
Z([[7],[3,'mineInfo']])
Z([3,'onComment'])
Z([3,'comment-input-box'])
Z([3,'#3a3a3a'])
Z([3,'comment-input-icon'])
Z([3,'input_edit'])
Z([3,'17'])
Z([3,'right-action-wrapper'])
Z([3,'info-share'])
Z([3,'custom-share-box'])
Z(z[6])
Z([3,'20rpx'])
Z(z[9])
Z(z[6])
Z([[7],[3,'threadItem']])
Z([[2,'!'],[[6],[[7],[3,'threadItem']],[3,'is_mine']]])
Z([3,'onMark'])
Z(z[6])
Z([3,'custom-mark-box'])
Z([3,'20'])
Z(z[9])
Z([[6],[[7],[3,'threadItem']],[3,'mark_has']])
Z([[6],[[7],[3,'threadItem']],[3,'mark_num']])
Z([[6],[[7],[3,'threadItem']],[3,'thread_id']])
Z([3,'onLike'])
Z([3,'thread'])
Z(z[6])
Z([3,'custom-like-box'])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'dislike_num']],[1,0]])
Z([1,false])
Z(z[22])
Z([[2,'?:'],[[6],[[7],[3,'threadItem']],[3,'is_fep']],[1,'like-o'],[1,'liked-o']])
Z([[2,'?:'],[[6],[[7],[3,'threadItem']],[3,'is_fep']],[1,'like'],[1,'liked']])
Z(z[9])
Z([[2,'!'],[[6],[[7],[3,'threadItem']],[3,'is_fep']]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'like_num']],[1,0]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'like_text']],[1,'赞噢']])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'like_need_cert']],[1,false]])
Z([1,true])
Z([[6],[[7],[3,'threadItem']],[3,'like_has']])
Z(z[6])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'thread_id']],[1,0]])
Z([[7],[3,'needSelectSchool']])
Z([3,'onSchoolSelectChoose'])
Z([[7],[3,'schoolSugSelectShow']])
Z([3,'请选择您所在学校'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_17);return __WXML_GLOBAL__.ops_cached.$gwx0_17
}
function gz$gwx0_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_18)return __WXML_GLOBAL__.ops_cached.$gwx0_18
__WXML_GLOBAL__.ops_cached.$gwx0_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'component-comment-list'])
Z([3,'bindSortChange'])
Z([3,'onSortLocalLoaded'])
Z([3,'bindOnlyAuthorChange'])
Z([3,'bindOnlyMarkChange'])
Z([3,'setVirtualList'])
Z([[7],[3,'total']])
Z([[2,'?:'],[[2,'||'],[[7],[3,'isCommentEmpty']],[[2,'!'],[[7],[3,'commentListHasLoaded']]]],[1,'comment-sort-hide'],[1,'']])
Z([[7],[3,'isOnlyMineShow']])
Z([[7],[3,'isOnlyAuthor']])
Z([[7],[3,'isOnlyMark']])
Z([[7],[3,'isOnlyMine']])
Z([[7],[3,'sortType']])
Z([[2,'&&'],[[7],[3,'isFromMark']],[[2,'>'],[[7],[3,'markReadTime']],[1,0]]])
Z([[2,'||'],[[7],[3,'threadId']],[1,'']])
Z([[6],[[7],[3,'commentMineInfo']],[3,'user_info']])
Z([3,'comment-list-wrapper'])
Z([[7],[3,'commentListLoaded']])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'virtualList']],[3,'length']],[1,0]],[[7],[3,'isCommentEmpty']]])
Z([3,'comment-list-empty'])
Z([[2,'!'],[[7],[3,'isOnlyMark']]])
Z([3,'暂无评论'])
Z([[6],[[7],[3,'virtualList']],[3,'length']])
Z([3,'pageNum'])
Z([[7],[3,'virtualList']])
Z(z[23])
Z([3,'virtual-list-item'])
Z([a,[3,'virtual-list-item-'],[[7],[3,'pageNum']]])
Z([[7],[3,'item']])
Z([3,'comment_id'])
Z([3,'onOpenAction'])
Z([3,'onUserClick'])
Z([3,'onLikeUpdate'])
Z([3,'onReply'])
Z([3,'openRewardSelect'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'threadItem']],[3,'chat_open']]]])
Z(z[28])
Z([[7],[3,'dislikeShow']])
Z([a,[3,'comment-item-'],[[6],[[7],[3,'item']],[3,'comment_id']]])
Z([[7],[3,'isAnonTag']])
Z([[7],[3,'newCommentId']])
Z([[7],[3,'pushStatus']])
Z([[7],[3,'queryCommentId']])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'rewardInfo']],[3,'can_select']]]])
Z([[7],[3,'showThreadPushChange']])
Z([[7],[3,'threadId']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'reply_list']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'reply_list']],[3,'length']],[1,0]]])
Z([3,'sub-list-wrapper'])
Z([3,'replyItem'])
Z([[6],[[7],[3,'item']],[3,'reply_list']])
Z(z[29])
Z([1,true])
Z(z[30])
Z(z[31])
Z(z[32])
Z(z[33])
Z(z[34])
Z(z[35])
Z(z[37])
Z([a,z[38][1],[[6],[[7],[3,'replyItem']],[3,'comment_id']]])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z([[7],[3,'replyItem']])
Z(z[43])
Z(z[44])
Z(z[45])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'replyListClippedStartId']],[1,0]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'pageNum']],[[2,'-'],[[6],[[7],[3,'virtualList']],[3,'length']],[1,1]]],[[6],[[7],[3,'item']],[3,'length']]],[[6],[[6],[[6],[[7],[3,'item']],[[2,'-'],[[6],[[7],[3,'item']],[3,'length']],[1,1]]],[3,'reply_list']],[3,'length']]])
Z([[7],[3,'isFinished']])
Z([3,'center'])
Z([3,'font-size: 24rpx;padding: 0 260rpx;'])
Z([3,'暂无筛选结果'])
Z([[7],[3,'skeletonShow']])
Z([3,'comment-skeleton-avatar'])
Z([3,'comment-skeleton-box'])
Z([3,'2'])
Z(z[75])
Z([3,'sub-comment-skeleton-box'])
Z(z[77])
Z(z[75])
Z(z[79])
Z(z[77])
Z([3,'reloadCommentList'])
Z([3,'onPhoneVerified'])
Z([3,'onRepaySuccess'])
Z([3,'reloadInfoPage'])
Z([[7],[3,'commentMineInfo']])
Z([[7],[3,'commentItem']])
Z([[7],[3,'replyConfig']])
Z([3,'commentActionRef'])
Z(z[45])
Z([[7],[3,'userActionList']])
Z([3,'onCloseUserAction'])
Z(z[94])
Z([3,'onUserActionSelect'])
Z([3,'取消'])
Z([[7],[3,'userActionShow']])
Z([3,'10010'])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
Z(z[99])
})(__WXML_GLOBAL__.ops_cached.$gwx0_18);return __WXML_GLOBAL__.ops_cached.$gwx0_18
}
function gz$gwx0_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_19)return __WXML_GLOBAL__.ops_cached.$gwx0_19
__WXML_GLOBAL__.ops_cached.$gwx0_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'component-comment-sort custom-class'])
Z([3,'sort-l-sec'])
Z([[2,'>'],[[7],[3,'commentCount']],[1,0]])
Z([3,'bindOpenSortPopup'])
Z([3,'flex-section'])
Z([3,'mx-sort-icon'])
Z([3,'comment_sort'])
Z([3,'14'])
Z([[7],[3,'sortPopupShow']])
Z([a,[3,'sort-select-popup '],[[2,'?:'],[[7],[3,'sortPopupShow']],[1,''],[1,'popup-hide']]])
Z([3,'bindSortConfirm'])
Z([3,'sort-select-item'])
Z([3,'isOnlyAuthor'])
Z([[7],[3,'isOnlyAuthor']])
Z([3,'#ff3d3d'])
Z([3,'success'])
Z(z[7])
Z([[7],[3,'isOnlyMineShow']])
Z(z[10])
Z(z[11])
Z([3,'isOnlyMine'])
Z([[7],[3,'isOnlyMine']])
Z(z[14])
Z(z[15])
Z(z[7])
Z([[7],[3,'onlyMarkShow']])
Z(z[10])
Z(z[11])
Z([3,'isOnlyMark'])
Z([[7],[3,'isOnlyMark']])
Z(z[14])
Z(z[15])
Z(z[7])
Z([a,[3,'sort-r-sec '],[[2,'?:'],[[2,'!='],[[7],[3,'sortType']],[1,'like_first']],[1,'sort-r-sec--time'],[1,'']]])
Z([3,'onTimeFilter'])
Z([a,[3,'slider-item '],[[2,'?:'],[[2,'!='],[[7],[3,'sortType']],[1,'like_first']],[1,'slider-item-active'],[1,'']]])
Z([[2,'==='],[[7],[3,'sortType']],[1,'time_first']])
Z([3,'time-img'])
Z([3,'#29ba9e'])
Z([3,'first-arrow'])
Z([3,'24rpx'])
Z([3,'arrow-time'])
Z([3,'5px'])
Z([3,'#d6d6d6'])
Z(z[40])
Z(z[41])
Z(z[42])
Z([[2,'==='],[[7],[3,'sortType']],[1,'time_last']])
Z(z[37])
Z(z[43])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z(z[38])
Z([3,'active-arrow'])
Z(z[40])
Z(z[41])
Z(z[42])
Z([[7],[3,'sortType']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_19);return __WXML_GLOBAL__.ops_cached.$gwx0_19
}
function gz$gwx0_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_20)return __WXML_GLOBAL__.ops_cached.$gwx0_20
__WXML_GLOBAL__.ops_cached.$gwx0_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'openCertDialog'])
Z([3,'c-m-content'])
Z([3,'icon-lock c-sub'])
Z([3,'lock'])
Z(z[0])
Z([3,'btn-to-cert'])
Z([3,'small'])
Z([3,'primary'])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_20);return __WXML_GLOBAL__.ops_cached.$gwx0_20
}
function gz$gwx0_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_21)return __WXML_GLOBAL__.ops_cached.$gwx0_21
__WXML_GLOBAL__.ops_cached.$gwx0_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'commentReply'])
Z([a,[3,'component-sub-comment '],[[2,'?:'],[[2,'=='],[[7],[3,'newCommentId']],[[6],[[7],[3,'replyItem']],[3,'comment_id']]],[1,'new-comment-bgc--anim'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'replyItem']],[3,'is_mark_new']],[1,'mark-bgc'],[1,'']]])
Z([[7],[3,'renderExpInfo']])
Z([3,'onRewardSelect'])
Z([[7],[3,'chatOpen']])
Z([[6],[[7],[3,'replyItem']],[3,'comment_id']])
Z([3,'expInfoPopoverRef'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'replyItem']],[3,'is_anon']]]])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'replyItem']],[3,'is_mine']]]])
Z([[7],[3,'showRewardSelect']])
Z([[7],[3,'threadId']])
Z([3,'r-content-wrapper'])
Z([[2,'!'],[[6],[[7],[3,'replyItem']],[3,'need_cert']]])
Z([3,'commentActionShow'])
Z([3,'action-ellipsis'])
Z([[7],[3,'replyItem']])
Z([3,'ellipsis'])
Z([3,'u-info'])
Z([[2,'&&'],[[6],[[7],[3,'replyItem']],[3,'is_mine']],[[6],[[7],[3,'replyItem']],[3,'is_anon']]])
Z([[2,'=='],[[6],[[7],[3,'replyItem']],[3,'is_forbid']],[1,1]])
Z([3,'u-img-forbid'])
Z(z[19])
Z([[6],[[7],[3,'replyItem']],[3,'is_author']])
Z([3,'#748aa0'])
Z([3,'u-author-icon'])
Z([3,'author'])
Z([[6],[[7],[3,'replyItem']],[3,'is_layer']])
Z(z[23])
Z([3,'u-layer-icon'])
Z([3,'layer'])
Z([[6],[[7],[3,'replyItem']],[3,'medal_exp_2023']])
Z(z[30])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'replyItem']],[3,'is_layer']]],[[2,'!'],[[6],[[7],[3,'replyItem']],[3,'is_author']]]],[[2,'>='],[[6],[[7],[3,'replyItem']],[3,'user_level']],[1,7]]])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'user_level']],[1,0]])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'user_level_title']],[1,'']])
Z([3,'sub-info-box'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isAnonTag']]],[[6],[[7],[3,'replyItem']],[3,'school_name']]])
Z([[6],[[7],[3,'replyItem']],[3,'post_time_text']])
Z([[6],[[7],[3,'replyItem']],[3,'from_app']])
Z([[6],[[7],[3,'replyItem']],[3,'reward_tip']])
Z([3,'comment-info'])
Z([[6],[[7],[3,'replyItem']],[3,'need_cert']])
Z([3,'needCertCommentClick'])
Z([3,'d-cert-tip'])
Z([3,'icon-lock c-sub'])
Z([3,'lock'])
Z([[7],[3,'commentIsCover']])
Z([[6],[[7],[3,'replyItem']],[3,'reply_nickname']])
Z([[2,'&&'],[[6],[[7],[3,'replyItem']],[3,'reply_is_mine']],[[6],[[7],[3,'replyItem']],[3,'reply_is_anon']]])
Z([[2,'&&'],[[6],[[7],[3,'replyItem']],[3,'img_list']],[[6],[[6],[[7],[3,'replyItem']],[3,'img_list']],[3,'length']]])
Z([3,'comment-img-item'])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'img_list']],[[4],[[5]]]])
Z([[2,'=='],[[6],[[7],[3,'replyItem']],[3,'img_status']],[1,20]])
Z([3,'d-wrapper'])
Z([[2,'?:'],[[6],[[7],[3,'replyItem']],[3,'is_deleted']],[1,'opacity: 0.5;'],[1,'']])
Z(z[12])
Z([3,'likePostSuccess'])
Z([3,'#666'])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'comment_id']],[1,0]])
Z([[6],[[7],[3,'replyItem']],[3,'is_deleted']])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'dislike_num']],[1,0]])
Z([[7],[3,'dislikeShow']])
Z([3,''])
Z(z[59])
Z([[6],[[7],[3,'replyItem']],[3,'dislike_has']])
Z([3,'24rpx'])
Z([3,'14'])
Z([1,true])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'like_num']],[1,0]])
Z(z[62])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'like_need_cert']],[1,false]])
Z(z[67])
Z([[6],[[7],[3,'replyItem']],[3,'like_has']])
Z([3,'40rpx'])
Z(z[10])
Z([3,'comment-icon'])
Z([3,'comment_reply'])
Z(z[66])
Z([[2,'&&'],[[7],[3,'showThreadPushChange']],[[2,'=='],[[7],[3,'queryCommentId']],[[6],[[7],[3,'replyItem']],[3,'comment_id']]]])
Z([3,'push-change-btn'])
Z([3,'关闭该贴评论通知'])
Z([3,'10'])
Z(z[67])
Z([3,'已关闭该贴评论通知'])
Z([[7],[3,'pushStatus']])
Z([[2,'||'],[[6],[[7],[3,'replyItem']],[3,'reply_comment_id']],[1,0]])
Z(z[10])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_21);return __WXML_GLOBAL__.ops_cached.$gwx0_21
}
function gz$gwx0_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_22)return __WXML_GLOBAL__.ops_cached.$gwx0_22
__WXML_GLOBAL__.ops_cached.$gwx0_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'commentReply'])
Z([a,[3,'component-top-comment '],[[2,'?:'],[[2,'=='],[[7],[3,'newCommentId']],[[6],[[7],[3,'commentItem']],[3,'comment_id']]],[1,'new-comment-bgc--anim'],[1,'']],[3,' '],[[2,'?:'],[[6],[[7],[3,'commentItem']],[3,'is_mark_new']],[1,'mark-bgc'],[1,'']]])
Z([[7],[3,'renderExpInfo']])
Z([3,'onRewardSelect'])
Z([[7],[3,'chatOpen']])
Z([[6],[[7],[3,'commentItem']],[3,'comment_id']])
Z([3,'expInfoPopoverRef'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'commentItem']],[3,'is_anon']]]])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'commentItem']],[3,'is_mine']]]])
Z([[7],[3,'showRewardSelect']])
Z([[7],[3,'threadId']])
Z([3,'r-content-wrapper'])
Z([[2,'!'],[[6],[[7],[3,'commentItem']],[3,'need_cert']]])
Z([3,'commentActionShow'])
Z([3,'action-ellipsis'])
Z([3,'ellipsis'])
Z([3,'u-info'])
Z([[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'is_mine']],[[6],[[7],[3,'commentItem']],[3,'is_anon']]])
Z([[2,'=='],[[6],[[7],[3,'commentItem']],[3,'is_forbid']],[1,1]])
Z([[6],[[7],[3,'commentItem']],[3,'is_author']])
Z([3,'#748aa0'])
Z([3,'u-author-icon'])
Z([3,'author'])
Z([[6],[[7],[3,'commentItem']],[3,'medal_exp_2023']])
Z(z[23])
Z([[2,'!'],[[6],[[7],[3,'commentItem']],[3,'is_author']]])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'user_level']],[1,0]])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'user_level_title']],[1,'']])
Z([3,'sub-info-box'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isAnonTag']]],[[6],[[7],[3,'commentItem']],[3,'school_name']]])
Z([[6],[[7],[3,'commentItem']],[3,'from_app']])
Z([[6],[[7],[3,'commentItem']],[3,'reward_tip']])
Z([3,'comment-info'])
Z([[6],[[7],[3,'commentItem']],[3,'need_cert']])
Z([3,'needCertCommentClick'])
Z([3,'d-cert-tip'])
Z([3,'icon-lock c-sub'])
Z([3,'lock'])
Z([[7],[3,'commentIsCover']])
Z([[2,'&&'],[[6],[[7],[3,'commentItem']],[3,'img_list']],[[6],[[6],[[7],[3,'commentItem']],[3,'img_list']],[3,'length']]])
Z([3,'comment-img-item'])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'img_list']],[[4],[[5]]]])
Z([[2,'=='],[[6],[[7],[3,'commentItem']],[3,'img_status']],[1,20]])
Z([3,'d-wrapper'])
Z([[2,'?:'],[[6],[[7],[3,'commentItem']],[3,'is_deleted']],[1,'opacity: 0.5;'],[1,'']])
Z([[6],[[7],[3,'commentItem']],[3,'like_show']])
Z([3,'likePostSuccess'])
Z([3,'#666'])
Z(z[5])
Z([[6],[[7],[3,'commentItem']],[3,'is_deleted']])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'dislike_num']],[1,0]])
Z([[7],[3,'dislikeShow']])
Z([3,''])
Z(z[49])
Z([[6],[[7],[3,'commentItem']],[3,'dislike_has']])
Z([3,'14'])
Z([1,true])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'like_num']],[1,0]])
Z(z[52])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'like_need_cert']],[1,false]])
Z(z[56])
Z([[6],[[7],[3,'commentItem']],[3,'like_has']])
Z([3,'40rpx'])
Z([[2,'||'],[[7],[3,'threadId']],[1,0]])
Z([3,'comment-icon'])
Z([3,'comment_reply'])
Z(z[55])
Z([[2,'&&'],[[7],[3,'showThreadPushChange']],[[2,'=='],[[7],[3,'queryCommentId']],[[6],[[7],[3,'commentItem']],[3,'comment_id']]]])
Z([3,'push-change-btn'])
Z([3,'关闭该贴评论通知'])
Z([3,'10'])
Z(z[56])
Z([3,'已关闭该贴评论通知'])
Z([[7],[3,'pushStatus']])
Z([[2,'||'],[[6],[[7],[3,'commentItem']],[3,'reply_comment_id']],[1,0]])
Z(z[10])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_22);return __WXML_GLOBAL__.ops_cached.$gwx0_22
}
function gz$gwx0_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_23)return __WXML_GLOBAL__.ops_cached.$gwx0_23
__WXML_GLOBAL__.ops_cached.$gwx0_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'actionList']])
Z([3,'closeAction'])
Z(z[1])
Z([3,'actionSelect'])
Z([3,'取消'])
Z([[7],[3,'actionDesc']])
Z([[7],[3,'actionShow']])
Z([3,'10010'])
Z([3,'phoneVerifiedCb'])
Z([3,'commentPostCb'])
Z([[7],[3,'commentMineInfo']])
Z([[7],[3,'config']])
Z([3,'detail'])
Z([3,'com-comment-post-ref'])
Z([[7],[3,'threadId']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_23);return __WXML_GLOBAL__.ops_cached.$gwx0_23
}
function gz$gwx0_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_24)return __WXML_GLOBAL__.ops_cached.$gwx0_24
__WXML_GLOBAL__.ops_cached.$gwx0_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'beforeClose']])
Z([1,false])
Z([[7],[3,'baseColor']])
Z([[7],[3,'dialogShow']])
Z([3,'true'])
Z([3,'none'])
Z([3,'10010'])
Z([3,'comment-input-container'])
Z([[6],[[7],[3,'userInfo']],[3,'anon_info']])
Z([3,'onChangeUseAnon'])
Z([[2,'||'],[[7],[3,'threadId']],[1,'']])
Z([[7],[3,'userInfo']])
Z(z[8])
Z([[7],[3,'responderContent']])
Z([[6],[[7],[3,'localCommentMineInfo']],[3,'comment_img_show']])
Z([3,'reply-upload__img-wrapper'])
Z([[7],[3,'imgUrls']])
Z([3,'*this'])
Z([3,'onImgPreview'])
Z([3,'img-item'])
Z([[7],[3,'index']])
Z([3,'onImgDelete'])
Z([3,'img-del'])
Z([3,'#878787'])
Z(z[20])
Z([3,'clear'])
Z([[7],[3,'restCount']])
Z([3,'onImgUploadClick'])
Z([3,'img-item--margin'])
Z([3,'onUploadSuccess'])
Z(z[26])
Z([3,'display:block;width:100%;height:100%'])
Z([[2,'!'],[[6],[[7],[3,'localCommentMineInfo']],[3,'comment_img_auth']]])
Z([3,'thread'])
Z([[2,'&&'],[[7],[3,'config']],[[6],[[7],[3,'config']],[3,'isAnonTag']]])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
Z(z[6])
Z([3,'van-toast'])
Z([3,'comment'])
Z([3,'subMsgTipsRef'])
Z([3,'bind'])
Z([[2,'||'],[[6],[[7],[3,'config']],[3,'agreeNeed']],[[6],[[7],[3,'localCommentMineInfo']],[3,'agree_need']]])
Z([3,'handlePhoneVerifyCancel'])
Z([3,'handlePhoneVerifySuccess'])
Z([3,'一键登录'])
Z(z[1])
Z([3,'根据国家法律规定，必须登录后才能继续'])
Z([[7],[3,'phoneVerifyShow']])
Z([[6],[[7],[3,'localCommentMineInfo']],[3,'phone_need']])
Z(z[33])
Z([3,'请先登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_24);return __WXML_GLOBAL__.ops_cached.$gwx0_24
}
function gz$gwx0_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_25)return __WXML_GLOBAL__.ops_cached.$gwx0_25
__WXML_GLOBAL__.ops_cached.$gwx0_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'thread-info-content-box'])
Z([3,'user-section'])
Z([3,'user-section-left'])
Z([[7],[3,'renderExpInfo']])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'threadItem']],[3,'chat_open']]]])
Z([3,'expInfoPopoverRef'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'threadItem']],[3,'is_anon']]]])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'threadItem']],[3,'is_mine']]]])
Z([[6],[[7],[3,'threadItem']],[3,'thread_id']])
Z([3,'u-info-sec'])
Z([3,'left-top-area'])
Z([[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'is_mine']],[[6],[[7],[3,'threadItem']],[3,'is_anon']]])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'is_forbid']],[1,1]])
Z([[6],[[7],[3,'threadItem']],[3,'medal_exp_2023']])
Z(z[13])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'user_level']],[1,0]])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'user_level_title']],[1,'']])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'chat_open']],[[2,'!'],[[6],[[7],[3,'threadItem']],[3,'is_mine']]]],[[2,'!'],[[6],[[7],[3,'threadItem']],[3,'is_anon']]]])
Z([3,'mx'])
Z([[2,'?:'],[[6],[[7],[3,'threadItem']],[3,'user_level']],[1,'margin-left:-40rpx'],[1,'']])
Z(z[8])
Z([[6],[[7],[3,'threadItem']],[3,'school_name']])
Z([[7],[3,'reportShow']])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'img_list']],[[4],[[5]]]])
Z([[2,'=='],[[6],[[7],[3,'threadItem']],[3,'img_status']],[1,10]])
Z([3,'detail-section'])
Z([[6],[[7],[3,'threadItem']],[3,'content_notify']])
Z([3,'warning-o'])
Z([3,'onCopyDetail'])
Z([3,'d-content'])
Z([[6],[[7],[3,'threadItem']],[3,'content']])
Z([3,'d-other'])
Z([[6],[[7],[3,'threadItem']],[3,'post_time']])
Z([[6],[[7],[3,'threadItem']],[3,'from_app']])
Z([[6],[[7],[3,'threadItem']],[3,'view_show']])
Z([[7],[3,'rewardShow']])
Z([3,'reward-info-custom'])
Z([[7],[3,'rewardInfo']])
Z([[6],[[7],[3,'threadItem']],[3,'is_mine']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_25);return __WXML_GLOBAL__.ops_cached.$gwx0_25
}
function gz$gwx0_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_26)return __WXML_GLOBAL__.ops_cached.$gwx0_26
__WXML_GLOBAL__.ops_cached.$gwx0_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'imgList']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_26);return __WXML_GLOBAL__.ops_cached.$gwx0_26
}
function gz$gwx0_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_27)return __WXML_GLOBAL__.ops_cached.$gwx0_27
__WXML_GLOBAL__.ops_cached.$gwx0_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'bindOpenAction'])
Z([3,'showicon custom-class'])
Z([[7],[3,'shareColor']])
Z([3,'share'])
Z([[7],[3,'iconSize']])
Z([3,'bindActionClose'])
Z([3,'bindActionSelect'])
Z([[7],[3,'shareDuration']])
Z([[7],[3,'shareAction']])
Z([[7],[3,'shareActionShow']])
Z([3,'立即分享给好友'])
Z([[2,'&&'],[[7],[3,'isLoading']],[[2,'!'],[[7],[3,'imageurl']]]])
Z([3,'killdialog'])
Z([3,'wrapper'])
Z([3,'onImgErr'])
Z([3,'onImgOK'])
Z([[7],[3,'template']])
Z([3,'5'])
Z([[2,'==='],[[7],[3,'imageurl']],[1,'']])
Z([[2,'&&'],[[7],[3,'isShowDom']],[[2,'!'],[[7],[3,'imageurl']]]])
Z([[7],[3,'showEllipsis']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_27);return __WXML_GLOBAL__.ops_cached.$gwx0_27
}
function gz$gwx0_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_28)return __WXML_GLOBAL__.ops_cached.$gwx0_28
__WXML_GLOBAL__.ops_cached.$gwx0_28=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx0_28);return __WXML_GLOBAL__.ops_cached.$gwx0_28
}
function gz$gwx0_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_29)return __WXML_GLOBAL__.ops_cached.$gwx0_29
__WXML_GLOBAL__.ops_cached.$gwx0_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'form-img-wrapper'])
Z([[2,'?:'],[[2,'&&'],[[6],[[7],[3,'colConf']],[3,'img_paths']],[[6],[[6],[[7],[3,'colConf']],[3,'img_paths']],[3,'label']]],[[6],[[6],[[7],[3,'colConf']],[3,'img_paths']],[3,'label']],[1,'上传照片']])
Z([3,'form-img-body'])
Z([[2,'>'],[[6],[[7],[3,'imgUrls']],[3,'length']],[1,0]])
Z([[7],[3,'restCount']])
Z([3,'onUploadSuccess'])
Z(z[4])
Z([3,'uploader-btn-box'])
Z([3,'thread'])
Z([3,'uploader-btn-icon'])
Z([3,'camera'])
Z([3,'24'])
Z([3,'form-title-body'])
Z([3,'form-title-wrapper'])
Z([[2,'?:'],[[2,'&&'],[[6],[[7],[3,'colConf']],[3,'title']],[[6],[[6],[[7],[3,'colConf']],[3,'title']],[3,'label']]],[[6],[[6],[[7],[3,'colConf']],[3,'title']],[3,'label']],[1,'我的昵称']])
Z([3,'form-content-body'])
Z([3,'form-content-wrapper'])
Z([[2,'?:'],[[2,'&&'],[[6],[[7],[3,'colConf']],[3,'content']],[[6],[[6],[[7],[3,'colConf']],[3,'content']],[3,'label']]],[[6],[[6],[[7],[3,'colConf']],[3,'content']],[3,'label']],[1,'我的昵称']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_29);return __WXML_GLOBAL__.ops_cached.$gwx0_29
}
function gz$gwx0_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_30)return __WXML_GLOBAL__.ops_cached.$gwx0_30
__WXML_GLOBAL__.ops_cached.$gwx0_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'pageStyle']],[1,'beauty']])
Z([3,'component-base-form_default'])
Z([[6],[[7],[3,'formInit']],[3,'anonTip']])
Z([[2,'!'],[[6],[[7],[3,'formInit']],[3,'imgHide']]])
Z([[7],[3,'restCount']])
Z([3,'onUploadSuccess'])
Z(z[4])
Z([3,'display:block;width:100%;height:100%'])
Z([3,'thread'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_30);return __WXML_GLOBAL__.ops_cached.$gwx0_30
}
function gz$gwx0_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_31)return __WXML_GLOBAL__.ops_cached.$gwx0_31
__WXML_GLOBAL__.ops_cached.$gwx0_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'post-reward-component'])
Z([3,'onPriceChange'])
Z([[7],[3,'rewardPriceDefault']])
Z([[7],[3,'rewardPriceMin']])
Z([[7],[3,'rewardCircleShow']])
Z([3,'onRuleChange'])
Z([[7],[3,'rewardRatio']])
Z([[7],[3,'ruleCustom']])
Z([[2,'?:'],[[7],[3,'rewardCircleShow']],[1,true],[1,false]])
})(__WXML_GLOBAL__.ops_cached.$gwx0_31);return __WXML_GLOBAL__.ops_cached.$gwx0_31
}
function gz$gwx0_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_32)return __WXML_GLOBAL__.ops_cached.$gwx0_32
__WXML_GLOBAL__.ops_cached.$gwx0_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_32);return __WXML_GLOBAL__.ops_cached.$gwx0_32
}
function gz$gwx0_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_33)return __WXML_GLOBAL__.ops_cached.$gwx0_33
__WXML_GLOBAL__.ops_cached.$gwx0_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'slider-btn-box'])
Z([3,'#F0F0F0'])
Z([3,'onChange'])
Z([3,'onInput'])
Z([3,'all-slider-wrapper'])
Z(z[1])
Z([1,380])
Z([1,0])
Z([1,1])
Z([3,'width:100%;margin:0;'])
Z([[7],[3,'sliderValue']])
Z([3,'button-slot-box'])
Z([3,'button'])
Z([[2,'?:'],[[2,'<='],[[7],[3,'rewardPriceYuan']],[1,10]],[1,'opacity:0;'],[1,'']])
Z([[7],[3,'sliderValueShow']])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx0_33);return __WXML_GLOBAL__.ops_cached.$gwx0_33
}
function gz$gwx0_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_34)return __WXML_GLOBAL__.ops_cached.$gwx0_34
__WXML_GLOBAL__.ops_cached.$gwx0_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-popup'])
Z([[7],[3,'post']])
Z([[7],[3,'ruleListShow']])
Z([3,'index'])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'ratio']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'iconShow']])
Z([3,'right-icon'])
Z([3,'plus'])
Z(z[2])
Z(z[3])
Z([[6],[[7],[3,'item']],[3,'ratio']])
Z(z[1])
Z([3,'desc-content-wrapper'])
Z([[2,'>'],[[7],[3,'typeCount']],[1,1]])
Z(z[2])
Z(z[3])
Z(z[4])
Z([3,'sub-desc-wrapper'])
Z([[2,'>'],[[7],[3,'rewardHourLike']],[1,0]])
Z([[2,'>'],[[7],[3,'rewardHourSelect']],[1,0]])
Z([[7],[3,'showLastTip']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_34);return __WXML_GLOBAL__.ops_cached.$gwx0_34
}
function gz$gwx0_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_35)return __WXML_GLOBAL__.ops_cached.$gwx0_35
__WXML_GLOBAL__.ops_cached.$gwx0_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'reward-rule-picker-component'])
Z([[7],[3,'chartData']])
Z([3,'145'])
Z([3,'onBtnChange'])
Z([[2,'!'],[[7],[3,'ruleCustom']]])
Z([[7],[3,'result']])
Z([[7],[3,'btnList']])
Z([3,'id'])
Z([3,'toggleCheckbox'])
Z([3,'btn-picker'])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'#ff5c64'])
Z(z[12])
Z([3,'van-checkbox'])
Z([3,'checkbox-group-icon'])
Z([3,'14'])
Z([a,[3,'checkbox-'],z[11]])
Z([[2,'?:'],[[2,'!'],[[7],[3,'ruleCustom']]],[1,'checkbox-label-class'],[1,'']])
Z(z[11])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx0_35);return __WXML_GLOBAL__.ops_cached.$gwx0_35
}
function gz$gwx0_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_36)return __WXML_GLOBAL__.ops_cached.$gwx0_36
__WXML_GLOBAL__.ops_cached.$gwx0_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'component-school-picker'])
Z([3,'bindOpenPicker'])
Z([3,'location-picker-box'])
Z([3,'icon-school'])
Z([3,'location-o'])
Z([3,'19'])
Z([[7],[3,'canShowPicker']])
Z([3,'arrow-icon'])
Z([3,'arrow'])
Z([3,'14'])
Z(z[6])
Z([3,'closePicker'])
Z([3,'bottom'])
Z([[7],[3,'showSelectPick']])
Z([3,'onCancel'])
Z([3,'onConfirm'])
Z([[7],[3,'showList']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_36);return __WXML_GLOBAL__.ops_cached.$gwx0_36
}
function gz$gwx0_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_37)return __WXML_GLOBAL__.ops_cached.$gwx0_37
__WXML_GLOBAL__.ops_cached.$gwx0_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'component-tabs-wrapper'])
Z([[7],[3,'tabs']])
Z([3,'index'])
Z([3,'onChange'])
Z([3,'tab-item custom-item'])
Z([[7],[3,'item']])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([[6],[[7],[3,'item']],[3,'name']])
Z(z[7])
Z([[7],[3,'sliderStyle']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_37);return __WXML_GLOBAL__.ops_cached.$gwx0_37
}
function gz$gwx0_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_38)return __WXML_GLOBAL__.ops_cached.$gwx0_38
__WXML_GLOBAL__.ops_cached.$gwx0_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loaded']])
Z([3,'page-thread-info'])
Z([3,'onNavClick'])
Z([[7],[3,'navLeftIconName']])
Z([3,'msg'])
Z([[7],[3,'isShow']])
Z([[7],[3,'userNotify']])
Z([[7],[3,'adminNotify']])
Z([3,'infoReload'])
Z([3,'updateLikeData'])
Z([3,'updateMarkData'])
Z([[7],[3,'blackOpen']])
Z([[7],[3,'threadDislikeShow']])
Z([[7],[3,'from']])
Z([3,'contentComRef'])
Z([[7],[3,'isAdmin']])
Z([[7],[3,'isBlack']])
Z([[7],[3,'rewardInfo']])
Z([[7],[3,'rewardShow']])
Z([[7],[3,'threadItem']])
Z([[7],[3,'threadSign']])
Z([[7],[3,'needCommentShowCert']])
Z([[2,'!'],[[7],[3,'needCommentShowCert']]])
Z([3,'onPhoneVerified'])
Z(z[8])
Z([[7],[3,'commentMineInfo']])
Z([[7],[3,'commentCertValid']])
Z([[7],[3,'commentForbid']])
Z([[7],[3,'commentForbidTip']])
Z([[7],[3,'commentDislikeShow']])
Z([3,'commentComRef'])
Z(z[15])
Z([[2,'||'],[[6],[[7],[3,'threadItem']],[3,'is_anon_tag']],[1,false]])
Z(z[20])
Z([[7],[3,'queryCommentId']])
Z(z[17])
Z([[7],[3,'threadId']])
Z(z[19])
Z([[7],[3,'uSwitchOpen']])
Z([3,'onReply'])
Z(z[9])
Z(z[10])
Z(z[28])
Z(z[13])
Z([[6],[[7],[3,'commentMineInfo']],[3,'user_info']])
Z([[6],[[7],[3,'threadItem']],[3,'tag_id']])
Z(z[19])
Z([[7],[3,'viewLimit']])
Z([[7],[3,'viewLimitConf']])
Z([[7],[3,'emptyLoaded']])
Z([[2,'&&'],[[6],[[7],[3,'threadItem']],[3,'is_mine']],[[2,'!'],[[6],[[7],[3,'threadItem']],[3,'view_limit']]]])
Z([3,'bindThreadActionCb'])
Z(z[13])
Z([[6],[[7],[3,'threadItem']],[3,'is_mine']])
Z(z[19])
})(__WXML_GLOBAL__.ops_cached.$gwx0_38);return __WXML_GLOBAL__.ops_cached.$gwx0_38
}
function gz$gwx0_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_39)return __WXML_GLOBAL__.ops_cached.$gwx0_39
__WXML_GLOBAL__.ops_cached.$gwx0_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-mx-post_beauty'])
Z([[7],[3,'schoolName']])
Z([3,'location'])
Z([3,'16'])
Z([3,'bindFormInfoUpdate'])
Z([[7],[3,'formInfo']])
Z([[7],[3,'formInit']])
Z([3,'beauty'])
Z([[2,'?:'],[[7],[3,'lockInput']],[1,'display:none;'],[1,'']])
Z([[7],[3,'styleInfo']])
Z([3,'bindDoPost'])
Z([3,'post-btn-wrapper'])
Z([[7],[3,'submitting']])
Z([3,'post-btn-loading'])
Z([3,'36rpx'])
Z([3,'btn-box-icon'])
Z([3,'94rpx'])
Z([3,'mx-post-btn'])
Z([3,'232rpx'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_39);return __WXML_GLOBAL__.ops_cached.$gwx0_39
}
function gz$gwx0_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_40)return __WXML_GLOBAL__.ops_cached.$gwx0_40
__WXML_GLOBAL__.ops_cached.$gwx0_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-mx-post_default'])
Z([[7],[3,'pageTip']])
Z([[2,'||'],[[6],[[7],[3,'mineInfo']],[3,'anon_info']],[[6],[[7],[3,'formInit']],[3,'schoolShow']]])
Z([3,'user-info-select'])
Z([[2,'?:'],[[7],[3,'lockInput']],[1,'display:none;'],[1,'']])
Z([[6],[[7],[3,'mineInfo']],[3,'anon_info']])
Z([3,'onChangeUseAnon'])
Z([3,'post-user-avatar'])
Z([3,'post-user-avatar-custom'])
Z([[7],[3,'mineInfo']])
Z([[2,'&&'],[[6],[[7],[3,'formInit']],[3,'schoolList']],[[6],[[7],[3,'formInit']],[3,'schoolShow']]])
Z([3,'onChangeSelectCid'])
Z([[6],[[7],[3,'formInfo']],[3,'select_cid']])
Z([3,'post-school-picker'])
Z([[2,'||'],[[6],[[7],[3,'formInit']],[3,'schoolList']],[[4],[[5]]]])
Z([3,'bindFormInfoUpdate'])
Z([[7],[3,'formInfo']])
Z([[7],[3,'formInit']])
Z([3,'default'])
Z(z[4])
Z([[7],[3,'submitting']])
Z([3,'35'])
Z([3,'spinner'])
Z([[7],[3,'lockInput']])
Z([3,'onPayCollapseChange'])
Z([1,false])
Z([3,'collapse-box'])
Z([[7],[3,'payCollapseActives']])
Z([[7],[3,'rewardOpen']])
Z([3,'van-hairline--top'])
Z([3,'postReward'])
Z([3,'title'])
Z([3,'bindCloseDescPopup'])
Z([3,'title-content-box'])
Z([3,'bindOpenDescPopup'])
Z(z[30])
Z([3,'question-o'])
Z([3,'20'])
Z([3,'bindRewardChange'])
Z([[7],[3,'rewardCircleShow']])
Z([[7],[3,'rewardPriceDefault']])
Z([[7],[3,'rewardPriceMin']])
Z([[7],[3,'rewardRatio']])
Z([[7],[3,'rewardDistCustom']])
Z(z[32])
Z([1,true])
Z([3,'center'])
Z([[7],[3,'descPopupShow']])
Z([[2,'=='],[[7],[3,'descName']],[1,'postReward']])
Z(z[42])
Z([[7],[3,'rewardHourLike']])
Z([[7],[3,'rewardHourSelect']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_40);return __WXML_GLOBAL__.ops_cached.$gwx0_40
}
function gz$gwx0_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_41)return __WXML_GLOBAL__.ops_cached.$gwx0_41
__WXML_GLOBAL__.ops_cached.$gwx0_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'pageLoaded']])
Z([[2,'=='],[[7],[3,'pageStyle']],[1,'beauty']])
Z([1,false])
Z([3,'center'])
Z([[7],[3,'successPopupShow']])
Z([3,'gotoPageAfterSuccess'])
Z([3,'btn-reject'])
Z([1,true])
Z([3,'default'])
Z([3,'#1eba9d'])
Z([3,'van-dialog'])
Z([3,'pay-select'])
Z([3,'bind'])
Z([[7],[3,'agreeNeed']])
Z([3,'handlePhoneVerifyCancel'])
Z([3,'handlePhoneVerifySuccess'])
Z([3,'一键登录'])
Z(z[2])
Z([3,'根据国家法律规定，必须登录后才能继续'])
Z([3,'phone-verify-popup'])
Z([[7],[3,'phoneVerifyVisible']])
Z([[7],[3,'phoneNeed']])
Z([3,'thread'])
Z([3,'请先登录'])
Z([[2,'&&'],[[7],[3,'agreeNeed']],[[2,'!'],[[7],[3,'phoneNeed']]]])
Z([3,'handleAgreementCancel'])
Z([3,'handleAgreementSuccess'])
Z([3,'com-agree-dialog'])
Z([[7],[3,'agreementSubmitting']])
Z([3,'同意'])
Z([[7],[3,'needSelectSchool']])
Z([3,'onSchoolSelectChoose'])
Z([[7],[3,'schoolSugSelectShow']])
Z([3,'请选择您所在学校'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_41);return __WXML_GLOBAL__.ops_cached.$gwx0_41
}
function gz$gwx0_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_42)return __WXML_GLOBAL__.ops_cached.$gwx0_42
__WXML_GLOBAL__.ops_cached.$gwx0_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-search'])
Z([3,'onInput'])
Z([3,'onSearch'])
Z([[7],[3,'searchFocus']])
Z([3,'请输入搜索关键词'])
Z([[7],[3,'wd']])
Z([[2,'||'],[[7],[3,'isSearch']],[[7],[3,'wd']]])
Z([3,'thread-container'])
Z([a,[3,'margin-top:'],[[7],[3,'threadStyle']]])
Z([1,13])
Z([3,'waterFallId'])
Z([[7],[3,'threadList']])
Z([3,'index'])
Z([3,'search'])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'is_fep']],[1,false]])
Z([[2,'||'],[[7],[3,'isAnonTag']],[1,false]])
Z([[7],[3,'item']])
Z([[7],[3,'loading']])
Z([[7],[3,'finished']])
Z([[7],[3,'showError']])
Z([3,'van-dialog'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_42);return __WXML_GLOBAL__.ops_cached.$gwx0_42
}
function gz$gwx0_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_43)return __WXML_GLOBAL__.ops_cached.$gwx0_43
__WXML_GLOBAL__.ops_cached.$gwx0_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loaded']])
Z([3,'tag-home-page'])
Z([[6],[[7],[3,'hotList']],[3,'length']])
Z([[7],[3,'hotList']])
Z([3,'tag_id'])
Z([3,'onRefresh'])
Z([[7],[3,'item']])
Z([3,'hot'])
Z([[6],[[7],[3,'followList']],[3,'length']])
Z([[7],[3,'followList']])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'follow'])
Z([[6],[[7],[3,'moreList']],[3,'length']])
Z([[7],[3,'moreList']])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'more'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_43);return __WXML_GLOBAL__.ops_cached.$gwx0_43
}
function gz$gwx0_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_44)return __WXML_GLOBAL__.ops_cached.$gwx0_44
__WXML_GLOBAL__.ops_cached.$gwx0_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loaded']])
Z([3,'page-tag-index'])
Z([3,'onNavClick'])
Z([[7],[3,'navLeftIconName']])
Z([3,'msg'])
Z([[7],[3,'isShow']])
Z([[7],[3,'detail']])
Z([[7],[3,'tagId']])
Z([[6],[[7],[3,'detail']],[3,'view_limit']])
Z([[6],[[7],[3,'detail']],[3,'view_limit_conf']])
Z([3,'menu-tabs-box'])
Z([[7],[3,'sortType']])
Z([3,'onSortChange'])
Z([3,'custom-tab-item'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'detail']],[3,'style']],[1,'beauty']],[1,'beauty-slider'],[1,'']])
Z([[7],[3,'sortList']])
Z([[2,'&&'],[[7],[3,'myCid']],[[2,'!'],[[6],[[7],[3,'detail']],[3,'is_anon_tag']]]])
Z([3,'onlyMineCidChange'])
Z([3,'#1eba9d'])
Z([3,'only-mine-checkbox'])
Z([3,'30rpx'])
Z([[7],[3,'onlyMineCid']])
Z([3,'thread-list-wrapper'])
Z([1,13])
Z([3,'waterFallId'])
Z([[7],[3,'threadList']])
Z([3,'index'])
Z([3,'tag_index'])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'is_fep']],[1,false]])
Z([[2,'||'],[[6],[[7],[3,'detail']],[3,'is_anon_tag']],[1,false]])
Z(z[11])
Z([[7],[3,'item']])
Z([[7],[3,'finished']])
Z([3,'no-more-text'])
Z([[2,'==='],[[6],[[7],[3,'threadList']],[3,'length']],[1,0]])
Z([3,'暂无内容'])
Z([3,'240'])
Z([3,'20'])
Z([3,'gotoPost'])
Z([[2,'?:'],[[7],[3,'isHidePostBar']],[1,'post-bar-hide'],[1,'']])
Z([[2,'=='],[[6],[[7],[3,'detail']],[3,'style']],[1,'beauty']])
Z([[7],[3,'emptyTip']])
Z(z[36])
Z([3,'van-dialog'])
Z([3,'comment'])
Z([3,'subMsgTipsRef'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_44);return __WXML_GLOBAL__.ops_cached.$gwx0_44
}
function gz$gwx0_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_45)return __WXML_GLOBAL__.ops_cached.$gwx0_45
__WXML_GLOBAL__.ops_cached.$gwx0_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loaded']])
Z([3,'page-tag-index'])
Z([[7],[3,'isShow']])
Z([[7],[3,'detail']])
Z([[7],[3,'tagId']])
Z([3,'menu-tabs-box'])
Z([[7],[3,'sortType']])
Z([3,'onSortChange'])
Z([3,'custom-tab-item'])
Z([3,'custom-slider'])
Z([[7],[3,'sortList']])
Z([[7],[3,'schoolName']])
Z([3,'#c1c1c1'])
Z([3,'location'])
Z([3,'16'])
Z([[7],[3,'scqrAlias']])
Z([3,'onGotoScqr'])
Z([3,'scqr-btn-box'])
Z([3,'scqr-icon'])
Z([3,'#EFC947'])
Z([3,'arrow'])
Z([3,'18'])
Z([3,'thread-list-wrapper'])
Z([[7],[3,'threadList']])
Z([3,'index'])
Z([[6],[[7],[3,'item']],[3,'thread_id']])
Z([3,'tag_school'])
Z([[2,'||'],[[6],[[7],[3,'item']],[3,'is_fep']],[1,false]])
Z(z[6])
Z([[7],[3,'item']])
Z([[7],[3,'finished']])
Z([3,'no-more-text'])
Z([[2,'==='],[[6],[[7],[3,'threadList']],[3,'length']],[1,0]])
Z([3,'暂无内容'])
Z([3,'240'])
Z([[7],[3,'isFetching']])
Z([[2,'!'],[[7],[3,'isFirst']]])
Z([3,'20'])
Z([[7],[3,'showError']])
Z([3,'gotoPost'])
Z([[7],[3,'emptyTip']])
Z(z[34])
})(__WXML_GLOBAL__.ops_cached.$gwx0_45);return __WXML_GLOBAL__.ops_cached.$gwx0_45
}
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/mx/components/common/expFlag/expFlag.wxml','./pages/mx/components/common/expInfoPopover/expInfoPopover.wxml','./pages/mx/components/common/formCard/index.wxml','./pages/mx/components/common/imgShow/imgShow.wxml','./pages/mx/components/common/tagLimit/index.wxml','./pages/mx/components/home/barrage/index.wxml','./pages/mx/components/home/tagItem/index.wxml','./pages/mx/components/index/postBar/index.wxml','./pages/mx/components/index/shareimage/shareimage.wxml','./pages/mx/components/index/tagInfo/beauty.wxml','./pages/mx/components/index/tagInfo/default.wxml','./pages/mx/components/index/tagInfo/index.wxml','./beauty','./default','./pages/mx/components/index/threadItem/thread-item.wxml','./pages/mx/components/index/waterfall/waterfall-item/index.wxml','./pages/mx/components/index/waterfall/waterfall/index.wxml','./pages/mx/components/info/action/action.wxml','./pages/mx/components/info/bottomInput/index.wxml','./pages/mx/components/info/comment/commentList/index.wxml','./pages/mx/components/info/comment/commentSort/index.wxml','./pages/mx/components/info/comment/noCert/index.wxml','./pages/mx/components/info/comment/subComment/index.wxml','./pages/mx/components/info/comment/topComment/index.wxml','./pages/mx/components/info/commentAction/index.wxml','./pages/mx/components/info/commentAction/reply/index.wxml','./pages/mx/components/info/content/index.wxml','./pages/mx/components/info/imgSwiper/index.wxml','./pages/mx/components/info/shareimage/shareimage.wxml','./pages/mx/components/info/threadLikedList/index.wxml','./pages/mx/components/post/baseForm/beauty.wxml','./pages/mx/components/post/baseForm/index.wxml','./beauty.wxml','./pages/mx/components/post/postReward/index.wxml','./pages/mx/components/post/reward/circleChart/index.wxml','./pages/mx/components/post/reward/pricePicker/index.wxml','./pages/mx/components/post/reward/rewardDesc/index.wxml','./pages/mx/components/post/reward/rulePicker/index.wxml','./pages/mx/components/post/schoolPicker/index.wxml','./pages/mx/components/ui/tabs/index.wxml','./pages/mx/info/info.wxml','./pages/mx/post/beauty.wxml','./pages/mx/post/default.wxml','./pages/mx/post/post.wxml','./default.wxml','./pages/mx/search/search.wxml','./pages/mx/tag/home/home.wxml','./pages/mx/tag/index/index.wxml','./pages/mx/tag/school/school.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
var oD=_n('view')
_rz(z,oD,'catch:touchmove',0,e,s,gg)
var fE=_mz(z,'van-popup',['rootPortal',-1,'bind:close',1,'customClass',1,'customStyle',2,'id',3,'overlayStyle',4,'show',5],[],e,s,gg)
var cF=_mz(z,'view',['catch:touchmove',7,'class',1,'id',2],[],e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',10,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,11,e,s,gg)){oH.wxVkey=1
var oJ=_v()
_(oH,oJ)
if(_oz(z,12,e,s,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
}
var lK=_n('view')
_rz(z,lK,'class',13,e,s,gg)
var aL=_mz(z,'view',['class',14,'style',1],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,16,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,17,e,s,gg)){eN.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
_(lK,aL)
var bO=_mz(z,'van-progress',['backgroundColor',18,'color',1,'customClass',2,'percentage',3,'pivotColor',4,'pivotText',5,'showPivot',6],[],e,s,gg)
_(lK,bO)
_(hG,lK)
var oP=_mz(z,'van-icon',['class',25,'name',1],[],e,s,gg)
_(hG,oP)
var cI=_v()
_(hG,cI)
if(_oz(z,27,e,s,gg)){cI.wxVkey=1
var xQ=_n('view')
_rz(z,xQ,'class',28,e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,29,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,30,e,s,gg)){fS.wxVkey=1
var cT=_mz(z,'chat-entry',['class',31,'commentId',1,'label',2,'scene',3,'threadId',4,'variant',5],[],e,s,gg)
_(fS,cT)
}
oR.wxXCkey=1
fS.wxXCkey=1
fS.wxXCkey=3
_(cI,xQ)
}
oH.wxXCkey=1
cI.wxXCkey=1
cI.wxXCkey=3
_(cF,hG)
_(fE,cF)
_(oD,fE)
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_3()
var oV=_n('view')
_rz(z,oV,'class',0,e,s,gg)
var cW=_mz(z,'icon',['svg',-1,'class',1,'color',1,'name',2,'size',3],[],e,s,gg)
_(oV,cW)
var oX=_n('slot')
_(oV,oX)
_(r,oV)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx0_4()
var aZ=_v()
_(r,aZ)
if(_oz(z,0,e,s,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx0_5()
var e2=_n('view')
_rz(z,e2,'class',0,e,s,gg)
var b3=_v()
_(e2,b3)
if(_oz(z,1,e,s,gg)){b3.wxVkey=1
var o4=_v()
_(b3,o4)
if(_oz(z,2,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,3,e,s,gg)){x5.wxVkey=1
var o6=_mz(z,'van-button',['round',-1,'bindtap',4,'color',1,'customClass',2],[],e,s,gg)
var f7=_mz(z,'van-icon',['customClass',7,'name',1],[],e,s,gg)
_(o6,f7)
_(x5,o6)
}
o4.wxXCkey=1
x5.wxXCkey=1
x5.wxXCkey=3
}
else if(_oz(z,9,e,s,gg)){b3.wxVkey=2
var c8=_v()
_(b3,c8)
if(_oz(z,10,e,s,gg)){c8.wxVkey=1
}
var h9=_v()
_(b3,h9)
if(_oz(z,11,e,s,gg)){h9.wxVkey=1
var o0=_mz(z,'van-button',['round',-1,'bindtap',12,'color',1,'customClass',2],[],e,s,gg)
var cAB=_mz(z,'van-icon',['customClass',15,'name',1],[],e,s,gg)
_(o0,cAB)
_(h9,o0)
}
c8.wxXCkey=1
h9.wxXCkey=1
h9.wxXCkey=3
}
else{b3.wxVkey=3
var lCB=_n('view')
_rz(z,lCB,'class',17,e,s,gg)
var tEB=_mz(z,'van-icon',['class',18,'name',1],[],e,s,gg)
_(lCB,tEB)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,20,e,s,gg)){aDB.wxVkey=1
}
aDB.wxXCkey=1
_(b3,lCB)
var oBB=_v()
_(b3,oBB)
if(_oz(z,21,e,s,gg)){oBB.wxVkey=1
var eFB=_mz(z,'van-button',['round',-1,'bindtap',22,'color',1,'customClass',2],[],e,s,gg)
var bGB=_mz(z,'van-icon',['customClass',25,'name',1],[],e,s,gg)
_(eFB,bGB)
_(oBB,eFB)
}
oBB.wxXCkey=1
oBB.wxXCkey=3
}
b3.wxXCkey=1
b3.wxXCkey=3
b3.wxXCkey=3
b3.wxXCkey=3
_(r,e2)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx0_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx0_7()
var oJB=_mz(z,'view',['bind:tap',0,'class',1],[],e,s,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,2,e,s,gg)){fKB.wxVkey=1
}
var cLB=_n('view')
_rz(z,cLB,'class',3,e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,4,e,s,gg)){hMB.wxVkey=1
var cOB=_mz(z,'van-icon',['catch:tap',5,'customClass',1,'data-item',2,'name',3],[],e,s,gg)
_(hMB,cOB)
}
else if(_oz(z,9,e,s,gg)){hMB.wxVkey=2
var oPB=_v()
_(hMB,oPB)
if(_oz(z,10,e,s,gg)){oPB.wxVkey=1
var aRB=_mz(z,'van-button',['catch:tap',11,'color',1,'customClass',2,'loading',3,'loadingSize',4,'loadingText',5,'loadingType',6,'type',7],[],e,s,gg)
_(oPB,aRB)
}
var lQB=_v()
_(hMB,lQB)
if(_oz(z,19,e,s,gg)){lQB.wxVkey=1
var tSB=_mz(z,'van-button',['catch:tap',20,'customClass',1,'loading',2,'loadingSize',3,'loadingText',4,'loadingType',5,'type',6],[],e,s,gg)
var eTB=_mz(z,'icon',['svg',-1,'customClass',27,'name',1,'size',2],[],e,s,gg)
_(tSB,eTB)
_(lQB,tSB)
}
oPB.wxXCkey=1
oPB.wxXCkey=3
lQB.wxXCkey=1
lQB.wxXCkey=3
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,30,e,s,gg)){oNB.wxVkey=1
}
hMB.wxXCkey=1
hMB.wxXCkey=3
hMB.wxXCkey=3
oNB.wxXCkey=1
_(oJB,cLB)
fKB.wxXCkey=1
_(r,oJB)
var bUB=_mz(z,'van-action-sheet',['actions',31,'bind:cancel',1,'bind:click-overlay',2,'bind:select',3,'cancelText',4,'show',5,'zIndex',6],[],e,s,gg)
_(r,bUB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx0_8()
var xWB=_v()
_(r,xWB)
if(_oz(z,0,e,s,gg)){xWB.wxVkey=1
var oXB=_n('view')
_rz(z,oXB,'class',1,e,s,gg)
var fYB=_mz(z,'icon',['svg',-1,'customClass',2,'height',1,'name',2,'width',3],[],e,s,gg)
_(oXB,fYB)
var cZB=_mz(z,'icon',['svg',-1,'customClass',6,'name',1,'size',2],[],e,s,gg)
_(oXB,cZB)
_(xWB,oXB)
}
else{xWB.wxVkey=2
}
xWB.wxXCkey=1
xWB.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx0_9()
var o2B=_n('view')
_rz(z,o2B,'class',0,e,s,gg)
var l5B=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var a6B=_mz(z,'icon',['svg',-1,'color',3,'name',1,'size',2],[],e,s,gg)
_(l5B,a6B)
_(o2B,l5B)
var t7B=_mz(z,'van-share-sheet',['bind:close',6,'bind:select',1,'duration',2,'options',3,'show',4,'title',5],[],e,s,gg)
_(o2B,t7B)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,12,e,s,gg)){c3B.wxVkey=1
var e8B=_mz(z,'view',['catchtap',13,'class',1],[],e,s,gg)
var o0B=_mz(z,'painter',['bind:imgErr',15,'bind:imgOK',1,'palette',2,'scaleRatio',3],[],e,s,gg)
_(e8B,o0B)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,19,e,s,gg)){b9B.wxVkey=1
var xAC=_n('van-loading')
_(b9B,xAC)
}
b9B.wxXCkey=1
b9B.wxXCkey=3
_(c3B,e8B)
}
var o4B=_v()
_(o2B,o4B)
if(_oz(z,20,e,s,gg)){o4B.wxVkey=1
var oBC=_n('view')
_rz(z,oBC,'class',21,e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,22,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(oBC,cDC)
if(_oz(z,23,e,s,gg)){cDC.wxVkey=1
}
fCC.wxXCkey=1
cDC.wxXCkey=1
_(o4B,oBC)
}
c3B.wxXCkey=1
c3B.wxXCkey=3
o4B.wxXCkey=1
_(r,o2B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx0_10()
var oFC=_n('view')
_rz(z,oFC,'class',0,e,s,gg)
var oHC=_n('view')
_rz(z,oHC,'class',1,e,s,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,2,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(oHC,aJC)
if(_oz(z,3,e,s,gg)){aJC.wxVkey=1
var tKC=_n('view')
_rz(z,tKC,'class',4,e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,5,e,s,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(tKC,bMC)
if(_oz(z,6,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(tKC,oNC)
if(_oz(z,7,e,s,gg)){oNC.wxVkey=1
}
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
_(aJC,tKC)
}
lIC.wxXCkey=1
aJC.wxXCkey=1
_(oFC,oHC)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,8,e,s,gg)){cGC.wxVkey=1
}
cGC.wxXCkey=1
_(r,oFC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx0_11()
var oPC=_n('view')
_rz(z,oPC,'class',0,e,s,gg)
var oTC=_mz(z,'icon',['svg',-1,'color',1,'customClass',1,'name',2,'size',3],[],e,s,gg)
_(oPC,oTC)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,5,e,s,gg)){fQC.wxVkey=1
var cUC=_n('view')
_rz(z,cUC,'class',6,e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,7,e,s,gg)){oVC.wxVkey=1
var tYC=_v()
_(oVC,tYC)
if(_oz(z,8,e,s,gg)){tYC.wxVkey=1
}
tYC.wxXCkey=1
}
var lWC=_v()
_(cUC,lWC)
if(_oz(z,9,e,s,gg)){lWC.wxVkey=1
var eZC=_v()
_(lWC,eZC)
if(_oz(z,10,e,s,gg)){eZC.wxVkey=1
}
eZC.wxXCkey=1
}
var aXC=_v()
_(cUC,aXC)
if(_oz(z,11,e,s,gg)){aXC.wxVkey=1
}
oVC.wxXCkey=1
lWC.wxXCkey=1
aXC.wxXCkey=1
_(fQC,cUC)
}
var cRC=_v()
_(oPC,cRC)
if(_oz(z,12,e,s,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(oPC,hSC)
if(_oz(z,13,e,s,gg)){hSC.wxVkey=1
var b1C=_mz(z,'div',['bind:tap',14,'class',1],[],e,s,gg)
var o2C=_mz(z,'icon',['svg',-1,'color',16,'name',1,'size',2],[],e,s,gg)
_(b1C,o2C)
_(hSC,b1C)
}
var x3C=_mz(z,'share-image',['class',19,'fontColor',1,'fontSize',2,'iconSize',3,'tagId',4,'tagInfo',5],[],e,s,gg)
_(oPC,x3C)
fQC.wxXCkey=1
cRC.wxXCkey=1
hSC.wxXCkey=1
hSC.wxXCkey=3
_(r,oPC)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx0_12()
var f5C=_n('view')
_rz(z,f5C,'class',0,e,s,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,1,e,s,gg)){c6C.wxVkey=1
var h7C=e_[x[11]].j
_ic(x[12],e_,x[11],e,s,c6C,gg);
h7C.pop()
}
else{c6C.wxVkey=2
var o8C=e_[x[11]].j
_ic(x[13],e_,x[11],e,s,c6C,gg);
o8C.pop()
}
c6C.wxXCkey=1
_(r,f5C)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx0_13()
var o0C=_mz(z,'view',['class',0,'data-tid',1],[],e,s,gg)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,2,e,s,gg)){lAD.wxVkey=1
var aBD=_mz(z,'van-skeleton',['avatar',-1,'title',-1,'customClass',3,'loading',1,'row',2],[],e,s,gg)
_(lAD,aBD)
}
else{lAD.wxVkey=2
var tCD=_n('view')
_rz(z,tCD,'class',6,e,s,gg)
var bED=_mz(z,'view',['bind:tap',7,'class',1],[],e,s,gg)
var xGD=_n('view')
_rz(z,xGD,'class',9,e,s,gg)
var oHD=_n('view')
_rz(z,oHD,'class',10,e,s,gg)
var hKD=_n('forbid-icon')
_rz(z,hKD,'isForbid',11,e,s,gg)
_(oHD,hKD)
var fID=_v()
_(oHD,fID)
if(_oz(z,12,e,s,gg)){fID.wxVkey=1
var oLD=_n('rank-medal')
_rz(z,oLD,'rank',13,e,s,gg)
_(fID,oLD)
}
var cMD=_mz(z,'exp-flag',['level',14,'title',1],[],e,s,gg)
_(oHD,cMD)
var cJD=_v()
_(oHD,cJD)
if(_oz(z,16,e,s,gg)){cJD.wxVkey=1
}
fID.wxXCkey=1
fID.wxXCkey=3
cJD.wxXCkey=1
_(xGD,oHD)
var oND=_n('view')
_rz(z,oND,'class',17,e,s,gg)
var lOD=_v()
_(oND,lOD)
if(_oz(z,18,e,s,gg)){lOD.wxVkey=1
}
var aPD=_v()
_(oND,aPD)
if(_oz(z,19,e,s,gg)){aPD.wxVkey=1
}
var tQD=_v()
_(oND,tQD)
if(_oz(z,20,e,s,gg)){tQD.wxVkey=1
}
lOD.wxXCkey=1
aPD.wxXCkey=1
tQD.wxXCkey=1
_(xGD,oND)
_(bED,xGD)
var oFD=_v()
_(bED,oFD)
if(_oz(z,21,e,s,gg)){oFD.wxVkey=1
var eRD=_n('view')
_rz(z,eRD,'class',22,e,s,gg)
var bSD=_v()
_(eRD,bSD)
if(_oz(z,23,e,s,gg)){bSD.wxVkey=1
var oVD=_mz(z,'van-icon',['class',24,'name',1],[],e,s,gg)
_(bSD,oVD)
}
var oTD=_v()
_(eRD,oTD)
if(_oz(z,26,e,s,gg)){oTD.wxVkey=1
var fWD=_mz(z,'van-icon',['class',27,'name',1],[],e,s,gg)
_(oTD,fWD)
}
var xUD=_v()
_(eRD,xUD)
if(_oz(z,29,e,s,gg)){xUD.wxVkey=1
var cXD=_mz(z,'van-icon',['class',30,'name',1],[],e,s,gg)
_(xUD,cXD)
}
bSD.wxXCkey=1
bSD.wxXCkey=3
oTD.wxXCkey=1
oTD.wxXCkey=3
xUD.wxXCkey=1
xUD.wxXCkey=3
_(oFD,eRD)
}
else if(_oz(z,32,e,s,gg)){oFD.wxVkey=2
var hYD=_n('view')
_rz(z,hYD,'class',33,e,s,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,34,e,s,gg)){oZD.wxVkey=1
}
var c1D=_v()
_(hYD,c1D)
if(_oz(z,35,e,s,gg)){c1D.wxVkey=1
}
oZD.wxXCkey=1
c1D.wxXCkey=1
_(oFD,hYD)
}
oFD.wxXCkey=1
oFD.wxXCkey=3
_(tCD,bED)
var o2D=_n('view')
_rz(z,o2D,'class',36,e,s,gg)
var l3D=_v()
_(o2D,l3D)
if(_oz(z,37,e,s,gg)){l3D.wxVkey=1
var a4D=_mz(z,'view',['bind:tap',38,'class',1],[],e,s,gg)
var t5D=_mz(z,'van-icon',['class',40,'name',1],[],e,s,gg)
_(a4D,t5D)
_(l3D,a4D)
}
else if(_oz(z,42,e,s,gg)){l3D.wxVkey=2
}
else{l3D.wxVkey=3
var e6D=_n('view')
_rz(z,e6D,'bind:tap',43,e,s,gg)
var b7D=_v()
_(e6D,b7D)
if(_oz(z,44,e,s,gg)){b7D.wxVkey=1
}
else{b7D.wxVkey=2
var x9D=_v()
_(b7D,x9D)
if(_oz(z,45,e,s,gg)){x9D.wxVkey=1
var o0D=_mz(z,'reward-label',['prefix',46,'rewardPrice',1,'suffix',2],[],e,s,gg)
_(x9D,o0D)
}
x9D.wxXCkey=1
x9D.wxXCkey=3
}
var o8D=_v()
_(e6D,o8D)
if(_oz(z,49,e,s,gg)){o8D.wxVkey=1
var fAE=_mz(z,'img-show',['imgPaths',50,'showmenu',1],[],e,s,gg)
_(o8D,fAE)
}
b7D.wxXCkey=1
b7D.wxXCkey=3
o8D.wxXCkey=1
o8D.wxXCkey=3
_(l3D,e6D)
}
l3D.wxXCkey=1
l3D.wxXCkey=3
l3D.wxXCkey=3
_(tCD,o2D)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,52,e,s,gg)){eDD.wxVkey=1
var cBE=_v()
_(eDD,cBE)
var hCE=function(cEE,oDE,oFE,gg){
var aHE=_n('view')
_rz(z,aHE,'class',56,cEE,oDE,gg)
var eJE=_mz(z,'like',['class',57,'commentId',1,'fontSize',2,'iconSize',3,'isMx',4,'likeNum',5,'likeText',6,'likeDisabled',7,'likeNeedCert',8,'likeShow',9,'liked',10,'threadId',11],[],cEE,oDE,gg)
_(aHE,eJE)
var tIE=_v()
_(aHE,tIE)
if(_oz(z,69,cEE,oDE,gg)){tIE.wxVkey=1
}
tIE.wxXCkey=1
_(oFE,aHE)
return oFE
}
cBE.wxXCkey=4
_2z(z,54,hCE,e,s,gg,cBE,'commentItem','index','comment_id')
}
var bKE=_mz(z,'view',['bind:tap',70,'class',1],[],e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',72,e,s,gg)
var xME=_v()
_(oLE,xME)
if(_oz(z,73,e,s,gg)){xME.wxVkey=1
var oNE=_mz(z,'like',['bizType',74,'disabled',1,'fontSize',2,'horizontal',3,'iconNameNo',4,'iconNameYes',5,'iconSize',6,'isMx',7,'isSvg',8,'likeNum',9,'likeText',10,'likeDisabled',11,'likeNeedCert',12,'likeShow',13,'liked',14,'likedColor',15,'threadId',16],[],e,s,gg)
_(xME,oNE)
}
else{xME.wxVkey=2
var fOE=_mz(z,'like',['bizType',91,'disabled',1,'fontSize',2,'iconSize',3,'isMx',4,'likeNum',5,'likeDisabled',6,'likeShow',7,'likeText',8,'liked',9,'threadId',10],[],e,s,gg)
_(xME,fOE)
}
xME.wxXCkey=1
xME.wxXCkey=3
xME.wxXCkey=3
_(bKE,oLE)
_(tCD,bKE)
eDD.wxXCkey=1
eDD.wxXCkey=3
_(lAD,tCD)
}
lAD.wxXCkey=1
lAD.wxXCkey=3
lAD.wxXCkey=3
_(r,o0C)
var cPE=_mz(z,'van-dialog',['confirmButtonColor',102,'id',1,'zIndex',2],[],e,s,gg)
_(r,cPE)
return r
}
e_[x[14]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx0_14()
var oRE=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,3,e,s,gg)){cSE.wxVkey=1
var oTE=_n('view')
_rz(z,oTE,'class',4,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,5,e,s,gg)){lUE.wxVkey=1
var tWE=_mz(z,'reward-label',['customClass',6,'prefix',1,'rewardPrice',2,'suffix',3],[],e,s,gg)
_(lUE,tWE)
}
var aVE=_v()
_(oTE,aVE)
if(_oz(z,10,e,s,gg)){aVE.wxVkey=1
}
lUE.wxXCkey=1
lUE.wxXCkey=3
aVE.wxXCkey=1
_(cSE,oTE)
}
else{cSE.wxVkey=2
var eXE=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var bYE=_v()
_(eXE,bYE)
if(_oz(z,13,e,s,gg)){bYE.wxVkey=1
var x1E=_mz(z,'reward-label',['customClass',14,'prefix',1,'rewardPrice',2,'suffix',3],[],e,s,gg)
_(bYE,x1E)
}
var oZE=_v()
_(eXE,oZE)
if(_oz(z,18,e,s,gg)){oZE.wxVkey=1
}
bYE.wxXCkey=1
bYE.wxXCkey=3
oZE.wxXCkey=1
_(cSE,eXE)
}
var o2E=_n('view')
_rz(z,o2E,'class',19,e,s,gg)
var f3E=_v()
_(o2E,f3E)
if(_oz(z,20,e,s,gg)){f3E.wxVkey=1
var c4E=_n('view')
_rz(z,c4E,'class',21,e,s,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,22,e,s,gg)){h5E.wxVkey=1
}
var o6E=_v()
_(c4E,o6E)
if(_oz(z,23,e,s,gg)){o6E.wxVkey=1
}
h5E.wxXCkey=1
o6E.wxXCkey=1
_(f3E,c4E)
}
else{f3E.wxVkey=2
var c7E=_v()
_(f3E,c7E)
if(_oz(z,24,e,s,gg)){c7E.wxVkey=1
}
c7E.wxXCkey=1
}
var o8E=_n('view')
_rz(z,o8E,'class',25,e,s,gg)
var l9E=_v()
_(o8E,l9E)
if(_oz(z,26,e,s,gg)){l9E.wxVkey=1
var a0E=_mz(z,'like',['bizType',27,'color',1,'disabled',2,'fontSize',3,'horizontal',4,'iconNameNo',5,'iconNameYes',6,'iconSize',7,'isMx',8,'isSvg',9,'likeNum',10,'likeText',11,'likeDisabled',12,'likeNeedCert',13,'likeShow',14,'liked',15,'likedColor',16,'threadId',17],[],e,s,gg)
_(l9E,a0E)
}
else{l9E.wxVkey=2
var tAF=_mz(z,'like',['bizType',45,'color',1,'disabled',2,'fontSize',3,'iconSize',4,'isMx',5,'likeNum',6,'likeDisabled',7,'likeShow',8,'likeText',9,'liked',10,'threadId',11],[],e,s,gg)
_(l9E,tAF)
}
l9E.wxXCkey=1
l9E.wxXCkey=3
l9E.wxXCkey=3
_(o2E,o8E)
f3E.wxXCkey=1
_(oRE,o2E)
cSE.wxXCkey=1
cSE.wxXCkey=3
cSE.wxXCkey=3
_(r,oRE)
return r
}
e_[x[15]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx0_15()
var bCF=_n('slot')
_(r,bCF)
return r
}
e_[x[16]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx0_16()
var xEF=_v()
_(r,xEF)
if(_oz(z,0,e,s,gg)){xEF.wxVkey=1
var oFF=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var fGF=_mz(z,'van-icon',['class',3,'name',1,'size',2],[],e,s,gg)
_(oFF,fGF)
_(xEF,oFF)
}
var cHF=_mz(z,'van-action-sheet',['actions',6,'bind:cancel',1,'bind:click-overlay',2,'bind:select',3,'cancelText',4,'closeOnClickOverlay',5,'show',6],[],e,s,gg)
_(r,cHF)
var hIF=_n('van-dialog')
_rz(z,hIF,'id',13,e,s,gg)
_(r,hIF)
xEF.wxXCkey=1
xEF.wxXCkey=3
return r
}
e_[x[17]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx0_17()
var cKF=_n('view')
_rz(z,cKF,'class',0,e,s,gg)
var lMF=_n('view')
_rz(z,lMF,'class',1,e,s,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,2,e,s,gg)){aNF.wxVkey=1
var tOF=_mz(z,'view',['bindtap',3,'class',1,'data-page',2],[],e,s,gg)
var ePF=_mz(z,'icon',['svg',-1,'color',6,'customClass',1,'name',2,'size',3],[],e,s,gg)
_(tOF,ePF)
_(aNF,tOF)
}
var bQF=_mz(z,'user-avatar',['onlyAvatar',-1,'listenerKey',10,'mineInfo',1],[],e,s,gg)
_(lMF,bQF)
var oRF=_mz(z,'view',['catch:tap',12,'class',1],[],e,s,gg)
var xSF=_mz(z,'icon',['svg',-1,'color',14,'customClass',1,'name',2,'size',3],[],e,s,gg)
_(oRF,xSF)
_(lMF,oRF)
var oTF=_n('view')
_rz(z,oTF,'class',18,e,s,gg)
var cVF=_mz(z,'share',['class',19,'customClass',1,'fontColor',2,'fontSize',3,'iconSize',4,'shareColor',5,'threadItem',6],[],e,s,gg)
_(oTF,cVF)
var fUF=_v()
_(oTF,fUF)
if(_oz(z,26,e,s,gg)){fUF.wxVkey=1
var hWF=_mz(z,'mark',['isMx',-1,'bind:success',27,'color',1,'customClass',2,'fontSize',3,'iconSize',4,'isMark',5,'markNum',6,'threadId',7],[],e,s,gg)
_(fUF,hWF)
}
var oXF=_mz(z,'like',['isMx',-1,'vertical',-1,'bind:success',35,'bizType',1,'color',2,'customClass',3,'dislikeNum',4,'dislikeShow',5,'fontSize',6,'iconNameNo',7,'iconNameYes',8,'iconSize',9,'isSvg',10,'likeNum',11,'likeText',12,'likeNeedCert',13,'likeShow',14,'liked',15,'textColor',16,'threadId',17],[],e,s,gg)
_(oTF,oXF)
fUF.wxXCkey=1
fUF.wxXCkey=3
_(lMF,oTF)
aNF.wxXCkey=1
aNF.wxXCkey=3
_(cKF,lMF)
var oLF=_v()
_(cKF,oLF)
if(_oz(z,53,e,s,gg)){oLF.wxVkey=1
var cYF=_mz(z,'school-sug-select',['needCid',-1,'popup',-1,'bind:choose',54,'showPopup',1,'popupTitle',2],[],e,s,gg)
cYF.rawAttr={"model:show-popup":"{{schoolSugSelectShow}}",};_(oLF,cYF)
}
oLF.wxXCkey=1
oLF.wxXCkey=3
_(r,cKF)
return r
}
e_[x[18]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx0_18()
var l1F=_n('view')
_rz(z,l1F,'class',0,e,s,gg)
var a2F=_mz(z,'comment-sort',['bind:change',1,'bind:loaded',1,'bind:only-author-change',2,'bind:only-mark-change',3,'bind:only-mine-change',4,'commentCount',5,'customClass',6,'isOnlyMineShow',7,'isOnlyAuthor',8,'isOnlyMark',9,'isOnlyMine',10,'sortType',11,'onlyMarkShow',12],[],e,s,gg)
a2F.rawAttr={"model:is-only-author":"{{isOnlyAuthor}}","model:is-only-mark":"{{isOnlyMark}}","model:is-only-mine":"{{isOnlyMine}}","model:sort-type":"{{sortType}}",};_(l1F,a2F)
var t3F=_mz(z,'user-avatar',['onlyAvatar',-1,'listenerKey',14,'mineInfo',1],[],e,s,gg)
_(l1F,t3F)
var e4F=_n('view')
_rz(z,e4F,'class',16,e,s,gg)
var b5F=_v()
_(e4F,b5F)
if(_oz(z,17,e,s,gg)){b5F.wxVkey=1
var o6F=_v()
_(b5F,o6F)
if(_oz(z,18,e,s,gg)){o6F.wxVkey=1
var x7F=_n('view')
_rz(z,x7F,'class',19,e,s,gg)
var o8F=_v()
_(x7F,o8F)
if(_oz(z,20,e,s,gg)){o8F.wxVkey=1
}
var f9F=_n('list-empty')
_rz(z,f9F,'text',21,e,s,gg)
_(x7F,f9F)
o8F.wxXCkey=1
_(o6F,x7F)
}
else if(_oz(z,22,e,s,gg)){o6F.wxVkey=2
var hAG=_v()
_(o6F,hAG)
var oBG=function(oDG,cCG,lEG,gg){
var tGG=_mz(z,'view',['class',26,'id',1],[],oDG,cCG,gg)
var bIG=_v()
_(tGG,bIG)
var oJG=function(oLG,xKG,fMG,gg){
var hOG=_n('view')
var cQG=_mz(z,'top-comment',['bind:action',30,'bind:avatar-click',1,'bind:like-update',2,'bind:reply',3,'bind:reward-select',4,'chatOpen',5,'commentItem',6,'dislikeShow',7,'id',8,'isAnonTag',9,'newCommentId',10,'pushStatus',11,'queryCommentId',12,'showRewardSelect',13,'showThreadPushChange',14,'threadId',15],[],oLG,xKG,gg)
_(hOG,cQG)
var oPG=_v()
_(hOG,oPG)
if(_oz(z,46,oLG,xKG,gg)){oPG.wxVkey=1
var oRG=_n('view')
_rz(z,oRG,'class',47,oLG,xKG,gg)
var aTG=_v()
_(oRG,aTG)
var tUG=function(bWG,eVG,oXG,gg){
var oZG=_mz(z,'sub-comment',['avatarExpInfo',51,'bind:action',1,'bind:avatar-click',2,'bind:like-update',3,'bind:reply',4,'bind:reward-select',5,'chatOpen',6,'dislikeShow',7,'id',8,'isAnonTag',9,'newCommentId',10,'pushStatus',11,'queryCommentId',12,'replyItem',13,'showRewardSelect',14,'showThreadPushChange',15,'threadId',16],[],bWG,eVG,gg)
_(oXG,oZG)
return oXG
}
aTG.wxXCkey=4
_2z(z,49,tUG,oLG,xKG,gg,aTG,'replyItem','index','comment_id')
var lSG=_v()
_(oRG,lSG)
if(_oz(z,68,oLG,xKG,gg)){lSG.wxVkey=1
}
lSG.wxXCkey=1
_(oPG,oRG)
}
oPG.wxXCkey=1
oPG.wxXCkey=3
_(fMG,hOG)
return fMG
}
bIG.wxXCkey=4
_2z(z,28,oJG,oDG,cCG,gg,bIG,'item','index','comment_id')
var eHG=_v()
_(tGG,eHG)
if(_oz(z,69,oDG,cCG,gg)){eHG.wxVkey=1
}
eHG.wxXCkey=1
_(lEG,tGG)
return lEG
}
hAG.wxXCkey=4
_2z(z,24,oBG,e,s,gg,hAG,'item','pageNum','pageNum')
var c0F=_v()
_(o6F,c0F)
if(_oz(z,70,e,s,gg)){c0F.wxVkey=1
var f1G=_mz(z,'van-divider',['contentPosition',71,'customStyle',1],[],e,s,gg)
_(c0F,f1G)
}
c0F.wxXCkey=1
c0F.wxXCkey=3
}
else{o6F.wxVkey=3
var c2G=_n('list-empty')
_rz(z,c2G,'text',73,e,s,gg)
_(o6F,c2G)
}
o6F.wxXCkey=1
o6F.wxXCkey=3
o6F.wxXCkey=3
o6F.wxXCkey=3
}
else if(_oz(z,74,e,s,gg)){b5F.wxVkey=2
var h3G=_mz(z,'van-skeleton',['avatar',-1,'title',-1,'avatarClass',75,'customClass',1,'row',2],[],e,s,gg)
_(b5F,h3G)
var o4G=_mz(z,'van-skeleton',['avatar',-1,'title',-1,'avatarClass',78,'customClass',1,'row',2],[],e,s,gg)
_(b5F,o4G)
var c5G=_mz(z,'van-skeleton',['avatar',-1,'title',-1,'avatarClass',81,'customClass',1,'row',2],[],e,s,gg)
_(b5F,c5G)
}
b5F.wxXCkey=1
b5F.wxXCkey=3
b5F.wxXCkey=3
_(l1F,e4F)
var o6G=_mz(z,'comment-action',['bind:comment-reload',84,'bind:phone-verified',1,'bind:reply-success',2,'bind:thread-info-reload',3,'commentMineInfo',4,'commentItem',5,'config',6,'id',7,'threadId',8],[],e,s,gg)
_(l1F,o6G)
var l7G=_mz(z,'van-action-sheet',['actions',93,'bind:cancel',1,'bind:click-overlay',2,'bind:select',3,'cancelText',4,'show',5,'zIndex',6],[],e,s,gg)
_(l1F,l7G)
var a8G=_mz(z,'van-dialog',['confirmButtonColor',100,'id',1,'zIndex',2],[],e,s,gg)
_(l1F,a8G)
_(r,l1F)
return r
}
e_[x[19]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx0_19()
var e0G=_n('view')
_rz(z,e0G,'class',0,e,s,gg)
var bAH=_n('view')
_rz(z,bAH,'class',1,e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,2,e,s,gg)){oBH.wxVkey=1
var oDH=_mz(z,'view',['bind:tap',3,'class',1],[],e,s,gg)
var fEH=_mz(z,'icon',['svg',-1,'customClass',5,'name',1,'size',2],[],e,s,gg)
_(oDH,fEH)
_(oBH,oDH)
}
var xCH=_v()
_(bAH,xCH)
if(_oz(z,8,e,s,gg)){xCH.wxVkey=1
}
var cFH=_n('view')
_rz(z,cFH,'class',9,e,s,gg)
var cIH=_mz(z,'view',['catch:tap',10,'class',1,'data-key',2],[],e,s,gg)
var oJH=_v()
_(cIH,oJH)
if(_oz(z,13,e,s,gg)){oJH.wxVkey=1
var lKH=_mz(z,'van-icon',['svg',-1,'color',14,'name',1,'size',2],[],e,s,gg)
_(oJH,lKH)
}
oJH.wxXCkey=1
oJH.wxXCkey=3
_(cFH,cIH)
var hGH=_v()
_(cFH,hGH)
if(_oz(z,17,e,s,gg)){hGH.wxVkey=1
var aLH=_mz(z,'view',['catch:tap',18,'class',1,'data-key',2],[],e,s,gg)
var tMH=_v()
_(aLH,tMH)
if(_oz(z,21,e,s,gg)){tMH.wxVkey=1
var eNH=_mz(z,'van-icon',['svg',-1,'color',22,'name',1,'size',2],[],e,s,gg)
_(tMH,eNH)
}
tMH.wxXCkey=1
tMH.wxXCkey=3
_(hGH,aLH)
}
var oHH=_v()
_(cFH,oHH)
if(_oz(z,25,e,s,gg)){oHH.wxVkey=1
var bOH=_mz(z,'view',['catch:tap',26,'class',1,'data-key',2],[],e,s,gg)
var oPH=_v()
_(bOH,oPH)
if(_oz(z,29,e,s,gg)){oPH.wxVkey=1
var xQH=_mz(z,'van-icon',['svg',-1,'color',30,'name',1,'size',2],[],e,s,gg)
_(oPH,xQH)
}
oPH.wxXCkey=1
oPH.wxXCkey=3
_(oHH,bOH)
}
hGH.wxXCkey=1
hGH.wxXCkey=3
oHH.wxXCkey=1
oHH.wxXCkey=3
_(bAH,cFH)
oBH.wxXCkey=1
oBH.wxXCkey=3
xCH.wxXCkey=1
_(e0G,bAH)
var oRH=_n('view')
_rz(z,oRH,'class',33,e,s,gg)
var cTH=_mz(z,'view',['bind:tap',34,'class',1],[],e,s,gg)
var hUH=_v()
_(cTH,hUH)
if(_oz(z,36,e,s,gg)){hUH.wxVkey=1
var cWH=_n('view')
_rz(z,cWH,'class',37,e,s,gg)
var oXH=_mz(z,'icon',['svg',-1,'color',38,'customClass',1,'height',2,'name',3,'width',4],[],e,s,gg)
_(cWH,oXH)
var lYH=_mz(z,'icon',['svg',-1,'color',43,'height',1,'name',2,'width',3],[],e,s,gg)
_(cWH,lYH)
_(hUH,cWH)
}
var oVH=_v()
_(cTH,oVH)
if(_oz(z,47,e,s,gg)){oVH.wxVkey=1
var aZH=_n('view')
_rz(z,aZH,'class',48,e,s,gg)
var t1H=_mz(z,'icon',['svg',-1,'color',49,'customClass',1,'height',2,'name',3,'width',4],[],e,s,gg)
_(aZH,t1H)
var e2H=_mz(z,'icon',['svg',-1,'color',54,'customClass',1,'height',2,'name',3,'width',4],[],e,s,gg)
_(aZH,e2H)
_(oVH,aZH)
}
hUH.wxXCkey=1
hUH.wxXCkey=3
oVH.wxXCkey=1
oVH.wxXCkey=3
_(oRH,cTH)
var fSH=_v()
_(oRH,fSH)
if(_oz(z,59,e,s,gg)){fSH.wxVkey=1
}
fSH.wxXCkey=1
_(e0G,oRH)
_(r,e0G)
return r
}
e_[x[20]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx0_20()
var o4H=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var x5H=_mz(z,'van-icon',['class',2,'name',1],[],e,s,gg)
_(o4H,x5H)
var o6H=_mz(z,'van-button',['round',-1,'bindtap',4,'class',1,'size',2,'type',3],[],e,s,gg)
_(o4H,o6H)
_(r,o4H)
var f7H=_mz(z,'van-dialog',['confirmButtonColor',8,'id',1],[],e,s,gg)
_(r,f7H)
return r
}
e_[x[21]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx0_21()
var h9H=_mz(z,'view',['bind:tap',0,'class',1],[],e,s,gg)
var o0H=_v()
_(h9H,o0H)
if(_oz(z,2,e,s,gg)){o0H.wxVkey=1
var cAI=_mz(z,'exp-info-popover',['bind:reward-select',3,'chatOpen',1,'commentId',2,'id',3,'isAnon',4,'isMine',5,'showRewardSelect',6,'threadId',7],[],e,s,gg)
_(o0H,cAI)
}
var oBI=_n('view')
_rz(z,oBI,'class',11,e,s,gg)
var lCI=_v()
_(oBI,lCI)
if(_oz(z,12,e,s,gg)){lCI.wxVkey=1
var tEI=_mz(z,'van-icon',['catch:tap',13,'class',1,'data-item',2,'name',3],[],e,s,gg)
_(lCI,tEI)
}
var eFI=_n('view')
_rz(z,eFI,'class',17,e,s,gg)
var bGI=_v()
_(eFI,bGI)
if(_oz(z,18,e,s,gg)){bGI.wxVkey=1
}
var oHI=_v()
_(eFI,oHI)
if(_oz(z,19,e,s,gg)){oHI.wxVkey=1
var cLI=_mz(z,'forbid-icon',['class',20,'isForbid',1],[],e,s,gg)
_(oHI,cLI)
}
var xII=_v()
_(eFI,xII)
if(_oz(z,22,e,s,gg)){xII.wxVkey=1
var hMI=_mz(z,'icon',['svg',-1,'color',23,'customClass',1,'name',2],[],e,s,gg)
_(xII,hMI)
}
else if(_oz(z,26,e,s,gg)){xII.wxVkey=2
var oNI=_mz(z,'icon',['svg',-1,'color',27,'customClass',1,'name',2],[],e,s,gg)
_(xII,oNI)
}
var oJI=_v()
_(eFI,oJI)
if(_oz(z,30,e,s,gg)){oJI.wxVkey=1
var cOI=_n('rank-medal')
_rz(z,cOI,'rank',31,e,s,gg)
_(oJI,cOI)
}
var fKI=_v()
_(eFI,fKI)
if(_oz(z,32,e,s,gg)){fKI.wxVkey=1
var oPI=_mz(z,'exp-flag',['level',33,'title',1],[],e,s,gg)
_(fKI,oPI)
}
bGI.wxXCkey=1
oHI.wxXCkey=1
oHI.wxXCkey=3
xII.wxXCkey=1
xII.wxXCkey=3
xII.wxXCkey=3
oJI.wxXCkey=1
oJI.wxXCkey=3
fKI.wxXCkey=1
fKI.wxXCkey=3
_(oBI,eFI)
var lQI=_n('view')
_rz(z,lQI,'class',35,e,s,gg)
var aRI=_v()
_(lQI,aRI)
if(_oz(z,36,e,s,gg)){aRI.wxVkey=1
var eTI=_v()
_(aRI,eTI)
if(_oz(z,37,e,s,gg)){eTI.wxVkey=1
}
eTI.wxXCkey=1
}
var tSI=_v()
_(lQI,tSI)
if(_oz(z,38,e,s,gg)){tSI.wxVkey=1
}
aRI.wxXCkey=1
tSI.wxXCkey=1
_(oBI,lQI)
var aDI=_v()
_(oBI,aDI)
if(_oz(z,39,e,s,gg)){aDI.wxVkey=1
}
var bUI=_n('view')
_rz(z,bUI,'class',40,e,s,gg)
var oVI=_v()
_(bUI,oVI)
if(_oz(z,41,e,s,gg)){oVI.wxVkey=1
var xWI=_mz(z,'view',['catch:tap',42,'class',1],[],e,s,gg)
var oXI=_mz(z,'van-icon',['class',44,'name',1],[],e,s,gg)
_(xWI,oXI)
_(oVI,xWI)
}
else if(_oz(z,46,e,s,gg)){oVI.wxVkey=2
}
else{oVI.wxVkey=3
var fYI=_v()
_(oVI,fYI)
if(_oz(z,47,e,s,gg)){fYI.wxVkey=1
var h1I=_v()
_(fYI,h1I)
if(_oz(z,48,e,s,gg)){h1I.wxVkey=1
}
h1I.wxXCkey=1
}
var cZI=_v()
_(oVI,cZI)
if(_oz(z,49,e,s,gg)){cZI.wxVkey=1
var o2I=_mz(z,'img-show',['customImgClass',50,'imgList',1,'showMenu',2],[],e,s,gg)
_(cZI,o2I)
}
fYI.wxXCkey=1
cZI.wxXCkey=1
cZI.wxXCkey=3
}
oVI.wxXCkey=1
oVI.wxXCkey=3
oVI.wxXCkey=3
_(oBI,bUI)
var c3I=_mz(z,'view',['class',53,'style',1],[],e,s,gg)
var o4I=_v()
_(c3I,o4I)
if(_oz(z,55,e,s,gg)){o4I.wxVkey=1
var a6I=_mz(z,'like',['bind:success',56,'color',1,'commentId',2,'disabled',3,'dislikeNum',4,'dislikeShow',5,'dislikeText',6,'dislikeDisabled',7,'disliked',8,'fontSize',9,'iconSize',10,'isMx',11,'likeNum',12,'likeText',13,'likeNeedCert',14,'likeShow',15,'liked',16,'margin',17,'threadId',18],[],e,s,gg)
_(o4I,a6I)
}
var t7I=_mz(z,'icon',['svg',-1,'customClass',75,'name',1,'size',2],[],e,s,gg)
_(c3I,t7I)
var l5I=_v()
_(c3I,l5I)
if(_oz(z,78,e,s,gg)){l5I.wxVkey=1
var e8I=_mz(z,'thread-push-change',['class',79,'closeText',1,'highlightStatus',2,'isMx',3,'openText',4,'pushStatus',5,'replyCommentId',6,'threadId',7],[],e,s,gg)
_(l5I,e8I)
}
o4I.wxXCkey=1
o4I.wxXCkey=3
l5I.wxXCkey=1
l5I.wxXCkey=3
_(oBI,c3I)
lCI.wxXCkey=1
lCI.wxXCkey=3
aDI.wxXCkey=1
_(h9H,oBI)
o0H.wxXCkey=1
o0H.wxXCkey=3
_(r,h9H)
var b9I=_mz(z,'van-dialog',['confirmButtonColor',87,'id',1],[],e,s,gg)
_(r,b9I)
return r
}
e_[x[22]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx0_22()
var xAJ=_mz(z,'view',['bind:tap',0,'class',1],[],e,s,gg)
var oBJ=_v()
_(xAJ,oBJ)
if(_oz(z,2,e,s,gg)){oBJ.wxVkey=1
var fCJ=_mz(z,'exp-info-popover',['bind:reward-select',3,'chatOpen',1,'commentId',2,'id',3,'isAnon',4,'isMine',5,'showRewardSelect',6,'threadId',7],[],e,s,gg)
_(oBJ,fCJ)
}
var cDJ=_n('view')
_rz(z,cDJ,'class',11,e,s,gg)
var hEJ=_v()
_(cDJ,hEJ)
if(_oz(z,12,e,s,gg)){hEJ.wxVkey=1
var cGJ=_mz(z,'van-icon',['catch:tap',13,'class',1,'name',2],[],e,s,gg)
_(hEJ,cGJ)
}
var oHJ=_n('view')
_rz(z,oHJ,'class',16,e,s,gg)
var lIJ=_v()
_(oHJ,lIJ)
if(_oz(z,17,e,s,gg)){lIJ.wxVkey=1
}
var bMJ=_n('forbid-icon')
_rz(z,bMJ,'isForbid',18,e,s,gg)
_(oHJ,bMJ)
var aJJ=_v()
_(oHJ,aJJ)
if(_oz(z,19,e,s,gg)){aJJ.wxVkey=1
var oNJ=_mz(z,'icon',['svg',-1,'color',20,'customClass',1,'name',2],[],e,s,gg)
_(aJJ,oNJ)
}
var tKJ=_v()
_(oHJ,tKJ)
if(_oz(z,23,e,s,gg)){tKJ.wxVkey=1
var xOJ=_n('rank-medal')
_rz(z,xOJ,'rank',24,e,s,gg)
_(tKJ,xOJ)
}
var eLJ=_v()
_(oHJ,eLJ)
if(_oz(z,25,e,s,gg)){eLJ.wxVkey=1
var oPJ=_mz(z,'exp-flag',['level',26,'title',1],[],e,s,gg)
_(eLJ,oPJ)
}
lIJ.wxXCkey=1
aJJ.wxXCkey=1
aJJ.wxXCkey=3
tKJ.wxXCkey=1
tKJ.wxXCkey=3
eLJ.wxXCkey=1
eLJ.wxXCkey=3
_(cDJ,oHJ)
var fQJ=_n('view')
_rz(z,fQJ,'class',28,e,s,gg)
var cRJ=_v()
_(fQJ,cRJ)
if(_oz(z,29,e,s,gg)){cRJ.wxVkey=1
}
var hSJ=_v()
_(fQJ,hSJ)
if(_oz(z,30,e,s,gg)){hSJ.wxVkey=1
}
cRJ.wxXCkey=1
hSJ.wxXCkey=1
_(cDJ,fQJ)
var oFJ=_v()
_(cDJ,oFJ)
if(_oz(z,31,e,s,gg)){oFJ.wxVkey=1
}
var oTJ=_n('view')
_rz(z,oTJ,'class',32,e,s,gg)
var cUJ=_v()
_(oTJ,cUJ)
if(_oz(z,33,e,s,gg)){cUJ.wxVkey=1
var oVJ=_mz(z,'view',['catch:tap',34,'class',1],[],e,s,gg)
var lWJ=_mz(z,'van-icon',['class',36,'name',1],[],e,s,gg)
_(oVJ,lWJ)
_(cUJ,oVJ)
}
else if(_oz(z,38,e,s,gg)){cUJ.wxVkey=2
}
else{cUJ.wxVkey=3
var aXJ=_v()
_(cUJ,aXJ)
if(_oz(z,39,e,s,gg)){aXJ.wxVkey=1
var tYJ=_mz(z,'img-show',['customImgClass',40,'imgList',1,'showMenu',2],[],e,s,gg)
_(aXJ,tYJ)
}
aXJ.wxXCkey=1
aXJ.wxXCkey=3
}
cUJ.wxXCkey=1
cUJ.wxXCkey=3
cUJ.wxXCkey=3
_(cDJ,oTJ)
var eZJ=_mz(z,'view',['class',43,'style',1],[],e,s,gg)
var b1J=_v()
_(eZJ,b1J)
if(_oz(z,45,e,s,gg)){b1J.wxVkey=1
var x3J=_mz(z,'like',['bind:success',46,'color',1,'commentId',2,'disabled',3,'dislikeNum',4,'dislikeShow',5,'dislikeText',6,'dislikeDisabled',7,'disliked',8,'iconSize',9,'isMx',10,'likeNum',11,'likeText',12,'likeNeedCert',13,'likeShow',14,'liked',15,'margin',16,'threadId',17],[],e,s,gg)
_(b1J,x3J)
}
var o4J=_mz(z,'icon',['svg',-1,'customClass',64,'name',1,'size',2],[],e,s,gg)
_(eZJ,o4J)
var o2J=_v()
_(eZJ,o2J)
if(_oz(z,67,e,s,gg)){o2J.wxVkey=1
var f5J=_mz(z,'thread-push-change',['class',68,'closeText',1,'highlightStatus',2,'isMx',3,'openText',4,'pushStatus',5,'replyCommentId',6,'threadId',7],[],e,s,gg)
_(o2J,f5J)
}
b1J.wxXCkey=1
b1J.wxXCkey=3
o2J.wxXCkey=1
o2J.wxXCkey=3
_(cDJ,eZJ)
hEJ.wxXCkey=1
hEJ.wxXCkey=3
oFJ.wxXCkey=1
_(xAJ,cDJ)
oBJ.wxXCkey=1
oBJ.wxXCkey=3
_(r,xAJ)
var c6J=_mz(z,'van-dialog',['confirmButtonColor',76,'id',1],[],e,s,gg)
_(r,c6J)
return r
}
e_[x[23]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx0_23()
var o8J=_mz(z,'van-action-sheet',['actions',0,'bind:cancel',1,'bind:click-overlay',1,'bind:select',2,'cancelText',3,'description',4,'show',5,'zIndex',6],[],e,s,gg)
_(r,o8J)
var c9J=_mz(z,'reply',['bind:phone-verified',8,'bind:posted',1,'commentMineInfo',2,'config',3,'from',4,'id',5,'threadId',6],[],e,s,gg)
_(r,c9J)
return r
}
e_[x[24]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx0_24()
var lAK=_mz(z,'van-dialog',['useSlot',-1,'beforeClose',0,'closeOnClickOverlay',1,'confirmButtonColor',1,'show',2,'showCancelButton',3,'transition',4,'zIndex',5],[],e,s,gg)
var aBK=_n('view')
_rz(z,aBK,'class',7,e,s,gg)
var tCK=_v()
_(aBK,tCK)
if(_oz(z,8,e,s,gg)){tCK.wxVkey=1
var oHK=_mz(z,'user-avatar',['autoSwitch',-1,'bind:change',9,'listenerKey',1,'mineInfo',2],[],e,s,gg)
_(tCK,oHK)
}
var eDK=_v()
_(aBK,eDK)
if(_oz(z,12,e,s,gg)){eDK.wxVkey=1
}
var bEK=_v()
_(aBK,bEK)
if(_oz(z,13,e,s,gg)){bEK.wxVkey=1
}
var oFK=_v()
_(aBK,oFK)
if(_oz(z,14,e,s,gg)){oFK.wxVkey=1
var fIK=_n('view')
_rz(z,fIK,'class',15,e,s,gg)
var hKK=_v()
_(fIK,hKK)
var oLK=function(oNK,cMK,lOK,gg){
var tQK=_mz(z,'view',['bind:tap',18,'class',1,'data-index',2],[],oNK,cMK,gg)
var eRK=_mz(z,'van-icon',['catch:tap',21,'class',1,'color',2,'data-index',3,'name',4],[],oNK,cMK,gg)
_(tQK,eRK)
_(lOK,tQK)
return lOK
}
hKK.wxXCkey=4
_2z(z,16,oLK,e,s,gg,hKK,'item','index','*this')
var cJK=_v()
_(fIK,cJK)
if(_oz(z,26,e,s,gg)){cJK.wxVkey=1
var bSK=_mz(z,'view',['bind:tap',27,'class',1],[],e,s,gg)
var oTK=_mz(z,'uploader',['bind:uploadSuccess',29,'count',1,'customStyle',2,'disabled',3,'uploadFrom',4],[],e,s,gg)
_(bSK,oTK)
_(cJK,bSK)
}
cJK.wxXCkey=1
cJK.wxXCkey=3
_(oFK,fIK)
}
var xGK=_v()
_(aBK,xGK)
if(_oz(z,34,e,s,gg)){xGK.wxVkey=1
}
tCK.wxXCkey=1
tCK.wxXCkey=3
eDK.wxXCkey=1
bEK.wxXCkey=1
oFK.wxXCkey=1
oFK.wxXCkey=3
xGK.wxXCkey=1
_(lAK,aBK)
_(r,lAK)
var xUK=_mz(z,'van-dialog',['confirmButtonColor',35,'id',1,'zIndex',2],[],e,s,gg)
_(r,xUK)
var oVK=_n('van-toast')
_rz(z,oVK,'id',38,e,s,gg)
_(r,oVK)
var fWK=_mz(z,'subMsgTips',['from',39,'id',1],[],e,s,gg)
_(r,fWK)
var cXK=_mz(z,'phone-verify-popup',['action',41,'agreeNeed',1,'bind:cancel',2,'bind:success',3,'bindText',4,'closeOnClickOverlay',5,'desc',6,'show',7,'phoneNeed',8,'scene',9,'title',10],[],e,s,gg)
cXK.rawAttr={"model:show":"{{phoneVerifyShow}}",};_(r,cXK)
return r
}
e_[x[25]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx0_25()
var oZK=_n('view')
_rz(z,oZK,'class',0,e,s,gg)
var c1K=_n('view')
_rz(z,c1K,'class',1,e,s,gg)
var l3K=_n('view')
_rz(z,l3K,'class',2,e,s,gg)
var a4K=_v()
_(l3K,a4K)
if(_oz(z,3,e,s,gg)){a4K.wxVkey=1
var t5K=_mz(z,'exp-info-popover',['chatOpen',4,'id',1,'isAnon',2,'isMine',3,'threadId',4],[],e,s,gg)
_(a4K,t5K)
}
var e6K=_n('view')
_rz(z,e6K,'class',9,e,s,gg)
var o8K=_n('view')
_rz(z,o8K,'class',10,e,s,gg)
var x9K=_v()
_(o8K,x9K)
if(_oz(z,11,e,s,gg)){x9K.wxVkey=1
}
var cBL=_n('forbid-icon')
_rz(z,cBL,'isForbid',12,e,s,gg)
_(o8K,cBL)
var o0K=_v()
_(o8K,o0K)
if(_oz(z,13,e,s,gg)){o0K.wxVkey=1
var hCL=_n('rank-medal')
_rz(z,hCL,'rank',14,e,s,gg)
_(o0K,hCL)
}
var oDL=_mz(z,'exp-flag',['level',15,'title',1],[],e,s,gg)
_(o8K,oDL)
var fAL=_v()
_(o8K,fAL)
if(_oz(z,17,e,s,gg)){fAL.wxVkey=1
var cEL=_mz(z,'chat-entry',['scene',18,'style',1,'threadId',2],[],e,s,gg)
_(fAL,cEL)
}
x9K.wxXCkey=1
o0K.wxXCkey=1
o0K.wxXCkey=3
fAL.wxXCkey=1
fAL.wxXCkey=3
_(e6K,o8K)
var b7K=_v()
_(e6K,b7K)
if(_oz(z,21,e,s,gg)){b7K.wxVkey=1
}
b7K.wxXCkey=1
_(l3K,e6K)
a4K.wxXCkey=1
a4K.wxXCkey=3
_(c1K,l3K)
var o2K=_v()
_(c1K,o2K)
if(_oz(z,22,e,s,gg)){o2K.wxVkey=1
}
o2K.wxXCkey=1
_(oZK,c1K)
var oFL=_mz(z,'img-swiper',['imgList',23,'showMenu',1],[],e,s,gg)
_(oZK,oFL)
var lGL=_n('view')
_rz(z,lGL,'class',25,e,s,gg)
var aHL=_v()
_(lGL,aHL)
if(_oz(z,26,e,s,gg)){aHL.wxVkey=1
var eJL=_n('van-icon')
_rz(z,eJL,'name',27,e,s,gg)
_(aHL,eJL)
}
var bKL=_mz(z,'view',['bind:longpress',28,'class',1],[],e,s,gg)
var oLL=_v()
_(bKL,oLL)
if(_oz(z,30,e,s,gg)){oLL.wxVkey=1
}
oLL.wxXCkey=1
_(lGL,bKL)
var xML=_n('view')
_rz(z,xML,'class',31,e,s,gg)
var oNL=_v()
_(xML,oNL)
if(_oz(z,32,e,s,gg)){oNL.wxVkey=1
var cPL=_v()
_(oNL,cPL)
if(_oz(z,33,e,s,gg)){cPL.wxVkey=1
}
cPL.wxXCkey=1
}
var fOL=_v()
_(xML,fOL)
if(_oz(z,34,e,s,gg)){fOL.wxVkey=1
}
oNL.wxXCkey=1
fOL.wxXCkey=1
_(lGL,xML)
var tIL=_v()
_(lGL,tIL)
if(_oz(z,35,e,s,gg)){tIL.wxVkey=1
var hQL=_mz(z,'reward-info',['customClass',36,'info',1,'isMine',2],[],e,s,gg)
_(tIL,hQL)
}
aHL.wxXCkey=1
aHL.wxXCkey=3
tIL.wxXCkey=1
tIL.wxXCkey=3
_(oZK,lGL)
_(r,oZK)
return r
}
e_[x[26]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx0_26()
var cSL=_v()
_(r,cSL)
if(_oz(z,0,e,s,gg)){cSL.wxVkey=1
}
cSL.wxXCkey=1
return r
}
e_[x[27]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx0_27()
var lUL=_n('view')
_rz(z,lUL,'class',0,e,s,gg)
var eXL=_mz(z,'view',['catchtap',1,'class',1],[],e,s,gg)
var bYL=_mz(z,'icon',['svg',-1,'color',3,'name',1,'size',2],[],e,s,gg)
_(eXL,bYL)
_(lUL,eXL)
var oZL=_mz(z,'van-share-sheet',['bind:close',6,'bind:select',1,'duration',2,'options',3,'show',4,'title',5],[],e,s,gg)
_(lUL,oZL)
var aVL=_v()
_(lUL,aVL)
if(_oz(z,12,e,s,gg)){aVL.wxVkey=1
var x1L=_mz(z,'view',['catchtap',13,'class',1],[],e,s,gg)
var f3L=_mz(z,'painter',['bind:imgErr',15,'bind:imgOK',1,'palette',2,'scaleRatio',3],[],e,s,gg)
_(x1L,f3L)
var o2L=_v()
_(x1L,o2L)
if(_oz(z,19,e,s,gg)){o2L.wxVkey=1
var c4L=_n('van-loading')
_(o2L,c4L)
}
o2L.wxXCkey=1
o2L.wxXCkey=3
_(aVL,x1L)
}
var tWL=_v()
_(lUL,tWL)
if(_oz(z,20,e,s,gg)){tWL.wxVkey=1
var h5L=_v()
_(tWL,h5L)
if(_oz(z,21,e,s,gg)){h5L.wxVkey=1
}
h5L.wxXCkey=1
}
aVL.wxXCkey=1
aVL.wxXCkey=3
tWL.wxXCkey=1
_(r,lUL)
return r
}
e_[x[28]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx0_28()
var c7L=_v()
_(r,c7L)
if(_oz(z,0,e,s,gg)){c7L.wxVkey=1
var o8L=_mz(z,'view',['catch:tap',1,'class',1],[],e,s,gg)
var l9L=_v()
_(o8L,l9L)
if(_oz(z,3,e,s,gg)){l9L.wxVkey=1
var a0L=_v()
_(l9L,a0L)
var tAM=function(bCM,eBM,oDM,gg){
var oFM=_v()
_(oDM,oFM)
var fGM=function(hIM,cHM,oJM,gg){
var oLM=_v()
_(oJM,oLM)
if(_oz(z,10,hIM,cHM,gg)){oLM.wxVkey=1
}
var lMM=_v()
_(oJM,lMM)
if(_oz(z,11,hIM,cHM,gg)){lMM.wxVkey=1
}
var aNM=_v()
_(oJM,aNM)
if(_oz(z,12,hIM,cHM,gg)){aNM.wxVkey=1
}
oLM.wxXCkey=1
lMM.wxXCkey=1
aNM.wxXCkey=1
return oJM
}
oFM.wxXCkey=2
_2z(z,8,fGM,bCM,eBM,gg,oFM,'item','index','index')
return oDM
}
a0L.wxXCkey=2
_2z(z,5,tAM,e,s,gg,a0L,'itemList','index','index')
}
else{l9L.wxVkey=2
var tOM=_n('view')
_rz(z,tOM,'class',13,e,s,gg)
var bQM=_v()
_(tOM,bQM)
var oRM=function(oTM,xSM,fUM,gg){
var hWM=_v()
_(fUM,hWM)
if(_oz(z,16,oTM,xSM,gg)){hWM.wxVkey=1
}
hWM.wxXCkey=1
return fUM
}
bQM.wxXCkey=2
_2z(z,14,oRM,e,s,gg,bQM,'item','index','index')
var ePM=_v()
_(tOM,ePM)
if(_oz(z,17,e,s,gg)){ePM.wxVkey=1
}
ePM.wxXCkey=1
_(l9L,tOM)
}
l9L.wxXCkey=1
_(c7L,o8L)
}
c7L.wxXCkey=1
return r
}
e_[x[29]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx0_29()
var cYM=_mz(z,'form-card',['customClass',0,'title',1],[],e,s,gg)
var oZM=_n('view')
_rz(z,oZM,'class',2,e,s,gg)
var l1M=_v()
_(oZM,l1M)
if(_oz(z,3,e,s,gg)){l1M.wxVkey=1
}
var a2M=_v()
_(oZM,a2M)
if(_oz(z,4,e,s,gg)){a2M.wxVkey=1
var t3M=_mz(z,'uploader',['bind:uploadSuccess',5,'count',1,'customClass',2,'uploadFrom',3],[],e,s,gg)
var e4M=_mz(z,'icon',['svg',-1,'class',9,'name',1,'size',2],[],e,s,gg)
_(t3M,e4M)
_(a2M,t3M)
}
l1M.wxXCkey=1
a2M.wxXCkey=1
a2M.wxXCkey=3
_(cYM,oZM)
_(r,cYM)
var b5M=_mz(z,'form-card',['bodyClass',12,'customClass',1,'title',2],[],e,s,gg)
_(r,b5M)
var o6M=_mz(z,'form-card',['bodyClass',15,'customClass',1,'title',2],[],e,s,gg)
_(r,o6M)
return r
}
e_[x[30]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx0_30()
var o8M=_v()
_(r,o8M)
if(_oz(z,0,e,s,gg)){o8M.wxVkey=1
var f9M=e_[x[31]].j
_ic(x[32],e_,x[31],e,s,o8M,gg);
f9M.pop()
}
else{o8M.wxVkey=2
var c0M=_n('view')
_rz(z,c0M,'class',1,e,s,gg)
var hAN=_v()
_(c0M,hAN)
if(_oz(z,2,e,s,gg)){hAN.wxVkey=1
}
var oBN=_v()
_(c0M,oBN)
if(_oz(z,3,e,s,gg)){oBN.wxVkey=1
var cCN=_v()
_(oBN,cCN)
if(_oz(z,4,e,s,gg)){cCN.wxVkey=1
var oDN=_mz(z,'uploader',['bind:uploadSuccess',5,'count',1,'customStyle',2,'uploadFrom',3],[],e,s,gg)
_(cCN,oDN)
}
cCN.wxXCkey=1
cCN.wxXCkey=3
}
hAN.wxXCkey=1
oBN.wxXCkey=1
oBN.wxXCkey=3
_(o8M,c0M)
}
o8M.wxXCkey=1
o8M.wxXCkey=3
return r
}
e_[x[31]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx0_31()
var aFN=_n('view')
_rz(z,aFN,'class',0,e,s,gg)
var eHN=_mz(z,'price-picker',['bind:change',1,'rewardPriceDefault',1,'rewardPriceMin',2],[],e,s,gg)
_(aFN,eHN)
var tGN=_v()
_(aFN,tGN)
if(_oz(z,4,e,s,gg)){tGN.wxVkey=1
var bIN=_mz(z,'rule-picker',['bind:change',5,'rewardRatio',1,'ruleCustom',2,'show',3],[],e,s,gg)
_(tGN,bIN)
}
tGN.wxXCkey=1
tGN.wxXCkey=3
_(r,aFN)
return r
}
e_[x[33]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx0_32()
return r
}
e_[x[34]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx0_33()
var oLN=_n('view')
_rz(z,oLN,'class',0,e,s,gg)
var cNN=_mz(z,'van-slider',['useButtonSlot',-1,'activeColor',1,'bind:change',1,'bind:drag',2,'customClass',3,'inactiveColor',4,'max',5,'min',6,'step',7,'style',8,'value',9],[],e,s,gg)
var hON=_mz(z,'view',['class',11,'slot',1,'style',2],[],e,s,gg)
var oPN=_v()
_(hON,oPN)
if(_oz(z,14,e,s,gg)){oPN.wxVkey=1
}
oPN.wxXCkey=1
_(cNN,hON)
_(oLN,cNN)
var fMN=_v()
_(oLN,fMN)
if(_oz(z,15,e,s,gg)){fMN.wxVkey=1
}
fMN.wxXCkey=1
_(r,oLN)
return r
}
e_[x[35]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx0_34()
var oRN=_n('view')
_rz(z,oRN,'class',0,e,s,gg)
var lSN=_v()
_(oRN,lSN)
if(_oz(z,1,e,s,gg)){lSN.wxVkey=1
var tUN=_v()
_(lSN,tUN)
var eVN=function(oXN,bWN,xYN,gg){
var f1N=_v()
_(xYN,f1N)
if(_oz(z,4,oXN,bWN,gg)){f1N.wxVkey=1
var c2N=_v()
_(f1N,c2N)
if(_oz(z,5,oXN,bWN,gg)){c2N.wxVkey=1
var h3N=_mz(z,'icon',['class',6,'type',1],[],oXN,bWN,gg)
_(c2N,h3N)
}
c2N.wxXCkey=1
c2N.wxXCkey=3
}
f1N.wxXCkey=1
f1N.wxXCkey=3
return xYN
}
tUN.wxXCkey=4
_2z(z,2,eVN,e,s,gg,tUN,'item','index','index')
}
else{lSN.wxVkey=2
var o4N=_v()
_(lSN,o4N)
var c5N=function(l7N,o6N,a8N,gg){
var e0N=_v()
_(a8N,e0N)
if(_oz(z,10,l7N,o6N,gg)){e0N.wxVkey=1
}
e0N.wxXCkey=1
return a8N
}
o4N.wxXCkey=2
_2z(z,8,c5N,e,s,gg,o4N,'item','index','index')
}
var aTN=_v()
_(oRN,aTN)
if(_oz(z,11,e,s,gg)){aTN.wxVkey=1
var bAO=_n('view')
_rz(z,bAO,'class',12,e,s,gg)
var oBO=_v()
_(bAO,oBO)
if(_oz(z,13,e,s,gg)){oBO.wxVkey=1
}
var xCO=_v()
_(bAO,xCO)
var oDO=function(cFO,fEO,hGO,gg){
var cIO=_v()
_(hGO,cIO)
if(_oz(z,16,cFO,fEO,gg)){cIO.wxVkey=1
}
cIO.wxXCkey=1
return hGO
}
xCO.wxXCkey=2
_2z(z,14,oDO,e,s,gg,xCO,'item','index','index')
oBO.wxXCkey=1
_(aTN,bAO)
}
var oJO=_n('view')
_rz(z,oJO,'class',17,e,s,gg)
var lKO=_v()
_(oJO,lKO)
if(_oz(z,18,e,s,gg)){lKO.wxVkey=1
}
var aLO=_v()
_(oJO,aLO)
if(_oz(z,19,e,s,gg)){aLO.wxVkey=1
}
var tMO=_v()
_(oJO,tMO)
if(_oz(z,20,e,s,gg)){tMO.wxVkey=1
}
lKO.wxXCkey=1
aLO.wxXCkey=1
tMO.wxXCkey=1
_(oRN,oJO)
lSN.wxXCkey=1
lSN.wxXCkey=3
aTN.wxXCkey=1
_(r,oRN)
return r
}
e_[x[36]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx0_35()
var bOO=_v()
_(r,bOO)
if(_oz(z,0,e,s,gg)){bOO.wxVkey=1
var oPO=_n('view')
_rz(z,oPO,'class',1,e,s,gg)
var xQO=_mz(z,'circle-chart',['data',2,'size',1],[],e,s,gg)
_(oPO,xQO)
var oRO=_mz(z,'van-checkbox-group',['bind:change',4,'disabled',1,'value',2],[],e,s,gg)
var fSO=_v()
_(oRO,fSO)
var cTO=function(oVO,hUO,cWO,gg){
var lYO=_mz(z,'view',['bind:tap',9,'class',1,'data-id',2],[],oVO,hUO,gg)
var aZO=_mz(z,'van-checkbox',['checkedColor',12,'color',1,'customClass',2,'iconClass',3,'iconSize',4,'id',5,'labelClass',6,'name',7,'useIconSlot',8],[],oVO,hUO,gg)
_(lYO,aZO)
_(cWO,lYO)
return cWO
}
fSO.wxXCkey=4
_2z(z,7,cTO,e,s,gg,fSO,'item','index','id')
_(oPO,oRO)
_(bOO,oPO)
}
bOO.wxXCkey=1
bOO.wxXCkey=3
return r
}
e_[x[37]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx0_36()
var e2O=_n('view')
_rz(z,e2O,'class',0,e,s,gg)
var o4O=_mz(z,'view',['bindtap',1,'class',1],[],e,s,gg)
var o6O=_mz(z,'van-icon',['class',3,'name',1,'size',2],[],e,s,gg)
_(o4O,o6O)
var x5O=_v()
_(o4O,x5O)
if(_oz(z,6,e,s,gg)){x5O.wxVkey=1
var f7O=_mz(z,'van-icon',['class',7,'name',1,'size',2],[],e,s,gg)
_(x5O,f7O)
}
x5O.wxXCkey=1
x5O.wxXCkey=3
_(e2O,o4O)
var b3O=_v()
_(e2O,b3O)
if(_oz(z,10,e,s,gg)){b3O.wxVkey=1
var c8O=_mz(z,'van-popup',['bind:close',11,'position',1,'show',2],[],e,s,gg)
var h9O=_mz(z,'van-picker',['showToolbar',-1,'bindcancel',14,'bindconfirm',1,'columns',2],[],e,s,gg)
_(c8O,h9O)
_(b3O,c8O)
}
b3O.wxXCkey=1
b3O.wxXCkey=3
_(r,e2O)
return r
}
e_[x[38]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx0_37()
var cAP=_n('view')
_rz(z,cAP,'class',0,e,s,gg)
var lCP=_v()
_(cAP,lCP)
var aDP=function(eFP,tEP,bGP,gg){
var xIP=_mz(z,'view',['bindtap',3,'class',1,'data-item',2],[],eFP,tEP,gg)
var oJP=_v()
_(xIP,oJP)
if(_oz(z,6,eFP,tEP,gg)){oJP.wxVkey=1
}
var fKP=_v()
_(xIP,fKP)
if(_oz(z,7,eFP,tEP,gg)){fKP.wxVkey=1
var cLP=_n('slot')
_rz(z,cLP,'name',8,eFP,tEP,gg)
_(fKP,cLP)
}
else{fKP.wxVkey=2
}
oJP.wxXCkey=1
fKP.wxXCkey=1
_(bGP,xIP)
return bGP
}
lCP.wxXCkey=2
_2z(z,1,aDP,e,s,gg,lCP,'item','index','index')
var oBP=_v()
_(cAP,oBP)
if(_oz(z,9,e,s,gg)){oBP.wxVkey=1
}
oBP.wxXCkey=1
_(r,cAP)
return r
}
e_[x[39]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx0_38()
var oNP=_v()
_(r,oNP)
if(_oz(z,0,e,s,gg)){oNP.wxVkey=1
var cOP=_n('view')
_rz(z,cOP,'class',1,e,s,gg)
var aRP=_mz(z,'nav-bar',['bind:left-icon-click',2,'leftIcon',1,'rightIcon',2],[],e,s,gg)
_(cOP,aRP)
var oPP=_v()
_(cOP,oPP)
if(_oz(z,5,e,s,gg)){oPP.wxVkey=1
var tSP=_v()
_(oPP,tSP)
if(_oz(z,6,e,s,gg)){tSP.wxVkey=1
}
var eTP=_v()
_(oPP,eTP)
if(_oz(z,7,e,s,gg)){eTP.wxVkey=1
}
var xWP=_mz(z,'thread-content',['bind:thread-info-reload',8,'bind:update-like-data',1,'bind:update-mark-data',2,'blackOpen',3,'dislikeShow',4,'from',5,'id',6,'isAdmin',7,'isBlack',8,'rewardInfo',9,'rewardShow',10,'threadItem',11,'threadSign',12],[],e,s,gg)
_(oPP,xWP)
var bUP=_v()
_(oPP,bUP)
if(_oz(z,21,e,s,gg)){bUP.wxVkey=1
var oXP=_n('no-cert')
_(bUP,oXP)
}
var oVP=_v()
_(oPP,oVP)
if(_oz(z,22,e,s,gg)){oVP.wxVkey=1
var fYP=_mz(z,'comment-list',['bind:phone-verified',23,'bind:reload',1,'commentMineInfo',2,'commentCertValid',3,'commentForbid',4,'commentForbidTip',5,'dislikeShow',6,'id',7,'isAdmin',8,'isAnonTag',9,'threadSign',10,'queryCommentId',11,'rewardInfo',12,'threadId',13,'threadItem',14,'uSwitchOpen',15],[],e,s,gg)
fYP.rawAttr={"model:thread-sign":"{{threadSign}}",};_(oVP,fYP)
}
var cZP=_mz(z,'bottom-input',['bind:reply',39,'bind:update-like-data',1,'bind:update-mark-data',2,'commentForbidTip',3,'from',4,'mineInfo',5,'tagId',6,'threadItem',7],[],e,s,gg)
_(oPP,cZP)
tSP.wxXCkey=1
eTP.wxXCkey=1
bUP.wxXCkey=1
bUP.wxXCkey=3
oVP.wxXCkey=1
oVP.wxXCkey=3
}
else if(_oz(z,47,e,s,gg)){oPP.wxVkey=2
var h1P=_n('tag-limit')
_rz(z,h1P,'limitConf',48,e,s,gg)
_(oPP,h1P)
}
else if(_oz(z,49,e,s,gg)){oPP.wxVkey=3
}
var lQP=_v()
_(cOP,lQP)
if(_oz(z,50,e,s,gg)){lQP.wxVkey=1
var o2P=_mz(z,'action',['bind:reload',51,'from',1,'showBar',2,'threadItem',3],[],e,s,gg)
_(lQP,o2P)
}
oPP.wxXCkey=1
oPP.wxXCkey=3
oPP.wxXCkey=3
lQP.wxXCkey=1
lQP.wxXCkey=3
_(oNP,cOP)
}
oNP.wxXCkey=1
oNP.wxXCkey=3
return r
}
e_[x[40]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx0_39()
var o4P=_n('view')
_rz(z,o4P,'class',0,e,s,gg)
var l5P=_v()
_(o4P,l5P)
if(_oz(z,1,e,s,gg)){l5P.wxVkey=1
var a6P=_mz(z,'icon',['svg',-1,'name',2,'size',1],[],e,s,gg)
_(l5P,a6P)
}
var t7P=_mz(z,'base-form',['bind:update',4,'formInfo',1,'formInit',2,'pageStyle',3,'style',4,'styleInfo',5],[],e,s,gg)
_(o4P,t7P)
var e8P=_mz(z,'view',['bind:tap',10,'class',1],[],e,s,gg)
var b9P=_v()
_(e8P,b9P)
if(_oz(z,12,e,s,gg)){b9P.wxVkey=1
var o0P=_mz(z,'van-loading',['customClass',13,'size',1],[],e,s,gg)
_(b9P,o0P)
}
var xAQ=_mz(z,'icon',['svg',-1,'customClass',15,'height',1,'name',2,'width',3],[],e,s,gg)
_(e8P,xAQ)
b9P.wxXCkey=1
b9P.wxXCkey=3
_(o4P,e8P)
l5P.wxXCkey=1
l5P.wxXCkey=3
_(r,o4P)
return r
}
e_[x[41]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx0_40()
var fCQ=_n('view')
_rz(z,fCQ,'class',0,e,s,gg)
var cDQ=_v()
_(fCQ,cDQ)
if(_oz(z,1,e,s,gg)){cDQ.wxVkey=1
}
var hEQ=_v()
_(fCQ,hEQ)
if(_oz(z,2,e,s,gg)){hEQ.wxVkey=1
var cGQ=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var oHQ=_v()
_(cGQ,oHQ)
if(_oz(z,5,e,s,gg)){oHQ.wxVkey=1
var aJQ=_mz(z,'user-avatar',['bind:change',6,'class',1,'customClass',2,'mineInfo',3],[],e,s,gg)
_(oHQ,aJQ)
}
var lIQ=_v()
_(cGQ,lIQ)
if(_oz(z,10,e,s,gg)){lIQ.wxVkey=1
var tKQ=_mz(z,'school-picker',['bind:change',11,'cid',1,'class',2,'list',3],[],e,s,gg)
_(lIQ,tKQ)
}
oHQ.wxXCkey=1
oHQ.wxXCkey=3
lIQ.wxXCkey=1
lIQ.wxXCkey=3
_(hEQ,cGQ)
}
var eLQ=_mz(z,'base-form',['bind:update',15,'formInfo',1,'formInit',2,'pageStyle',3,'style',4],[],e,s,gg)
_(fCQ,eLQ)
var oFQ=_v()
_(fCQ,oFQ)
if(_oz(z,20,e,s,gg)){oFQ.wxVkey=1
var bMQ=_mz(z,'van-loading',['size',21,'type',1],[],e,s,gg)
_(oFQ,bMQ)
}
var oNQ=_n('view')
var xOQ=_v()
_(oNQ,xOQ)
if(_oz(z,23,e,s,gg)){xOQ.wxVkey=1
}
var oPQ=_mz(z,'van-collapse',['bind:change',24,'border',1,'class',2,'value',3],[],e,s,gg)
var fQQ=_v()
_(oPQ,fQQ)
if(_oz(z,28,e,s,gg)){fQQ.wxVkey=1
var cRQ=_mz(z,'van-collapse-item',['customClass',29,'name',1],[],e,s,gg)
var hSQ=_n('view')
_rz(z,hSQ,'slot',31,e,s,gg)
var oTQ=_mz(z,'view',['catch:tap',32,'class',1],[],e,s,gg)
var cUQ=_mz(z,'van-icon',['catch:tap',34,'data-name',1,'name',2,'size',3],[],e,s,gg)
_(oTQ,cUQ)
_(hSQ,oTQ)
_(cRQ,hSQ)
var oVQ=_mz(z,'post-reward',['bind:change',38,'rewardCircleShow',1,'rewardPriceDefault',2,'rewardPriceMin',3,'rewardRatio',4,'ruleCustom',5],[],e,s,gg)
_(cRQ,oVQ)
_(fQQ,cRQ)
}
fQQ.wxXCkey=1
fQQ.wxXCkey=3
_(oNQ,oPQ)
var lWQ=_mz(z,'van-popup',['round',-1,'bind:tap',44,'closeOnClickOverlay',1,'position',2,'show',3],[],e,s,gg)
var aXQ=_v()
_(lWQ,aXQ)
if(_oz(z,48,e,s,gg)){aXQ.wxVkey=1
var tYQ=_mz(z,'reward-desc',['post',-1,'ratio',49,'rewardHourLike',1,'rewardHourSelect',2],[],e,s,gg)
_(aXQ,tYQ)
}
aXQ.wxXCkey=1
aXQ.wxXCkey=3
_(oNQ,lWQ)
xOQ.wxXCkey=1
_(fCQ,oNQ)
cDQ.wxXCkey=1
hEQ.wxXCkey=1
hEQ.wxXCkey=3
oFQ.wxXCkey=1
oFQ.wxXCkey=3
_(r,fCQ)
return r
}
e_[x[42]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx0_41()
var b1Q=_v()
_(r,b1Q)
if(_oz(z,0,e,s,gg)){b1Q.wxVkey=1
var o4Q=_v()
_(b1Q,o4Q)
if(_oz(z,1,e,s,gg)){o4Q.wxVkey=1
var f5Q=e_[x[43]].j
_ic(x[32],e_,x[43],e,s,o4Q,gg);
f5Q.pop()
}
else{o4Q.wxVkey=2
var c6Q=e_[x[43]].j
_ic(x[44],e_,x[43],e,s,o4Q,gg);
c6Q.pop()
}
o4Q.wxXCkey=1
}
var h7Q=_mz(z,'van-popup',['round',-1,'closeOnClickOverlay',2,'position',1,'show',2],[],e,s,gg)
var o8Q=_mz(z,'van-button',['bind:tap',5,'customClass',1,'round',2,'type',3],[],e,s,gg)
_(h7Q,o8Q)
_(r,h7Q)
var c9Q=_mz(z,'van-dialog',['confirmButtonColor',9,'id',1],[],e,s,gg)
_(r,c9Q)
var o0Q=_n('pay-select')
_rz(z,o0Q,'id',11,e,s,gg)
_(r,o0Q)
var lAR=_mz(z,'phone-verify-popup',['action',12,'agreeNeed',1,'bind:cancel',2,'bind:success',3,'bindText',4,'closeOnClickOverlay',5,'desc',6,'id',7,'show',8,'phoneNeed',9,'scene',10,'title',11],[],e,s,gg)
lAR.rawAttr={"model:show":"{{phoneVerifyVisible}}",};_(r,lAR)
var o2Q=_v()
_(r,o2Q)
if(_oz(z,24,e,s,gg)){o2Q.wxVkey=1
var aBR=_mz(z,'agreedialog',['bind:no-cb',25,'bind:yes-cb',1,'id',2,'submitting',3,'yesText',4],[],e,s,gg)
_(o2Q,aBR)
}
var x3Q=_v()
_(r,x3Q)
if(_oz(z,30,e,s,gg)){x3Q.wxVkey=1
var tCR=_mz(z,'school-sug-select',['autoRegister',-1,'disableClose',-1,'popup',-1,'bind:choose',31,'showPopup',1,'popupTitle',2],[],e,s,gg)
tCR.rawAttr={"model:show-popup":"{{schoolSugSelectShow}}",};_(x3Q,tCR)
}
b1Q.wxXCkey=1
o2Q.wxXCkey=1
o2Q.wxXCkey=3
x3Q.wxXCkey=1
x3Q.wxXCkey=3
return r
}
e_[x[43]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx0_42()
var bER=_n('view')
_rz(z,bER,'class',0,e,s,gg)
var xGR=_mz(z,'van-search',['useActionSlot',-1,'bind:change',1,'bind:search',1,'focus',2,'placeholder',3,'value',4],[],e,s,gg)
_(bER,xGR)
var oFR=_v()
_(bER,oFR)
if(_oz(z,6,e,s,gg)){oFR.wxVkey=1
var oHR=_mz(z,'view',['class',7,'style',1],[],e,s,gg)
var oLR=_mz(z,'waterfall',['gap',9,'id',1],[],e,s,gg)
var cMR=_v()
_(oLR,cMR)
var oNR=function(aPR,lOR,tQR,gg){
var bSR=_mz(z,'waterfall-item',['from',13,'isFep',1,'isAnonTag',2,'threadItem',3],[],aPR,lOR,gg)
_(tQR,bSR)
return tQR
}
cMR.wxXCkey=4
_2z(z,11,oNR,e,s,gg,cMR,'item','index','index')
_(oHR,oLR)
var fIR=_v()
_(oHR,fIR)
if(_oz(z,17,e,s,gg)){fIR.wxVkey=1
}
var cJR=_v()
_(oHR,cJR)
if(_oz(z,18,e,s,gg)){cJR.wxVkey=1
}
var hKR=_v()
_(oHR,hKR)
if(_oz(z,19,e,s,gg)){hKR.wxVkey=1
}
fIR.wxXCkey=1
cJR.wxXCkey=1
hKR.wxXCkey=1
_(oFR,oHR)
}
oFR.wxXCkey=1
oFR.wxXCkey=3
_(r,bER)
var oTR=_n('van-dialog')
_rz(z,oTR,'id',20,e,s,gg)
_(r,oTR)
return r
}
e_[x[45]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx0_43()
var oVR=_v()
_(r,oVR)
if(_oz(z,0,e,s,gg)){oVR.wxVkey=1
var fWR=_n('view')
_rz(z,fWR,'class',1,e,s,gg)
var cXR=_v()
_(fWR,cXR)
if(_oz(z,2,e,s,gg)){cXR.wxVkey=1
var c1R=_v()
_(cXR,c1R)
var o2R=function(a4R,l3R,t5R,gg){
var b7R=_mz(z,'tag-item',['bind:refresh',5,'item',1,'type',2],[],a4R,l3R,gg)
_(t5R,b7R)
return t5R
}
c1R.wxXCkey=4
_2z(z,3,o2R,e,s,gg,c1R,'item','index','tag_id')
}
var hYR=_v()
_(fWR,hYR)
if(_oz(z,8,e,s,gg)){hYR.wxVkey=1
var o8R=_v()
_(hYR,o8R)
var x9R=function(fAS,o0R,cBS,gg){
var oDS=_mz(z,'tag-item',['bind:refresh',11,'item',1,'type',2],[],fAS,o0R,gg)
_(cBS,oDS)
return cBS
}
o8R.wxXCkey=4
_2z(z,9,x9R,e,s,gg,o8R,'item','index','tag_id')
}
var oZR=_v()
_(fWR,oZR)
if(_oz(z,14,e,s,gg)){oZR.wxVkey=1
var cES=_v()
_(oZR,cES)
var oFS=function(aHS,lGS,tIS,gg){
var bKS=_mz(z,'tag-item',['bind:refresh',17,'item',1,'type',2],[],aHS,lGS,gg)
_(tIS,bKS)
return tIS
}
cES.wxXCkey=4
_2z(z,15,oFS,e,s,gg,cES,'item','index','tag_id')
}
cXR.wxXCkey=1
cXR.wxXCkey=3
hYR.wxXCkey=1
hYR.wxXCkey=3
oZR.wxXCkey=1
oZR.wxXCkey=3
_(oVR,fWR)
}
oVR.wxXCkey=1
oVR.wxXCkey=3
return r
}
e_[x[46]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx0_44()
var xMS=_v()
_(r,xMS)
if(_oz(z,0,e,s,gg)){xMS.wxVkey=1
var oNS=_n('view')
_rz(z,oNS,'class',1,e,s,gg)
var cPS=_mz(z,'nav-bar',['bind:left-icon-click',2,'leftIcon',1,'rightIcon',2],[],e,s,gg)
_(oNS,cPS)
var fOS=_v()
_(oNS,fOS)
if(_oz(z,5,e,s,gg)){fOS.wxVkey=1
var oRS=_mz(z,'tag-info',['tagInfo',6,'tagId',1],[],e,s,gg)
_(fOS,oRS)
var hQS=_v()
_(fOS,hQS)
if(_oz(z,8,e,s,gg)){hQS.wxVkey=1
var cSS=_n('tag-limit')
_rz(z,cSS,'limitConf',9,e,s,gg)
_(hQS,cSS)
}
else{hQS.wxVkey=2
var oTS=_n('view')
_rz(z,oTS,'class',10,e,s,gg)
var aVS=_mz(z,'tabs',['activeId',11,'bind:change',1,'customItem',2,'customSlider',3,'tabs',4],[],e,s,gg)
_(oTS,aVS)
var lUS=_v()
_(oTS,lUS)
if(_oz(z,16,e,s,gg)){lUS.wxVkey=1
var tWS=_mz(z,'van-checkbox',['bind:input',17,'checkedColor',1,'customClass',2,'iconSize',3,'value',4],[],e,s,gg)
_(lUS,tWS)
}
lUS.wxXCkey=1
lUS.wxXCkey=3
_(hQS,oTS)
var eXS=_n('view')
_rz(z,eXS,'class',22,e,s,gg)
var oZS=_mz(z,'waterfall',['gap',23,'id',1],[],e,s,gg)
var x1S=_v()
_(oZS,x1S)
var o2S=function(c4S,f3S,h5S,gg){
var c7S=_mz(z,'waterfall-item',['from',27,'isFep',1,'isAnonTag',2,'sortType',3,'threadItem',4],[],c4S,f3S,gg)
_(h5S,c7S)
return h5S
}
x1S.wxXCkey=4
_2z(z,25,o2S,e,s,gg,x1S,'item','index','index')
_(eXS,oZS)
var bYS=_v()
_(eXS,bYS)
if(_oz(z,32,e,s,gg)){bYS.wxVkey=1
var o8S=_n('view')
_rz(z,o8S,'class',33,e,s,gg)
var l9S=_v()
_(o8S,l9S)
if(_oz(z,34,e,s,gg)){l9S.wxVkey=1
var a0S=_mz(z,'van-empty',['description',35,'imageSize',1],[],e,s,gg)
_(l9S,a0S)
}
else{l9S.wxVkey=2
}
l9S.wxXCkey=1
l9S.wxXCkey=3
_(bYS,o8S)
}
bYS.wxXCkey=1
bYS.wxXCkey=3
_(hQS,eXS)
var tAT=_n('van-loading')
_rz(z,tAT,'size',37,e,s,gg)
_(hQS,tAT)
var eBT=_mz(z,'post-bar',['bind:tap',38,'customClass',1,'isBeauty',2],[],e,s,gg)
_(hQS,eBT)
}
hQS.wxXCkey=1
hQS.wxXCkey=3
hQS.wxXCkey=3
}
else{fOS.wxVkey=2
var bCT=_mz(z,'van-empty',['description',41,'imageSize',1],[],e,s,gg)
_(fOS,bCT)
}
fOS.wxXCkey=1
fOS.wxXCkey=3
fOS.wxXCkey=3
_(xMS,oNS)
}
var oDT=_n('van-dialog')
_rz(z,oDT,'id',43,e,s,gg)
_(r,oDT)
var xET=_mz(z,'subMsgTips',['from',44,'id',1],[],e,s,gg)
_(r,xET)
xMS.wxXCkey=1
xMS.wxXCkey=3
return r
}
e_[x[47]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx0_45()
var fGT=_v()
_(r,fGT)
if(_oz(z,0,e,s,gg)){fGT.wxVkey=1
var cHT=_n('view')
_rz(z,cHT,'class',1,e,s,gg)
var hIT=_v()
_(cHT,hIT)
if(_oz(z,2,e,s,gg)){hIT.wxVkey=1
var lMT=_mz(z,'tag-info',['tagInfo',3,'tagId',1],[],e,s,gg)
_(hIT,lMT)
var aNT=_n('view')
_rz(z,aNT,'class',5,e,s,gg)
var ePT=_mz(z,'tabs',['activeId',6,'bind:change',1,'customItem',2,'customSlider',3,'tabs',4],[],e,s,gg)
_(aNT,ePT)
var tOT=_v()
_(aNT,tOT)
if(_oz(z,11,e,s,gg)){tOT.wxVkey=1
var bQT=_mz(z,'icon',['svg',-1,'color',12,'name',1,'size',2],[],e,s,gg)
_(tOT,bQT)
}
tOT.wxXCkey=1
tOT.wxXCkey=3
_(hIT,aNT)
var oJT=_v()
_(hIT,oJT)
if(_oz(z,15,e,s,gg)){oJT.wxVkey=1
var oRT=_mz(z,'view',['bind:tap',16,'class',1],[],e,s,gg)
var xST=_mz(z,'van-icon',['class',18,'color',1,'name',2,'size',3],[],e,s,gg)
_(oRT,xST)
_(oJT,oRT)
}
var oTT=_n('view')
_rz(z,oTT,'class',22,e,s,gg)
var cVT=_v()
_(oTT,cVT)
var hWT=function(cYT,oXT,oZT,gg){
var a2T=_mz(z,'thread-item',['data-thread-id',25,'from',1,'isFep',2,'sortType',3,'threadItem',4],[],cYT,oXT,gg)
_(oZT,a2T)
return oZT
}
cVT.wxXCkey=4
_2z(z,23,hWT,e,s,gg,cVT,'item','index','index')
var fUT=_v()
_(oTT,fUT)
if(_oz(z,30,e,s,gg)){fUT.wxVkey=1
var t3T=_n('view')
_rz(z,t3T,'class',31,e,s,gg)
var e4T=_v()
_(t3T,e4T)
if(_oz(z,32,e,s,gg)){e4T.wxVkey=1
var b5T=_mz(z,'van-empty',['description',33,'imageSize',1],[],e,s,gg)
_(e4T,b5T)
}
else{e4T.wxVkey=2
}
e4T.wxXCkey=1
e4T.wxXCkey=3
_(fUT,t3T)
}
fUT.wxXCkey=1
fUT.wxXCkey=3
_(hIT,oTT)
var cKT=_v()
_(hIT,cKT)
if(_oz(z,35,e,s,gg)){cKT.wxVkey=1
var o6T=_v()
_(cKT,o6T)
if(_oz(z,36,e,s,gg)){o6T.wxVkey=1
var x7T=_n('van-loading')
_rz(z,x7T,'size',37,e,s,gg)
_(o6T,x7T)
}
o6T.wxXCkey=1
o6T.wxXCkey=3
}
var oLT=_v()
_(hIT,oLT)
if(_oz(z,38,e,s,gg)){oLT.wxVkey=1
}
else{oLT.wxVkey=2
var o8T=_mz(z,'post-bar',['isBeauty',-1,'bind:tap',39],[],e,s,gg)
_(oLT,o8T)
}
oJT.wxXCkey=1
oJT.wxXCkey=3
cKT.wxXCkey=1
cKT.wxXCkey=3
oLT.wxXCkey=1
oLT.wxXCkey=3
}
else{hIT.wxVkey=2
var f9T=_mz(z,'van-empty',['description',40,'imageSize',1],[],e,s,gg)
_(hIT,f9T)
}
hIT.wxXCkey=1
hIT.wxXCkey=3
hIT.wxXCkey=3
_(fGT,cHT)
}
fGT.wxXCkey=1
fGT.wxXCkey=3
return r
}
e_[x[48]]={f:m44,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['pages/mx/components/common/expFlag/expFlag.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/common/expFlag/expFlag.wxml'] = [$gwx0, './pages/mx/components/common/expFlag/expFlag.wxml'];else __wxAppCode__['pages/mx/components/common/expFlag/expFlag.wxml'] = $gwx0( './pages/mx/components/common/expFlag/expFlag.wxml' );
		__wxAppCode__['pages/mx/components/common/expInfoPopover/expInfoPopover.json'] = {"component":true,"usingComponents":{"van-popup":"../../../../../miniprogram_npm/@vant/weapp/popup/index","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","van-progress":"../../../../../miniprogram_npm/@vant/weapp/progress/index","chat-entry":"/components/entry/chatEntry/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/common/expInfoPopover/expInfoPopover.wxml'] = [$gwx0, './pages/mx/components/common/expInfoPopover/expInfoPopover.wxml'];else __wxAppCode__['pages/mx/components/common/expInfoPopover/expInfoPopover.wxml'] = $gwx0( './pages/mx/components/common/expInfoPopover/expInfoPopover.wxml' );
		__wxAppCode__['pages/mx/components/common/formCard/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/common/formCard/index.wxml'] = [$gwx0, './pages/mx/components/common/formCard/index.wxml'];else __wxAppCode__['pages/mx/components/common/formCard/index.wxml'] = $gwx0( './pages/mx/components/common/formCard/index.wxml' );
		__wxAppCode__['pages/mx/components/common/imgShow/imgShow.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/common/imgShow/imgShow.wxml'] = [$gwx0, './pages/mx/components/common/imgShow/imgShow.wxml'];else __wxAppCode__['pages/mx/components/common/imgShow/imgShow.wxml'] = $gwx0( './pages/mx/components/common/imgShow/imgShow.wxml' );
		__wxAppCode__['pages/mx/components/common/tagLimit/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","van-button":"../../../../../miniprogram_npm/@vant/weapp/button/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/common/tagLimit/index.wxml'] = [$gwx0, './pages/mx/components/common/tagLimit/index.wxml'];else __wxAppCode__['pages/mx/components/common/tagLimit/index.wxml'] = $gwx0( './pages/mx/components/common/tagLimit/index.wxml' );
		__wxAppCode__['pages/mx/components/home/barrage/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/home/barrage/index.wxml'] = [$gwx0, './pages/mx/components/home/barrage/index.wxml'];else __wxAppCode__['pages/mx/components/home/barrage/index.wxml'] = $gwx0( './pages/mx/components/home/barrage/index.wxml' );
		__wxAppCode__['pages/mx/components/home/tagItem/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","van-button":"../../../../../miniprogram_npm/@vant/weapp/button/index","van-action-sheet":"../../../../../miniprogram_npm/@vant/weapp/action-sheet/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/home/tagItem/index.wxml'] = [$gwx0, './pages/mx/components/home/tagItem/index.wxml'];else __wxAppCode__['pages/mx/components/home/tagItem/index.wxml'] = $gwx0( './pages/mx/components/home/tagItem/index.wxml' );
		__wxAppCode__['pages/mx/components/index/postBar/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/index/postBar/index.wxml'] = [$gwx0, './pages/mx/components/index/postBar/index.wxml'];else __wxAppCode__['pages/mx/components/index/postBar/index.wxml'] = $gwx0( './pages/mx/components/index/postBar/index.wxml' );
		__wxAppCode__['pages/mx/components/index/shareimage/shareimage.json'] = {"component":true,"usingComponents":{"painter":"/components/painter/painter","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","van-loading":"../../../../../miniprogram_npm/@vant/weapp/loading/index","van-share-sheet":"../../../../../miniprogram_npm/@vant/weapp/share-sheet/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/index/shareimage/shareimage.wxml'] = [$gwx0, './pages/mx/components/index/shareimage/shareimage.wxml'];else __wxAppCode__['pages/mx/components/index/shareimage/shareimage.wxml'] = $gwx0( './pages/mx/components/index/shareimage/shareimage.wxml' );
		__wxAppCode__['pages/mx/components/index/tagInfo/index.json'] = {"component":true,"usingComponents":{"share-image":"/pages/mx/components/index/shareimage/shareimage","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/index/tagInfo/index.wxml'] = [$gwx0, './pages/mx/components/index/tagInfo/index.wxml'];else __wxAppCode__['pages/mx/components/index/tagInfo/index.wxml'] = $gwx0( './pages/mx/components/index/tagInfo/index.wxml' );
		__wxAppCode__['pages/mx/components/index/threadItem/thread-item.json'] = {"component":true,"usingComponents":{"exp-flag":"/pages/mx/components/common/expFlag/expFlag","van-skeleton":"../../../../../miniprogram_npm/@vant/weapp/skeleton/index","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","like":"/components/common/like/like","forbid-icon":"/components/common/forbidicon/forbidicon","rank-medal":"/components/common/rankmedal/rank-medal","van-dialog":"../../../../../miniprogram_npm/@vant/weapp/dialog/index","reward-label":"/components/common/rewadLabel/index","img-show":"/components/common/imgShow/imgShow","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/index/threadItem/thread-item.wxml'] = [$gwx0, './pages/mx/components/index/threadItem/thread-item.wxml'];else __wxAppCode__['pages/mx/components/index/threadItem/thread-item.wxml'] = $gwx0( './pages/mx/components/index/threadItem/thread-item.wxml' );
		__wxAppCode__['pages/mx/components/index/waterfall/waterfall-item/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../../../miniprogram_npm/@vant/weapp/icon/index","like":"/components/common/like/like","reward-label":"/components/common/rewadLabel/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/index/waterfall/waterfall-item/index.wxml'] = [$gwx0, './pages/mx/components/index/waterfall/waterfall-item/index.wxml'];else __wxAppCode__['pages/mx/components/index/waterfall/waterfall-item/index.wxml'] = $gwx0( './pages/mx/components/index/waterfall/waterfall-item/index.wxml' );
		__wxAppCode__['pages/mx/components/index/waterfall/waterfall/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"},"styleIsolation":"isolated"};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/index/waterfall/waterfall/index.wxml'] = [$gwx0, './pages/mx/components/index/waterfall/waterfall/index.wxml'];else __wxAppCode__['pages/mx/components/index/waterfall/waterfall/index.wxml'] = $gwx0( './pages/mx/components/index/waterfall/waterfall/index.wxml' );
		__wxAppCode__['pages/mx/components/info/action/action.json'] = {"component":true,"usingComponents":{"van-action-sheet":"../../../../../miniprogram_npm/@vant/weapp/action-sheet/index","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","van-dialog":"../../../../../miniprogram_npm/@vant/weapp/dialog/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/action/action.wxml'] = [$gwx0, './pages/mx/components/info/action/action.wxml'];else __wxAppCode__['pages/mx/components/info/action/action.wxml'] = $gwx0( './pages/mx/components/info/action/action.wxml' );
		__wxAppCode__['pages/mx/components/info/bottomInput/index.json'] = {"component":true,"usingComponents":{"mark":"/components/common/mark/mark","like":"/components/common/like/like","share":"/pages/mx/components/info/shareimage/shareimage","school-sug-select":"/components/common/schoolSugSelect/index","user-avatar":"/components/common/userAvatar/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/bottomInput/index.wxml'] = [$gwx0, './pages/mx/components/info/bottomInput/index.wxml'];else __wxAppCode__['pages/mx/components/info/bottomInput/index.wxml'] = $gwx0( './pages/mx/components/info/bottomInput/index.wxml' );
		__wxAppCode__['pages/mx/components/info/comment/commentList/index.json'] = {"component":true,"usingComponents":{"van-cell-group":"../../../../../../miniprogram_npm/@vant/weapp/cell-group/index","top-comment":"/pages/mx/components/info/comment/topComment/index","sub-comment":"/pages/mx/components/info/comment/subComment/index","comment-sort":"/pages/mx/components/info/comment/commentSort/index","comment-action":"/pages/mx/components/info/commentAction/index","van-action-sheet":"../../../../../../miniprogram_npm/@vant/weapp/action-sheet/index","van-dialog":"../../../../../../miniprogram_npm/@vant/weapp/dialog/index","van-skeleton":"../../../../../../miniprogram_npm/@vant/weapp/skeleton/index","van-empty":"../../../../../../miniprogram_npm/@vant/weapp/empty/index","list-empty":"/components/ui/listEmpty/index","van-divider":"../../../../../../miniprogram_npm/@vant/weapp/divider/index","user-avatar":"/components/common/userAvatar/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/comment/commentList/index.wxml'] = [$gwx0, './pages/mx/components/info/comment/commentList/index.wxml'];else __wxAppCode__['pages/mx/components/info/comment/commentList/index.wxml'] = $gwx0( './pages/mx/components/info/comment/commentList/index.wxml' );
		__wxAppCode__['pages/mx/components/info/comment/commentSort/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../../../miniprogram_npm/@vant/weapp/icon/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/comment/commentSort/index.wxml'] = [$gwx0, './pages/mx/components/info/comment/commentSort/index.wxml'];else __wxAppCode__['pages/mx/components/info/comment/commentSort/index.wxml'] = $gwx0( './pages/mx/components/info/comment/commentSort/index.wxml' );
		__wxAppCode__['pages/mx/components/info/comment/noCert/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../../../miniprogram_npm/@vant/weapp/icon/index","van-dialog":"../../../../../../miniprogram_npm/@vant/weapp/dialog/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/comment/noCert/index.wxml'] = [$gwx0, './pages/mx/components/info/comment/noCert/index.wxml'];else __wxAppCode__['pages/mx/components/info/comment/noCert/index.wxml'] = $gwx0( './pages/mx/components/info/comment/noCert/index.wxml' );
		__wxAppCode__['pages/mx/components/info/comment/subComment/index.json'] = {"component":true,"usingComponents":{"forbid-icon":"/components/common/forbidicon/forbidicon","van-icon":"../../../../../../miniprogram_npm/@vant/weapp/icon/index","like":"/components/common/like/like","van-dialog":"../../../../../../miniprogram_npm/@vant/weapp/dialog/index","exp-flag":"/pages/mx/components/common/expFlag/expFlag","exp-info-popover":"/pages/mx/components/common/expInfoPopover/expInfoPopover","rank-medal":"/components/common/rankmedal/rank-medal","img-show":"/pages/mx/components/common/imgShow/imgShow","thread-push-change":"/components/threadinfo/threadPushChange/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/comment/subComment/index.wxml'] = [$gwx0, './pages/mx/components/info/comment/subComment/index.wxml'];else __wxAppCode__['pages/mx/components/info/comment/subComment/index.wxml'] = $gwx0( './pages/mx/components/info/comment/subComment/index.wxml' );
		__wxAppCode__['pages/mx/components/info/comment/topComment/index.json'] = {"component":true,"usingComponents":{"forbid-icon":"/components/common/forbidicon/forbidicon","van-icon":"../../../../../../miniprogram_npm/@vant/weapp/icon/index","like":"/components/common/like/like","van-dialog":"../../../../../../miniprogram_npm/@vant/weapp/dialog/index","exp-flag":"/pages/mx/components/common/expFlag/expFlag","exp-info-popover":"/pages/mx/components/common/expInfoPopover/expInfoPopover","rank-medal":"/components/common/rankmedal/rank-medal","img-show":"/pages/mx/components/common/imgShow/imgShow","thread-push-change":"/components/threadinfo/threadPushChange/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/comment/topComment/index.wxml'] = [$gwx0, './pages/mx/components/info/comment/topComment/index.wxml'];else __wxAppCode__['pages/mx/components/info/comment/topComment/index.wxml'] = $gwx0( './pages/mx/components/info/comment/topComment/index.wxml' );
		__wxAppCode__['pages/mx/components/info/commentAction/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","van-action-sheet":"../../../../../miniprogram_npm/@vant/weapp/action-sheet/index","reply":"/pages/mx/components/info/commentAction/reply/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/commentAction/index.wxml'] = [$gwx0, './pages/mx/components/info/commentAction/index.wxml'];else __wxAppCode__['pages/mx/components/info/commentAction/index.wxml'] = $gwx0( './pages/mx/components/info/commentAction/index.wxml' );
		__wxAppCode__['pages/mx/components/info/commentAction/reply/index.json'] = {"component":true,"usingComponents":{"van-dialog":"../../../../../../miniprogram_npm/@vant/weapp/dialog/index","uploader":"/components/common/uploader/index","van-icon":"../../../../../../miniprogram_npm/@vant/weapp/icon/index","van-toast":"../../../../../../miniprogram_npm/@vant/weapp/toast/index","user-avatar":"/components/common/userAvatar/index","subMsgTips":"/components/common/subMsgTips/index","phone-verify-popup":"/components/common/phoneVerifyPopup/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/commentAction/reply/index.wxml'] = [$gwx0, './pages/mx/components/info/commentAction/reply/index.wxml'];else __wxAppCode__['pages/mx/components/info/commentAction/reply/index.wxml'] = $gwx0( './pages/mx/components/info/commentAction/reply/index.wxml' );
		__wxAppCode__['pages/mx/components/info/content/index.json'] = {"component":true,"usingComponents":{"exp-flag":"/pages/mx/components/common/expFlag/expFlag","exp-info-popover":"/pages/mx/components/common/expInfoPopover/expInfoPopover","chat-entry":"/components/entry/chatEntry/index","forbid-icon":"/components/common/forbidicon/forbidicon","rank-medal":"/components/common/rankmedal/rank-medal","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","thread-liked-list":"/pages/mx/components/info/threadLikedList/index","reward-info":"/components/threadinfo/rewardInfo/index","img-swiper":"../imgSwiper/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/content/index.wxml'] = [$gwx0, './pages/mx/components/info/content/index.wxml'];else __wxAppCode__['pages/mx/components/info/content/index.wxml'] = $gwx0( './pages/mx/components/info/content/index.wxml' );
		__wxAppCode__['pages/mx/components/info/imgSwiper/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/imgSwiper/index.wxml'] = [$gwx0, './pages/mx/components/info/imgSwiper/index.wxml'];else __wxAppCode__['pages/mx/components/info/imgSwiper/index.wxml'] = $gwx0( './pages/mx/components/info/imgSwiper/index.wxml' );
		__wxAppCode__['pages/mx/components/info/shareimage/shareimage.json'] = {"component":true,"usingComponents":{"painter":"/components/painter/painter","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","van-loading":"../../../../../miniprogram_npm/@vant/weapp/loading/index","van-share-sheet":"../../../../../miniprogram_npm/@vant/weapp/share-sheet/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/shareimage/shareimage.wxml'] = [$gwx0, './pages/mx/components/info/shareimage/shareimage.wxml'];else __wxAppCode__['pages/mx/components/info/shareimage/shareimage.wxml'] = $gwx0( './pages/mx/components/info/shareimage/shareimage.wxml' );
		__wxAppCode__['pages/mx/components/info/threadLikedList/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/info/threadLikedList/index.wxml'] = [$gwx0, './pages/mx/components/info/threadLikedList/index.wxml'];else __wxAppCode__['pages/mx/components/info/threadLikedList/index.wxml'] = $gwx0( './pages/mx/components/info/threadLikedList/index.wxml' );
		__wxAppCode__['pages/mx/components/post/baseForm/index.json'] = {"component":true,"usingComponents":{"school-picker":"/pages/mx/components/post/schoolPicker/index","uploader":"/components/common/uploader/index","form-card":"/pages/mx/components/common/formCard/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/post/baseForm/index.wxml'] = [$gwx0, './pages/mx/components/post/baseForm/index.wxml'];else __wxAppCode__['pages/mx/components/post/baseForm/index.wxml'] = $gwx0( './pages/mx/components/post/baseForm/index.wxml' );
		__wxAppCode__['pages/mx/components/post/postReward/index.json'] = {"component":true,"usingComponents":{"price-picker":"/pages/mx/components/post/reward/pricePicker/index","rule-picker":"/pages/mx/components/post/reward/rulePicker/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/post/postReward/index.wxml'] = [$gwx0, './pages/mx/components/post/postReward/index.wxml'];else __wxAppCode__['pages/mx/components/post/postReward/index.wxml'] = $gwx0( './pages/mx/components/post/postReward/index.wxml' );
		__wxAppCode__['pages/mx/components/post/reward/circleChart/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/post/reward/circleChart/index.wxml'] = [$gwx0, './pages/mx/components/post/reward/circleChart/index.wxml'];else __wxAppCode__['pages/mx/components/post/reward/circleChart/index.wxml'] = $gwx0( './pages/mx/components/post/reward/circleChart/index.wxml' );
		__wxAppCode__['pages/mx/components/post/reward/pricePicker/index.json'] = {"component":true,"usingComponents":{"van-slider":"../../../../../../miniprogram_npm/@vant/weapp/slider/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/post/reward/pricePicker/index.wxml'] = [$gwx0, './pages/mx/components/post/reward/pricePicker/index.wxml'];else __wxAppCode__['pages/mx/components/post/reward/pricePicker/index.wxml'] = $gwx0( './pages/mx/components/post/reward/pricePicker/index.wxml' );
		__wxAppCode__['pages/mx/components/post/reward/rewardDesc/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/post/reward/rewardDesc/index.wxml'] = [$gwx0, './pages/mx/components/post/reward/rewardDesc/index.wxml'];else __wxAppCode__['pages/mx/components/post/reward/rewardDesc/index.wxml'] = $gwx0( './pages/mx/components/post/reward/rewardDesc/index.wxml' );
		__wxAppCode__['pages/mx/components/post/reward/rulePicker/index.json'] = {"component":true,"usingComponents":{"van-checkbox":"../../../../../../miniprogram_npm/@vant/weapp/checkbox/index","van-checkbox-group":"../../../../../../miniprogram_npm/@vant/weapp/checkbox-group/index","circle-chart":"/pages/mx/components/post/reward/circleChart/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/post/reward/rulePicker/index.wxml'] = [$gwx0, './pages/mx/components/post/reward/rulePicker/index.wxml'];else __wxAppCode__['pages/mx/components/post/reward/rulePicker/index.wxml'] = $gwx0( './pages/mx/components/post/reward/rulePicker/index.wxml' );
		__wxAppCode__['pages/mx/components/post/schoolPicker/index.json'] = {"component":true,"usingComponents":{"van-popup":"../../../../../miniprogram_npm/@vant/weapp/popup/index","van-picker":"../../../../../miniprogram_npm/@vant/weapp/picker/index","van-icon":"../../../../../miniprogram_npm/@vant/weapp/icon/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/post/schoolPicker/index.wxml'] = [$gwx0, './pages/mx/components/post/schoolPicker/index.wxml'];else __wxAppCode__['pages/mx/components/post/schoolPicker/index.wxml'] = $gwx0( './pages/mx/components/post/schoolPicker/index.wxml' );
		__wxAppCode__['pages/mx/components/ui/tabs/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/components/ui/tabs/index.wxml'] = [$gwx0, './pages/mx/components/ui/tabs/index.wxml'];else __wxAppCode__['pages/mx/components/ui/tabs/index.wxml'] = $gwx0( './pages/mx/components/ui/tabs/index.wxml' );
		__wxAppCode__['pages/mx/info/info.json'] = {"enablePullDownRefresh":true,"onReachBottomDistance":600,"navigationStyle":"custom","usingComponents":{"van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","nav-bar":"/components/common/navBar/index","share":"/components/common/shareimage/shareimage","copyright":"/components/common/copyright/copyright","service-dialog":"/components/common/servicedialog/service-dialog","thread-content":"/pages/mx/components/info/content/index","comment-list":"/pages/mx/components/info/comment/commentList/index","bottom-input":"/pages/mx/components/info/bottomInput/index","no-cert":"/pages/mx/components/info/comment/noCert/index","tag-limit":"/pages/mx/components/common/tagLimit/index","action":"/pages/mx/components/info/action/action","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/info/info.wxml'] = [$gwx0, './pages/mx/info/info.wxml'];else __wxAppCode__['pages/mx/info/info.wxml'] = $gwx0( './pages/mx/info/info.wxml' );
		__wxAppCode__['pages/mx/post/post.json'] = {"usingComponents":{"pay-select":"/components/common/paySelect/index","school-sug-select":"/components/common/schoolSugSelect/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-collapse":"../../../miniprogram_npm/@vant/weapp/collapse/index","van-collapse-item":"../../../miniprogram_npm/@vant/weapp/collapse-item/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-loading":"../../../miniprogram_npm/@vant/weapp/loading/index","school-picker":"/pages/mx/components/post/schoolPicker/index","post-reward":"/pages/mx/components/post/postReward/index","reward-desc":"/pages/mx/components/post/reward/rewardDesc/index","base-form":"/pages/mx/components/post/baseForm/index","user-avatar":"/components/common/userAvatar/index","phone-verify-popup":"/components/common/phoneVerifyPopup/index","agreedialog":"/components/common/agreedialog/agreedialog","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/post/post.wxml'] = [$gwx0, './pages/mx/post/post.wxml'];else __wxAppCode__['pages/mx/post/post.wxml'] = $gwx0( './pages/mx/post/post.wxml' );
		__wxAppCode__['pages/mx/search/search.json'] = {"usingComponents":{"van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-search":"../../../miniprogram_npm/@vant/weapp/search/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","waterfall":"/pages/mx/components/index/waterfall/waterfall/index","waterfall-item":"/pages/mx/components/index/waterfall/waterfall-item/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/search/search.wxml'] = [$gwx0, './pages/mx/search/search.wxml'];else __wxAppCode__['pages/mx/search/search.wxml'] = $gwx0( './pages/mx/search/search.wxml' );
		__wxAppCode__['pages/mx/tag/home/home.json'] = {"backgroundColor":"#fff","navigationBarTitleText":"跨校小组","enablePullDownRefresh":true,"usingComponents":{"barrage":"/pages/mx/components/home/barrage/index","tag-item":"/pages/mx/components/home/tagItem/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/tag/home/home.wxml'] = [$gwx0, './pages/mx/tag/home/home.wxml'];else __wxAppCode__['pages/mx/tag/home/home.wxml'] = $gwx0( './pages/mx/tag/home/home.wxml' );
		__wxAppCode__['pages/mx/tag/index/index.json'] = {"navigationStyle":"custom","usingComponents":{"van-checkbox":"../../../../miniprogram_npm/@vant/weapp/checkbox/index","van-empty":"../../../../miniprogram_npm/@vant/weapp/empty/index","van-loading":"../../../../miniprogram_npm/@vant/weapp/loading/index","van-dialog":"../../../../miniprogram_npm/@vant/weapp/dialog/index","nav-bar":"/components/common/navBar/index","post-bar":"/pages/mx/components/index/postBar/index","tag-info":"/pages/mx/components/index/tagInfo/index","tag-limit":"/pages/mx/components/common/tagLimit/index","tabs":"/pages/mx/components/ui/tabs/index","waterfall":"/pages/mx/components/index/waterfall/waterfall/index","waterfall-item":"/pages/mx/components/index/waterfall/waterfall-item/index","subMsgTips":"/components/common/subMsgTips/index","icon":"/components/ui/icon/index"},"navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":400};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/tag/index/index.wxml'] = [$gwx0, './pages/mx/tag/index/index.wxml'];else __wxAppCode__['pages/mx/tag/index/index.wxml'] = $gwx0( './pages/mx/tag/index/index.wxml' );
		__wxAppCode__['pages/mx/tag/school/school.json'] = {"usingComponents":{"van-checkbox":"../../../../miniprogram_npm/@vant/weapp/checkbox/index","van-empty":"../../../../miniprogram_npm/@vant/weapp/empty/index","tag-info":"/pages/mx/components/index/tagInfo/index","tabs":"/pages/mx/components/ui/tabs/index","thread-item":"/pages/mx/components/index/threadItem/thread-item","van-loading":"../../../../miniprogram_npm/@vant/weapp/loading/index","post-bar":"/pages/mx/components/index/postBar/index","van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","icon":"/components/ui/icon/index"},"navigationBarTitleText":"","enablePullDownRefresh":true,"onReachBottomDistance":300};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/mx/tag/school/school.wxml'] = [$gwx0, './pages/mx/tag/school/school.wxml'];else __wxAppCode__['pages/mx/tag/school/school.wxml'] = $gwx0( './pages/mx/tag/school/school.wxml' );
	
	define("pages/mx/08F683C5C5DCED5F6E90EBC2D82035D0.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={"mx-post-btn":"%3Csvg viewBox='0 0 116 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M113.574 7.34193C112.238 4.45049 108.313 2.17825 103.319 1.40425C94.2764 4.35102e-07 57.9998 0 57.9998 0C57.9998 0 21.7237 4.35102e-07 12.6809 1.40425C7.68687 2.17825 3.76226 4.45049 2.42542 7.34193C5.31857e-07 12.5775 0 23.5074 0 23.5074C0 23.5074 5.31857e-07 34.4374 2.42542 39.673C3.76226 42.5644 7.68687 44.8366 12.6809 45.6105C21.7237 47.0148 57.9998 47.0148 57.9998 47.0148C57.9998 47.0148 94.2764 47.0148 103.319 45.6105C108.313 44.8366 112.238 42.5644 113.574 39.673C116 34.4374 116 23.5074 116 23.5074C116 23.5074 115.99 12.5775 113.574 7.34193Z' fill='url(%23paint0_linear_210_252)'/%3E %3Cdefs%3E %3ClinearGradient id='paint0_linear_210_252' x1='3.34588' y1='45.2588' x2='96.8502' y2='-15.5676' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%23FFE684'/%3E %3Cstop offset='1' stop-color='%23FF7BF4'/%3E %3C/linearGradient%3E %3C/defs%3E %3C/svg%3E ","mx-school-btn":"%3Csvg width='70' height='38' viewBox='0 0 70 38' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M68.5363 5.93416C67.7297 3.59714 65.3612 1.76058 62.3476 1.135C56.8909 3.51674e-07 34.9999 0 34.9999 0C34.9999 0 13.1091 3.51674e-07 7.65227 1.135C4.63863 1.76058 2.27033 3.59714 1.46361 5.93416C3.20948e-07 10.1658 0 19 0 19C0 19 3.20948e-07 27.8342 1.46361 32.0659C2.27033 34.4029 4.63863 36.2395 7.65227 36.8649C13.1091 38 34.9999 38 34.9999 38C34.9999 38 56.8909 38 62.3476 36.8649C65.3612 36.2395 67.7297 34.4029 68.5363 32.0659C70 27.8342 70 19 70 19C70 19 69.9941 10.1658 68.5363 5.93416Z' fill='url(%23paint0_linear_8874_406)'/%3E %3Cdefs%3E %3ClinearGradient id='paint0_linear_8874_406' x1='2.01907' y1='36.5807' x2='66.9949' y2='5.02311' gradientUnits='userSpaceOnUse'%3E %3Cstop stop-color='%23FFE684'/%3E %3Cstop offset='1' stop-color='%23FF7BF4'/%3E %3C/linearGradient%3E %3C/defs%3E %3C/svg%3E ","tag-index-share":"%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M8.66667 1.33334L14.6667 7.33334L8.66667 13L8.66667 9.33334C4 9.33334 2 14.3333 2 14.3333C2 8.66668 3.66667 5.00001 8.66667 5.00001L8.66667 1.33334Z' stroke='%23333333' stroke-width='1.15' stroke-linejoin='round' stroke-linecap='round' %3E%3C/path%3E%3C/svg%3E"}; 
 			}); 
		define("pages/mx/3974AEE2C5DCED5F5F12C6E5171035D0.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r){return r.replace(/[^\x00-\xff]/g,"aa").length}module.exports={getStrLen:r,substring:function(t,n){if(!t)return"";if(n>=r(t))return t;for(var e=0,a="",i=0;i<t.length;i++){var o=t.charAt(i);if(a+=o,(e=/[^\x00-\xff]/i.test(o)?e+2:e+1)>=n)break}return a},getRandom:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(r-t)+t)},getFontSize:function(r){var t=r.match(/(\d+)(px)/i);return t&&t[1]||10},compareVersion:function(r,t){r=r.split("."),t=t.split(".");for(var n=Math.max(r.length,t.length);r.length<n;)r.push("0");for(;t.length<n;)t.push("0");for(var e=0;e<n;e++){var a=parseInt(r[e],10),i=parseInt(t[e],10);if(a>i)return 1;if(a<i)return-1}return 0},isArray:function(r){return"Array"===function(r){return Object.prototype.toString.call(r).slice(8,-1)}(r)}}; 
 			}); 
		define("pages/mx/EEDEB530C5DCED5F88B8DD37D90035D0.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../../@babel/runtime/helpers/defineProperty.js"),t=require("../../@babel/runtime/helpers/classCallCheck.js"),n=require("../../@babel/runtime/helpers/createClass.js"),i=require("3974AEE2C5DCED5F5F12C6E5171035D0.js"),l=i.substring,a=i.getRandom,s=(i.getFontSize,i.isArray),u=function(){return n((function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.bulletId=n.bulletId,this.addContent(n)}),[{key:"addContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.assign(this,{duration:0,passtime:0,content:"",color:"#000000",backgroundColor:"transparent",width:0,height:0,image:{},paused:!1},e)}},{key:"removeContent",value:function(){this.addContent({})}}])}(),h=function(){return n((function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,{tunnelId:0,height:0,width:0,safeGap:4,maxNum:10,bullets:[],last:-1,bulletStatus:[],disabled:!1,sending:!1,timer:null},n),this.bulletStatus=new Array(this.maxNum).fill(0);for(var i=0;i<this.maxNum;i++)this.bullets.push(new u({bulletId:i}))}),[{key:"disable",value:function(){this.disabled=!0,this.last=-1,this.sending=!1,this.bulletStatus=new Array(this.maxNum).fill(1),this.bullets.forEach((function(e){return e.removeContent()}))}},{key:"enable",value:function(){this.disabled&&(this.bulletStatus=new Array(this.maxNum).fill(0)),this.disabled=!1}},{key:"clear",value:function(){this.last=-1,this.sending=!1,this.bulletStatus=new Array(this.maxNum).fill(0),this.bullets.forEach((function(e){return e.removeContent()})),this.timer&&clearTimeout(this.timer)}},{key:"getIdleBulletIdx",value:function(){var e=this.bulletStatus.indexOf(0,this.last+1);return-1===e&&(e=this.bulletStatus.indexOf(0)),e}},{key:"getIdleBulletNum",value:function(){var e=0;return this.bulletStatus.forEach((function(t){0===t&&e++})),e}},{key:"addBullet",value:function(e){if(!this.disabled){var t=this.getIdleBulletIdx();t>=0&&(this.bulletStatus[t]=1,this.bullets[t].addContent(e))}}},{key:"removeBullet",value:function(e){this.disabled||(this.bulletStatus[e]=0,this.bullets[e].removeContent())}}])}(),r=function(){return n((function e(){var n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,{tunnelNum:3,tunnelHeight:80,duration:20,padding:[0,0,0,0],alpha:1,mode:"separate",range:[0,1],tunnelShow:!1,tunnelMaxNum:30,maxLength:30,safeGap:4,enableTap:!1,tunnels:[],idleTunnels:null,enableTunnels:null,distance:2e3,comp:null},i),this._ready=!1,this._deferred=[],this.comp.createSelectorQuery().select(".barrage-area").boundingClientRect((function(e){n.init(e),n.ready()})).exec()}),[{key:"ready",value:function(){var e=this;this._ready=!0,this._deferred.forEach((function(t){e[t.callback].apply(e,t.args)})),this._deferred=[]}},{key:"_delay",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this._deferred.push({callback:e,args:n})}},{key:"init",value:function(e){this.width=e.width,this.height=e.height,this.idleTunnels=new Set,this.enableTunnels=new Set,this.tunnels=[];for(var t=0;t<this.tunnelNum;t++)this.idleTunnels.add(t),this.enableTunnels.add(t),this.tunnels.push(new h({width:this.width,height:this.tunnelHeight,safeGap:this.safeGap,maxNum:this.tunnelMaxNum,tunnelId:t}));this.comp.setData({tunnelShow:this.tunnelShow,tunnels:this.tunnels,alpha:this.alpha,padding:this.padding.map((function(e){return e+"px"})).join(" ")}),this.setRange()}},{key:"setRange",value:function(e){var t=this;if(this._ready){var n=(e=e||this.range)[0]*this.tunnelNum,i=e[1]*this.tunnelNum,l=new Set,a=new Set;this.tunnels.forEach((function(e,s){if(s>=n&&s<i){var u=e.disabled;e.enable(),a.add(s),(u||t.idleTunnels.has(s))&&l.add(s)}else e.disable()})),this.idleTunnels=l,this.enableTunnels=a,this.range=e,this.comp.setData({tunnels:this.tunnels})}else this._delay("setRange",e)}},{key:"setAlpha",value:function(e){this._ready?"number"==typeof e&&(this.alpha=e,this.comp.setData({alpha:e})):this._delay("setAlpha",e)}},{key:"setDuration",value:function(e){this._ready?"number"==typeof e&&(this.duration=e,this.clear()):this._delay("setDuration",e)}},{key:"open",value:function(){this._ready?this._isActive=!0:this._delay("open")}},{key:"close",value:function(){this._ready?(this._isActive=!1,this.clear()):this._delay("close")}},{key:"clear",value:function(){this.tunnels.forEach((function(e){return e.clear()})),this.idleTunnels=new Set(this.enableTunnels),this.comp.setData({tunnels:this.tunnels})}},{key:"addData",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];s(t)&&(this._ready?this._isActive&&(t.forEach((function(t){t.content=l(t.content,e.maxLength),e.addBullet2Tunnel(t)})),this.comp.setData({tunnels:this.tunnels},(function(){e.updateBullets()}))):this._delay("addData",t))}},{key:"send",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._ready){if(null!==this.getEnableTunnel())var n=setInterval((function(){e.getIdleTunnel()&&(e.addData([t]),clearInterval(n))}),16)}else this._delay("send",t)}},{key:"addBullet2Tunnel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getIdleTunnel();if(null!==t){var n=t.tunnelId;t.addBullet(e),0===t.getIdleBulletNum()&&this.removeIdleTunnel(n)}}},{key:"updateBullets",value:function(){var e=this,t=this;this.comp.createSelectorQuery().selectAll(".bullet-item").boundingClientRect((function(n){if(e._isActive){for(var i=0;i<n.length;i++){var l=n[i].dataset,a=l.tunnelid,s=l.bulletid,u=t.tunnels[a].bullets[s];u.width=n[i].width,u.height=n[i].height}t.animate()}})).exec()}},{key:"animate",value:function(){var e=this;this.tunnels.forEach((function(t){e.tunnelAnimate(t)}))}},{key:"tunnelAnimate",value:function(t){var n=this;if(!t.disabled&&!t.sending&&this._isActive){var i=(t.last+1)%t.maxNum,l=t.bullets[i];if(l&&(l.content||l.image.head||l.image.tail)){t.sending=!0,t.last=i;var a=this.duration;"overlap"===this.mode&&(a=this.distance*this.duration/(this.distance+l.width));var s=l.width+t.safeGap;l.duration=a,l.passtime=Math.ceil(s*l.duration*1e3/this.distance),this.comp.setData(e({},"tunnels[".concat(t.tunnelId,"].bullets[").concat(l.bulletId,"]"),l),(function(){t.timer=setTimeout((function(){t.sending=!1,n.tunnelAnimate(t)}),l.passtime)}))}}}},{key:"showTunnel",value:function(){this.comp.setData({tunnelShow:!0})}},{key:"hideTunnel",value:function(){this.comp.setData({tunnelShow:!1})}},{key:"removeIdleTunnel",value:function(e){this.idleTunnels.delete(e)}},{key:"addIdleTunnel",value:function(e){this.idleTunnels.add(e)}},{key:"getEnableTunnel",value:function(){if(0===this.enableTunnels.size)return null;var e=Array.from(this.enableTunnels),t=a(e.length);return this.tunnels[e[t]]}},{key:"getIdleTunnel",value:function(){if(0===this.idleTunnels.size)return null;var e=Array.from(this.idleTunnels),t=a(e.length);return this.tunnels[e[t]]}},{key:"animationend",value:function(t){var n=t.tunnelId,i=t.bulletId,l=this.tunnels[n];if(l){var a=l.bullets[i];a&&(l.removeBullet(i),this.addIdleTunnel(n),this.comp.setData(e({},"tunnels[".concat(n,"].bullets[").concat(i,"]"),a)))}}},{key:"tapBullet",value:function(e){}}])}();exports.default=r; 
 			}); 
		define("pages/mx/entry.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("08F683C5C5DCED5F6E90EBC2D82035D0.js");getApp().GData.iconManager.register(e); 
 			}); 	require("pages/mx/entry.js");
 		__wxRoute = 'pages/mx/components/common/expFlag/expFlag';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/common/expFlag/expFlag.js';	define("pages/mx/components/common/expFlag/expFlag.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../../../348D6125C5DCED5F52EB0922CF1135D0.js");Component({properties:{level:{type:Number,optionalTypes:[Number,String],value:0},title:{type:String,value:""}},data:{expOpen:!0,style:""},observers:{level:function(e){var t="l-default";e>=7&&(t="l-orange"),e>=10&&(t="l-black"),this.setData({style:t})}},attached:function(){}}); 
 			}); 	require("pages/mx/components/common/expFlag/expFlag.js");
 		__wxRoute = 'pages/mx/components/common/expInfoPopover/expInfoPopover';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/common/expInfoPopover/expInfoPopover.js';	define("pages/mx/components/common/expInfoPopover/expInfoPopover.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../../../../@babel/runtime/helpers/asyncToGenerator"),o=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{threadId:{type:String,optionalTypes:[Number],value:""},commentId:{type:String,optionalTypes:[Number],value:""},isMine:{type:Boolean,value:!1},isAnon:{type:Boolean,value:!1},chatOpen:{type:Boolean,value:!1},showRewardSelect:{type:Boolean,value:!1}},data:{isFull:!1,percent:0,leftExp:0,userInfo:{},userCode:"",popoverShow:!1,showChatEntry:!1,showActions:!1,arrowCornerSide:"",positionInfo:{arrowLeft:"unset",arrowTop:"unset",arrowBottom:"unset",bottom:"unset",top:0}},methods:{open:function(o,n){var r=this;return t(e().mark((function t(){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=1;break}return e.abrupt("return");case 1:if(r.setData({userCode:o||"",arrowCornerSide:"",positionInfo:{arrowLeft:"unset",arrowTop:"unset",arrowBottom:"unset",bottom:"unset",top:0}}),(a=r.data.userInfo)&&a.next_level_info){e.next=3;break}return e.next=2,r.getUserInfo(o);case 2:a=e.sent,r.initUserInfo(a);case 3:r.setData({popoverShow:!0},(function(){setTimeout((function(){r.initPosition(n)}),50)}));case 4:case"end":return e.stop()}}),t)})))()},getUserInfo:function(e){return new Promise((function(t,n){o.Kp.Req({method:"POST",url:"/mx/user/usershow",data:{uid:e},callback:function(e){t(e&&e.user_info||{})},fail:function(e){n(e)}})}))},initUserInfo:function(e){if(e&&e.next_level_info){if(e.next_level_info.exp>0){var t=parseInt((e.user_exp/1-e.user_level_exp/1)/(e.next_level_info.exp/1-e.user_level_exp/1)*100),o=e.next_level_info.exp/1-e.user_exp/1;this.setData({percent:t,leftExp:o})}else this.setData({isFull:!0,percent:100,leftExp:0});this.setData({userInfo:e,popoverShow:!0})}},initPosition:function(e){var t=this;wx.createSelectorQuery().in(this).select("#expPopupContent").boundingClientRect((function(o){if(e&&o){var n=wx.getSystemInfoSync().windowHeight,r=o.height,a=e.top-4,s=n-e.bottom-4,i="unset",p="unset",u="unset",l="unset";if(a>=r||s<r){var c=n-e.top+4,f=Math.max(4,n-r-4);p="".concat(Math.max(4,Math.min(c,f)),"px"),l="-14rpx"}else{var h=e.bottom+4,w=Math.max(4,n-r-4);i="".concat(Math.max(4,Math.min(h,w)),"px"),u="-14rpx"}var x=e.left+e.width/2-o.left,v=4/Math.SQRT2+2,m=Math.max(x,v),d="";m&&m<=24&&("unset"!==u?d="top":"unset"!==l&&(d="bottom")),t.setData({"positionInfo.arrowLeft":"".concat(m,"px"),"positionInfo.arrowTop":u,"positionInfo.arrowBottom":l,"positionInfo.top":i,"positionInfo.bottom":p,arrowCornerSide:d})}})).exec()},onClose:function(){this.setData({popoverShow:!1})},onCatchTouchMove:function(){},onRewardSelect:function(){this.setData({popoverShow:!1}),this.triggerEvent("reward-select")}},observers:{"chatOpen, isMine, isAnon, showRewardSelect":function(){var e=this.data.chatOpen&&!this.data.isMine&&!this.data.isAnon,t=e||this.data.showRewardSelect;this.setData({showChatEntry:e,showActions:t})}}}); 
 			}); 	require("pages/mx/components/common/expInfoPopover/expInfoPopover.js");
 		__wxRoute = 'pages/mx/components/common/formCard/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/common/formCard/index.js';	define("pages/mx/components/common/formCard/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["custom-class","body-class"],properties:{title:{type:String,value:""}},data:{},methods:{}}); 
 			}); 	require("pages/mx/components/common/formCard/index.js");
 		__wxRoute = 'pages/mx/components/common/imgShow/imgShow';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/common/imgShow/imgShow.js';	define("pages/mx/components/common/imgShow/imgShow.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=getApp();e.Const.IMG_STYLE;Component({externalClasses:["custom-class","custom-img-class"],properties:{imgList:{type:Array,value:[]},showMenu:{type:Boolean,value:!1}},methods:{onImgPreview:function(t){var s=t.currentTarget.dataset.index,a=this.data.imgList.map((function(e){return e.raw_url||""}))||[],r=a[s]||"";e.previewImage({showmenu:this.data.showMenu,current:r,urls:a})}}}); 
 			}); 	require("pages/mx/components/common/imgShow/imgShow.js");
 		__wxRoute = 'pages/mx/components/common/tagLimit/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/common/tagLimit/index.js';	define("pages/mx/components/common/tagLimit/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{styleIsolation:"apply-shared"},properties:{limitConf:{type:Object,value:{type:"",tip:"",btn_text:"",btn_show:!1}}},data:{},methods:{onBtnTap:function(){var t=(this.data.limitConf||{}).type||"";wx.navigateTo({url:"/pkgs/mine/usercert/usercert?cert_type=".concat(t)})}}}); 
 			}); 	require("pages/mx/components/common/tagLimit/index.js");
 		__wxRoute = 'pages/mx/components/home/barrage/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/home/barrage/index.js';	define("pages/mx/components/home/barrage/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=(0,require("../../../../../@babel/runtime/helpers/interopRequireDefault").default)(require("../../../EEDEB530C5DCED5F88B8DD37D90035D0.js"));Component({options:{addGlobalClass:!0},properties:{zIndex:{type:Number,value:10},renderingMode:{type:String,value:"dom"}},methods:{getBarrageInstance:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.comp=this,this.barrageInstance=new e.default(t),this.barrageInstance},onAnimationend:function(e){var t=e.currentTarget.dataset,n=t.tunnelid,a=t.bulletid;this.barrageInstance.animationend({tunnelId:n,bulletId:a})},onTapBullet:function(e){var t=e.currentTarget.dataset;t.tunnelid,t.bulletid}}}); 
 			}); 	require("pages/mx/components/home/barrage/index.js");
 		__wxRoute = 'pages/mx/components/home/tagItem/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/home/tagItem/index.js';	define("pages/mx/components/home/tagItem/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../40B67327C5DCED5F26D01B20EE6135D0.js"),o=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{item:{type:Object,value:{}},type:{type:String,value:"more"}},data:{followLoading:!1,actionShow:!1,actionList:[{name:"取消加入",act:"cancel-follow"}],isFollow:!1,showCancelEllipsis:!1},observers:{"item.follow_has":function(t){"hot"==this.data.type&&(t?this.setData({isFollow:!0,showCancelEllipsis:!0}):this.setData({isFollow:!1,showCancelEllipsis:!1}))}},lifetimes:{created:function(){},attached:function(){},moved:function(){},detached:function(){}},methods:{onGotoTagIndex:function(){var o=encodeURIComponent(this.data.item.name||"");t.requestSilentSubAdd("tag_home"),wx.navigateTo({url:"/pages/mx/tag/index/index?id=".concat(this.data.item.tag_id,"&tag_name=").concat(o)})},onOpenAction:function(){t.requestSilentSubAdd("tag_home"),this.setData({actionShow:!0})},onCloseAction:function(){this.setData({actionShow:!1})},onActionSelect:function(t){"cancel-follow"==t.detail.act&&(this.doFollowPost("cancel"),this.onCloseAction())},onFollowChange:function(){var t=this.data.isFollow?"cancel":"follow";this.doFollowPost(t)},doFollowPost:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cancel";this.setData({followLoading:!0});var e="cancel"==a?2:1,n="cancel"==a?"已取消":"已加入";o.Kp.Req({url:"/mx/tag/follow",data:{tag_id:this.data.item.tag_id,action:e},callback:function(o){"follow"==t.data.type&&t.triggerEvent("refresh"),"hot"==t.data.type&&"cancel"==a&&t.data.showCancelEllipsis&&(console.log("refresh"),t.triggerEvent("refresh")),t.setData({isFollow:!t.data.isFollow}),"follow"==t.data.type&&wx.showToast({title:n,icon:"none"})},complete:function(){t.setData({followLoading:!1})},errorCallback:function(){},fail:function(){}})}}}); 
 			}); 	require("pages/mx/components/home/tagItem/index.js");
 		__wxRoute = 'pages/mx/components/index/postBar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/index/postBar/index.js';	define("pages/mx/components/index/postBar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({externalClasses:["custom-class"],options:{styleIsolation:"apply-shared"},properties:{isBeauty:{type:Boolean,value:!1}},data:{},methods:{onClick:function(){this.triggerEvent("tap")}}}); 
 			}); 	require("pages/mx/components/index/postBar/index.js");
 		__wxRoute = 'pages/mx/components/index/shareimage/shareimage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/index/shareimage/shareimage.js';	define("pages/mx/components/index/shareimage/shareimage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../../../../@babel/runtime/helpers/asyncToGenerator"),i=getApp(),o=require("../../../../../2B183D93C5DCED5F4D7E559467B135D0.js"),a=i.Const.IMG_STYLE;Component({options:{styleIsolation:"apply-shared"},properties:{tagId:{type:String,optionalTypes:[String,Number],value:0},tagInfo:{type:Object,value:{}},shareText:{type:String,value:"分享"},iconSize:{type:String,value:"19"},fontSize:{type:String,value:"26rpx"},shareColor:{type:String,value:"#333333"},fontColor:{type:String,value:"#333333"}},data:{APP_CONST:i.Const,schoolName:"",isShowDom:!1,isLoading:!1,imageurl:"",template:{},mpCodeUrl:"",lineCount:0,showEllipsis:!1,shareAction:[{key:"wx-friends",name:"发送给朋友",icon:"https://b2.cdn.zanao.com/biz/shareicon/wechat.png",openType:"share"},{key:"share-img",name:"生成分享图",icon:"https://b2.cdn.zanao.com/biz/shareicon/poster.png"}],shareActionShow:!1,shareDuration:300},observers:{},attached:function(){var t=(this.data.tagInfo.img_paths||[]).slice(0,3);this.setData({imgpaths:t,APP_CONST:i.Const})},ready:function(){},methods:{bindOpenAction:function(){var t=this;this.setData({shareActionShow:!0,isShowDom:!0}),wx.nextTick((function(){t.setData({shareDuration:50})}))},bindActionClose:function(){var t=this;this.setData({shareActionShow:!1}),wx.nextTick((function(){t.setData({shareDuration:300})}))},bindActionSelect:function(t){var e=t.detail.key;if(this.bindActionClose(),"wx-friends"!=e&&"share-img"==e){if(this.data.imageurl)return void this.showWxShareAction();this.doDraw()}},doDraw:function(){var t=this;this.setData({isLoading:!0}),this.initMpUrl(),this.computeCount(),wx.nextTick((function(){t.domCalc()}))},initMpUrl:function(){var t=i.Kp.Utils||{},e=t.getRandNum(20),a=t.getTimestamp(),n=e+"$##$"+o.getUserToken()+"$##$"+a,s=t.encrypt(n,"_shareImgAesConf"),r="https://c.zanao.com/sc-api/mx/open/tagmpqrcode?id=".concat(this.data.tagId,"&_ut_=").concat(s,"&_fmc_=wxmp");this.setData({mpCodeUrl:r})},domCalc:function(){var o=this;return e(t().mark((function e(){var n,s,r,h,p,c,l,u,g,x,f,d,m,w,v,R,y,b,D,S,C,P,_,I,T,A,k,z,U,E,M,O,L,N,q,H,$,G,W,j,K,Q,Y,B;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.data.tagInfo||{},t.next=1,o.getDomRect("#dialog-content");case 1:return s=t.sent,C=o,P=s,t.next=2,o.getDomRect(".top-section");case 2:return r=C.getRelativePositon.call(C,P,t.sent),_=o,I=s,t.next=3,o.getDomRect("#mp-code-img");case 3:return h=_.getRelativePositon.call(_,I,t.sent),T=o,A=s,t.next=4,o.getDomRect("#top-tip-img");case 4:return p=T.getRelativePositon.call(T,A,t.sent),k=o,z=s,t.next=5,o.getDomRect("#sub-tip-text");case 5:return c=k.getRelativePositon.call(k,z,t.sent),U=o,E=s,t.next=6,o.getDomRect(".main_box");case 6:return l=U.getRelativePositon.call(U,E,t.sent),M=o,O=s,t.next=7,o.getDomRect(".main_title");case 7:if(u=M.getRelativePositon.call(M,O,t.sent),!n.thread_count){t.next=9;break}return L=o,N=s,t.next=8,o.getDomRect(".thread-count");case 8:g=L.getRelativePositon.call(L,N,t.sent);case 9:return q=o,H=s,t.next=10,o.getDomRect("#main_content");case 10:if(x=q.getRelativePositon.call(q,H,t.sent),f=null,!o.data.showEllipsis){t.next=12;break}return $=o,G=s,t.next=11,o.getDomRect(".d-transparent");case 11:f=$.getRelativePositon.call($,G,t.sent);case 12:return W=o,j=s,t.next=13,o.getDomRect(".d-ellipsis-position");case 13:return d=W.getRelativePositon.call(W,j,t.sent),K=o,Q=s,t.next=14,o.getDomRect(".img_List");case 14:return m=K.getRelativePositon.call(K,Q,t.sent),Y=o,B=s,t.next=15,o.getDomRect(".logo-icon");case 15:if(w=Y.getRelativePositon.call(Y,B,t.sent),v=[],R=o.data.imgpaths,y={width:s.width+"px",height:s.height+"px",background:"#f3f3f3",views:[]},(b=y.views).push({type:"rect",css:{width:r.width+"px",height:r.height+"px",top:r.top+"px",left:r.left+"px",color:"#1eba9d",borderRadius:"0 0 10rpx 10rpx"},scale:"auto"}),b.push({type:"rect",css:{width:h.width+"px",height:h.height+"px",top:h.top+"px",left:h.left+"px",color:"#ffffff",borderRadius:"50%"}}),b.push({type:"image",url:o.data.mpCodeUrl||"",css:{width:h.width-8+"px",height:h.height-8+"px",top:h.top+4+"px",left:h.left+4+"px",background:"#ffffff",borderRadius:"50%"}}),b.push({type:"image",url:"/images/share/logo_tip_mx.png",css:{width:p.width+"px",height:p.height+"px",top:p.top+"px",left:p.left+"px"},scale:"auto"}),b.push({type:"text",text:"二手 · 跑腿 · 求助 · 兼职 · 招聘",css:{fontSize:"22rpx",width:c.width+15+"px",height:c.height+"px",top:c.top+"px",right:l.right+"px",color:"#ffffff"},scale:"auto"}),b.push({type:"rect",css:{color:"#ffffff",borderRadius:"16rpx",width:l.width+"px",height:l.height+"px",top:l.top+"px",left:l.left+"px"},scale:"auto"}),b.push({type:"text",text:n.name,css:{fontSize:"80rpx",lineHeight:"92rpx",width:u.width-5+"px",top:u.top+"px",left:u.left+"px"},scale:"auto"}),n.thread_count&&b.push({type:"text",text:n.thread_count+"帖子",css:{fontSize:"30rpx",lineHeight:"46rpx",width:g.width+"px",top:g.top+"px",left:g.left+"px"},scale:"auto"}),b.push({type:"text",text:n.summary,css:{maxLines:o.data.lineCount||0,fontSize:"30rpx",lineHeight:"46rpx",width:x.width+"px",height:x.height+"px",top:x.top+"px",left:x.left+"px"},scale:"auto"}),f&&b.push({type:"image",url:"/images/share/shadow.png",css:{width:f.width+"px",height:f.height+"px",top:f.top+"px",left:f.left+"px"},scale:"auto"}),b.push({type:"image",url:"/images/share/ellipsis.png",css:{width:d.width+"px",height:d.height+"px",top:d.top+"px",left:d.left+"px"},scale:"auto"}),R.length>0)for(R.length>3&&(R=R.slice(0,3)),R.forEach((function(t){v.push(i.Const.IMG_HOST+t+a.sm_w300_h300)})),D=0;D<v.length;D++)S=74*D+20,b.push({type:"image",url:v[D],css:{width:"128rpx",height:"128rpx",top:m.top+10+"px",left:m.left+S+"px",borderRadius:"12rpx"}});b.push({type:"image",url:"/images/share/logo_icon.png",css:{width:w.width+"px",height:w.height+"px",top:w.top+"px",left:w.left+"px",borderRadius:"12rpx"}}),o.setData({template:y});case 16:case"end":return t.stop()}}),e)})))()},getDomRect:function(t){var e=this;return new Promise((function(i){e.createSelectorQuery().select(t).boundingClientRect((function(t){i(t)})).exec()}))},computeCount:function(){var t=this,e=this.createSelectorQuery();e.select("#main_content").boundingClientRect(),e.select("#real-text").boundingClientRect();var i=!1,o=0;e.exec((function(e){var a=e[0].height,n=e[1].height;o=Math.floor((a+10)/23),n>a&&(i=!0),t.setData({showEllipsis:i,lineCount:o})}))},getRelativePositon:function(t,e){var i=parseInt(e.top-t.top),o=parseInt(e.left-t.left),a=parseInt(t.left+t.width-e.left-e.width),n=parseInt(e.width),s=parseInt(e.height);return{top:i,left:o,right:a,bottom:i+s,width:n,height:s}},onImgOK:function(t){var e=this;this.imagePath=t.detail.path,this.setData({imageurl:this.imagePath},(function(){e.showWxShareAction()}))},onImgErr:function(t){},saveImage:function(){this.imagePath&&"string"==typeof this.imagePath?wx.saveImageToPhotosAlbum({filePath:this.imagePath,success:function(t){wx.showToast({title:"已保存",icon:"none"})},fail:function(t){wx.showToast({title:"保存失败",icon:"error"})}}):wx.showToast({title:"图片保存失败",icon:"error"})},showWxShareAction:function(){wx.showShareImageMenu({path:this.data.imageurl,fail:function(t){},success:function(t){}})}}}); 
 			}); 	require("pages/mx/components/index/shareimage/shareimage.js");
 		__wxRoute = 'pages/mx/components/index/tagInfo/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/index/tagInfo/index.js';	define("pages/mx/components/index/tagInfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../../../@babel/runtime/helpers/Arrayincludes");var t=require("../../../../../40B67327C5DCED5F26D01B20EE6135D0.js"),a=require("../../../../../B94652A1C5DCED5FDF203AA6A59135D0.js"),e=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{bannerShow:{type:Boolean,value:!0},tagInfo:{type:Object,value:{threadCount:0,name:"",subTitle:""},observer:function(t){t.summary&&(this.getHasView(),this.setData({summaryEllipsis:this.splitStringByCount(t.summary,46)})),0==t.view_count&&0==t.user_count&&0==t.thread_count?this.setData({statHide:!0}):this.setData({statHide:!1})}},tagId:{type:String,optionalTypes:[String,Number],value:0}},data:{loaded:!1,summaryCanHide:!1,isSummaryHide:!1,summaryEllipsis:"",statHide:!1},methods:{onPreviewImage:function(t){var a=t.currentTarget.dataset.url;a&&e.previewImage({current:0,urls:[a]})},onGoSearch:function(){t.requestSilentSubAdd("tag_search"),wx.navigateTo({url:"/pages/mx/search/search?id=".concat(this.data.tagId,"&tag_name=").concat(this.data.tagInfo.name,"&is_anon_tag=").concat(this.data.tagInfo.is_anon_tag||!1)})},onAllSummaryChange:function(){this.setData({isSummaryHide:!this.data.isSummaryHide})},splitStringByCount:function(t,a){for(var e=0,s="",i=Array.from(t.replace(/\s+/g," ")),r=0;r<i.length;r++){var n=i[r];if(/[a-z0-9\s]/.test(n)?(s+=n,e+=.5):/[A-Z]/.test(n)?(s+=n,e+=3/4):(s+=n,e+=1),e>=a)break}return s},getHasView:function(){try{if(this.data.tagId&&!this.data.loaded){var t=a.get(a.STORAGE_CONFIG.MX_TAG_SUMMARY_NEED_HIED,"")||"",e=[];t&&(e=t.split(","));var s=!1,i=!1;this.data.tagInfo.summary.length>50&&(s=!0),e.includes(this.data.tagId)?s&&(i=!0):(i=!1,e.push(this.data.tagId),a.set(a.STORAGE_CONFIG.MX_TAG_SUMMARY_NEED_HIED,e.join(","))),this.setData({summaryCanHide:s,isSummaryHide:i})}}catch(t){console.error("getHasView出错",t)}}}}); 
 			}); 	require("pages/mx/components/index/tagInfo/index.js");
 		__wxRoute = 'pages/mx/components/index/threadItem/thread-item';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/index/threadItem/thread-item.js';	define("pages/mx/components/index/threadItem/thread-item.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=(0,require("../../../../../@babel/runtime/helpers/interopRequireDefault").default)(require("@vant/weapp/dialog/dialog")),e=getApp();e.Const.IMG_STYLE;Component({options:{styleIsolation:"apply-shared"},properties:{threadItem:{type:Object,value:{}},isFep:{type:Boolean,value:!1},userInfo:{type:Object,value:{}},firstSkeletonId:{type:String,value:""},from:{type:String,value:""},sortType:{type:String,value:""},isRichText:{type:Boolean,value:!1}},data:{APP_CONST:e.Const,clicking:!1,contentIsSpread:!1,commentSpreadIds:[],actionList:[{act:"report",name:"举报",className:"c-error"}],expandedItems:{},showBgcId:-1,clippedContent:"",actionDisabled:!1,commentMoreCount:0,commentList:[],colorShowStyle:{mask:"",userImg:""}},observers:{"threadItem.need_cert, threadItem.need_check, threadItem.need_pay":function(t,e,n){var o=t||e||n||!1;this.setData({actionDisabled:o})},"threadItem.comment_list, threadItem.c_count":function(t,e){var n=(e||0)-(t&&t.length||0);this.setData({commentMoreCount:n})},"threadItem.comment_list, commentSpreadIds":function(t,e){var n=this,o=[];t&&t.length&&t.forEach((function(t){var a=t.content,i=!1;-1!=e.indexOf(t.comment_id)||t.fontAdd||t.content.length>90&&(a=n.slice(t.content,50),i=!0);t.reply_list&&t.reply_list.length&&t.reply_list.map((function(t){var o=t.content,a=!1;-1!=e.indexOf(t.comment_id)||t.fontAdd||t.content.length>90&&(o=n.slice(t.content,50),a=!0);t.show_content=o,t.reply_is_clip=a})),t.show_content=a,t.is_clip=i,o.push(t)})),this.setData({commentList:o})},"threadItem.content":function(t){if(t&&t.length>200){var e=this.slice(t,120);this.setData({clippedContent:e})}else this.setData({clippedContent:""})}},created:function(){this.setData({APP_CONST:e.Const})},attached:function(){if(this.data.firstSkeletonId==this.data.threadItem.thread_id){var t=this;wx.createSelectorQuery().selectViewport().scrollOffset((function(e){t.createSelectorQuery().select(".common-thread-skeleton").boundingClientRect((function(t){if(t){var n=wx.getSystemInfoSync().windowHeight,o=t.top+e.scrollTop-n/2+t.height+100;wx.pageScrollTo({scrollTop:o})}})).exec()})).exec()}},methods:{bindContendspread:function(){this.setData({contentIsSpread:!0})},slice:function(t,e){return t&&Array.from(t).slice(0,e).join("")||""},goToPage:function(t){var e=this;if(!this.clicking){this.setData({clicking:!0}),setTimeout((function(){e.setData({clicking:!1})}),200);var n={},o=this.data.threadItem.thread_id;if(n.id=o,n.from=this.data.from||"tag_index",this.data.threadItem.need_cert)this.openCertDialog("作者已设置仅对校园认证用户展示");else{var a=Object.keys(n),i="";a.forEach((function(t,e){i+=0==e?"".concat(t,"=").concat(n[t]):"&".concat(t,"=").concat(n[t])})),wx.navigateTo({url:"/pages/mx/info/info?"+i})}}},bindOpenCertDialog:function(){this.openCertDialog("作者已设置仅对校园认证用户展示")},openCertDialog:function(e){t.default.alert({context:this,title:"提示",message:e||"您需要完成校园认证",showCancelButton:!0,cancelButtonText:"关闭",confirmButtonText:"立即认证"}).then((function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})})).catch((function(){}))},showCover:function(){this.data.threadItem.is_cover=!1,this.data.threadItem.ignore_cover=1},commentSpread:function(t){var e=t.currentTarget.dataset.item||{},n=this.data.commentSpreadIds;n.push(e.comment_id),this.setData({commentSpreadIds:n})}}}); 
 			}); 	require("pages/mx/components/index/threadItem/thread-item.js");
 		__wxRoute = 'pages/mx/components/index/waterfall/waterfall-item/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/index/waterfall/waterfall-item/index.js';	define("pages/mx/components/index/waterfall/waterfall-item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../../@babel/runtime/helpers/toConsumableArray"),i=require("../../../../../../40B67327C5DCED5F26D01B20EE6135D0.js"),e=getApp();Component({options:{styleIsolation:"apply-shared",pureDataPattern:/^_/},relations:{"../waterfall/index":{type:"parent",linked:function(t){this._initSizes(t)}}},properties:{sortType:{type:String,value:""},isAnonTag:{type:Boolean,value:!1},threadItem:{type:Object,value:{}},isFep:{type:Boolean,value:!1},from:{type:String,value:""}},data:{visibility:"hidden",colIndex:0,top:0,width:0,imgBoxStyle:{},APP_CONST:e.Const,imgStyleShow:e.Const.IMG_STYLE.common,clicking:!1,isIos:!1},methods:{_initSizes:function(i){var a=this,n=e.Kp.Utils.isIos(),o=i.data,h=o._itemWidth,r=o._columnHeightArr;if(h){var c=this.computedImgHeight(h);this.setData({imgBoxStyle:c,isIos:n,width:h},(function(){a.createSelectorQuery().select(".me-waterfall-item").boundingClientRect((function(e){if(e){var n=e.height,o=Math.min.apply(Math,t(r)),h=Math.max.apply(Math,t(r)),c=r.findIndex((function(t){return t===o})),s=o;r[c]+=n,i.setData({height:Math.max(o+n,h)},(function(){a.setData({top:s,colIndex:c,visibility:"visible"})}))}})).exec()}))}},computedImgHeight:function(t){var i=t,e=1.42*t,a=.56*t,n=e/i,o=a/i,h=this.data.threadItem.img_info||{},r=h.width,c=h.height;if(r<=0||c<=0)return"height: ".concat(i+100,"px;width: ").concat(i,"px;");var s={width:i},l=c/r;return s.height=l>n?e:l<o?a:s.width*l,"width: ".concat(s.width,"px; height: ").concat(s.height,"px;")},goToPage:function(){var t=this;if(!this.clicking){this.clicking=!0,setTimeout((function(){t.clicking=!1}),200),i.requestSilentSubAdd(this.data.from||"tag_index");var e={},a=this.data.threadItem.thread_id;e.id=a,e.from=this.data.from||"tag_index";var n=Object.keys(e),o="";n.forEach((function(t,i){o+=0==i?"".concat(t,"=").concat(e[t]):"&".concat(t,"=").concat(e[t])})),wx.navigateTo({url:"/pages/mx/info/info?"+o})}}}}); 
 			}); 	require("pages/mx/components/index/waterfall/waterfall-item/index.js");
 		__wxRoute = 'pages/mx/components/index/waterfall/waterfall/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/index/waterfall/waterfall/index.js';	define("pages/mx/components/index/waterfall/waterfall/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{pureDataPattern:/^_/},properties:{column:{type:Number,value:2},gap:{type:Number,value:12},width:{type:Number}},data:{_itemWidth:0,_columnHeightArr:[],height:0},lifetimes:{attached:function(){var t=this,e=this.data,i=(e.width,e.gap),n=e.column,a={_columnHeightArr:Array.from({length:n},(function(){return 0}))};this.createSelectorQuery().select(".me-waterfall").boundingClientRect((function(e){e&&(a._itemWidth=(e.width-i*(n-1))/n,t.setData(a,(function(){t.reflow()})))})).exec()}},methods:{reflow:function(){var t=this,e=this.data,i=e.column;if(e._itemWidth){var n=Array.from({length:i},(function(){return 0})),a=this.getRelationNodes("../waterfall-item/index");0===a.length&&this.setData({height:0}),this.setData({_columnHeightArr:n},(function(){a.forEach((function(e){e._initSizes(t)}))}))}}},relations:{"../waterfall-item/index":{type:"child"}},externalClasses:["custom-class"]}); 
 			}); 	require("pages/mx/components/index/waterfall/waterfall/index.js");
 		__wxRoute = 'pages/mx/components/info/action/action';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/action/action.js';	define("pages/mx/components/info/action/action.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=(0,require("../../../../../@babel/runtime/helpers/interopRequireDefault").default)(require("@vant/weapp/dialog/dialog")),t=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{threadItem:{type:Object,value:{}},showBar:{type:Boolean,value:!0},from:{type:String,value:""}},data:{actionShow:!1,actionsConf:{finish:{act:"finish",name:"结束",className:"c-warning"},delete:{act:"delete",name:"删除",className:"c-error"},unfinish:{act:"unfinish",name:"未解决",className:"c-info"}},actions:[],isIos:!0},created:function(){this.setData({isIos:t.Kp.Utils.isIos()})},methods:{onShowAction:function(){var e=[];this.data.threadItem;e.push(this.data.actionsConf.delete),this.setData({actions:e}),this.setData({actionShow:!0})},onCloseAction:function(){console.log("close"),this.setData({actionShow:!1})},onSelect:function(t){var a=this,o=(t.detail||{}).act,i="";"finish"==o&&(i="结束帖子吗？"),"unfinish"==o&&(i="将帖子置为未解决吗？"),"delete"==o&&(i="确认要删除帖子吗？"),e.default.confirm({context:this,title:"提示",message:i}).then((function(){a.doAction(o)})).catch((function(){}))},doAction:function(e){var a=this;t.Kp.Req({url:"/mx/thread/change",method:"post",data:{id:this.data.threadItem.thread_id,act:e},loadingText:"提交中...",message:"操作成功",callback:function(o){a.onCloseAction(),setTimeout((function(){"delete"!=e&&a.triggerEvent("reload",{})}),500),"delete"!=e&&"finish"!=e||("tag_school"==a.data.from&&t.setGData("mxTagSchoolNeedNew",!0),"tag_index"==a.data.from&&t.setGData("mxHomeNeedNew",!0),"mythread"==a.data.from&&t.setGData("mythreadNeedNew",!0),"search"==a.data.from&&t.setGData("mxSearchNeedNew",!0),"delete"==e&&setTimeout((function(){wx.navigateBack()}),500))}})}}}); 
 			}); 	require("pages/mx/components/info/action/action.js");
 		__wxRoute = 'pages/mx/components/info/bottomInput/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/bottomInput/index.js';	define("pages/mx/components/info/bottomInput/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../348D6125C5DCED5F52EB0922CF1135D0.js"),e=getApp();Component({properties:{mineInfo:{type:Object,value:{}},threadItem:{type:Object,value:{}},commentForbidTip:{type:String,value:""},tagId:{type:String,value:""},from:{type:String,value:""}},data:{schoolSugSelectShow:!1,needSelectSchool:!1,newMsgCount:0,isIos:!1},lifetimes:{created:function(){},attached:function(){this.setData({newMsgCount:e.GData.newMsgCount,isIos:e.Kp.Utils.isIos()})},moved:function(){},detached:function(){}},methods:{onComment:function(){this.triggerEvent("reply")},goToPage:function(){if((getCurrentPages()||[]).length>1&&("tag_index"==this.data.from||"tag_school"==this.data.from))wx.navigateBack();else{var t=this.data.threadItem||{},a=t.is_tag_school||!1,o=t.cid||"",i="/pages/mx/tag/index/index";(a||"tag_school"==this.data.from)&&(i="/pages/mx/tag/school/school",o&&(i+="?cid=".concat(o))),i=e.Kp.Utils.urlAppendParams(i,{id:this.data.tagId}),wx.navigateTo({url:i})}},goToMsg:function(){t.getAliasName()||""?wx.switchTab({url:"/pages/msg/msg"}):this.setData({needSelectSchool:!0,schoolSugSelectShow:!0})},onSchoolSelectChoose:function(a){var o=(a.detail||{}).cid||"";t.saveAliasName(o);e.goToEntry("/pages/msg/msg")},onReply:function(){this.triggerEvent("reply")},onLike:function(t){this.triggerEvent("update-like-data",t.detail)},onMark:function(t){this.triggerEvent("update-mark-data",t.detail)}}}); 
 			}); 	require("pages/mx/components/info/bottomInput/index.js");
 		__wxRoute = 'pages/mx/components/info/comment/commentList/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/comment/commentList/index.js';	define("pages/mx/components/info/comment/commentList/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../../@babel/runtime/helpers/interopRequireDefault").default,e=require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),i=require("../../../../../../@babel/runtime/helpers/toConsumableArray"),n=require("../../../../../../@babel/runtime/helpers/defineProperty"),r=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../../../../../@babel/runtime/helpers/objectSpread2"),a=t(require("@vant/weapp/dialog/dialog")),s=t(require("../../../../../../F5C60176C5DCED5F93A06971514F25D0.js")),l=t(require("../../../../../../40B67327C5DCED5F26D01B20EE6135D0.js")),m=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{isAnonTag:{type:Boolean,value:!1},commentMineInfo:{type:Object,value:{}},threadId:{type:String,optionalTypes:[String,Number],value:""},threadItem:{type:Object,value:{}},commentForbidTip:{type:String,value:""},commentForbid:{type:Boolean,value:!1},commentCertValid:{type:Boolean,value:!1},isAdmin:{type:Boolean,value:!1},uSwitchOpen:{type:Boolean,value:!1},dislikeShow:{type:Boolean,value:!1},threadSign:{type:String,value:""},pageFrom:{type:String,value:"tag-info"},queryCommentId:{type:Number,optionalTypes:[String,Number],value:0},vrUserId:{type:Number,optionalTypes:[String,Number],value:0},rewardInfo:{type:Object,value:{}}},observer:{"isAnonTag, isAdmin, uSwitchOpen, commentForbid, commentForbidTip, commentCertValid":function(){this.updateReplyConfig()}},attached:function(){this.updateReplyConfig();var t=getCurrentPages(),e=t[t.length-1].options,i=e.from||"";this.data.from=i,this.setData({from:i}),"mark"==e.from&&this.setData({isFromMark:!0,isOnlyMark:e.last_read_time&&e.last_read_time>0,markReadTime:e.last_read_time||0})},data:{virtualList:[],isFinished:!1,total:0,sortType:"",isOnlyAuthor:!1,isOnlyMine:!1,isOnlyMineShow:!1,needCheckCommentScroll:!0,commentListLoaded:!1,commentListHasLoaded:!1,skeletonShow:!1,sign:"",isCommentEmpty:!0,moreSubPopupShow:!1,commentIdSelected:"",replyConfig:{},commentItem:{},authorLikeOpen:!1,activeCommentId:0,userActionShow:!1,userActionList:[{name:"分配精选红包",act:"hot_select"}],authorSelectMsg:"",newCommentId:"",certShowCookieKey:"comment-cert-show-yes",userCertValid:!1,from:"",showThreadPushChange:!1,pushStatus:-1,agreeNeed:!1,certShowOpen:!1,SUB_COMMENT_START_CLIP_NUM:15,isOnlyMark:!1,markReadTime:0,isFromMark:!1},created:function(){this.initSyncData()},methods:{initSyncData:function(){this.commentList=[],this.fetching=!1},updateReplyConfig:function(){var t={isAnonTag:this.properties.isAnonTag,isAdmin:this.properties.isAdmin,uSwitchOpen:this.properties.uSwitchOpen,commentForbid:this.properties.commentForbid,commentForbidTip:this.properties.commentForbidTip,commentCertValid:this.properties.commentCertValid,agreeNeed:this.data.agreeNeed};this.setData({replyConfig:t})},onOpenAction:function(t){var e=this,i=t.detail||{},n=i.is_deleted||i.is_hide;!this.data.isAdmin&&n||(this.setData({commentItem:o({},i)}),wx.nextTick((function(){e.selectComponent("#commentActionRef").open(i)})))},onReply:function(t){var e=this,i=t&&t.detail||{};i.is_deleted||i.is_hide||i.is_mp_promo||i.act_hide||(this.setData({commentItem:o({},i)}),l.default.requestSilentSubAdd("mx_comment"),wx.nextTick((function(){e.selectComponent("#commentActionRef").openReply(i)})))},onRepaySuccess:function(t){var o=this;return r(e().mark((function a(){var s,l,c;return e().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=t.detail||{},o.setData({threadSign:s.sign||""}),o.data.virtualList.length){a.next=1;break}return o.getCommentList(),a.abrupt("return");case 1:l=0,(c=o.data.commentItem||{}).comment_id>0&&c.root_comment_id>0&&!c.is_mine&&(l=c.comment_id),m.Kp.Req({url:"/mx/comment/list",data:{id:o.data.threadId,ucid:s.comment_id||"",sign:s.sign||"",repcid:l},callback:function(){var t=r(e().mark((function t(r){var a,l,c,d,u,h,p,f,_,g,y,v;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=r.list||[]).length){t.next=1;break}return t.abrupt("return");case 1:if(l=a.find((function(t){return t.comment_id==s.comment_id}))){t.next=2;break}return t.abrupt("return");case 2:if(!((c=l.root_comment_id||"")>0)){t.next=9;break}d=0,u=!1,h=0;case 3:if(!(h<o.data.virtualList.length)){t.next=8;break}p=o.data.virtualList[h],f=!1,_=0;case 4:if(!(_<p.length)){t.next=6;break}if(p[_].comment_id!=c){t.next=5;break}return l.reply_comment_id==c?(d=0,(g=p[_].reply_list).unshift(m.Kp.Utils.deepClone(l)),o.setData(n({},"virtualList[".concat(h,"][").concat(_,"].reply_list"),g)),u=!1):(d=p[_].reply_list.findIndex((function(t){return t.comment_id==l.reply_comment_id}))+1,(y=p[_].reply_list).splice(d,0,m.Kp.Utils.deepClone(l)),o.setData(n({},"virtualList[".concat(h,"][").concat(_,"].reply_list"),y)),u=!1),f=!0,t.abrupt("continue",6);case 5:_++,t.next=4;break;case 6:if(!f){t.next=7;break}return t.abrupt("continue",8);case 7:h++,t.next=3;break;case 8:o.replyScrollAndHighlightTip(l.comment_id,u),-1!=(v=o.commentList.findIndex((function(t){return t.comment_id==c})))&&o.commentList[v].reply_list.splice(d,0,m.Kp.Utils.deepClone(l)),t.next=10;break;case 9:o.setData(n({},"virtualList[0]",[m.Kp.Utils.deepClone(l)].concat(i(o.data.virtualList[0])))),o.commentList.unshift(m.Kp.Utils.deepClone(l)),o.replyScrollAndHighlightTip(l.comment_id,!1),o.scrollToCommentElement(l.comment_id,{isSmooth:!0,isScrollTop:!1});case 10:o.setData({total:o.data.total+1,isOnlyMineShow:!0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});case 2:case"end":return a.stop()}}),a)})))()},replyScrollAndHighlightTip:function(t,e){var i=this;setTimeout((function(){e&&i.scrollToCommentElement(t),i.setData({newCommentId:t}),setTimeout((function(){i.setData({newCommentId:""})}),2e3)}),36)},scrollToCommentElement:function(t,e){var i=this;e||(e={isScrollTop:!1,isSmooth:!0});var n=wx.createSelectorQuery().in(this);n.selectViewport().scrollOffset(),n.select("#comment-item-"+t).boundingClientRect(),n.exec((function(t){var n=t[0].scrollTop+t[1].top,r=i.virtualListHelper.systemHeight,o=!0;!e.isScrollTop&&r&&(t[1].bottom>3*i.virtualListHelper.systemHeight/4||t[1].top<0?n-=1*r/4:o=!1),o&&wx.pageScrollTo({scrollTop:n,duration:e.isSmooth?300:0})}))},updateList:function(){this.getCommentList()},onSortLocalLoaded:function(){this.getCommentList()},startSkeletonLoading:function(){var t=this;this.skeletonTimer&&clearTimeout(this.skeletonTimer),this.skeletonTimer=setTimeout((function(){t.setData({skeletonShow:!0})}),200)},closeSkeletonLoading:function(){this.skeletonTimer&&clearTimeout(this.skeletonTimer),this.setData({skeletonShow:!1})},getCommentList:function(){var t=this;if(!this.fetching){this.setData({commentListLoaded:!1}),this.startSkeletonLoading(),this.fetching=!0;var e={id:this.data.threadId,sign:this.data.threadSign};return this.data.markReadTime>0&&this.data.isFromMark&&(e.mark_read_time=this.data.markReadTime),m.Kp.Req({url:"/mx/comment/list",data:e,callback:function(e){var i=e.agree_need||!1,n=e.user_cert_valid||!1,r=e.cert_show_open||!1,o=e.push_status;null==o&&(o=-1),t.setData({agreeNeed:i,userCertValid:n,certShowOpen:r,pushStatus:o}),t.updateReplyConfig();var a=e.list||[];t.initThreadPushChange(a);var s=t.data.queryCommentId;a.length?(t.commentList=a,t.sortComment(),t.data.needCheckCommentScroll&&t.data.queryCommentId>0&&(s=t.getScrollIdAndChangePosition()),t.data.isFromMark&&t.changeMarkNewCommentPosition(),t.checkIsOnlyMineShow(),t.setVirtualList(),t.setData({isCommentEmpty:!1},(function(){t.setData({total:e.total||0})}))):t.setData({isCommentEmpty:!0}),t.setData({commentListLoaded:!0,commentListHasLoaded:!0}),t.closeSkeletonLoading(),t.data.needCheckCommentScroll&&t.data.queryCommentId>0&&setTimeout((function(){t.scrollToCommentElement(s,{isScrollTop:s!=t.data.queryCommentId,isSmooth:!0}),t.setData({needCheckCommentScroll:!1})}),36)},complete:function(){t.fetching=!1}})}},checkIsOnlyMineShow:function(){this.setData({isOnlyMineShow:this.commentList.some((function(t){return!!t.is_mine||!!Array.isArray(t.reply_list)&&t.reply_list.some((function(t){return t.is_mine}))}))})},getCommentByIdFromList:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=0;i<t.length;i++){var n=t[i];if(n&&n.comment_id==e)return n;for(var r=n&&n.reply_list||[],o=0;o<r.length;o++){var a=r[o];if(a&&a.comment_id==e)return a}}return null},initThreadPushChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={};try{var i=getCurrentPages();e=(i[i.length-1]||{}).options||{}}catch(t){}var n=parseInt(e.msg_id,10)||0,r="msg"==this.data.from||"notice"==this.data.from||"comment"==this.data.from||n>0,o=!1;if(this.data.queryCommentId>0&&r){var a=this.getCommentByIdFromList(t,this.data.queryCommentId);if(a){var s=parseInt(a.reply_comment_id,10)||0;if(s>0){var l=this.getCommentByIdFromList(t,s);o=!(!l||!l.is_mine)}else this.data.threadItem&&this.data.threadItem.is_mine&&(o=!0)}}this.setData({showThreadPushChange:o})},setVirtualList:function(){var t=this,e=m.Kp.Utils.deepClone(this.commentList);this.data.isOnlyMark&&(e=e.filter((function(t){return t.is_mark_new||t.reply_has_mark_new}))),this.data.isOnlyAuthor&&(e=e.map((function(t){var e=(t.reply_list||[]).filter((function(t){return t.is_author}));return o(o({},t),{},{reply_list:e})})).filter((function(t){return t.is_author||t.reply_list.length>0}))),this.data.isOnlyMine&&(e=e.map((function(t){var e=(t.reply_list||[]).filter((function(t){return t.is_mine}));return o(o({},t),{},{reply_list:e})})).filter((function(t){return t.is_mine||t.reply_list.length>0}))),e=e.map((function(e){var i=e.reply_list||[];if(i.length>t.data.SUB_COMMENT_START_CLIP_NUM){var n=i.slice(0,10);return e.replyListClippedStartId=i[10].comment_id,o(o({},e),{},{reply_list:n})}return e})),this.virtualListHelper?(this.setData({isFinished:!1}),this.virtualListHelper.upDateAll(e)):(this.virtualListHelper=new s.default(this,{pageSize:5,mainListKey:"virtualList",finishCb:function(){t.setData({isFinished:!0})}}),this.virtualListHelper.init(e))},onReachBottom:function(){this.virtualListHelper&&this.virtualListHelper.onReachBottom()},onLikeUpdate:function(t){var e=t.detail||{},i=e.isReply?e.rootCommentId:e.commentId,n=this.commentList.findIndex((function(t){return t.comment_id==i}));if(-1!=n){var r=this.commentList[n];if(e.isReply){var o=r.reply_list.findIndex((function(t){return t.comment_id==e.commentId}));if(-1!=o){var a=r.reply_list[o];a.like_num=e.curLikeNum,a.dislike_num=e.curDislikeNum,a.like_has=e.curLiked,a.dislike_has=e.curDisliked}}else r.like_num=e.curLikeNum,r.dislike_num=e.curDislikeNum,r.like_has=e.curLiked,r.dislike_has=e.curDisliked}},onShowMoreSubComment:function(t){var e=t.currentTarget.dataset||{},i=e.rootCommentId||"",r=e.startCommentId||"",o=e.pageNum||0,a=this.commentList.find((function(t){return t.comment_id==i}));if(a){var s=a.reply_list.findIndex((function(t){return t.comment_id==r})),l=a.reply_list.slice(0,s+10),c=l.length<a.reply_list.length?l[l.length-1].comment_id:"",d=this.data.virtualList[o]||[],u=d.findIndex((function(t){return t.comment_id==i}));if(-1!=u){var h=d[u];h.reply_list=m.Kp.Utils.deepClone(l),h.replyListClippedStartId=c,this.setData(n({},"virtualList[".concat(o,"][").concat(u,"]"),h))}}},bindSortChange:function(){this.sortComment(),this.setVirtualList()},bindOnlyMarkChange:function(){this.setVirtualList()},bindOnlyAuthorChange:function(){this.setVirtualList()},sortComment:function(){var t,e=this.commentList,i=this.data.sortType;t="time_first"===i?e.sort((function(t,e){return parseInt(t.post_time)-parseInt(e.post_time)})):"like_first"===i?e.sort((function(t,e){return parseInt(e.like_num)-parseInt(t.like_num)})):e.sort((function(t,e){return parseInt(e.post_time)-parseInt(t.post_time)}));for(var n=null,r=null,o=null,a=null,s=0;s<t.length;s++)t[s].is_jd_act?(n=t[s],t.splice(s,1)):t[s].is_banner?(o=t[s],t.splice(s,1)):t[s].is_mp?(a=t[s],t.splice(s,1)):t[s].is_hongbao&&(r=t[s],t.splice(s,1));n&&t.splice(1,0,n),o&&t.splice(3,0,o),a&&t.splice(3,0,a),r&&t.splice(3,0,r),this.commentList=t},getScrollIdAndChangePosition:function(){var t=this,e=this.data.queryCommentId,i=e;if(e>0&&this.data.needCheckCommentScroll){for(var n=0,r=0;r<this.commentList.length;r++){var o=this.commentList[r];if(o.comment_id==e){n=r;break}for(var a=o.reply_list||[],s=function(){if(a[l].comment_id==e){var s=a[l];if(n=r,a.length>t.data.SUB_COMMENT_START_CLIP_NUM&&l+1>10){i=o.comment_id;var m=[],c=a[l];if(a.splice(l,1),s.reply_comment_id!=s.root_comment_id){var d=a.findIndex((function(t){return t.comment_id==s.reply_comment_id}));-1!==d&&d<l&&(m.push(a[d]),a.splice(d,1))}m.push(c),m=m.concat(a),o.reply_list=m}return 1}},l=0;l<a.length&&!s();l++);}if(n>4){var m=this.commentList[n];this.commentList.splice(n,1),this.commentList.unshift(m)}}return i},changeMarkNewCommentPosition:function(){for(var t=this.data.SUB_COMMENT_START_CLIP_NUM,e=0;e<this.commentList.length;e++){var i=this.commentList[e],n=i.reply_list||[];if(n.length>t){for(var r=[],o=function(t){var e=n[t];if(e.is_mark_new){if(e.reply_comment_id!=e.root_comment_id){var i=n.findIndex((function(t){return t.comment_id==e.reply_comment_id}));-1!==i&&i<t&&(r.push(n[i]),n.splice(i,1),t--)}r.push(e),n.splice(t,1),t--}a=t},a=0;a<n.length;a++)o(a);r.length>0&&(i.reply_list=r.concat(n))}}},reloadCommentList:function(){this.updateList()},reloadInfoPage:function(t){this.triggerEvent("reload",t&&t.detail||{})},onPhoneVerified:function(){this.triggerEvent("phone-verified")},onUserClick:function(t){var e=t.detail||"";this.data.rewardInfo.can_select&&this.showRewardSelectPopup(e)},showRewardSelectPopup:function(t){if(t){var e=this.data.rewardInfo.dist_user_select&&this.data.rewardInfo.dist_user_select.dist_ratio||0,i="确定该用户为精选红包获得者后，该用户将获得".concat(e?e+"%的":"","红包金额，分配后不可更改。");this.setData({activeCommentId:t,userActionShow:!0,authorSelectMsg:i})}},openRewardSelect:function(t){var e=this,i=t.detail||{};if(this.data.rewardInfo.can_select&&i.comment_id){var n=this.data.rewardInfo.dist_user_select&&this.data.rewardInfo.dist_user_select.dist_ratio||0,r="确定该用户为精选红包获得者后，该用户将获得".concat(n?n+"%的":"","红包金额，分配后不可更改。");this.setData({activeCommentId:i.comment_id}),a.default.confirm({context:this,title:"提示",message:r}).then((function(){e.doRewardSelect()}))}},onUserActionSelect:function(t){var e=this,i=t.detail.act;this.setData({userActionShow:!1}),"hot_select"==i&&a.default.confirm({context:this,title:"提示",message:this.data.authorSelectMsg||""}).then((function(){e.doRewardSelect()}))},onCloseUserAction:function(){this.setData({userActionShow:!1})},doRewardSelect:function(){var t=this;m.Kp.Req({url:"/mx/thread/rewardselect",method:"post",message:"已精选",data:{comment_id:this.data.activeCommentId,thread_id:this.data.threadId},callback:function(){wx.pageScrollTo({scrollTop:0}),t.triggerEvent("reload")}})}}}); 
 			}); 	require("pages/mx/components/info/comment/commentList/index.js");
 		__wxRoute = 'pages/mx/components/info/comment/commentSort/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/comment/commentSort/index.js';	define("pages/mx/components/info/comment/commentSort/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../../@babel/runtime/helpers/defineProperty"),e=require("../../../../../../40B67327C5DCED5F26D01B20EE6135D0.js"),i=require("../../../../../../B94652A1C5DCED5FDF203AA6A59135D0.js");Component({externalClasses:["custom-class"],properties:{sortType:{type:String,value:""},onlyMarkShow:{type:Boolean,value:!1},isOnlyMark:{type:Boolean,value:!1},isOnlyAuthor:{type:Boolean,value:!1},isOnlyMine:{type:Boolean,value:!1},isOnlyMineShow:{type:Boolean,value:!1},commentCount:{type:Number,value:0}},data:{sortPopupShow:!1},ready:function(){var t=this,e=i.get(i.STORAGE_CONFIG.COMMENT_SORT_TYPE,"")||"",s="";s=e||"like_first",this.setData({sortType:s},(function(){t.setLocal()})),this.triggerEvent("loaded")},methods:{bindOpenSortPopup:function(){this.setData({sortPopupShow:!0})},bindSortConfirm:function(i){var s=(i.currentTarget.dataset||{}).key;this.data[s]?this.setData(t({},s,!1)):this.setData(t({isOnlyAuthor:!1,isOnlyMark:!1,isOnlyMine:!1},s,!0)),e.requestSilentSubAdd("comment_sort"),"isOnlyMark"===s?this.triggerEvent("only-mark-change"):"isOnlyAuthor"===s?this.triggerEvent("only-author-change"):"isOnlyMine"==s&&this.triggerEvent("only-mine-change"),this.setData({sortPopupShow:!1})},bindCloseSortPopup:function(){this.setData({sortPopupShow:!1})},onTimeFilter:function(){var t=this,e="";(e="time_first"===this.data.sortType?"time_last":(this.data.sortType,"time_first"))!==this.data.sortType&&(this.setData({sortType:e}),wx.nextTick((function(){t.setLocal()})),this.triggerEvent("change",e))},onLikeFilter:function(){var t=this;"like_first"!=this.data.sortType&&(this.setData({sortType:"like_first"}),wx.nextTick((function(){t.setLocal()})),this.triggerEvent("change","like_first"))},setLocal:function(){i.set(i.STORAGE_CONFIG.COMMENT_SORT_TYPE,this.data.sortType)}}}); 
 			}); 	require("pages/mx/components/info/comment/commentSort/index.js");
 		__wxRoute = 'pages/mx/components/info/comment/noCert/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/comment/noCert/index.js';	define("pages/mx/components/info/comment/noCert/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=(0,require("../../../../../../@babel/runtime/helpers/interopRequireDefault").default)(require("@vant/weapp/dialog/dialog"));Component({options:{styleIsolation:"apply-shared"},properties:{},data:{},methods:{openCertDialog:function(){e.default.alert({context:this,title:"提示",message:"作者已设置仅对校园认证用户展示，您需要先完成身份认证，才可查看评论内容",showCancelButton:!0,cancelButtonText:"关闭",confirmButtonText:"立即认证"}).then((function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})})).catch((function(){}))}}}); 
 			}); 	require("pages/mx/components/info/comment/noCert/index.js");
 		__wxRoute = 'pages/mx/components/info/comment/subComment/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/comment/subComment/index.js';	define("pages/mx/components/info/comment/subComment/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../../@babel/runtime/helpers/interopRequireDefault").default,t=require("../../../../../../@babel/runtime/helpers/objectSpread2"),o=e(require("@vant/weapp/dialog/dialog")),n=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{isAnonTag:{type:Boolean,value:!1},replyItem:{type:Object,value:{}},dislikeShow:{type:Boolean,value:!1},threadId:{type:String,optionalTypes:[String,Number]},chatOpen:{type:Boolean,value:!1},avatarExpInfo:{type:Boolean,value:!1},showRewardSelect:{type:Boolean,value:!1},queryCommentId:{type:String,optionalTypes:[String,Number],value:0},newCommentId:{type:String,optionalTypes:[String,Number],value:0},showThreadPushChange:{type:Boolean,value:!1},pushStatus:{type:Number,optionalTypes:[String,Number],value:0}},observers:{"replyItem.is_cover,curIsCover":function(e,t){this.setData({commentIsCover:!!e&&!!t})}},data:{APP_CONST:n.Const,curIsCover:!0,commentIsCover:!1,renderExpInfo:!1},attached:function(){this.setData({APP_CONST:n.Const})},methods:{showCover:function(){this.setData({curIsCover:!1})},likePostSuccess:function(e){var o=t(t({},e.detail),{},{isReply:!0,rootCommentId:this.data.replyItem.root_comment_id});this.triggerEvent("like-update",o)},commentReply:function(){this.triggerEvent("reply",this.data.replyItem)},commentActionShow:function(){this.triggerEvent("action",this.data.replyItem)},needCertDialogShow:function(e){var t=this;o.default.alert({title:"提示",context:this,message:e||"您需要先完成身份认证后，才可以评论",showCancelButton:!0,cancelButtonText:"关闭",confirmButtonText:"立即认证"}).then((function(){t.goToMineCert()})).catch((function(){}))},needCertCommentClick:function(){this.needCertDialogShow("作者已设置仅对校园认证用户展示，您需要先完成身份认证，才可查看评论内容")},goToMineCert:function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})},bindUserClick:function(){var e=this,t=this.data.replyItem||{};if(this.data.avatarExpInfo&&t.user_code)this.setData({renderExpInfo:!0},(function(){e.createSelectorQuery().select(".u-avatar").boundingClientRect((function(o){var n=e.selectComponent("#expInfoPopoverRef");n&&o&&n.open(t.user_code,o)})).exec()}));else{var o=t.comment_id;o&&this.triggerEvent("avatar-click",o)}},onRewardSelect:function(){this.triggerEvent("reward-select",this.data.replyItem)}}}); 
 			}); 	require("pages/mx/components/info/comment/subComment/index.js");
 		__wxRoute = 'pages/mx/components/info/comment/topComment/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/comment/topComment/index.js';	define("pages/mx/components/info/comment/topComment/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=(0,require("../../../../../../@babel/runtime/helpers/interopRequireDefault").default)(require("@vant/weapp/dialog/dialog")),t=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{isAnonTag:{type:Boolean,value:!1},commentItem:{type:Object,value:{}},dislikeShow:{type:Boolean,value:!1},threadId:{type:String,optionalTypes:[String,Number]},chatOpen:{type:Boolean,value:!1},showRewardSelect:{type:Boolean,value:!1},queryCommentId:{type:String,optionalTypes:[String,Number],value:0},newCommentId:{type:String,optionalTypes:[String,Number],value:0},showThreadPushChange:{type:Boolean,value:!1},pushStatus:{type:Number,optionalTypes:[String,Number],value:0}},observers:{"commentItem.is_cover,curIsCover":function(e,t){this.setData({commentIsCover:!!e&&!!t})}},data:{APP_CONST:t.Const,curIsCover:!0,commentIsCover:!1,renderExpInfo:!1},attached:function(){this.setData({APP_CONST:t.Const})},methods:{showCover:function(){this.setData({curIsCover:!1})},likePostSuccess:function(e){this.triggerEvent("like-update",e.detail)},commentReply:function(){this.triggerEvent("reply",this.data.commentItem)},commentActionShow:function(){this.triggerEvent("action",this.data.commentItem)},needCertDialogShow:function(t){var n=this;e.default.alert({title:"提示",context:this,message:t||"您需要先完成身份认证后，才可以评论",showCancelButton:!0,cancelButtonText:"关闭",confirmButtonText:"立即认证"}).then((function(){n.goToMineCert()})).catch((function(){}))},needCertCommentClick:function(){this.needCertDialogShow("作者已设置仅对校园认证用户展示，您需要先完成身份认证，才可查看评论内容")},goToMineCert:function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})},bindUserClick:function(){var e=this,t=this.data.commentItem||{};if(t.user_code)this.setData({renderExpInfo:!0},(function(){e.createSelectorQuery().select(".u-avatar").boundingClientRect((function(n){var o=e.selectComponent("#expInfoPopoverRef");o&&n&&o.open(t.user_code,n)})).exec()}));else{var n=t.comment_id;n&&this.triggerEvent("avatar-click",n)}},onRewardSelect:function(){this.triggerEvent("reward-select",this.data.commentItem)}}}); 
 			}); 	require("pages/mx/components/info/comment/topComment/index.js");
 		__wxRoute = 'pages/mx/components/info/commentAction/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/commentAction/index.js';	define("pages/mx/components/info/commentAction/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{config:{type:Object,value:function(){return{isAnonTag:!1,userCertValid:!1,agreeNeed:!1,certShowOpen:!1,commentForbidTip:"",commentForbid:!1,commentCertValid:!1,isAdmin:!1,uSwitchOpen:!1,commentImgAuth:!1}}},commentItem:{type:Object,value:{}},commentMineInfo:{type:Object,value:{}},threadId:{type:String,optionalTypes:[String,Number],value:""}},data:{actionShow:!1,actionDesc:"",actionList:[],actionsConf:{reply:{act:"reply",name:"回复",msg:"",className:""},report:{act:"report",name:"举报",msg:"",className:""},copy:{act:"copy",name:"复制",msg:"",className:""},black:{act:"black",name:"拉黑",msg:"",className:""},cancel_black:{act:"cancel_black",name:"取消拉黑",msg:"",className:""},admin:{act:"admin",name:"管理",msg:"",className:""},delete:{act:"delete",name:"删除",msg:"确定要删除评论吗？",className:""}}},methods:{open:function(){var t=this.data.commentItem||{},e="@"+t.nickname+"："+t.content,o=[];o.push(this.data.actionsConf.reply),o.push(this.data.actionsConf.copy),o.push(this.data.actionsConf.report),t.is_black?o.push(this.data.actionsConf.cancel_black):t.black_open&&o.push(this.data.actionsConf.black),this.setData({actionList:o,actionDesc:e}),this.setData({actionShow:!0})},openReply:function(){this.selectComponent("#com-comment-post-ref").openDialog(this.data.commentItem)},commentPostCb:function(t){this.triggerEvent("reply-success",t.detail)},phoneVerifiedCb:function(){this.triggerEvent("phone-verified")},closeAction:function(){this.setData({actionShow:!1})},actionSelect:function(t){var e=t.detail||{};console.log(e);var o=e.act;e.name;return"copy"==o?(this.closeAction(),void this.commentCopy()):"report"==o?(this.closeAction(),void this.goToReportPage()):"reply"==o?(this.closeAction(),void this.openReply(this.data.commentItem)):"black"==o?(this.closeAction(),void this.blackAddFunc()):"cancel_black"==o?(this.closeAction(),void this.cancelBlackFunc()):void 0},blackAddFunc:function(){var t=this,e=!(!this.data.commentItem||!this.data.commentItem.is_anon)?"拉黑后，我们将为您屏蔽该帖子下该用户的内容":"拉黑后，我们将为您屏蔽对方的内容。您可以在 个人中心 — 黑名单 中取消拉黑。";wx.showModal({confirmColor:"#ff3d3d",title:"拉黑用户",content:e,confirmText:"确定",cancelText:"取消",success:function(e){e.confirm&&t.doAction("/mx/user/blackadd",{},null,t.data.commentItem.is_author?"thread-with-ignore-cover":"comment")}})},cancelBlackFunc:function(){var t=this;wx.showModal({confirmColor:"#1eba9d",title:"取消拉黑用户",content:"",confirmText:"确定",cancelText:"取消",success:function(e){e.confirm&&t.doAction("/mx/user/blackremove",{},null,t.data.commentItem.is_author?"thread-with-ignore-cover":"comment")}})},doAction:function(e,o,n){var a=this,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"thread",i={comment_id:this.data.commentItem.comment_id};Object.assign(i,o),t.Kp.Req({url:e,method:"post",data:i,message:"操作成功",callback:function(){n&&n(),"comment"===c?a.triggerEvent("comment-reload"):"thread-with-ignore-cover"===c?a.triggerEvent("thread-info-reload",{ignore_cover:!0}):a.triggerEvent("thread-info-reload")},errorCallback:function(){n&&n(!1)},fail:function(){n&&n(!1)}})},commentCopy:function(){wx.setClipboardData({data:this.data.commentItem.content,success:function(t){}})},goToReportPage:function(){var t=this.data.commentItem.comment_id;wx.navigateTo({url:"/pages/report/report?page_from=mx&thread_id="+this.data.threadId+"&comment_id="+t})}}}); 
 			}); 	require("pages/mx/components/info/commentAction/index.js");
 		__wxRoute = 'pages/mx/components/info/commentAction/reply/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/commentAction/reply/index.js';	define("pages/mx/components/info/commentAction/reply/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../../@babel/runtime/helpers/interopRequireDefault").default,t=require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),n=require("../../../../../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../../../../../@babel/runtime/helpers/objectSpread2"),a=e(require("@vant/weapp/dialog/dialog")),i=e(require("@vant/weapp/toast/toast")),r=e(require("../../../../../../2B183D93C5DCED5F4D7E559467B135D0.js")),s=getApp(),m=s.Const.IMG_STYLE;Component({options:{styleIsolation:"apply-shared"},properties:{config:{type:Object,value:{isAnonTag:!1,commentCertValid:!0,userCertValid:!1,agreeNeed:!1,certShowOpen:!1,isAdmin:!1,commentForbid:!1,commentForbidTip:"",uSwitchOpen:!1,commentImgAuth:!1}},threadId:{type:Number,value:0},commentItem:{type:Object,value:{}},commentMineInfo:{type:Object,value:{}},from:{type:String,value:"detail"}},observers:{imgPaths:function(e){var t=3-(e=e||[]).length;this.setData({restCount:t})},commentMineInfo:function(e){e&&e.user_info&&e.user_info.headimgurl&&this.setData({localCommentMineInfo:e,userInfo:e.user_info||{}})}},data:{baseColor:s.GData.baseColor,dialogShow:!1,placeholder:"填写评论内容，200字以内",inputThreadId:0,replyCommentId:0,rootCommentId:0,content:"",responderContent:"",restCount:3,imgUrls:[],imgPaths:[],previewImgUrls:[],beforeClose:null,localCommentMineInfo:{},userInfo:{},phoneVerifyShow:!1},attached:function(){this.setData({beforeClose:this.commentPost.bind(this)})},methods:{setInputThreadId:function(e){return this.setData({inputThreadId:e}),this},openDialog:function(e){var t=this,n=this.data.config||{};if(n.commentForbid){var a=n.commentForbidTip?n.commentForbidTip:"当前帖子不可评论";(0,i.default)({context:this,message:a})}else{var s="";e.comment_id&&(s="@"+e.nickname+"："+e.content);var m=e.root_comment_id>0?e.root_comment_id:e.comment_id,c=this.data.commentMineInfo||{},l=c.user_info||{},u=Boolean(l.headimgurl);console.log(this.data.from),l.headimgurl?this.setData({localCommentMineInfo:o({},c),userInfo:o({},l)}):(this.setData({localCommentMineInfo:{},userInfo:{}}),r.default.getCommentMineInfo({thread_id:this.data.threadId,comment_id:e.comment_id||"",from:this.data.from,isMx:!0}).then((function(e){t.setData({localCommentMineInfo:e||{},userInfo:e&&e.user_info||{}},(function(){t.openCommentOrVerify()}))})).catch((function(){t.openCommentOrVerify()})));this.setData({responderContent:s,replyCommentId:e.comment_id||"",rootCommentId:m||""},(function(){u&&t.openCommentOrVerify()}))}},openCommentOrVerify:function(){var e=Boolean(this.data.config&&this.data.config.agreeNeed||this.data.localCommentMineInfo&&this.data.localCommentMineInfo.agree_need),t=Boolean(this.data.localCommentMineInfo&&this.data.localCommentMineInfo.phone_need);e||t?this.setData({phoneVerifyShow:!0}):this.setData({dialogShow:!0})},onChangeUseAnon:function(e){var t=e.detail.use_anon||!1,n=this.data.localCommentMineInfo.user_info||{},a=o(o({},n),{},{use_anon:t});this.setData({localCommentMineInfo:o(o({},this.data.localCommentMineInfo),{},{user_info:a}),userInfo:a})},closeDialog:function(){this.setData({dialogShow:!1})},contentChange:function(e){this.setData({content:e.detail.value||""})},onUploadSuccess:function(e){var t=e.detail.img_path,n=s.Const.IMG_HOST+t+m.sm_w200_h200,o=s.Const.IMG_HOST+t+m.common,a=this.data.imgPaths,i=this.data.imgUrls,r=this.data.previewImgUrls;a.push(t),i.push(n),r.push(o),this.setData({imgPaths:a,imgUrls:i,previewImgUrls:r})},onImgDelete:function(e){var t=e.currentTarget.dataset.index,n=this.data.imgPaths||[],o=this.data.imgUrls||[],a=this.data.previewImgUrls;n.splice(t,1),o.splice(t,1),a.splice(t,1),this.setData({imgUrls:o,imgPaths:n,previewImgUrls:a})},onImgUploadClick:function(){var e=this.data.localCommentMineInfo||{};if(!e.comment_img_auth){var t=e.comment_img_auth_tip;t&&(0,i.default)({zIndex:99999,context:this,message:t})}},onImgPreview:function(e){var t=e.currentTarget.dataset.index;console.log(t,this.data.previewImgUrls),s.previewImage({current:this.data.previewImgUrls[t],urls:this.data.previewImgUrls})},commentPost:function(e){var o=this;return n(t().mark((function n(){var a;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("cancel"!=e){t.next=1;break}return o.closeDialog(),t.abrupt("return",!0);case 1:if((a=o.data.content.trim())&&a.length&&!(a.length>200)){t.next=2;break}return wx.showToast({title:"请填写评论内容，200字以内",icon:"none"}),t.abrupt("return",!1);case 2:return t.prev=2,t.next=3,s.Kp.Req({url:"/mx/comment/post",method:"post",data:{id:o.data.threadId||o.data.inputThreadId,content:o.data.content,reply_comment_id:o.data.replyCommentId||0,root_comment_id:o.data.rootCommentId||0,use_anon:o.data.userInfo.use_anon?1:0,img_paths:o.data.imgPaths||[],from:o.data.from||""},loadingText:"提交中...",errorToastAuto:!1,errorCallback:function(e){24==e.errno?o.openCertDialog():wx.showToast({title:e.errmsg,icon:"none"})},callback:function(e){wx.showToast({title:"评论成功",icon:"none"}),o.triggerEvent("posted",{sign:e.t_sign,comment_id:e.comment_id||""}),o.setData({content:"",imgPaths:[],imgUrls:[]}),o.closeDialog();var t=o.selectComponent("#subMsgTipsRef");t&&setTimeout((function(){t.openTipCheck()}),300)}});case 3:return t.abrupt("return",!0);case 4:return t.prev=4,t.catch(2),t.abrupt("return",!1);case 5:case"end":return t.stop()}}),n,null,[[2,4]])})))()},handlePhoneVerifySuccess:function(){this.setData({localCommentMineInfo:o(o({},this.data.localCommentMineInfo||{}),{},{phone_need:!1}),phoneVerifyShow:!1,dialogShow:!0}),this.triggerEvent("phone-verified"),wx.showToast({title:"验证成功",icon:"success"})},handlePhoneVerifyCancel:function(){this.setData({phoneVerifyShow:!1})},openCertDialog:function(e){a.default.alert({context:this,title:"提示",message:e||"您需要先完成身份认证后，才可以评论",showCancelButton:!0,cancelButtonText:"关闭",confirmButtonText:"立即认证"}).then((function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})})).catch((function(){}))}}}); 
 			}); 	require("pages/mx/components/info/commentAction/reply/index.js");
 		__wxRoute = 'pages/mx/components/info/content/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/content/index.js';	define("pages/mx/components/info/content/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=(0,require("../../../../../@babel/runtime/helpers/interopRequireDefault").default)(require("@vant/weapp/dialog/dialog")),e=getApp(),a=e.Const.IMG_STYLE;Component({options:{styleIsolation:"apply-shared"},properties:{from:{type:String,value:""},threadSign:{type:String,value:{}},threadItem:{type:Object,value:{}},reportShow:{type:Boolean,value:!0},blackOpen:{type:Boolean,value:!1},isBlack:{type:Boolean,value:!1},isAdmin:{type:Boolean,value:!1},likeDisabled:{type:Boolean,value:!1},likeShow:{type:Boolean,value:!0},dislikeShow:{type:Boolean,value:!1},shareShow:{type:Boolean,value:!0},rewardShow:{type:Boolean,value:!1},rewardInfo:{type:Object,value:{}}},observers:{"threadItem.img_paths":function(t){if(t&&t.length){var o=t.map((function(t){return e.Const.IMG_HOST+t+a.common}));this.setData({imgList:o})}}},data:{APP_CONST:e.Const,imgList:[],isShow:!1,qrCodeUrl:"",imgSpreadShow:!1,payInit:!1,payOpen:!1,postPrice:0,payFrom:"content",renderExpInfo:!1},attached:function(){this.setData({APP_CONST:e.Const})},methods:{onAvatarClick:function(){var t=this,e=this.data.threadItem||{};!e.is_anon&&e.user_code&&this.setData({renderExpInfo:!0},(function(){t.createSelectorQuery().select("#threadAvatarRef").boundingClientRect((function(a){var o=t.selectComponent("#expInfoPopoverRef");o&&a&&o.open(e.user_code,a)})).exec()}))},onTagClick:function(){if(getCurrentPages().length>1&&("tag_index"==this.data.from||"tag_school"==this.data.from))wx.navigateBack();else{var t="/pages/mx/tag/index/index";"tag_school"==this.data.from&&(t="/pages/mx/tag/school/school");var e=this.data.threadItem||{};wx.navigateTo({url:"".concat(t,"?id=").concat(e.tag_id,"&tag_name=").concat(e.tag_name)})}},goToReportPage:function(){wx.navigateTo({url:"/pages/report/report?page_from=mx&thread_id=".concat(this.data.threadItem.thread_id)})},addBlack:function(){var a=this,o=!(!this.data.threadItem||!this.data.threadItem.is_anon)?"拉黑后，我们将为您屏蔽对方的内容":"拉黑后，我们将为您屏蔽对方的内容。您可以在 个人中心 — 黑名单 中取消拉黑。";t.default.confirm({confirmButtonColor:"#ff3d3d",title:"拉黑用户",message:o}).then((function(){e.Kp.Req({url:"/mx/user/blackadd",method:"post",data:{thread_id:a.data.threadItem.thread_id},message:"已拉黑",callback:function(){setTimeout((function(){a.triggerEvent("thread-info-reload",{ignore_cover:!0})}),500)}})})).catch((function(){}))},cancelBlack:function(){var a=this;t.default.confirm({confirmButtonColor:"#1eba9d",title:"取消拉黑用户"}).then((function(){e.Kp.Req({url:"/mx/user/blackremove",method:"post",data:{thread_id:a.data.threadItem.thread_id},message:"已取消拉黑",callback:function(){setTimeout((function(){a.triggerEvent("thread-info-reload")}),500)}})})).catch((function(){}))},updateMarkData:function(t){this.triggerEvent("update-mark-data",t.detail)},updateLikeData:function(t){this.triggerEvent("update-like-data",t.detail)},cateClickDo:function(){},onCopyDetail:function(){var t=this.data.threadItem||{};wx.setClipboardData({data:t.title+"\n"+t.content,success:function(t){wx.showToast({title:"内容已复制",icon:"none"})}})}}}); 
 			}); 	require("pages/mx/components/info/content/index.js");
 		__wxRoute = 'pages/mx/components/info/imgSwiper/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/imgSwiper/index.js';	define("pages/mx/components/info/imgSwiper/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../../../../@babel/runtime/helpers/asyncToGenerator"),i=getApp();i.Const.IMG_STYLE;Component({properties:{showMenu:{type:Boolean,value:!0},minHeightRpx:{type:Number,value:420},imgList:{type:Array,value:[]}},data:{containerHeight:"1000rpx",currentIndex:0,dotList:[],dotStart:0,dotWrapperWidth:0,dotSize:0,dotMargin:0,dotCssVar:"",dotWrapperLeft:""},observers:{currentIndex:function(t){this.calcIndicatorDots(t)}},attached:function(){this.windowInfo=wx.getWindowInfo()||{},this.initDotSize(),this.heightAdapt(),this.calcIndicatorDots(0)},methods:{bindSwiperChange:function(t){var e=t.detail.current;this.setData({currentIndex:e})},initDotSize:function(){var t=Math.floor(.016*this.windowInfo.windowWidth),e=Math.floor(8/750*this.windowInfo.windowWidth),i=5,a=this.data.imgList.length;a<i&&(i=a),this.setData({dotSize:t,dotMargin:e,dotWrapperWidth:i*t+(i-1)*e})},calcIndicatorDots:function(t){var e=this,i=this.data.imgList.length,a=this.data.dotSize+this.data.dotMargin,n=this.data.dotStart,r=n+5-1;t===r&&r<i-1&&(n+=1),t===n&&n>0&&(n-=1);for(var o=(n=Math.max(0,Math.min(n,i-5)))>0,s=(r=n+5-1)<i-1,h=[],d=0;d<i;d++){var c=d>=n&&d<=r,u=d===t,g=!1;c?(d===n&&o&&(g=!0),d===r&&s&&(g=!0)):g=!0,h.push({index:d,active:u,small:g,visible:c})}this.setData({dotStart:n,dotList:h},(function(){e.setData({dotWrapperLeft:-n*a})}))},heightAdapt:function(){var a=this;return e(t().mark((function e(){var n,r,o,s,h,d,c,u,g,p,w,f,l,m,v,x,I,b;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=a.data.imgList.length){t.next=1;break}return t.abrupt("return");case 1:if(n=a.data.imgList[0]||{},r=238,o=Number(a.data.minHeightRpx)||0,i.Kp.Utils.isIos()&&(r+=10),s=750,d=h=1400,c=o,u="rpx",(g=a.windowInfo||{}).windowWidth&&(s=g.windowWidth,p=i.GData.navBarInfo.navHeight||0,w=r/750*s,h=g.windowHeight-w-p,d=h,c=o/750*s,u="px"),l=(f=n||{}).width,m=f.height,!(l<=0||m<=0)){t.next=5;break}return v=n.prv_url||"",t.prev=2,t.next=3,a.getImgHeight(v);case 3:x=t.sent,l=x.width||0,m=x.height||0,t.next=5;break;case 4:t.prev=4,b=t.catch(2),console.log(b);case 5:(I=m/l*s)<h?d=I:d*=.75,d=Math.max(d,c),d=Math.min(d,h),a.setData({containerHeight:"".concat(d).concat(u)});case 6:case"end":return t.stop()}}),e,null,[[2,4]])})))()},bindPreview:function(t){var e=(t.currentTarget.dataset||{}).index;wx.previewImage({urls:this.data.imgList.map((function(t){return t.raw_url||""})),current:this.data.imgList[e||0].raw_url||"",showmenu:this.data.showMenu})},getImgHeight:function(t){return t?new Promise((function(e,i){wx.getImageInfo({src:t,success:function(t){e(t)},fail:function(t){i({})}})})):Promise.reject({})}}}); 
 			}); 	require("pages/mx/components/info/imgSwiper/index.js");
 		__wxRoute = 'pages/mx/components/info/shareimage/shareimage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/shareimage/shareimage.js';	define("pages/mx/components/info/shareimage/shareimage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../../../../@babel/runtime/helpers/asyncToGenerator"),i=getApp(),o=(require("../../../../../348D6125C5DCED5F52EB0922CF1135D0.js"),require("../../../../../2B183D93C5DCED5F4D7E559467B135D0.js")),a=i.Const.IMG_STYLE;Component({options:{styleIsolation:"apply-shared"},externalClasses:["custom-class"],properties:{threadItem:{type:Object,value:{}},shareText:{type:String,value:"分享"},iconSize:{type:String,value:"16"},fontSize:{type:String,value:"26rpx"},shareColor:{type:String,value:"#000000"},fontColor:{type:String,value:"#333333"}},data:{APP_CONST:i.Const,isShowDom:!1,isLoading:!1,imageurl:"",template:{},mpCodeUrl:"",lineCount:0,showEllipsis:!1,shareAction:[{key:"wx-friends",name:"发送给朋友",icon:"https://b2.cdn.zanao.com/biz/shareicon/wechat.png",openType:"share"},{key:"share-img",name:"生成分享图",icon:"https://b2.cdn.zanao.com/biz/shareicon/poster.png"}],shareActionShow:!1,shareDuration:300},observers:{},attached:function(){var t=(this.data.threadItem.img_paths||[]).slice(0,3);this.setData({imgpaths:t,APP_CONST:i.Const})},ready:function(){},methods:{bindOpenAction:function(){var t=this;this.setData({shareActionShow:!0,isShowDom:!0}),wx.nextTick((function(){t.setData({shareDuration:50})}))},bindActionClose:function(){var t=this;this.setData({shareActionShow:!1}),wx.nextTick((function(){t.setData({shareDuration:300})}))},bindActionSelect:function(t){var e=t.detail.key;if(this.bindActionClose(),"wx-friends"!=e&&"share-img"==e){if(this.data.imageurl)return void this.showWxShareAction();this.doDraw()}},doDraw:function(){var t=this;this.setData({isLoading:!0}),this.initMpUrl(),this.computeCount(),wx.nextTick((function(){t.domCalc()}))},initMpUrl:function(){var t=i.Kp.Utils||{},e=t.getRandNum(20),a=t.getTimestamp(),s=e+"$##$"+o.getUserToken()+"$##$"+a,n=t.encrypt(s,"_shareImgAesConf"),h="https://c.zanao.com/sc-api/mx/open/threadmpqrcode?id=".concat(this.data.threadItem.thread_id,"&_ut_=").concat(n,"&_fmc_=wxmp");this.setData({mpCodeUrl:h})},domCalc:function(){var o=this;return e(t().mark((function e(){var s,n,h,r,p,c,l,u,g,x,f,d,m,w,v,R,D,y,b,C,P,S,_,I,A,T,k,z,U,E,M,O,q,L,$,j,G,H,N,W,K,Q,Y,B,F,J,V;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=1,o.getDomRect("#dialog-content");case 1:return s=t.sent,S=o,_=s,t.next=2,o.getDomRect(".top-section");case 2:return n=S.getRelativePositon.call(S,_,t.sent),I=o,A=s,t.next=3,o.getDomRect("#mp-code-img");case 3:return h=I.getRelativePositon.call(I,A,t.sent),T=o,k=s,t.next=4,o.getDomRect("#top-tip-img");case 4:return r=T.getRelativePositon.call(T,k,t.sent),z=o,U=s,t.next=5,o.getDomRect("#sub-tip-text");case 5:return p=z.getRelativePositon.call(z,U,t.sent),E=o,M=s,t.next=6,o.getDomRect(".main_box");case 6:return c=E.getRelativePositon.call(E,M,t.sent),O=o,q=s,t.next=7,o.getDomRect(".main_title");case 7:return l=O.getRelativePositon.call(O,q,t.sent),L=o,$=s,t.next=8,o.getDomRect(".main_content");case 8:if(u=L.getRelativePositon.call(L,$,t.sent),g=null,!o.data.showEllipsis){t.next=10;break}return j=o,G=s,t.next=9,o.getDomRect(".d-transparent");case 9:g=j.getRelativePositon.call(j,G,t.sent);case 10:return H=o,N=s,t.next=11,o.getDomRect(".from-text");case 11:return x=H.getRelativePositon.call(H,N,t.sent),W=o,K=s,t.next=12,o.getDomRect(".location-img");case 12:return f=W.getRelativePositon.call(W,K,t.sent),Q=o,Y=s,t.next=13,o.getDomRect(".d-ellipsis-position");case 13:return d=Q.getRelativePositon.call(Q,Y,t.sent),B=o,F=s,t.next=14,o.getDomRect(".img_List");case 14:return m=B.getRelativePositon.call(B,F,t.sent),J=o,V=s,t.next=15,o.getDomRect(".logo-icon");case 15:if(w=J.getRelativePositon.call(J,V,t.sent),v=[],R=o.data.imgpaths,D={width:s.width+"px",height:s.height+"px",background:"#f3f3f3",views:[]},y=D.views,b=o.data.threadItem||{},y.push({type:"rect",css:{width:n.width+"px",height:n.height+"px",top:n.top+"px",left:n.left+"px",color:"#1eba9d",borderRadius:"0 0 10rpx 10rpx"},scale:"auto"}),y.push({type:"rect",css:{width:h.width+"px",height:h.height+"px",top:h.top+"px",left:h.left+"px",color:"#ffffff",borderRadius:"50%"}}),y.push({type:"image",url:o.data.mpCodeUrl||"",css:{width:h.width-8+"px",height:h.height-8+"px",top:h.top+4+"px",left:h.left+4+"px",background:"#ffffff",borderRadius:"50%"}}),y.push({type:"image",url:"/images/share/logo_tip_mx.png",css:{width:r.width+"px",height:r.height+"px",top:r.top+"px",left:r.left+"px"},scale:"auto"}),y.push({type:"text",text:"二手 · 跑腿 · 求助 · 兼职 · 招聘",css:{fontSize:"22rpx",width:p.width+15+"px",height:p.height+"px",top:p.top+"px",right:c.right+"px",color:"#ffffff"},scale:"auto"}),y.push({type:"rect",css:{color:"#ffffff",borderRadius:"16rpx",width:c.width+"px",height:c.height+"px",top:c.top+"px",left:c.left+"px"},scale:"auto"}),y.push({type:"text",text:b.title,css:{fontSize:"80rpx",lineHeight:"92rpx",width:l.width-5+"px",top:l.top+"px",left:l.left+"px"},scale:"auto"}),y.push({type:"text",text:b.content,css:{maxLines:o.data.lineCount||0,fontSize:"30rpx",lineHeight:"46rpx",width:u.width+"px",height:u.height+"px",top:u.top+"px",left:u.left+"px"},scale:"auto"}),g&&y.push({type:"image",url:"/images/share/shadow.png",css:{width:g.width+"px",height:g.height+"px",top:g.top+"px",left:g.left+"px"},scale:"auto"}),y.push({type:"text",text:b.school_name+" "+b.pt_time,css:{width:x.width+"px",height:x.height+"px",top:x.top+"px",left:x.left+"px"},scale:"auto"}),y.push({type:"image",url:"/images/share/location.png",css:{width:f.width+"px",height:f.height+"px",top:f.top-2+"px",left:f.left+"px"},scale:"auto"}),y.push({type:"image",url:"/images/share/ellipsis.png",css:{width:d.width+"px",height:d.height+"px",top:d.top+"px",left:d.left+"px"},scale:"auto"}),R.length>0)for(R.length>3&&(R=R.slice(0,3)),R.forEach((function(t){v.push(i.Const.IMG_HOST+t+a.sm_w300_h300)})),C=0;C<v.length;C++)P=74*C+20,y.push({type:"image",url:v[C],css:{width:"128rpx",height:"128rpx",top:m.top+10+"px",left:m.left+P+"px",borderRadius:"12rpx"}});y.push({type:"image",url:"/images/share/logo_icon.png",css:{width:w.width+"px",height:w.height+"px",top:w.top+"px",left:w.left+"px",borderRadius:"12rpx"}}),o.setData({template:D});case 16:case"end":return t.stop()}}),e)})))()},getDomRect:function(t){var e=this;return new Promise((function(i){e.createSelectorQuery().select(t).boundingClientRect((function(t){i(t)})).exec()}))},computeCount:function(){var t=this,e=this.createSelectorQuery();e.select("#main_content").boundingClientRect(),e.select("#real-text").boundingClientRect();var i=!1,o=0;e.exec((function(e){var a=e[0].height,s=e[1].height;o=Math.floor((a+10)/23),s>a&&(i=!0),t.setData({showEllipsis:i,lineCount:o})}))},getRelativePositon:function(t,e){var i=parseInt(e.top-t.top),o=parseInt(e.left-t.left),a=parseInt(t.left+t.width-e.left-e.width),s=parseInt(e.width),n=parseInt(e.height);return{top:i,left:o,right:a,bottom:i+n,width:s,height:n}},onImgOK:function(t){var e=this;this.imagePath=t.detail.path,this.setData({imageurl:this.imagePath},(function(){e.showWxShareAction()}))},onImgErr:function(t){},saveImage:function(){this.imagePath&&"string"==typeof this.imagePath?wx.saveImageToPhotosAlbum({filePath:this.imagePath,success:function(t){wx.showToast({title:"已保存",icon:"none"})},fail:function(t){wx.showToast({title:"保存失败",icon:"error"})}}):wx.showToast({title:"图片保存失败",icon:"error"})},showWxShareAction:function(){wx.showShareImageMenu({path:this.data.imageurl,fail:function(t){},success:function(t){}})}}}); 
 			}); 	require("pages/mx/components/info/shareimage/shareimage.js");
 		__wxRoute = 'pages/mx/components/info/threadLikedList/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/info/threadLikedList/index.js';	define("pages/mx/components/info/threadLikedList/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({properties:{group_code:{type:String,value:""},liked:{type:Boolean,value:!1},threadId:{type:[Number,String],value:""},sign:{type:String,value:""},from:{type:String,value:"group"},isMine:{type:Boolean,value:!1}},data:{list:[],showImg:!1,isClip:!0,textIsExistClip:!1,imgIsExistClip:!1,imgClipState:!0,textClipState:!0,textClipNum:0,textList:[],slicedList:[]},ready:function(){},observers:{liked:function(){this.getLikedList()}},methods:{getTextList:function(t){var i=this.data.list||[],e=this.data||{},a=e.textIsExistClip,s=e.textClipNum;this.data.list.length>26&&(a=!0),this.data.isClip&&t&&this.data.list.length>26&&(i=i.slice(0,20),s=this.data.list.length-i.length),this.data.isClip&&!t&&(s=0),this.setData({textClipState:t,textClipNum:s,textIsExistClip:a,textList:i})},getSlicedList:function(t){for(var i=5,e=this.data.list,a=[],s=0;s<e.length;s+=9){if(0==i&&this.setData({imgIsExistClip:!0}),this.data.isClip&&t&&0==i){var l=a[a.length-1].slice(0,8);l.push({type:"clip",text:"+"+(this.data.list.length-45+1)}),a[a.length-1]=l;break}for(var p=e.slice(s,s+9);p.length<9;)p.push({type:"empty"});a.push(p),i--}if(this.data.isClip&&this.data.imgIsExistClip&&!t){var h=a[a.length-1],n={type:"clip",text:"收起"},d=h.findIndex((function(t){return"empty"===t.type}));if(-1!==d)h[d]=n;else{var g=new Array(9).fill({});g[0]=n,a.push(g)}}this.setData({slicedList:a,imgClipState:t})},changClipState:function(t){var i=t.currentTarget.dataset.type||"",e=this.data,a=e.imgClipState,s=e.textClipState;"img"==i?this.getSlicedList(!a):this.getTextList(!s)},changeShowType:function(){this.setData({showImg:!this.data.showImg})},getLikedList:function(){var i=this,e={sign:this.data.sign,id:this.data.threadId};this.data.group_code&&(e.group_code=this.data.group_code);var a="/thread/likelist";"mx"==this.data.from&&(a="/mx"+a),t.Kp.Req({url:a,data:e,callback:function(t){var e=t.list||[];if(e.length){i.setData({list:e});var a=i.data,s=a.imgClipState,l=a.textClipState;i.getSlicedList(s),i.getTextList(l)}}})}}}); 
 			}); 	require("pages/mx/components/info/threadLikedList/index.js");
 		__wxRoute = 'pages/mx/components/post/baseForm/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/post/baseForm/index.js';	define("pages/mx/components/post/baseForm/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../@babel/runtime/helpers/objectSpread2"),e=getApp();Component({options:{styleIsolation:"apply-shared"},properties:{styleInfo:{type:Object,value:{}},formInit:{type:Object,default:{imgHide:!1,isAnonTag:!1,postTip:"",tagName:"",imgUrls:[],schoolList:[]}},formInfo:{type:Object,value:{title:"",content:"",img_paths:[],select_cid:""}},pageStyle:{type:"",value:"default"}},observers:{"formInfo.img_paths":function(t){var e=9-(t=t||[]).length;this.setData({restCount:e})}},data:{imgUrls:[],restCount:9,colConf:{}},attached:function(){this.data.styleInfo&&this.data.styleInfo.col_conf&&this.setData({colConf:this.data.styleInfo.col_conf})},methods:{onUploadSuccess:function(t){var s=t.detail.img_path,a=e.Const.IMG_HOST+s+e.Const.IMG_STYLE.sm_w200_h200,n=this.data.formInfo.img_paths||[],o=this.data.imgUrls||[];o.push(a),n.push(s),this.setFormInfo({img_paths:n}),this.setData({imgUrls:o})},onImgDelete:function(t){var e=t.currentTarget.dataset.key,s=this.data.formInfo.img_paths||[],a=this.data.imgUrls||[];s.splice(e,1),a.splice(e,1),this.setData({imgUrls:a}),this.setFormInfo({img_paths:s})},bindInput:function(t){var e=t.detail.value||"",s=t.currentTarget.dataset.name||"";e&&"title"==s&&this.setFormInfo({title:e}),e&&"content"==s&&this.setFormInfo({content:e})},onChangeSelectCid:function(t){var e=t.detail.cid||"";this.setFormInfo({select_cid:e})},setFormInfo:function(e){this.triggerEvent("update",t({},e))},onImgPreview:function(t){var s=t.currentTarget.dataset.index,a=(this.data.formInfo.img_paths||[]).map((function(t){return e.Const.IMG_HOST+t+e.Const.IMG_STYLE.common}));e.previewImage({current:a[s],urls:a})}}}); 
 			}); 	require("pages/mx/components/post/baseForm/index.js");
 		__wxRoute = 'pages/mx/components/post/postReward/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/post/postReward/index.js';	define("pages/mx/components/post/postReward/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../@babel/runtime/helpers/objectSpread2");Component({properties:{ruleCustom:{type:Boolean,value:!1},rewardRatio:{type:Array,value:[-1,-1,-1]},rewardCircleShow:{type:Boolean,value:!1},rewardPriceDefault:{type:Number,value:0},rewardPriceMin:{type:Number,value:0}},observers:{"curPrice, reward_ratio_select, reward_ratio_random,reward_ratio_like_top":function(e,r,a,t){this.triggerEvent("change",{rewardPrice:e,reward_ratio_select:r,reward_ratio_random:a,reward_ratio_like_top:t})}},data:{curPrice:0,reward_ratio_select:0,reward_ratio_random:0,reward_ratio_like_top:0},methods:{onPriceChange:function(e){var r=e.detail.price||0;this.setData({curPrice:r})},onRuleChange:function(r){var a=r.detail.list||{},t={};a.forEach((function(e){t[e.e_name]=e.value||0})),this.setData(e({},t))}}}); 
 			}); 	require("pages/mx/components/post/postReward/index.js");
 		__wxRoute = 'pages/mx/components/post/reward/circleChart/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/post/reward/circleChart/index.js';	define("pages/mx/components/post/reward/circleChart/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{data:{type:Array,value:[],observer:function(t){this.drawChart(t)}},size:{type:Number,value:200}},data:{radius:60,circumference:2*Math.PI*60,chartImg:""},lifetimes:{attached:function(){this.drawChart(this.data.data)}},methods:{drawChart:function(t){var e=this;this.createSelectorQuery().select("#donutCanvas").fields({node:!0,size:!0}).exec((function(a){var r=a[0].node,i=r.getContext("2d"),n=wx.getSystemInfoSync().pixelRatio,s=e.data.size/2;if(r.width=a[0].width*n,r.height=a[0].height*n,i.scale(n,n),i.clearRect(0,0,a[0].width,a[0].height),i.beginPath(),i.arc(s,s,e.data.radius,0,2*Math.PI),i.strokeStyle="#d2d3d4",i.lineWidth=16,i.stroke(),0!==t.length){var o=t.reduce((function(t,e){return t+e.value}),0),h=4.72;t.forEach((function(t){var a=t.value/o*2*Math.PI;i.beginPath(),i.arc(s,s,e.data.radius,h,h+a),i.strokeStyle=t.color,i.lineWidth=16,i.stroke();for(var r=h+a/2,n=t.value+"%",l=e.data.radius-1.5,c=20/n.length/l,d=0;d<n.length;d++){var u=n[d],v=r-(n.length/2-d)*c;n.length-1==d&&(v+=.03);var f=s+l*Math.cos(v),g=s+l*Math.sin(v);i.save(),i.translate(f,g),i.rotate(v+Math.PI/2),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#000",i.font="12px Arial",n.length-1==d&&(i.font="bold 9px Arial"),i.fillText(u,0,0),i.restore()}h+=a})),e.drawImageFromCanvas(r)}else e.drawImageFromCanvas(r)}))},drawImageFromCanvas:function(t){var e=this;wx.canvasToTempFilePath({canvas:t,success:function(t){var a=t.tempFilePath;e.setData({chartImg:a||""})},fail:function(t){console.error("Failed to convert canvas to image:",t)}},this)}}}); 
 			}); 	require("pages/mx/components/post/reward/circleChart/index.js");
 		__wxRoute = 'pages/mx/components/post/reward/pricePicker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/post/reward/pricePicker/index.js';	define("pages/mx/components/post/reward/pricePicker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{styleIsolation:"shared"},properties:{rewardPriceDefault:{type:Number,value:0},rewardPriceMin:{type:Number,value:0}},observers:{rewardPriceYuan:function(e){var a=this.data.labelList.some((function(a){return a.value===e}));this.setData({sliderValueShow:!a})},"rewardPriceMin, rewardPriceDefault":function(e,a){this.initPriceConfig(e,a)}},ready:function(){this.initPriceConfig(this.properties.rewardPriceMin,this.properties.rewardPriceDefault)},data:{leftBtn:"0%",descPopupShow:!1,sliderValue:0,labelList:[{value:0,left:"0%"},{value:2,left:"10%"},{value:6,left:"30%"},{value:10,left:"50%"},{value:200,left:"100%"}],sliderValueShow:!1,rewardPriceYuan:0},curValue:0,lastValue:0,minSliderValue:0,methods:{getSliderValueByPriceYuan:function(e){var a=e/1||0;return a<=0?0:a<=10?19*a:a+180},initPriceConfig:function(e,a){var t=this,i=e/1||0,r=a/1||0;if(this.minSliderValue=i>0?this.getSliderValueByPriceYuan(i):0,!(r<=0)){var n=this.getSliderValueByPriceYuan(r);this.data.sliderValue===n&&this.data.rewardPriceYuan===r||(this.setData({sliderValue:n}),this.handleChange(n),wx.nextTick((function(){t.emitChange()})))}},onLabelClick:function(e){var a=this,t=e.currentTarget.dataset.item,i=this.data.sliderValue;t.value<=10&&(i=19*t.value),200==t.value&&(i=380),this.setData({sliderValue:i}),this.handleChange(i),wx.nextTick((function(){a.emitChange()}))},onChange:function(e){var a=this,t=e.detail;this.handleChange(t),wx.nextTick((function(){a.emitChange()}))},onInput:function(e){var a=e.detail.value;this.handleChange(a)},handleChange:function(e){var a=this,t=this.properties.rewardPriceMin/1||0;if(t>0&&e<this.minSliderValue){this.setData({rewardPriceYuan:t}),wx.nextTick((function(){a.setData({sliderValue:a.minSliderValue})}));var i=t/20*100+"%";t<=10&&this.setData({leftBtn:i})}else{var r=this.data.rewardPriceYuan,n=r;r=e>=191?(e-190)/1+10:e/19,n=Math.floor(r),r>9.3&&r<10&&(n=10),this.setData({rewardPriceYuan:n});var l=n/20*100+"%";n<=10&&this.setData({leftBtn:l})}},emitChange:function(){var e=this;wx.nextTick((function(){e.triggerEvent("change",{price:100*e.data.rewardPriceYuan})}))},onSliderTapDisable:function(){}}}); 
 			}); 	require("pages/mx/components/post/reward/pricePicker/index.js");
 		__wxRoute = 'pages/mx/components/post/reward/rewardDesc/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/post/reward/rewardDesc/index.js';	define("pages/mx/components/post/reward/rewardDesc/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../../@babel/runtime/helpers/objectSpread2"),t=getApp();Component({properties:{value:{type:Boolean,value:!1},ratio:{type:Array,value:[-1,-1,-1]},post:{type:Boolean,value:!1},rewardHourLike:{type:Number,value:0},rewardHourSelect:{type:Number,value:0}},data:{isDark:!1,ruleList:[{name:"作者精选",rule:"作者可以选择一位评论者",ratio:"",bgc:"#ff5c64",desc:"作者精选一个评论区用户，分配&&%的红包金额。若无满意评论，可不分配。",iconShow:!0,descShow:"",type:"select"},{name:"最高赞",rule:"获赞最多的一位评论者",ratio:"",bgc:"#ffc2c5",desc:"获赞最高者且赞数>2将自动获得&&%的红包金额。同赞数按先后顺序。发帖24小时后自动分配。",iconShow:!0,descShow:"",type:"like_top"},{name:"幸运星",rule:"系统随机选择一位评论者",ratio:"",bgc:"#ffe7e8",desc:"随机挑选一位评论区用户，分配&&%的红包金额。发帖24小时后自动分配。",iconShow:!1,descShow:"",type:"random"}],showLastTip:!1,ruleListShow:[],typeCount:0,isIos:!0},observers:{ratio:function(e){this.updateRuleListShow(e),this.setTypeCount(e)}},ready:function(){this.setData({isIos:t.Kp.Utils.isIos()})},methods:{updateRuleListShow:function(t){var o=0!==t[0],r=this.data.ruleList.map((function(o,r){for(var a=t[r],s=-1===a?"":a,i=!1,u=r;u<3&&0!==t[r];u++)if(t[u+1]&&0!==t[u+1]){i=!0;break}var n=o.desc.replace("&&",s);return e(e({},o),{},{ratio:s,iconShow:i,descShow:n})}));this.setData({ruleListShow:r,showLastTip:o})},setTypeCount:function(e){var t=e.filter((function(e){return 0!==e})).length;this.setData({typeCount:t||0})}}}); 
 			}); 	require("pages/mx/components/post/reward/rewardDesc/index.js");
 		__wxRoute = 'pages/mx/components/post/reward/rulePicker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/post/reward/rulePicker/index.js';	define("pages/mx/components/post/reward/rulePicker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../../@babel/runtime/helpers/toConsumableArray");Component({options:{styleIsolation:"shared"},properties:{show:{type:Boolean,value:!1},ruleCustom:{type:Boolean,value:!1},rewardRatio:{type:Array,value:[]}},ready:function(){if(!this.data.ruleCustom){var a=["2","1","3"];this.updateButtonValues(a),this.setData({result:a,chartData:this.data.btnList}),this.triggerEvent("change",{list:t(this.data.btnList)})}},data:{chartData:[],btnList:[{id:"1",value:0,color:"#ff5c64",name:"作者精选",e_name:"reward_ratio_select"},{id:"2",value:0,color:"#ff9fa3",name:"最高赞",e_name:"reward_ratio_like_top"},{id:"3",value:0,color:"#ffd7d9",name:"幸运星",e_name:"reward_ratio_random"}],result:[]},methods:{onBtnChange:function(a){var e=a.detail,i=e.slice();this.setData({result:e}),this.updateButtonValues(e),this.updateChartData(i),this.triggerEvent("change",{list:t(this.data.btnList)})},toggleCheckbox:function(t){var a=t.currentTarget.dataset.id,e=this.selectComponent("#checkbox-".concat(a));e&&e.toggle()},updateChartData:function(t){var a=this.data.chartData;if(a.length>t.length){var e=new Set(t),i=a.filter((function(t){return e.has(t.id)}));this.setData({chartData:i})}else{var r=t[t.length-1],n=this.data.btnList;a.unshift(n.find((function(t){return t.id==r}))),this.setData({chartData:a})}},updateButtonValues:function(t){var a=this.data.btnList;a.forEach((function(t){return t.value=0}));var e=t.slice(),i={single:{1:100,2:100,3:100},double:{"1_3":{1:90,3:10},"2_3":{2:90,3:10},"1_2":{1:50,2:50}},triple:{1:50,2:40,3:10}};if(!this.data.ruleCustom){var r=i.triple;r[1]=this.data.rewardRatio[0],r[2]=this.data.rewardRatio[1],r[3]=this.data.rewardRatio[2]}if(1===e.length){var n=a.find((function(t){return t.id===e[0]}));n.value=i.single[n.id]}else if(2===e.length){e.sort();var s=e.join("_"),o=i.double[s];e.forEach((function(t){a.find((function(a){return a.id===t})).value=o[t]}))}else 3===e.length&&e.forEach((function(t){a.find((function(a){return a.id===t})).value=i.triple[t]}));return this.setData({btnList:a}),e}}}); 
 			}); 	require("pages/mx/components/post/reward/rulePicker/index.js");
 		__wxRoute = 'pages/mx/components/post/schoolPicker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/post/schoolPicker/index.js';	define("pages/mx/components/post/schoolPicker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../@babel/runtime/helpers/objectSpread2");Component({properties:{list:{type:Array,value:[],observer:function(){this.computed()}},cid:{type:String,value:"",observer:function(e,t){console.log("cid"),e!==t&&this.computed()}}},lifetimes:{detached:function(){console.log("detached")}},data:{schoolName:"",showList:[],canShowPicker:!1,showSelectPick:!1},methods:{computed:function(){var t=this.data.list,i=this.data.cid,c=t.find((function(e){return e.cid===i})),o=c?c.school_name:"",n=t.map((function(t){return e(e({},t),{},{value:t.cid||"",text:t.school_name||""})})),s=!1;t.length>1&&(s=!0),this.setData({showList:n,canShowPicker:s,schoolName:o})},bindOpenPicker:function(){this.setData({showSelectPick:!0})},onCancel:function(){this.closePicker()},closePicker:function(){this.setData({showSelectPick:!1})},onConfirm:function(e){var t=(e.detail.value||{}).cid,i=void 0===t?"":t;this.triggerEvent("change",{cid:i}),this.closePicker()}}}); 
 			}); 	require("pages/mx/components/post/schoolPicker/index.js");
 		__wxRoute = 'pages/mx/components/ui/tabs/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/components/ui/tabs/index.js';	define("pages/mx/components/ui/tabs/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{styleIsolation:"page-shared"},externalClasses:["custom-item","custom-slider"],properties:{tabs:{type:Array,value:[]},activeId:{type:Number,optionalTypes:[Number,String],value:0}},observers:{"tabs,activeId":function(e,t){var a=this;if(e&&e.length){var r=e.findIndex((function(e){return e.value===t}));-1===r&&(r=0);var i=this.createSelectorQuery();i.selectAll(".tab-item").boundingClientRect(),i.exec((function(e){var t=e[0];if(t&&t.length){var i=t[r],n=t[0];if(i&&n){var s=i.left-n.left,l=i.width,o="left:".concat(s+=l/2,"px");a.setData({sliderStyle:o})}}}))}}},data:{sliderStyle:""},methods:{onChange:function(e){var t=e.currentTarget.dataset.item||{};this.triggerEvent("change",t)}}}); 
 			}); 	require("pages/mx/components/ui/tabs/index.js");
 		__wxRoute = 'pages/mx/tag/home/home';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/tag/home/home.js';	define("pages/mx/tag/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{barrageList:[{backgroundColor:"#FFD596",content:"今年不想再回家了"},{backgroundColor:"#ffff96",content:"你们收到多少压岁钱"},{backgroundColor:"#ff96d3",content:"不管你走到哪里我的脚本都跟到哪里"},{backgroundColor:"#96fff1",content:"什么时候开学能够看到"},{backgroundColor:"#FFD596",content:"欢迎来到小程序"}],loaded:!1,hotList:[],followList:[],moreList:[]},onLoad:function(){this.getList()},getList:function(){var o=this;t.Kp.Req({url:"/mx/tag/home",callback:function(t){o.setData({loaded:!0,hotList:t.hot_list||[],followList:t.follow_list||[],moreList:t.list||[]})},complete:function(){},errorCallback:function(){},fail:function(){}})},onRefresh:function(){this.getList()},onPullDownRefresh:function(){this.getList(),setTimeout((function(){wx.stopPullDownRefresh()}),500)}}); 
 			}); 	require("pages/mx/tag/home/home.js");
 		__wxRoute = 'pages/mx/tag/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/tag/index/index.js';	define("pages/mx/tag/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../@babel/runtime/helpers/interopRequireDefault").default,e=require("../../../../@babel/runtime/helpers/objectSpread2"),a=t(require("../../../../40B67327C5DCED5F26D01B20EE6135D0.js")),i=t(require("@vant/weapp/dialog/dialog")),n=getApp();Page({options:{styleIsolation:"apply-shared"},data:{pageTitle:"",navLeftIconName:"",sortList:[],sortType:"",myCid:"",onlyMineCid:!1,isShow:!1,loaded:!1,detail:{is_anon_tag:!1,name:"",summary:"",thread_count:"",is_fep:!1,style:"default",top_bg_img_url:""},isHidePostBar:!1,emptyTip:"",shareUrl:"",finished:!1,isFetching:!1,isFirst:!0,showError:!1,threadList:[],maxThreadId:"0",minThreadId:"0",minTime:"0",maxTime:"0",hotMinId:"0",newReqTime:(new Date).getTime(),tagName:""},onLoad:function(t){var e=this,a=t.id||"";this.initNav(t),this.setData({tagId:a},(function(){e.getTagInfo()})),this.handleBtnScrollHide=n.Kp.Utils.createScrollBehavior({onHide:function(){e.setData({isHidePostBar:!0})},onShow:function(){e.setData({isHidePostBar:!1})}})},onReady:function(){},onShow:function(){if(n.GData.mxHomeNeedNew&&this.data.loaded&&(this.refreshTagIndex(),n.setGData("mxHomeNeedNew",!1)),n.GData.mxNeedCheckOpenWxMsgAfterPost){n.setGData({mxNeedCheckOpenWxMsgAfterPost:!1});var t=this.selectComponent("#subMsgTipsRef");t&&setTimeout((function(){t.openTipCheck()}),300)}n.setGData("mxHomeNeedNew",!1)},onHide:function(){},onUnload:function(){},initNav:function(t){var e=t.tag_name||"",a="nav_back";e&&(e=decodeURIComponent(e));var i=getCurrentPages();i&&1==i.length&&(a="nav_mp_home"),this.setData({navLeftIconName:a,pageTitle:e,tagName:e}),"group"==t.from&&n.newMsgCheck()},onNavClick:function(){var t=getCurrentPages();t&&1==t.length?wx.reLaunch({url:"/pages/entry/entry"}):wx.navigateBack()},onlyMineCidChange:function(){var t=this;this.data.isFetching||this.setData({onlyMineCid:!this.data.onlyMineCid,threadList:[]},(function(){t.resetWaterfall(),t.refetchList()}))},onSortChange:function(t){var e=this,i=t.detail.value;a.default.requestSilentSubAdd("tag_index_sort"),this.setData({sortType:i,threadList:[]},(function(){e.resetWaterfall(),e.refetchList(!1)}))},getTagInfo:function(){var t=this;n.Kp.Req({url:"/mx/tag/info",data:{tag_id:this.data.tagId},callback:function(a){var i=a.to_tag_id||"";if(i>0)wx.redirectTo({url:"/pages/mx/tag/index/index?id="+i});else{var n=a.detail||{},s=n.sort_list||[],r=t.data.sortType,o=s.map((function(t){return t.selected&&(r=t.sort),e(e({},t),{},{text:t.label,value:t.sort})}));!r&&s.length&&(r=s[0].sort);var d=t.data.tagName||"";d&&n.name==d||t.setData({pageTitle:n.name}),t.data.loaded?t.setData({detail:n,shareUrl:a.share_link_url||"",emptyTip:a.empty_tip||"跨校小组不存在或已关闭"}):(t.setData({isShow:a.is_show||!1,myCid:a.my_cid||"",detail:n,shareUrl:a.share_link_url||"",emptyTip:a.empty_tip||"跨校小组不存在或已关闭",sortType:r,sortList:o,loaded:!0}),wx.nextTick((function(){t.getThreadList()})))}}})},refetchList:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setData({finished:!1,isFetching:!1,isFirst:!0,maxThreadId:"0",minThreadId:"0",minTime:"0",maxTime:"0",hotMinId:"0"},(function(){t.getThreadList(e)}))},refreshTagIndex:function(){this.getTagInfo(),this.refetchList()},getThreadList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.data.finished&&!this.data.isFetching){this.setData({isFetching:!0});var a=this.data.sortType||"",i=this.data.tagId||"",s=this.data.minThreadId||"",r=(new Date).getTime();this.setData({newReqTime:r});var o={tag_id:i,sort:a,from_id:s};"hot"!=a&&"like"!=a&&"comment"!=a||(o.from_id=this.data.hotMinId),this.data.onlyMineCid&&this.data.myCid&&(o.my_cid=this.data.myCid),n.Kp.Req({url:"/mx/tag/threadlist",data:o,complete:function(){t.data.newReqTime==r&&t.setData({isFirst:!1,isFetching:!1})},fail:function(){t.data.newReqTime==r&&t.setData({showError:!0})},errorcallback:function(){t.data.newReqTime==r&&t.setData({showError:!0})},callback:function(i){if(t.data.newReqTime==r){var n=i.list||[];if(n.length){var s=t.data.isFirst?n:t.data.threadList.concat(n);t.updateThreadList(s),"hot"!=a&&"like"!=a&&"comment"!=a||t.updateHotMinId(n)}else t.data.isFirst&&t.setData({threadList:[]}),t.setData({finished:!0});e&&t.resetWaterfall(),t.setData({isFirst:!1,showError:!1})}}})}},resetWaterfall:function(){this.selectComponent("#waterFallId").reflow()},updateThreadList:function(t){var e="0",a="0",i="0",n="0",s={};t.forEach((function(r,o){0===o&&(n=r.thread_id,e=r.thread_id),r.thread_id>e&&(e=r.thread_id),r.thread_id<n&&(n=r.thread_id),!r.is_special&&(0==a||a>r.p_time)&&(a=r.p_time),!r.is_special&&(0==i||i<r.p_time)&&(i=r.p_time),s[r.thread_id]=r,t[o]=r})),this.setData({threadList:t,maxThreadId:e,minThreadId:n,minTime:a,maxTime:i})},updateHotMinId:function(t){t.length&&this.setData({hotMinId:t[t.length-1].thread_id})},gotoPost:function(){var t=this.data.detail||{};if(t.post_limit){var e=t.post_limit_conf||{},n=e.tip||"该小组仅对特定用户开放发帖",s=e.btn_text||"去认证",r=e.type||"";i.default.confirm({title:"提示",message:n,showConfirmButton:e.btn_show||!1,confirmButtonText:s,confirmButtonColor:"#1eba9d",cancelButtonText:e.btn_show?"取消":"关闭"}).then((function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert?cert_type=".concat(r)})})).catch((function(){}))}else{a.default.requestSilentSubAdd("mx_post_bar");var o=this.data.tagId||"",d=t.style||"default";wx.navigateTo({url:"/pages/mx/post/post?tag_id=".concat(o,"&from=tag_index&style=").concat(d)})}},onPullDownRefresh:function(){wx.stopPullDownRefresh(),this.refreshTagIndex()},onReachBottom:function(){this.getThreadList()},onPageScroll:function(t){this.handleBtnScrollHide(t)},onShareAppMessage:function(){var t="/pages/mx/tag/index/index?id="+this.data.tagId,e=(this.data.detail||{}).name;return n.getShareOption(t,e,!0)}}); 
 			}); 	require("pages/mx/tag/index/index.js");
 		__wxRoute = 'pages/mx/tag/school/school';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/tag/school/school.js';	define("pages/mx/tag/school/school.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../348D6125C5DCED5F52EB0922CF1135D0.js"),a=getApp();Page({options:{styleIsolation:"apply-shared"},data:{sortList:[],sortType:"",myCid:"",aliasName:"",onlyMineCid:!0,scqrAlias:"",schoolName:"",isShow:!1,loaded:!1,detail:{name:"",summary:"",thread_count:"",is_fep:!1,style:"default",top_bg_img_url:""},emptyTip:"",shareUrl:"",finished:!1,isFetching:!1,isFirst:!0,listLoaded:!1,showError:!1,threadList:[],maxThreadId:"0",minThreadId:"0",minTime:"0",maxTime:"0",hotMinId:"0",newReqTime:(new Date).getTime(),tagName:""},onLoad:function(e){var i=this,s=e.id||"",n=e.tag_name||"",o=e.cid||"";this.setData({aliasName:o||t.getAliasName()||""}),this.registerSchool(),n&&(n=decodeURIComponent(n),a.setPageTitle(n)),this.setData({tagId:s,tagName:n},(function(){i.getTagInfo()}))},onReady:function(){},onShow:function(){a.GData.mxTagSchoolNeedNew&&this.data.loaded&&(this.refreshTagIndex(),a.setGData("mxTagSchoolNeedNew",!1)),a.setGData("mxTagSchoolNeedNew",!1)},onHide:function(){},onUnload:function(){},registerSchool:function(){var t=this.data.aliasName||"";t&&a.Kp.Req({url:"/user/simpleinfo",aliasName:t,ignoreFail:!0})},onlyMineCidChange:function(){var t=this;this.data.isFetching||this.setData({onlyMineCid:!this.data.onlyMineCid},(function(){t.refetchList()}))},onSortChange:function(t){var a=t.detail.value;this.setData({sortType:a}),this.refetchList()},getTagInfo:function(){var t=this;a.Kp.Req({url:"/mx/tag/info",data:{tag_id:this.data.tagId,sid:this.data.aliasName||""},callback:function(e){var i=e.detail||{};i.style||(i.style="default");var s=i.sort_list||[],n=t.data.sortType,o=s.map((function(t){return{text:t.label,value:t.sort}}));s.length&&(n=s[0].sort);var d=t.data.tagName||"";d&&i.name==d||a.setPageTitle(i.name),t.data.loaded?t.setData({detail:i,shareUrl:e.share_link_url||"",emptyTip:e.empty_tip||"跨校小组不存在或已关闭"}):(t.setData({isShow:e.is_show||!1,myCid:e.my_cid||"",detail:i,shareUrl:e.share_link_url||"",emptyTip:e.empty_tip||"跨校小组不存在或已关闭",sortType:n,sortList:o,loaded:!0,threadList:t.getSkeletonList(7),scqrAlias:e.scqr_alias||"",schoolName:e.school_name||""}),wx.nextTick((function(){t.getThreadList()})))}})},refetchList:function(){var t=this;this.setData({finished:!1,isFetching:!1,isFirst:!0,threadList:this.getSkeletonList(7),maxThreadId:"0",minThreadId:"0",minTime:"0",maxTime:"0",hotMinId:"0"},(function(){t.getThreadList()}))},refreshTagIndex:function(){this.getTagInfo(),this.refetchList()},getSkeletonList:function(t){return Array.from({length:t},(function(t,a){return{thread_id:1e3+a,loading:!0}}))},getThreadList:function(){var t=this;if(!this.data.finished&&!this.data.isFetching){this.setData({isFetching:!0});var e=this.data.sortType||"",i=this.data.tagId||"",s=this.data.minThreadId||"",n=(new Date).getTime();this.setData({newReqTime:n});var o={tag_id:i,sort:e,from_id:s};"hot"!=e&&"like"!=e&&"comment"!=e||(o.from_id=this.data.hotMinId),o.sid=this.data.aliasName||"",a.Kp.Req({url:"/mx/tag/threadlist",data:o,complete:function(){t.data.newReqTime==n&&t.setData({isFetching:!1,listLoaded:!0})},fail:function(){t.data.newReqTime==n&&(t.data.isFirst&&t.setData({threadList:[]}),console.log(123),t.setData({showError:!0}))},errorcallback:function(){t.data.newReqTime==n&&(t.data.isFirst&&t.setData({threadList:[]}),t.setData({showError:!0}))},callback:function(a){if(t.data.newReqTime==n){var i=a.list||[];if(i.length){var s=t.data.isFirst?i:t.data.threadList.concat(i);t.updateThreadList(s),"hot"!=e&&"like"!=e&&"comment"!=e||t.updateHotMinId(i)}else t.data.isFirst&&t.setData({threadList:[]}),t.setData({finished:!0});t.setData({isFirst:!1,showError:!1})}}})}},updateThreadList:function(t){var a="0",e="0",i="0",s="0",n={};t.forEach((function(o,d){0===d&&(s=o.thread_id,a=o.thread_id),o.thread_id>a&&(a=o.thread_id),o.thread_id<s&&(s=o.thread_id),!o.is_special&&(0==e||e>o.p_time)&&(e=o.p_time),!o.is_special&&(0==i||i<o.p_time)&&(i=o.p_time),n[o.thread_id]=o,t[d]=o})),this.setData({threadList:t,maxThreadId:a,minThreadId:s,minTime:e,maxTime:i})},updateHotMinId:function(t){t.length&&this.setData({hotMinId:t[t.length-1].thread_id})},gotoPost:function(){var t=this.data.tagId||"",a=this.data.detail.style||"default",e=this.data.aliasName||"";wx.navigateTo({url:"/pages/mx/post/post?tag_id=".concat(t,"&from=tag_school&style=").concat(a,"&cid=").concat(e)})},onPullDownRefresh:function(){wx.stopPullDownRefresh(),this.refreshTagIndex()},onReachBottom:function(){this.getThreadList()},onGotoScqr:function(){wx.navigateTo({url:"/pages/open/scqr/scqr?alias="+this.data.scqrAlias})},onShareAppMessage:function(){var t="/pages/mx/tag/school/school?id=".concat(this.data.tagId),e=(this.data.detail||{}).name;return a.getShareOption(t,e,!0)}}); 
 			}); 	require("pages/mx/tag/school/school.js");
 		__wxRoute = 'pages/mx/search/search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/search/search.js';	define("pages/mx/search/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=(0,require("../../../@babel/runtime/helpers/interopRequireDefault").default)(require("@vant/weapp/dialog/dialog")),a=getApp();Page({data:{tagId:"",wd:"",isAnonTag:!1,tmpWd:"",isSearch:!1,threadList:[],isFirst:!0,maxThreadId:0,minThreadId:0,minTime:0,maxTime:0,finished:!1,selfLoading:!1,loading:!1,showError:!1,searchFocus:!1,viewLimitPopupShown:!1},onLoad:function(t){var i=t.id||"",e=t.wd||"",s=t.is_anon_tag||!1,d=t.tag_name||"";d&&(d=decodeURIComponent(d),a.setPageTitle(d)),""!=i?(this.setData({tagId:i,tagName:d,isAnonTag:s}),e&&(this.setData({tmpWd:e}),this.onSearch())):wx.showToast({title:"跨校小组已删除或不存在",icon:"none"})},onShow:function(){a.GData.mxSearchNeedNew&&(a.setGData("mxSearchNeedNew",!1),this.resetList(),this.getList(),this.setTopMargin())},onInput:function(t){var a=(t.detail||"").trim();if(this.setData({tmpWd:a}),""==this.data.tmpWd)return this.resetSearch(),this.resetList(),void this.setData({isSearch:!1,wd:""});this.data.tmpWd===this.data.wd?this.setData({isSearch:!0}):this.setData({isSearch:!1})},resetSearch:function(){this.setData({isSearch:!1,tmpWd:"",wd:""})},onSearch:function(){var t=this;if(this.data.tmpWd&&""!=this.data.tmpWd.trim())return this.data.isSearch?(this.resetSearch(),this.resetList(),void this.setData({searchFocus:!0})):void this.setData({wd:this.data.tmpWd.trim(),isSearch:!0},(function(){t.getList(),t.setTopMargin()}))},resetList:function(){this.setData({threadList:[],maxThreadId:0,minThreadId:0,minTime:0,maxTime:0,isFirst:!0,showError:!1,finished:!1,selfLoading:!1,loading:!1})},getList:function(){var t=this;if(this.data.wd&&""!==this.data.wd.trim()&&!this.data.finished&&!this.data.selfLoading){this.setData({selfLoading:!0,loading:!0});var i={tag_id:this.data.tagId,from_id:this.data.minThreadId,wd:this.data.wd};a.Kp.Req({url:"/mx/tag/threadlist",data:i,callback:function(a){if(a.view_limit)t.handleViewLimit(a);else{var i=a.list||[];if(i.length){var e=t.data.isFirst?i:t.data.threadList.concat(i);t.updateThreadList(e)}else t.setData({finished:!0});t.setData({showError:!1})}},complete:function(){t.setData({isFirst:!1,loading:!1,selfLoading:!1})},fail:function(){t.setData({showError:!0})}})}},handleViewLimit:function(){var a=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.data.viewLimitPopupShown){var e=i.view_limit_conf||{};this.setData({viewLimitPopupShown:!0,finished:!0}),t.default.alert({context:this,title:"提示",message:e.tip||"当前小组暂无查看权限",showCancelButton:!1,confirmButtonText:"确认",confirmButtonColor:"#1eba9d"}).then((function(){var t=a.data.tagName?encodeURIComponent(a.data.tagName):"";wx.redirectTo({url:"/pages/mx/tag/index/index?id=".concat(a.data.tagId,"&tag_name=").concat(t)})})).catch((function(){}))}},updateThreadList:function(t){var a=0,i=0,e=0,s=0,d={};t.forEach((function(n,h){0===h&&(s=n.thread_id,a=n.thread_id),n.thread_id>a&&(a=n.thread_id),n.thread_id<s&&(s=n.thread_id),!n.is_special&&(0==i||i>n.p_time)&&(i=n.p_time),!n.is_special&&(0==e||e<n.p_time)&&(e=n.p_time),d[n.thread_id]=n,t[h]=n})),this.setData({threadList:t,maxThreadId:a,minThreadId:s,minTime:i,maxTime:e})},setTopMargin:function(){var t=this;wx.createSelectorQuery().select(".search-tabs").boundingClientRect().exec((function(a){var i=a.length&&a[0].height;i&&t.setData({threadStyle:i+"px"})}))},onReachBottom:function(){this.loading||this.data.finished||this.getList()}}); 
 			}); 	require("pages/mx/search/search.js");
 		__wxRoute = 'pages/mx/post/post';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/post/post.js';	define("pages/mx/post/post.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault").default,t=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../@babel/runtime/helpers/defineProperty"),i=e(require("@vant/weapp/dialog/dialog")),o=getApp();Page({data:{pageLoaded:!1,needSelectSchool:!1,schoolSugSelectShow:!1,tagId:0,from:"",queryCid:"",schoolName:"",pageStyle:"default",styleInfo:{style:"default",bg_img_url:"",top_img_url:"",col_conf:{title:{label:"我的昵称",placeholder:"希望别人怎么称呼你"},content:{label:"交友宣言",placeholder:"介绍自己或说明喜欢的朋友类型，200字以内"},img_paths:{label:"上传照片",placeholder:"选择照片，最多9张"}}},pageTip:"",pageTipBgColor:"#748aa0",pageTipFontColor:"#ffffff",formInit:a(a({imgHide:!1,isAnonTag:!1,titleTip:"标题，4~20字，精准描述你的需求",schoolShow:!1,anonTip:"",postTip:"详细描述你的需求，禁止发布重复信息，违法违规，广告营销类，含二维码等内容",tagName:"旅游日记",imgUrls:[]},"tagName",""),"schoolList",[]),formInfo:{title:"",content:"",img_paths:[],select_cid:""},totalPrice:0,postPayInfo:{postPrice:0,rewardPrice:0,reward_ratio_select:0,reward_ratio_like_top:0,reward_ratio_random:0},descName:"",descPopupShow:!1,rewardOpen:!1,rewardDistCustom:!1,rewardCircleShow:!1,rewardHourLike:0,rewardHourSelect:0,rewardRatio:[-1,-1,-1],rewardPriceDefault:0,rewardPriceMin:0,rewardRequired:!1,rewardRequiredTip:"",collapseActives:[],payCollapseActives:["postReward"],lockInput:!1,lockInputTip:"您还可以更改下方的服务",canceled:!1,switchOpen:!1,postUserItem:{},submitting:!1,submitForbid:!1,postBtnText:"发布",threadIsChecked:!1,successPopupShow:!1,thread_id:0,mineInfo:{},agreeNeed:!1,phoneNeed:!1,phoneVerifyVisible:!1,agreementSubmitting:!1},onLoad:function(e){var t=this,a=e.tag_id||"",i=e.from||"",o=e.style||"default",r=e.cid||"";this.setData({queryCid:r}),a&&this.setData({pageStyle:o,tagId:a,from:i},(function(){t.postPrepare()}))},bindFormInfoUpdate:function(e){var t=e.detail||{},a={};for(var i in t)t.hasOwnProperty(i)&&(a["formInfo.".concat(i)]=t[i]);this.setData(a)},onCollapseChange:function(e){this.setData({collapseActives:e.detail})},onPayCollapseChange:function(e){this.setData({payCollapseActives:e.detail})},bindRewardChange:function(e){var a=e.detail||{},i=a.rewardPrice,o=void 0===i?0:i,r=a.reward_ratio_select,n=void 0===r?0:r,s=a.reward_ratio_random,d=void 0===s?0:s,c=a.reward_ratio_like_top,l=void 0===c?0:c,h=this.data.postPayInfo;h=t(t({},h),{},{rewardPrice:o,reward_ratio_select:n,reward_ratio_random:d,reward_ratio_like_top:l}),this.setData({postPayInfo:h}),this.computedPrice({rewardPrice:o})},computedPrice:function(e){var t=this.data.postPayInfo||{},a=t.rewardPrice,i={postPrice:t.postPrice,rewardPrice:a},o=Object.assign(i,e),r=o.postPrice/1+o.rewardPrice/1,n=r?"支付".concat((r/100).toFixed(2),"元发布"):"发布";this.setData({totalPrice:r,postBtnText:n})},bindOpenDescPopup:function(e){var t=this,a=e.currentTarget.dataset.name;this.setData({descName:a},(function(){t.setData({descPopupShow:!0})}))},bindCloseDescPopup:function(){var e=this;this.setData({descPopupShow:!1}),setTimeout((function(){e.setData({descName:""})}),300)},bindDoPost:function(){var e=this;if(!this.data.submitting)if(this.data.thread_id)this.postCallback();else{var a=this.data.formInfo,i=this.data.styleInfo.col_conf||{};if(Object.keys(i).length){for(var r=!0,n=0,s=["img_paths","title","content"];n<s.length;n++){var d=s[n],c=i[d]||{},l=a[d]||"",h=c.col_name||c.label,p="";if(c.required&&!l.length?p=("img_paths"==d?"请上传":"请填写")+h:c.min_length>0&&!l.length?p="请填写"+h:c.min_length>0&&l.length<c.min_length?p=h+"至少"+c.min_length+"个字":c.max_length>0&&l.length>c.max_length&&(p=h+"最多"+c.max_length+"个字"),p){r=!1,wx.showToast({title:p,icon:"none"});break}}if(!r)return}else{if(!a.title)return(i.title||{}).required,void wx.showToast({title:"请填写标题",icon:"none"})}var u=this.data.postPayInfo||{},f=u.rewardPrice,g=void 0===f?0:f,_=u.reward_ratio_select,w=void 0===_?0:_,m=u.reward_ratio_like_top,P=void 0===m?0:m,v=u.reward_ratio_random,I=void 0===v?0:v;this.data.rewardRequired&&this.data.rewardPriceMin>0&&g<100*this.data.rewardPriceMin?wx.showToast({title:this.data.rewardRequiredTip||"请先设置悬赏红包金额",icon:"none"}):g>0&&this.data.rewardDistCustom&&0==P&&0==w&&0==I?wx.showToast({title:"请选择红包获得者",icon:"none"}):(this.setData({submitting:!0}),o.Kp.Req({url:"/mx/thread/post",data:t(t({},a),{},{tag_id:this.data.tagId,style:this.data.pageStyle||"default",use_anon:this.data.mineInfo.use_anon>0?1:0,reward_price:g}),callback:function(t){e.setData({thread_id:t.thread_id||0}),e.postCallback(),o.setGData({mxHomeNeedNew:!0,mxTagSchoolNeedNew:!0})},complete:function(){e.setData({submitting:!1})}}))}},onChangeSelectCid:function(e){var t=e.detail.cid||"";this.setData(a({},"formInfo.select_cid",t))},postCallback:function(){if(this.data.totalPrice>0){var e=this.data.lockInputTip;this.data.lockInput,this.doPay(),this.setData({lockInput:!0,lockInputTip:e})}else this.data.lockInput?this.gotoPageAfterSuccess():this.setData({successPopupShow:!0})},doPay:function(){var e=this,t={thread_id:this.data.thread_id,pay_price:this.data.totalPrice,post_price:this.data.postPayInfo.postPrice,reward_price:this.data.postPayInfo.rewardPrice,reward_ratio_like_top:this.data.postPayInfo.reward_ratio_like_top,reward_ratio_random:this.data.postPayInfo.reward_ratio_random,reward_ratio_select:this.data.postPayInfo.reward_ratio_select};this.selectComponent("#pay-select").pay({scene:"thread",aliasName:this.data.toCid||"",createUrl:"/mx/thread/ordercreate",checkUrl:"/mx/thread/ordercheck",payPrice:this.data.totalPrice,data:t,created:function(t){t&&t.checked&&e.setData({threadIsChecked:!0})},success:function(){e.data.threadIsChecked?e.setData({successPopupShow:!0}):i.default.alert({context:e,title:"提示",message:"帖子提交成功，正在进行算法检测。检测不通过，将原路退款。",confirmButtonColor:"#1eba9d"}).then((function(){e.gotoPageAfterSuccess()}))},cancel:function(){e.setData({canceled:!0})},fail:function(e){}})},gotoPageAfterSuccess:function(){var e=getCurrentPages();o.setGData({mxNeedCheckOpenWxMsgAfterPost:!0}),("tag_school"==this.data.from||"tag_index"==this.data.from)&&e.length>1?wx.navigateBack():"tag_school"==this.data.from?wx.redirectTo({url:"/pages/mx/tag/school/school?id=".concat(this.data.tagId,"&tag_name=").concat(this.data.formInit.tagName)}):wx.redirectTo({url:"/pages/mx/tag/index/index?id=".concat(this.data.tagId,"&tag_name=").concat(this.data.formInit.tagName)})},postPrepare:function(){var e=this,a={tag_id:this.data.tagId,style:this.data.pageStyle||""};this.data.queryCid&&(a.select_cid=this.data.queryCid),o.Kp.Req({url:"/mx/thread/postprepare",loadingText:"加载中...",method:"post",data:a,errorToastAuto:!1,errorCallback:function(t){wx.showModal({title:"",content:t.errmsg,showCancel:!1,success:function(t){e.pageBack()}})},callback:function(a){var o=a.agree_need||!1,r=a.phone_need||!1,n=a.tag_info||{},s=a.u_switch_open||!1,d=a.school_list||[],c=t(t({},e.data.formInit),{},{imgHide:a.img_hide||!1,isAnonTag:a.is_anon_tag||!1,schoolShow:a.school_show||!1,anonTip:a.anon_tip||"",postTip:a.post_tip||"",tagName:n.name||"",schoolList:a.school_list||[]});a.title_tip&&(c.titleTip=a.title_tip);var l=e.data.formInfo||{},h="";if(d.length>0){var p=d[0];l.select_cid=p.cid||"",h=p.school_name||""}if(e.setData({agreeNeed:o,phoneNeed:r,phoneVerifyVisible:r}),a.reward_open){var u=a.reward_dist_ratio||{},f=u.select,g=void 0===f?-1:f,_=u.like_top,w=void 0===_?-1:_,m=u.random,P=void 0===m?-1:m,v={rewardOpen:!0,rewardDistCustom:a.reward_dist_custom||!1,rewardRatio:[g,w,P],rewardCircleShow:a.reward_circle_show||!1,rewardHourSelect:a.reward_hour_select||0,rewardHourLike:a.reward_hour_like||0,rewardRequired:!!a.reward_required,rewardRequiredTip:a.reward_required_tip||""};a.reward_price_default>0&&(v.rewardPriceDefault=a.reward_price_default),a.reward_price_min>0&&(v.rewardPriceMin=a.reward_price_min),e.setData(v)}d.length?0!=(a.cert_valid||!1)?e.setData({formInit:c,formInfo:l,schoolName:h,switchOpen:s,pageLoaded:!0,styleInfo:a.style_info||{},mineInfo:a.mine_info||{},pageTip:a.page_tip||"",pageTipBgColor:a.page_tip_bgcolor||"#748aa0",pageTipFontColor:a.page_tip_fontcolor||"#ffffff"},(function(){if(o&&!r){var t=e.selectComponent("#com-agree-dialog");t&&t.openDialog()}})):i.default.alert({title:"提示",message:"为保障信息的真实与安全，您需要先完成身份认证后，才可以发帖",closeOnPopstate:!0,showCancelButton:!0,cancelButtonText:"返回",confirmButtonText:"查看认证"}).then((function(){wx.navigateTo({url:"/pkgs/mine/usercert/usercert"})})).catch((function(){wx.goToPageIndex()})):e.setData({needSelectSchool:!0,schoolSugSelectShow:!0})}})},pageBack:function(){var e=getCurrentPages();console.log(e),e&&1==e.length?wx.switchTab({url:"/pages/index/index"}):wx.navigateBack()},handlePhoneVerifySuccess:function(){var e=this;this.setData({phoneVerifyVisible:!1,agreementSubmitting:!1},(function(){var t=e.selectComponent("#com-agree-dialog");t&&t.closeDialog(!0),wx.nextTick((function(){wx.showToast({title:"验证成功",icon:"success"}),e.postPrepare()}))}))},handlePhoneVerifyCancel:function(){this.setData({phoneVerifyVisible:!1}),this.pageBack()},handleAgreementSuccess:function(){wx.showToast({title:"验证成功",icon:"success"}),this.postPrepare()},handleAgreementCancel:function(){this.data.phoneNeed||this.pageBack()},onChangeUseAnon:function(){this.setData({mineInfo:t(t({},this.data.mineInfo),{},{use_anon:!this.data.mineInfo.use_anon})})},bindCatchMove:function(){},onSchoolSelectChoose:function(){var e=o.Kp.Utils.getCurPageUrl();wx.redirectTo({url:e})}}); 
 			}); 	require("pages/mx/post/post.js");
 		__wxRoute = 'pages/mx/info/info';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/mx/info/info.js';	define("pages/mx/info/info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../@babel/runtime/helpers/interopRequireDefault").default,t=require("../../../@babel/runtime/helpers/objectSpread2"),i=(e(require("@vant/weapp/dialog/dialog")),e(require("../../../2B183D93C5DCED5F4D7E559467B135D0.js"))),a=getApp(),n=require("../../../600A5D42C5DCED5F066C35456D5135D0.js");Page({options:{styleIsolation:"apply-shared"},data:{navLeftIconName:"",pageTitle:"",isIos:!1,threadId:0,threadItem:{},isRefreshing:!1,loaded:!1,isShow:!1,threadSign:"",infoNeedNew:!1,userNotify:"",adminNotify:"",emptyLoaded:!1,emptyTip:"帖子不存在或已删除",emptySubTips:[],emptyAppDownShow:!1,emptyAppDownloadInfo:{img_url:"",sub_titles:[],title:""},from:"",topConf:[],isSub:!1,commentMineInfo:{},needCommentShowCert:!1,commentForbid:!1,commentForbidTip:"",commentCertValid:!0,commentDislikeShow:!0,queryCommentId:"",threadDislikeShow:!0,blackOpen:!1,isBlack:!1,ignoreCover:!1,rewardInfo:{},rewardShow:!1,isAdmin:!1,actionList:[],actionKeyList:[],riskLevelList:[],forbidReasonList:[],commentConfList:[],likeStatusConfList:[],viewLimit:!1,viewLimitConf:{}},onLoad:function(e){var t=this;this.initNav(e),this.setData({communityName:a.GData.communityName,threadId:e.id||0,isIos:a.Kp.Utils.isIos(),from:e.from,queryCommentId:e.comment_id||0,ignoreCover:e.ignore_cover>0},(function(){t.getThreadInfo()})),e.msg_id&&e.msg_id>0&&this.msgReadOne(e.msg_id),e.push_id&&e.push_id>0&&a.pushLogClick({push_id:e.push_id}),n.on("comment-identity-change",this.data.threadId+"",this.commentIdentityChange,this)},onUnload:function(){n.off("comment-identity-change",this.data.threadId+"",this.commentIdentityChange,this)},initNav:function(e){var t=e.tag_name||"",i="nav_back";t&&(t=decodeURIComponent(t));var n=getCurrentPages();n&&1==n.length&&(i="nav_mx_home"),this.setData({navLeftIconName:i,pageTitle:t}),"group"==e.from&&a.newMsgCheck()},onReady:function(){},onShow:function(){a.GData.ignoreOnShow&&a.setGData({ignoreOnShow:!1})},onNavClick:function(){var e=getCurrentPages(),t=this.data.threadItem;if(e&&1==e.length){var i="/pages/mx/tag/index/index";if(t.is_tag_school||!1||"tag_school"==this.data.from){var n=t.cid||"";i="/pages/mx/tag/school/school",n&&(i+="?cid=".concat(n))}i=a.Kp.Utils.urlAppendParams(i,{id:t.tag_id,tag_name:t.tag_name}),wx.redirectTo({url:i})}else wx.navigateBack()},subTapCb:function(){this.data.subUrl?wx.navigateTo({url:"/pages/webview/common/common?url="+encodeURIComponent(this.data.subUrl)}):this.openServiceDialog()},onReply:function(){var e=this.selectComponent("#commentComRef");e&&e.onReply&&e.onReply()},infoReload:function(){((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail||{}).ignore_cover&&this.setData({ignoreCover:!0}),this.getThreadInfo()},msgReadOne:function(e){a.Kp.Req({url:"/msg/oneread",data:{msg_id:e},callback:function(e){a.setGData({msgNeedNew:!0}),a.subNewMsgCount(1)}})},getThreadInfo:function(){var e=this,t={id:this.data.threadId};(this.data.ignoreCover||this.data.isBlack)&&(t.ignore_cover=1),a.Kp.Req({url:"/mx/thread/info",method:"post",data:t,loadingText:this.data.isRefreshing?"":"加载中...",callback:function(t){var a=t.is_sub||!1,n=t.is_show||!1,o=t.detail||{};e.setData({isShow:n,isSub:a,threadItem:o}),0!=n?(e.setData({emptyLoaded:!1,viewLimit:t.view_limit||!1,viewLimitConf:t.view_limit_conf||{}}),t.mine_info&&t.mine_info.user_info&&t.mine_info.user_info.headimgurl?e.setData({commentMineInfo:t.mine_info||{}}):i.default.getCommentMineInfo({thread_id:e.data.threadId,isMx:!0,from:"detail"}).then((function(t){e.setData({commentMineInfo:t||{}})})).catch((function(){})),e.setData({threadSign:t.t_sign||"",commentForbid:t.comment_forbid||!1,commentForbidTip:t.comment_forbid_tip||"",commentCertValid:t.comment_cert_valid||!1,needCommentShowCert:t.need_comment_show_cert||!1,commentDislikeShow:t.comment_dislike_open||!1,uSwitchOpen:t.u_switch_open||!1,threadDislikeShow:t.thread_dislike_open||!1,userNotify:t.user_notify||"",adminNotify:t.admin_notify||"",emptyTip:t.empty_tip||"",emptySubTips:t.empty_sub_tips||[],rewardInfo:t.reward_hongbao_info||{},rewardShow:t.reward_hongbao_show||!1,blackOpen:t.black_open||!1,isBlack:t.is_black||!1,pageTitle:o.tag_name||""}),t.is_admin&&e.setData({isAdmin:t.is_admin||!1,actionList:t.action_list||[],actionKeyList:t.action_key_list||[],riskLevelList:t.risk_level_list||[],forbidReasonList:t.forbid_reason_list||[],commentConfList:t.comment_conf_list||[],likeStatusConfList:t.like_conf_status_list||[],payConfList:t.pay_conf_list||[]}),e.data.loaded&&n&&e.refreshCommentList(),e.setData({loaded:!0})):t.view_limit?e.setData({loaded:!0,viewLimit:t.view_limit||!1,viewLimitConf:t.view_limit_conf||{}}):e.setData({emptyAppDownloadInfo:t.empty_app_download_info||{},emptyAppDownShow:t.empty_app_download_show||!1,emptyLoaded:!0,loaded:!0})},complete:function(){wx.hideLoading(),e.setData({isRefreshing:!1})}})},bindThreadActionCb:function(){"tag_school"==this.from?a.setGData("mxTagSchoolNeedNew",!0):a.setGData("mxHomeNeedNew",!0),this.getThreadInfo()},commentIdentityChange:function(e,i){var a=this.data.commentMineInfo.user_info||{};this.setData({commentMineInfo:t(t({},this.data.commentMineInfo),{},{user_info:t(t({},a),{},{use_anon:i.use_anon||!1})})})},onPhoneVerified:function(){this.setData({commentMineInfo:t(t({},this.data.commentMineInfo||{}),{},{phone_need:!1})})},refreshCommentList:function(){var e=this.selectComponent("#commentComRef");e&&e.updateList&&e.updateList()},onShareAppMessage:function(e){if(this.data.emptyLoaded)return a.getShareOption();var t="/pages/mx/info/info?id="+this.data.threadItem.thread_id+"&tag_name=".concat(this.data.threadItem.tag_name),i=this.data.threadItem.title;return a.getShareOption(t,i,!0)},pageBack:function(){var e=getCurrentPages();e&&1==e.length?wx.switchTab({url:"/pages/index/index"}):wx.navigateBack()},updateMarkData:function(e){var t=e.detail||{};this.setData({"threadItem.mark_has":t.isMark,"threadItem.mark_num":t.markNum})},updateLikeData:function(e){var t=e.detail||{},i={"threadItem.like_has":!1,"threadItem.dislike_has":!1};t.curLiked?i["threadItem.like_has"]=!0:t.curDisliked&&(i["threadItem.dislike_has"]=!0),i["threadItem.like_num"]=t.curLikeNum,i["threadItem.dislike_num"]=t.curDislikeNum,this.setData(i)},onReachBottom:function(){var e=this.selectComponent("#commentComRef");e&&e.onReachBottom&&e.onReachBottom()},onPullDownRefresh:function(){var e=this;wx.stopPullDownRefresh(),this.setData({isRefreshing:!0}),setTimeout((function(){e.getThreadInfo()}),400)}}); 
 			}); 	require("pages/mx/info/info.js");
 