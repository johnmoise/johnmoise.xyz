var r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function a(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var U=Math.ceil,k=Math.max;function z(t,n,e,o){for(var f=-1,i=k(U((n-t)/(e||1)),0),s=Array(i);i--;)s[o?i:++f]=t,t+=e;return s}var p=z;a(p);function B(t,n){return t===n||t!==t&&n!==n}var b=B;a(b);var H=typeof r=="object"&&r&&r.Object===Object&&r,y=H;a(y);var J=y,K=typeof self=="object"&&self&&self.Object===Object&&self,L=J||K||Function("return this")(),d=L;a(d);var Q=d,R=Q.Symbol,c=R;a(c);var j=c,g=Object.prototype,V=g.hasOwnProperty,W=g.toString,$=j?j.toStringTag:void 0;function X(t){var n=V.call(t,$),e=t[$];try{t[$]=void 0;var o=!0}catch{}var f=W.call(t);return o&&(n?t[$]=e:delete t[$]),f}var m=X;a(m);var Y=Object.prototype,Z=Y.toString;function tt(t){return Z.call(t)}var h=tt;a(h);var O=c,nt=m,et=h,at="[object Null]",ot="[object Undefined]",w=O?O.toStringTag:void 0;function $t(t){return t==null?t===void 0?ot:at:w&&w in Object(t)?nt(t):et(t)}var v=$t;a(v);function rt(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var u=rt;a(u);var ut=v,ft=u,it="[object AsyncFunction]",ct="[object Function]",vt="[object GeneratorFunction]",lt="[object Proxy]";function st(t){if(!ft(t))return!1;var n=ut(t);return n==ct||n==vt||n==it||n==lt}var S=st;a(S);var pt=9007199254740991;function bt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=pt}var F=bt;a(F);var yt=S,dt=F;function jt(t){return t!=null&&dt(t.length)&&!yt(t)}var x=jt;a(x);var gt=9007199254740991,mt=/^(?:0|[1-9]\d*)$/;function ht(t,n){var e=typeof t;return n=n??gt,!!n&&(e=="number"||e!="symbol"&&mt.test(t))&&t>-1&&t%1==0&&t<n}var T=ht;a(T);var Ot=b,wt=x,St=T,Ft=u;function xt(t,n,e){if(!Ft(e))return!1;var o=typeof n;return(o=="number"?wt(e)&&St(n,e.length):o=="string"&&n in e)?Ot(e[n],t):!1}var A=xt;a(A);var Tt=/\s/;function At(t){for(var n=t.length;n--&&Tt.test(t.charAt(n)););return n}var M=At;a(M);var Mt=M,Nt=/^\s+/;function Pt(t){return t&&t.slice(0,Mt(t)+1).replace(Nt,"")}var N=Pt;a(N);function Gt(t){return t!=null&&typeof t=="object"}var P=Gt;a(P);var It=v,_t=P,qt="[object Symbol]";function Ct(t){return typeof t=="symbol"||_t(t)&&It(t)==qt}var G=Ct;a(G);var Dt=N,I=u,Et=G,_=NaN,Ut=/^[-+]0x[0-9a-f]+$/i,kt=/^0b[01]+$/i,zt=/^0o[0-7]+$/i,Bt=parseInt;function Ht(t){if(typeof t=="number")return t;if(Et(t))return _;if(I(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=I(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=Dt(t);var e=kt.test(t);return e||zt.test(t)?Bt(t.slice(2),e?2:8):Ut.test(t)?_:+t}var q=Ht;a(q);var Jt=q,C=1/0,Kt=17976931348623157e292;function Lt(t){if(!t)return t===0?t:0;if(t=Jt(t),t===C||t===-C){var n=t<0?-1:1;return n*Kt}return t===t?t:0}var D=Lt;a(D);var Qt=p,Rt=A,l=D;function Vt(t){return function(n,e,o){return o&&typeof o!="number"&&Rt(n,e,o)&&(e=o=void 0),n=l(n),e===void 0?(e=n,n=0):e=l(e),o=o===void 0?n<e?1:-1:l(o),Qt(n,e,o,t)}}var E=Vt;a(E);var Wt=E,Xt=Wt(),Yt=Xt,Zt=a(Yt);export{Zt as default};