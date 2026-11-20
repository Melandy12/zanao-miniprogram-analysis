}/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx4=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx4:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx4 || [];
function gz$gwx4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_1)return __WXML_GLOBAL__.ops_cached.$gwx4_1
__WXML_GLOBAL__.ops_cached.$gwx4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'colorValueListShow']])
Z([3,'value'])
Z([3,'handleSelectColor'])
Z([a,[3,'color-item '],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'value']],[[7],[3,'colorValue']]],[1,'color-item-active'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'value']])
Z([a,[3,'background-color:'],[[2,'||'],[[6],[[7],[3,'item']],[3,'color_easy']],[[6],[[7],[3,'item']],[3,'color']]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'value']],[[7],[3,'colorValue']]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'value']],[[7],[3,'colorValue']]],[[2,'!='],[[7],[3,'colorValue']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx4_1);return __WXML_GLOBAL__.ops_cached.$gwx4_1
}
function gz$gwx4_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_2)return __WXML_GLOBAL__.ops_cached.$gwx4_2
__WXML_GLOBAL__.ops_cached.$gwx4_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'post-reward-component'])
Z([3,'onPriceChange'])
Z([[7],[3,'rewardCircleShow']])
Z([3,'onRuleChange'])
Z([[7],[3,'rewardRatio']])
Z([[7],[3,'ruleCustom']])
Z([[2,'?:'],[[7],[3,'rewardCircleShow']],[1,true],[1,false]])
})(__WXML_GLOBAL__.ops_cached.$gwx4_2);return __WXML_GLOBAL__.ops_cached.$gwx4_2
}
function gz$gwx4_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_3)return __WXML_GLOBAL__.ops_cached.$gwx4_3
__WXML_GLOBAL__.ops_cached.$gwx4_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'topList']],[3,'length']])
Z([[7],[3,'topList']])
Z([3,'index'])
Z([3,'handleSelect'])
Z([3,'search-item-box'])
Z([[6],[[7],[3,'item']],[3,'price']])
Z([[6],[[7],[3,'item']],[3,'type']])
Z([a,[3,'search-item '],[[2,'?:'],[[2,'=='],[[7],[3,'topType']],[[6],[[7],[3,'item']],[3,'type']]],[1,'search-active'],[1,'']]])
Z([[2,'=='],[[7],[3,'topType']],[[6],[[7],[3,'item']],[3,'type']]])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx4_3);return __WXML_GLOBAL__.ops_cached.$gwx4_3
}
function gz$gwx4_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_4)return __WXML_GLOBAL__.ops_cached.$gwx4_4
__WXML_GLOBAL__.ops_cached.$gwx4_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx4_4);return __WXML_GLOBAL__.ops_cached.$gwx4_4
}
function gz$gwx4_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_5)return __WXML_GLOBAL__.ops_cached.$gwx4_5
__WXML_GLOBAL__.ops_cached.$gwx4_5=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx4_5);return __WXML_GLOBAL__.ops_cached.$gwx4_5
}
function gz$gwx4_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_6)return __WXML_GLOBAL__.ops_cached.$gwx4_6
__WXML_GLOBAL__.ops_cached.$gwx4_6=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx4_6);return __WXML_GLOBAL__.ops_cached.$gwx4_6
}
function gz$gwx4_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_7)return __WXML_GLOBAL__.ops_cached.$gwx4_7
__WXML_GLOBAL__.ops_cached.$gwx4_7=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx4_7);return __WXML_GLOBAL__.ops_cached.$gwx4_7
}
function gz$gwx4_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_8)return __WXML_GLOBAL__.ops_cached.$gwx4_8
__WXML_GLOBAL__.ops_cached.$gwx4_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-hongbao-post'])
Z([[7],[3,'pageLoaded']])
Z([3,'page-show-content'])
Z([3,'form-wrapper'])
Z([3,'bindHongbaoInput'])
Z([1,false])
Z([3,'form-item'])
Z([3,'hongbaoCount'])
Z([3,'right'])
Z([3,'红包个数'])
Z([3,'form-item-label--custom'])
Z([3,'填写红包个数'])
Z([3,'number'])
Z([[7],[3,'hongbaoCountBind']])
Z(z[4])
Z(z[5])
Z([3,'form-item mt-23'])
Z([3,'hongbaoPrice'])
Z(z[8])
Z([3,'总金额'])
Z(z[10])
Z([3,'￥0.00'])
Z([3,'digit'])
Z([[7],[3,'hongbaoPriceBind']])
Z([[2,'&&'],[[6],[[7],[3,'mineInfo']],[3,'anon_info']],[[6],[[6],[[7],[3,'mineInfo']],[3,'anon_info']],[3,'headimgurl']]])
Z([3,'form-item mt-23 mine-info-select'])
Z([3,'mine-avatar-widget'])
Z([1,true])
Z([3,'jixiang'])
Z([[7],[3,'mineInfo']])
Z([[6],[[6],[[7],[3,'mineInfo']],[3,'anon_info']],[3,'headimgurl']])
Z([3,'onChangeUseAnon'])
Z([3,'mine-switch-btn'])
Z([3,'#ffffff'])
Z([3,'comment_user_switch'])
Z([3,'10'])
Z([3,'bindFormInput'])
Z(z[5])
Z(z[16])
Z([3,'title'])
Z([3,'20'])
Z([3,'请输入标题'])
Z([3,'1'])
Z([[6],[[7],[3,'formData']],[3,'title']])
Z([3,'mt-23 form-item form-item--content'])
Z(z[36])
Z(z[5])
Z([3,'content-input'])
Z([3,'content'])
Z([3,'content_field'])
Z([1,800])
Z([3,'请输入正文'])
Z(z[42])
Z([3,'textarea'])
Z([[6],[[7],[3,'formData']],[3,'content']])
Z([3,'img-box'])
Z([[6],[[7],[3,'formData']],[3,'imgList']])
Z([3,'*this'])
Z([3,'onImgDelete'])
Z([3,'img-del'])
Z([3,'#868686'])
Z([[7],[3,'index']])
Z([3,'cross'])
Z([[2,'<'],[[6],[[6],[[7],[3,'formData']],[3,'imgList']],[3,'length']],[[7],[3,'fileCount']]])
Z([3,'onUploadSuccess'])
Z([[2,'-'],[[7],[3,'fileCount']],[[6],[[6],[[7],[3,'formData']],[3,'imgList']],[3,'length']]])
Z([3,'display:block;width:100%;height:100%;'])
Z([3,'thread'])
Z([3,'#C1C1C1'])
Z([3,'plus'])
Z([3,'18'])
Z([3,'bottom-wrapper'])
Z([[2,'>'],[[6],[[7],[3,'postPayInfo']],[3,'postPrice']],[1,0]])
Z([3,'formSubmit'])
Z([3,'post-btn'])
Z([[2,'||'],[[7],[3,'submitting']],[[7],[3,'submitForbid']]])
Z([[7],[3,'submitting']])
Z([3,'提交中'])
Z(z[27])
Z([3,'onCateSelectCancel'])
Z([3,'onCateSelect'])
Z([3,'post-cate-dialog'])
Z([3,'bindCloseDescPopup'])
Z(z[27])
Z([3,'center'])
Z([[7],[3,'descPopupShow']])
Z([[2,'=='],[[7],[3,'descName']],[1,'colorShow']])
Z([[2,'=='],[[7],[3,'descName']],[1,'postTop']])
Z([[2,'=='],[[7],[3,'descName']],[1,'postReward']])
Z([[7],[3,'rewardRatio']])
Z(z[5])
Z(z[84])
Z([[7],[3,'successPopupShow']])
Z([3,'successCb'])
Z([3,'btn-reject'])
Z(z[27])
Z([3,'default'])
Z([3,'noCertPayPost'])
Z([3,'noCertConfirm'])
Z([3,'#1eba9d'])
Z([3,'付费发帖'])
Z(z[5])
Z(z[27])
Z([3,'#ff976a'])
Z([3,'去认证'])
Z([[7],[3,'noCertPostDialogShow']])
Z([[2,'!'],[[7],[3,'isCross']]])
Z(z[99])
Z([3,'van-dialog'])
Z([3,'10010'])
Z([3,'打开客服机器人'])
Z(z[5])
Z([3,'ios-service-dialog'])
Z([[7],[3,'sendMessagePathOfIOSPay']])
Z([[7],[3,'serviceTipOfNeedIOSPay']])
Z([3,'pay-select'])
Z([3,'bind'])
Z([[7],[3,'agreeNeed']])
Z([3,'handlePhoneVerifyCancel'])
Z([3,'handlePhoneVerifySuccess'])
Z([3,'一键登录'])
Z(z[5])
Z([3,'根据国家法律规定，必须登录后才能继续'])
Z([3,'phone-verify-popup'])
Z([[7],[3,'phoneVerifyVisible']])
Z([[7],[3,'phoneNeed']])
Z(z[67])
Z([3,'请先登录'])
Z([[2,'&&'],[[7],[3,'agreeNeed']],[[2,'!'],[[7],[3,'phoneNeed']]]])
Z([3,'handleAgreementCancel'])
Z([3,'handleAgreementSuccess'])
Z([3,'com-agree-dialog'])
Z([[7],[3,'agreementSubmitting']])
Z([3,'同意'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_8);return __WXML_GLOBAL__.ops_cached.$gwx4_8
}
function gz$gwx4_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_9)return __WXML_GLOBAL__.ops_cached.$gwx4_9
__WXML_GLOBAL__.ops_cached.$gwx4_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'pageLoaded']])
Z([3,'thread-post-box'])
Z([3,'post-form'])
Z([[2,'&&'],[[6],[[7],[3,'mineInfo']],[3,'anon_info']],[[6],[[6],[[7],[3,'mineInfo']],[3,'anon_info']],[3,'headimgurl']]])
Z([3,'onChangeUseAnon'])
Z([[7],[3,'mineInfo']])
Z([3,'formSubmit'])
Z([[2,'?:'],[[7],[3,'lockInput']],[1,'hide'],[1,'']])
Z([[2,'<'],[[6],[[6],[[7],[3,'formData']],[3,'imgList']],[3,'length']],[[7],[3,'fileCount']]])
Z([3,'onUploadSuccess'])
Z([[2,'-'],[[7],[3,'fileCount']],[[6],[[6],[[7],[3,'formData']],[3,'imgList']],[3,'length']]])
Z([3,'display:block;width:100%;height:100%'])
Z([3,'thread'])
Z([3,'certShowOpen'])
Z([3,'certShowClick'])
Z([3,'com-post-action-section van-hairline--bottom border-transparent'])
Z([[7],[3,'baseColor']])
Z([3,'onChangeCert'])
Z([[7],[3,'certShow']])
Z([3,'flex_center'])
Z([[2,'!'],[[7],[3,'certValid']]])
Z([[7],[3,'inActiveColor']])
Z([3,'18px'])
Z([[7],[3,'comment_forbid_open']])
Z(z[17])
Z([3,'onChangeComment'])
Z([[7],[3,'is_comment_close']])
Z(z[20])
Z(z[22])
Z(z[23])
Z([3,'onCollapseChange'])
Z([1,false])
Z([3,'tell-collapse'])
Z([[7],[3,'collapseActives']])
Z([3,'van-hairline--top'])
Z([[2,'!'],[[7],[3,'showFillContact']]])
Z([3,'contact'])
Z([[7],[3,'showFillContact']])
Z([3,'right-icon'])
Z([3,'fill-show-area text-sub'])
Z(z[17])
Z([3,'onChangeTel'])
Z([[7],[3,'fillShow']])
Z(z[20])
Z(z[22])
Z(z[23])
Z([3,'title'])
Z(z[36])
Z(z[32])
Z([3,'contact-info-wrapper van-filed-border'])
Z([3,'bindFormInput'])
Z([3,'contact_person'])
Z([3,'联系人'])
Z(z[52])
Z([3,'您的姓名'])
Z([[6],[[7],[3,'formData']],[3,'contact_person']])
Z(z[51])
Z([3,'contact_phone'])
Z([3,'手机'])
Z(z[58])
Z([3,'手机号'])
Z([[6],[[7],[3,'formData']],[3,'contact_phone']])
Z(z[51])
Z([3,'contact_qq'])
Z([3,'QQ'])
Z(z[64])
Z([3,'6~15位QQ号码'])
Z([[6],[[7],[3,'formData']],[3,'contact_qq']])
Z(z[51])
Z([3,'van-none-border'])
Z([3,'contact_wx'])
Z([3,'微信'])
Z(z[71])
Z([3,'4~20位微信号'])
Z([[6],[[7],[3,'formData']],[3,'contact_wx']])
Z([[7],[3,'submiTing']])
Z([3,'35'])
Z([3,'spinner'])
Z([[7],[3,'lockInput']])
Z([[2,'!'],[[7],[3,'isMix']]])
Z([3,'onPayCollapseChange'])
Z(z[32])
Z(z[33])
Z([[7],[3,'payCollapseActives']])
Z([[7],[3,'rewardOpen']])
Z(z[35])
Z([3,'postReward'])
Z(z[47])
Z([3,'closeDescPopup'])
Z([3,'title-content-box'])
Z([3,'bindOpenDescPopup'])
Z(z[87])
Z([3,'question-o'])
Z([3,'20'])
Z([3,'bindRewardChange'])
Z([[7],[3,'rewardCircleShow']])
Z([[7],[3,'rewardRatio']])
Z([[7],[3,'rewardDistCustom']])
Z([[6],[[7],[3,'colorValueList']],[3,'length']])
Z([3,'colorShow'])
Z(z[47])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[100])
Z(z[93])
Z(z[94])
Z([3,'bindColorShowSelected'])
Z([[7],[3,'colorValueList']])
Z([[6],[[7],[3,'topConf']],[3,'length']])
Z([3,'postTop'])
Z(z[47])
Z(z[89])
Z(z[90])
Z(z[91])
Z(z[111])
Z(z[93])
Z(z[94])
Z([[7],[3,'to_cid']])
Z([3,'bindPostTopSelected'])
Z([[6],[[7],[3,'postPayInfo']],[3,'topPrice']])
Z([[6],[[7],[3,'postPayInfo']],[3,'topType']])
Z([[7],[3,'thread_id']])
Z([[7],[3,'topConf']])
Z([3,'copyright-margin'])
Z([3,'onCateSelectCancel'])
Z([3,'onCateSelect'])
Z([3,'bindUserProfileCancel'])
Z([3,'post-cate-dialog'])
Z([3,'bindCloseDescPopup'])
Z([1,true])
Z([3,'center'])
Z([[7],[3,'descPopupShow']])
Z([[2,'=='],[[7],[3,'descName']],[1,'colorShow']])
Z([[2,'=='],[[7],[3,'descName']],[1,'postTop']])
Z([[2,'=='],[[7],[3,'descName']],[1,'postReward']])
Z(z[97])
Z([[7],[3,'rewardHourLike']])
Z([[7],[3,'rewardHourSelect']])
Z(z[32])
Z(z[132])
Z([[7],[3,'successPopupShow']])
Z([3,'gotoPage'])
Z([3,'btn-reject'])
Z(z[131])
Z([3,'default'])
Z([3,'noCertPayPost'])
Z([3,'noCertConfirm'])
Z([3,'#1eba9d'])
Z([3,'付费发帖'])
Z(z[32])
Z(z[131])
Z([3,'#ff976a'])
Z([3,'去认证'])
Z([[7],[3,'noCertPostDialogShow']])
Z([[2,'!'],[[7],[3,'isCross']]])
Z(z[149])
Z([3,'van-dialog'])
Z([3,'10010'])
Z([3,'打开客服机器人'])
Z(z[32])
Z([3,'ios-service-dialog'])
Z([[7],[3,'sendMessagePathOfIOSPay']])
Z([[7],[3,'serviceTipOfNeedIOSPay']])
Z([3,'pay-select'])
Z([3,'bind'])
Z([[7],[3,'agreeNeed']])
Z([3,'handlePhoneVerifyCancel'])
Z([3,'handlePhoneVerifySuccess'])
Z([3,'一键登录'])
Z(z[32])
Z([3,'根据国家法律规定，必须登录后才能继续'])
Z([3,'phone-verify-popup'])
Z([[7],[3,'phoneVerifyVisible']])
Z([[7],[3,'phoneNeed']])
Z(z[13])
Z([3,'请先登录'])
Z([[2,'&&'],[[7],[3,'agreeNeed']],[[2,'!'],[[7],[3,'phoneNeed']]]])
Z([3,'handleAgreementCancel'])
Z([3,'handleAgreementSuccess'])
Z([3,'com-agree-dialog'])
Z([[7],[3,'agreementSubmitting']])
Z([3,'同意'])
})(__WXML_GLOBAL__.ops_cached.$gwx4_9);return __WXML_GLOBAL__.ops_cached.$gwx4_9
}
__WXML_GLOBAL__.ops_set.$gwx4=z;
__WXML_GLOBAL__.ops_init.$gwx4=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pkgs/post/components/colorShow/index.wxml','./pkgs/post/components/postReward/index.wxml','./pkgs/post/components/postTop/index.wxml','./pkgs/post/components/reward/circleChart/index.wxml','./pkgs/post/components/reward/pricePicker/index.wxml','./pkgs/post/components/reward/rewardDesc/index.wxml','./pkgs/post/components/reward/rulePicker/index.wxml','./pkgs/post/jixiang/jixiang.wxml','./pkgs/post/local/local.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_1()
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_mz(z,'view',['bind:tap',2,'class',1,'data-value',2,'style',3],[],fE,oD,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,6,fE,oD,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,7,fE,oD,gg)){oJ.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,0,xC,e,s,gg,oB,'item','index','value')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx4_2()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var eN=_n('price-picker')
_rz(z,eN,'bind:change',1,e,s,gg)
_(aL,eN)
var tM=_v()
_(aL,tM)
if(_oz(z,2,e,s,gg)){tM.wxVkey=1
var bO=_mz(z,'rule-picker',['bind:change',3,'rewardRatio',1,'ruleCustom',2,'show',3],[],e,s,gg)
_(tM,bO)
}
tM.wxXCkey=1
tM.wxXCkey=3
_(r,aL)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx4_3()
var xQ=_v()
_(r,xQ)
if(_oz(z,0,e,s,gg)){xQ.wxVkey=1
var oR=_v()
_(xQ,oR)
var fS=function(hU,cT,oV,gg){
var oX=_mz(z,'view',['bind:tap',3,'class',1,'data-price',2,'data-type',3],[],hU,cT,gg)
var lY=_n('view')
_rz(z,lY,'class',7,hU,cT,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,8,hU,cT,gg)){aZ.wxVkey=1
var t1=_v()
_(aZ,t1)
if(_oz(z,9,hU,cT,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
}
else{aZ.wxVkey=2
}
aZ.wxXCkey=1
_(oX,lY)
_(oV,oX)
return oV
}
oR.wxXCkey=2
_2z(z,1,fS,e,s,gg,oR,'item','index','index')
}
xQ.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx4_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx4_5()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var o6=_mz(z,'van-slider',['useButtonSlot',-1,'activeColor',1,'bind:change',1,'bind:drag',2,'customClass',3,'inactiveColor',4,'max',5,'min',6,'step',7,'style',8,'value',9],[],e,s,gg)
var f7=_mz(z,'view',['class',11,'slot',1,'style',2],[],e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,14,e,s,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(o6,f7)
_(o4,o6)
var x5=_v()
_(o4,x5)
if(_oz(z,15,e,s,gg)){x5.wxVkey=1
}
x5.wxXCkey=1
_(r,o4)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx4_6()
var o0=_n('view')
_rz(z,o0,'class',0,e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,1,e,s,gg)){cAB.wxVkey=1
var lCB=_v()
_(cAB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_v()
_(bGB,xIB)
if(_oz(z,4,eFB,tEB,gg)){xIB.wxVkey=1
var oJB=_v()
_(xIB,oJB)
if(_oz(z,5,eFB,tEB,gg)){oJB.wxVkey=1
var fKB=_mz(z,'icon',['class',6,'type',1],[],eFB,tEB,gg)
_(oJB,fKB)
}
oJB.wxXCkey=1
oJB.wxXCkey=3
}
xIB.wxXCkey=1
xIB.wxXCkey=3
return bGB
}
lCB.wxXCkey=4
_2z(z,2,aDB,e,s,gg,lCB,'item','index','index')
}
else{cAB.wxVkey=2
var cLB=_v()
_(cAB,cLB)
var hMB=function(cOB,oNB,oPB,gg){
var aRB=_v()
_(oPB,aRB)
if(_oz(z,10,cOB,oNB,gg)){aRB.wxVkey=1
}
aRB.wxXCkey=1
return oPB
}
cLB.wxXCkey=2
_2z(z,8,hMB,e,s,gg,cLB,'item','index','index')
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,11,e,s,gg)){oBB.wxVkey=1
var tSB=_n('view')
_rz(z,tSB,'class',12,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,13,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
if(_oz(z,16,oXB,xWB,gg)){h1B.wxVkey=1
}
h1B.wxXCkey=1
return fYB
}
bUB.wxXCkey=2
_2z(z,14,oVB,e,s,gg,bUB,'item','index','index')
eTB.wxXCkey=1
_(oBB,tSB)
}
var o2B=_n('view')
_rz(z,o2B,'class',17,e,s,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,18,e,s,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(o2B,o4B)
if(_oz(z,19,e,s,gg)){o4B.wxVkey=1
}
var l5B=_v()
_(o2B,l5B)
if(_oz(z,20,e,s,gg)){l5B.wxVkey=1
}
c3B.wxXCkey=1
o4B.wxXCkey=1
l5B.wxXCkey=1
_(o0,o2B)
cAB.wxXCkey=1
cAB.wxXCkey=3
oBB.wxXCkey=1
_(r,o0)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx4_7()
var t7B=_v()
_(r,t7B)
if(_oz(z,0,e,s,gg)){t7B.wxVkey=1
var e8B=_n('view')
_rz(z,e8B,'class',1,e,s,gg)
var b9B=_mz(z,'circle-chart',['data',2,'size',1],[],e,s,gg)
_(e8B,b9B)
var o0B=_mz(z,'van-checkbox-group',['bind:change',4,'disabled',1,'value',2],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_mz(z,'view',['bind:tap',9,'class',1,'data-id',2],[],cDC,fCC,gg)
var oHC=_mz(z,'van-checkbox',['checkedColor',12,'color',1,'customClass',2,'iconClass',3,'iconSize',4,'id',5,'labelClass',6,'name',7,'useIconSlot',8],[],cDC,fCC,gg)
_(cGC,oHC)
_(hEC,cGC)
return hEC
}
xAC.wxXCkey=4
_2z(z,7,oBC,e,s,gg,xAC,'item','index','id')
_(e8B,o0B)
_(t7B,e8B)
}
t7B.wxXCkey=1
t7B.wxXCkey=3
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx4_8()
var tKC=_n('view')
_rz(z,tKC,'class',0,e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,1,e,s,gg)){eLC.wxVkey=1
var bMC=_n('view')
_rz(z,bMC,'class',2,e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',3,e,s,gg)
var oPC=_mz(z,'van-field',['center',-1,'bind:input',4,'border',1,'customClass',2,'data-name',3,'inputAlign',4,'label',5,'labelClass',6,'placeholder',7,'type',8,'value',9],[],e,s,gg)
_(oNC,oPC)
var fQC=_mz(z,'van-field',['center',-1,'bind:input',14,'border',1,'customClass',2,'data-name',3,'inputAlign',4,'label',5,'labelClass',6,'placeholder',7,'type',8,'value',9],[],e,s,gg)
_(oNC,fQC)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,24,e,s,gg)){xOC.wxVkey=1
var cRC=_n('view')
_rz(z,cRC,'class',25,e,s,gg)
var oTC=_mz(z,'user-avatar',['onlyAvatar',-1,'class',26,'disabled',1,'from',2,'mineInfo',3],[],e,s,gg)
_(cRC,oTC)
var hSC=_v()
_(cRC,hSC)
if(_oz(z,30,e,s,gg)){hSC.wxVkey=1
var cUC=_mz(z,'view',['bindtap',31,'class',1],[],e,s,gg)
var oVC=_mz(z,'icon',['svg',-1,'color',33,'name',1,'size',2],[],e,s,gg)
_(cUC,oVC)
_(hSC,cUC)
}
hSC.wxXCkey=1
hSC.wxXCkey=3
_(xOC,cRC)
}
var lWC=_mz(z,'van-field',['autosize',-1,'center',-1,'bind:input',36,'border',1,'customClass',2,'data-name',3,'maxlength',4,'placeholder',5,'rows',6,'value',7],[],e,s,gg)
_(oNC,lWC)
var aXC=_n('view')
_rz(z,aXC,'class',44,e,s,gg)
var tYC=_mz(z,'van-field',['autosize',-1,'center',-1,'bind:input',45,'border',1,'customClass',2,'data-name',3,'id',4,'maxlength',5,'placeholder',6,'rows',7,'type',8,'value',9],[],e,s,gg)
_(aXC,tYC)
var eZC=_n('view')
_rz(z,eZC,'class',55,e,s,gg)
var o2C=_v()
_(eZC,o2C)
var x3C=function(f5C,o4C,c6C,gg){
var o8C=_mz(z,'van-icon',['bindtap',58,'class',1,'color',2,'data-key',3,'name',4],[],f5C,o4C,gg)
_(c6C,o8C)
return c6C
}
o2C.wxXCkey=4
_2z(z,56,x3C,e,s,gg,o2C,'item','index','*this')
var b1C=_v()
_(eZC,b1C)
if(_oz(z,63,e,s,gg)){b1C.wxVkey=1
var c9C=_mz(z,'uploader',['bind:uploadSuccess',64,'count',1,'customStyle',2,'uploadFrom',3],[],e,s,gg)
var o0C=_mz(z,'van-icon',['color',68,'name',1,'size',2],[],e,s,gg)
_(c9C,o0C)
_(b1C,c9C)
}
b1C.wxXCkey=1
b1C.wxXCkey=3
_(aXC,eZC)
_(oNC,aXC)
xOC.wxXCkey=1
xOC.wxXCkey=3
_(bMC,oNC)
var lAD=_n('view')
_rz(z,lAD,'class',71,e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,72,e,s,gg)){aBD.wxVkey=1
}
var tCD=_mz(z,'van-button',['block',-1,'bind:tap',73,'customClass',1,'disabled',2,'loading',3,'loadingText',4,'round',5],[],e,s,gg)
_(lAD,tCD)
aBD.wxXCkey=1
_(bMC,lAD)
_(eLC,bMC)
}
var eDD=_mz(z,'post-dialog',['bind:cancel',79,'bind:eventCateSelect',1,'id',2],[],e,s,gg)
_(tKC,eDD)
eLC.wxXCkey=1
eLC.wxXCkey=3
_(r,tKC)
var bED=_mz(z,'van-popup',['round',-1,'bind:tap',82,'closeOnClickOverlay',1,'position',2,'show',3],[],e,s,gg)
var oFD=_n('view')
var xGD=_v()
_(oFD,xGD)
if(_oz(z,86,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(oFD,oHD)
if(_oz(z,87,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(oFD,fID)
if(_oz(z,88,e,s,gg)){fID.wxVkey=1
var cJD=_mz(z,'reward-desc',['post',-1,'ratio',89],[],e,s,gg)
_(fID,cJD)
}
xGD.wxXCkey=1
oHD.wxXCkey=1
fID.wxXCkey=1
fID.wxXCkey=3
_(bED,oFD)
_(r,bED)
var hKD=_mz(z,'van-popup',['round',-1,'closeOnClickOverlay',90,'position',1,'show',2],[],e,s,gg)
var oLD=_mz(z,'van-button',['bind:tap',93,'customClass',1,'round',2,'type',3],[],e,s,gg)
_(hKD,oLD)
_(r,hKD)
var cMD=_mz(z,'van-dialog',['showCancelButton',-1,'useSlot',-1,'bind:close',97,'bind:confirm',1,'cancelButtonColor',2,'cancelButtonText',3,'closeOnClickOverlay',4,'closeOnPopstate',5,'confirmButtonColor',6,'confirmButtonText',7,'show',8,'showConfirmButton',9],[],e,s,gg)
_(r,cMD)
var oND=_mz(z,'van-dialog',['confirmButtonColor',107,'id',1,'zIndex',2],[],e,s,gg)
_(r,oND)
var lOD=_mz(z,'service-dialog',['btnText',110,'closeOverlay',1,'id',2,'sendMessagePath',3,'serviceTip',4],[],e,s,gg)
_(r,lOD)
var aPD=_n('pay-select')
_rz(z,aPD,'id',115,e,s,gg)
_(r,aPD)
var tQD=_mz(z,'phone-verify-popup',['action',116,'agreeNeed',1,'bind:cancel',2,'bind:success',3,'bindText',4,'closeOnClickOverlay',5,'desc',6,'id',7,'show',8,'phoneNeed',9,'scene',10,'title',11],[],e,s,gg)
tQD.rawAttr={"model:show":"{{phoneVerifyVisible}}",};_(r,tQD)
var aJC=_v()
_(r,aJC)
if(_oz(z,128,e,s,gg)){aJC.wxVkey=1
var eRD=_mz(z,'agreedialog',['bind:no-cb',129,'bind:yes-cb',1,'id',2,'submitting',3,'yesText',4],[],e,s,gg)
_(aJC,eRD)
}
aJC.wxXCkey=1
aJC.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx4_9()
var xUD=_n('view')
_rz(z,xUD,'class',0,e,s,gg)
var oVD=_v()
_(xUD,oVD)
if(_oz(z,1,e,s,gg)){oVD.wxVkey=1
var fWD=_n('view')
_rz(z,fWD,'class',2,e,s,gg)
var cXD=_n('view')
_rz(z,cXD,'class',3,e,s,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,4,e,s,gg)){hYD.wxVkey=1
var oZD=_mz(z,'user-avatar',['bind:change',5,'mineInfo',1],[],e,s,gg)
_(hYD,oZD)
}
var c1D=_n('form')
_rz(z,c1D,'bindsubmit',7,e,s,gg)
var l3D=_n('view')
_rz(z,l3D,'class',8,e,s,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,9,e,s,gg)){a4D.wxVkey=1
var b7D=_mz(z,'uploader',['bind:uploadSuccess',10,'count',1,'customStyle',2,'uploadFrom',3],[],e,s,gg)
_(a4D,b7D)
}
var t5D=_v()
_(l3D,t5D)
if(_oz(z,14,e,s,gg)){t5D.wxVkey=1
var o8D=_mz(z,'view',['bindtap',15,'class',1],[],e,s,gg)
var x9D=_mz(z,'van-switch',['activeColor',17,'bind:change',1,'checked',2,'class',3,'disabled',4,'inactiveColor',5,'size',6],[],e,s,gg)
_(o8D,x9D)
_(t5D,o8D)
}
var e6D=_v()
_(l3D,e6D)
if(_oz(z,24,e,s,gg)){e6D.wxVkey=1
var o0D=_mz(z,'van-switch',['activeColor',25,'bind:change',1,'checked',2,'class',3,'inactiveColor',4,'size',5],[],e,s,gg)
_(e6D,o0D)
}
var fAE=_mz(z,'van-collapse',['bind:change',31,'border',1,'class',2,'value',3],[],e,s,gg)
var cBE=_mz(z,'van-collapse-item',['customClass',35,'isLink',1,'name',2],[],e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,38,e,s,gg)){hCE.wxVkey=1
var oDE=_n('view')
_rz(z,oDE,'slot',39,e,s,gg)
var cEE=_mz(z,'view',['catchtap',-1,'class',40],[],e,s,gg)
var oFE=_mz(z,'van-switch',['activeColor',41,'bind:change',1,'checked',2,'class',3,'inactiveColor',4,'size',5],[],e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
_(hCE,oDE)
}
var lGE=_n('view')
_rz(z,lGE,'slot',47,e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,48,e,s,gg)){aHE.wxVkey=1
}
aHE.wxXCkey=1
_(cBE,lGE)
var tIE=_mz(z,'van-cell-group',['border',49,'customClass',1],[],e,s,gg)
var eJE=_mz(z,'van-field',['clearable',-1,'bind:input',51,'data-name',1,'label',2,'name',3,'placeholder',4,'value',5],[],e,s,gg)
_(tIE,eJE)
var bKE=_mz(z,'van-field',['clearable',-1,'bind:input',57,'data-name',1,'label',2,'name',3,'placeholder',4,'value',5],[],e,s,gg)
_(tIE,bKE)
var oLE=_mz(z,'van-field',['clearable',-1,'bind:input',63,'data-name',1,'label',2,'name',3,'placeholder',4,'value',5],[],e,s,gg)
_(tIE,oLE)
var xME=_mz(z,'van-field',['clearable',-1,'bind:input',69,'class',1,'data-name',2,'label',3,'name',4,'placeholder',5,'value',6],[],e,s,gg)
_(tIE,xME)
_(cBE,tIE)
hCE.wxXCkey=1
hCE.wxXCkey=3
_(fAE,cBE)
_(l3D,fAE)
a4D.wxXCkey=1
a4D.wxXCkey=3
t5D.wxXCkey=1
t5D.wxXCkey=3
e6D.wxXCkey=1
e6D.wxXCkey=3
_(c1D,l3D)
var o2D=_v()
_(c1D,o2D)
if(_oz(z,76,e,s,gg)){o2D.wxVkey=1
var oNE=_mz(z,'van-loading',['size',77,'type',1],[],e,s,gg)
_(o2D,oNE)
}
var fOE=_n('view')
var cPE=_v()
_(fOE,cPE)
if(_oz(z,79,e,s,gg)){cPE.wxVkey=1
}
var hQE=_v()
_(fOE,hQE)
if(_oz(z,80,e,s,gg)){hQE.wxVkey=1
var oRE=_mz(z,'van-collapse',['bind:change',81,'border',1,'class',2,'value',3],[],e,s,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,85,e,s,gg)){cSE.wxVkey=1
var aVE=_mz(z,'van-collapse-item',['customClass',86,'name',1],[],e,s,gg)
var tWE=_n('view')
_rz(z,tWE,'slot',88,e,s,gg)
var eXE=_mz(z,'view',['catch:tap',89,'class',1],[],e,s,gg)
var bYE=_mz(z,'van-icon',['catch:tap',91,'data-name',1,'name',2,'size',3],[],e,s,gg)
_(eXE,bYE)
_(tWE,eXE)
_(aVE,tWE)
var oZE=_mz(z,'post-reward',['bind:change',95,'rewardCircleShow',1,'rewardRatio',2,'ruleCustom',3],[],e,s,gg)
_(aVE,oZE)
_(cSE,aVE)
}
var oTE=_v()
_(oRE,oTE)
if(_oz(z,99,e,s,gg)){oTE.wxVkey=1
var x1E=_n('van-collapse-item')
_rz(z,x1E,'name',100,e,s,gg)
var o2E=_n('view')
_rz(z,o2E,'slot',101,e,s,gg)
var f3E=_mz(z,'view',['catch:tap',102,'class',1],[],e,s,gg)
var c4E=_mz(z,'van-icon',['catch:tap',104,'data-name',1,'name',2,'size',3],[],e,s,gg)
_(f3E,c4E)
_(o2E,f3E)
_(x1E,o2E)
var h5E=_mz(z,'color-show',['bind:selected',108,'colorValueList',1],[],e,s,gg)
_(x1E,h5E)
_(oTE,x1E)
}
var lUE=_v()
_(oRE,lUE)
if(_oz(z,110,e,s,gg)){lUE.wxVkey=1
var o6E=_n('van-collapse-item')
_rz(z,o6E,'name',111,e,s,gg)
var c7E=_n('view')
_rz(z,c7E,'slot',112,e,s,gg)
var o8E=_mz(z,'view',['catch:tap',113,'class',1],[],e,s,gg)
var l9E=_mz(z,'van-icon',['catch:tap',115,'data-name',1,'name',2,'size',3],[],e,s,gg)
_(o8E,l9E)
_(c7E,o8E)
_(o6E,c7E)
var a0E=_mz(z,'post-top',['alias_name',119,'bind:selected',1,'topPrice',2,'topType',3,'thread_id',4,'top_price_conf',5],[],e,s,gg)
a0E.rawAttr={"model:topPrice":"{{postPayInfo.topPrice}}","model:topType":"{{postPayInfo.topType}}",};_(o6E,a0E)
_(lUE,o6E)
}
cSE.wxXCkey=1
cSE.wxXCkey=3
oTE.wxXCkey=1
oTE.wxXCkey=3
lUE.wxXCkey=1
lUE.wxXCkey=3
_(hQE,oRE)
}
cPE.wxXCkey=1
hQE.wxXCkey=1
hQE.wxXCkey=3
_(c1D,fOE)
o2D.wxXCkey=1
o2D.wxXCkey=3
_(cXD,c1D)
hYD.wxXCkey=1
hYD.wxXCkey=3
_(fWD,cXD)
var tAF=_n('copyright')
_rz(z,tAF,'customClass',125,e,s,gg)
_(fWD,tAF)
_(oVD,fWD)
}
var eBF=_mz(z,'post-dialog',['bind:cancel',126,'bind:eventCateSelect',1,'bind:userprofle-cancel',2,'id',3],[],e,s,gg)
_(xUD,eBF)
oVD.wxXCkey=1
oVD.wxXCkey=3
_(r,xUD)
var bCF=_mz(z,'van-popup',['round',-1,'bind:tap',130,'closeOnClickOverlay',1,'position',2,'show',3],[],e,s,gg)
var oDF=_n('view')
var xEF=_v()
_(oDF,xEF)
if(_oz(z,134,e,s,gg)){xEF.wxVkey=1
}
var oFF=_v()
_(oDF,oFF)
if(_oz(z,135,e,s,gg)){oFF.wxVkey=1
}
var fGF=_v()
_(oDF,fGF)
if(_oz(z,136,e,s,gg)){fGF.wxVkey=1
var cHF=_mz(z,'reward-desc',['post',-1,'ratio',137,'rewardHourLike',1,'rewardHourSelect',2],[],e,s,gg)
_(fGF,cHF)
}
xEF.wxXCkey=1
oFF.wxXCkey=1
fGF.wxXCkey=1
fGF.wxXCkey=3
_(bCF,oDF)
_(r,bCF)
var hIF=_mz(z,'van-popup',['round',-1,'closeOnClickOverlay',140,'position',1,'show',2],[],e,s,gg)
var oJF=_mz(z,'van-button',['bind:tap',143,'customClass',1,'round',2,'type',3],[],e,s,gg)
_(hIF,oJF)
_(r,hIF)
var cKF=_mz(z,'van-dialog',['showCancelButton',-1,'useSlot',-1,'bind:close',147,'bind:confirm',1,'cancelButtonColor',2,'cancelButtonText',3,'closeOnClickOverlay',4,'closeOnPopstate',5,'confirmButtonColor',6,'confirmButtonText',7,'show',8,'showConfirmButton',9],[],e,s,gg)
_(r,cKF)
var oLF=_mz(z,'van-dialog',['confirmButtonColor',157,'id',1,'zIndex',2],[],e,s,gg)
_(r,oLF)
var lMF=_mz(z,'service-dialog',['btnText',160,'closeOverlay',1,'id',2,'sendMessagePath',3,'serviceTip',4],[],e,s,gg)
_(r,lMF)
var aNF=_n('pay-select')
_rz(z,aNF,'id',165,e,s,gg)
_(r,aNF)
var tOF=_mz(z,'phone-verify-popup',['action',166,'agreeNeed',1,'bind:cancel',2,'bind:success',3,'bindText',4,'closeOnClickOverlay',5,'desc',6,'id',7,'show',8,'phoneNeed',9,'scene',10,'title',11],[],e,s,gg)
tOF.rawAttr={"model:show":"{{phoneVerifyVisible}}",};_(r,tOF)
var oTD=_v()
_(r,oTD)
if(_oz(z,178,e,s,gg)){oTD.wxVkey=1
var ePF=_mz(z,'agreedialog',['bind:no-cb',179,'bind:yes-cb',1,'id',2,'submitting',3,'yesText',4],[],e,s,gg)
_(oTD,ePF)
}
oTD.wxXCkey=1
oTD.wxXCkey=3
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['pkgs/post/components/colorShow/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/components/colorShow/index.wxml'] = [$gwx4, './pkgs/post/components/colorShow/index.wxml'];else __wxAppCode__['pkgs/post/components/colorShow/index.wxml'] = $gwx4( './pkgs/post/components/colorShow/index.wxml' );
		__wxAppCode__['pkgs/post/components/postReward/index.json'] = {"component":true,"usingComponents":{"price-picker":"/pkgs/post/components/reward/pricePicker/index","rule-picker":"/pkgs/post/components/reward/rulePicker/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/components/postReward/index.wxml'] = [$gwx4, './pkgs/post/components/postReward/index.wxml'];else __wxAppCode__['pkgs/post/components/postReward/index.wxml'] = $gwx4( './pkgs/post/components/postReward/index.wxml' );
		__wxAppCode__['pkgs/post/components/postTop/index.json'] = {"component":true,"usingComponents":{"van-icon":"../../../../miniprogram_npm/@vant/weapp/icon/index","van-popup":"../../../../miniprogram_npm/@vant/weapp/popup/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/components/postTop/index.wxml'] = [$gwx4, './pkgs/post/components/postTop/index.wxml'];else __wxAppCode__['pkgs/post/components/postTop/index.wxml'] = $gwx4( './pkgs/post/components/postTop/index.wxml' );
		__wxAppCode__['pkgs/post/components/reward/circleChart/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/components/reward/circleChart/index.wxml'] = [$gwx4, './pkgs/post/components/reward/circleChart/index.wxml'];else __wxAppCode__['pkgs/post/components/reward/circleChart/index.wxml'] = $gwx4( './pkgs/post/components/reward/circleChart/index.wxml' );
		__wxAppCode__['pkgs/post/components/reward/pricePicker/index.json'] = {"component":true,"usingComponents":{"van-slider":"../../../../../miniprogram_npm/@vant/weapp/slider/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/components/reward/pricePicker/index.wxml'] = [$gwx4, './pkgs/post/components/reward/pricePicker/index.wxml'];else __wxAppCode__['pkgs/post/components/reward/pricePicker/index.wxml'] = $gwx4( './pkgs/post/components/reward/pricePicker/index.wxml' );
		__wxAppCode__['pkgs/post/components/reward/rewardDesc/index.json'] = {"component":true,"usingComponents":{"icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/components/reward/rewardDesc/index.wxml'] = [$gwx4, './pkgs/post/components/reward/rewardDesc/index.wxml'];else __wxAppCode__['pkgs/post/components/reward/rewardDesc/index.wxml'] = $gwx4( './pkgs/post/components/reward/rewardDesc/index.wxml' );
		__wxAppCode__['pkgs/post/components/reward/rulePicker/index.json'] = {"component":true,"usingComponents":{"van-checkbox":"../../../../../miniprogram_npm/@vant/weapp/checkbox/index","van-checkbox-group":"../../../../../miniprogram_npm/@vant/weapp/checkbox-group/index","circle-chart":"/pkgs/post/components/reward/circleChart/index","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/components/reward/rulePicker/index.wxml'] = [$gwx4, './pkgs/post/components/reward/rulePicker/index.wxml'];else __wxAppCode__['pkgs/post/components/reward/rulePicker/index.wxml'] = $gwx4( './pkgs/post/components/reward/rulePicker/index.wxml' );
		__wxAppCode__['pkgs/post/jixiang/jixiang.json'] = {"navigationBarTitleText":"发帖","usingComponents":{"post-dialog":"/components/common/postdialog/post-dialog","service-dialog":"/components/common/servicedialog/service-dialog","uploader":"/components/common/uploader/index","copyright":"/components/common/copyright/copyright","pay-select":"/components/common/paySelect/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-switch":"../../../miniprogram_npm/@vant/weapp/switch/index","van-collapse":"../../../miniprogram_npm/@vant/weapp/collapse/index","van-collapse-item":"../../../miniprogram_npm/@vant/weapp/collapse-item/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-loading":"../../../miniprogram_npm/@vant/weapp/loading/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","color-show":"/pkgs/post/components/colorShow/index","post-top":"/pkgs/post/components/postTop/index","post-reward":"/pkgs/post/components/postReward/index","reward-desc":"/pkgs/post/components/reward/rewardDesc/index","user-avatar":"/components/common/userAvatar/index","phone-verify-popup":"/components/common/phoneVerifyPopup/index","agreedialog":"/components/common/agreedialog/agreedialog","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/jixiang/jixiang.wxml'] = [$gwx4, './pkgs/post/jixiang/jixiang.wxml'];else __wxAppCode__['pkgs/post/jixiang/jixiang.wxml'] = $gwx4( './pkgs/post/jixiang/jixiang.wxml' );
		__wxAppCode__['pkgs/post/local/local.json'] = {"navigationBarTitleText":"","usingComponents":{"post-dialog":"/components/common/postdialog/post-dialog","service-dialog":"/components/common/servicedialog/service-dialog","uploader":"/components/common/uploader/index","copyright":"/components/common/copyright/copyright","pay-select":"/components/common/paySelect/index","van-cell-group":"../../../miniprogram_npm/@vant/weapp/cell-group/index","van-cell":"../../../miniprogram_npm/@vant/weapp/cell/index","van-field":"../../../miniprogram_npm/@vant/weapp/field/index","van-switch":"../../../miniprogram_npm/@vant/weapp/switch/index","van-collapse":"../../../miniprogram_npm/@vant/weapp/collapse/index","van-collapse-item":"../../../miniprogram_npm/@vant/weapp/collapse-item/index","van-popup":"../../../miniprogram_npm/@vant/weapp/popup/index","van-icon":"../../../miniprogram_npm/@vant/weapp/icon/index","van-button":"../../../miniprogram_npm/@vant/weapp/button/index","van-loading":"../../../miniprogram_npm/@vant/weapp/loading/index","van-dialog":"../../../miniprogram_npm/@vant/weapp/dialog/index","color-show":"/pkgs/post/components/colorShow/index","post-top":"/pkgs/post/components/postTop/index","post-reward":"/pkgs/post/components/postReward/index","reward-desc":"/pkgs/post/components/reward/rewardDesc/index","user-avatar":"/components/common/userAvatar/index","phone-verify-popup":"/components/common/phoneVerifyPopup/index","agreedialog":"/components/common/agreedialog/agreedialog","icon":"/components/ui/icon/index"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pkgs/post/local/local.wxml'] = [$gwx4, './pkgs/post/local/local.wxml'];else __wxAppCode__['pkgs/post/local/local.wxml'] = $gwx4( './pkgs/post/local/local.wxml' );
	
	__wxRoute = 'pkgs/post/components/colorShow/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/components/colorShow/index.js';	define("pkgs/post/components/colorShow/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{colorValueList:{type:Array,value:[]},colorPrice:{type:Number,value:188}},observers:{colorValueList:function(e){var t=this;if(e&&e.length){var o=e.some((function(e){return e.value===t.data.colorValue}));this.setData({colorValueListShow:e}),o||0===this.data.colorValue||this.setData({colorValue:0})}else this.setData({colorValueListShow:[],colorValue:0})}},data:{colorValue:0,colorValueListShow:[]},methods:{handleSelectColor:function(e){var t=e.currentTarget.dataset.value,o=this.data.colorValue;o=o==t?0:t,this.setData({colorValue:o});var a=0===o?0:this.data.colorPrice;this.triggerEvent("selected",{colorValue:o,colorPrice:a})}}}); 
 			}); 	require("pkgs/post/components/colorShow/index.js");
 		__wxRoute = 'pkgs/post/components/postReward/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/components/postReward/index.js';	define("pkgs/post/components/postReward/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../@babel/runtime/helpers/objectSpread2");Component({properties:{ruleCustom:{type:Boolean,value:!1},rewardRatio:{type:Array,value:[-1,-1,-1]},rewardCircleShow:{type:Boolean,value:!1}},observers:{"curPrice, reward_ratio_select, reward_ratio_random,reward_ratio_like_top":function(e,r,a,t){this.triggerEvent("change",{rewardPrice:e,reward_ratio_select:r,reward_ratio_random:a,reward_ratio_like_top:t})}},data:{curPrice:0,reward_ratio_select:0,reward_ratio_random:0,reward_ratio_like_top:0},methods:{onPriceChange:function(e){var r=e.detail.price||0;this.setData({curPrice:r})},onRuleChange:function(r){var a=r.detail.list||{},t={};a.forEach((function(e){t[e.e_name]=e.value||0})),this.setData(e({},t))}}}); 
 			}); 	require("pkgs/post/components/postReward/index.js");
 		__wxRoute = 'pkgs/post/components/postTop/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/components/postTop/index.js';	define("pkgs/post/components/postTop/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{topPrice:{type:String,optionalTypes:[Number,String],value:0},topType:{type:String,optionalTypes:[Number,String],value:0},top_price_conf:{type:Array,value:[]}},data:{descPopupShow:!1,topList:[],searchActiveValue:0},observers:{top_price_conf:function(t){t.length&&this.setData({topList:t.filter((function(t){return 0!=t.type}))})}},methods:{handleSelect:function(t){var e=t.currentTarget.dataset||{},p=e.type,r=e.price;this.data.topType==p&&(p=0,r=0),this.triggerEvent("selected",{topType:p,topPrice:r}),this.setData({topType:p,topPrice:r})}}}); 
 			}); 	require("pkgs/post/components/postTop/index.js");
 		__wxRoute = 'pkgs/post/components/reward/circleChart/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/components/reward/circleChart/index.js';	define("pkgs/post/components/reward/circleChart/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{data:{type:Array,value:[],observer:function(t){this.drawChart(t)}},size:{type:Number,value:200}},data:{radius:60,circumference:2*Math.PI*60,chartImg:""},lifetimes:{attached:function(){this.drawChart(this.data.data)}},methods:{drawChart:function(t){var e=this;this.createSelectorQuery().select("#donutCanvas").fields({node:!0,size:!0}).exec((function(a){var r=a[0].node,i=r.getContext("2d"),n=wx.getSystemInfoSync().pixelRatio,s=e.data.size/2;if(r.width=a[0].width*n,r.height=a[0].height*n,i.scale(n,n),i.clearRect(0,0,a[0].width,a[0].height),i.beginPath(),i.arc(s,s,e.data.radius,0,2*Math.PI),i.strokeStyle="#d2d3d4",i.lineWidth=16,i.stroke(),0!==t.length){var o=t.reduce((function(t,e){return t+e.value}),0),h=4.72;t.forEach((function(t){var a=t.value/o*2*Math.PI;i.beginPath(),i.arc(s,s,e.data.radius,h,h+a),i.strokeStyle=t.color,i.lineWidth=16,i.stroke();for(var r=h+a/2,n=t.value+"%",l=e.data.radius-1.5,c=20/n.length/l,d=0;d<n.length;d++){var u=n[d],v=r-(n.length/2-d)*c;n.length-1==d&&(v+=.03);var f=s+l*Math.cos(v),g=s+l*Math.sin(v);i.save(),i.translate(f,g),i.rotate(v+Math.PI/2),i.textAlign="center",i.textBaseline="middle",i.fillStyle="#000",i.font="12px Arial",n.length-1==d&&(i.font="bold 9px Arial"),i.fillText(u,0,0),i.restore()}h+=a})),e.drawImageFromCanvas(r)}else e.drawImageFromCanvas(r)}))},drawImageFromCanvas:function(t){var e=this;wx.canvasToTempFilePath({canvas:t,success:function(t){var a=t.tempFilePath;e.setData({chartImg:a||""})},fail:function(t){console.error("Failed to convert canvas to image:",t)}},this)}}}); 
 			}); 	require("pkgs/post/components/reward/circleChart/index.js");
 		__wxRoute = 'pkgs/post/components/reward/pricePicker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/components/reward/pricePicker/index.js';	define("pkgs/post/components/reward/pricePicker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({options:{styleIsolation:"shared"},properties:{},observers:{rewardPriceYuan:function(e){var a=this.data.labelList.some((function(a){return a.value===e}));this.setData({sliderValueShow:!a})}},ready:function(){},data:{leftBtn:"0%",descPopupShow:!1,sliderValue:0,labelList:[{value:0,left:"0%"},{value:2,left:"10%"},{value:6,left:"30%"},{value:10,left:"50%"},{value:200,left:"100%"}],sliderValueShow:!1,rewardPriceYuan:0},curValue:0,lastValue:0,methods:{onLabelClick:function(e){var a=this,t=e.currentTarget.dataset.item,n=this.data.sliderValue;t.value<=10&&(n=19*t.value),200==t.value&&(n=380),this.setData({sliderValue:n}),this.handleChange(n),wx.nextTick((function(){a.emitChange()}))},onChange:function(e){var a=this,t=e.detail;this.handleChange(t),wx.nextTick((function(){a.emitChange()}))},onInput:function(e){var a=e.detail.value;this.handleChange(a)},handleChange:function(e){var a=this.data.rewardPriceYuan,t=a;a=e>=191?(e-190)/1+10:e/19,t=Math.floor(a),a>9.3&&a<10&&(t=10),this.setData({rewardPriceYuan:t});var n=t/20*100+"%";t<=10&&this.setData({leftBtn:n})},emitChange:function(){var e=this;wx.nextTick((function(){e.triggerEvent("change",{price:100*e.data.rewardPriceYuan})}))},onSliderTapDisable:function(){}}}); 
 			}); 	require("pkgs/post/components/reward/pricePicker/index.js");
 		__wxRoute = 'pkgs/post/components/reward/rewardDesc/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/components/reward/rewardDesc/index.js';	define("pkgs/post/components/reward/rewardDesc/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../../../@babel/runtime/helpers/objectSpread2"),t=getApp();Component({properties:{value:{type:Boolean,value:!1},ratio:{type:Array,value:[-1,-1,-1]},post:{type:Boolean,value:!1},rewardHourLike:{type:Number,value:0},rewardHourSelect:{type:Number,value:0}},data:{isDark:!1,ruleList:[{name:"作者精选",rule:"作者可以选择一位评论者",ratio:"",bgc:"#ff5c64",desc:"作者精选一个评论区用户，分配&&%的红包金额。若无满意评论，可不分配。",iconShow:!0,descShow:"",type:"select"},{name:"最高赞",rule:"获赞最多的一位评论者",ratio:"",bgc:"#ffc2c5",desc:"获赞最高者且赞数>2将自动获得&&%的红包金额。同赞数按先后顺序。发帖24小时后自动分配。",iconShow:!0,descShow:"",type:"like_top"},{name:"幸运星",rule:"系统随机选择一位评论者",ratio:"",bgc:"#ffe7e8",desc:"随机挑选一位评论区用户，分配&&%的红包金额。发帖24小时后自动分配。",iconShow:!1,descShow:"",type:"random"}],showLastTip:!1,ruleListShow:[],typeCount:0,isIos:!0},observers:{ratio:function(e){this.updateRuleListShow(e),this.setTypeCount(e)}},ready:function(){this.setData({isIos:t.Kp.Utils.isIos()})},methods:{updateRuleListShow:function(t){var o=0!==t[0],r=this.data.ruleList.map((function(o,r){for(var a=t[r],s=-1===a?"":a,i=!1,u=r;u<3&&0!==t[r];u++)if(t[u+1]&&0!==t[u+1]){i=!0;break}var n=o.desc.replace("&&",s);return e(e({},o),{},{ratio:s,iconShow:i,descShow:n})}));this.setData({ruleListShow:r,showLastTip:o})},setTypeCount:function(e){var t=e.filter((function(e){return 0!==e})).length;this.setData({typeCount:t||0})}}}); 
 			}); 	require("pkgs/post/components/reward/rewardDesc/index.js");
 		__wxRoute = 'pkgs/post/components/reward/rulePicker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/components/reward/rulePicker/index.js';	define("pkgs/post/components/reward/rulePicker/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../@babel/runtime/helpers/toConsumableArray");Component({options:{styleIsolation:"shared"},properties:{show:{type:Boolean,value:!1},ruleCustom:{type:Boolean,value:!1},rewardRatio:{type:Array,value:[]}},ready:function(){if(!this.data.ruleCustom){var a=["2","1","3"];this.updateButtonValues(a),this.setData({result:a,chartData:this.data.btnList}),this.triggerEvent("change",{list:t(this.data.btnList)})}},data:{chartData:[],btnList:[{id:"1",value:0,color:"#ff5c64",name:"作者精选",e_name:"reward_ratio_select"},{id:"2",value:0,color:"#ff9fa3",name:"最高赞",e_name:"reward_ratio_like_top"},{id:"3",value:0,color:"#ffd7d9",name:"幸运星",e_name:"reward_ratio_random"}],result:[]},methods:{onBtnChange:function(a){var e=a.detail,i=e.slice();this.setData({result:e}),this.updateButtonValues(e),this.updateChartData(i),this.triggerEvent("change",{list:t(this.data.btnList)})},toggleCheckbox:function(t){var a=t.currentTarget.dataset.id,e=this.selectComponent("#checkbox-".concat(a));e&&e.toggle()},updateChartData:function(t){var a=this.data.chartData;if(a.length>t.length){var e=new Set(t),i=a.filter((function(t){return e.has(t.id)}));this.setData({chartData:i})}else{var r=t[t.length-1],n=this.data.btnList;a.unshift(n.find((function(t){return t.id==r}))),this.setData({chartData:a})}},updateButtonValues:function(t){var a=this.data.btnList;a.forEach((function(t){return t.value=0}));var e=t.slice(),i={single:{1:100,2:100,3:100},double:{"1_3":{1:90,3:10},"2_3":{2:90,3:10},"1_2":{1:50,2:50}},triple:{1:50,2:40,3:10}};if(!this.data.ruleCustom){var r=i.triple;r[1]=this.data.rewardRatio[0],r[2]=this.data.rewardRatio[1],r[3]=this.data.rewardRatio[2]}if(1===e.length){var n=a.find((function(t){return t.id===e[0]}));n.value=i.single[n.id]}else if(2===e.length){e.sort();var s=e.join("_"),o=i.double[s];e.forEach((function(t){a.find((function(a){return a.id===t})).value=o[t]}))}else 3===e.length&&e.forEach((function(t){a.find((function(a){return a.id===t})).value=i.triple[t]}));return this.setData({btnList:a}),e}}}); 
 			}); 	require("pkgs/post/components/reward/rulePicker/index.js");
 		__wxRoute = 'pkgs/post/local/local';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/local/local.js';	define("pkgs/post/local/local.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault").default,e=require("../../../@babel/runtime/helpers/defineProperty"),a=require("../../../@babel/runtime/helpers/objectSpread2");require("../../../@babel/runtime/helpers/Arrayincludes");var o=t(require("@vant/weapp/dialog/dialog")),i=getApp(),r=require("../../../14EA9414C5DCED5F728CFC135C8135D0.js"),s=require("../../../B94652A1C5DCED5FDF203AA6A59135D0.js"),n=i.Const.IMG_STYLE;Page({data:{formData:{title:"",img_paths:[],imgList:[],content:"",contact_person:"",contact_phone:"",contact_qq:"",contact_wx:""},saveContact:!1,baseColor:i.GData.baseColor,inActiveColor:"#dcdee0",pageLoaded:!1,postTip:"",cateName:"",sendMessagePathOfNeedCert:"",sendMessagePathOfIOSPay:"",serviceTipOfNeedCert:"请通过客服机器人获得链接，完成身份认证后即可使用完整功能",serviceTipOfNeedIOSPay:"小程序不支持此功能，请通过客服机器人获得完整功能链接",curSelect:"contact_phone",thread_id:0,fileCount:9,cate_id:0,temp_contact_person:"",temp_contact_phone:"",temp_contact_qq:"",temp_contact_wx:"",certShow:!1,submiTing:!1,comment_forbid_open:!1,is_comment_close:!1,collapseActives:[],payCollapseActives:["colorShow","postTop","postReward"],showFillContact:!1,fillShow:!1,descName:"",descPopupShow:!1,colorValueList:[],topConf:[],top_forbid:!1,successPopupShow:!1,postPayInfo:{postPrice:0,colorValue:0,colorPrice:0,topPrice:0,topType:0,rewardPrice:0,reward_ratio_select:0,reward_ratio_like_top:0,reward_ratio_random:0},totalPrice:0,rewardOpen:!1,rewardDistCustom:!1,rewardCircleShow:!1,rewardHourLike:0,rewardHourSelect:0,rewardRatio:[-1,-1,-1],isMix:!1,threadIsChecked:!1,postBtnText:"发布信息",lockInput:!1,lockInputTip:"您还可以更改下方的服务",canceled:!1,toCid:0,isCross:!1,noCertPostDialogShow:!1,noCertPostOpen:!1,mineInfo:{},agreeNeed:!1,phoneNeed:!1,phoneVerifyVisible:!1,agreementSubmitting:!1},onLoad:function(t){var e=t.id||0,a=t.to_cid||0,o="发帖";this.setData({isMix:t.is_mix>0}),e?(this.setData({cate_id:e,toCid:a}),this.postPrepare()):(o="发布",this.openPostCateDialog()),wx.setNavigationBarTitle({title:o}),this.initCacheData()},previewImage:function(t){var e=(this.data.formData.img_paths||[]).map((function(t){return i.Const.IMG_HOST+t+n.common})),a=e.length&&e[t.currentTarget.dataset.index||0];i.previewImage({current:a,urls:e})},openPostCateDialog:function(){this.selectComponent("#post-cate-dialog").openDialog()},onCateSelect:function(t){var e=t.detail.id||0;this.setData({cate_id:e}),this.postPrepare()},onCateSelectCancel:function(){wx.switchTab({url:"/pages/index/index"})},bindUserProfileCancel:function(){wx.switchTab({url:"/pages/index/index"})},onCollapseChange:function(t){var e=!1;t.detail.includes("contact")&&(e=!0),this.setData({showFillContact:e,collapseActives:t.detail})},onPayCollapseChange:function(t){this.setData({payCollapseActives:t.detail})},bindOpenDescPopup:function(t){var e=this,a=t.currentTarget.dataset.name;this.setData({descName:a},(function(){e.setData({descPopupShow:!0})}))},bindCloseDescPopup:function(){var t=this;this.setData({descPopupShow:!1}),setTimeout((function(){t.setData({descName:""})}),300)},bindColorShowSelected:function(t){var e=t.detail||{},o=e.colorValue,i=void 0===o?0:o,r=e.colorPrice,s=void 0===r?0:r,n=this.data.postPayInfo;n=a(a({},n),{},{colorValue:i,colorPrice:s}),this.setData({postPayInfo:n}),this.computedPrice({colorPrice:s})},bindPostTopSelected:function(t){var e=t.detail||{},o=e.topType,i=void 0===o?0:o,r=e.topPrice,s=void 0===r?0:r,n=this.data.postPayInfo;n=a(a({},n),{},{topType:i,topPrice:s}),this.setData({postPayInfo:n}),this.computedPrice({topPrice:s})},bindRewardChange:function(t){var e=t.detail||{},o=e.rewardPrice,i=void 0===o?0:o,r=e.reward_ratio_select,s=void 0===r?0:r,n=e.reward_ratio_random,c=void 0===n?0:n,d=e.reward_ratio_like_top,p=void 0===d?0:d,h=this.data.postPayInfo;h=a(a({},h),{},{rewardPrice:i,reward_ratio_select:s,reward_ratio_random:c,reward_ratio_like_top:p}),this.setData({postPayInfo:h}),this.computedPrice({rewardPrice:i})},computedPrice:function(t){var e=this.data.postPayInfo||{},a={colorPrice:e.colorPrice,postPrice:e.postPrice,rewardPrice:e.rewardPrice,topPrice:e.topPrice},o=Object.assign(a,t),i=o.colorPrice/1+o.postPrice/1+o.topPrice/1+o.rewardPrice/1,r=i?"支付".concat((i/100).toFixed(2),"元发布"):"发布信息";this.setData({totalPrice:i,postBtnText:r})},onChangeCert:function(){this.setData({certShow:!this.data.certShow})},onChangeComment:function(){this.setData({is_comment_close:!this.data.is_comment_close})},onChangeTel:function(){var t=this;this.setData({fillShow:!this.data.fillShow},(function(){var e=t.data.formData||{};if(t.data.fillShow){if(""===t.data.temp_contact_phone&&""===t.data.temp_contact_qq&&""===t.data.temp_contact_wx&&""===t.data.temp_contact_person)return void wx.showToast({title:"暂无历史联系记录",icon:"none"});e.contact_person=t.data.temp_contact_person||"",e.contact_phone=t.data.temp_contact_phone||"",e.contact_qq=t.data.temp_contact_qq||"",e.contact_wx=t.data.temp_contact_wx||"",t.setData({formData:e}),t.data.saveContact&&wx.nextTick(t.saveFormData)}else e.contact_person="",e.contact_phone="",e.contact_qq="",e.contact_wx="",t.setData({formData:e}),t.data.saveContact&&wx.nextTick(t.saveFormData)}))},postPrepare:function(){var t=this,e=i.getCurAliasName();this.setData({sendMessagePathOfNeedCert:r.getEntryPathPostNeedCert(e),sendMessagePathOfIOSPay:r.getEntryPathIOSPayNeed(e)}),wx.pageScrollTo({scrollTop:0,duration:20});var a={cate_id:this.data.cate_id},o=!1;this.data.toCid&&this.data.toCid!=e&&(a.from_cid=e,o=!0,this.setData({isCross:o})),i.Kp.Req({url:"/thread/preparepost",loadingText:"加载中...",aliasName:this.data.toCid||"",data:a,callback:function(e){var a=e.cate_info||{},i=(e.cert_status,e.cert_valid||!1),r=e.last_thread||{},s=e.comment_forbid_open||!1,n=e.no_cert_post_open||!1,c=e.agree_need||!1,d=e.phone_need||!1,p=e.cert_show&&e.cert_show>0;if(e.reward_open){var h=e.reward_dist_ratio||{},l=h.select,u=void 0===l?-1:l,_=h.like_top,f=void 0===_?-1:_,m=h.random,P=void 0===m?-1:m;t.setData({rewardOpen:!0,rewardDistCustom:e.reward_dist_custom||!1,rewardRatio:[u,f,P],rewardCircleShow:e.reward_circle_show||!1,rewardHourSelect:e.reward_hour_select||0,rewardHourLike:e.reward_hour_like||0})}if(r.contact_qq>0&&t.setData({temp_contact_qq:r.contact_qq}),r.contact_wx&&t.setData({temp_contact_wx:r.contact_wx}),r.contact_phone>0&&t.setData({temp_contact_phone:r.contact_phone}),r.contact_person&&t.setData({temp_contact_person:r.contact_person}),e.post_price){var w=(t.data||{}).postPayInfo;w.postPrice=e.post_price,t.setData({postPayInfo:w}),t.computedPrice({postPrice:e.post_price})}var g=e.color_show_value_list||[];0!=i||0!=n?(0==i&&1==n&&t.setData({noCertPostDialogShow:!0}),o&&t.setData({noCertPostDialogShow:!0}),t.setData({colorValueList:g,postTip:e.post_tip||"",topConf:e.top_conf||[],cateName:a.name||"",pageLoaded:!0,certValid:i,comment_forbid_open:s,certShow:p,mineInfo:e.mine_info||{},agreeNeed:c,phoneNeed:d,phoneVerifyVisible:d},(function(){if(c&&!d){var e=t.selectComponent("#com-agree-dialog");e&&e.openDialog()}}))):t.openCertDialog()},errorToastAuto:!1,errorCallback:function(e){101==e.errno?(e.errmsg&&t.setData({serviceTipOfNeedIOSPay:e.errmsg}),t.openNeedPayServiceDialog()):wx.showModal({title:"",content:e.errmsg,showCancel:!1,success:function(e){t.goToPageIndex()}})}})},onChangeUseAnon:function(){this.setData({mineInfo:a(a({},this.data.mineInfo),{},{use_anon:!this.data.mineInfo.use_anon})})},handlePhoneVerifySuccess:function(){var t=this;this.setData({phoneVerifyVisible:!1,agreementSubmitting:!1},(function(){var e=t.selectComponent("#com-agree-dialog");e&&e.closeDialog(!0),wx.nextTick((function(){wx.showToast({title:"验证成功",icon:"success"}),t.postPrepare()}))}))},handlePhoneVerifyCancel:function(){this.setData({phoneVerifyVisible:!1}),this.pageBack()},handleAgreementSuccess:function(){wx.showToast({title:"验证成功",icon:"success"}),this.postPrepare()},handleAgreementCancel:function(){this.data.phoneNeed||this.pageBack()},pageBack:function(){var t=getCurrentPages();t&&1==t.length?wx.switchTab({url:"/pages/index/index"}):wx.navigateBack()},openCertDialog:function(){o.default.alert({context:this,title:"提示",message:"为保障信息的真实与安全，您需要先完成身份认证后，才可以发帖",showCancelButton:!0,cancelButtonText:"返回",confirmButtonText:"立即认证"}).then((function(){wx.redirectTo({url:"/pkgs/mine/usercert/usercert"})})).catch((function(){wx.navigateBack()}))},openNeedPayServiceDialog:function(){this.selectComponent("#ios-service-dialog").openDialog()},goToPageIndex:function(){wx.switchTab({url:"/pages/index/index"})},typeSwitch:function(t){var e=t.currentTarget.dataset.type;this.setData({curSelect:e})},onUploadSuccess:function(t){var e=t.detail.img_path||"",a=i.Const.IMG_HOST+e+i.Const.IMG_STYLE.sm_w200_h200,o=this.data.formData.imgList||[],r=this.data.formData.img_paths||[];r.length&&r.length>=this.data.fileCount||(o.push(a),r.push(e),this.updateImgInfo(o,r))},onImgDelete:function(t){var e=t.currentTarget.dataset.key,a=this.data.formData.imgList||[],o=this.data.formData.img_paths||[];i.Kp.Array.removeIndex(e,a),i.Kp.Array.removeIndex(e,o),this.updateImgInfo(a,o)},updateImgInfo:function(t,e){var a=this.data.formData||{};a.imgList=t,a.img_paths=e,this.setData({formData:a}),wx.nextTick(this.saveFormData)},bindFormInput:function(t){var a=t.currentTarget.dataset.name||"",o="";a&&("title"==a||"content"==a?(o=t.detail.value||"","title"==a&&(o=o.replace(/\n/g,""))):o=t.detail||"",this.setData(e({},"formData.".concat(a),o)),this.saveFormData())},saveFormData:function(){var t=Object.assign({},this.data.formData);this.data.saveContact||(t.contact_person="",t.contact_phone="",t.contact_qq="",t.contact_wx=""),s.set(s.STORAGE_CONFIG.POST_FORM_DATA,t)},initCacheData:function(){var t=this.data.formData||{},e=s.get(s.STORAGE_CONFIG.POST_FORM_DATA,{})||{};Object.assign(t,e),this.setData({formData:t})},clearCache:function(){s.remove(s.STORAGE_CONFIG.POST_FORM_DATA)},formSubmit:function(t){var e=this;if(this.data.thread_id)this.doPostSuccessCb();else{var a=this.checkFormData(t.detail.value);if(0==a)return!1;var o=this.data.postPayInfo||{},r=o.rewardPrice,s=void 0===r?0:r,n=o.reward_ratio_select,c=void 0===n?0:n,d=o.reward_ratio_like_top,p=void 0===d?0:d,h=o.reward_ratio_random,l=void 0===h?0:h;if(s>0&&this.data.rewardDistCustom&&0==p&&0==c&&0==l)wx.showToast({title:"请选择红包获得者",icon:"none"});else{a.img_paths=this.data.formData.img_paths,a.cate_id=this.data.cate_id;var u=this.data.certShow?10:0;a.certShow=u;var _=this.data.is_comment_close?1:0;a.is_comment_close=_,this.data.toCid&&this.data.toCid!=i.getCurAliasName()&&(a.from_cid=i.getCurAliasName()),this.data.mineInfo.use_anon&&(a.use_anon=1),this.setData({submiTing:!0}),i.Kp.Req({url:"/thread/post",aliasName:this.data.toCid||"",method:"post",data:a,callback:function(t){i.setGData({indexNeedNew:!0}),e.setData({thread_id:t.thread_id||0},(function(){e.doPostSuccessCb()})),e.clearCache()},complete:function(){e.setData({submiTing:!1})}})}}},doPostSuccessCb:function(){var t=this;if(this.data.totalPrice>0){var e=this.data.lockInputTip;if(!this.data.lockInput){var a=this.data.postPayInfo||{},o=a.postPrice,i=a.topPrice,r=a.colorPrice;i||r?e="您还可以更改下方的服务":o&&(e="您还可以选择下方的服务增加帖子曝光")}return this.setData({lockInput:!0,lockInputTip:e}),void(this.data.lockInput?this.doPay():setTimeout((function(){t.doPay()}),800))}this.openPostSuccessTip()},doPay:function(){var t=this,e={thread_id:this.data.thread_id,pay_price:this.data.totalPrice,top_price:this.data.postPayInfo.topPrice,top_type:this.data.postPayInfo.topType,post_price:this.data.postPayInfo.postPrice,color_value:this.data.postPayInfo.colorValue,color_hour_type:this.data.postPayInfo.colorValue?10:0,color_price:this.data.postPayInfo.colorPrice,reward_price:this.data.postPayInfo.rewardPrice,reward_ratio_like_top:this.data.postPayInfo.reward_ratio_like_top,reward_ratio_random:this.data.postPayInfo.reward_ratio_random,reward_ratio_select:this.data.postPayInfo.reward_ratio_select};this.selectComponent("#pay-select").pay({scene:"thread",aliasName:this.data.toCid||"",createUrl:"/thread/createorder",checkUrl:"/thread/checkorder",payPrice:this.data.totalPrice,data:e,created:function(e){e&&e.checked&&t.setData({threadIsChecked:!0})},success:function(){t.openPostSuccessTip()},cancel:function(){t.setData({canceled:!0})},fail:function(t){}})},openPostSuccessTip:function(){var t=this;if(this.data.totalPrice>0)return this.data.threadIsChecked?void this.setData({successPopupShow:!0}):void o.default.alert({context:this,title:"提示",message:"帖子提交成功，正在进行算法检测。检测不通过，将原路退款。",confirmButtonColor:"#1eba9d"}).then((function(){t.gotoPage()}));this.setData({successPopupShow:!0})},gotoPage:function(){this.data.totalPrice>0&&this.data.isCross?this.goToCrossThreadInfo():(i.setGData({needCheckOpenWxMsgAfterPost:!0}),this.goToPageIndex())},checkFormData:function(t){return console.log(t),!t.title||t.title.length<4?(wx.showToast({title:"标题至少4个字",icon:"none"}),!1):t},certShowClick:function(){this.data.certValid||wx.showToast({icon:"none",title:"此功能只对校园认证用户开放"})},goToCrossThreadInfo:function(){var t=this.data.toCid||i.getCurAliasName();wx.redirectTo({url:"/pages/info/info?id=".concat(this.data.thread_id,"&cid=").concat(t,"&from=post")})},noCertConfirm:function(){wx.redirectTo({url:"/pkgs/mine/usercert/usercert"})},noCertPayPost:function(){this.setData({noCertPostDialogShow:!1})}}); 
 			}); 	require("pkgs/post/local/local.js");
 		__wxRoute = 'pkgs/post/jixiang/jixiang';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pkgs/post/jixiang/jixiang.js';	define("pkgs/post/jixiang/jixiang.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault").default,a=require("../../../@babel/runtime/helpers/defineProperty"),e=require("../../../@babel/runtime/helpers/objectSpread2");require("../../../@babel/runtime/helpers/Arrayincludes");var o=t(require("@vant/weapp/dialog/dialog")),i=getApp(),n=require("../../../14EA9414C5DCED5F728CFC135C8135D0.js"),r=require("../../../B94652A1C5DCED5FDF203AA6A59135D0.js"),s=i.Const.IMG_STYLE;Page({data:{APP_CONST:i.Const,formData:{title:"",img_paths:[],imgList:[],content:"",contact_person:"",contact_phone:"",contact_qq:"",contact_wx:""},saveContact:!1,baseColor:i.GData.baseColor,inActiveColor:"#dcdee0",pageLoaded:!1,postTip:"",cateName:"",sendMessagePathOfNeedCert:"",sendMessagePathOfIOSPay:"",serviceTipOfNeedCert:"请通过客服机器人获得链接，完成身份认证后即可使用完整功能",serviceTipOfNeedIOSPay:"小程序不支持此功能，请通过客服机器人获得完整功能链接",curSelect:"contact_phone",thread_id:0,fileCount:9,cate_id:0,temp_contact_person:"",temp_contact_phone:"",temp_contact_qq:"",temp_contact_wx:"",certShow:!1,submitting:!1,comment_forbid_open:!1,is_comment_close:!1,collapseActives:[],payCollapseActives:["colorShow","postTop","postReward"],showFillContact:!1,fillShow:!1,descName:"",descPopupShow:!1,colorValueList:[],topConf:[],top_forbid:!1,successPopupShow:!1,postPayInfo:{postPrice:0,colorValue:0,colorPrice:0,topPrice:0,topType:0,rewardPrice:0,reward_ratio_select:0,reward_ratio_like_top:0,reward_ratio_random:0,hongbaoCount:0,hongbaoPrice:0},hongbaoPriceBind:"",hongbaoCountBind:"",hongbaoPriceYuan:"0.00",postPriceYuan:0,totalPrice:0,rewardOpen:!1,rewardDistCustom:!1,rewardRatio:[-1,-1,-1],postBtnText:"发布信息",lockInput:!1,lockInputTip:"您还可以更改下方的服务",canceled:!1,toCid:0,isCross:!1,noCertPostDialogShow:!1,noCertPostOpen:!1,hongbaoConfig:{},mineInfo:{},agreeNeed:!1,phoneNeed:!1,phoneVerifyVisible:!1,agreementSubmitting:!1},onLoad:function(t){var a=t.to_cid||"";this.setData({toCid:a,APP_CONST:i.Const}),this.postPrepare()},openPostCateDialog:function(){this.selectComponent("#post-cate-dialog").openDialog()},onCateSelect:function(t){var a=t.detail.id||0;this.setData({cate_id:a}),this.postPrepare()},onCateSelectCancel:function(){wx.switchTab({url:"/pages/index/index"})},onCollapseChange:function(t){var a=!1;t.detail.includes("contact")&&(a=!0),this.setData({showFillContact:a,collapseActives:t.detail})},onPayCollapseChange:function(t){this.setData({payCollapseActives:t.detail})},bindOpenDescPopup:function(t){var a=this,e=t.currentTarget.dataset.name;this.setData({descName:e},(function(){a.setData({descPopupShow:!0})}))},bindCloseDescPopup:function(){var t=this;this.setData({descPopupShow:!1}),setTimeout((function(){t.setData({descName:""})}),300)},bindColorShowSelected:function(t){var a=t.detail||{},o=a.colorValue,i=void 0===o?0:o,n=a.colorPrice,r=void 0===n?0:n,s=this.data.postPayInfo;s=e(e({},s),{},{colorValue:i,colorPrice:r}),this.setData({postPayInfo:s}),this.computedPrice({colorPrice:r})},bindPostTopSelected:function(t){var a=t.detail||{},o=a.topType,i=void 0===o?0:o,n=a.topPrice,r=void 0===n?0:n,s=this.data.postPayInfo;s=e(e({},s),{},{topType:i,topPrice:r}),this.setData({postPayInfo:s}),this.computedPrice({topPrice:r})},bindRewardChange:function(t){var a=t.detail||{},o=a.rewardPrice,i=void 0===o?0:o,n=a.reward_ratio_select,r=void 0===n?0:n,s=a.reward_ratio_random,c=void 0===s?0:s,d=a.reward_ratio_like_top,h=void 0===d?0:d,p=this.data.postPayInfo;p=e(e({},p),{},{rewardPrice:i,reward_ratio_select:r,reward_ratio_random:c,reward_ratio_like_top:h}),this.setData({postPayInfo:p}),this.computedPrice({rewardPrice:i})},computedPrice:function(t){var a=this.data.postPayInfo||{},e={colorPrice:a.colorPrice,postPrice:a.postPrice,rewardPrice:a.rewardPrice,topPrice:a.topPrice,hongbaoPrice:a.hongbaoPrice},o=Object.assign(e,t);""==o.hongbaoPrice&&(o.hongbaoPrice=0);var i=o.colorPrice/1+o.postPrice/1+o.topPrice/1+o.rewardPrice/1+o.hongbaoPrice/1,n=o.postPrice>0?"发红包(合计".concat((i/100).toFixed(2),"元)"):"发红包";this.setData({totalPrice:i,postBtnText:n})},onChangeUseAnon:function(){this.setData({mineInfo:e(e({},this.data.mineInfo),{},{use_anon:!this.data.mineInfo.use_anon})})},handlePhoneVerifySuccess:function(){var t=this;this.setData({phoneVerifyVisible:!1,agreementSubmitting:!1},(function(){var a=t.selectComponent("#com-agree-dialog");a&&a.closeDialog(!0),wx.nextTick((function(){wx.showToast({title:"验证成功",icon:"success"}),t.postPrepare()}))}))},handlePhoneVerifyCancel:function(){this.setData({phoneVerifyVisible:!1}),this.pageBack()},handleAgreementSuccess:function(){wx.showToast({title:"验证成功",icon:"success"}),this.postPrepare()},handleAgreementCancel:function(){this.data.phoneNeed||this.pageBack()},pageBack:function(){var t=getCurrentPages();t&&1==t.length?wx.switchTab({url:"/pages/index/index"}):wx.navigateBack()},onChangeCert:function(){},onChangeComment:function(){this.setData({is_comment_close:!this.data.is_comment_close})},onChangeTel:function(){var t=this;this.setData({fillShow:!this.data.fillShow},(function(){var a=t.data.formData||{};if(t.data.fillShow){if(""===t.data.temp_contact_phone&&""===t.data.temp_contact_qq&&""===t.data.temp_contact_wx&&""===t.data.temp_contact_person)return void wx.showToast({title:"暂无历史联系记录",icon:"none"});a.contact_person=t.data.temp_contact_person||"",a.contact_phone=t.data.temp_contact_phone||"",a.contact_qq=t.data.temp_contact_qq||"",a.contact_wx=t.data.temp_contact_wx||"",t.setData({formData:a}),t.data.saveContact&&wx.nextTick(t.saveFormData)}else a.contact_person="",a.contact_phone="",a.contact_qq="",a.contact_wx="",t.setData({formData:a}),t.data.saveContact&&wx.nextTick(t.saveFormData)}))},postPrepare:function(){var t=this,a=i.getCurAliasName();this.setData({sendMessagePathOfNeedCert:n.getEntryPathPostNeedCert(a),sendMessagePathOfIOSPay:n.getEntryPathIOSPayNeed(a)}),wx.pageScrollTo({scrollTop:0,duration:20});var e={from_hongbao:1},r=!1;this.data.toCid&&this.data.toCid!=a&&(e.from_cid=a,r=!0,this.setData({isCross:r})),i.Kp.Req({url:"/thread/preparepost",loadingText:"加载中...",aliasName:this.data.toCid||"",data:e,callback:function(a){if(a.hongbao_open){var e=a.cate_info||{},i=(a.cert_status,a.cert_valid||!1),n=a.last_thread||{},s=a.comment_forbid_open||!1,c=a.no_cert_post_open||!1,d=a.agree_need||!1,h=a.phone_need||!1,p=a.cert_show&&a.cert_show>0;if(a.reward_open){var l=a.reward_dist_ratio||{},_=l.select,u=void 0===_?-1:_,f=l.like_top,m=void 0===f?-1:f,g=l.random,P=void 0===g?-1:g;t.setData({rewardOpen:!0,rewardDistCustom:a.reward_dist_custom||!1,rewardRatio:[u,m,P]})}if(n.contact_qq>0&&t.setData({temp_contact_qq:n.contact_qq}),n.contact_wx&&t.setData({temp_contact_wx:n.contact_wx}),n.contact_phone>0&&t.setData({temp_contact_phone:n.contact_phone}),n.contact_person&&t.setData({temp_contact_person:n.contact_person}),a.post_price){var w=a.post_price||0,C=(t.data||{}).postPayInfo;C.postPrice=a.post_price;var b=(w/100).toFixed(2);t.setData({postPayInfo:C,postPriceYuan:b}),t.computedPrice({postPrice:a.post_price})}var v=a.color_show_value_list||[];0!=i||0!=c?(0==i&&1==c&&t.setData({noCertPostDialogShow:!0}),r&&t.setData({noCertPostDialogShow:!0}),t.setData({colorValueList:v,postTip:a.post_tip||"",topConf:a.top_conf||[],cateName:e.name||"",cate_id:e.cate_id||0,pageLoaded:!0,certValid:i,comment_forbid_open:s,certShow:p,hongbaoConfig:a.hongbao_config||{},mineInfo:a.mine_info||{},agreeNeed:d,phoneNeed:h,phoneVerifyVisible:h},(function(){if(d&&!h){var a=t.selectComponent("#com-agree-dialog");a&&a.openDialog()}}))):t.openCertDialog()}else o.default.alert({context:t,message:"暂不支持此功能",showCancelButton:!1,confirmButtonText:"确定"}).then((function(){wx.redirectTo({url:"/pages/entry/entry"})})).catch((function(){wx.redirectTo({url:"/pages/entry/entry"})}))},errorToastAuto:!1,errorCallback:function(a){101==a.errno?(a.errmsg&&t.setData({serviceTipOfNeedIOSPay:a.errmsg}),t.openNeedPayServiceDialog()):wx.showModal({title:"",content:a.errmsg,showCancel:!1,success:function(a){t.goToPageIndex()}})}})},openCertDialog:function(){o.default.alert({context:this,title:"提示",message:"为保障信息的真实与安全，您需要先完成身份认证后，才可以发帖",showCancelButton:!0,cancelButtonText:"返回",confirmButtonText:"立即认证"}).then((function(){wx.redirectTo({url:"/pkgs/mine/usercert/usercert"})})).catch((function(){wx.navigateBack()}))},openNeedPayServiceDialog:function(){this.selectComponent("#ios-service-dialog").openDialog()},goToPageIndex:function(){wx.switchTab({url:"/pages/index/index"})},typeSwitch:function(t){var a=t.currentTarget.dataset.type;this.setData({curSelect:a})},onUploadSuccess:function(t){var a=t.detail.img_path||"",e=i.Const.IMG_HOST+a+s.sm_w200_h200,o=this.data.formData.imgList||[],n=this.data.formData.img_paths||[];n.length&&n.length>=this.data.fileCount||(o.push(e),n.push(a),this.updateImgInfo(o,n))},onImgDelete:function(t){var a=t.currentTarget.dataset.key,e=this.data.formData.imgList||[],o=this.data.formData.img_paths||[];i.Kp.Array.removeIndex(a,e),i.Kp.Array.removeIndex(a,o),this.updateImgInfo(e,o)},updateImgInfo:function(t,a){var e=this.data.formData||{};e.imgList=t,e.img_paths=a,this.setData({formData:e}),wx.nextTick(this.saveFormData)},bindFormInput:function(t){var a=t.currentTarget.dataset.name||"",e="";if(a){if("title"==a||"content"==a)e=t.detail||"","title"==a&&(e=e.replace(/\n/g,""));else if(e=t.detail||"",!this.data.saveContact)return;var o=this.data.formData||{};o[a]=e,this.setData({formData:o}),wx.nextTick(this.saveFormData)}},bindHongbaoInput:function(t){var e=t.currentTarget.dataset.name||"",o="";if(e){if(o=t.detail||"","hongbaoPrice"==e){var i=100*parseFloat(o);isNaN(i)&&(i=0,o="");var n=0==i?"":o,r=(i/100).toFixed(2)||"";this.setData(a({hongbaoPriceYuan:r,hongbaoPriceBind:n},"postPayInfo.hongbaoPrice",i)),this.computedPrice({hongbaoPrice:i})}if("hongbaoCount"==e){var s=parseInt(o);isNaN(s)&&(s=0);var c=0==s?"":s;this.setData(a({hongbaoCountBind:c},"postPayInfo.hongbaoCount",s))}}},saveFormData:function(){},initCacheData:function(){var t=this.data.formData||{},a=r.get(r.STORAGE_CONFIG.POST_FORM_DATA,{})||{};Object.assign(t,a),this.setData({formData:t})},clearCache:function(){r.remove(r.STORAGE_CONFIG.POST_FORM_DATA)},checkHongBaoPrice:function(){var t=this.data.postPayInfo.hongbaoCount,a=this.data.postPayInfo.hongbaoPrice,e=this.data.hongbaoConfig||{};return!a||a<Math.max(100*e.hongbao_price_min,e.per_amount_min*t)?(wx.showToast({title:"请设置不小于".concat(Math.max(e.hongbao_price_min,e.per_amount_min*t/100),"元的红包金额"),icon:"none"}),!1):!(!a||a>100*e.hongbao_price_max)||(wx.showToast({title:"红包金额不能超过".concat(e.hongbao_price_max,"元"),icon:"none"}),!1)},formSubmit:function(){var t=this;if(this.data.thread_id)this.postCallback();else{var a=this.checkFormData();if(0==a)return!1;var e=this.data.postPayInfo||{},o=e.rewardPrice,n=void 0===o?0:o,r=e.reward_ratio_select,s=void 0===r?0:r,c=e.reward_ratio_like_top,d=void 0===c?0:c,h=e.reward_ratio_random,p=void 0===h?0:h,l=e.hongbaoCount,_=void 0===l?0:l;if(n>0&&this.data.rewardDistCustom&&0==d&&0==s&&0==p)wx.showToast({title:"请选择红包获得者",icon:"none"});else{var u=this.data.hongbaoConfig||{};if(u.hongbao_count_max||(u.hongbao_count_max=200),u.hongbao_count_min||(u.hongbao_count_min=1),u.hongbao_price_max||(u.hongbao_price_max=2e3),u.hongbao_price_min||(u.hongbao_price_min=1),u.per_amount_min||(u.per_amount_min=.1),!_||_>u.hongbao_count_max||_<u.hongbao_count_min)wx.showToast({title:"请填写红包数量，".concat(u.hongbao_count_min,"~").concat(u.hongbao_count_max,"个"),icon:"none"});else if(this.checkHongBaoPrice()){a.img_paths=this.data.formData.img_paths,a.cate_id=this.data.cate_id;var f=this.data.certShow?10:0;a.certShow=f;var m=this.data.is_comment_close?1:0;a.is_comment_close=m,this.data.toCid&&this.data.toCid!=i.getCurAliasName()&&(a.from_cid=i.getCurAliasName()),a.hongbao_price=this.data.postPayInfo.hongbaoPrice,a.hongbao_count=this.data.postPayInfo.hongbaoCount,this.data.mineInfo.use_anon&&(a.use_anon=1),this.setData({submitting:!0}),i.Kp.Req({url:"/thread/post",aliasName:this.data.toCid||"",method:"post",data:a,callback:function(a){i.setGData({indexNeedNew:!0}),t.setData({thread_id:a.thread_id||0},(function(){t.postCallback()})),t.clearCache()},complete:function(){t.setData({submitting:!1})}})}}}},postCallback:function(){var t=this;if(this.data.totalPrice>0){var a=this.data.lockInputTip;if(this.data.lockInput){if(!this.checkHongBaoPrice())return}else{var e=this.data.postPayInfo||{},o=e.postPrice,i=e.topPrice,n=e.colorPrice;i||n?a="您还可以更改下方的服务":o&&(a="您还可以选择下方的服务增加帖子曝光")}this.setData({lockInput:!0,lockInputTip:a}),this.data.lockInput?this.doPay():setTimeout((function(){t.doPay()}),800)}else this.data.lockInput?this.successCb():this.setData({successPopupShow:!0})},doPay:function(){var t=this,a={thread_id:this.data.thread_id,pay_price:this.data.totalPrice,top_price:this.data.postPayInfo.topPrice,top_type:this.data.postPayInfo.topType,post_price:this.data.postPayInfo.postPrice,color_value:this.data.postPayInfo.colorValue,color_hour_type:this.data.postPayInfo.colorValue?10:0,color_price:this.data.postPayInfo.colorPrice,reward_price:this.data.postPayInfo.rewardPrice,reward_ratio_like_top:this.data.postPayInfo.reward_ratio_like_top,reward_ratio_random:this.data.postPayInfo.reward_ratio_random,reward_ratio_select:this.data.postPayInfo.reward_ratio_select,hongbao_count:this.data.postPayInfo.hongbaoCount,hongbao_price:this.data.postPayInfo.hongbaoPrice};this.selectComponent("#pay-select").pay({scene:"thread",aliasName:this.data.toCid||"",createUrl:"/thread/createorder",checkUrl:"/thread/checkorder",payPrice:this.data.totalPrice,data:a,created:function(t){},success:function(){t.successCb()},cancel:function(){t.setData({canceled:!0})},fail:function(t){}})},successCb:function(){var t=this;i.setGData({needCheckOpenWxMsgAfterPost:!0}),this.data.totalPrice>0?o.default.alert({context:this,title:"提示",message:"帖子提交成功，正在进行算法检测。检测不通过，将原路退款。",confirmButtonColor:"#1eba9d"}).then((function(){t.data.isCross?t.goToCrossThreadInfo():t.data.postPayInfo.topPrice>0?(i.setGData({indexNeedNew:!0}),setTimeout((function(){wx.switchTab({url:"/pages/index/index"})}),1e3)):t.goToPageIndex()})):this.goToPageIndex()},checkFormData:function(){var t=this.data.formData||{};return!t.title||t.title.length<4?(wx.showToast({title:"标题至少4个字",icon:"none"}),!1):t},previewImage:function(t){var a=(this.data.formData.img_paths||[]).map((function(t){return i.Const.IMG_HOST+t+s.mirror})),e=a.length&&a[t.currentTarget.dataset.index||0];console.log(e),i.previewImage({current:e,urls:a})},certShowClick:function(){this.data.certValid||wx.showToast({icon:"none",title:"此功能只对校园认证用户开放"})},goToCrossThreadInfo:function(){var t=this.data.toCid||i.getCurAliasName();wx.redirectTo({url:"/pages/jixiang/info/info?id=".concat(this.data.thread_id,"&cid=").concat(t,"&from=post")})},noCertConfirm:function(){wx.redirectTo({url:"/pkgs/mine/usercert/usercert"})},noCertPayPost:function(){this.setData({noCertPostDialogShow:!1})}}); 
 			}); 	require("pkgs/post/jixiang/jixiang.js");
 