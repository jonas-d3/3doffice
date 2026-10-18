(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,M=1031,ee=1033,N=33776,P=33777,F=33778,te=33779,ne=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,I=37496,ce=37488,le=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,L=36286,Me=2300,Ne=2301,Pe=2302,R=2303,Fe=2400,z=2401,Ie=2402,Le=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=35048,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={};function Ze(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $e(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,B(...e))}function et(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),it=1234567,at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rt[e&255]+rt[e>>8&255]+rt[e>>16&255]+rt[e>>24&255]+`-`+rt[t&255]+rt[t>>8&255]+`-`+rt[t>>16&15|64]+rt[t>>24&255]+`-`+rt[n&63|128]+rt[n>>8&255]+`-`+rt[n>>16&255]+rt[n>>24&255]+rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function dt(e,t,n){return e===t?0:(n-e)/(t-e)}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t,n,r){return ft(e,t,1-Math.exp(-n*r))}function mt(e,t=1){return t-Math.abs(lt(e,t*2)-t)}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _t(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vt(e,t){return e+Math.random()*(t-e)}function yt(e){return e*(.5-Math.random())}function bt(e){e!==void 0&&(it=e);let t=it+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xt(e){return e*at}function St(e){return e*ot}function Ct(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function wt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var kt={DEG2RAD:at,RAD2DEG:ot,generateUUID:st,clamp:ct,euclideanModulo:lt,mapLinear:ut,inverseLerp:dt,lerp:ft,damp:pt,pingpong:mt,smoothstep:ht,smootherstep:gt,randInt:_t,randFloat:vt,randFloatSpread:yt,seededRandom:bt,degToRad:xt,radToDeg:St,isPowerOfTwo:Ct,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:Et,normalize:Ot,denormalize:Dt},H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new U,Mt=new At,Nt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $e(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Pt.makeScale(e,t)),this}rotate(e){return $e(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Pt.makeRotation(-e)),this}translate(e,t){return $e(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pt=new Nt,Ft=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lt(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $e(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $e(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var Rt=Lt();function zt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Vt,Ht=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vt===void 0&&(Vt=Je(`canvas`)),Vt.width=e.width,Vt.height=e.height;let t=Vt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Vt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=zt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(zt(t[e]/255)*255):t[e]=zt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ut=0,Wt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Gt(r[t].image)):e.push(Gt(r[t]))}else e=Gt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Gt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ht.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Kt=0,qt=new U,Jt=class e extends nt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=st(),this.name=``,this.source=new Wt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qt).x}get height(){return this.source.getSize(qt).y}get depth(){return this.source.getSize(qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=300,Jt.DEFAULT_ANISOTROPY=1;var Yt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xt=class extends nt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let r=new Jt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zt=class extends Xt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qt=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$t=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},en=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),i=1/tn.setFromMatrixColumn(e,1).length(),a=1/tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rn,e,an)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),on.crossVectors(n,cn),on.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),on.crossVectors(n,cn)),on.normalize(),sn.crossVectors(cn,on),r[0]=on.x,r[4]=sn.x,r[8]=cn.x,r[1]=on.y,r[5]=sn.y,r[9]=cn.y,r[2]=on.z,r[6]=sn.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=tn.set(r[0],r[1],r[2]).length(),o=tn.set(r[4],r[5],r[6]).length(),s=tn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),nn.copy(this);let c=1/a,l=1/o,u=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=l,nn.elements[5]*=l,nn.elements[6]*=l,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tn=new U,nn=new en,rn=new U(0,0,0),an=new U(1,1,1),on=new U,sn=new U,cn=new U,ln=new en,un=new At,dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return un.setFromEuler(this),this.setFromQuaternion(un,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER=`XYZ`;var fn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},pn=0,mn=new U,hn=new At,gn=new en,_n=new U,vn=new U,yn=new U,bn=new At,xn=new U(1,0,0),Sn=new U(0,1,0),Cn=new U(0,0,1),wn={type:`added`},Tn={type:`removed`},En={type:`childadded`,child:null},Dn={type:`childremoved`,child:null},On=class e extends nt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pn++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new dn,r=new At,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new en},normalMatrix:{value:new Nt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(Sn,e)}rotateZ(e){return this.rotateOnAxis(Cn,e)}translateOnAxis(e,t){return mn.copy(e).applyQuaternion(this.quaternion),this.position.add(mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(Sn,e)}translateZ(e){return this.translateOnAxis(Cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_n.copy(e):_n.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(vn,_n,this.up):gn.lookAt(_n,vn,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),hn.setFromRotationMatrix(gn),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,bn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};On.DEFAULT_UP=new U(0,1,0),On.DEFAULT_MATRIX_AUTO_UPDATE=!0,On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var W=class extends On{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new W,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new W,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new W,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new W;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Fn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=lt(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return Rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=jn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}copyLinearToSRGB(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Rt.workingToColorSpace(In.copy(this),e),Math.round(ct(In.r*255,0,255))*65536+Math.round(ct(In.g*255,0,255))*256+Math.round(ct(In.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(In.copy(this),t);let n=In.r,r=In.g,i=In.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Re){Rt.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,r=In.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=ft(Mn.h,Nn.h,t),r=ft(Mn.s,Nn.s,t),i=ft(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Fn;Fn.NAMES=jn;var Ln=class extends On{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new U,Kn=new U,qn=new U,Jn=new Yt,Yn=new Yt,Xn=new Yt,Zn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Rn.subVectors(r,t),zn.subVectors(n,t),Bn.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(zn),s=Rn.dot(Bn),c=zn.dot(zn),l=zn.dot(Bn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)!==null&&Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Vn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Vn.x),s.addScaledVector(a,Vn.y),s.addScaledVector(o,Vn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Jn.setScalar(0),Yn.setScalar(0),Xn.setScalar(0),Jn.fromBufferAttribute(e,t),Yn.fromBufferAttribute(e,n),Xn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jn,i.x),a.addScaledVector(Yn,i.y),a.addScaledVector(Xn,i.z),a}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),zn.subVectors(e,t),Rn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Rn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Hn.subVectors(r,n),Un.subVectors(i,n),Gn.subVectors(e,n);let s=Hn.dot(Gn),c=Un.dot(Gn);if(s<=0&&c<=0)return t.copy(n);Kn.subVectors(e,r);let l=Hn.dot(Kn),u=Un.dot(Kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Hn,a);qn.subVectors(e,i);let f=Hn.dot(qn),p=Un.dot(qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Un,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Wn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Wn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Hn,a).addScaledVector(Un,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,er):er.fromBufferAttribute(r,t),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),lr.subVectors(this.max,cr),nr.subVectors(e.a,cr),rr.subVectors(e.b,cr),ir.subVectors(e.c,cr),ar.subVectors(rr,nr),or.subVectors(ir,rr),sr.subVectors(nr,ir);let t=[0,-ar.z,ar.y,0,-or.z,or.y,0,-sr.z,sr.y,ar.z,0,-ar.x,or.z,0,-or.x,sr.z,0,-sr.x,-ar.y,ar.x,0,-or.y,or.x,0,-sr.y,sr.x,0];return!fr(t,nr,rr,ir,lr)||(t=[1,0,0,0,1,0,0,0,1],!fr(t,nr,rr,ir,lr))?!1:(ur.crossVectors(ar,or),t=[ur.x,ur.y,ur.z],fr(t,nr,rr,ir,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new U,new U,new U,new U,new U,new U,new U,new U],er=new U,tr=new Qn,nr=new U,rr=new U,ir=new U,ar=new U,or=new U,sr=new U,cr=new U,lr=new U,ur=new U,dr=new U;function fr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){dr.fromArray(e,a);let o=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),s=t.dot(dr),c=n.dot(dr),l=r.dot(dr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var pr=new U,mr=new H,hr=0,gr=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},_r=class extends gr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},vr=class extends gr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yr=class extends gr{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new Qn,xr=new U,Sr=new U,Cr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new en,Er=new On,Dr=new U,Or=new Qn,kr=new Qn,Ar=new U,jr=class e extends nt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ke(e)?vr:_r)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Nt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new yr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new gr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new gr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new gr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=new U,Nr=new U,Pr=new Nt,Fr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Mr.subVectors(n,t).cross(Nr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Mr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pr.getNormalMatrix(e),r=this.coplanarPoint(Mr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ir=0,Lr=class extends nt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Fr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Rr=new U,zr=new U,Br=new U,Vr=new U,Hr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){zr.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(zr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=Vr.dot(this.direction),s=-Vr.dot(Br),c=Vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(zr).addScaledVector(Br,d),f}intersectSphere(e,t){if(e.radius<0)return null;Rr.subVectors(e.center,this.origin);let n=Rr.dot(this.direction),r=Rr.dot(Rr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,ee;if(y>=b&&y>=x?(w=s,D=u,A=p,ee=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,ee=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,ee=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let N=S/w,P=C/w,F=1/w,te=T-N*D,ne=E-P*D,re=O-N*A,ie=k-P*A,ae=j-N*ee,oe=M-P*ee,se=ae*ie-oe*re,I=te*oe-ne*ae,ce=re*ne-ie*te;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=F*(se*D+I*A+ce*ee);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ur=class extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Fn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wr=new en,Gr=new Hr,Kr=new Cr,qr=new U,Jr=new U,Yr=new U,Xr=new U,Zr=new U,Qr=new U,$r=new U,ei=new U,ti=class extends On{constructor(e=new jr,t=new Ur){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Qr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Zr.fromBufferAttribute(s,e),a?Qr.addScaledVector(Zr,r):Qr.addScaledVector(Zr.sub(t),r))}t.add(Qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Gr.copy(e.ray).recast(e.near),!(Kr.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Kr,qr)===null||Gr.origin.distanceToSquared(qr)>(e.far-e.near)**2))&&(Wr.copy(i).invert(),Gr.copy(e.ray).applyMatrix4(Wr),(n.boundingBox===null||Gr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ri(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ri(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ri(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ri(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ni(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ei.copy(s),ei.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ei);return l<n.near||l>n.far?null:{distance:l,point:ei.clone(),object:e}}function ri(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Jr),e.getVertexPosition(c,Yr),e.getVertexPosition(l,Xr);let u=ni(e,t,n,r,Jr,Yr,Xr,$r);if(u){let e=new U;Zn.getBarycoord($r,Jr,Yr,Xr,e),i&&(u.uv=Zn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=Zn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=Zn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};Zn.getNormal(Jr,Yr,Xr,t.normal),u.face=t,u.barycoord=e}return u}var ii=class extends Jt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ai=class extends gr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},oi=new en,si=new en,ci=[],li=new Qn,ui=new en,di=new ti,fi=new Cr,pi=class extends ti{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ui)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),li.copy(e.boundingBox).applyMatrix4(oi),this.boundingBox.union(li)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oi),fi.copy(e.boundingSphere).applyMatrix4(oi),this.boundingSphere.union(fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(di.geometry=this.geometry,di.material=this.material,di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fi.copy(this.boundingSphere),fi.applyMatrix4(n),e.ray.intersectsSphere(fi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,oi),si.multiplyMatrices(n,oi),di.matrixWorld=si,di.raycast(e,ci);for(let e=0,n=ci.length;e<n;e++){let n=ci[e];n.instanceId=i,n.object=this,t.push(n)}ci.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(r*this.count),r,this.count,k,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mi=new Cr,hi=new H(.5,.5),gi=new U,_i=class{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,i=new Fr,a=new Fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476+hi.distanceTo(e.center),mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gi.x=r.normal.x>0?e.max.x:e.min.x,gi.y=r.normal.y>0?e.max.y:e.min.y,gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vi=class extends Jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yi=class extends Jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bi=class extends Jt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},xi=class extends bi{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Si=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ci=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class e extends jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new yr(a,3)),this.setAttribute(`normal`,new yr(o,3)),this.setAttribute(`uv`,new yr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ti=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class e extends Ti{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Di=class e extends jr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new yr(i,3)),this.setAttribute(`normal`,new yr(i.slice(),3)),this.setAttribute(`uv`,new yr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Oi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new en;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ct(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ct(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ki=class extends Oi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ai=class extends ki{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ji(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Mi=new U,Ni=new U,Pi=new ji,Fi=new ji,Ii=new ji,Li=class extends Oi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ni.subVectors(r[0],r[1]).add(r[0]),c=Ni);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Mi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Mi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Pi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Fi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ii.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Pi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Fi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ii.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Pi.calc(s),Fi.calc(s),Ii.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ri(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function zi(e,t){let n=1-e;return n*n*t}function Bi(e,t){return 2*(1-e)*e*t}function Vi(e,t){return e*e*t}function Hi(e,t,n,r){return zi(e,t)+Bi(e,n)+Vi(e,r)}function Ui(e,t){let n=1-e;return n*n*n*t}function Wi(e,t){let n=1-e;return 3*n*n*e*t}function Gi(e,t){return 3*(1-e)*e*e*t}function Ki(e,t){return e*e*e*t}function qi(e,t,n,r,i){return Ui(e,t)+Wi(e,n)+Gi(e,r)+Ki(e,i)}var Ji=class extends Oi{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(qi(e,r.x,i.x,a.x,o.x),qi(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yi=class extends Oi{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(qi(e,r.x,i.x,a.x,o.x),qi(e,r.y,i.y,a.y,o.y),qi(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xi=class extends Oi{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Oi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qi=class extends Oi{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Hi(e,r.x,i.x,a.x),Hi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$i=class extends Oi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Hi(e,r.x,i.x,a.x),Hi(e,r.y,i.y,a.y),Hi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ri(o,s.x,c.x,l.x,u.x),Ri(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},ta=Object.freeze({__proto__:null,ArcCurve:Ai,CatmullRomCurve3:Li,CubicBezierCurve:Ji,CubicBezierCurve3:Yi,EllipseCurve:ki,LineCurve:Xi,LineCurve3:Zi,QuadraticBezierCurve:Qi,QuadraticBezierCurve3:$i,SplineCurve:ea}),na=class extends Oi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ta[n.type]().fromJSON(n))}return this}},ra=class extends na{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xi(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Qi(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ji(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new ea([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ki(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ia=class extends ra{constructor(e){super(e),this.uuid=st(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ra().fromJSON(n))}return this}};function aa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=oa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=pa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ca(a,o,n,s,c,l,0),o}function oa(e,t,n,r,i){let a;if(i===La(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Pa(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Pa(i/r|0,e[i],e[i+1],a);return a&&Ea(a,a.next)&&(Fa(a),a=a.next),a}function sa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ea(n,n.next)||Ta(n.prev,n,n.next)===0)){if(Fa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ca(e,t,n,r,i,a,o){if(!e)return;!o&&a&&va(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ua(e,r,i,a):la(e)){t.push(c.i,e.i,l.i),Fa(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=da(sa(e),t),ca(e,t,n,r,i,a,2)):o===2&&fa(e,t,n,r,i,a):ca(sa(e),t,n,r,i,a,1);break}}}function la(e){let t=e.prev,n=e,r=e.next;if(Ta(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ca(i,s,a,c,o,l,m.x,m.y)&&Ta(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ua(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ta(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ba(p,m,t,n,r),v=ba(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ca(s,u,c,d,l,f,y.x,y.y)&&Ta(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ca(s,u,c,d,l,f,b.x,b.y)&&Ta(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ca(s,u,c,d,l,f,y.x,y.y)&&Ta(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ca(s,u,c,d,l,f,b.x,b.y)&&Ta(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function da(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ea(r,i)&&Da(r,n,n.next,i)&&ja(r,i)&&ja(i,r)&&(t.push(r.i,n.i,i.i),Fa(n),Fa(n.next),n=e=i),n=n.next}while(n!==e);return sa(n)}function fa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&wa(o,e)){let s=Na(o,e);o=sa(o,o.next),s=sa(s,s.next),ca(o,t,n,r,i,a,0),ca(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function pa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=oa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(xa(o))}i.sort(ma);for(let e=0;e<i.length;e++)n=ha(i[e],n);return n}function ma(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ha(e,t){let n=ga(e,t);if(!n)return t;let r=Na(n,e);return sa(r,r.next),sa(n,n.next)}function ga(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ea(e,n))return n;do{if(Ea(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Sa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ja(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&_a(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function _a(e,t){return Ta(e.prev,e,t.prev)<0&&Ta(t.next,e,e.next)<0}function va(e,t,n,r){let i=e;do i.z===0&&(i.z=ba(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ya(i)}function ya(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ba(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function xa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Sa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ca(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Sa(e,t,n,r,i,a,o,s)}function wa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Aa(e,t)&&(ja(e,t)&&ja(t,e)&&Ma(e,t)&&(Ta(e.prev,e,t.prev)||Ta(e,t.prev,t))||Ea(e,t)&&Ta(e.prev,e,e.next)>0&&Ta(t.prev,t,t.next)>0)}function Ta(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ea(e,t){return e.x===t.x&&e.y===t.y}function Da(e,t,n,r){let i=ka(Ta(e,t,n)),a=ka(Ta(e,t,r)),o=ka(Ta(n,r,e)),s=ka(Ta(n,r,t));return!!(i!==a&&o!==s||i===0&&Oa(e,n,t)||a===0&&Oa(e,r,t)||o===0&&Oa(n,e,r)||s===0&&Oa(n,t,r))}function Oa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ka(e){return e>0?1:e<0?-1:0}function Aa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Da(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ja(e,t){return Ta(e.prev,e,e.next)<0?Ta(e,t,e.next)>=0&&Ta(e,e.prev,t)>=0:Ta(e,t,e.prev)<0||Ta(e,e.next,t)<0}function Ma(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Na(e,t){let n=Ia(e.i,e.x,e.y),r=Ia(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Pa(e,t,n,r){let i=Ia(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Fa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ia(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function La(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ra=class{static triangulate(e,t,n=2){return aa(e,t,n)}},za=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ba(e),Va(n,e);let a=e.length;t.forEach(Ba);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Va(n,t[e]);let o=Ra.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ba(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Va(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ha=class e extends jr{constructor(e=new ia([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new yr(r,3)),this.setAttribute(`uv`,new yr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Ua:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new U,b=new U,x=new U}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!za.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];za.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||V(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],ee,N=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];ee=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ee[e]=A(t[e],t[r],t[i]);M.push(ee),N=N.concat(ee)}let P;if(p===0)P=za.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ae(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];ee=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],ee[e],a);ae(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=za.triangulateShape(e,t)}let F=P.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],N[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],N[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ee=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],ee[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=P[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=P[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=P[e];oe(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=P[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){I(e),I(t),I(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ce(o[0]),ce(o[1]),ce(o[2])}function se(e,t,i,a){I(e),I(t),I(a),I(t),I(i),I(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ce(s[0]),ce(s[1]),ce(s[3]),ce(s[1]),ce(s[2]),ce(s[3])}function I(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ce(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wa(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ta[i.type]().fromJSON(i)),new e(r,t.options)}},Ua={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}};function Wa(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ga=class e extends Di{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ka=class e extends jr{constructor(e=[new H(0,-.5),new H(.5,0),new H(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ct(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new U,d=new H,f=new U,p=new U,m=new U,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new yr(a,3)),this.setAttribute(`uv`,new yr(o,2)),this.setAttribute(`normal`,new yr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},qa=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ja=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new yr(p,3)),this.setAttribute(`normal`,new yr(m,3)),this.setAttribute(`uv`,new yr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ya=class e extends jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new yr(c,3)),this.setAttribute(`normal`,new yr(l,3)),this.setAttribute(`uv`,new yr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Xa=class e extends jr{constructor(e=new $i(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,s=new U,c=new H,l=new U,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new yr(u,3)),this.setAttribute(`normal`,new yr(d,3)),this.setAttribute(`uv`,new yr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ta[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Za=class extends Lr{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new Fn(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Qa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(eo(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(eo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function $a(e){let t={};for(let n=0;n<e.length;n++){let r=Qa(e[n]);for(let e in r)t[e]=r[e]}return t}function eo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function to(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function no(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}var ro={clone:Qa,merge:$a},io=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ao=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oo=class extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=io,this.fragmentShader=ao,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=to(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Fn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Nt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new en().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},so=class extends oo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},G=class extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Fn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},co=class extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lo=class extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function uo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function fo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var po=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},mo=class extends po{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case z:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case z:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ho=class extends po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},go=class extends po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_o=class extends po{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=bo(n,t,g,y,r);i[p]=vo(x,o,_,b,m)}return i}};function vo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function yo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function bo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=vo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=yo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var xo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),fo(e.settings)&&(n.settings={inTangents:uo(e.settings.inTangents,Array),outTangents:uo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case R:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return R}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;fo(this.settings)&&(So(this.settings.inTangents,e),So(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,fo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function So(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}xo.prototype.ValueTypeName=``,xo.prototype.TimeBufferType=Float32Array,xo.prototype.ValueBufferType=Float32Array,xo.prototype.DefaultInterpolation=Ne;var Co=class extends xo{constructor(e,t,n){super(e,t,n)}};Co.prototype.ValueTypeName=`bool`,Co.prototype.ValueBufferType=Array,Co.prototype.DefaultInterpolation=Me,Co.prototype.InterpolantFactoryMethodLinear=void 0,Co.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}};wo.prototype.ValueTypeName=`color`;var To=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}};To.prototype.ValueTypeName=`number`;var Eo=class extends po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},Do=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}};Do.prototype.ValueTypeName=`quaternion`,Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends xo{constructor(e,t,n){super(e,t,n)}};Oo.prototype.ValueTypeName=`string`,Oo.prototype.ValueBufferType=Array,Oo.prototype.DefaultInterpolation=Me,Oo.prototype.InterpolantFactoryMethodLinear=void 0,Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}};ko.prototype.ValueTypeName=`vector`;var Ao={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(jo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!jo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function jo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Mo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},No=class{constructor(e){this.manager=e===void 0?Mo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};No.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Po=new WeakMap,Fo=class extends No{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Ao.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Po.get(a);e===void 0&&(e=[],Po.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Je(`img`);function s(){l(),t&&t(this);let n=Po.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Po.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Ao.remove(`image:${e}`);let n=Po.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Po.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ao.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Io=class extends No{constructor(e){super(e)}load(e,t,n,r){let i=new Jt,a=new Fo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Lo=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Fn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ro=class extends Lo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zo=new en,Bo=new U,Vo=new U,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Bo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bo),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uo=new U,Wo=new At,Go=new U,Ko=class extends On{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uo,Wo,Go),Go.x===1&&Go.y===1&&Go.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Wo,Go.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Uo,Wo,Go),Go.x===1&&Go.y===1&&Go.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uo,Wo,Go.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qo=new U,Jo=new H,Yo=new H,Xo=class extends Ko{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qo.x,qo.y).multiplyScalar(-e/qo.z),qo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qo.x,qo.y).multiplyScalar(-e/qo.z)}getViewSize(e,t){return this.getViewBounds(e,Jo,Yo),t.subVectors(Yo,Jo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zo=class extends Ho{constructor(){super(new Xo(90,1,.5,500)),this.isPointLightShadow=!0}},Qo=class extends Lo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Zo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$o=class extends Ko{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},es=class extends Ho{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new es}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ns=-90,rs=1,is=class extends On{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xo(ns,rs,e,t);r.layers=this.layers,this.add(r);let i=new Xo(ns,rs,e,t);i.layers=this.layers,this.add(i);let a=new Xo(ns,rs,e,t);a.layers=this.layers,this.add(a);let o=new Xo(ns,rs,e,t);o.layers=this.layers,this.add(o);let s=new Xo(ns,rs,e,t);s.layers=this.layers,this.add(s);let c=new Xo(ns,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},as=class extends Xo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},os=`\\[\\]\\.:\\/`,ss=RegExp(`[\\[\\]\\.:\\/]`,`g`),cs=`[^\\[\\]\\.:\\/]`,ls=`[^`+os.replace(`\\.`,``)+`]`,us=`((?:WC+[\\/:])*)`.replace(`WC`,cs),ds=`(WCOD+)?`.replace(`WCOD`,ls),fs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,cs),ps=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,cs),ms=RegExp(`^`+us+ds+fs+ps+`$`),hs=[`material`,`materials`,`bones`,`map`],gs=class{constructor(e,t,n){let r=n||_s.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_s=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ss,``)}static parseTrackName(e){let t=ms.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);hs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_s.Composite=gs,_s.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_s.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_s.prototype.GetterByBindingType=[_s.prototype._getValue_direct,_s.prototype._getValue_array,_s.prototype._getValue_arrayElement,_s.prototype._getValue_toArray],_s.prototype.SetterByBindingTypeAndVersioning=[[_s.prototype._setValue_direct,_s.prototype._setValue_direct_setNeedsUpdate,_s.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_s.prototype._setValue_array,_s.prototype._setValue_array_setNeedsUpdate,_s.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_s.prototype._setValue_arrayElement,_s.prototype._setValue_arrayElement_setNeedsUpdate,_s.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_s.prototype._setValue_fromArray,_s.prototype._setValue_fromArray_setNeedsUpdate,_s.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vs=new en,ys=class{constructor(e,t,n=0,r=1/0){this.ray=new Hr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):V(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return vs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vs),this}intersectObject(e,t=!0,n=[]){return xs(e,this,n,t),n.sort(bs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)xs(e[r],this,n,t);return n.sort(bs),n}};function bs(e,t){return e.distance-t.distance}function xs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)xs(r[e],t,n,!0)}}var Ss=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=ct(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Cs=class extends nt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ws(e,t,n,r){let i=Ts(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case ne:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case L:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ts(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Es(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ds(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Os={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new Fn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Fn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Fn(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},ks={basic:{uniforms:$a([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Os.meshbasic_vert,fragmentShader:Os.meshbasic_frag},lambert:{uniforms:$a([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new Fn(0)},envMapIntensity:{value:1}}]),vertexShader:Os.meshlambert_vert,fragmentShader:Os.meshlambert_frag},phong:{uniforms:$a([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new Fn(0)},specular:{value:new Fn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Os.meshphong_vert,fragmentShader:Os.meshphong_frag},standard:{uniforms:$a([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new Fn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Os.meshphysical_vert,fragmentShader:Os.meshphysical_frag},toon:{uniforms:$a([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new Fn(0)}}]),vertexShader:Os.meshtoon_vert,fragmentShader:Os.meshtoon_frag},matcap:{uniforms:$a([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Os.meshmatcap_vert,fragmentShader:Os.meshmatcap_frag},points:{uniforms:$a([K.points,K.fog]),vertexShader:Os.points_vert,fragmentShader:Os.points_frag},dashed:{uniforms:$a([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Os.linedashed_vert,fragmentShader:Os.linedashed_frag},depth:{uniforms:$a([K.common,K.displacementmap]),vertexShader:Os.depth_vert,fragmentShader:Os.depth_frag},normal:{uniforms:$a([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Os.meshnormal_vert,fragmentShader:Os.meshnormal_frag},sprite:{uniforms:$a([K.sprite,K.fog]),vertexShader:Os.sprite_vert,fragmentShader:Os.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Os.background_vert,fragmentShader:Os.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Os.backgroundCube_vert,fragmentShader:Os.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Os.cube_vert,fragmentShader:Os.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Os.equirect_vert,fragmentShader:Os.equirect_frag},distance:{uniforms:$a([K.common,K.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Os.distance_vert,fragmentShader:Os.distance_frag},shadow:{uniforms:$a([K.lights,K.fog,{color:{value:new Fn(0)},opacity:{value:1}}]),vertexShader:Os.shadow_vert,fragmentShader:Os.shadow_frag}};ks.physical={uniforms:$a([ks.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Fn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Fn(0)},specularColor:{value:new Fn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Os.meshphysical_vert,fragmentShader:Os.meshphysical_frag};var As={r:0,b:0,g:0},js=new en,Ms=new Nt;Ms.set(-1,0,0,0,1,0,0,0,1);function Ns(e,t,n,r,i,a){let o=new Fn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ti(new Ci(1,1,1),new oo({name:`BackgroundCubeMaterial`,uniforms:Qa(ks.backgroundCube.uniforms),vertexShader:ks.backgroundCube.vertexShader,fragmentShader:ks.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(js.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ms),l.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ti(new qa(2,2),new oo({name:`BackgroundMaterial`,uniforms:Qa(ks.background.uniforms),vertexShader:ks.background.vertexShader,fragmentShader:ks.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(As,no(e)),n.buffers.color.setClear(As.r,As.g,As.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ps(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Fs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Is(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ls(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Fr,s=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Rs=4,zs=6,Bs=20,Vs=256,Hs=new $o,Us=new Fn,Ws=null,Gs=0,Ks=0,qs=!1,Js=new U,Ys=new U,Xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Js}=i;Ws=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ws,Gs,Ks),this._renderer.xr.enabled=qs,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ws=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:ze,depthBuffer:!1},r=Qs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zs(r)),this._blurMaterial=tc(r,e,t),this._ggxMaterial=ec(r,e,t)}return r}_compileMaterial(e){let t=new ti(new jr,e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,n,r,i){let a=new Xo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Us),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new Ci,new Ur({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Us),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;$s(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;$s(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Hs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Rs?n-d+Rs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,$s(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Hs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,$s(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Hs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];$s(t,3*l*(r>this._lodMax-Rs?r-this._lodMax+Rs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Hs)}};function Zs(e){let t=[],n=[],r=e,i=e-Rs+1+zs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ys.set(1,r,n):e===1?Ys.set(-n,1,-r):e===2?Ys.set(-n,r,1):e===3?Ys.set(-1,r,-n):e===4?Ys.set(-n,-1,r):Ys.set(n,r,-1),Ys.toArray(l,(e*6+t)*3)}}let u=new jr;u.setAttribute(`position`,new gr(c,3)),u.setAttribute(`outputDirection`,new gr(l,3)),n.push(new ti(u,null)),r>Rs&&r--}return{lodMeshes:n,sizeLods:t}}function Qs(e,t,n){let r=new Zt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function $s(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ec(e,t,n){return new oo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tc(e,t,n){return new oo({name:`SphericalGaussianBlur`,defines:{SAMPLES:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nc(){return new oo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rc(){return new oo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new vi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),i=new oo({name:`CubemapFromEquirect`,uniforms:Qa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ti(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new is(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function oc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ac(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Xs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Xs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function sc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$e(`WebGLRenderer: `+e+` extension not supported.`),t}}}function cc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?vr:_r)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function lc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function uc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function dc(e,t,n){let r=new WeakMap,i=new Yt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Qt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new H(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function fc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var pc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function mc(e,t,n,r,i,a){let o=new Zt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new jr;l.setAttribute(`position`,new yr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new yr([0,2,0,0,2,0],2));let u=new so({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ti(l,u),f=new $o(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Zt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Rt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=pc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var hc=new Jt,gc=new bi(1,1),_c=new Qt,vc=new $t,yc=new vi,bc=[],xc=[],Sc=new Float32Array(16),Cc=new Float32Array(9),wc=new Float32Array(4);function Tc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=bc[i];if(a===void 0&&(a=new Float32Array(i),bc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ec(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Dc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Oc(e,t){let n=xc[t];n===void 0&&(n=new Int32Array(t),xc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function kc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2fv(this.addr,t),Dc(n,t)}}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ec(n,t))return;e.uniform3fv(this.addr,t),Dc(n,t)}}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4fv(this.addr,t),Dc(n,t)}}function Nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;wc.set(r),e.uniformMatrix2fv(this.addr,!1,wc),Dc(n,r)}}function Pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;Cc.set(r),e.uniformMatrix3fv(this.addr,!1,Cc),Dc(n,r)}}function Fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;Sc.set(r),e.uniformMatrix4fv(this.addr,!1,Sc),Dc(n,r)}}function Ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2iv(this.addr,t),Dc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ec(n,t))return;e.uniform3iv(this.addr,t),Dc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4iv(this.addr,t),Dc(n,t)}}function Bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2uiv(this.addr,t),Dc(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ec(n,t))return;e.uniform3uiv(this.addr,t),Dc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4uiv(this.addr,t),Dc(n,t)}}function Wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(gc.compareFunction=n.isReversedDepthBuffer()?518:515,a=gc):a=hc,n.setTexture2D(t||a,i)}function Gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||vc,i)}function Kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||yc,i)}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||_c,i)}function Jc(e){switch(e){case 5126:return kc;case 35664:return Ac;case 35665:return jc;case 35666:return Mc;case 35674:return Nc;case 35675:return Pc;case 35676:return Fc;case 5124:case 35670:return Ic;case 35667:case 35671:return Lc;case 35668:case 35672:return Rc;case 35669:case 35673:return zc;case 5125:return Bc;case 36294:return Vc;case 36295:return Hc;case 36296:return Uc;case 35678:case 36198:case 36298:case 36306:case 35682:return Wc;case 35679:case 36299:case 36307:return Gc;case 35680:case 36300:case 36308:case 36293:return Kc;case 36289:case 36303:case 36311:case 36292:return qc}}function Yc(e,t){e.uniform1fv(this.addr,t)}function Xc(e,t){let n=Tc(t,this.size,2);e.uniform2fv(this.addr,n)}function Zc(e,t){let n=Tc(t,this.size,3);e.uniform3fv(this.addr,n)}function Qc(e,t){let n=Tc(t,this.size,4);e.uniform4fv(this.addr,n)}function $c(e,t){let n=Tc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function el(e,t){let n=Tc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tl(e,t){let n=Tc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function nl(e,t){e.uniform1iv(this.addr,t)}function rl(e,t){e.uniform2iv(this.addr,t)}function il(e,t){e.uniform3iv(this.addr,t)}function al(e,t){e.uniform4iv(this.addr,t)}function ol(e,t){e.uniform1uiv(this.addr,t)}function sl(e,t){e.uniform2uiv(this.addr,t)}function cl(e,t){e.uniform3uiv(this.addr,t)}function ll(e,t){e.uniform4uiv(this.addr,t)}function ul(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gc:hc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function dl(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||vc,a[e])}function fl(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||yc,a[e])}function pl(e,t,n){let r=this.cache,i=t.length,a=Oc(n,i);Ec(r,a)||(e.uniform1iv(this.addr,a),Dc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||_c,a[e])}function ml(e){switch(e){case 5126:return Yc;case 35664:return Xc;case 35665:return Zc;case 35666:return Qc;case 35674:return $c;case 35675:return el;case 35676:return tl;case 5124:case 35670:return nl;case 35667:case 35671:return rl;case 35668:case 35672:return il;case 35669:case 35673:return al;case 5125:return ol;case 36294:return sl;case 36295:return cl;case 36296:return ll;case 35678:case 36198:case 36298:case 36306:case 35682:return ul;case 35679:case 36299:case 36307:return dl;case 35680:case 36300:case 36308:case 36293:return fl;case 36289:case 36303:case 36311:case 36292:return pl}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jc(t.type)}},gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ml(t.type)}},_l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function yl(e,t){e.seq.push(t),e.map[t.id]=t}function bl(e,t,n){let r=e.name,i=r.length;for(vl.lastIndex=0;;){let a=vl.exec(r),o=vl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){yl(n,l===void 0?new hl(s,e,t):new gl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new _l(s),yl(n,e)),n=e}}}var xl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);bl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Sl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Cl=37297,wl=0;function Tl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var El=new Nt;function Dl(e){Rt._getMatrix(El,Rt.workingColorSpace,e);let t=`mat3( ${El.elements.map(e=>e.toFixed(4))} )`;switch(Rt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ol(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Tl(e.getShaderSource(t),r)}return i}function kl(e,t){let n=Dl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Al={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function jl(e,t){let n=Al[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ml=new U;function Nl(){return Rt.getLuminanceCoefficients(Ml),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ml.x.toFixed(4)}, ${Ml.y.toFixed(4)}, ${Ml.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Pl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ll).join(`
`)}function Fl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Il(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ll(e){return e!==``}function Rl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(e){return e.replace(Bl,Ul)}var Hl=new Map;function Ul(e,t){let n=Os[t];if(n===void 0){let e=Hl.get(t);if(e!==void 0)n=Os[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Vl(n)}var Wl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(e){return e.replace(Wl,Kl)}function Kl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ql(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Jl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Yl(e){return Jl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Xl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Zl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Xl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ql={302:`ENVMAP_MODE_REFRACTION`};function $l(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ql[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var eu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function tu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:eu[e.combine]||`ENVMAP_BLENDING_NONE`}function nu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ru(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Yl(n),l=Zl(n),u=$l(n),d=tu(n),f=nu(n),p=Pl(n),m=Fl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ll).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ll).join(`
`),_.length>0&&(_+=`
`)):(g=[ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ll).join(`
`),_=[ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Os.tonemapping_pars_fragment,n.toneMapping===0?``:jl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Os.colorspace_pars_fragment,kl(`linearToOutputTexel`,n.outputColorSpace),Nl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ll).join(`
`)),o=Vl(o),o=Rl(o,n),o=zl(o,n),s=Vl(s),s=Rl(s,n),s=zl(s,n),o=Gl(o),s=Gl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Sl(i,i.VERTEX_SHADER,y),S=Sl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ol(i,x,`vertex`),n=Ol(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new xl(i,h),T=Il(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Cl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var iu=0,au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ou(e),t.set(e,n)),n}},ou=class{constructor(e){this.id=iu++,this.code=e,this.usedTimes=0}};function su(e){return e===1030||e===37490||e===36285}function cu(e,t,n,r,i,a){let o=new fn,s=new au,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ks[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),ee=h.isInstancedMesh===!0,N=h.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,L=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:N,batchingColor:N&&h._colorsTexture!==null,instancing:ee,instancingColor:ee&&h.instanceColor!==null,instancingMorph:ee&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&su(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:L,combine:i.combine,mapUv:P&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:De&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(P||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Rt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ks[t];n=ro.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ru(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function lu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function uu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function du(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||uu),r.length>1&&r.sort(t||du),i.length>1&&i.sort(t||du)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function pu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new fu,e.set(t,[i])):n>=r.length?(i=new fu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function mu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new Fn};break;case`SpotLight`:n={position:new U,direction:new U,color:new Fn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new Fn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new Fn,groundColor:new Fn};break;case`RectAreaLight`:n={color:new Fn,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function hu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var gu=0;function _u(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function vu(e){let t=new mu,n=hu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new en,o=new en;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(_u);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=gu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function yu(e){let t=new vu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function bu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new yu(e),t.set(n,[a])):r>=i.length?(a=new yu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var xu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Su=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cu=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],wu=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Tu=new en,Eu=new U,Du=new U;function Ou(e,t,n){let r=new _i,i=new H,o=new H,s=new Yt,l=new co,u=new lo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new oo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:xu,fragmentShader:Su}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new jr;y.setAttribute(`position`,new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ti(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Zt(i.x,i.y,{format:j,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new bi(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new ac(i.x),p.map.depthTexture=new xi(i.x,g)):(p.map=new Zt(i.x,i.y),p.map.depthTexture=new bi(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Eu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Eu),Du.copy(e.position),Du.add(Cu[t]),e.up.copy(wu[t]),e.lookAt(Du),e.updateMatrixWorld(),n.makeTranslation(-Eu.x,-Eu.y,-Eu.z),Tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Tu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Zt(i.x,i.y,{format:j,type:v}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ku(e,t){function n(){let t=!1,n=new Yt,r=null,i=new Yt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Fn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),ee=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),ee=N>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Yt().fromArray(ne),ae=new Yt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ce(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(ee&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function Se(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Ce(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Fe(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function z(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Fn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:z,uniformBlockBinding:Ie,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Le}}function Au(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Je(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Be:Rt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),P(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),te(t)}function P(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&F(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function F(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function te(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function oe(){let e=ne;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(t,n){let r=f.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ce(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ve(r,t,n);return}t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function le(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ve(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){ye(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let de={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},fe={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},pe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function me(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,pe[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function he(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=se(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&F(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=ge(r.start,n.width,4),c=ge(t.start,n.width,4);r.start<=i+1&&s===c&&ge(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function ve(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=he(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Rt.getPrimaries(Rt.workingColorSpace),r=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Me(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=A(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);me(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=M(n,t);if(n.isDepthTexture)u=j(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&_e(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=ws(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=ws(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Ne(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ye(t,n,r){if(n.image.length!==6)return;let i=he(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Rt.getPrimaries(Rt.workingColorSpace),s=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Me(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=A(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=M(n,h);me(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ne(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function be(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=A(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),je(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Ae(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);je(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,ee)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),me(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else I(n.depthTexture,0);let o=a.__webglTexture,s=Ae(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)je(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)je(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Se(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Se(n.__webglFramebuffer[0],t,0):Se(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),xe(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){let i=f.get(t);n!==void 0&&be(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Ce(t)}function Te(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,N);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&je(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=A(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),me(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)be(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else be(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),me(s,i),be(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),me(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)be(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else be(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&Ce(t)}function Ee(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(je(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(De.push(o),Oe.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(p.maxSamples,e.samples)}function je(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Rt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=I,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function ju(e,t){function n(n,r=``){let i,a=Rt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Mu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Si(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oo({vertexShader:Mu,fragmentShader:Nu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new qa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fu=class extends nt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Pu,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new H,k=null,A=null,j=new Xo;j.viewport=new Yt;let M=new Xo;M.viewport=new Yt;let ee=[j,M],N=new as,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function te(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}P=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Zt(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new bi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Zt(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new U,ae=new U;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=M.near=j.near=t,N.far=M.far=j.far=n,(P!==N.near||F!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,F=N.far),N.layers.mask=e.layers.mask|6,j.layers.mask=N.layers.mask&-5,M.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;se(N,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(N,j,M):N.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),I(e,N,i)};function I(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new Xo,o.layers.enable(n),o.viewport=new Yt,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Si,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ue=new Es;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Iu=new en,Lu=new Nt;Lu.set(-1,0,0,0,1,0,0,0,1);function Ru(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,no(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Iu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Lu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function zu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Bu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vu=null;function Hu(){return Vu===null&&(Vu=new ii(Bu,16,16,j,v),Vu.name=`DFG_LUT`,Vu.minFilter=c,Vu.magFilter=c,Vu.wrapS=r,Vu.wrapT=r,Vu.generateMipmaps=!1,Vu.needsUpdate=!0),Vu}var Uu=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([ee,M,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,O=null,k=null,j=[],N=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,ne=null,re=null,ie=null,ae=null;this._outputColorSpace=Re;let oe=0,se=0,I=null,ce=-1,le=null,ue=new Yt,de=new Yt,fe=null,pe=new Fn(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Yt(0,0,he,ge),xe=new Yt(0,0,he,ge),Se=!1,Ce=new _i,we=!1,Te=!1,Ee=new en,De=new U,Oe=new Yt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?_e:1}let L=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,R,Fe,z,Ie,Le,ze,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Qe,$e,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),V(`WebGLRenderer: `+e.message),e}function at(){Ne=new sc(L),Ne.init(),nt=new ju(L,Ne),Pe=new Is(L,Ne,e,nt),R=new ku(L,Ne),Pe.reversedDepthBuffer&&p&&R.buffers.depth.setReversed(!0),re=L.createFramebuffer(),ie=L.createFramebuffer(),ae=L.createFramebuffer(),Fe=new uc(L),z=new lu,Ie=new Au(L,Ne,R,z,Pe,nt,Fe),Le=new oc(F),ze=new Ds(L),rt=new Ps(L,ze),Be=new cc(L,ze,Fe,rt),Ve=new fc(L,Be,ze,rt,Fe),Qe=new dc(L,Pe,Ie),qe=new Ls(z),He=new cu(F,Le,Ne,Pe,rt,qe),Ue=new Ru(F,z),We=new pu,Ke=new bu(Ne),Xe=new Ns(F,Le,R,Ve,_,s),Je=new Ou(F,Ve,Pe),it=new zu(L,Fe,Pe,R),$e=new Fs(L,Ne,Fe),tt=new lc(L,Ne,Fe),Fe.programs=He.programs,F.capabilities=Pe,F.extensions=Ne,F.properties=z,F.renderLists=We,F.shadowMap=Je,F.state=R,F.info=Fe}S!==1009&&(P=new mc(S,t.width,t.height,o,r,i));let ot=new Fu(F,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){B(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}P.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Xe.dispose(),We.dispose(),Ke.dispose(),z.dispose(),Le.dispose(),Ve.dispose(),rt.dispose(),it.dispose(),He.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Ze(`WebGLRenderer: Context Lost.`),te=!0}function ct(){Ze(`WebGLRenderer: Context Restored.`),te=!1;let e=Fe.autoReset,t=Je.enabled,n=Je.autoUpdate,r=Je.needsUpdate,i=Je.type;at(),Fe.autoReset=e,Je.enabled=t,Je.autoUpdate=n,Je.needsUpdate=r,Je.type=i}function lt(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),z.remove(e)}function ft(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=ze.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){ne!==null&&e.isNodeMaterial&&ne.setObject(r,e),we===!0&&qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ne!==null&&ne.renderStart(e,t,n),k=Ke.get(n),k.init(t),N.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),ne!==null&&ne.updateLights(k.state.lightsArray),Te=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Te),we===!0&&qe.setGlobalState(this.clippingPlanes,t),ne!==null&&Je.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),k=N.pop(),ne!==null&&ne.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new Es;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=P!==null&&(I===null||n)&&P.begin(F,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,I),k=Ke.get(e,N.length),k.init(t),k.state.textureUnits=Ie.getTextureUnits(),N.push(k),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,Ge,t.reversedDepth),Te=this.localClippingEnabled,we=qe.init(this.clippingPlanes,Te),O=We.get(e,j.length),O.init(),j.push(O),ot.enabled===!0&&ot.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,F.sortObjects)}yt(e,t,0,F.sortObjects),O.finish(),ne!==null&&ne.updateLights(k.state.lightsArray),F.sortObjects===!0&&O.sort(ve,ye),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Xe.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&qe.beginShadows();let i=k.state.shadowsArray;if(Je.render(i,e,t),we===!0&&qe.endShadows(),(r&&P.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Ae&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(O,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Ae&&Xe.render(e),bt(O,e,t)}I!==null&&se===0&&(Ie.updateMultisampleRenderTarget(I),Ie.updateRenderTargetMipmap(I)),r&&P.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),rt.resetDefaultState(),ce=-1,le=null,N.pop(),N.length>0?(k=N[N.length-1],Ie.setTextureUnits(k.state.textureUnits),we===!0&&qe.setGlobalState(F.clippingPlanes,k.state.camera)):k=null,j.pop(),O=j.length>0?j[j.length-1]:null,ne!==null&&ne.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Ve.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&O.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),we===!0&&qe.setGlobalState(F.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Zt(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),c=F.getActiveCubeFace(),l=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(pe),me=F.getClearAlpha(),me<1&&F.setClearColor(16777215,.5),F.clear(),Ae&&Xe.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),we===!0&&qe.setGlobalState(F.clippingPlanes,r),St(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}F.setRenderTarget(s,c,l),F.setClearColor(pe,me),p!==void 0&&(r.viewport=p),F.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){ne!==null&&i.isNodeMaterial&&ne.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=ke);let r=z.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=He.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,F),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=qe.uniform),Et(e,s),r.needsLights=H(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=xl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=ke),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Rt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=k.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===ce;qe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==qe.numPlanes||v.numIntersection!==qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=Dt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(L,`projectionMatrix`,e.projectionMatrix),T.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(L,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&T.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&T.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&T.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){T.setOptional(L,i,`bindMatrix`),T.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(L,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(T.setOptional(L,i,`batchingTexture`),T.setValue(L,`batchingTexture`,i._matricesTexture,Ie),T.setOptional(L,i,`batchingIdTexture`),T.setValue(L,`batchingIdTexture`,i._indirectTexture,Ie),T.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(L,`batchingColorTexture`,i._colorsTexture,Ie));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Hu()),C){if(T.setValue(L,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&kt(E,w),a&&r.fog===!0&&Ue.refreshFogUniforms(E,a),Ue.refreshMaterialUniforms(E,r,_e,ge,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}xl.upload(L,Tt(v),E,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(xl.upload(L,Tt(v),E,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(L,`center`,i.center),T.setValue(L,`modelViewMatrix`,i.modelViewMatrix),T.setValue(L,`normalMatrix`,i.normalMatrix),T.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function kt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function H(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),ce=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=re),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function At(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await et(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ie),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,R.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}},Wu=42,Gu=()=>(Wu=Wu*1664525+1013904223>>>0,Wu/4294967296);function Ku(e){let t=document.createElement(`canvas`);t.width=t.height=512;let r=t.getContext(`2d`);if(r.fillStyle=e===`wood`?`#ccad7d`:`#a8a59d`,r.fillRect(0,0,512,512),e===`wood`)for(let e=0;e<8;e++){r.fillStyle=`rgba(${Gu()>.5?`255,238,199`:`92,53,20`},${.03+Gu()*.11})`,r.fillRect(e*64,0,64,512),r.fillStyle=`#96754f`,r.fillRect(e*64,0,1,512),r.fillRect(e*64,Math.floor(Gu()*510),64,1);for(let t=0;t<80;t++){let t=e*64+Gu()*63;r.strokeStyle=`rgba(99,61,25,${Gu()*.18})`,r.lineWidth=.4+Gu()*.6,r.beginPath(),r.moveTo(t,0),r.bezierCurveTo(t+Gu()*7,160,t-Gu()*7,340,t,512),r.stroke()}let t=e*64+12+Gu()*40,n=Gu()*512;for(let e=1;e<5;e++)r.strokeStyle=`rgba(90,53,24,${.3/e})`,r.beginPath(),r.ellipse(t,n,e*1.7,e*5,0,0,Math.PI*2),r.stroke()}else for(let e=0;e<512;e+=2)for(let t=0;t<512;t+=2)r.fillStyle=`rgba(${Gu()>.5?`255,255,255`:`0,0,0`},${Gu()*.16})`,r.fillRect(t,e,1,2);let i=new yi(t);return i.wrapS=i.wrapT=n,i.colorSpace=Re,i.anisotropy=8,i}var qu=Ku(`wood`);qu.repeat.set(2.5,2);var Ju=Ku(`fabric`);Ju.repeat.set(3,3);var Yu=(e,t=.75)=>new G({color:e,roughness:t}),q={wall:Yu(`#f2f0e9`),white:Yu(`#faf9f5`),trim:Yu(`#e4e2d9`),floor:new G({map:qu,roughness:.68,bumpMap:qu,bumpScale:.012}),oak:new G({map:qu,color:`#edcf9a`,roughness:.52}),black:Yu(`#202626`,.55),metal:Yu(`#414746`,.38),sofa:new G({color:`#dddedb`,map:Ju,roughness:.95}),rug:new G({color:`#565e56`,map:Ju,roughness:1}),jute:new G({color:`#d4c3a4`,map:Ju,roughness:1}),green:Yu(`#4a6948`),soil:Yu(`#302821`),bark:Yu(`#625043`),screen:new G({color:`#111d23`,roughness:.16,metalness:.3}),glass:new G({color:`#b0d3dd`,emissive:`#9cc1d3`,emissiveIntensity:.2,roughness:.23,metalness:.1}),light:new G({color:`#fff5d7`,emissive:`#ffebbd`,emissiveIntensity:2})},Xu=[`#788378`,`#e6dfcf`,`#b8796f`,`#b9b7aa`].map(e=>new G({color:e,map:Ju,roughness:1})),Zu={minX:0,maxX:7.758,minZ:0,maxZ:6.205,height:3.05},Qu={minX:0,maxX:4.835,minZ:6.655,maxZ:11.017,height:2.9},$u={minX:0,maxX:4.835,minZ:11.217,maxZ:14.817,height:2.9},ed={minX:5.035,maxX:6.135,minZ:6.405,maxZ:13.305,height:2.55},td={minX:5.035,maxX:6.135,minZ:6.205,maxZ:6.405},nd={minX:4.835,maxX:5.035,minZ:7.405,maxZ:8.305},J={height:2.55,left:{minX:6.335,maxX:7.758,minZ:6.655,maxZ:8.455},foyer:{minX:6.335,maxX:7.958,minZ:8.655,maxZ:10.155},right:{minX:6.335,maxX:7.758,minZ:10.355,maxZ:12.155},entrance:{minX:6.135,maxX:6.335,minZ:9.155,maxZ:10.055},leftDoor:{minX:6.485,maxX:7.235,minZ:8.455,maxZ:8.655},rightDoor:{minX:6.485,maxX:7.235,minZ:10.155,maxZ:10.355}},rd={minX:5.035,maxX:11.602,minZ:13.505,maxZ:16.605,height:2.85},id={minX:5.035,maxX:6.135,minZ:13.305,maxZ:13.505},ad={minX:-.272,maxX:4.835,minZ:15.017,maxZ:16.605,height:2.5},od={minX:4.835,maxX:5.035,minZ:15.217,maxZ:16.405},sd={minX:-.5,maxX:17.258,minZ:17.405,maxZ:24.375,height:4.65},cd={minX:1.5,maxX:2.5,minZ:ad.maxZ,maxZ:sd.minZ},Y={minX:-28.038,maxX:-.95,minZ:17.693,maxZ:24.375,height:3.4},ld={minX:Y.maxX,maxX:sd.minX,minZ:17.95,maxZ:19.15},ud={minX:-17.35,maxX:-12.723,minZ:14.817,maxZ:17.493,height:3.4},dd={minX:-15.9,maxX:-14.8,minZ:17.493,maxZ:Y.minZ},fd={minX:-12.523,maxX:-4.3,minZ:14.817,maxZ:Y.minZ,height:3.4},pd={minX:fd.minX,maxX:fd.maxX,minZ:Y.minZ-.2,maxZ:Y.minZ+.2},md=(e,t,n)=>t>=e.minX&&t<=e.maxX&&n>=e.minZ&&n<=e.maxZ;function hd(e,t){let n=[{bounds:Zu,name:`Space Invaders · MØDE 4`},{bounds:Qu,name:`Minecraft · MØDE 3`},{bounds:rd,name:`Køkken`},{bounds:ad,name:`Lille gang ved køkkenet`},{bounds:sd,name:`Kontoret`},{bounds:cd,name:`Kontoret · indgang`},{bounds:Y,name:`Day21`},{bounds:ld,name:`Day21 · indgang`},{bounds:ud,name:`Tetris`},{bounds:dd,name:`Tetris`},{bounds:fd,name:`Day21 · sofakrog`},{bounds:J.left,name:`Venstre toilet`},{bounds:J.right,name:`Højre toilet`},{bounds:J.foyer,name:`Toiletentré`}];for(let{bounds:r,name:i}of n)if(md(r,e,t))return i;return`Toiletgangen`}var gd=(e,t)=>({x:14+e*14,y:14+t*14}),_d={office:{minX:-3.8,maxX:3.8,minZ:-3.5,maxZ:3.5,height:3.05},minecraft:{minX:-5.75,maxX:.05,minZ:6.7,maxZ:10.9,height:2.9},kitchen:{minX:.25,maxX:6.05,minZ:12.7,maxZ:16.3,height:2.85}},vd=(e,t)=>{let n=(t.maxX-t.minX)/(e.maxX-e.minX),r=(t.maxZ-t.minZ)/(e.maxZ-e.minZ);return{sx:n,sz:r,x:t.minX-e.minX*n,z:t.minZ-e.minZ*r}},yd={office:vd(_d.office,Zu),minecraft:vd(_d.minecraft,Qu),kitchen:vd(_d.kitchen,rd)};function bd(e,t,n){let r=yd[e];return{x:t*r.sx+r.x,z:n*r.sz+r.z}}function xd(e,t,n){let r=yd[e];return{x:(t-r.x)/r.sx,z:(n-r.z)/r.sz}}function Sd(e,t){let n=bd(e,t[0],t[2]),r=bd(e,t[1],t[3]);return[n.x,r.x,n.z,r.z]}var Cd=(e,t)=>{let n=xd(e,t.minX,t.minZ),r=xd(e,t.maxX,t.maxZ);return{minX:n.x,maxX:r.x,minZ:n.z,maxZ:r.z}},wd={minecraft:Cd(`minecraft`,nd),kitchen:Cd(`kitchen`,id),kitchenNorth:Cd(`kitchen`,od)},Td=new U;function Ed(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Td.copy(t),Td[r]=0,Td.normalize();let l=.5*o/(o+s),u=1-Td.angleTo(e)/c;return Math.sign(Td[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Dd=class e extends Ci{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new U,c=new U,l=new U(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new U,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Ed(m,c,`z`,`y`,i,n),f[a+1]=1-Ed(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Ed(m,c,`z`,`y`,i,n),f[a+1]=1-Ed(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Ed(m,c,`x`,`z`,i,e),f[a+1]=Ed(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Ed(m,c,`x`,`z`,i,e),f[a+1]=1-Ed(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Ed(m,c,`x`,`y`,i,e),f[a+1]=1-Ed(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Ed(m,c,`x`,`y`,i,e),f[a+1]=1-Ed(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function X(e,t,n,r,i,a){let o=new ti(t,n);return o.position.set(r,i,a),o.castShadow=!0,o.receiveShadow=!0,e.add(o),o}function Z(e,t,n,r,i,a,o,s,c=0){return X(e,c?new Dd(t,n,r,3,c):new Ci(t,n,r),s,i,a,o)}function Q(e,t,n,r,i,a,o,s){return X(e,new Ti(t,n,r,t>1?64:28),s,i,a,o)}function $(e,t,n,r,i=q.metal){let a=new U(...t),o=new U(...n),s=Q(e,r,r,a.distanceTo(o),0,0,0,i);return s.position.copy(a.add(o).multiplyScalar(.5)),s.quaternion.setFromUnitVectors(new U(0,1,0),new U(...n).sub(new U(...t)).normalize()),s}function Od(e,t,n=q.floor){let{minX:r,maxX:i,minZ:a,maxZ:o}=t;Z(e,i-r,.22,o-a,(r+i)/2,-.14,(a+o)/2,q.trim),Z(e,i-r,.05,o-a,(r+i)/2,-.005,(a+o)/2,n)}function kd(e,t,n,r,i,a,o,s,c){let l=new W;e.add(l),t.push({group:l,axis:n,position:r,inside:o});let u=(e,t,i=0)=>{t<=e||(Z(l,n===`x`?.2:t-e,s-i,n===`z`?.2:t-e,n===`x`?r:(e+t)/2,(s+i)/2,n===`z`?r:(e+t)/2,q.wall),i||Z(l,n===`x`?.23:t-e,.1,n===`z`?.23:t-e,n===`x`?r:(e+t)/2,.05,n===`z`?r:(e+t)/2,q.white))};if(c){u(i,c[0]),u(c[1],a),u(c[0],c[1],2.25);for(let e of c)Z(l,n===`x`?.24:.045,2.27,n===`z`?.24:.045,n===`x`?r:e,1.135,n===`z`?r:e,q.white)}else u(i,a);return l}function Ad(e,t,n){let r=new W;return e.add(r),Z(r,t.maxX-t.minX,.1,t.maxZ-t.minZ,(t.minX+t.maxX)/2,n+.05,(t.minZ+t.maxZ)/2,q.wall),r.visible=!1,r}function jd(e,t,n){let r=document.createElement(`canvas`);r.width=1024,r.height=384;let i=r.getContext(`2d`);i.fillStyle=`#6b7165`,i.textAlign=`center`,n.forEach((e,t)=>{i.font=`${t?36:58}px sans-serif`,i.fillText(e,512,140+t*74)});let a=new yi(r);a.colorSpace=Re;let o=new ti(new qa(3.7,1.39),new Ur({map:a,transparent:!0,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.set((t.minX+t.maxX)/2,.025,(t.minZ+t.maxZ)/2),e.add(o)}var Md={cabinet:{minX:2.6,maxX:4.65,minZ:15.04,maxZ:15.49},coats:{minX:.85,maxX:2.35,minZ:15.06,maxZ:15.61},lamp:{minX:2.24,maxX:2.6,minZ:15.16,maxZ:15.52},banner:{minX:-.18,maxX:.08,minZ:15.46,maxZ:16.3},vase:{minX:4.37,maxX:4.65,minZ:16.28,maxZ:16.56}},Nd={x:4.5,z:15.95,yaw:-Math.PI/2,pitch:-.08},Pd={width:1.4,depth:.7},Fd=.7,Id=[{x:1.8,z:22.25,rows:2},{x:5.8,z:22.25,rows:2},{x:9.8,z:22.25,rows:2},{x:13.6,z:22.25,rows:1},{x:5.8,z:18.6,rows:1},{x:9.8,z:18.6,rows:1},{x:13.6,z:18.6,rows:1}],Ld=Id.flatMap((e,t)=>Array.from({length:e.rows},(n,r)=>[-1,1].map(n=>({x:e.x+n*(Pd.depth+.01)/2,z:e.z+(r-(e.rows-1)/2)*(Pd.width+.02),rotation:n*Math.PI/2,side:n,islandIndex:t}))).flat()),Rd=[3.8,7.8,11.8],zd=[{x:3.95,z:19.5,size:1.05},{x:7.9,z:19.45,size:.75},{x:11.9,z:19.45,size:.8},{x:.1,z:23.5,size:.8},{x:16.7,z:23.25,size:.65}],Bd=[{x:15.95,z:23.88,rotation:Math.PI,width:2.05},{x:16.78,z:22.03,rotation:-Math.PI/2,width:2.3}],Vd=[...Ld.flatMap(e=>[[e.x-Pd.depth/2,e.x+Pd.depth/2,e.z-Pd.width/2,e.z+Pd.width/2],[e.x+e.side*Fd-.34,e.x+e.side*Fd+.34,e.z-.34,e.z+.34]]),...Rd.flatMap(e=>[[e-.16,e+.16,17.5,19.8],[e-.16,e+.16,22.95,24.3]]),...[-.38,17.138].flatMap(e=>[17.65,21.35,23.7].map(t=>[e-.1,e+.1,t-.1,t+.1])),...zd.map(e=>[e.x-.28*e.size,e.x+.28*e.size,e.z-.28*e.size,e.z+.28*e.size]),[14.925,16.975,23.43,24.33],[16.33,17.23,20.88,23.18],[15,15.6,21.65,23.45],[14.55,15.6,20.95,21.75],[16.87,17.258,18,20.1],[-.5,-.08,22,23.25],[2.52,2.58,17.405,18.25]],Hd={x:2,z:20.4,yaw:Math.PI/2,pitch:-.035},Ud=[-3.1,-6.9,-10.7,-14.5,-18.3,-22.1,-25.9],Wd=e=>e>-17.35&&e<-4.3?14.95:17.82,Gd=[-9,-12.8,-16.6].flatMap((e,t)=>[-1,1].map(n=>({x:e+n*(Pd.depth+.01)/2,z:22.15,rotation:n*Math.PI/2,side:n,islandIndex:t}))),Kd={minX:-6.5,maxX:Y.maxX,minZ:20.563,maxZ:Y.maxZ},qd={minX:-4.9,maxX:-3.8},Jd={minX:-16.3,maxX:-13.3,minZ:19.25,maxZ:20.5},Yd=[{x:-6.3,z:20,size:.75},{x:-12.8,z:20,size:.6},{x:-23.8,z:20.1,size:.7},{x:-26.9,z:18.7,size:.65},{x:-12,z:15.6,size:.65},{x:-8,z:15.3,size:.65},{x:-2,z:23.5,size:.6}],Xd=[{x:-3.5,z:22.35,width:2.4,depth:.95,rotation:0,chairs:3,white:!0},{x:-26,z:22.25,width:2.1,depth:.85,rotation:Math.PI/2,chairs:3,white:!0},{x:-15,z:16.1,width:1.8,depth:.8,rotation:0,chairs:2,white:!1}],Zd=[...Gd.flatMap(e=>[[e.x-Pd.depth/2,e.x+Pd.depth/2,e.z-Pd.width/2,e.z+Pd.width/2],[e.x+e.side*Fd-.34,e.x+e.side*Fd+.34,e.z-.34,e.z+.34]]),[-6.54,-6.46,20.563,24.375],[-6.5,qd.minX,20.52,20.6],[qd.maxX,-.95,20.52,20.6],[qd.minX-.03,qd.minX+.03,19.6,20.563],[-1.03,-.97,19.15,20.25],[-6.4,-5.9,21.83,22.67],[-17.85,-16.75,17.92,18.2],...Ud.flatMap(e=>[[e-.15,e+.15,20.4,21.65],[e-.15,e+.15,22.85,24.3],[e-1.1,e+.15,Wd(e)-.13,Wd(e)+.22]]),[Jd.minX,Jd.maxX,Jd.minZ,Jd.maxZ],...Yd.map(e=>[e.x-.28*e.size,e.x+.28*e.size,e.z-.28*e.size,e.z+.28*e.size]),...Xd.map(e=>{let t=e.rotation?e.depth+1.1:e.width,n=e.rotation?e.width:e.depth+1.1;return[e.x-t/2,e.x+t/2,e.z-n/2,e.z+n/2]}),[-21.9,-21,21.3,23.4],[-23.35,-22.55,21.8,22.8],[-28.038,-27.38,17.9,20.2],[-25.6,-22.6,17.69,18.15],[-11.9,-9.8,15.15,16.05],[-11.3,-10.3,16.65,17.4],[-9.5,-8.6,14.817,16.1],[-3,-2.4,17.8,18.4]],Qd={x:-1.85,z:18.8,yaw:-Math.PI/2,pitch:-.055},$d={x:-13.6,z:16.155,yaw:Math.PI/2,pitch:-.15},ef={x:-3.9,z:23.85,yaw:0,pitch:-.22},tf=[7.215,7.255,9.485,10.275],nf=[...Vd,...Zd,...Object.values(Md).map(e=>[e.minX,e.maxX,e.minZ,e.maxZ]),...[[-3.02,-.57,-3.02,3.05],[2.55,3.75,-2.27,1.99],[1.58,2.65,-2.29,-1.22],[1.17,2.43,-.64,.54],[.5,1.18,-3.18,-2.46],[-.81,.18,2.54,3.18],[.13,.63,2.68,3.18],[2.34,3.74,2.12,3.16]].map(e=>Sd(`office`,e)),...[[-4.9,-.82,7.81,10.09],[-4.3,-2.7,6.7,7.23],[-5.65,-4.53,6.75,8.15],[-.24,.04,10.5,10.85],[-5.75,-5.58,8.5,9.7]].map(e=>Sd(`minecraft`,e)),[4.1,4.84,nd.minZ-.025,nd.minZ+.025],...[[1.7,5.88,12.7,13.4],[.75,1.55,16.17,16.8],[1.85,2.95,15.07,16.12],[3.92,5.02,15.07,16.12],[3.02,3.84,15.13,15.95],[.32,1.04,14.09,14.81],[.3,.65,15.9,16.25],[5.52,6.02,15.35,16.18],[5.9,6.05,14.95,15.75]].map(e=>Sd(`kitchen`,e)),[6.09,6.14,5.205,6.305],[5.035,5.18,10.36,10.94],[6.075,6.125,8.255,9.155],[7.22,7.88,8.67,9.16],[7.8,7.96,9.12,9.78],[6.55,7.13,6.66,7.57],[6.65,7.23,11.24,12.15],[7.26,7.76,7.52,8.18],[7.26,7.76,10.72,11.38],[6.46,6.51,7.805,8.555],tf,[7.61,7.76,6.765,7.215],[6.335,6.49,11.525,11.975]],rf=(e,t,n,r,i)=>t>=e.minX+r&&t<=e.maxX-r&&n>=e.minZ+i&&n<=e.maxZ-i,af=[Zu,ed,Qu,rd,ad,sd,Y,ud,fd,J.foyer,J.left,J.right],of=[td,id,cd,dd,pd,J.leftDoor,J.rightDoor],sf=[nd,J.entrance,od,ld];function cf(e,t,n=.17){if(!Number.isFinite(e)||!Number.isFinite(t))return!1;let r=af.some(r=>rf(r,e,t,n,n)),i=of.some(r=>rf(r,e,t,n,-n)),a=sf.some(r=>rf(r,e,t,-n,n));return!r&&!i&&!a?!1:!nf.some(([r,i,a,o])=>e>r-n&&e<i+n&&t>a-n&&t<o+n)}var lf=new Map;function uf(e){let t=Math.max(0,Math.min(1,e)),n=(1-t*t*(3-2*t))*Math.PI/2,r=J.rightDoor,i=r.maxX-r.minX,a=(r.minZ+r.maxZ)/2,o=Math.cos(n)*i,s=Math.sin(n)*i;tf.splice(0,4,r.maxX-o-.02,r.maxX+.02,a-s-.02,a+.02),lf.clear()}function df(e,t,n){let r=0,i=1;for(let a=0;a<2;a++){let o=a?e.z:e.x,s=(a?t.z:t.x)-o,c=n[a*2],l=n[a*2+1];if(Math.abs(s)<1e-10){if(o<c||o>l)return null;continue}let u=(c-o)/s,d=(l-o)/s;if(r=Math.max(r,Math.min(u,d)),i=Math.min(i,Math.max(u,d)),i<r)return null}return[r,i]}function ff(e,t,n=.17){if(![e.x,e.z,t.x,t.z].every(Number.isFinite))return!1;if(!lf.has(n)){let e=(e,t,n)=>[e.minX+t,e.maxX-t,e.minZ+n,e.maxZ-n];lf.set(n,{floor:[...af.map(t=>e(t,n,n)),...of.map(t=>e(t,n,-n)),...sf.map(t=>e(t,-n,n))],solid:nf.map(([e,t,r,i])=>[e-n,t+n,r-n,i+n])})}let{floor:r,solid:i}=lf.get(n),a=[];for(let n of r){let r=df(e,t,n);r&&a.push(r)}a.sort((e,t)=>e[0]-t[0]);let o=0;for(let[e,t]of a){if(e>o+1e-9)return!1;o=Math.max(o,t)}if(o<1-1e-9)return!1;for(let n of i){if(Math.max(e.x,t.x)<=n[0]||Math.min(e.x,t.x)>=n[1]||Math.max(e.z,t.z)<=n[2]||Math.min(e.z,t.z)>=n[3])continue;let r=df(e,t,n);if(r&&r[1]-r[0]>1e-9)return!1}return!0}function pf(e,t,n,r){let i=Math.max(1,Math.ceil(Math.hypot(n,r)/.08));for(let a=0;a<i;a++)cf(e+n/i,t)&&(e+=n/i),cf(e,t+r/i)&&(t+=r/i);return{x:e,z:t}}var mf=new G({color:`#fffdf3`,roughness:.2}),hf=new G({color:`#bac4c4`,metalness:.7,roughness:.22}),gf=new G({color:`#b89950`,metalness:.65,roughness:.3}),_f=new G({color:`#484843`,roughness:.78}),vf=new G({color:`#77756a`,roughness:1}),yf=new G({color:`#41494e`,roughness:.6}),bf=new G({color:`#bbcbd0`,metalness:.25,roughness:.08});function xf(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#ccd6dc`,t.fillRect(0,0,512,512),t.fillStyle=`#697477`,t.fillRect(172,65,40,110),t.fillStyle=`#929c9e`,t.fillRect(0,140,512,105);for(let e=145;e<245;e+=12)t.fillStyle=`#bac0bd`,t.fillRect(0,e,512,2);let n=(e,n,r,i)=>{t.fillStyle=`#8e8570`,t.fillRect(e,n,r,i);for(let a=n;a<n+i;a+=18)for(let i=e-(a-n)/18%2*22;i<e+r;i+=44)t.fillStyle=[`#caba85`,`#d3c38e`,`#beaf7d`][Math.abs(Math.floor(i/44+a/18))%3],t.fillRect(Math.max(e,i)+1,a+1,Math.min(42,e+r-Math.max(e,i)),16)};n(0,245,512,267);for(let e of[67,239])t.fillStyle=`#e8e4ce`,t.fillRect(e-5,291,70,155),t.fillStyle=`#394b4d`,t.fillRect(e,296,60,145),t.fillStyle=`#748582`,t.fillRect(e+4,300,52,3);n(390,0,122,512);let r=new yi(e);return r.colorSpace=Re,new Ur({map:r,toneMapped:!1})}function Sf(e,t){let n=t.maxX-t.minX,r=t.maxZ-t.minZ,i=(t.minX+t.maxX)/2,a=(t.minZ+t.maxZ)/2;Z(e,n+.16,.22,r+.16,i,-.14,a,q.trim),Z(e,n,.05,r,i,-.005,a,_f);for(let n=t.minX+.6;n<t.maxX;n+=.6)Z(e,.008,.002,r,n,.021,a,vf);for(let r=t.minZ+.6;r<t.maxZ;r+=.6)Z(e,n,.002,.008,i,.021,r,vf)}function Cf(e,t,n,r){let i=new W;i.position.set(t,0,n),i.rotation.y=r,e.add(i),Z(i,.66,.05,.49,0,.82,0,q.black,.012),Z(i,.62,.035,.44,0,.855,0,mf,.016);for(let e of[-1,1]){Z(i,.025,.15,.46,e*.31,.91,0,mf,.009),Z(i,.61,.15,.025,0,.91,e*.22,mf,.009);for(let t of[-1,1])$(i,[e*.3,.8,t*.21],[e*.3,.025,t*.21],.011,q.black);$(i,[e*.3,.2,-.21],[e*.3,.2,.21],.009,q.black)}$(i,[-.3,.2,-.21],[.3,.2,-.21],.009,q.black),Q(i,.035,.035,.006,0,.876,.035,hf),$(i,[0,.83,.035],[0,.54,.035],.026,hf),$(i,[0,.54,.035],[0,.54,-.25],.024,hf),X(i,new Xa(new Li([new U(0,.97,-.18),new U(0,1.2,-.18),new U(0,1.26,-.07),new U(0,1.17,.04)]),24,.012,8,!1),q.black,0,0,0),$(i,[-.07,1.02,-.18],[.07,1.02,-.18],.012,q.black),Z(i,.67,.85,.035,0,1.69,-.245,q.metal,.009),Z(i,.64,.82,.008,0,1.69,-.222,bf),Q(i,.035,.043,.13,-.23,1.05,-.15,Xu[2]),$(i,[-.23,1.12,-.15],[-.23,1.17,-.15],.008,q.black),$(i,[-.23,1.17,-.15],[-.19,1.17,-.15],.008,q.black)}function wf(e,t,n,r,i=.75){let a=new W;a.position.set(t,0,n),a.rotation.y=r,e.add(a),Z(a,i,.67,.11,0,.48,0,q.white,.018);for(let e=0;e<15;e++)Z(a,.018,.58,.014,-i*.44+e*i*.88/14,.48,.063,q.trim);for(let e of[-1,1])$(a,[e*i*.47,.16,0],[e*i*.47,.07,-.06],.014,hf);$(a,[i/2,.72,0],[i/2+.09,.72,0],.035,mf)}function Tf(e,t,n,r){let i=new W;i.position.set(t,0,n),i.rotation.y=r,e.add(i),$(i,[0,1.85,-.015],[0,1.85,.04],.022,hf);let a=X(i,new Ja(1,16,12),q.white,0,1.43,.05);a.scale.set(.2,.43,.045),a.rotation.z=-.08;for(let e of[-.08,.035,.11])X(i,new Ja(1,8,10),q.white,e,1.42,.076).scale.set(.02,.35,.018)}function Ef(e,t,n,r){let i=new W;i.position.set(t,0,n),i.rotation.y=r,e.add(i);let a=Q(i,.13,.19,.28,0,.17,.04,mf);a.scale.z=1.4;let o=X(i,new Ka([[0,.23],[.13,.23],[.24,.3],[.285,.41],[.28,.45],[.225,.45],[.2,.36],[.1,.29],[0,.29]].map(([e,t])=>new H(e,t)),48),mf,0,0,.1);o.scale.z=1.22;let s=Q(i,.105,.105,.004,0,.296,.1,new G({color:`#becabd`,roughness:.12}));s.scale.z=1.3;let c=new ia;c.absellipse(0,0,.29,.37,0,Math.PI*2,!1,0);let l=new ra;l.absellipse(0,0,.205,.275,0,Math.PI*2,!0,0),c.holes.push(l);let u=X(i,new Ha(c,{depth:.025,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:2,steps:1,curveSegments:32}),mf,0,.465,.1);u.rotation.x=-Math.PI/2,Z(i,.57,.56,.21,0,.58,-.26,mf,.045),Z(i,.59,.055,.23,0,.875,-.26,mf,.025),Q(i,.03,.03,.01,.08,.909,-.26,hf);let d=X(i,new Ja(1,32,24),mf,0,.81,-.15);d.scale.set(.285,.355,.025),d.rotation.x=-.08,Q(i,.055,.065,.28,-.43,.16,-.17,q.black),$(i,[-.43,.28,-.17],[-.43,.48,-.17],.009,q.black);let f=Q(i,.067,.067,.12,.45,.81,-.05,q.white);f.rotation.z=Math.PI/2,$(i,[.38,.81,-.05],[.53,.81,-.05],.01,q.black),Z(i,.11,.12,.009,.45,.72,.01,q.white)}function Df(e){let t=new W;e.add(t);let n=[],r=new W;t.add(r);let i=J.height,a;for(let e of[J.left,J.foyer,J.right]){Sf(t,e),r.add(Ad(t,e,i));let n=new Qo(`#fff4df`,1.4,4,2);n.position.set((e.minX+e.maxX)/2,2.35,(e.minZ+e.maxZ)/2),t.add(n),Q(r,.13,.13,.045,n.position.x,2.51,n.position.z,q.light)}for(let e of r.children)e.visible=!0;for(let e of[J.entrance,J.leftDoor,J.rightDoor])Sf(t,e);kd(t,n,`z`,J.left.minZ-.1,6.235,7.858,1,i),kd(t,n,`z`,J.right.maxZ+.1,6.235,7.858,-1,i);for(let e of[J.left,J.right])kd(t,n,`x`,e.maxX+.1,e.minZ-.1,e.maxZ+.1,-1,i);for(let[e,r]of[[J.leftDoor,-1],[J.rightDoor,1]]){let o=(e.minZ+e.maxZ)/2;kd(t,n,`z`,o,6.235,8.058,r,i,[e.minX,e.maxX]);let s=new W;t.add(s),s.position.set(e.minX,0,o),s.rotation.y=Math.PI/2,e===J.rightDoor&&(a=s,s.position.x=e.maxX,s.name=`Davids toiletdør`),Z(s,.75,2.16,.04,.375,1.08,0,yf,.006),$(s,[.55,1.02,-.04],[.68,1.02,-.04],.016,gf)}let o=new W;t.add(o);let s=J.foyer.maxX+.1,c=(J.foyer.minZ+J.foyer.maxZ)/2;n.push({group:o,axis:`x`,position:s,inside:-1}),Z(o,.2,1.04,1.5,s,.52,c,q.wall),Z(o,.2,.14,1.5,s,2.48,c,q.wall),Z(o,.07,1.37,1.4,s,1.725,c,q.glass);let l=X(o,new qa(1.4,1.37),xf(),s-.11,1.725,c);l.rotation.y=-Math.PI/2,l.castShadow=!1;for(let e of[c-.72,c,c+.72])Z(o,.15,1.46,.045,s-.08,1.73,e,q.white);for(let e of[1.02,1.73,2.44])Z(o,.15,.055,1.5,s-.08,e,c,q.white);return Z(o,.3,.055,1.5,s-.14,1.015,c,q.white),wf(t,7.88,9.45,-Math.PI/2,.65),Cf(t,7.55,8.915,0),Tf(t,7.65,10.1,Math.PI),Ef(t,6.84,7.06,0),Ef(t,6.94,11.75,Math.PI),Cf(t,7.51,11.05,-Math.PI/2),Cf(t,7.51,7.85,-Math.PI/2),wf(t,7.67,6.99,-Math.PI/2,.45),wf(t,6.42,11.75,Math.PI/2,.45),r.visible=!1,uf(0),{walls:n,roof:r,updateDoor:e=>{let t=(1+kt.smoothstep(e,0,1))*Math.PI/2;return a.rotation.y!==t&&(a.rotation.y=t,uf(e),!0)}}}function Of(e,t,n,r,i,a){let o=[],s=[];for(let e=0;e<=12;e++){let t=e/12,i=Math.sin(t*Math.PI)**.75*r;for(let e of[-1,0,1])o.push(e*i,t*n,Math.sin(t*Math.PI*.8)*n*.2+Math.abs(e)*i*.3)}for(let e=0;e<12;e++)for(let t=0;t<2;t++){let n=e*3+t;s.push(n,n+3,n+1,n+1,n+3,n+4)}let c=new jr;c.setAttribute(`position`,new yr(o,3)),c.setIndex(s),c.computeVertexNormals();let l=q.green.clone();l.color.setHSL(.25+Gu()*.05,.3+Gu()*.15,.17+Gu()*.07),l.side=2;let u=X(e,c,l,...t.toArray());return u.rotation.set(a,i,.2),u}function kf(e,t,n,r=1){let i=new W;i.position.set(t,0,n),i.scale.setScalar(r),e.add(i),Q(i,.3,.245,.55,0,.295,0,q.black),Q(i,.27,.27,.02,0,.56,0,q.soil);for(let e=0;e<10;e++){let t=e*2.4,n=.7+Gu()*.7,r=.15+Gu()*.45,a=new U(Math.sin(t)*r,.5+n,Math.cos(t)*r);$(i,[0,.5,0],a.toArray(),.012,q.green),Of(i,a,.55+Gu()*.35,.14+Gu()*.09,t,.45+Gu()*.7)}}var Af=_d.minecraft;function jf(){let e=document.createElement(`canvas`);e.width=512,e.height=1024;let t=e.getContext(`2d`),n=[`#c69a65`,`#d3ae7b`,`#dec092`,`#cdaa75`,`#d9b585`];for(let e=-4;e<22;e++)for(let r of[-1,1]){let i=e*56,a=r===-1?0:512;t.save(),t.beginPath(),t.moveTo(a,i),t.lineTo(256,i+128),t.lineTo(256,i+184),t.lineTo(a,i+56),t.closePath(),t.clip(),t.fillStyle=n[(e+10+r)%n.length],t.fillRect(0,i,512,190),t.strokeStyle=`#79522d25`,t.lineWidth=.6;for(let e=0;e<20;e++)t.beginPath(),t.moveTo(a,i+e*3),t.lineTo(256,i+128+e*3),t.stroke();t.restore()}let r=new yi(e);return r.colorSpace=Re,r.anisotropy=8,new G({map:r,roughness:.48})}function Mf(e,t,n,r){let i=new W;i.position.set(t,0,n),i.rotation.y=r,e.add(i),Z(i,.48,.065,.47,0,.46,0,q.black,.045),Z(i,.39,.035,.37,0,.51,-.015,q.rug,.035);let a=Z(i,.46,.44,.055,0,.69,.21,q.black,.065);a.rotation.x=-.12;for(let e of[-1,1]){Z(i,.04,.14,.34,e*.25,.61,.03,q.black,.02);for(let t of[-1,1])$(i,[e*.19,.44,t*.17],[e*.27,.025,t*.27],.014,q.black)}}function Nf(e){let t=new W;t.position.set(.57,1.025,15.08),t.rotation.y=Math.PI/2,e.add(t);let n={T:new G({color:`#14595b`,roughness:.65}),C:new G({color:`#42c6c8`,roughness:.5}),B:q.black,H:new G({color:`#765b35`,roughness:.8})},r=[`.....TTTT.......`,`....TCCCCT......`,`.....TCCCCT.....`,`......TCCCCT....`,`.....BBTCCCT....`,`....BHB.TCCCT...`,`...BHB...TCCT...`,`..BHB.....TT....`,`.BHB............`,`..B.............`];r.forEach((e,i)=>[...e].forEach((e,a)=>{n[e]&&Z(t,.05,.05,.07,(a-7)*.05,(r.length-i)*.05,0,n[e])}))}function Pf(e){let t=new W;e.add(t);let n={minX:.25,maxX:4.45,minZ:11.6,maxZ:17.4,height:Af.height},r={minX:wd.minecraft.minZ-Af.minZ+.25,maxX:wd.minecraft.maxZ-Af.minZ+.25},i=r.maxX-r.minX,a=(r.minX+r.maxX)/2;t.rotation.y=-Math.PI/2,t.position.set(Af.maxX+n.minZ,0,Af.minZ-n.minX);let{minX:o,maxX:s,minZ:c,maxZ:l,height:u}=n,d=s-o,f=l-c,p=(o+s)/2,m=(c+l)/2,h=[],g=(e,n,r)=>{let i=new W;return t.add(i),h.push({group:i,axis:e,position:n,inside:r}),i},_=q.floor.clone();_.map=q.floor.map.clone(),_.map.rotation=Math.PI/2,_.map.repeat.set(1.4,1.7),_.bumpMap=_.map,Z(t,d+.2,.22,f+.2,p,-.14,m,q.trim,.02),Z(t,d,.05,f,p,-.005,m,_),Z(t,r.maxX-r.minX,.025,.2,a,.025,11.5,q.oak);let v=g(`z`,11.5,1);for(let[e,t]of[[o-.1,r.minX],[r.maxX,s+.1]])Z(v,t-e,u,.2,(e+t)/2,u/2,11.5,q.wall),Z(v,t-e,.11,.05,(e+t)/2,.055,11.62,q.white);Z(v,i,u-2.25,.2,a,(u+2.25)/2,11.5,q.wall);for(let e of[r.minX,r.maxX])Z(v,.065,2.28,.25,e,1.14,11.5,q.white);Z(v,i+.07,.07,.25,a,2.28,11.5,q.white);let y=new W;y.position.set(r.minX,0,11.5),y.rotation.y=-Math.PI/2,v.add(y),Z(y,i,2.2,.05,i/2,1.1,0,q.white,.008);for(let e of[.62,1.62])Z(y,i-.21,.83,.012,i/2,e,-.034,q.trim,.006);$(y,[i-.21,1.03,-.06],[i-.06,1.03,-.06],.016,q.metal);let b=document.createElement(`canvas`);b.width=512,b.height=160;let x=b.getContext(`2d`);x.fillStyle=`#f2f0e9`,x.fillRect(0,0,512,160),x.fillStyle=`#3f583f`,x.font=`bold 48px sans-serif`,x.textAlign=`center`,x.fillText(`MINECRAFT`,256,96);let S=new yi(b);S.colorSpace=Re;let C=X(v,new qa(.38,.12),new Ur({map:S}),r.maxX+.3,1.57,11.393);C.rotation.y=Math.PI;let w=g(`x`,o-.1,1),T=g(`x`,s+.1,-1);for(let[e,t,n]of[[w,o-.1,1],[T,s+.1,-1]])Z(e,.2,u,f+.2,t,u/2,m,q.wall),Z(e,.05,.11,f,t+n*.125,.055,m,q.white);Z(w,.05,2.25,.87,.275,1.125,16.6,q.white,.006);for(let e of[16.13,17.07])Z(w,.09,2.32,.06,.29,1.16,e,q.trim);Z(w,.09,.065,1,.29,2.31,16.6,q.trim),$(w,[.32,1.03,16.25],[.32,1.03,16.4],.016,q.metal),Z(t,.5,1.02,1.6,.52,.53,15.15,q.white,.015);for(let e of[14.76,15.16,15.56])Z(t,.007,.95,.012,.774,.54,e,q.trim);Nf(t);let E=g(`z`,l+.1,-1);Z(E,d+.2,1.05,.2,p,.525,l+.1,q.wall);for(let[e,t]of[[o-.1,1.64],[2.96,s+.1]])Z(E,t-e,u,.2,(e+t)/2,u/2,l+.1,q.wall);Z(E,1.32,.27,.2,2.3,u-.135,l+.1,q.wall);let D=new W;D.position.set(2.3,1.85,17.3),D.rotation.x=-.12,E.add(D),Z(D,1.2,1.46,.035,0,0,0,q.glass);for(let e of[-.63,.63])Z(D,.065,1.58,.16,e,0,0,q.white);for(let e of[-.77,.77])Z(D,1.32,.065,.16,0,e,0,q.white);Z(D,1.17,.66,.025,0,.38,-.05,q.trim);for(let e=0;e<16;e++)Z(D,1.17,.009,.03,0,.68-e*.039,-.07,q.white);Z(E,1.43,.045,.3,2.3,1.055,17.28,q.white),Z(E,1.2,.66,.13,2.65,.46,17.31,q.white,.015);for(let e=0;e<23;e++)Z(E,.021,.57,.013,2.1+e*.05,.46,17.237,q.trim);Z(v,1.78,1.04,.065,2.74,1.77,11.66,q.black,.025),Z(v,1.71,.97,.008,2.74,1.77,11.699,q.screen,.01),Z(v,.68,.075,.07,2.74,1.2,11.72,q.black,.022),Q(v,.018,.018,.015,2.74,1.2,11.765,q.metal).rotation.x=Math.PI/2,Z(v,1.83,.41,.3,2.74,2.52,11.78,q.white,.02),Z(v,1.58,.13,.015,2.74,2.61,11.94,q.black);for(let e=0;e<23;e++)Z(v,.012,.13,.018,1.97+e*.067,2.74-.13,11.95,q.trim);Z(v,1.75,.012,.018,2.74,2.4,11.94,q.metal),Z(t,.35,.9,.28,4.225,.47,11.75,q.white,.01),Z(t,.25,.2,.18,4.225,1.01,11.75,q.black,.008),Q(t,.02,.03,.13,4.19,1.15,11.77,q.white),Z(T,.045,1.12,2.6,4.4,1.7,14.05,q.white,.015),Z(T,.12,.035,.5,4.33,1.12,13.1,q.trim);for(let[e,t]of[`#154d86`,`#cd3939`,`#249061`,`#202626`].entries())$(T,[4.31,1.14,12.95+e*.09],[4.31,1.27,12.95+e*.09],.012,new G({color:t}));Z(t,2.7,.023,4.8,2.5,.04,14.5,q.jute,.02),Z(t,1.1,.07,2.8,2.5,.77,14.5,jf(),.012);for(let e of[2.06,2.94])for(let n of[13.22,15.78])Z(t,.055,.7,.055,e,.39,n,q.black);for(let e of[13.4,14.5,15.6])Mf(t,1.66,e,-Math.PI/2),Mf(t,3.34,e,Math.PI/2);Mf(t,2.5,12.77,Math.PI),Mf(t,2.5,16.23,0),Z(t,.36,.017,.13,2.66,.817,13.45,q.black,.008);for(let e=0;e<4;e++)for(let n=0;n<12;n++)Z(t,.022,.003,.018,2.5+n*.028,.828,13.405+e*.025,q.metal);X(t,new Ja(1,16,12),q.black,2.87,.83,13.28).scale.set(.027,.015,.043),Q(t,.08,.08,.035,2.5,.827,14.24,q.black),Q(t,.035,.035,.007,2.5,.811,13.88,q.metal),kf(t,.8,16.73,1.15),kf(t,1.38,17.03,.52),kf(t,.64,16.24,.68);let O=new W;t.add(O),Z(O,d+.2,.1,4.45,p,u+.05,13.725,q.wall);let k=Z(O,d+.2,.09,1.48,p,u-.055,16.7,q.wall);k.rotation.x=.14;let A=new W;t.add(A),Z(A,.09,.075,2.65,2.5,2.57,14.5,q.black,.01),Z(A,.065,.012,2.57,2.5,2.527,14.5,q.light);for(let e of[13.55,15.45])$(A,[2.5,2.62,e],[2.5,2.89,e],.004,q.black);Z(O,2.6,.045,.05,2.15,2.76,16.6,q.white);for(let e of[1.15,2.2,3.2]){let t=Q(O,.045,.045,.16,e,2.68,16.6,q.white);t.rotation.z=.3}let j=new Qo(`#fff3dd`,3,8,2);j.position.set(2.5,2.45,14.5),t.add(j);for(let e of h)e.axis===`x`?(e.axis=`z`,e.position+=t.position.z):(e.axis=`x`,e.position=t.position.x-e.position,e.inside*=-1);return{walls:h,roof:O}}var Ff=_d.kitchen,If=wd.kitchen,Lf=wd.kitchenNorth,Rf=new G({color:`#302d26`,roughness:.64}),zf=new G({color:`#202824`,roughness:.29}),Bf=new G({color:`#b59b62`,metalness:.68,roughness:.3}),Vf=new G({color:`#a8b2b1`,metalness:.72,roughness:.24}),Hf=q.oak.clone();Hf.color.set(`#a9783c`),Hf.roughness=.85;var Uf=q.sofa.clone();Uf.color.set(`#998c74`);var Wf=new G({color:`#d6e8e7`,transparent:!0,opacity:.25,roughness:.12,depthWrite:!1});function Gf(e,t,n,r,i=1){let a=new W;a.position.set(t,n,r),a.scale.setScalar(i),e.add(a),Q(a,.065,.08,.22,0,.11,0,Wf);for(let e=0;e<11;e++){let t=e*2.4,n=.07+e%3*.04,r=[Math.sin(t)*n,.34+e%4*.035,Math.cos(t)*n];$(a,[0,.09,0],r,.0035,q.bark);for(let t=0;t<4;t++){let n=X(a,new Ja(.027,7,5),Xu[(e+t)%4],r[0]+Math.sin(t*1.57)*.02,r[1],r[2]+Math.cos(t*1.57)*.02);n.scale.y=.45}}}function Kf(e,t){let n=11.62;Q(e,.37,.35,.07,t,.07,n,q.black),Q(e,.46,.43,.4,t,.3,n,Uf),Q(e,.425,.44,.15,t,.52,n,Uf);let r=new ia;r.absarc(0,0,.51,0,Math.PI,!1),r.absarc(0,0,.37,Math.PI,0,!0),r.closePath();let i=X(e,new Ha(r,{depth:.42,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:3,curveSegments:24}),Uf,t,.38,n);i.rotation.x=-Math.PI/2}function qf(e,t,n,r=.17){let i=new U(...t),a=new U(...n),o=Z(e,r,i.distanceTo(a),.19,0,0,0,Hf,.015);o.position.copy(i.clone().add(a).multiplyScalar(.5)),o.quaternion.setFromUnitVectors(new U(0,1,0),a.sub(i).normalize())}function Jf(e,t,n,r,i,a,o,s){let c=document.createElement(`canvas`);c.width=768,c.height=384;let l=c.getContext(`2d`);s&&(l.fillStyle=s,l.fillRect(0,0,768,384)),l.fillStyle=s?`#ffffff`:`#12191a`,l.font=`bold 310px Arial`,l.textAlign=`center`,l.textBaseline=`middle`,l.fillText(t,384,214);let u=new yi(c);return u.colorSpace=Re,X(e,new qa(n,r),new Ur({map:u,transparent:!s,depthWrite:!!s}),i,a,o)}function Yf(e){let t=new W;t.position.set(3.96,.93,14.03),t.rotation.y=Math.PI,e.add(t),Z(t,.48,.045,.37,0,.022,0,Vf,.018),Z(t,.47,.42,.25,0,.27,-.06,Vf,.024),Z(t,.43,.16,.1,0,.4,.115,q.black,.016),Z(t,.12,.055,.008,-.04,.425,.171,q.glass);for(let e of[-.15,.13]){let n=Q(t,.022,.022,.015,e,.405,.176,Vf);n.rotation.x=Math.PI/2,n.userData.coffeeButton=!0}Q(t,.058,.058,.055,0,.283,.145,q.black),$(t,[0,.265,.14],[.12,.255,.24],.018,q.black),$(t,[.19,.3,.13],[.2,.12,.21],.009,Vf),Z(t,.4,.014,.2,0,.052,.1,q.black);for(let e=0;e<9;e++)Z(t,.016,.003,.16,-.16+e*.04,.061,.1,Vf);return Q(t,.06,.05,.1,-.08,.55,-.055,Vf),Q(t,.035,.032,.075,.08,.535,-.03,q.white),Q(t,.055,.043,.12,.4,.06,.07,Vf),t.name=`Kaffemaskinen`,t}function Xf(e,t,n){let r=new W;r.position.set(t,0,n),r.rotation.y=Math.PI,e.add(r),Z(r,.75,2.03,.46,0,1.04,0,q.black,.014),Z(r,.64,1.79,.012,0,1.09,.237,zf);let i=[`#38864a`,`#488cbe`,`#bb3434`,`#a7ba45`,`#d7c86b`,`#336f8e`].map(e=>new G({color:e,metalness:.38,roughness:.35}));for(let e=0;e<6;e++){let t=.27+e*.285;Z(r,.65,.013,.09,0,t,.268,Vf);for(let n=0;n<7;n++){let a=-.275+n*.09;Q(r,.033,.033,.18,a,t+.105,.272,i[(e+n)%i.length]),Q(r,.03,.03,.006,a,t+.198,.272,Vf),Z(r,.023,.045,.003,a,t+.12,.306,q.white)}}for(let e of[-.332,.332])Z(r,.012,1.82,.012,e,1.1,.295,q.light);Z(r,.62,1.79,.005,0,1.1,.315,Wf),$(r,[.365,.82,.33],[.365,1.37,.33],.012,Vf);for(let e=0;e<4;e++)Z(r,.56,.012,.014,0,.09+e*.025,.244,q.metal)}function Zf(e){let t=new W;e.add(t);let n=2.05,r=10.9,i=Ff.height,a=n+Ff.maxX-Ff.minX,o=r+Ff.maxZ-Ff.minZ;t.position.set(Ff.minX-n,0,Ff.minZ-r);let s=If.minX-t.position.x,c=If.maxX-t.position.x,l=c-s,u=(s+c)/2,d=a-n,f=o-r,p=(n+a)/2,m=(r+o)/2,h=(e,t=0)=>{let n=new W;return n.scale.z=-1,n.position.set(t,0,r+o),e.add(n),n},g=.25,_=[],v=(e,n,r)=>{let i=new W;return t.add(i),_.push({group:i,axis:e,position:n,inside:r}),i},y=q.floor.clone();y.color.set(`#e4b970`),y.map=q.floor.map.clone(),y.map.repeat.set(2,1.4),y.map.rotation=Math.PI/2,y.bumpMap=y.map,Z(t,d+.2,.22,f+.2,p,-.14,m,q.trim,.018),Z(t,d,.05,f,p,-.005,m,y);let b=v(`z`,10.8,1),x=v(`x`,a+.1,-1),S=v(`x`,1.9499999999999997,1);for(let[e,t]of[[1.9499999999999997,s],[c,5.9],[7.2,a+.1]])Z(b,t-e,i,.2,(e+t)/2,i/2,10.8,q.wall);for(let[e,t]of[[1.9499999999999997,s],[c,a+.1]])Z(b,t-e,.13,.05,(e+t)/2,.065,10.925,q.white);Z(b,1.3,1.02,.2,6.55,.51,10.8,q.wall),Z(b,1.3,.22,.2,6.55,i-.11,10.8,q.wall),Z(b,l,i-2.3,.2,u,(i+2.3)/2,10.8,q.wall);for(let e of[s,c])Z(b,.065,2.33,.25,e,1.165,10.8,q.white);Z(b,l+.065,.065,.25,u,2.33,10.8,q.white),Z(t,l,.025,.2,u,.025,10.8,q.oak),Z(x,.2,i,f+.2,a+.1,i/2,m,q.wall),Z(x,.05,.13,f,a-.025,.065,m,q.white);let C=Lf.minZ-t.position.z,w=Lf.maxZ-t.position.z,T=w-C,E=(C+w)/2;for(let[e,t]of[[10.8,C],[w,o+.1]])Z(S,.2,i,t-e,1.9499999999999997,i/2,(e+t)/2,q.wall),Z(S,.05,.13,t-e,2.0749999999999997,.065,(e+t)/2,q.white);Z(S,.2,i-2.3,T,1.9499999999999997,(i+2.3)/2,E,q.wall);for(let e of[C,w])Z(S,.25,2.33,.065,1.9499999999999997,1.165,e,q.white);Z(S,.25,.065,T+.065,1.9499999999999997,2.33,E,q.white),Z(t,.2,.025,T,1.9499999999999997,.025,E,q.oak);let D=v(`z`,o+.1,-1),O=2.5,k=3.4,A=5.9/2;for(let[e,t]of[[1.9499999999999997,O],[k,a+.1]])Z(D,t-e,i,.2,(e+t)/2,i/2,o+.1,q.wall),Z(D,t-e,.13,.05,(e+t)/2,.065,o-.025,q.white);Z(D,.9,i-2.23,.2,A,(i+2.23)/2,o+.1,q.wall);for(let e of[O,k])Z(D,.065,2.26,.12,e,1.13,o,q.white);Z(D,.965,.065,.12,A,2.26,o,q.white);for(let e of[2.425,3.475])Z(D,.15,2.23,.6,e,1.115,o+.3,q.wall);Z(D,1.2,2.23,.15,A,1.115,o+.675,q.wall),Z(D,.9,.12,.6,A,2.29,o+.3,q.wall),Z(t,.9,.05,.6,A,-.005,o+.3,y);let j=h(b,g);Z(j,1.19,1.49,.03,6.3,1.82,o+.04,q.glass);for(let e of[5.67,6.3,6.93])Z(j,.055,1.6,.16,e,1.82,o-.03,q.white);for(let e of[1.03,1.81,2.61])Z(j,1.33,.055,.16,6.3,e,o-.03,q.white);Z(j,1.43,.045,.35,6.3,1.015,o-.1,q.white);for(let e of[6.22,6.39])$(j,[e,1.55,o-.13],[e,1.66,o-.13],.009,q.black);let M=h(t,g);Z(M,4.04,.1,.5,5.32,.09,14.22,q.black),Z(M,4.04,.74,.61,5.32,.51,14.18,Rf);for(let e=0;e<6;e++)for(let[t,n]of[[.29,.36],[.68,.35]]){let r=3.65+e*.67;Z(M,.65,n,.025,r,t,13.863,Rf,.003),Q(M,.019,.019,.027,r+.19,t+.09,13.836,Bf).rotation.x=Math.PI/2}for(let[e,t]of[[3.26,6.09],[6.63,7.39]])Z(M,t-e,.045,.7,(e+t)/2,.915,14.16,zf,.006);Z(M,.54,.045,.1,6.36,.915,13.86,zf),Z(M,.54,.045,.18,6.36,.915,14.42,zf),Z(M,.54,.035,.38,6.36,.75,14.1,Vf,.018);for(let e of[6.105,6.615])Z(M,.025,.16,.39,e,.83,14.1,Vf);for(let e of[13.917,14.283])Z(M,.53,.16,.025,6.36,.83,e,Vf);Q(M,.029,.029,.007,6.36,.772,14.1,q.black),X(M,new Xa(new Li([new U(6.36,.94,14.38),new U(6.36,1.26,14.38),new U(6.36,1.32,14.2),new U(6.36,1.23,14.09)]),28,.014,8,!1),q.black,0,0,0),Q(M,.025,.03,.16,6.77,1.02,14.32,Wf),$(M,[6.77,1.11,14.32],[6.77,1.15,14.32],.008,q.black),Z(M,.18,.015,.1,6.79,.95,14.1,q.trim,.006);let ee=Yf(M);for(let e of[3.35,5.25,7.32])qf(M,[e,.02,13.96],[e,i-.08,13.96]);qf(M,[3.27,i-.08,13.96],[7.41,i-.08,13.96],.13),qf(M,[3.35,1.67,13.96],[4.1,i-.11,13.96],.16),qf(M,[5.25,1.67,13.96],[4.53,i-.11,13.96],.16),qf(M,[7.32,1.7,13.96],[6.65,i-.11,13.96],.16),Z(M,4.14,.07,.16,5.33,.05,13.97,Hf),Z(j,1.48,.035,.2,4.32,1.45,14.32,Hf);for(let e=0;e<7;e++)Q(j,.037,.03,.14,3.77+e*.115,1.54,14.29,Wf);for(let e of[4.69,4.84]){Q(j,.045,.04,.12,e,1.53,14.29,q.green);let t=X(j,new Ya(.027,.006,8,16),Bf,e+.043,1.55,14.29);t.rotation.y=Math.PI/2}for(let e of[4.5,4.71])Q(M,.048,.048,.23,e,1.05,14.19,q.white),Q(M,.012,.015,.28,e,1.07,14.19,Hf);Q(M,.13,.065,.09,5.61,1.005,14.13,q.trim);for(let e=0;e<4;e++)X(M,new Ja(.045,12,10),new G({color:`#e4a625`}),5.54+e%2*.08,1.06+Math.floor(e/3)*.04,14.09+Math.floor(e/2)*.065);let N=h(t);Kf(N,4.2),Kf(N,6.27),Q(N,.41,.41,.035,5.23,.53,11.66,q.white);for(let e=0;e<3;e++){let t=e*Math.PI*2/3;$(N,[5.23+Math.sin(t)*.2,.51,11.66+Math.cos(t)*.2],[5.23+Math.sin(t)*.34,.025,11.66+Math.cos(t)*.34],.022,Hf)}Gf(N,5.22,.55,11.5,.62);for(let[e,t]of[[5.05,.08],[5.36,.12]])Q(N,.027,.027,t,e,.55+t/2,11.76,q.white);Jf(D,`a:`,1.6,1.05,5.15,1.92,o-.014).rotation.y=Math.PI,Xf(t,A,o+.23),Q(t,.36,.36,.035,2.48,1.05,12.65,q.black),$(t,[2.48,.08,12.65],[2.48,1.04,12.65],.026,q.black);for(let[e,n]of[[.28,0],[-.28,0],[0,.28],[0,-.28]])$(t,[2.48,.09,12.65],[2.48+e,.03,12.65+n],.018,q.black);Gf(t,2.48,1.068,12.65,1.1),Z(t,.32,.64,.3,2.28,.33,14.28,q.white),Q(t,.065,.055,.09,2.28,.695,14.28,q.metal);for(let e=0;e<7;e++){let n=e*2.4,r=[2.28+Math.sin(n)*.13,.85+e%3*.07,14.28+Math.cos(n)*.13];$(t,[2.28,.73,14.28],r,.004,q.green);let i=X(t,new Ja(1,10,8),q.green,...r);i.scale.set(.045,.018,.095),i.rotation.y=n}for(let[e,t,n,r]of[[S,2.081,11.6,Math.PI/2],[D,7.15,o-.03,Math.PI]]){let i=new W;i.position.set(t,0,n),i.rotation.y=r,e.add(i),Z(i,.83,2.14,.04,0,1.07,0,q.white);for(let e of[-.46,.46])Z(i,.065,2.25,.09,e,1.125,.02,q.trim);Z(i,.98,.065,.09,0,2.23,.02,q.trim),$(i,[.28,1.02,.045],[.37,1.02,.045],.014,Bf)}let P=new W;P.position.set(a-.025,0,12.47),P.rotation.y=-Math.PI/2,x.add(P);for(let e of[-.42,.42]){Z(P,.82,2.25,.06,e,1.125,0,q.white,.006);for(let[t,n]of[[.45,.57],[1,.24],[1.73,.91]])Z(P,.62,n,.014,e,t,.04,q.trim,.008);let t=X(P,new Ya(.125,.014,10,32),Bf,e,1.6,.065),n=X(P,new wi(.114,32),q.glass,e,1.6,.067);n.castShadow=!1,t.receiveShadow=!1,Z(P,.24,.055,.055,e,2.14,.07,Vf),$(P,[e,2.16,.09],[e+.2,2.22,.11],.007,Vf)}for(let e of[-.88,.88])Z(P,.07,2.34,.12,e,1.17,.01,q.trim);Z(P,1.82,.08,.12,0,2.32,.01,q.trim),$(P,[.075,1.04,.085],[.24,1.04,.085],.017,Vf);let F=Jf(P,`↓ ▷`,.4,.17,0,2.57,.05,`#16965b`);F.castShadow=!1,Z(t,.64,.008,1.74,7.49,.027,12.47,q.rug,.01),Z(x,.12,.75,.74,7.78,.52,13.63,q.white,.014);for(let e=0;e<15;e++)Z(x,.014,.65,.022,7.708,.52,13.32+e*.045,q.trim);Z(t,.45,.64,.47,7.55,.34,13.86,Vf,.055),Z(t,.47,.045,.48,7.55,.685,13.86,q.metal,.03),Q(t,.1,.11,.37,7.67,.21,13.44,Vf);let te=new W;t.add(te),Z(te,d+.2,.1,f+.2,p,i+.05,m,q.wall);let ne=Z(te,4.25,.09,.7,5.55,2.66,r+o-14.18,q.wall);ne.rotation.x=-.45;for(let e of[11.43,13.62]){Z(te,5.2,.035,.05,4.95,i-.045,e,q.white);for(let t of[2.7,3.8,4.9,6,7.1])Z(te,.16,.045,.06,t,i-.09,e,q.trim),Z(te,.11,.01,.04,t,i-.119,e,q.light)}Q(te,.07,.065,.035,4.95,i-.03,m,q.white);for(let e of[3.7,6.6]){let n=new Qo(`#ffe2aa`,2.4,6,2);n.position.set(e,2.55,12.75),t.add(n)}for(let e of _)e.position+=t.position[e.axis];return{walls:_,roof:te,coffee:ee}}var Qf=new G({color:`#626e57`,roughness:.8}),$f=new G({color:`#e3d9b9`,roughness:.95}),ep=new G({color:`#b9a374`,metalness:.65,roughness:.35});function tp(e,t,n,r,i,a=`#eee9dc`){let o=document.createElement(`canvas`);o.width=512,o.height=Math.round(512*r/n);let s=o.getContext(`2d`);s.fillStyle=i,s.fillRect(0,0,o.width,o.height),s.fillStyle=a,s.textAlign=`center`,s.textBaseline=`middle`,t.forEach((e,n)=>{s.font=`${t.length===1?`bold `:``}${Math.min(70,440/Math.max(e.length,1)*1.7)}px Arial`,s.fillText(e,256,o.height/2+(n-(t.length-1)/2)*65,455)});let c=new yi(o);return c.colorSpace=Re,c.anisotropy=8,X(e,new qa(n,r),new G({map:c,roughness:.85}),0,0,0)}function np(e){let t=[[`apply’ed`,`#202224`,`#ffffff`],[`TESTAVIVA`,`#173039`,`#ffffff`],[`Gjensidige`,`#e9e6df`,`#193259`],[`IDA`,`#242e65`,`#ffffff`],[`Astma-Allergi`,`#eeeae3`,`#334f75`],[`DANSK ERHVERV`,`#202958`,`#ffffff`],[`SUNDHEDS SIKRING`,`#eeeae3`,`#193047`],[`Sund & Bælt`,`#0b203a`,`#ffffff`],[`Lederne`,`#163d35`,`#ffffff`],[`Copydan/`,`#eeeae3`,`#333333`],[`SES`,`#626d70`,`#ffffff`],[`sampension`,`#eeeae3`,`#152e3e`],[`Ørsted`,`#35768e`,`#ffffff`],[`CONCITO`,`#eeeae3`,`#384936`],[`SCANGLAS`,`#212223`,`#ffffff`],[`Brobizz`,`#17393c`,`#ffffff`],[`GYLDENDAL`,`#eeeae3`,`#222222`],[`Storebælt`,`#0c203a`,`#ffffff`],[`forca`,`#24525c`,`#ffffff`],[`GLASSOLUTIONS`,`#eeeae3`,`#843b49`],[`Brunata`,`#eeeae3`,`#222222`],[`Femern`,`#0c203a`,`#ffffff`],[`HAVER TIL MAVER`,`#eeeae3`,`#353c2d`],[`KLIMA AMBASSADEN`,`#eeeae3`,`#578283`],[`RAMBØLL`,`#397795`,`#ffffff`],[`DANSKE REGIONER`,`#eeeae3`,`#333333`],[`Clever`,`#16413d`,`#ffffff`]],n=0;for(let r=0;r<5;r++)for(let i=0;i<(r<2?6:5);i++){let[a,o,s]=t[n++],c=new W;e.add(c),c.position.set(4.47-i*.365,2.04-r*.355,ad.maxZ-.028),c.rotation.y=Math.PI,Z(c,.295,.295,.025,0,0,0,q.black);let l=tp(c,[a],.287,.287,o,s);l.position.z=.014}Z(e,.075,.1,.025,4.42,.28,ad.maxZ-.02,q.white,.006),X(e,new wi(.023,16),q.trim,4.42,.28,ad.maxZ-.035).rotation.y=Math.PI}function rp(e){let t=Md.cabinet,n=(t.minX+t.maxX)/2,r=(t.minZ+t.maxZ)/2;Z(e,t.maxX-t.minX,.98,t.maxZ-t.minZ,n,.54,r,Qf,.009),Z(e,1.96,.06,.39,n,.03,r,q.black),Z(e,2.075,.035,.47,n,1.047,r,Qf,.006);for(let n=1;n<4;n++)Z(e,.008,.93,.012,t.minX+n*(t.maxX-t.minX)/4,.55,t.maxZ+.003,q.metal);let i=[`#315746`,`#db6433`,`#253146`,`#c9bd95`,`#555045`];for(let t=0;t<5;t++){let n=new W;e.add(n),n.position.set(4.12+t%2*.015,1.09+t*.065,15.29),n.rotation.y=.03*(t-2),Z(n,.48,.056,.32,0,0,0,$f);for(let e of[-.032,.032])Z(n,.495,.009,.335,0,e,0,new G({color:i[t],roughness:.8}));Z(n,.495,.066,.02,0,0,.16,new G({color:i[t]}))}for(let[t,n]of[[3.8,.43],[4.4,.57]]){let r=new W;e.add(r),r.position.set(t,1.08+n/2,15.1),r.rotation.x=-.14,Z(r,n*.7,n,.025,0,0,0,q.oak),Z(r,n*.7-.035,n-.035,.008,0,0,.018,q.white);let i=tp(r,[`apply:`,`DESIGN`],n*.6,n*.55,`#eee9dd`,`#384138`);i.position.z=.023}let a=new W;e.add(a),a.position.set(3.13,1.105,15.28),Z(a,.36,.09,.27,0,0,0,$f,.025),Z(a,.3,.08,.07,0,.06,-.08,q.black,.012);for(let e=0;e<4;e++)for(let t=0;t<10;t++)Q(a,.009,.01,.01,-.135+t*.03,.054,-.04+e*.04,q.black);Z(e,.17,.035,.14,3.47,1.08,15.36,q.black,.014),$(e,[3.47,1.09,15.36],[3.47,1.21,15.36],.009,q.black),X(e,new Ja(.024,12,8),q.black,3.47,1.22,15.36)}function ip(e){let t=Md.coats,n=(t.minZ+t.maxZ)/2;for(let r of[t.minX+.035,t.maxX-.035])Z(e,.035,1.85,.035,r,.95,n,q.black),Z(e,.055,.045,t.maxZ-t.minZ,r,.035,n,q.black),$(e,[r,.1,t.minZ+.04],[r,.75,n],.012,q.black);Z(e,t.maxX-t.minX,.04,.04,(t.minX+t.maxX)/2,1.86,n,q.black);let r=[`#345b8c`,`#b38c53`,`#202e3e`,`#303940`,`#151d24`,`#263c50`];for(let t=0;t<6;t++){let i=1.05+t*.205,a=q.sofa.clone();a.color.set(r[t]);let o=new ia;o.moveTo(-.09,0),o.lineTo(-.23,-.08),o.lineTo(-.28,-.55),o.lineTo(-.19,-.58),o.lineTo(-.17,-.32),o.lineTo(-.17,-.99),o.quadraticCurveTo(0,-1.06,.17,-.99),o.lineTo(.17,-.32),o.lineTo(.19,-.58),o.lineTo(.28,-.55),o.lineTo(.23,-.08),o.lineTo(.09,0),o.closePath();let s=X(e,new Ha(o,{depth:.045,bevelEnabled:!0,bevelSize:.015,bevelThickness:.012,bevelSegments:2,steps:1}),a,i,1.65,n);s.rotation.y=Math.PI/2,s.rotation.z=(t%3-1)*.04,$(e,[i,1.78,n],[i,1.64,n-.22],.006,ep),$(e,[i,1.64,n-.22],[i,1.64,n+.22],.006,ep),$(e,[i,1.64,n+.22],[i,1.78,n],.006,ep),$(e,[i,1.78,n],[i,1.86,n],.006,ep)}Q(e,.075,.08,.42,.96,.25,15.5,new G({color:`#b72922`,roughness:.4})),Z(e,.09,.045,.07,.96,.49,15.5,q.black),$(e,[1,.46,15.5],[1.05,.17,15.5],.012,q.black)}function ap(e){let t=Md.lamp,n=(t.minX+t.maxX)/2,r=(t.minZ+t.maxZ)/2;Q(e,.16,.17,.035,n,.027,r,q.black),$(e,[n,.04,r],[n-.08,1.38,r],.014,q.black),$(e,[n-.08,1.38,r],[n+.13,1.65,r],.012,ep),$(e,[n+.13,1.65,r],[n+.38,1.56,r],.012,q.black);let i=Q(e,.065,.145,.15,n+.38,1.5,r,q.black);i.rotation.z=-.25,Q(e,.135,.135,.008,n+.36,1.422,r,q.white)}function op(e){let t=Md.banner,n=(t.minX+t.maxX)/2,r=(t.minZ+t.maxZ)/2;Z(e,.25,.065,.83,n,.04,r,q.trim,.012);let i=tp(e,[`Digital fremdrift`,`til ambitiøse kunder`,``,`apply:`],.78,1.94,`#29221d`);i.position.set(n,1.04,r),i.rotation.y=Math.PI/2;for(let t of[-.405,.405])$(e,[n,.08,r+t],[n,2.04,r+t],.009,q.trim);Z(e,.025,.025,.82,n,2.03,r,q.trim);let a=tp(e,[],.38,.19,`#00a76f`),o=a.material.map,s=o.image.getContext(`2d`);s.strokeStyle=`#ffffff`,s.fillStyle=`#ffffff`,s.lineWidth=16,s.lineCap=`round`,s.beginPath(),s.moveTo(210,128),s.lineTo(65,128),s.moveTo(115,75),s.lineTo(60,128),s.lineTo(115,181),s.stroke(),s.strokeRect(345,42,88,175),s.beginPath(),s.arc(318,65,17,0,Math.PI*2),s.fill(),s.beginPath(),s.moveTo(313,97),s.lineTo(284,141),s.lineTo(332,168),s.lineTo(315,211),s.moveTo(285,141),s.lineTo(244,195),s.moveTo(306,110),s.lineTo(350,128),s.moveTo(306,110),s.lineTo(267,93),s.lineTo(243,127),s.stroke(),o.needsUpdate=!0,a.position.set(ad.minX+.025,2.3,15.35),a.rotation.y=Math.PI/2;let c=a.material;c.emissive.set(`#1a8a60`),c.emissiveIntensity=.7}function sp(e){let t=new W;e.add(t);let n=[],r=q.floor.clone();r.color.set(`#edbb72`),r.map=q.floor.map.clone(),r.map.repeat.set(3.5,.7),r.map.rotation=0,r.bumpMap=r.map,Od(t,ad,r);let i=Ad(t,ad,2.5);for(let e of[15.54,16.08])Z(i,5.1,.008,.008,2.28,2.494,e,q.trim);for(let e=.2;e<ad.maxX;e+=.62)Z(i,.008,.008,1.58,e,2.494,15.811,q.trim);Z(i,.15,.23,1.58,.65,2.385,15.811,q.wall);for(let e of[1.2,2.8,4.2]){Z(i,.1,.018,.045,e,2.48,15.81,q.light);let n=new Qo(`#fff0d7`,.8,4,2);n.position.set(e,2.3,15.81),t.add(n)}Q(i,.065,.065,.025,2.2,2.47,15.81,q.white),kd(t,n,`x`,ad.minX-.1,ad.minZ,ad.maxZ,1,2.5);let a=kd(t,n,`z`,ad.maxZ+.1,ad.minX,ad.maxX,-1,2.5,[cd.minX,cd.maxX]);np(a);let o=new W;t.add(o),n.push({group:o,axis:`z`,position:ad.minZ,inside:1}),rp(o),ip(o),ap(o);let s=new W;t.add(s),n.push({group:s,axis:`x`,position:ad.minX,inside:1}),op(s);let c=new G({color:`#51483b`,transparent:!0,opacity:.8,roughness:.2});return X(a,new Ja(.15,20,14),c,4.51,.18,16.42).scale.set(.8,1.15,.8),{walls:n,roof:i}}function cp(e){let t=document.createElement(`canvas`);t.width=t.height=512;let r=t.getContext(`2d`),i=71,a=()=>(i=i*1664525+1013904223>>>0)/4294967296;r.fillStyle=e?`#69533d`:`#dfd7bd`,r.fillRect(0,0,512,512);for(let t=0;t<8;t++){r.fillStyle=`rgba(90,65,30,${a()*.1})`,r.fillRect(t*64,0,64,512),r.fillStyle=e?`#473726`:`#a69a7d`,r.fillRect(t*64,0,1,512);for(let n=0;n<50;n++){let n=t*64+a()*64;r.strokeStyle=`rgba(${e?`220,193,139`:`114,90,50`},${.03+a()*.14})`,r.lineWidth=.3+a(),r.beginPath(),r.moveTo(n,0),r.bezierCurveTo(n-4,150,n+5,350,n,512),r.stroke()}let n=t*64+15+a()*32,i=a()*512;for(let t=1;t<6;t++)r.strokeStyle=e?`#49372466`:`#77654388`,r.lineWidth=.7,r.beginPath(),r.ellipse(n,i,t*1.2,t*3.4,.05,0,Math.PI*2),r.stroke()}let o=new yi(t);return o.colorSpace=Re,o.wrapS=o.wrapT=n,o.anisotropy=8,o}var lp=cp(!0),up=new G({map:lp,roughness:.95,bumpMap:lp,bumpScale:.045});function dp(e,t,n,r=.26){let i=new U(...t),a=new U(...n),o=i.clone().add(a).multiplyScalar(.5);Z(e,r,i.distanceTo(a),r,o.x,o.y,o.z,up).quaternion.setFromUnitVectors(new U(0,1,0),a.sub(i).normalize())}var fp=e=>e<19.7?4.65:4.65-(e-19.7)*(3.05/(sd.maxZ-19.7));function pp(e,t,n,r,i,a){let o=fp(r)-fp(i),s=Z(e,n-t,.12,Math.hypot(i-r,o),(t+n)/2,(fp(r)+fp(i))/2,(r+i)/2,a);return s.rotation.x=Math.atan2(o,i-r),s}function mp(e){let t=[],n=new W;e.add(n);let r=cp(!1);r.repeat.set(4.4,1.8),r.rotation=Math.PI/2;let i=new G({map:r,roughness:.72,bumpMap:r,bumpScale:.012});Od(e,sd,i),Od(e,cd,i);for(let t of[cd.minX-.06,cd.maxX+.06])Z(e,.12,2.25,.8,t,1.125,17.005,q.white);Z(e,1.12,.12,.8,2,2.31,17.005,q.white);let a=kd(e,t,`z`,sd.minZ-.1,sd.minX,sd.maxX,1,4.65,[cd.minX,cd.maxX]),o=kd(e,t,`z`,sd.maxZ+.1,sd.minX,sd.maxX,-1,1.6),s=[];for(let[n,r]of[[sd.minX-.1,1],[sd.maxX+.1,-1]]){let i=new W;e.add(i),t.push({group:i,axis:`x`,position:n,inside:r}),s.push(i);let a=new ia;a.moveTo(sd.minZ,0),r>0&&(a.lineTo(ld.minZ,0),a.lineTo(ld.minZ,2.25),a.lineTo(ld.maxZ,2.25),a.lineTo(ld.maxZ,0)),a.lineTo(sd.maxZ,0),a.lineTo(sd.maxZ,1.6),a.lineTo(19.7,4.65),a.lineTo(sd.minZ,4.65),a.closePath();let o=X(i,new Ha(a,{depth:.2,bevelEnabled:!1}),q.wall,n+.1,0,0);o.rotation.y=-Math.PI/2;let c=r>0?[[sd.minZ,ld.minZ],[ld.maxZ,sd.maxZ]]:[[sd.minZ,sd.maxZ]];for(let[e,t]of c)Z(i,.23,.12,t-e,n,.06,(e+t)/2,q.white);let l=r>0?sd.minX+.12:sd.maxX-.12;for(let e of[17.65,21.35,23.7])dp(i,[l,0,e],[l,fp(e)-.1,e],.2);dp(i,[l,3.08,17.65],[l,3.08,21.35],.22),dp(i,[l,2.2,17.65],[l,3.08,18.15],.14)}for(let e of[8.2,12.4])Z(a,1.02,2.28,.06,e,1.14,sd.minZ+.035,q.trim),Z(a,.89,2.15,.035,e,1.075,sd.minZ+.075,q.white),$(a,[e+.24,1.03,sd.minZ+.11],[e+.38,1.03,sd.minZ+.11],.014);for(let e of[1.8,5.8,9.8,13.8,16.1])Z(o,1.3,.48,.09,e,.62,sd.maxZ-.07,q.white);let c=new W;e.add(c),c.position.set(2.55,0,sd.minZ),c.rotation.y=-Math.PI/2,Z(c,.85,2.18,.05,.425,1.09,0,q.white);for(let e of[.58,1.55])Z(c,.65,.8,.016,.425,e,-.034,q.trim);$(c,[.64,1.02,-.06],[.76,1.02,-.06],.013),pp(n,sd.minX,sd.maxX,sd.minZ,19.7,q.wall);for(let[e,t]of[[19.7,20],[21.15,21.9],[23.05,sd.maxZ]])pp(n,sd.minX,sd.maxX,e,t,q.wall);let l=new G({color:`#eaf7ff`,emissive:`#c8e7ff`,emissiveIntensity:.65,roughness:.2});for(let[e,t]of[[20,21.15],[21.9,23.05]]){let r=sd.minX;for(let i of[1.8,5.8,9.8,13.8])for(let a of[-.94,0,.94]){let o=i+a,s=o-.38,c=o+.38;pp(n,r,s,e,t,q.wall);let u=new W;n.add(u),u.position.set(o,(fp(e)+fp(t))/2,(e+t)/2),u.rotation.x=Math.atan2(fp(e)-fp(t),t-e);let d=Math.hypot(t-e,fp(e)-fp(t));Z(u,.76,.04,d,0,.14,0,l);for(let e of[-1,1])Z(u,.07,.3,d,e*.38,.04,0,q.white),Z(u,.76,.3,.07,0,.04,e*d/2,q.white);Z(u,.68,.025,.025,0,.11,d*.25,q.white),r=c}pp(n,r,sd.maxX,e,t,q.wall)}for(let t of Rd){dp(e,[t,0,19.65],[t,4.6,19.65],.27),dp(e,[t,.15,17.6],[t,3.25,19.65],.22),dp(e,[t,0,23.7],[t,2.9,22.45],.25),dp(e,[t,2.95,19.65],[t,2.95,22.45],.25),dp(e,[t,2.1,19.65],[t,2.95,20.3],.15);for(let n of[19.65,22.45])Q(e,.032,.032,.29,t,2.9,n,q.metal).rotation.z=Math.PI/2}let u=new G({color:`#bbc0c1`,metalness:.75,roughness:.38});Q(a,.23,.23,16.8,8.2,3.3,17.86,u).rotation.z=Math.PI/2;for(let e=-.1;e<16.6;e+=.42){let t=X(a,new Ya(.234,.009,5,20),u,e,3.3,17.86);t.rotation.y=Math.PI/2}Q(a,.35,.35,2.2,16.5,1.1,17.9,q.white),$(a,[16.5,2.15,17.9],[16.15,3.3,17.86],.23,u);for(let e of[19.7,22.4]){Z(n,17.5,.05,.05,8.3,fp(e)-.14,e,q.black);for(let t=.5;t<17;t+=1.4)Q(n,.045,.045,.14,t,fp(e)-.24,e,q.black),Q(n,.04,.04,.005,t,fp(e)-.313,e,q.light)}return{walls:t,roof:n,west:s[0],east:s[1]}}function hp(e,t,n){let r=t.map,i=new U,a=!1;return o=>{let s=e.getWorldPosition(i).distanceToSquared(o),c=a?s<25:s<=16;return c!==a&&(a=c,t.map=a?n:r,!0)}}var gp=`#f3f6fc`,_p=`#7af0c4`,vp=`#ff94ce`;function yp(e,t,n,r,i,a=gp,o=`left`){e.fillStyle=a,e.font=`700 ${i}px Arial, sans-serif`,e.textAlign=o,e.fillText(t,n,r)}function bp(e,t,n,r,i,a){e.fillStyle=a,e.beginPath(),e.roundRect(t,n,r,i,18),e.fill()}function xp(e,t,n,r){e.save(),e.translate(t,n),e.scale(r,r),bp(e,-72,-44,144,88,gp),e.strokeStyle=`#183d42`,e.lineWidth=6,e.beginPath(),e.moveTo(-64,-34),e.lineTo(0,12),e.lineTo(64,-34),e.stroke(),e.restore()}function Sp(e,t){let n=Math.floor(t/4)%2==1,r=t%4/4;if(e.fillStyle=`#10242c`,e.fillRect(0,0,1024,565),yp(e,`PALM AI`,48,76,56,_p),yp(e,`MAILSORTERING`,976,72,28,`#9dbdc5`,`right`),e.strokeStyle=`#355862`,e.lineWidth=10,e.beginPath(),e.moveTo(170,260),e.lineTo(410,260),e.lineTo(540,180),e.lineTo(660,180),e.stroke(),e.beginPath(),e.moveTo(410,260),e.lineTo(540,350),e.lineTo(660,350),e.stroke(),bp(e,570,115,405,130,n?`#1b3c43`:`#256b5d`),yp(e,`PREBEN`,772,181,52,_p,`center`),yp(e,!n&&r>.78?`Modtaget ✓`:`Send videre`,772,220,26,gp,`center`),n&&r>.65){e.fillStyle=gp;for(let t=0;t<9;t++)e.fillRect(668+t*24,385,12,35+(r*210+t*11)%60)}let i=Math.min(r/.8,1),a=160+610*i,o=260+(n?85:-80)*Math.max(0,(i-.35)/.65);r<.88&&xp(e,a,o,r>.65?1-(r-.65)*3:1),bp(e,595,335,355,78,n?`#9d3b63`:`#493344`),e.fillStyle=`#08151c`,e.fillRect(637,338,270,10),yp(e,`MAKULATOR`,772,392,36,gp,`center`),yp(e,n?`Sagen er afsluttet.`:`Det tager Preben sig af.`,512,531,38,n?vp:_p,`center`)}function Cp(e,t){let n=Math.floor(t/8),r=t%8/8,i=Math.floor(82+Math.min(r/.65,1)*17),a=[`Kan logoet blive lidt større?`,`Kan den poppe lidt mere?`,`Prøv lige den første version.`,`Kun én lille rettelse mere...`];e.fillStyle=`#241833`,e.fillRect(0,0,1024,565),yp(e,`DESIGNFEEDBACK`,48,76,49,vp),yp(e,`RUNDE ${48+n}`,48,194,83),yp(e,`∞`,956,194,100,vp,`right`),bp(e,48,230,928,62,`#483454`),bp(e,54,236,916*i/100,50,vp),yp(e,`${i}% færdig`,48,361,54),bp(e,48,394,928,91,`#3c294b`),yp(e,a[n%a.length],512,452,41,gp,`center`),yp(e,`LIGE VED OG NÆSTEN`,512,537,29,`#bda7ce`,`center`)}var wp=class{materials;screen;contexts=[];textures=[];elapsed=0;frame=0;center=new U;normal=new U;offset=new U;projected=new U;constructor(){let e=()=>{let e=document.createElement(`canvas`);e.width=512,e.height=283;let t=e.getContext(`2d`);t.scale(e.width/1024,e.height/565);let n=new yi(e);return n.colorSpace=Re,n.minFilter=c,n.generateMipmaps=!1,this.contexts.push(t),this.textures.push(n),new Ur({map:n,toneMapped:!1})};this.materials=[e(),e()],this.draw()}draw(){Sp(this.contexts[0],this.elapsed),Cp(this.contexts[1],this.elapsed),this.textures.forEach(e=>{e.needsUpdate=!0})}update(e,t,n){if(!n||!this.screen||(this.screen.localToWorld(this.center.set(.34,0,0)),this.screen.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0)||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3))return!1;this.elapsed+=t;let r=Math.floor(this.elapsed*12);return r!==this.frame&&(this.frame=r,this.draw(),!0)}},Tp=`#f3f6ff`,Ep=`#8af5cb`,Dp=`#bc9cff`,Op=`#9eabc8`,kp=[`Projekter`,`Tidsregistrering`,`Fakturering`,`Frokost`,`Kaffemaskine`,`Verdensherredømme`],Ap=[[`HOLBECH`,`Kan den også…`],[`NICOLAI`,`Live.`],[`HOLBECH`,`Jeg var ikke færdig.`],[`NICOLAI`,`Det er næste version også.`]];function jp(e,t,n,r,i,a=Tp,o=`left`){e.fillStyle=a,e.font=`700 ${i}px Arial, sans-serif`,e.textAlign=o,e.fillText(t,n,r)}function Mp(e,t,n,r,i,a){e.fillStyle=a,e.beginPath(),e.roundRect(t,n,r,i,14),e.fill()}function Np(e,t){e.save(),e.translate(240,295);let n=1+Math.sin(t*2)*.035;e.scale(n,n),e.strokeStyle=`#333451`,e.lineWidth=2;for(let t of[145,164])e.beginPath(),e.arc(0,0,t,0,Math.PI*2),e.stroke();for(let n of[-1,1]){e.save(),e.scale(n,1),e.beginPath(),e.moveTo(7,-99),e.bezierCurveTo(20,-143,76,-139,88,-101),e.bezierCurveTo(130,-105,149,-67,131,-39),e.bezierCurveTo(167,-11,151,39,121,48),e.bezierCurveTo(135,88,93,116,63,102),e.bezierCurveTo(43,132,8,111,7,90),e.closePath(),e.fillStyle=`#32264f`,e.fill(),e.strokeStyle=Dp,e.lineWidth=6,e.stroke(),e.strokeStyle=`#9478ce`,e.lineWidth=5,e.lineCap=`round`,e.beginPath(),e.moveTo(54,-97),e.bezierCurveTo(28,-67,92,-61,94,-34),e.moveTo(130,-39),e.bezierCurveTo(97,-49,64,-16,88,12),e.moveTo(15,-32),e.bezierCurveTo(63,-53,28,26,58,40),e.moveTo(120,48),e.bezierCurveTo(78,27,55,68,64,100),e.stroke();for(let n=0;n<3;n++){let r=[54,88,58][n],i=[-97,12,40][n];e.fillStyle=Ep,e.globalAlpha=.5+.5*Math.sin(t*2-n)**2,e.beginPath(),e.arc(r,i,6,0,Math.PI*2),e.fill()}e.restore()}e.restore()}function Pp(e,t){let n=t%18,r=Math.min(6,2+Math.floor(n/3));e.fillStyle=`#101526`,e.fillRect(0,0,1024,565),jp(e,`MEGAMIND`,42,78,60,Dp),jp(e,`OVERTAGER GRADVIST KONTORET`,44,113,23,Op),jp(e,`NICOLAI / ADMIN`,978,67,22,Ep,`right`),Np(e,t),kp.forEach((t,n)=>{let i=n<r,a=n===r,o=148+n*49;Mp(e,465,o,515,42,i?`#1b3438`:`#1b2238`),jp(e,t,482,o+28,24,i?Tp:Op),jp(e,i?`✓ LIVE`:a?`BYGGER`:`NÆSTE`,961,o+28,20,i?Ep:a?Dp:Op,`right`)}),jp(e,`ÉN LILLE FEATURE MERE…`,240,491,23,Dp,`center`),Mp(e,42,513,938,30,`#222a40`),Mp(e,42,513,938*(.25+.75*Math.min(n/15,1)),30,`#335e56`),jp(e,`FORECAST: OVERTAGET  ·  SCOPE: JA`,511,535,20,Ep,`center`)}function Fp(e,t){let n=t%12,r=Math.floor(t%4);e.fillStyle=`#111f29`,e.fillRect(0,0,1024,565),jp(e,`Seneste nyt i MegaMind`,42,73,48),Mp(e,838,32,142,53,`#244a42`),jp(e,`● LIVE`,909,68,30,Ep,`center`),jp(e,`RELEASES I DAG`,42,148,26,Op),jp(e,String(146+Math.floor(t/4)),38,267,132,Ep),jp(e,`Tid siden sidste deploy`,44,320,22,Op),jp(e,`00:0${r}`,42,382,58),Ap.forEach(([t,r],i)=>{let a=n>=i*2,o=120+i*78;Mp(e,356,o,624,69,a&&i%2?`#213e3d`:`#1c2b39`),jp(e,t,374,o+22,16,a?i%2?Ep:Dp:Op),jp(e,a?r:`…`,374,o+53,30,a?Tp:Op)}),[`ØNSKE`,`BYGGER`,`LIVE`].forEach((n,r)=>{let i=r===Math.floor(t%4/(4/3));Mp(e,42+r*322,449,294,45,i?`#335e56`:`#1c2b39`),jp(e,n,189+r*322,481,28,i?Ep:Op,`center`),r<2&&jp(e,`›`,350+r*322,480,32,Op,`center`)}),jp(e,`Logo: afventer Thrane`,42,540,27,Dp),jp(e,`ALT ANDET ER LIVE.`,980,538,22,Ep,`right`)}var Ip=class{materials;screen;contexts=[];elapsed=7;frame=84;center=new U;normal=new U;offset=new U;projected=new U;constructor(){let e=e=>{let t=document.createElement(`canvas`);t.width=768,t.height=424;let n=t.getContext(`2d`);n.scale(t.width/1024,t.height/565),this.contexts.push(n);let r=new yi(t);return r.colorSpace=Re,r.minFilter=c,r.generateMipmaps=!1,new Ur({name:e,map:r,toneMapped:!1})};this.materials=[e(`Nicolai / MegaMind`),e(`Nicolai / releases`)],this.draw()}draw(){Pp(this.contexts[0],this.elapsed),Fp(this.contexts[1],this.elapsed),this.materials.forEach(e=>{e.map.needsUpdate=!0})}update(e,t,n){if(!n||!this.screen||(this.screen.localToWorld(this.center.set(.34,0,0)),this.screen.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0)||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3))return!1;this.elapsed+=t;let r=Math.floor(this.elapsed*12);return r!==this.frame&&(this.frame=r,this.draw(),!0)}},Lp=`/3doffice/dist/assets/anja-fridge-webcam-BDYkwrG5.webp`,Rp=`/3doffice/dist/assets/anja-elevator-webcam-DyF5H08r.webp`,zp=`#7df0b6`,Bp=`#173c3b`,Vp=new Intl.DateTimeFormat(`da-DK`,{timeZone:`Europe/Copenhagen`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`});function Hp(e,t,n,r,i,a=`#eef7f5`,o=`left`){e.font=`700 ${i}px Arial, sans-serif`,e.fillStyle=a,e.textAlign=o,e.fillText(t,n,r)}function Up(e,t,n,r,i,a){if(Hp(e,r,26,n+42,38),e.fillStyle=`#213a41`,e.fillRect(24,n+62,552,340),t){let r=Math.max(552/t.width,340/t.height),i=552/r,a=340/r;e.drawImage(t,(t.width-i)/2,(t.height-a)/2,i,a,24,n+62,552,340)}e.fillStyle=`#071619bb`,e.fillRect(24,n+62,552,42),Hp(e,Vp.format(new Date),40,n+92,25),Hp(e,`LIVE`,554,n+92,25,zp,`right`),e.fillStyle=Math.floor(a*2)%2?`#228657`:zp,e.beginPath(),e.arc(480,n+83,7,0,Math.PI*2),e.fill(),e.fillStyle=`#d9ffe916`,e.fillRect(24,n+104+a*24%296,552,2),Hp(e,i,26,n+449,33,zp)}function Wp(e,t,n){e.fillStyle=`#0c2026`,e.fillRect(0,0,600,1120),Hp(e,`ANJA CONTROL`,26,66,46,zp),Hp(e,`2 KAMERAER / KONTOR`,26,109,26,`#a7c4c6`),Up(e,t[0],135,`01 / KØLESKAB`,`MÆLK PÅ LAGER`,n),Up(e,t[1],610,`02 / ELEVATORDØR`,`DØREN ER LUKKET`,n+.6),Hp(e,`SIMULERET KAMERAVISNING`,300,1101,20,`#82a4aa`,`center`)}function Gp(e,t,n){e.strokeStyle=`#d3e2df`,e.lineWidth=2;for(let r=0;r<=4;r++){let i=t+n*r/4;e.beginPath(),e.moveTo(48,i),e.lineTo(552,i),e.stroke()}}function Kp(e,t){e.fillStyle=`#eaf2ef`,e.fillRect(0,0,600,1120),Hp(e,`KONTORPULS`,26,66,48,Bp),Hp(e,`DRIFT & FORBRUG`,26,109,26,`#547d76`),e.fillStyle=`#ffffff`,e.fillRect(24,144,552,412),e.fillRect(24,586,552,462),Hp(e,`MÆLKEFORBRUG`,44,196,36,Bp),Hp(e,`${(18.4+Math.sin(t/7)*.4).toFixed(1).replace(`.`,`,`)} L`,44,259,54,`#197b66`),Hp(e,`DENNE UGE`,550,255,23,`#547d76`,`right`),Gp(e,292,208);let n=[];for(let e=0;e<=36;e++){let r=.43+Math.sin(e*.31+t*.16)*.19+Math.sin(e*.76+t*.08)*.08;n.push([48+e*14,500-r*208])}e.beginPath(),e.moveTo(48,500),n.forEach(([t,n])=>e.lineTo(t,n)),e.lineTo(552,500),e.closePath(),e.fillStyle=`#d7f2e7`,e.fill(),e.beginPath(),n.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.strokeStyle=`#197b66`,e.lineWidth=7,e.stroke(),[`MAN`,`TIR`,`ONS`,`TOR`,`FRE`].forEach((t,n)=>Hp(e,t,48+n*126,536,23,`#547d76`,n===4?`right`:`left`)),Hp(e,`DØRAKTIVITET`,44,640,36,Bp),Hp(e,`ÅBNINGER / TIME`,44,685,25,`#547d76`),Gp(e,730,250);for(let n=0;n<7;n++){let r=62+(Math.sin(n*1.4+t*.2)+1)*74;e.fillStyle=n%2?`#7bc6ae`:`#db985f`,e.fillRect(55+n*72,980-r,42,r),Hp(e,String(8+n).padStart(2,`0`),76+n*72,1020,23,`#547d76`,`center`)}Hp(e,`ALT UNDER KONTROL`,300,1101,28,`#197b66`,`center`)}var qp=class{materials;screen;images=[];contexts=[];textures=[];elapsed=0;frame=0;center=new U;normal=new U;offset=new U;projected=new U;constructor(){let e=()=>{let e=document.createElement(`canvas`);e.width=600,e.height=1120;let t=e.getContext(`2d`),n=new yi(e);return n.colorSpace=Re,n.minFilter=c,n.generateMipmaps=!1,this.contexts.push(t),this.textures.push(n),new Ur({map:n,toneMapped:!1})};this.materials=[e(),e()],this.draw(),[Lp,Rp].forEach((e,t)=>new Fo().load(e,e=>{this.images[t]=e,this.draw()}))}draw(){Wp(this.contexts[0],this.images,this.elapsed),Kp(this.contexts[1],this.elapsed),this.textures.forEach(e=>{e.needsUpdate=!0})}update(e,t,n){if(!n||!this.screen||(this.screen.localToWorld(this.center.set(.34,0,0)),this.screen.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0)||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3))return!1;this.elapsed+=t;let r=Math.floor(this.elapsed*8);return r!==this.frame&&(this.frame=r,this.draw(),!0)}},Jp={x:3.9,z:10.65},Yp=.18,Xp=.8,Zp=1.4,Qp=.25,$p=.1,em=Math.floor(Y.minX/$p),tm=Math.ceil(sd.maxX/$p)-em+1,nm=Math.ceil(sd.maxZ/$p)+1,rm=new Map,im=e=>({x:(e%tm+em)*$p,z:Math.floor(e/tm)*$p}),am=(e,t,n=Yp)=>ff(e,t,n);function om(e,t=Yp){let n=Math.round(e.x/$p)-em,r=Math.round(e.z/$p),i=-1,a=1/0;for(let o=-2;o<=2;o++)for(let s=-2;s<=2;s++){let c=n+s,l=r+o;if(c<0||c>=tm||l<0||l>=nm)continue;let u=l*tm+c,d=im(u),f=Math.hypot(d.x-e.x,d.z-e.z);f<a&&cf(d.x,d.z,.18)&&am(e,d,t)&&(i=u,a=f)}return i}function sm(e,t){if(am(e,t))return[{...t}];let n=om(e),r=om(t,.17);if(n<0||r<0)return[];let i=new Int32Array(tm*nm).fill(-1),a=new Int32Array(tm*nm);i[n]=n,a[0]=n;let o=1;for(let e=0;e<o&&i[r]<0;e++){let t=a[e],n=im(t);rm.has(t)||rm.set(t,[t-1,t+1,t-tm,t+tm].filter(e=>{if(e<0||e>=tm*nm)return!1;let t=im(e);return Math.hypot(t.x-n.x,t.z-n.z)<$p*1.01&&am(n,t)}));for(let e of rm.get(t))i[e]>=0||(i[e]=t,a[o++]=e)}if(i[r]<0)return[];let s=[];for(let e=r;s.push(im(e)),e!==n;e=i[e]);s.reverse();let c=[],l=e;for(let e=0;e<s.length;e++){for(;e+1<s.length&&am(l,s[e+1]);)e++;c.push(s[e]),l=s[e]}return c}var cm=class{x=Jp.x;z=Jp.z;heading=-Math.PI/2;distance=0;discovered=!1;watchedFor=Qp;path=[];destination={x:1/0,z:1/0};replanIn=0;update(e,t,n,r){if(!r||!Number.isFinite(e)||e<=0||!Number.isFinite(n.x)||!Number.isFinite(n.z))return!1;if(!this.discovered)return t&&(this.discovered=!0),!1;let i=Math.min(e,.1);if(t?(i=Math.min(i,Math.max(0,Qp-this.watchedFor)),this.watchedFor=Math.min(Qp,this.watchedFor+Math.min(e,.1))):this.watchedFor=0,i<=1e-8)return!1;this.replanIn-=i,this.replanIn<=0&&(Math.hypot(n.x-this.destination.x,n.z-this.destination.z)>.3||!this.path.length)&&(this.path=sm(this,n),this.destination={x:n.x,z:n.z},this.replanIn=.5);let a=Math.hypot(n.x-this.x,n.z-this.z),o=Math.max(0,Math.min(1,(a-2)/3)),s={x:this.x,z:this.z},c=(Xp+.8*o)*i,l=!1;for(;c>1e-8&&this.path.length;){let e=this.path[0],t=e.x-this.x,r=e.z-this.z,i=Math.hypot(t,r);if(i<1e-8){this.path.shift();continue}let a=Math.hypot(n.x-this.x,n.z-this.z),o=a<Zp+c&&am(this,n,.17)?Math.max(0,a-Zp):1/0,u=Math.min(c,i,o);if(u<=1e-8)break;let d={x:this.x+t/i*u,z:this.z+r/i*u};if(!am(this,d)){this.path=[];break}if(l&&!am(s,d))break;this.x=d.x,this.z=d.z,this.heading=Math.atan2(t,r),this.distance+=u,c-=u,l=!0}return l}},lm=class{phase=`idle`;elapsed=0;start(e){return this.phase===`idle`&&(this.phase=e?`landed`:`leaping`,this.elapsed=e?1.8:0,!0)}update(e,t){return!t||this.phase!==`leaping`||!Number.isFinite(e)||e<=0?!1:(this.elapsed=Math.min(1.8,this.elapsed+Math.min(e,.1)),this.elapsed>=1.8&&(this.phase=`landed`),!0)}},um=1024,dm=565;function fm(e,t,n){e.fillStyle=t,e.beginPath(),n.forEach(([t,n],r)=>r?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e.fill()}function pm(e,t,n,r,i,a){e.fillStyle=a,e.font=`700 ${i}px Arial, sans-serif`,e.fillText(t,n,r)}function mm(e){let t=e.createLinearGradient(0,0,0,dm);t.addColorStop(0,`#b8dcd9`),t.addColorStop(1,`#f3e4ba`),e.fillStyle=t,e.fillRect(0,0,um,dm),e.fillStyle=`#fff1ca`,e.beginPath(),e.arc(825,99,48,0,Math.PI*2),e.fill(),fm(e,`#8ba9aa`,[[0,235],[195,65],[310,192],[460,58],[665,240],[820,117],[1024,240],[1024,340],[0,340]]),fm(e,`#ecf0de`,[[135,118],[195,65],[254,130],[210,117],[185,132],[169,115]]),fm(e,`#ecf0de`,[[397,121],[460,58],[535,124],[481,109],[455,127],[438,108]]),fm(e,`#496f68`,[[0,223],[157,184],[310,250],[420,216],[572,270],[762,194],[1024,218],[1024,dm],[0,dm]]);let n=e.createLinearGradient(0,245,0,dm);n.addColorStop(0,`#81c6c6`),n.addColorStop(1,`#1f8795`),e.fillStyle=n,e.beginPath(),e.moveTo(541,252),e.bezierCurveTo(410,306,563,333,374,393),e.bezierCurveTo(277,426,250,486,100,dm),e.lineTo(928,dm),e.bezierCurveTo(780,431,471,363,590,252),e.closePath(),e.fill();for(let t of[-1,1])for(let n=0;n<14;n++){let r=t<0?22+n*32:665+n*29,i=274+n*29%78,a=42+n*13%47;e.fillStyle=`#364f48`,e.fillRect(r-3,i-a,6,a+12),fm(e,n%2?`#234e45`:`#326457`,[[r,i-a*1.6],[r-a*.4,i-a*.55],[r-a*.25,i-a*.55],[r-a*.5,i],[r+a*.5,i],[r+a*.25,i-a*.55],[r+a*.4,i-a*.55]])}for(let[t,n,r,i]of[[217,481,59,23],[305,421,32,15],[637,385,44,19],[57,540,83,36]])e.fillStyle=`#84958a`,e.beginPath(),e.ellipse(t,n,r,i,-.14,0,Math.PI*2),e.fill(),e.fillStyle=`#b5c0a9`,e.beginPath(),e.ellipse(t-5,n-8,r*.7,i*.4,-.14,0,Math.PI*2),e.fill();pm(e,`CANADA`,38,62,42,`#163e3b`),pm(e,`LAKSEELVEN · JESPER ER OFFLINE`,40,93,17,`#315d57`)}function hm(e,t){let n=Math.min(t/1.8,1);if(n<1){e.save(),e.translate(304+n*265,424-Math.sin(n*Math.PI)*185),e.rotate(Math.atan2(-185*Math.PI*Math.cos(n*Math.PI),265)),fm(e,`#b0c1ad`,[[-57,0],[-97,-32],[-88,0],[-97,30]]),fm(e,`#34554d`,[[-12,-17],[-26,-47],[21,-24]]),fm(e,`#be8274`,[[-6,16],[-18,38],[28,19]]);let t=e.createLinearGradient(0,-26,0,26);t.addColorStop(0,`#315e58`),t.addColorStop(.43,`#a0b9a4`),t.addColorStop(.53,`#dc998d`),t.addColorStop(.7,`#d9d9be`),t.addColorStop(1,`#f2efdb`),e.fillStyle=t,e.beginPath(),e.ellipse(0,0,73,25,0,0,Math.PI*2),e.fill(),e.fillStyle=`#31584e`;for(let t=0;t<10;t++)e.beginPath(),e.arc(-46+t*9,-10-t%3*3,2,0,Math.PI*2),e.fill();e.fillStyle=`#fbf5dc`,e.beginPath(),e.arc(53,-7,6,0,Math.PI*2),e.fill(),e.fillStyle=`#152f31`,e.beginPath(),e.arc(55,-7,3,0,Math.PI*2),e.fill(),e.strokeStyle=`#577a6a`,e.lineWidth=2,e.beginPath(),e.arc(35,0,17,-.9,.9),e.stroke(),e.restore()}if(t>=1.8&&t<2.5){let n=(t-1.8)/.7;e.save(),e.globalAlpha=1-n,e.strokeStyle=`#e4f8e7`,e.lineWidth=4,e.beginPath(),e.ellipse(569,424,22+n*65,6+n*15,0,0,Math.PI*2),e.stroke(),e.fillStyle=`#e4f8e7`;for(let t=0;t<7;t++)e.beginPath(),e.arc(569+(t-3)*n*28,421-Math.sin(n*Math.PI)*(35+t%3*17),4,0,Math.PI*2),e.fill();e.restore()}}function gm(e,t){e.fillStyle=`#f2f1ed`,e.fillRect(0,0,um,dm),e.fillStyle=`#b7472b`,e.fillRect(0,0,um,60),pm(e,`P`,24,42,34,`#fff9ef`),pm(e,`Kundepitch — PowerPoint`,77,39,27,`#fff9ef`),e.fillStyle=`#deded8`,e.fillRect(0,60,um,46),pm(e,`Hjem     Indsæt     Design     Overgange     Slideshow`,24,90,20,`#53615d`),e.fillStyle=`#e4e4df`,e.fillRect(0,106,174,423);for(let t=0;t<3;t++)e.fillStyle=t?`#d4dcd5`:`#b7472b`,e.fillRect(18,130+t*116,138,86),e.fillStyle=`#163e3b`,e.fillRect(23,135+t*116,128,76),pm(e,String(t+1),35,165+t*116,20,`#f9f3da`),e.fillStyle=`#a8d9bf`,e.fillRect(35,177+t*116,90-t*18,5);e.fillStyle=`#163e3b`,e.fillRect(198,130,800,375),pm(e,t?`LEAD LANDET`:`DEN NÆSTE`,244,244,58,`#f9f3da`),pm(e,t?`Så er der bid.`:`STORE FANGST`,244,316,58,`#f9f3da`),pm(e,t?`Fra pipeline til bordet`:`CMS + AI`,246,436,34,`#a8d9bf`),e.fillStyle=`#deded8`,e.fillRect(0,529,um,36),pm(e,`Slide 1 af 3`,22,553,18,`#53615d`)}var _m=class{materials;catchState=new lm;screen;fish=new W;launch=new U;canvas=document.createElement(`canvas`);background=document.createElement(`canvas`);context;texture;pitchContext;pitchTexture;elapsed=.9;frame=-1;center=new U;normal=new U;offset=new U;projected=new U;constructor(){this.canvas.width=this.background.width=768,this.canvas.height=this.background.height=424,this.context=this.canvas.getContext(`2d`);let e=this.background.getContext(`2d`);e.scale(this.canvas.width/um,this.canvas.height/dm),mm(e),this.texture=new yi(this.canvas),this.texture.colorSpace=Re,this.texture.minFilter=c,this.texture.generateMipmaps=!1;let t=document.createElement(`canvas`);t.width=this.canvas.width,t.height=this.canvas.height,this.pitchContext=t.getContext(`2d`),this.pitchContext.scale(t.width/um,t.height/dm),this.pitchTexture=new yi(t),this.pitchTexture.colorSpace=Re,this.pitchTexture.minFilter=c,this.pitchTexture.generateMipmaps=!1,this.materials=[new Ur({map:this.texture,toneMapped:!1}),new Ur({map:this.pitchTexture,toneMapped:!1})],this.fish.name=`Jespers fangst`,this.fish.visible=!1;let n=new G({color:`#aac1af`,roughness:.36,metalness:.2}),r=new G({color:`#c98383`,roughness:.5}),i=new G({color:`#345b52`});X(this.fish,new Ja(1,20,12),n,0,0,0).scale.set(.22,.055,.055);for(let e of[-1,1]){X(this.fish,new Ja(1,16,8),r,-.005,-.006,e*.046).scale.set(.185,.014,.012);let t=X(this.fish,new Ja(.009,10,8),i,.172,.017,e*.037);t.castShadow=!1}let a=X(this.fish,new Ei(.071,.1,3),i,-.24,0,0);a.rotation.z=-Math.PI/2,a.scale.z=.25;let o=X(this.fish,new Ei(.042,.065,3),i,-.03,.055,0);o.scale.z=.2,this.draw(),this.drawPitch()}fishPoint(){let e=this.elapsed%4.5,t=e<1.8?e/1.8:.5;return{x:304+t*265,y:424-Math.sin(t*Math.PI)*185}}hitFish(e){if(this.catchState.phase!==`idle`||this.elapsed%4.5>=1.8)return!1;let t=this.fishPoint();return((e.x*um-t.x)/105)**2+(((1-e.y)*dm-t.y)/80)**2<=1}catchFish(e){if(!this.screen||!this.catchState.start(e))return!1;let t=this.fishPoint();return this.launch.set((t.x/um-.5)*.602,(.5-t.y/dm)*.332,.012),this.screen.add(this.fish),this.fish.visible=!0,this.poseFish(),this.draw(),this.drawPitch(),!0}settleCatch(){this.catchState.phase===`leaping`&&(this.catchState.elapsed=1.8,this.catchState.phase=`landed`,this.poseFish())}poseFish(){let e=Math.min(1,this.catchState.elapsed/1.25);this.fish.position.set(kt.lerp(this.launch.x,.28,e),kt.lerp(this.launch.y,-.34,e)+Math.sin(e*Math.PI)*.5,kt.lerp(this.launch.z,.42,e)),this.fish.scale.setScalar(kt.lerp(.2,1,e));let t=e===1?Math.max(0,1-(this.catchState.elapsed-1.25)/.55):0;this.fish.rotation.z=Math.sin(e*Math.PI*2)*.6+Math.sin(this.catchState.elapsed*25)*.22*t}draw(){let e=this.context;e.drawImage(this.background,0,0),e.save(),e.scale(this.canvas.width/um,this.canvas.height/dm),e.strokeStyle=`#d0eee4aa`,e.lineWidth=3;for(let t=0;t<19;t++){let n=(t/19+this.elapsed*.11)%1,r=290+n*275,i=508-n*75+Math.sin(t*4.7)*n*195;e.beginPath(),e.moveTo(i,r),e.lineTo(i+12+n*36,r),e.stroke()}this.catchState.phase===`idle`&&hm(e,this.elapsed%4.5),e.restore(),this.texture.needsUpdate=!0}drawPitch(){gm(this.pitchContext,this.catchState.phase!==`idle`),this.pitchTexture.needsUpdate=!0}update(e,t,n){if(!n||!this.screen)return!1;let r=this.catchState.update(t,n);if(r&&this.poseFish(),this.screen.getWorldPosition(this.center),this.screen.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3))return r;this.elapsed+=t;let i=Math.floor(this.elapsed*12);return i===this.frame?r:(this.frame=i,this.draw(),!0)}};function vm(e,t=`Holbech / bygger kontoret inde i kontoret`){let n=document.createElement(`canvas`);n.width=1024,n.height=565;let r=n.getContext(`2d`);r.fillStyle=`#18232d`,r.fillRect(0,0,1024,60),r.fillRect(0,523,1024,42),r.fillStyle=`#7af0c4`,r.font=`700 30px monospace`,r.fillText(`3doffice`,22,40),r.fillStyle=`#f3f6fc`,r.font=`24px monospace`,r.fillText(e,225,39),r.fillStyle=`#a8b8c8`,r.font=`21px monospace`,r.fillText(t,22,552);let i=new yi(n);return i.colorSpace=Re,new Ur({map:i,transparent:!0,toneMapped:!1,depthWrite:!1})}var ym=class{targets=[0,1].map(()=>new Zt(768,424,{type:v,samples:2}));materials=[new Ur({map:this.targets[0].texture}),new Ur({map:this.targets[1].texture})];overviewCamera=this.camera(-5.4,12.2,18,32,46,42);liveDisplay;center=new U;normal=new U;offset=new U;projected=new U;elapsed=0;liveDirty=!0;dirty=!0;camera(e,t,n,r,i,a){let o=n*768/424,s=new $o(-o,o,n,-n,.1,200);return s.position.set(e+r,i,t+a),s.lookAt(e,0,t),s}decorate(e){let t=[];e.parent.parent.traverse(e=>{e instanceof ti&&this.materials.includes(e.material)&&t.push(e)}),t.forEach(e=>{let t=e.material===this.materials[1];t&&(this.liveDisplay=e),e.name=`Holbech / ${t?`Davids udsyn`:`hele modellen`}`;let n=new ti(e.geometry,t?vm(`David / live`,`Davids udsyn / kamera i øjenhøjde`):vm(`Scene / hele modellen`));n.position.z=.001,e.add(n)})}update(e,t,n){return!n||!this.liveDisplay||(this.liveDisplay.getWorldPosition(this.center),this.liveDisplay.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0)||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3)||(this.elapsed+=t,this.elapsed<1/12)?!1:(this.elapsed%=1/12,this.liveDirty=!0,!0)}render(e,t,n,r,i){if(!this.dirty&&!this.liveDirty)return;let a=e.getRenderTarget(),o=[...n.map(e=>e.group),...r,i.group,...this.materials].map(e=>({object:e,visible:e.visible}));this.materials.forEach(e=>{e.visible=!1});try{if(this.dirty){let i=this.overviewCamera;r.forEach(e=>{e.visible=!1}),n.forEach(e=>{e.group.visible=(i.position[e.axis]-e.position)*e.inside>0}),e.setRenderTarget(this.targets[0]),e.render(t,i)}n.forEach(e=>{e.group.visible=!0}),r.forEach(e=>{e.visible=!0}),i.group.visible=!1,i.viewCamera.updateWorldMatrix(!0,!1),e.setRenderTarget(this.targets[1]),e.render(t,i.viewCamera),this.dirty=!1,this.liveDirty=!1}finally{e.setRenderTarget(a),o.forEach(({object:e,visible:t})=>{e.visible=t})}}},bm=`/3doffice/dist/assets/1000mods-cheat-death-DD8Q8cx4.webp`,xm=1024,Sm=565,Cm=`#f8edcf`,wm=`#ffb64c`,Tm=`#a8ef9c`;function Em(e,t,n,r,i,a=Cm){e.fillStyle=a,e.font=`700 ${i}px monospace`,e.fillText(t,n,r)}function Dm(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(t,n,r,i)}function Om(e,t,n){Dm(e,0,0,xm,Sm,`#141a19`),Dm(e,12,12,1e3,541,`#72776c`),Dm(e,18,18,988,529,`#272f2b`),Dm(e,26,26,972,59,`#111a16`),Em(e,`1000mods`,42,69,48,wm),Em(e,`HENRIK'S HI-FI`,699,63,24,`#a8b2a5`),Dm(e,36,100,332,332,`#090f0c`),n?e.drawImage(n,42,106,320,320):(Em(e,`1000mods`,62,239,43,wm),Em(e,`CHEAT DEATH`,62,283,30)),Em(e,`NOW PLAYING / 09`,398,127,22,Tm),Em(e,`Cheat Death`,394,187,53),Em(e,`1000mods · 2024`,398,226,26,`#b0bdad`),Dm(e,395,247,589,122,`#0b140f`);for(let n=0;n<28;n++){let r=.18+.82*Math.abs(Math.sin(t*2.8+n*.67)*Math.cos(t*.9-n*.24)),i=Math.ceil(r*11);for(let t=0;t<i;t++)Dm(e,406+n*20,356-t*9,13,6,t>8?wm:Tm)}let r=Math.floor((94+t)%335);Em(e,`${Math.floor(r/60)}:${String(r%60).padStart(2,`0`)}`,398,409,32,Tm),Em(e,`/ 5:35`,500,407,25,`#a8b2a5`),Em(e,`STEREO`,853,407,24,wm),Dm(e,398,425,584,9,`#101711`),Dm(e,398,425,584*r/335,9,wm),[`|◀`,`Ⅱ`,`■`,`▶|`].forEach((t,n)=>{Dm(e,398+n*79,455,67,47,`#626d5f`),Dm(e,401+n*79,458,61,40,n===1?`#a5bd82`:`#404d40`),Em(e,t,410+n*79,489,27,n===1?`#102417`:Cm)}),Em(e,`VOL`,737,485,22,`#a8b2a5`);for(let t=0;t<9;t++)Dm(e,797+t*21,480-t*2,13,12+t*2,t<7?Tm:`#45523e`);Em(e,`CHEAT DEATH`,43,469,31,wm),Em(e,`ON REPEAT`,43,503,22,`#a8b2a5`),Em(e,`FUZZ: MAX     /     DO NOT DISTURB`,397,533,20,`#a8b2a5`)}function km(e,t){let n=e.createLinearGradient(0,0,0,332);n.addColorStop(0,`#171d2a`),n.addColorStop(1,`#873d2c`),e.fillStyle=n,e.fillRect(0,0,xm,Sm),Dm(e,0,276,xm,56,`#173541`);for(let n=0;n<13;n++){let r=(t*.18+n/13)%1;e.fillStyle=`rgba(35, 32, 39, ${.6*(1-r)})`,e.beginPath(),e.ellipse(160+n*57+r*45,243-r*170,22+r*30,20+r*33,-.2,0,Math.PI*2),e.fill()}e.strokeStyle=`#a3b7bc`,e.lineWidth=5,e.beginPath(),e.moveTo(-20,256),e.quadraticCurveTo(175,227,280,117),e.quadraticCurveTo(512,320,744,117),e.quadraticCurveTo(849,227,1044,256),e.stroke();for(let t=24;t<1e3;t+=28){let n=(t-280)/464,r=t<280?117+(1-t/280)*135:t>744?117+(t-744)/280*135:117+406*n*(1-n);e.strokeStyle=`#728d98`,e.lineWidth=2,e.beginPath(),e.moveTo(t,r),e.lineTo(t,263),e.stroke()}for(let t of[280,744])Dm(e,t-21,108,12,206,`#b2b9b4`),Dm(e,t+9,108,12,206,`#b2b9b4`),Dm(e,t-21,126,42,9,`#d2c8b1`),Dm(e,t-21,199,42,9,`#d2c8b1`);Dm(e,0,258,xm,10,`#b9b1a0`),Dm(e,0,268,xm,9,`#222b31`);for(let n=0;n<17;n++){let r=88+n*53,i=Math.sin(t*5+n*2.1),a=38+32*(.5+.5*i)+n%3*9;for(let t=0;t<3;t++){let n=25-t*7,o=261-a*(1-t*.23);e.fillStyle=[`#ec4b23`,`#ff952e`,`#ffe488`][t],e.beginPath(),e.moveTo(r-n,262),e.bezierCurveTo(r-n*1.4,238,r+i*12,o+22,r+i*15,o),e.bezierCurveTo(r+n*.4,o+20,r+n*1.5,245,r+n,262),e.closePath(),e.fill()}let o=(t*.4+n*.17)%1;Dm(e,r+o*24,226-o*96,4,7,`#ffc164`),Dm(e,r-8+Math.sin(t+n)*8,291+n%3*9,28,3,`#c17b48`)}Em(e,`DET BRÆNDER`,34,68,57,`#ffcb79`),Em(e,`BROMELDING`,770,54,28,`#c9bca6`),Em(e,`ALT ER UNDER KONTROL*`,35,101,20,`#c9bca6`),Dm(e,0,332,xm,233,`#091510`),Dm(e,0,332,xm,34,`#2b3e33`),Em(e,`henrik@bromelding: ~`,26,356,21,`#bbd3be`),Em(e,`$ pnpm deploy`,27,401,30,Tm),Em(e,`[OK]   Build completed.`,27,438,27,`#b7cdba`),Em(e,`[WARN] bridge.onFire = true`,27,475,27,wm),Em(e,`[INFO] Det er sidste rettelse...`,27,512,27,Tm),Em(e,`$`,27,548,28,Tm),Math.floor(t*2)%2==0&&Dm(e,62,526,16,25,Tm),Em(e,`*næsten`,866,548,21,`#76927c`)}var Am=class{materials;screen;contexts=[];cover;elapsed=0;frame=0;center=new U;normal=new U;offset=new U;projected=new U;constructor(){let e=e=>{let t=document.createElement(`canvas`);t.width=768,t.height=424;let n=t.getContext(`2d`);n.scale(t.width/xm,t.height/Sm),this.contexts.push(n);let r=new yi(t);return r.colorSpace=Re,r.minFilter=c,r.generateMipmaps=!1,new Ur({name:e,map:r,toneMapped:!1})};this.materials=[e(`Henrik / 1000mods`),e(`Henrik / burning bridge`)],this.draw(),new Fo().load(bm,e=>{this.cover=e,this.draw()})}draw(){Om(this.contexts[0],this.elapsed,this.cover),km(this.contexts[1],this.elapsed),this.materials.forEach(e=>{e.map.needsUpdate=!0})}update(e,t,n){if(!n||!this.screen||(this.screen.localToWorld(this.center.set(.34,0,0)),this.screen.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0)||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3))return!1;this.elapsed+=t;let r=Math.floor(this.elapsed*12);return r!==this.frame&&(this.frame=r,this.draw(),!0)}},jm=`#f1f7f4`,Mm=`#7ef3bd`,Nm=`#95b0aa`,Pm=`#ffc078`,Fm=`#c1abff`,Im=`#302149`;function Lm(e,t,n,r,i,a=jm,o=`left`){e.fillStyle=a,e.font=`700 ${i}px Arial, sans-serif`,e.textAlign=o,e.fillText(t,n,r)}function Rm(e,t,n,r,i,a){e.fillStyle=a,e.beginPath(),e.roundRect(t,n,r,i,16),e.fill()}function zm(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function Bm(e,t){e.fillStyle=`#0b211c`,e.fillRect(0,0,1024,565),Lm(e,`PEDEL-THRANE`,38,63,45,Mm),Lm(e,`KONTROLRUM / HAVNEGADE`,40,98,23,Nm),Rm(e,771,28,215,68,`#1d3c32`),Lm(e,`PÅ VAGT`,878,72,31,Mm,`center`),Rm(e,38,128,310,335,`#142f27`),Lm(e,`SERVERPARK`,62,164,23,Nm);for(let n=0;n<4;n++){let r=185+n*51;Rm(e,60,r,266,40,`#23453a`);for(let t=0;t<8;t++)e.fillStyle=`#102b22`,e.fillRect(76+t*18,r+12,9,16);e.globalAlpha=.55+.45*Math.sin(t*1.8+n)**2,zm(e,301,r+20,6,Mm),e.globalAlpha=1}e.strokeStyle=Mm,e.lineWidth=3,e.beginPath();for(let n=0;n<=60;n++){let r=61+n*4.4,i=426-Math.sin(n*.3-t)*8-Math.cos(n*.8+t)*4;n===0?e.moveTo(r,i):e.lineTo(r,i)}e.stroke(),[[`SERVERPARK`,`Stabil. Selvfølgelig.`,Mm,`#183b2f`],[`PRINTER`,`Fornærmet igen.`,`#ff9290`,`#43282a`],[`TERRASSELEM`,`Afventer tekniker.`,Pm,`#3a3423`]].forEach(([t,n,r,i],a)=>{let o=128+a*115;Rm(e,371,o,615,105,i),zm(e,403,o+33,7,r),Lm(e,t,425,o+40,24,r),Lm(e,n,395,o+83,35)}),Rm(e,38,486,948,51,`#1d3c32`),Lm(e,`ALT ER UNDER KONTROL*`,60,520,26,Mm),Lm(e,`*undtagen printeren`,964,520,23,Nm,`right`)}function Vm(e,t){e.fillStyle=`#21151f`,e.fillRect(0,0,1024,565),Lm(e,`MUSIKKOMMANDO`,38,63,47,Pm),Lm(e,`HAVNEGADE / ALLE HØJTTALERE`,40,99,23,`#c2a4b4`),Rm(e,799,31,187,59,`#49303b`),Lm(e,`DJ THRANE`,892,69,25,Pm,`center`);let n=Math.PI*.75,r=Math.PI*2.25;e.lineCap=`round`,e.lineWidth=18,e.strokeStyle=`#4c3038`,e.beginPath(),e.arc(235,294,136,n,r),e.stroke(),e.strokeStyle=Pm,e.beginPath(),e.arc(235,294,136,n,r-.08),e.stroke(),zm(e,235,294,109,`#382530`),Lm(e,`VOLUMEN`,235,252,23,`#c2a4b4`,`center`),Lm(e,`11`,235,347,111,Pm,`center`),Lm(e,`UD AF 10`,235,384,22,`#c2a4b4`,`center`),Lm(e,`HØJTTALERE`,466,165,31,`#c2a4b4`),Lm(e,`OVERTAGET`,463,220,57,Pm);for(let n=0;n<20;n++){let r=30+115*(.5+.5*Math.sin(t*2.3+n*.67))*(.7+.3*Math.cos(n));Rm(e,468+n*25,404-r,16,r,n%4==0?`#ff7c99`:Pm)}Lm(e,`KØEN ER MIN.`,467,447,26,`#c2a4b4`),Rm(e,38,486,948,51,`#49303b`),Lm(e,`NU SPILLER: ORNLIG SPADE`,60,520,27,Pm),Lm(e,`INGEN ØNSKER`,964,520,22,`#e4bdcd`,`right`)}var Hm=[[`DESIGNAFDELINGEN`,`Bare 500 credits mere?`],[`PROJEKTLEDELSEN`,`Det er til en hurtig opgave.`],[`MARKETING`,`Må jeg få lidt flere tokens?`]];function Um(e,t){let n=t%6,r=Math.floor(t/6),i=n>=1.2,[a,o]=Hm[r%Hm.length];e.fillStyle=`#231932`,e.fillRect(0,0,1024,565),Lm(e,`TOKENBANKEN`,38,66,49,Fm),Lm(e,`THRANE / BEVILLINGSCHEF`,40,103,23,`#b4a4c8`),Lm(e,`2.000`,981,69,58,Fm,`right`),Lm(e,`CREDITS / MÅNED`,981,106,22,`#b4a4c8`,`right`),e.save();let s=Math.min(1,n/.6);if(e.translate(0,(1-s)*20),Rm(e,38,140,948,278,`#eee7fb`),Lm(e,`ANSØGNING #${String(42+r).padStart(4,`0`)}`,65,184,23,`#796787`),Lm(e,a,65,237,28,Im),Lm(e,o,65,292,33,Im),e.fillStyle=`#d9cde8`,e.fillRect(66,322,504,3),Lm(e,`Begrundelse: Det er jo AI.`,65,367,24,`#796787`),i){let t=1.12-.12*Math.min(1,(n-1.2)/.35);e.translate(795,302),e.rotate(-.13),e.scale(t,t),e.strokeStyle=`#a42655`,e.lineWidth=9,e.strokeRect(-128,-69,256,138),Lm(e,`NEJ`,0,29,101,`#a42655`,`center`)}else Lm(e,`BEHANDLES…`,792,309,25,`#796787`,`center`);e.restore(),Lm(e,`EKSTRA CREDITS BEVILGET`,39,465,24,`#b4a4c8`),Lm(e,`0`,983,470,42,Fm,`right`),Rm(e,38,486,948,51,`#3f2b56`),Lm(e,`IKKE-UDVIKLER?  2.000 ER 2.000.`,60,520,27,Fm),Lm(e,i?`SAG LUKKET`:`NY ANSØGNING`,964,520,22,`#e2d4f6`,`right`)}var Wm=class{materials;screen;contexts=[];elapsed=3;frame=24;center=new U;normal=new U;offset=new U;projected=new U;constructor(){this.materials=[`kontrolrum`,`musik`,`tokenbank`].map(e=>{let t=document.createElement(`canvas`);t.width=768,t.height=424;let n=t.getContext(`2d`);n.scale(t.width/1024,t.height/565),this.contexts.push(n);let r=new yi(t);return r.colorSpace=Re,r.minFilter=c,r.generateMipmaps=!1,new Ur({name:`Thrane / ${e}`,map:r,toneMapped:!1})}),this.draw()}draw(){Bm(this.contexts[0],this.elapsed),Vm(this.contexts[1],this.elapsed),Um(this.contexts[2],this.elapsed),this.materials.forEach(e=>{e.map.needsUpdate=!0})}update(e,t,n){if(!n||!this.screen||(this.screen.localToWorld(this.center.set(.34,.195,0)),this.screen.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0)||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3))return!1;this.elapsed+=t;let r=Math.floor(this.elapsed*8);return r!==this.frame&&(this.frame=r,this.draw(),!0)}},Gm=1024,Km=565,qm=`#f5f5e9`,Jm=`#a5f3bf`,Ym=`#eea9df`;function Xm(e,t,n,r,i,a){e.fillStyle=a,e.fillRect(t,n,r,i)}function Zm(e,t,n,r,i,a=qm,o=`left`){e.fillStyle=a,e.font=`700 ${i}px monospace`,e.textAlign=o,e.fillText(t,n,r)}function Qm(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function $m(e,t,n,r,i){t=Math.round(t/4)*4,n=Math.round(n/4)*4,Xm(e,t-8,n-36,16,16,`#e9bc94`),Xm(e,t-12,n-20,24,26,r),Xm(e,t-20,n-17,8,22,r),Xm(e,t+12,n-17,8,22,r),Xm(e,t-12,n+6,24,12,`#124ba4`),Xm(e,t-12,n+18,8,12+i,qm),Xm(e,t+4,n+18,8,12-i,qm)}function eh(e,t){let n=(t+4.5)%9,r=n>=3.4;Xm(e,0,0,Gm,Km,`#0c2451`),Zm(e,`FCK`,40,75,70),Zm(e,r?`1 : 0`:`0 : 0`,512,76,67,qm,`center`),Zm(e,`GÆSTER`,984,71,35,`#99b9ed`,`right`),Zm(e,`MINI-KAMP / ALTID HJEMMEBANE`,40,113,22,`#99b9ed`);for(let t=0;t<10;t++)Xm(e,42+t*94,140,94,297,t%2?`#286548`:`#307351`);e.strokeStyle=`#afcfb0`,e.lineWidth=4,e.strokeRect(60,155,900,267),e.strokeRect(60,214,115,150),e.strokeRect(845,214,115,150),e.beginPath(),e.moveTo(510,155),e.lineTo(510,422),e.stroke(),e.beginPath(),e.arc(510,289,66,0,Math.PI*2),e.stroke(),Xm(e,961,244,37,90,`#102c3a`),e.lineWidth=2;for(let t=962;t<999;t+=9)e.beginPath(),e.moveTo(t,244),e.lineTo(t,334),e.stroke();for(let t=244;t<=334;t+=10)e.beginPath(),e.moveTo(961,t),e.lineTo(998,t),e.stroke();e.strokeStyle=qm,e.lineWidth=5,e.strokeRect(960,243,38,92);let i=Math.min(n/2,1),a=r?0:Math.sin(t*8)*5;$m(e,280+i*220,280,qm,a),$m(e,400,370,qm,-a),$m(e,720,210,`#f0ba57`,a),$m(e,806,365,`#f0ba57`,-a),$m(e,930,r?347:285,`#ed9155`,a);let o=Math.max(0,Math.min(1,(n-2)/1.4)),s=310+i*220+o*450,c=306-Math.sin(o*Math.PI)*45;if(Xm(e,s-9,c-9,18,18,qm),Xm(e,s-3,c-3,6,6,`#17384c`),r){Xm(e,270,228,480,111,`#174cba`),Zm(e,`MÅÅÅL!`,510,309,90,qm,`center`);for(let t=0;t<22;t++){let r=((n-3.4)*35+t*29)%240;Xm(e,80+t*41,166+r,9,16,t%2?qm:`#71a8ff`)}}Xm(e,40,465,944,64,`#164593`),Zm(e,r?`GOD KAMP, ALLE SAMMEN.`:`KOM SÅ, KØBENHAVN!`,512,508,34,qm,`center`)}function th(e,t){let n=Math.max(0,210-Math.floor(t%219)),r=t%10>=4.5;Xm(e,0,0,Gm,Km,`#2b2015`),Zm(e,`OVERDOMMER LARS`,40,69,52,`#ffd27e`),Zm(e,`AI-KONKURRENCEN / DOMMERBORDET`,42,109,23,`#cbb48c`),Xm(e,40,143,479,296,`#493420`),Zm(e,`TID TIL FREMLÆGGELSE`,279,184,23,`#e5cfa8`,`center`),Zm(e,`${String(Math.floor(n/60)).padStart(2,`0`)}:${String(n%60).padStart(2,`0`)}`,279,301,116,`#ffd27e`,`center`),Xm(e,70,333,419,9,`#6b5031`),Xm(e,70,333,419*n/210,9,`#ffd27e`),Zm(e,n===0?`TIDEN ER GÅET!`:`3½ MINUT. TAK.`,279,401,29,`#e5cfa8`,`center`),[[`SJOVT`,`8`],[`LÆRERIGT`,`7`],[`ORIGINALT ×3`,`9`]].forEach(([t,n],r)=>{let i=143+r*69;Xm(e,545,i,439,60,`#392b1e`),Zm(e,t,565,i+40,27,`#e5cfa8`),Zm(e,n,960,i+43,39,`#ffd27e`,`right`)}),Xm(e,545,365,439,74,r?`#963b32`:`#493420`),Zm(e,r?`−1 POINT`:`AFVENTER SLIDES`,764,411,r?48:29,qm,`center`),Zm(e,r?`FOR SENT ER FOR SENT.`:`OVERDOMMEREN DELTAGER IKKE.`,512,505,31,`#ffd27e`,`center`),Zm(e,`DOMMEN KAN IKKE APPELLERES`,512,541,22,`#cbb48c`,`center`)}function nh(e,t){let n=(t+4)%9,r=n>=3.5;Xm(e,0,0,Gm,Km,`#271c36`),Zm(e,`AI-KODE TIL BEDØMMELSE`,40,67,45,Ym),Zm(e,`REVIEW #042 / LARS HAR ORDET`,42,107,23,`#b9a4cc`),Xm(e,40,140,944,301,`#161725`),Xm(e,40,140,944,42,`#40304d`),Zm(e,`ai-forslag.ts`,60,169,22,`#dfd2ed`),Zm(e,r?`KRÆVER ET MENNESKE`:`GENERERER…`,962,169,21,Ym,`right`);let i=[`function virkerDet(kode) {`,`  // Det burde virke…`,`  return true;`,`}`],a=Math.floor(n*30),o=0;i.forEach((t,n)=>{Zm(e,String(n+1),65,230+n*52,28,`#756786`),Zm(e,t.slice(0,Math.max(0,a-o)),107,230+n*52,31,n===1?`#aa9cb8`:`#b0d5f5`),o+=t.length});let s=r?745:460+Math.sin(n*1.6)*235,c=r?243:265+Math.sin(n*2)*32;Qm(e,s,c,49,`#b2d6fa22`),e.strokeStyle=`#b2d6fa`,e.lineWidth=8,e.beginPath(),e.arc(s,c,49,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(s+35,c+35),e.lineTo(s+72,c+72),e.stroke(),r&&(e.save(),e.translate(683,352),e.rotate(-.08),Xm(e,-264,-68,528,136,`#4b263d`),e.strokeStyle=Ym,e.lineWidth=6,e.strokeRect(-264,-68,528,136),Zm(e,`MENER DU`,0,-10,43,Ym,`center`),Zm(e,`VIRKELIG DET?`,0,44,48,Ym,`center`),e.restore()),Zm(e,`MANUEL KVALITETSKONTROL`,512,503,38,Ym,`center`),Zm(e,`ET EKSTRA PAR MENNESKEØJNE`,512,540,22,`#b9a4cc`,`center`)}function rh(e,t){let n=(t+5)%10,r=Math.min(1,n/2),i=Math.max(0,Math.min(1,(n-3.5)/3)),a=n<3.5?228+r*188:416-i*188;Xm(e,0,0,Gm,Km,`#102a25`),Zm(e,`REFLOG ER DIN VEN`,40,67,51,Jm),Zm(e,`AFDELINGEN FOR TABTE COMMITS`,42,107,23,`#91b7a5`),Xm(e,40,143,468,300,`#0b1c19`),Zm(e,`$ git log`,62,188,31,Jm),Zm(e,`commit ikke fundet`,62,227,26,`#eeac85`),Zm(e,`$ git reflog`,62,284,31,Jm),Zm(e,`a1b2c3d  der var du!`,62,323,26,`#cee6d5`),Zm(e,`$ git cherry-pick`,62,382,29,Jm),Zm(e,`  a1b2c3d`,62,421,29,`#cee6d5`),Xm(e,549,408,435,35,`#365146`),Qm(e,850,310,62,`#738b7b`),Xm(e,788,310,124,99,`#738b7b`),Zm(e,`RIP`,850,320,39,`#17372c`,`center`),Zm(e,`COMMIT`,850,356,22,`#17372c`,`center`),n>=3.5&&(e.strokeStyle=`#d4b27b`,e.lineWidth=8,e.beginPath(),e.moveTo(561,385),e.quadraticCurveTo(575,155,680,158),e.stroke(),e.strokeStyle=`#d5eada`,e.lineWidth=3,e.beginPath(),e.moveTo(680,158),e.lineTo(680,a-30),e.stroke()),e.save(),e.beginPath(),e.rect(540,140,444,268),e.clip(),Xm(e,604,a-30,152,60,Jm),Zm(e,`a1b2c3d`,680,a+9,28,`#153c2c`,`center`),e.restore(),Xm(e,40,467,944,61,`#23483a`),Zm(e,i===1?`COMMIT GENOPLIVET. SELVFØLGELIG.`:n>=3.5?`FISKER HISTORIKKEN FREM…`:`SLETTET ER IKKE ALTID VÆK.`,512,508,30,Jm,`center`)}var ih=class{materials;screen;contexts=[];elapsed=0;frame=0;center=new U;normal=new U;offset=new U;projected=new U;constructor(){this.materials=[`FCK`,`overdommer`,`AI-kode`,`reflog`].map(e=>{let t=document.createElement(`canvas`);t.width=768,t.height=424;let n=t.getContext(`2d`);n.scale(t.width/Gm,t.height/Km),this.contexts.push(n);let r=new yi(t);return r.colorSpace=Re,r.minFilter=c,r.generateMipmaps=!1,new Ur({name:`Lars / ${e}`,map:r,toneMapped:!1})}),this.draw()}draw(){eh(this.contexts[0],this.elapsed),th(this.contexts[1],this.elapsed),nh(this.contexts[2],this.elapsed),rh(this.contexts[3],this.elapsed),this.materials.forEach(e=>{e.map.needsUpdate=!0})}update(e,t,n){if(!n||!this.screen||(this.screen.localToWorld(this.center.set(.34,.195,0)),this.screen.getWorldDirection(this.normal),this.offset.copy(e.position).sub(this.center),this.offset.lengthSq()>64||this.offset.dot(this.normal)<=0)||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>1.3||Math.abs(this.projected.y)>1.3))return!1;this.elapsed+=t;let r=Math.floor(this.elapsed*8);return r!==this.frame&&(this.frame=r,this.draw(),!0)}},ah=new U,oh=new At,sh=new U,ch=class extends On{constructor(e=document.createElement(`div`)){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.pointerEvents=`auto`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}},lh=new en,uh=new en,dh=class{constructor(e={}){let t=this,n,r,i,a,o={camera:{style:``},objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s;let c=document.createElement(`div`);c.style.transformOrigin=`0 0`,c.style.pointerEvents=`none`,s.appendChild(c);let l=document.createElement(`div`);l.style.transformStyle=`preserve-3d`,c.appendChild(l),this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){let s=t.projectionMatrix.elements[5]*a;t.view&&t.view.enabled?(c.style.transform=`translate( ${-t.view.offsetX*(n/t.view.width)}px, ${-t.view.offsetY*(r/t.view.height)}px )`,c.style.transform+=`scale( ${t.view.fullWidth/t.view.width}, ${t.view.fullHeight/t.view.height} )`):c.style.transform=``,e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld();let f,p;t.isOrthographicCamera&&(f=-(t.right+t.left)/2,p=(t.top+t.bottom)/2);let h=t.view&&t.view.enabled?t.view.height/t.view.fullHeight:1,g=t.isOrthographicCamera?`scale( ${h} )scale(`+s+`)translate(`+u(f)+`px,`+u(p)+`px)`+d(t.matrixWorldInverse):`scale( ${h} )translateZ(`+s+`px)`+d(t.matrixWorldInverse),_=(t.isPerspectiveCamera?`perspective(`+s+`px) `:``)+g+`translate(`+i+`px,`+a+`px)`;o.camera.style!==_&&(l.style.transform=_,o.camera.style=_),m(e,e,t,g)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`,c.style.width=e+`px`,c.style.height=t+`px`,l.style.width=e+`px`,l.style.height=t+`px`};function u(e){return Math.abs(e)<1e-10?0:e}function d(e){let t=e.elements;return`matrix3d(`+u(t[0])+`,`+u(-t[1])+`,`+u(t[2])+`,`+u(t[3])+`,`+u(t[4])+`,`+u(-t[5])+`,`+u(t[6])+`,`+u(t[7])+`,`+u(t[8])+`,`+u(-t[9])+`,`+u(t[10])+`,`+u(t[11])+`,`+u(t[12])+`,`+u(-t[13])+`,`+u(t[14])+`,`+u(t[15])+`)`}function f(e){let t=e.elements;return`translate(-50%,-50%)`+(`matrix3d(`+u(t[0])+`,`+u(t[1])+`,`+u(t[2])+`,`+u(t[3])+`,`+u(-t[4])+`,`+u(-t[5])+`,`+u(-t[6])+`,`+u(-t[7])+`,`+u(t[8])+`,`+u(t[9])+`,`+u(t[10])+`,`+u(t[11])+`,`+u(t[12])+`,`+u(t[13])+`,`+u(t[14])+`,`+u(t[15])+`)`)}function p(e){e.isCSS3DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)p(e.children[t])}function m(e,n,r,i){if(e.visible===!1){p(e);return}if(e.isCSS3DObject){let i=e.layers.test(r.layers)===!0,a=e.element;if(a.style.display=i===!0?``:`none`,i===!0){e.onBeforeRender(t,n,r);let i;e.isCSS3DSprite?(lh.copy(r.matrixWorldInverse),lh.transpose(),e.rotation2D!==0&&lh.multiply(uh.makeRotationZ(e.rotation2D)),e.matrixWorld.decompose(ah,oh,sh),lh.setPosition(ah),lh.scale(sh),lh.elements[3]=0,lh.elements[7]=0,lh.elements[11]=0,lh.elements[15]=1,i=f(lh)):i=f(e.matrixWorld);let s=o.objects.get(e);if(s===void 0||s.style!==i){a.style.transform=i;let t={style:i};o.objects.set(e,t)}a.parentNode!==l&&l.appendChild(a),e.onAfterRender(t,n,r)}}for(let t=0,a=e.children.length;t<a;t++)m(e.children[t],n,r,i)}}};function fh(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}function ph(e,t){let n=new U,r=new U,i=new U,a=new U,o=new U,s=new ys,{width:c,height:l}=e.geometry.parameters,u=[[0,0],[-.49,-.49],[-.49,.49],[.49,-.49],[.49,.49]];return d=>(e.updateWorldMatrix(!0,!1),e.getWorldPosition(n),i.copy(d.position).sub(n),r.set(0,0,1).transformDirection(e.matrixWorld),a.copy(n).project(d),!fh(e)||i.lengthSq()>16||r.dot(i)<=.05||a.z<-1||a.z>1||Math.abs(a.x)>1||Math.abs(a.y)>1?!1:u.every(([n,r])=>(o.set(n*c,r*l,0).applyMatrix4(e.matrixWorld),i.copy(o).sub(d.position),s.set(d.position,i.clone().normalize()),s.far=i.length()+.001,s.intersectObject(t,!0).find(e=>fh(e.object))?.object===e)))}var mh=`pomFE55c_Sw`;function hh(){let e=document.createElement(`canvas`);e.width=960,e.height=529;let t=e.getContext(`2d`);t.fillStyle=`#151515`,t.fillRect(0,0,e.width,e.height),t.fillStyle=`#ff0033`,t.beginPath(),t.roundRect(375,110,210,145,36),t.fill(),t.fillStyle=`#ffffff`,t.beginPath(),t.moveTo(461,149),t.lineTo(461,217),t.lineTo(520,183),t.fill(),t.textAlign=`center`,t.font=`bold 48px Arial`,t.fillText(`YouTube`,480,340),t.fillStyle=`#b9b9b9`,t.font=`26px Arial`,t.fillText(`Gå tættere på for at afspille`,480,402);let n=new yi(e);return n.colorSpace=Re,new Ur({map:n,toneMapped:!1})}var gh=class{screen;renderer=new dh;scene=new Ln;iframe=document.createElement(`iframe`);display;center=new U;worldScale=new U;visible;loaded=!1;constructor(e,t,n){if(this.screen=e,!(e.geometry instanceof qa))throw Error(`YouTube requires a flat monitor`);this.visible=ph(e,t),this.iframe.className=`youtube-screen`,this.iframe.title=`YouTube på Martins anden skærm`,this.iframe.width=`960`,this.iframe.height=`529`,this.iframe.allow=`autoplay; encrypted-media; picture-in-picture; fullscreen`,this.iframe.allowFullscreen=!0,this.iframe.referrerPolicy=`strict-origin-when-cross-origin`,this.display=new ch(this.iframe),this.display.visible=!1,this.scene.add(this.display),this.renderer.domElement.className=`youtube-layer`,this.renderer.domElement.style.overflow=`clip`,n.after(this.renderer.domElement),this.resize(),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.unload()})}resize(){this.renderer.setSize(innerWidth,innerHeight)}unload(){this.loaded&&=(this.iframe.removeAttribute(`src`),!1)}update(e,t){if(this.screen.getWorldPosition(this.center),(!t||e.position.distanceToSquared(this.center)>25)&&this.unload(),this.display.visible=t&&this.visible(e),this.display.visible){this.screen.matrixWorld.decompose(this.display.position,this.display.quaternion,this.worldScale);let{width:e,height:t}=this.screen.geometry.parameters;this.display.scale.set(e/960,t/529,1).multiply(this.worldScale),this.loaded||=(this.iframe.src=`https://www.youtube.com/embed/${mh}?playsinline=1&rel=0`,!0)}this.renderer.render(this.scene,e)}},_h=`/3doffice/dist/assets/thrane-pixel-pinup-CdYYM-RA.webp`,vh=`/3doffice/dist/assets/thrane-children-Wo8Fg2De.webp`,yh=`/3doffice/dist/assets/astro-logo-Cg72ZFME.png`,bh=`/3doffice/dist/assets/wiibroe-pilsner-CIYQq_27.webp`,xh=`/3doffice/dist/assets/wiibroe-2026-xvdzOPiK.webp`,Sh=`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjU2NSIgdmlld0JveD0iMCAwIDEwMjQgNTY1Ij4KICA8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI1NjUiIGZpbGw9IiNlZWYyZjYiLz4KICA8ZyBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPgogICAgPHJlY3Qgd2lkdGg9IjEwMjQiIGhlaWdodD0iNzAiIGZpbGw9IiMyMDNiNTciLz4KICAgIDx0ZXh0IHg9IjI4IiB5PSI0NiIgZm9udC1zaXplPSIzMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj5BTkFMWVNFPC90ZXh0PgogICAgPHRleHQgeD0iNzcwIiB5PSI0NCIgZm9udC1zaXplPSIyMiIgZmlsbD0iI2Q1ZTNlZSI+S3ZhcnRhbHNvdmVyc2lndDwvdGV4dD4KICAgIDxyZWN0IHg9IjI0IiB5PSI5MCIgd2lkdGg9IjMwOCIgaGVpZ2h0PSI5MiIgcng9IjgiIGZpbGw9IndoaXRlIi8+CiAgICA8cmVjdCB4PSIzNTAiIHk9IjkwIiB3aWR0aD0iMzIyIiBoZWlnaHQ9IjkyIiByeD0iOCIgZmlsbD0id2hpdGUiLz4KICAgIDxyZWN0IHg9IjY5MCIgeT0iOTAiIHdpZHRoPSIzMTAiIGhlaWdodD0iOTIiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPgogICAgPGcgZmlsbD0iIzZiN2M4ZCIgZm9udC1zaXplPSIxOSI+PHRleHQgeD0iNDQiIHk9IjExOCI+VURWSUtMSU5HPC90ZXh0Pjx0ZXh0IHg9IjM3MCIgeT0iMTE4Ij5BS1RJVklURVQ8L3RleHQ+PHRleHQgeD0iNzEwIiB5PSIxMTgiPk3DhUxPUEZZTERFTFNFPC90ZXh0PjwvZz4KICAgIDxnIGZvbnQtc2l6ZT0iMzgiIGZvbnQtd2VpZ2h0PSJib2xkIj48dGV4dCB4PSI0NCIgeT0iMTYwIiBmaWxsPSIjMjU4ZjgyIj4rMTgsNiAlPC90ZXh0Pjx0ZXh0IHg9IjM3MCIgeT0iMTYwIiBmaWxsPSIjMzc2N2JkIj4xLjI0ODwvdGV4dD48dGV4dCB4PSI3MTAiIHk9IjE2MCIgZmlsbD0iIzc3NjBiMCI+OTIgJTwvdGV4dD48L2c+CiAgICA8cmVjdCB4PSIyNCIgeT0iMjAyIiB3aWR0aD0iNTkwIiBoZWlnaHQ9IjMzNiIgcng9IjgiIGZpbGw9IndoaXRlIi8+CiAgICA8cmVjdCB4PSI2MzIiIHk9IjIwMiIgd2lkdGg9IjM2OCIgaGVpZ2h0PSIzMzYiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPgogICAgPGcgZmlsbD0iIzI2M2U1NiIgZm9udC1zaXplPSIyNSIgZm9udC13ZWlnaHQ9ImJvbGQiPjx0ZXh0IHg9IjQ0IiB5PSIyNDEiPlVkdmlrbGluZyBvdmVyIHRpZDwvdGV4dD48dGV4dCB4PSI2NTIiIHk9IjI0MSI+UHIuIG3DpW5lZDwvdGV4dD48L2c+CiAgICA8ZyBzdHJva2U9IiNlMGU3ZWUiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTgwIDI4NUg1ODBNODAgMzQ1SDU4ME04MCA0MDVINTgwTTgwIDQ2NUg1ODBNNjc3IDI4NUg5NjZNNjc3IDM0NUg5NjZNNjc3IDQwNUg5NjZNNjc3IDQ2NUg5NjYiLz48L2c+CiAgICA8cGF0aCBkPSJNODAgNDM4IDE1MSA0MDkgMjIyIDQyNiAyOTMgMzYyIDM2NCAzODAgNDM1IDMxNSA1MDYgMzMxIDU3NyAyNzlWNDY1SDgwWiIgZmlsbD0iI2RlZWRmOSIvPgogICAgPHBhdGggZD0iTTgwIDQzOCAxNTEgNDA5IDIyMiA0MjYgMjkzIDM2MiAzNjQgMzgwIDQzNSAzMTUgNTA2IDMzMSA1NzcgMjc5IiBmaWxsPSJub25lIiBzdHJva2U9IiMzYjgyYzQiIHN0cm9rZS13aWR0aD0iNyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTTgwIDQ1MSAxNTEgNDM0IDIyMiAzOTkgMjkzIDQyMSAzNjQgMzkyIDQzNSAzNjUgNTA2IDM3NiA1NzcgMzM5IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGE3OTMiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPGcgZmlsbD0iIzNiODJjNCI+PGNpcmNsZSBjeD0iMTUxIiBjeT0iNDA5IiByPSI2Ii8+PGNpcmNsZSBjeD0iMjkzIiBjeT0iMzYyIiByPSI2Ii8+PGNpcmNsZSBjeD0iNDM1IiBjeT0iMzE1IiByPSI2Ii8+PGNpcmNsZSBjeD0iNTc3IiBjeT0iMjc5IiByPSI2Ii8+PC9nPgogICAgPGcgZmlsbD0iIzZiN2M4ZCIgZm9udC1zaXplPSIxOCI+PHRleHQgeD0iMzciIHk9IjI5MSI+MTAwPC90ZXh0Pjx0ZXh0IHg9IjQ3IiB5PSIzNTEiPjc1PC90ZXh0Pjx0ZXh0IHg9IjQ3IiB5PSI0MTEiPjUwPC90ZXh0Pjx0ZXh0IHg9IjQ3IiB5PSI0NzEiPjI1PC90ZXh0Pjx0ZXh0IHg9IjgwIiB5PSI0OTUiPkphbjwvdGV4dD48dGV4dCB4PSIyMjIiIHk9IjQ5NSI+TWFyPC90ZXh0Pjx0ZXh0IHg9IjM2NCIgeT0iNDk1Ij5NYWo8L3RleHQ+PHRleHQgeD0iNTQ4IiB5PSI0OTUiPkF1ZzwvdGV4dD48L2c+CiAgICA8cmVjdCB4PSI2ODUiIHk9IjM4MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9Ijg1IiByeD0iMyIgZmlsbD0iIzg1YjdlMCIvPgogICAgPHJlY3QgeD0iNzQ0IiB5PSIzNDMiIHdpZHRoPSI0NSIgaGVpZ2h0PSIxMjIiIHJ4PSIzIiBmaWxsPSIjNjJhMmQ0Ii8+CiAgICA8cmVjdCB4PSI4MDMiIHk9IjM2MCIgd2lkdGg9IjQ1IiBoZWlnaHQ9IjEwNSIgcng9IjMiIGZpbGw9IiM0OThjYzYiLz4KICAgIDxyZWN0IHg9Ijg2MiIgeT0iMzEyIiB3aWR0aD0iNDUiIGhlaWdodD0iMTUzIiByeD0iMyIgZmlsbD0iIzM2NzliOSIvPgogICAgPHJlY3QgeD0iOTIxIiB5PSIyNzYiIHdpZHRoPSI0NSIgaGVpZ2h0PSIxODkiIHJ4PSIzIiBmaWxsPSIjMmRhNzkzIi8+CiAgICA8ZyBmaWxsPSIjNmI3YzhkIiBmb250LXNpemU9IjE4Ij48dGV4dCB4PSI2ODkiIHk9IjQ5NSI+QXByPC90ZXh0Pjx0ZXh0IHg9Ijc0OCIgeT0iNDk1Ij5NYWo8L3RleHQ+PHRleHQgeD0iODA4IiB5PSI0OTUiPkp1bjwvdGV4dD48dGV4dCB4PSI4NjkiIHk9IjQ5NSI+SnVsPC90ZXh0Pjx0ZXh0IHg9IjkyNSIgeT0iNDk1Ij5BdWc8L3RleHQ+PC9nPgogICAgPHBhdGggZD0iTTgwIDUyMUgxMDgiIHN0cm9rZT0iIzNiODJjNCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTI3MCA1MjFIMjk4IiBzdHJva2U9IiMyZGE3OTMiIHN0cm9rZS13aWR0aD0iNSIvPgogICAgPGcgZm9udC1zaXplPSIxNyIgZmlsbD0iIzZiN2M4ZCI+PHRleHQgeD0iMTIwIiB5PSI1MjciPkFrdHVlbHQ8L3RleHQ+PHRleHQgeD0iMzEwIiB5PSI1MjciPkZvcnJpZ2UgcGVyaW9kZTwvdGV4dD48L2c+CiAgPC9nPgo8L3N2Zz4K`,Ch=`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjU2NSIgdmlld0JveD0iMCAwIDEwMjQgNTY1Ij4KICA8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI1NjUiIGZpbGw9IiNlZWYyZjYiLz4KICA8ZyBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPgogICAgPHJlY3Qgd2lkdGg9IjEwMjQiIGhlaWdodD0iNzAiIGZpbGw9IiMyMDNiNTciLz4KICAgIDx0ZXh0IHg9IjI4IiB5PSI0NiIgZm9udC1zaXplPSIzMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj5ESUFHUkFNTUVSPC90ZXh0PgogICAgPHRleHQgeD0iNzc4IiB5PSI0NCIgZm9udC1zaXplPSIyMiIgZmlsbD0iI2Q1ZTNlZSI+T3ZlcmJsaWsgJmFtcDsgcHJvY2VzPC90ZXh0PgogICAgPHJlY3QgeD0iMjQiIHk9IjkyIiB3aWR0aD0iMzgwIiBoZWlnaHQ9IjQ0NCIgcng9IjgiIGZpbGw9IndoaXRlIi8+CiAgICA8cmVjdCB4PSI0MjQiIHk9IjkyIiB3aWR0aD0iNTc2IiBoZWlnaHQ9IjQ0NCIgcng9IjgiIGZpbGw9IndoaXRlIi8+CiAgICA8ZyBmb250LXNpemU9IjI1IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzI2M2U1NiI+PHRleHQgeD0iNDYiIHk9IjEzNSI+Rm9yZGVsaW5nPC90ZXh0Pjx0ZXh0IHg9IjQ0OCIgeT0iMTM1Ij5Qcm9qZWt0Zm9ybMO4YjwvdGV4dD48L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTQgMjgwKSByb3RhdGUoLTkwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI0OCI+CiAgICAgIDxjaXJjbGUgcj0iOTEiIHN0cm9rZT0iI2U1ZWJmMiIvPgogICAgICA8Y2lyY2xlIHI9IjkxIiBzdHJva2U9IiMzYjgyYzQiIHN0cm9rZS1kYXNoYXJyYXk9IjI4NiA1NzIiLz4KICAgICAgPGNpcmNsZSByPSI5MSIgc3Ryb2tlPSIjMmRhNzkzIiBzdHJva2UtZGFzaGFycmF5PSIxNzIgNTcyIiBzdHJva2UtZGFzaG9mZnNldD0iLTI4NiIvPgogICAgICA8Y2lyY2xlIHI9IjkxIiBzdHJva2U9IiNlYWIzNTQiIHN0cm9rZS1kYXNoYXJyYXk9IjExNCA1NzIiIHN0cm9rZS1kYXNob2Zmc2V0PSItNDU4Ii8+CiAgICA8L2c+CiAgICA8dGV4dCB4PSIyMTQiIHk9IjI4MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIzNSIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyNjNlNTYiPjEwMCAlPC90ZXh0PgogICAgPHRleHQgeD0iMjE0IiB5PSIzMDciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2YjdjOGQiPnNhbWxldDwvdGV4dD4KICAgIDxnIGZvbnQtc2l6ZT0iMjIiIGZpbGw9IiM1MzY3NzkiPgogICAgICA8cmVjdCB4PSI1MiIgeT0iNDI0IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSI0IiBmaWxsPSIjM2I4MmM0Ii8+PHRleHQgeD0iODgiIHk9IjQ0MiI+QW5hbHlzZTwvdGV4dD48dGV4dCB4PSIzMTAiIHk9IjQ0MiI+NTAgJTwvdGV4dD4KICAgICAgPHJlY3QgeD0iNTIiIHk9IjQ2MSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzJkYTc5MyIvPjx0ZXh0IHg9Ijg4IiB5PSI0NzkiPlVkdmlrbGluZzwvdGV4dD48dGV4dCB4PSIzMTAiIHk9IjQ3OSI+MzAgJTwvdGV4dD4KICAgICAgPHJlY3QgeD0iNTIiIHk9IjQ5OCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iI2VhYjM1NCIvPjx0ZXh0IHg9Ijg4IiB5PSI1MTYiPlRlc3Q8L3RleHQ+PHRleHQgeD0iMzEwIiB5PSI1MTYiPjIwICU8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyBmaWxsPSJub25lIiBzdHJva2U9IiM5YWFmYmYiIHN0cm9rZS13aWR0aD0iNCI+CiAgICAgIDxwYXRoIGQ9Ik03MTIgMjIyVjI1NU03MTIgMzMzVjM2Nk02MjAgMjk0SDUyNVY0MDRINjA4TTgwNCAyOTRIOTAxVjQwNEg4MTYiLz4KICAgICAgPHBhdGggZD0ibTcwNCAyNDYgOCA5IDgtOW0tMTYgMTExIDggMTAgOC0xME01OTYgMzk2bDEyIDgtMTIgOG0yMzItMTYtMTIgOCAxMiA4Ii8+CiAgICA8L2c+CiAgICA8cmVjdCB4PSI2MDgiIHk9IjE2NCIgd2lkdGg9IjIwOCIgaGVpZ2h0PSI1OCIgcng9IjEyIiBmaWxsPSIjM2I4MmM0Ii8+CiAgICA8cGF0aCBkPSJtNzEyIDI1NSA5MiAzOS05MiAzOS05Mi0zOVoiIGZpbGw9IiNlZGY1ZmQiIHN0cm9rZT0iIzNiODJjNCIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgICA8cmVjdCB4PSI0NTAiIHk9IjM1OSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI3MCIgcng9IjEwIiBmaWxsPSIjZmRmMWQ5Ii8+CiAgICA8cmVjdCB4PSI4MjYiIHk9IjM1OSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI3MCIgcng9IjEwIiBmaWxsPSIjZTllMmY2Ii8+CiAgICA8cmVjdCB4PSI2MDgiIHk9IjM3NCIgd2lkdGg9IjIwOCIgaGVpZ2h0PSI2MCIgcng9IjEyIiBmaWxsPSIjMmRhNzkzIi8+CiAgICA8ZyB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+CiAgICAgIDx0ZXh0IHg9IjcxMiIgeT0iMjAxIiBmaWxsPSJ3aGl0ZSI+SWTDqTwvdGV4dD48dGV4dCB4PSI3MTIiIHk9IjMwMiIgZmlsbD0iIzM3NjdhMCI+QW5hbHlzZTwvdGV4dD4KICAgICAgPHRleHQgeD0iNTI1IiB5PSI0MDIiIGZpbGw9IiM5NTcyM2EiPlBsYW48L3RleHQ+PHRleHQgeD0iOTAxIiB5PSI0MDIiIGZpbGw9IiM3ODYzYTciPlRlc3Q8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjcxMiIgeT0iNDEzIiBmaWxsPSJ3aGl0ZSI+TGV2ZXJpbmc8L3RleHQ+CiAgICA8L2c+CiAgICA8cmVjdCB4PSI0NTIiIHk9IjQ3NCIgd2lkdGg9IjUyMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiBmaWxsPSIjZTdlZWYzIi8+CiAgICA8cmVjdCB4PSI0NTIiIHk9IjQ3NCIgd2lkdGg9IjM5MCIgaGVpZ2h0PSIzMCIgcng9IjE1IiBmaWxsPSIjMmRhNzkzIi8+CiAgICA8dGV4dCB4PSI3MTIiIHk9IjQ5NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMyMDNiNTciPjc1ICUgZ2VubmVtZsO4cnQ8L3RleHQ+CiAgPC9nPgo8L3N2Zz4K`,wh=new G({color:`#a4815d`,roughness:.8}),Th=new G({color:`#b49b7a`,map:q.sofa.map,roughness:.95}),Eh=new G({color:`#353e3e`,map:q.sofa.map,roughness:.9}),Dh=new G({color:`#a7aeae`,metalness:.6,roughness:.4}),Oh=new G({color:`#b8bdb5`,transparent:!0,opacity:.4,roughness:.9,depthWrite:!1}),kh=new G({color:`#c5ad64`,metalness:.65,roughness:.3});function Ah(e,t,n,r){let i=document.createElement(`canvas`);i.width=1024,i.height=565;let a=i.getContext(`2d`);a.fillStyle=t,a.fillRect(0,0,i.width,i.height);let o=r?i.height-150:i.height;r&&(a.fillStyle=`#f5edff`,a.font=`700 64px Arial, sans-serif`,a.textAlign=`center`,a.fillText(r,i.width/2,i.height-65,i.width*.86));let s=new yi(i);return s.colorSpace=Re,new Fo().load(e,e=>{let[t,r,c,l]=n??[0,0,e.width,e.height],u=Math.min(i.width/c,o/l)*.84;a.drawImage(e,t,r,c,l,(i.width-c*u)/2,(o-l*u)/2,c*u,l*u),s.needsUpdate=!0}),new Ur({map:s,toneMapped:!1})}function jh(e){let t=new Io().load(e);return t.colorSpace=Re,new Ur({map:t,toneMapped:!1})}function Mh(e,t){let n=t?wh:Eh;Z(e,.5,.1,.48,0,.49,0,n,.055),Z(e,.49,.43,.085,0,.77,.22,n,.07).rotation.x=-.12,$(e,[0,.17,0],[0,.46,0],.035,q.black);for(let t=0;t<5;t++){let n=t*Math.PI*2/5,r=Math.cos(n)*.32,i=Math.sin(n)*.32;$(e,[0,.16,0],[r,.065,i],.023,q.black),Q(e,.041,.041,.035,r,.041,i,q.black).rotation.z=Math.PI/2}for(let t of[-.29,.29])$(e,[t,.47,-.12],[t,.69,-.12],.014,q.black),Z(e,.075,.055,.34,t,.7,0,n,.02),$(e,[t,.68,.15],[t,.47,.15],.014,q.black)}function Nh(e,t,n=!1,r=!1,i,a=!1,o){let s=n?.34:.63,c=n?.61:.36,l=a?1.56:1.17;a||Z(e,.23,.025,.16,t,.795,-.17,q.black),$(e,[t,a?1.09:.81,-.2],[t,l-.08,-.2],.018,q.black);let u=new W;e.add(u),u.position.set(t,l,-.17),a&&(u.rotation.x=.06),Z(u,s,c,.045,0,0,0,q.black,.009),Z(u,s-.028,c-.028,.007,0,0,.027,r?Dh:q.screen);let d;if(i){let e=new qa(s-.028,c-.028);if(o){let t=e.getAttribute(`uv`);for(let e=0;e<t.count;e++)t.setXY(e,(t.getX(e)+o[0])/2,(t.getY(e)+o[1])/2)}d=X(u,e,i,0,0,.032),d.castShadow=!1,d.receiveShadow=!1}return r&&!i&&(Z(u,s*.75,c*.52,.004,0,.03,.033,q.white),Z(u,s*.75,.03,.004,0,.03+c*.26,.036,Eh)),d}function Ph(e){let t=new W;e.add(t),t.position.set(-.51,.79,.18),Z(t,.32,.016,.23,0,0,0,Dh,.006),Z(t,.27,.003,.095,0,.01,-.035,q.black,.003);for(let e=0;e<4;e++)Z(t,.25,.002,.004,0,.012,-.067+e*.022,Dh);Z(t,.095,.002,.055,0,.01,.065,Eh,.003);let n=new W;t.add(n),n.position.set(0,.008,-.11),n.rotation.x=-.16,Z(n,.32,.21,.013,0,.105,0,q.black,.006),Z(n,.293,.178,.003,0,.107,.009,q.screen),Q(n,.002,.002,.002,0,.2,.009,Dh).rotation.x=Math.PI/2}function Fh(e,t,n,r,i=`dual`){let a=new W;e.add(a),a.position.set(t.x,0,t.z),a.rotation.y=t.rotation,Z(a,Pd.width,.035,Pd.depth,0,.755,0,q.black,.009);let o=Pd.width/2-.14;for(let e of[-o,o])Z(a,.06,.71,.065,e,.38,0,Dh),Z(a,.09,.045,Pd.depth-.15,e,.035,0,q.metal,.015);Z(a,Pd.width-.3,.055,.05,0,.56,-.17,q.metal);let s=t.islandIndex===5&&t.side===1,c=Array.isArray(r)?r:[r],l=i!==`dual`,u=i===`spanned`,d=Nh(a,-.34,s,s,c[0],!1,u?[0,0]:void 0),f=Nh(a,.34,s,s,u?c[0]:c[1],!1,u?[1,0]:void 0);l&&(Nh(a,-.34,!1,!1,u?c[0]:c[2],!0,u?[0,1]:void 0),Nh(a,.34,!1,!1,u?c[0]:c[3],!0,u?[1,1]:void 0)),Z(a,.42,.018,.15,-.1,.785,.17,n%4?q.black:q.white,.009);for(let e=0;e<4;e++)Z(a,.38,.003,.008,-.1,.796,.117+e*.029,Dh);X(a,new Ja(.045,10,6),q.black,.22,.802,.18).scale.set(.6,.4,1),l?Ph(a):n%3==0&&(Z(a,.3,.016,.22,-.53,.79,.15,Dh),Z(a,.3,.2,.014,-.53,.89,.045,q.black).rotation.x=-.12),Q(a,.035,.03,.095,.6,.823,.13,n%2?q.white:wh),n%4==1&&Q(a,.035,.035,.26,.58,.91,-.22,Dh);let p=new W;return a.add(p),p.position.set(0,0,Fd),p.rotation.y=n%2?.07:-.09,Mh(p,n%3!=1),Z(a,Pd.width-.15,.006,.95,0,.027,Fd-.1,Oh),Q(a,.12,.085,.26,.56,.145,.42,q.black),Q(a,.126,.126,.025,.56,.276,.42,Dh),X(a,new Xa(new $i(new U(-.3,.74,-.25),new U(.25,.15,-.25),new U(.55,.14,-.17)),8,.007,4,!1),q.black,0,0,0),n%4==0&&Z(a,.22,.42,.4,.43,.23,-.13,q.black,.014),(n===5||n===11)&&(Z(a,.13,.035,.13,.58,.8,-.23,q.black),Q(a,.045,.065,.08,.58,.86,-.23,kh),$(a,[.58,.89,-.23],[.58,1.06,-.23],.014,kh),Q(a,.08,.025,.13,.58,1.1,-.23,kh)),{display:d,secondaryDisplay:f}}function Ih(e){let t=new W;e.add(t),t.position.set(-.485,1.78,20.3),t.rotation.y=Math.PI/2,Z(t,2.05,2.1,.07,0,0,0,q.black);let n=document.createElement(`canvas`);n.width=n.height=512;let r=n.getContext(`2d`);r.fillStyle=`#20391b`,r.fillRect(0,0,512,512);let i=89,a=()=>(i=i*1664525+1013904223>>>0)/4294967296;for(let e=0;e<1700;e++){let e=a()*512,t=a()*512,n=2+a()*20;r.fillStyle=`hsl(${74+a()*34} 42% ${15+a()*24}%)`,r.beginPath(),r.ellipse(e,t,n,n*(.5+a()),a()*Math.PI,0,Math.PI*2),r.fill()}let o=new yi(n);o.colorSpace=Re,Z(t,1.97,2.02,.025,0,0,.05,new G({map:o,bumpMap:o,bumpScale:.09,roughness:1}));let s=new pi(new Ga(1,1),new G({roughness:1}),110),c=new On;for(let e=0;e<110;e++){let t=.035+a()*.085;c.position.set((a()-.5)*1.8,(a()-.5)*1.85,.085),c.scale.set(t,t,t*.55),c.updateMatrix(),s.setMatrixAt(e,c.matrix),s.setColorAt(e,new Fn().setHSL(.21+a()*.06,.45,.14+a()*.16))}t.add(s);let l=new W;e.add(l),l.position.set(-.43,1.25,21.65),l.rotation.y=Math.PI/2;for(let[e,t]of[[0,.17],[.2,.125]])X(l,new Ja(t,16,12),q.black,0,e,0).scale.set(1,1.13,.25);Z(l,.055,.62,.035,0,.55,0,q.bark),Q(l,.05,.05,.008,0,.14,.05,kh).rotation.x=Math.PI/2,Z(l,.08,.14,.04,0,.9,0,q.black,.01);for(let e=0;e<6;e++)$(l,[-.02+e*.008,.02,.06],[-.02+e*.008,.93,.025],.0012,Dh);Z(e,.4,.9,1.1,-.27,.45,22.6,q.white)}function Lh(e,t){let n=new W;e.add(n),n.position.set(t.x,0,t.z),n.rotation.y=t.rotation,Z(n,t.width,.2,.86,0,.28,0,Th,.045);for(let e of[-t.width/4,t.width/4])Z(n,t.width/2-.045,.18,.67,e,.46,.06,Th,.055),Z(n,t.width/2-.05,.48,.15,e,.69,-.31,Th,.055).rotation.x=-.12;for(let e of[-t.width/2,t.width/2]){Z(n,.13,.38,.86,e,.49,0,Th,.045);for(let t of[-.32,.32])$(n,[e,.02,t],[e,.22,t],.018,q.black)}Z(n,.34,.34,.13,t.width*.32,.71,-.08,q.white,.045).rotation.z=-.18}function Rh(e){let t=new W;e.add(t);let n=mp(t),r=new Io().load(_h);r.colorSpace=Re,r.magFilter=a;let i=new Io().load(vh);i.colorSpace=Re;let o=new Ur({map:r,toneMapped:!1}),s=e=>!1,c=new wp,l=new Ip,u=new qp,d=new _m,f=new ym,p=new Am,m=new Wm,h=new ih,g=[o,...m.materials],_=[Ah(yh,`#171426`,void 0,`Det kan laves i CSS`),hh()],v,y=[Ah(bh,`#f3edda`),Ah(xh,`#172d21`)],b=[jh(Sh),jh(Ch)];Ld.forEach((e,n)=>{let r=e.islandIndex===5&&e.side===-1,a=e.islandIndex===5&&e.side===1,x=e.islandIndex===1&&e.side===-1&&e.z>Id[1].z,S=e.islandIndex===0&&e.side===1&&e.z<Id[0].z,C=e.islandIndex===2&&e.side===1&&e.z>Id[2].z,w=e.islandIndex===2&&e.side===1&&e.z<Id[2].z,T=e.islandIndex===1&&e.side===1&&e.z<Id[1].z,E=e.islandIndex===1&&e.side===-1&&e.z<Id[1].z,D=e.islandIndex===1&&e.side===1&&e.z>Id[1].z,O=e.islandIndex===0&&e.side===-1&&e.z<Id[0].z,k=e.islandIndex===4&&e.side===1,{display:A,secondaryDisplay:j}=Fh(t,e,n,a?u.materials:x?b:r?g:S?p.materials:C?h.materials:w?_:T?c.materials:E?l.materials:D?f.materials:O?y:k?d.materials:void 0,C||r?`quad`:`dual`);w&&j&&(v=j,v.name=`martin-youtube-screen`),r&&A&&(s=hp(A,o,i),m.screen=A),T&&(c.screen=A),E&&(l.screen=A),a&&(u.screen=A),k&&(d.screen=A),S&&(p.screen=A),C&&(h.screen=A),D&&A&&f.decorate(A)});for(let e of zd){let n=new W;t.add(n),n.position.set(e.x,0,e.z),n.scale.set(.65,1,.65),kf(n,0,0,e.size)}Ih(n.west),Bd.forEach(e=>Lh(t,e)),Q(t,1.46,1.46,.018,15.9,.035,22.25,q.jute),Z(t,.6,.055,1.8,15.3,.46,22.55,q.oak,.01);for(let e of[15.07,15.53])for(let n of[21.8,23.3])$(t,[e,.03,n],[e,.43,n],.019,q.black);X(t,new Ja(1,24,12),q.sofa,15.05,.3,21.35).scale.set(.52,.32,.4),Z(n.east,.35,.65,2.1,17.07,.61,19.05,q.white,.008),Z(n.east,.075,1.05,1.9,17.19,1.73,19.05,q.black,.015);let x=new ti(new qa(1.84,.99),new Ur({toneMapped:!1}));x.position.set(17.141,1.73,19.05),x.rotation.y=-Math.PI/2,n.east.add(x);for(let e of[18.3,19.1,19.8])Z(n.east,.012,.6,.008,16.887,.61,e,q.trim);let S=new W;n.east.add(S),S.position.set(17.14,1.6,20.6),S.rotation.y=-Math.PI/2,Z(S,.55,.85,.04,0,0,0,q.white),Z(S,.5,.8,.007,0,0,.025,new G({color:`#b74937`,roughness:.9}));for(let e of[-.12,.12])for(let t=0;t<3;t++)Z(S,.035,.16,.008,-.12+t*.1,e+t*.025,.03,q.white).rotation.z=-.45;return Q(t,.055,.12,.2,7.9,2.2,19.7,kh),Q(t,.09,.11,.025,7.9,2.09,19.7,kh),{...n,television:x,holbechScreens:f,jesperScreen:d,martinScreen:v,updateScreens(e,t,n){let r=s(e.position),i=m.update(e,t,n),a=c.update(e,t,n),o=l.update(e,t,n),g=u.update(e,t,n),_=d.update(e,t,n),v=p.update(e,t,n),y=h.update(e,t,n),b=f.update(e,t,n);return r||i||a||o||g||_||v||y||b}}}var zh=cp(!0),Bh=new G({map:zh,color:`#8c796b`,roughness:.96,bumpMap:zh,bumpScale:.04}),Vh=new G({map:zh,color:`#e7cd98`,roughness:.85}),Hh=new G({color:`#d9e5df`,transparent:!0,opacity:.13,roughness:.13,metalness:.1,depthWrite:!1,side:2}),Uh=new G({color:`#eef8ff`,emissive:`#dceeff`,emissiveIntensity:.8}),Wh=e=>e<=20.55?Y.height:Y.height-(e-20.55)*1.8/(Y.maxZ-20.55);function Gh(e,t,n,r=.24,i=Bh){let a=new U(...t),o=new U(...n),s=a.clone().add(o).multiplyScalar(.5);Z(e,r,a.distanceTo(o),r,s.x,s.y,s.z,i).quaternion.setFromUnitVectors(new U(0,1,0),o.sub(a).normalize())}function Kh(e,t,n,r,i,a=q.wall){let o=Wh(r)-Wh(i),s=Z(e,n-t,.1,Math.hypot(i-r,o),(t+n)/2,(Wh(r)+Wh(i))/2,(r+i)/2,a);s.rotation.x=Math.atan2(o,i-r)}function qh(e,t,n,r,i,a){let o=new W;e.add(o);let s=(e,r)=>{if(r<=e)return;let i=Math.ceil((r-e)/1.3),a=(r-e)/i;for(let r=0;r<i;r++){let i=e+(r+.5)*a,s=Z(o,t===`z`?a:.018,2.45,t===`x`?a:.018,t===`x`?n:i,1.25,t===`z`?n:i,Hh);s.castShadow=!1;for(let e of[i-a/2,i+a/2])Z(o,t===`z`?.035:.055,2.55,t===`x`?.035:.055,t===`x`?n:e,1.275,t===`z`?n:e,q.black)}for(let i of[.04,2.53])Z(o,t===`z`?r-e:.055,.045,t===`x`?r-e:.055,t===`x`?n:(e+r)/2,i,t===`z`?n:(e+r)/2,q.black)};return a?(s(r,a[0]),s(a[1],i)):s(r,i),o}function Jh(e){let t=[],n=new W;e.add(n);let r=cp(!1);r.repeat.set(4.2,2.8),r.rotation=Math.PI/2;let i=new G({map:r,roughness:.72,bumpMap:r,bumpScale:.013});for(let t of[Y,ld,ud,dd,fd])Od(e,t,i);let a=kd(e,t,`z`,Y.minZ-.1,Y.minX,ud.minX,1,Y.height),o=kd(e,t,`z`,Y.minZ-.1,fd.maxX,Y.maxX,1,Y.height);kd(e,t,`z`,ud.minZ-.1,ud.minX,fd.maxX,1,Y.height),kd(e,t,`x`,ud.minX-.1,ud.minZ,Y.minZ,1,Y.height),kd(e,t,`x`,fd.maxX+.1,fd.minZ,Y.minZ,-1,Y.height);let s=kd(e,t,`z`,Y.maxZ+.1,Y.minX,Y.maxX,-1,1.6),c=new W;e.add(c),t.push({group:c,axis:`x`,position:Y.minX,inside:1});let l=new ia;l.moveTo(Y.minZ,0),l.lineTo(Y.maxZ,0),l.lineTo(Y.maxZ,1.6),l.lineTo(20.55,Y.height),l.lineTo(Y.minZ,Y.height),l.closePath(),X(c,new Ha(l,{depth:.2,bevelEnabled:!1}),q.wall,Y.minX,0,0).rotation.y=-Math.PI/2;let u=kd(e,t,`x`,Y.maxX+.1,Y.minZ,Y.maxZ,-1,Y.height,[ld.minZ,ld.maxZ]),d=ld.maxX-ld.minX,f=(ld.minX+ld.maxX)/2;for(let t of[ld.minZ-.035,ld.maxZ+.035])Z(e,d,2.27,.07,f,1.135,t,q.white);Z(e,d,.08,ld.maxZ-ld.minZ+.14,f,2.29,(ld.minZ+ld.maxZ)/2,q.white),Z(u,.06,2.18,1.1,Y.maxX-.05,1.09,ld.maxZ+.55,q.white),$(u,[Y.maxX-.095,1.02,ld.maxZ+.83],[Y.maxX-.095,1.02,ld.maxZ+1],.013);let p=qh(e,`z`,ud.maxZ+.1,ud.minX,ud.maxX,[dd.minX,dd.maxX]);t.push({group:p,axis:`z`,position:ud.maxZ,inside:-1});let m=qh(e,`x`,ud.maxX+.1,ud.minZ,ud.maxZ),h=new ti(new qa(.83,2.3),new Ur({transparent:!0,depthWrite:!1,side:2,forceSinglePass:!0,toneMapped:!1}));h.position.set(ud.maxX+.085,1.25,(ud.minZ+ud.maxZ)/2),h.rotation.y=-Math.PI/2,h.renderOrder=2,m.add(h),qh(e,`z`,Kd.minZ,Kd.minX,Kd.maxX,[qd.minX,qd.maxX]),qh(e,`x`,Kd.minX,Kd.minZ,Kd.maxZ),qh(e,`x`,qd.minX,Kd.minZ-.96,Kd.minZ);for(let[e,t]of[[Y.minZ,18.25],[19.2,20.55],[20.55,22.2],[23.15,Y.maxZ]])Kh(n,Y.minX,Y.maxX,e,t);for(let[e,t]of[[18.25,19.2],[22.2,23.15]]){let r=Y.minX;for(let i of[...Ud].reverse()){Kh(n,r,i-.5,e,t),Kh(n,i-.5,i+.5,e,t,Uh);for(let r of[i-.5,i+.5])Kh(n,r-.035,r+.035,e,t,q.white);for(let r of[e,t])Kh(n,i-.5,i+.5,r-.035,r+.035,q.white);r=i+.5}Kh(n,r,Y.maxX,e,t)}Kh(n,ud.minX,fd.maxX,ud.minZ,Y.minZ);for(let t of Ud){let n=Wd(t);Gh(e,[t,0,n],[t,3.3,n],.27),Gh(e,[t-1,0,n],[t,2.6,n],.22),Gh(e,[t,2.63,n],[t,2.63,20.55],.26),Gh(e,[t,0,20.55],[t,3.35,22.05],.26),Gh(e,[t,0,24.15],[t,3.35,22.05],.25),Gh(e,[t,2.7,20.5],[t,2.7,23.35],.22);for(let r of[n,20.55])Q(e,.027,.027,.28,t,2.6,r,q.black).rotation.z=Math.PI/2}Gh(e,[Y.minX,.08,20.55],[Y.maxX,.08,20.55],.16);for(let e of[-7.9,-11.7,-15.5,-19.3,-23.1])$(n,[e,3.3,22],[e,2.75,22],.009,q.white),X(n,new Ja(.19,20,12),q.light,e,2.59,22);for(let e of[-9,-19.5]){Z(n,.95,.07,.95,e,3.31,19.8,q.white);for(let t=0;t<15;t++)Z(n,.62,.009,.013,e,3.267,19.52+t*.04,q.trim)}for(let e of[-2.5,-8.5,-12.5,-17.5,-22.5,-26])Z(s,1.6,.55,.1,e,.65,Y.maxZ-.06,q.white);Z(e,3.5,.04,1.55,-14.8,.04,19.8,new G({color:`#c7c5b9`,roughness:1}));for(let t=0;t<12;t++)Z(e,.25,.055,1,Jd.maxX-.12-t*.25,.19+t*.235,19.87,q.black);for(let t of[19.3,20.43]){Gh(e,[Jd.maxX,.08,t],[Jd.minX,2.93,t],.13,Vh),Gh(e,[Jd.maxX,.95,t],[Jd.minX,3.8,t],.075,Vh);for(let n=0;n<12;n++)$(e,[Jd.maxX-n*.25,.2+n*.235,t],[Jd.maxX-n*.25,1+n*.235,t],.013,q.white)}for(let t of[Jd.minX,Jd.maxX])Gh(e,[t,0,20.5],[t,3.4,20.5],.18,Vh);Z(n,3.8,.16,2.2,-14.8,3.25,20.05,Vh);for(let e=-16.6;e<-12.9;e+=.18)$(n,[e,3.3,18.95],[e,4.12,18.95],.014,q.white);return Z(n,3.8,.065,.075,-14.8,4.16,18.95,Vh),{walls:t,roof:n,west:c,south:s,northWest:a,northEast:o,tetrisGlass:h}}var Yh=new G({color:`#bd9b4f`,map:q.sofa.map,roughness:.95}),Xh=new G({color:`#a4a49e`,map:q.sofa.map,roughness:.95}),Zh=new G({color:`#bdc1bf`,metalness:.65,roughness:.35});function Qh(e,t,n,r){let i=new W;e.add(i),i.position.set(t,0,n),i.rotation.y=r,Z(i,.46,.07,.44,0,.46,0,q.black,.06),Z(i,.45,.37,.06,0,.7,-.19,q.black,.055).rotation.x=-.1;for(let e of[-.19,.19])for(let t of[-.17,.17])$(i,[e,.44,t],[e*1.2,.03,t*1.3],.012,Zh)}function $h(e,t){let n=new W;e.add(n),n.position.set(t.x,0,t.z),n.rotation.y=t.rotation,t.x>-7&&Z(n,t.width+.6,.012,t.depth+1.6,0,.031,0,Xh),Z(n,t.width,.04,t.depth,0,.75,0,t.white?q.white:q.black,.025);for(let e of[-t.width/2+.15,t.width/2-.15])for(let r of[-t.depth/2+.1,t.depth/2-.1])$(n,[e,.73,r],[e,.03,r],.026,q.black);for(let e=0;e<t.chairs;e++)for(let r of[-1,1])Qh(n,(e-(t.chairs-1)/2)*.66,r*(t.depth/2+.35),r<0?0:Math.PI);if(t!==Xd[0]){Z(n,.26,.012,.2,.2,.78,0,q.black);for(let e of[-.55,.55])Q(n,.035,.03,.09,e,.815,.12,q.white)}}function eg(e,t,n,r,i){let a=new W;e.add(a),a.position.set(t,0,n),a.rotation.y=r,Z(a,2.1,.17,.86,0,.3,0,i,.035),Z(a,2.1,.6,.13,0,.6,-.37,i,.04);for(let e of[-.52,.52])Z(a,.98,.16,.68,e,.46,.06,q.sofa,.045),Z(a,.95,.4,.14,e,.68,-.21,q.sofa,.045).rotation.x=-.15;for(let e of[-1.04,1.04]){Z(a,.07,.07,.83,e,.65,0,q.oak);for(let t of[-.33,.33])Z(a,.055,.65,.055,e,.34,t,q.oak)}}function tg(e){let t=document.createElement(`canvas`);t.width=512,t.height=256;let n=t.getContext(`2d`);if(n.fillStyle=e===`rug`?`#353936`:e===`print`?`#ceaaa8`:`#d9d4b9`,n.fillRect(0,0,512,256),e===`brick`)for(let e=0;e<12;e++)for(let t=-1;t<9;t++)n.fillStyle=[`#d1cbb1`,`#e5e0ca`,`#c9c5af`,`#d9d7c3`][(e*7+t+9)%4],n.fillRect(t*64+e%2*32,e*23,61,20);else if(e===`rug`){n.fillStyle=`#c4cfa3`;for(let[e,t,r,i]of[[75,70,55,35],[120,150,22,55],[250,80,30,23],[260,145,27,48],[340,80,75,40],[405,190,33,21]])n.beginPath(),n.ellipse(e,t,r,i,-.3,0,Math.PI*2),n.fill();n.strokeStyle=`#eeeee8`,n.lineWidth=1;for(let e=35;e<240;e+=35)n.beginPath(),n.moveTo(20,e),n.lineTo(490,e),n.stroke()}else n.fillStyle=`#4f4c48`,n.font=`bold 110px sans-serif`,n.textAlign=`center`,n.fillText(`D / 21`,256,165);let r=new yi(t);return r.colorSpace=Re,r}function ng(e){let t=new W;e.add(t);let r=Jh(t);Gd.forEach((e,n)=>Fh(t,e,n+20)),Xd.forEach(e=>$h(t,e));for(let e of Yd){let n=new W;t.add(n),n.position.set(e.x,0,e.z),n.scale.set(.65,1,.65),kf(n,0,0,e.size)}Z(t,.07,.86,1.45,-6.15,1.48,22.25,q.black,.015),Z(t,.008,.8,1.39,-6.108,1.48,22.25,q.screen),$(t,[-6.15,.1,22.25],[-6.15,1.35,22.25],.035,Zh);for(let e of[21.83,22.67])$(t,[-6.4,.08,e],[-5.9,.08,e],.023,q.black);Z(r.west,.065,.83,1.45,-27.98,1.8,22.25,q.black,.015),Z(r.west,.008,.77,1.39,-27.94,1.8,22.25,q.screen),eg(t,-21.45,22.35,-Math.PI/2,Yh),Z(t,3.9,.012,1.8,-23.5,.035,22.3,new G({map:tg(`rug`),roughness:1})),Q(t,.47,.47,.035,-22.95,.44,22.3,q.oak);for(let e of[22.03,22.57])for(let n of[-23.22,-22.68])$(t,[n,.03,e],[n,.42,e],.014);Q(t,.19,.19,.035,-23.6,.04,20.95,q.black),$(t,[-23.6,.06,20.95],[-23.6,1.85,20.95],.014,q.black),$(t,[-23.6,1.85,20.95],[-22.9,1.85,20.95],.012,q.black),Q(t,.13,.23,.18,-22.9,1.75,20.95,q.white);let i=new W;r.west.add(i),i.position.set(-27.7,0,19),i.rotation.y=Math.PI/2,Z(i,2.3,.82,.6,0,.44,0,Xh),Z(i,2.36,.04,.65,0,.87,0,q.white);for(let e of[-.77,0,.77])Z(i,.74,.75,.025,e,.46,.315,Xh),Z(i,.15,.025,.035,e,.74,.34,Zh);Z(i,.54,.025,.36,-.6,.895,0,q.metal),$(i,[-.6,.91,-.2],[-.6,1.18,-.2],.018,Zh),$(i,[-.6,1.18,-.2],[-.6,1.18,.04],.018,Zh),Z(i,.42,.48,.36,.65,1.13,-.07,q.black,.02),Z(i,.32,.15,.016,.65,1.25,.119,Zh),Q(i,.045,.035,.1,.65,.94,.17,q.white);for(let e of[1.55,1.9]){Z(i,1.1,.035,.22,0,e,-.23,q.white);for(let t of[-.35,0,.35])Q(i,.04,.035,.09,t,e+.06,-.23,q.white)}Z(r.northWest,3,.8,.45,-24.1,.43,17.92,q.white);for(let e of[-25.55,-24.55,-23.55,-22.65])Z(r.northWest,.013,.73,.01,e,.45,18.151,q.trim);let a=new G({map:tg(`print`),roughness:.95});for(let e of[-25.05,-23.25])Z(r.northWest,1.02,1.3,.035,e,1.92,17.72,q.black),Z(r.northWest,.94,1.22,.008,e,1.92,17.744,a);eg(t,-10.85,15.6,0,Xh),Q(t,1.35,1.35,.013,-10.9,.03,16.55,q.rug),X(t,new Ja(1,24,12),Xh,-10.8,.29,17).scale.set(.5,.3,.37);let o=tg(`brick`);o.wrapS=o.wrapT=n,o.repeat.set(1,2),Z(t,.9,2.8,1.28,-9.05,1.4,15.46,new G({map:o,bumpMap:o,bumpScale:.022,roughness:1})),Z(t,2.9,2.45,.045,-15.2,1.225,14.84,new G({color:`#c3a44c`,roughness:.95})),Z(t,1.18,.73,.055,-15.2,1.65,14.88,q.black),Z(t,1.12,.67,.008,-15.2,1.65,14.914,q.screen),Q(t,.3,.3,.035,-2.7,.51,18.1,q.white);for(let e=0;e<3;e++){let n=e*Math.PI*2/3;$(t,[-2.7+Math.cos(n)*.24,.03,18.1+Math.sin(n)*.24],[-2.7+Math.cos(n)*.15,.5,18.1+Math.sin(n)*.15],.018,q.oak)}for(let e of[-17.7,-16.9])$(t,[e,.04,18.05],[e,1.7,18.05],.018,q.black);$(t,[-17.7,1.7,18.05],[-16.9,1.7,18.05],.018,q.black);for(let e of[-17.5,-17.15])Z(t,.32,.85,.15,e,1.12,18.05,e<-17.3?q.black:Xh,.05);return r}var rg={width:7.758,depth:6.205,height:3.05};function ig(){let e=new W;Z(e,.2,1.12,7,0,.56,0,q.wall),Z(e,.2,.35,7,0,2.875,0,q.wall);for(let[t,n]of[[-3.12,.76],[-1.15,.96],[1.15,.96],[3.12,.76]])Z(e,.2,1.58,n,0,1.91,t,q.wall);for(let t of[-2.25,0,2.25]){Z(e,.05,1.48,1.15,-.04,1.91,t,q.glass);for(let n of[-1,1])Z(e,.27,1.65,.065,.045,1.91,t+n*.6,q.white),Z(e,.27,.065,1.27,.045,1.91+n*.8,t,q.white);for(let n=0;n<24;n++)Z(e,.015,.015,1.12,.003,2.6-n*.04,t,q.trim);Z(e,.4,.055,1.35,.11,1.09,t,q.white),Z(e,.14,.57,1.45,.2,.48,t,q.white,.025);for(let n=0;n<22;n++)Z(e,.04,.49,.022,.28,.48,t-.67+n*.064,q.trim)}return Z(e,.055,.12,7,.13,.06,0,q.white),Z(e,.35,.18,7,.05,2.96,0,q.white),e}function ag(e,t,n,r){let i=new W;i.position.set(t,0,n),i.rotation.y=r,e.add(i),Z(i,.44,.065,.44,0,.47,0,q.black,.055);let a=Z(i,.43,.4,.065,0,.68,.19,q.black,.07);a.rotation.x=-.13;for(let e of[-1,1])for(let t of[-1,1])$(i,[e*.15,.45,t*.14],[e*.235,.025,t*.23],.012,q.black),$(i,[e*.22,.12,t*.21],[-e*.15,.4,t*.14],.007,q.black)}function og(e){Z(e,2.75,.025,5.8,-1.8,.035,-.05,q.jute,.035);for(let t of[-1.65,-.05,1.55]){Z(e,1.03,.075,1.58,-1.8,.77,t,q.oak,.025);for(let n of[-2.23,-1.37])for(let r of[-.66,.66])Z(e,.07,.7,.07,n,.385,t+r,q.oak,.012)}for(let t=0;t<6;t++)ag(e,-2.62,-2.04+t*.8,-Math.PI/2),ag(e,-.98,-2.04+t*.8,Math.PI/2);ag(e,-1.8,-2.82,Math.PI),ag(e,-1.8,2.74,0),Z(e,.13,.018,.045,-1.63,.816,-2.05,q.black,.008),Z(e,.23,.003,.3,-1.95,.812,-1.9,q.white)}function sg(e,t){Z(e,.96,.22,1.02,3.12,.27,t,q.sofa,.065),Z(e,.88,.2,1,3.04,.46,t,q.sofa,.09);let n=Z(e,.19,.59,1.02,3.56,.64,t,q.sofa,.07);n.rotation.z=-.1;for(let n of[2.76,3.46])for(let r of[-.38,.38])Q(e,.018,.014,.16,n,.1,t+r,q.metal)}function cg(e){Q(e,1.42,1.42,.027,1.76,.034,-.02,q.rug);for(let t=0;t<4;t++){let n=-1.67+t*1.03;sg(e,n),Z(e,.17,.43,.48,3.32,.75,n-.18,Xu[t],.075).rotation.set(.07*(t-2),0,-.22)}Z(e,1.01,.22,.94,2.15,.27,-1.73,q.sofa,.07),Z(e,.97,.2,.9,2.15,.46,-1.74,q.sofa,.08),Z(e,2,.57,.17,2.65,.62,-2.19,q.sofa,.07),Z(e,.14,.58,.98,1.68,.62,-1.74,q.sofa,.06),Z(e,.86,.18,.17,3.04,.65,1.9,q.sofa,.065),Z(e,1.22,.055,1.15,1.8,.47,-.05,q.oak,.025);for(let t of[1.29,2.31])for(let n of[-.52,.42])Q(e,.025,.019,.43,t,.24,n,q.oak);for(let t=0;t<3;t++)Q(e,.045,.045,.13+t*.025,1.55+t*.12,.56+t*.0125,-.05+t%2*.1,q.white);Q(e,.075,.058,.12,2.05,.55,-.21,q.black);for(let t=0;t<3;t++){$(e,[2.05,.59,-.21],[2.02+.055*t,.82+.06*t,-.22],.006,q.green);for(let n=0;n<5;n++){let r=X(e,new Ja(.033,8,6),Xu[2],2.02+.055*t+Math.sin(n*1.25)*.025,.82+.06*t+Math.cos(n*1.25)*.03,-.22);r.scale.z=.3}}}function lg(e){Z(e,1.84,1.06,.065,-1.8,1.94,-3.32,q.black,.022),Z(e,1.77,.99,.008,-1.8,1.94,-3.282,q.screen,.01),Z(e,.82,.065,.09,-1.8,1.3,-3.24,q.black,.028),Z(e,1.55,.68,.37,-1.8,.82,-3.2,q.trim,.018);for(let t of[-2.06,-1.54])Z(e,.006,.64,.01,t,.82,-3.006,q.metal);kf(e,.84,-2.82,1.12),kf(e,-3.06,-2.94,.8),kf(e,-3.09,2.93,.72),kf(e,3,2.78,.61);let t=new W;t.position.set(-.3,0,2.85),t.rotation.y=-.13,e.add(t),Z(t,.86,1.2,.055,0,1.45,0,q.metal,.02),Z(t,.8,1.14,.012,0,1.45,-.035,q.white,.01);let n=new ti(new qa(.8,1.14),new Ur({toneMapped:!1}));n.position.set(0,1.45,-.042),t.add(n),n.rotation.y=Math.PI,n.name=`Space Invaders på whiteboardet`,n.castShadow=n.receiveShadow=!1,$(t,[0,.1,0],[0,.89,0],.026);for(let e of[-.35,.35]){$(t,[0,.15,0],[e,.08,-.25],.021),$(t,[0,.15,0],[e,.08,.25],.021);for(let n of[-.25,.25])Q(t,.045,.045,.04,e,.04,n,q.black).rotation.z=Math.PI/2}Q(e,.23,.25,.65,.38,.325,2.93,q.bark),Q(e,.223,.223,.015,.38,.657,2.93,q.oak),Z(e,.16,.003,.21,.38,.668,2.93,q.white),Z(e,.72,.06,.57,2.68,.68,2.46,q.oak,.012);for(let t of[2.37,2.99])for(let n of[2.22,2.7])Z(e,.04,.64,.04,t,.33,n,q.oak);Z(e,.5,.41,.43,2.68,.245,2.46,q.jute,.03),Z(e,.52,.78,.47,3.41,.41,2.57,q.black,.016);for(let t of[.22,.43,.64])Z(e,.46,.012,.015,3.41,t,2.817,q.metal);return n}function ug(e){let t=new W;e.add(t);for(let e of[-1.8,1.45]){Z(t,.09,.105,4.8,e,2.65,-.1,q.black,.006),Z(t,.06,.008,4.7,e,2.594,-.1,q.light);for(let n of[-1.9,1.7])$(t,[e,2.71,n],[e,3.04,n],.004)}return t}function dg(){let e=new W,t=[],n=[];Od(e,Zu);let r=new W;e.add(r);let i=yd.office;r.scale.set(i.sx,1,i.sz),r.position.set(i.x,0,i.z),og(r),cg(r),ug(r);let a=lg(r);for(let[n,r,i]of[[-.1,0,1],[7.858,Math.PI,-1]]){let a=ig();a.position.set(n,0,3.1025),a.rotation.y=r,a.scale.z=6.205/7,e.add(a),t.push({group:a,axis:`x`,position:n,inside:i})}kd(e,t,`z`,-.1,-.2,7.958,1,rg.height),kd(e,t,`z`,6.305,-.2,7.958,-1,rg.height,[td.minX,td.maxX]),Od(e,td);let o=new W;e.add(o),o.position.set(td.maxX-.02,0,6.305),o.rotation.y=Math.PI/2,Z(o,1.1,2.2,.05,.55,1.1,0,q.trim),$(o,[.85,1.04,-.045],[1.02,1.04,-.045],.018),t.push({group:o,axis:`z`,position:6.305,inside:-1}),n.push(Ad(e,Zu,rg.height)),Od(e,ed),n.push(Ad(e,ed,ed.height)),kd(e,t,`x`,ed.minX-.1,ed.minZ,Qu.minZ,1,ed.height),kd(e,t,`x`,ed.maxX+.1,ed.minZ,ed.maxZ,-1,ed.height,[J.entrance.minZ,J.entrance.maxZ]);let s=new W;e.add(s),t.push({group:s,axis:`x`,position:ed.minX,inside:1}),Z(s,.13,1.06,.58,5.1,.7,10.65,q.white,.018);for(let e=0;e<18;e++)Z(s,.02,.96,.017,5.17,.7,10.915-e*.031,q.trim);for(let e of[10.88,10.96])$(s,[5.08,1.19,e],[5.08,ed.height,e],.012,q.white);Z(s,.045,.38,.29,5.057,1.58,8.65,q.black,.014),Z(s,.008,.32,.24,5.085,1.58,8.65,q.screen,.005),Z(s,.009,.32,.008,5.09,1.58,8.51,new G({color:`#50d899`,emissive:`#31c488`,emissiveIntensity:.6}));let c=new W;e.add(c),c.position.set(6.1,0,J.entrance.minZ),c.rotation.y=Math.PI/2,Z(c,.9,2.15,.05,.45,1.075,0,q.white,.008),$(c,[.65,1.02,-.05],[.82,1.02,-.05],.015),t.push({group:c,axis:`x`,position:ed.maxX,inside:-1});for(let t=7;t<ed.maxZ;t+=1.8){Z(n[1],.12,.03,.3,5.585,ed.height-.025,t,q.light);let r=new Qo(`#fff2d5`,.7,3,2);r.position.set(5.585,2.35,t),e.add(r)}Od(e,$u,q.trim),n.push(Ad(e,$u,$u.height)),kd(e,t,`x`,-.1,$u.minZ,$u.maxZ,1,$u.height),kd(e,t,`x`,$u.maxX+.1,$u.minZ,$u.maxZ,-1,$u.height),kd(e,t,`z`,$u.maxZ+.1,-.2,$u.maxX+.1,-1,$u.height),jd(e,$u,[`MØDE 2`,`Ikke implementeret`]),Z(e,.025,2.2,.85,5.047,1.1,14.05,q.trim),Od(e,od);let l=sp(e);t.push(...l.walls),n.push(l.roof);let u=Rh(e);t.push(...u.walls),n.push(u.roof);let d=ng(e);t.push(...d.walls),n.push(d.roof);let f=Df(e);t.push(...f.walls),n.push(f.roof);let p;for(let[r,i]of[[`minecraft`,Pf],[`kitchen`,Zf]]){let a=new W;e.add(a);let o=yd[r];a.scale.set(o.sx,1,o.sz),a.position.set(o.x,0,o.z);let s=i(a);`coffee`in s&&s.coffee instanceof W&&(p=s.coffee);for(let e of s.walls)e.position=e.position*(e.axis===`x`?o.sx:o.sz)+o[e.axis];t.push(...s.walls),n.push(s.roof)}return{office:e,walls:t,roofs:n,coffee:p,whiteboard:a,tetrisGlass:d.tetrisGlass,updateRestroomDoor:f.updateDoor,jesperScreen:u.jesperScreen,television:u.television,updateScreens:u.updateScreens,holbechScreens:u.holbechScreens,martinScreen:u.martinScreen}}var fg={type:`change`},pg={type:`start`},mg={type:`end`},hg=new Hr,gg=new Fr,_g=Math.cos(70*kt.DEG2RAD),vg=new U,yg=2*Math.PI,bg={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xg=1e-6,Sg=class extends Cs{constructor(n,r=null){super(n,r),this.state=bg.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new At,this._lastTargetPosition=new U,this._quat=new At().setFromUnitVectors(n.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ss,this._sphericalDelta=new Ss,this._scale=1,this._panOffset=new U,this._rotateStart=new H,this._rotateEnd=new H,this._rotateDelta=new H,this._panStart=new H,this._panEnd=new H,this._panDelta=new H,this._dollyStart=new H,this._dollyEnd=new H,this._dollyDelta=new H,this._dollyDirection=new U,this._mouse=new H,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wg.bind(this),this._onPointerDown=Cg.bind(this),this._onPointerUp=Tg.bind(this),this._onContextMenu=Mg.bind(this),this._onMouseWheel=Og.bind(this),this._onKeyDown=kg.bind(this),this._onTouchStart=Ag.bind(this),this._onTouchMove=jg.bind(this),this._onMouseDown=Eg.bind(this),this._onMouseMove=Dg.bind(this),this._interceptControlDown=Ng.bind(this),this._interceptControlUp=Pg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=bg.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fg),this.update(),this.state=bg.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;vg.copy(t).sub(this.target),vg.applyQuaternion(this._quat),this._spherical.setFromVector3(vg),this.autoRotate&&this.state===bg.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=yg:n>Math.PI&&(n-=yg),r<-Math.PI?r+=yg:r>Math.PI&&(r-=yg),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(vg.setFromSpherical(this._spherical),vg.applyQuaternion(this._quatInverse),t.copy(this.target).add(vg),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=vg.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new U(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new U(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=vg.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(hg.origin.copy(this.object.position),hg.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hg.direction))<_g?this.object.lookAt(this.target):(gg.setFromNormalAndCoplanarPoint(this.object.up,this.target),hg.intersectPlane(gg,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>xg||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xg||this._lastTargetPosition.distanceToSquared(this.target)>xg?(this.dispatchEvent(fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?yg/60/60*this.autoRotateSpeed:yg/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vg.setFromMatrixColumn(t,0),vg.multiplyScalar(-e),this._panOffset.add(vg)}_panUp(e,t){this.screenSpacePanning===!0?vg.setFromMatrixColumn(t,1):(vg.setFromMatrixColumn(t,0),vg.crossVectors(this.object.up,vg)),vg.multiplyScalar(e),this._panOffset.add(vg)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;vg.copy(r).sub(this.target);let i=vg.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yg*this._rotateDelta.x/t.clientHeight),this._rotateUp(yg*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yg*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yg*this._rotateDelta.x/t.clientHeight),this._rotateUp(yg*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new H,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Cg(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function wg(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Tg(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(mg),this.state=bg.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Eg(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=bg.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=bg.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=bg.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=bg.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=bg.PAN}break;default:this.state=bg.NONE}this.state!==bg.NONE&&this.dispatchEvent(pg)}function Dg(e){switch(this.state){case bg.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case bg.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case bg.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Og(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===bg.NONE&&(e.preventDefault(),this.dispatchEvent(pg),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(mg))}function kg(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ag(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=bg.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=bg.TOUCH_PAN;break;default:this.state=bg.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=bg.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=bg.TOUCH_DOLLY_ROTATE;break;default:this.state=bg.NONE}break;default:this.state=bg.NONE}this.state!==bg.NONE&&this.dispatchEvent(pg)}function jg(e){switch(this._trackPointer(e),this.state){case bg.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case bg.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case bg.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case bg.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=bg.NONE}}function Mg(e){this.enabled!==!1&&e.preventDefault()}function Ng(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Pg(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Fg={overview:`Overblik`,meeting:`Mødebord`,lounge:`Lounge`,walk:`Space Invaders · MØDE 4`,hallway:`Toiletgangen`,restrooms:`Toiletentré`,minecraft:`Minecraft · MØDE 3`,kitchen:`Køkken`,lobby:`Lille gang ved køkkenet`,workspace:`Kontoret`,day21:`Day21`,tetris:`Tetris`,"donkey-kong":`Donkey Kong`},Ig=matchMedia(`(prefers-reduced-motion: reduce)`).matches,Lg=class{camera;canvas;view=`overview`;controls;keys=new Set;yaw=0;pitch=0;drag=null;transition=null;direction=new U;suspended=!1;get isWalking(){return this.view===`walk`||this.view===`hallway`||this.view===`restrooms`||this.view===`minecraft`||this.view===`kitchen`||this.view===`lobby`||this.view===`workspace`||this.view===`day21`||this.view===`tetris`||this.view===`donkey-kong`}constructor(e,t){this.camera=e,this.canvas=t,this.controls=new Sg(e,t),this.controls.enableDamping=!Ig,this.controls.dampingFactor=.09,this.controls.minDistance=1.2,this.controls.maxDistance=240,this.controls.maxPolarAngle=Math.PI/2-.035,this.controls.panSpeed=.7,this.controls.addEventListener(`start`,()=>{this.transition=null}),t.addEventListener(`pointerdown`,e=>{this.suspended||(t.focus({preventScroll:!0}),this.isWalking&&!this.drag&&e.button===0&&(this.drag={id:e.pointerId,x:e.clientX,y:e.clientY},t.setPointerCapture(e.pointerId)))}),t.addEventListener(`pointermove`,e=>{this.drag&&this.drag.id===e.pointerId&&(this.yaw+=(e.clientX-this.drag.x)*.004,this.pitch=kt.clamp(this.pitch-(e.clientY-this.drag.y)*.004,-1.15,1.15),this.drag.x=e.clientX,this.drag.y=e.clientY)});let n=()=>{this.drag=null};t.addEventListener(`pointerup`,n),t.addEventListener(`pointercancel`,n),t.addEventListener(`lostpointercapture`,n),t.addEventListener(`keydown`,e=>{this.suspended||([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`KeyW`,`KeyA`,`KeyS`,`KeyD`,`KeyQ`,`KeyE`,`ShiftLeft`,`ShiftRight`].includes(e.code)&&(e.preventDefault(),this.transition=null,this.keys.add(e.code)),(e.key===`+`||e.key===`=`)&&this.zoom(.82),e.key===`-`&&this.zoom(1.22),(e.code===`KeyH`||e.code===`Escape`)&&this.setView(`overview`))}),addEventListener(`keyup`,e=>this.keys.delete(e.code)),addEventListener(`blur`,()=>this.clearInput()),t.addEventListener(`blur`,()=>this.clearInput()),document.addEventListener(`visibilitychange`,()=>this.clearInput()),document.querySelectorAll(`[data-move]`).forEach(e=>{let t={forward:`KeyW`,back:`KeyS`,left:`KeyA`,right:`KeyD`}[e.dataset.move];e.addEventListener(`pointerdown`,n=>{n.preventDefault(),this.keys.add(t),e.setPointerCapture(n.pointerId)});let n=()=>this.keys.delete(t);e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`lostpointercapture`,n),e.addEventListener(`click`,e=>{e.detail===0&&this.isWalking&&this.walkStep(t,.35)})}),this.setView(`overview`,!0)}clearInput(){this.keys.clear(),this.drag=null}suspend(e){this.clearInput(),this.transition=null,this.suspended=e,this.controls.enabled=!e&&!this.isWalking}setView(e,t=!1){this.clearInput(),this.transition=null,this.view=e;let n=this.isWalking;this.controls.enabled=!n,this.camera.fov=n?67:42,this.camera.updateProjectionMatrix(),document.body.dataset.mode=n?`walk`:e,document.querySelector(`#view-name`).textContent=Fg[e],document.querySelector(`#map-mode`).textContent=n?`Din position`:`Frit kamera`,document.querySelector(`.walk-pad`).hidden=!n,document.querySelectorAll(`[data-view]`).forEach(t=>{let n=t.dataset.view===e;t.classList.toggle(`selected`,n),t.setAttribute(`aria-pressed`,String(n))});for(let e of[`rotate`,`pan`,`zoom-in`,`zoom-out`])document.querySelector(`#${e}`).disabled=n;if(document.querySelector(`#navigation-hint`).innerHTML=n?`<span>W A S D / pile: gå</span><b>·</b><span>Træk / Q E: kig rundt</span><b>·</b><span>Esc: overblik</span>`:`<span>Træk: drej</span><b>·</b><span>Højretræk / to fingre: panorer</span><b>·</b><span>Scroll / knib: zoom</span>`,e===`walk`||e===`hallway`||e===`restrooms`||e===`minecraft`||e===`kitchen`||e===`lobby`||e===`workspace`||e===`day21`||e===`tetris`||e===`donkey-kong`){let t={"donkey-kong":ef,tetris:$d,day21:Qd,workspace:Hd,lobby:Nd,walk:{x:5.585,z:5.55,yaw:0,pitch:-.025},hallway:{x:5.585,z:6.9,yaw:Math.PI,pitch:-.025},restrooms:{x:6.9,z:9.6,yaw:Math.PI/2,pitch:-.2},kitchen:{x:6.4,z:15.2,yaw:Math.PI/2-.07,pitch:-.09},minecraft:{x:.48,z:10.55,yaw:Math.PI/2-.52,pitch:-.12}}[e];this.camera.position.set(t.x,1.62,t.z),this.yaw=t.yaw,this.pitch=t.pitch,this.look(),this.canvas.focus({preventScroll:!0});return}this.setTool(`rotate`);let r=new U(-5.4,.8,12.2),i=new U(21,29,32).normalize(),a=new U(i.z,0,-i.x).normalize(),o=new U().crossVectors(i,a),s=Math.tan(kt.degToRad(this.camera.fov/2)),c=0;for(let e of[-28.4,17.6])for(let t of[0,4.8])for(let n of[-.3,24.7]){let l=new U(e,t,n).sub(r);c=Math.max(c,l.dot(i)+Math.max(Math.abs(l.dot(a))/(s*this.camera.aspect*.9),Math.abs(l.dot(o))/(s*.7)))}let l=(e,t,n)=>{let r=bd(`office`,e,n);return new U(r.x,t,r.z)},u={overview:i.multiplyScalar(c).add(r),meeting:l(1.5,3.8,3.05),lounge:l(-.15,2.8,3.2)},d={overview:r,meeting:l(-1.8,.8,-.6),lounge:l(2.65,.6,-.2)},f=this.controls.enableDamping;this.controls.enableDamping=!1,this.controls.update(),this.controls.enableDamping=f,t||Ig?(this.camera.position.copy(u[e]),this.controls.target.copy(d[e]),this.controls.update()):this.transition={from:this.camera.position.clone(),to:u[e],fromTarget:this.controls.target.clone(),target:d[e],elapsed:0}}setTool(n){this.controls.mouseButtons.LEFT=n===`pan`?e.PAN:e.ROTATE,this.controls.touches.ONE=n===`pan`?t.PAN:t.ROTATE;for(let e of[`rotate`,`pan`]){let t=document.querySelector(`#${e}`);t.classList.toggle(`active`,e===n),t.setAttribute(`aria-pressed`,String(e===n))}this.canvas.style.cursor=n===`pan`?`move`:`grab`}zoom(e){if(this.isWalking)return;this.transition=null;let t=this.camera.position.clone().sub(this.controls.target);t.setLength(kt.clamp(t.length()*e,this.controls.minDistance,this.controls.maxDistance)),this.camera.position.copy(this.controls.target).add(t),this.controls.update()}look(){this.direction.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch)),this.camera.lookAt(this.camera.position.clone().add(this.direction))}walkStep(e,t){let n=e===`KeyW`?1:e===`KeyS`?-1:0,r=e===`KeyD`?1:e===`KeyA`?-1:0;this.move(n,r,t)}move(e,t,n){let r=Math.max(1,Math.hypot(e,t)),i=(Math.sin(this.yaw)*e+Math.cos(this.yaw)*t)*n/r,a=(-Math.cos(this.yaw)*e+Math.sin(this.yaw)*t)*n/r,o=pf(this.camera.position.x,this.camera.position.z,i,a);this.camera.position.x=o.x,this.camera.position.z=o.z}update(e){if(this.suspended)return;let t=(...e)=>+!!e.some(e=>this.keys.has(e));if(this.isWalking){this.yaw+=(t(`KeyE`)-t(`KeyQ`))*e*1.5,this.move(t(`KeyW`,`ArrowUp`)-t(`KeyS`,`ArrowDown`),t(`KeyD`,`ArrowRight`)-t(`KeyA`,`ArrowLeft`),e*(t(`ShiftLeft`,`ShiftRight`)?2.8:1.65)),this.look();let n=hd(this.camera.position.x,this.camera.position.z),r=document.querySelector(`#view-name`);r.textContent!==n&&(r.textContent=n)}else{if(this.transition){this.transition.elapsed+=e;let t=Math.min(this.transition.elapsed/.8,1),n=t*t*(3-2*t);this.camera.position.lerpVectors(this.transition.from,this.transition.to,n),this.controls.target.lerpVectors(this.transition.fromTarget,this.transition.target,n),t===1&&(this.transition=null)}let n=this.camera.position.clone().sub(this.controls.target),r=(t(`KeyE`)-t(`KeyQ`))*e;r&&(n.applyAxisAngle(new U(0,1,0),r),this.camera.position.copy(this.controls.target).add(n));let i=t(`ArrowRight`)-t(`ArrowLeft`),a=t(`ArrowUp`)-t(`ArrowDown`);if(i||a){let t=new U().setFromMatrixColumn(this.camera.matrix,0).setY(0).normalize(),n=new U().crossVectors(new U(0,1,0),t),r=t.multiplyScalar(i*e*2).addScaledVector(n,a*e*2);this.controls.target.add(r),this.camera.position.add(r)}this.controls.update();let o=this.controls.target.clone();this.controls.target.clamp(new U(-29,0,-1),new U(18,4,25)),this.camera.position.add(this.controls.target.clone().sub(o))}let n=this.isWalking?this.camera.position:this.controls.target;this.camera.getWorldDirection(this.direction);let r=Math.atan2(this.direction.x,-this.direction.z)*180/Math.PI,i=gd(n.x,n.z);document.querySelector(`#map-camera`).setAttribute(`transform`,`translate(${i.x},${i.y}) rotate(${r})`)}};function Rg(){let e=document.querySelector(`#floor-plan`);e.setAttribute(`viewBox`,`${gd(Y.minX-.7,0).x} 0 665 370`);let t=(e,t,n=!1)=>{let r=gd(e.minX,e.minZ);return`<rect x="${r.x}" y="${r.y}" width="${(e.maxX-e.minX)*14}" height="${(e.maxZ-e.minZ)*14}" fill="${t}" stroke="#9fa695" stroke-width="1.5" ${n?`stroke-dasharray="3 2"`:``}/>`},n=(e,t)=>{let n=gd((e.minX+e.maxX)/2,(e.minZ+e.maxZ)/2);return t.map((e,r)=>`<text x="${n.x}" y="${n.y+(r-(t.length-1)/2)*10}" text-anchor="middle" fill="#53604f" stroke="none" font-size="${r?5.5:6.5}">${e}</text>`).join(``)};e.innerHTML=`<title>Grundplan: MØDE 4 er Space Invaders. MØDE 3 er Minecraft, med MØDE 2 nedenfor. Toiletterne ligger på den anden side af gangen. Køkkenet forbinder gangen med passagen neden for MØDE 2. Fra den lille gang fører sidedøren ind i Kontoret. Day21 ligger vest for Kontoret med en åben dør mellem rummene.</title>`+[Zu,Qu,ed,J.left,J.foyer,J.right,rd,ad,sd,Y,ud,fd].map(e=>t(e,`#e5e3d8`)).join(``)+t($u,`#eeede8`,!0)+[td,nd,J.entrance,J.leftDoor,J.rightDoor,id,od,cd,ld,dd].map(e=>t(e,`#eeede8`).replace(`stroke="#9fa695"`,`stroke="none"`)).join(``)+n(Zu,[`SPACE INVADERS`,`MØDE 4 · 7,758 × 6,205 m`])+n(Qu,[`MINECRAFT`,`MØDE 3 · 4,835 × 4,362 m`])+n($u,[`MØDE 2`,`Ikke implementeret`])+n(rd,[`KØKKEN`,`6,567 × 3,100 m`])+n(J.left,[`WC`])+n(J.right,[`WC`])+Object.values(Md).map(e=>t(e,`#a1a78f`)).join(``)+n(ad,[`LILLE GANG`])+t(Kd,`#d6e0d9`)+t(Jd,`#a1a78f`)+[...Ld,...Gd].map(e=>t({minX:e.x-Pd.depth/2,maxX:e.x+Pd.depth/2,minZ:e.z-Pd.width/2,maxZ:e.z+Pd.width/2},`#a1a78f`)).join(``)+n({...Y,maxZ:19.5},[`DAY21 · 27,088 m`])+n(ud,[`TETRIS`])+n({...sd,minZ:19.85,maxZ:20.85},[`KONTORET · 17,758 × 6,970 m`])+`<g id="map-camera"><path d="m-7-10 7-8 7 8" fill="#4c786235" stroke="none"/><circle r="3.5" fill="#35664b" stroke="#fff" stroke-width="1.5"/></g>`}var zg={width:960,height:516,ground:400,playerX:130},Bg=1/120,Vg=class{status=`ready`;height=0;velocity=0;distance=0;elapsed=0;obstacles=[];spawnIn=.8;accumulator=0;constructor(e=Math.random){this.random=e}get score(){return Math.floor(this.distance/35)}get speed(){return Math.min(620,330+this.elapsed*5)}action(){if(this.status===`paused`){this.status=`running`;return}(this.status===`ready`||this.status===`over`)&&(this.height=this.velocity=this.distance=this.elapsed=this.accumulator=0,this.obstacles=[],this.spawnIn=.8,this.status=`running`),this.height===0&&(this.velocity=700)}pause(){this.status===`running`&&(this.status=`paused`)}update(e){if(!(this.status!==`running`||!Number.isFinite(e)||e<=0))for(this.accumulator+=Math.min(e,.1);this.accumulator+1e-9>=Bg&&this.status===`running`;){this.accumulator-=Bg,this.elapsed+=Bg;let e=this.speed*Bg;this.distance+=e,this.height=Math.max(0,this.height+this.velocity*Bg-1050*Bg*Bg),this.velocity=this.height>0?this.velocity-2100*Bg:0,this.spawnIn-=Bg,this.spawnIn<=0&&(this.obstacles.push({x:zg.width,width:28+Math.floor(this.random()*20),height:48+Math.floor(this.random()*24)}),this.spawnIn=1.15+this.random()*.65);for(let t of this.obstacles)t.x-=e,t.x+t.width-5>zg.playerX+9&&t.x+5<zg.playerX+43&&this.height+7<t.height&&(this.status=`over`);this.obstacles=this.obstacles.filter(e=>e.x+e.width>0)}}},Hg=`#304d40`,Ug=`#e9eedb`,Wg=`#82947c`,Gg=class{canvas=document.createElement(`canvas`);texture;ctx;constructor(){this.canvas.width=zg.width,this.canvas.height=zg.height,this.ctx=this.canvas.getContext(`2d`),this.texture=new yi(this.canvas),this.texture.colorSpace=Re,this.texture.minFilter=c,this.texture.generateMipmaps=!1}draw(e,t,n){let r=this.ctx,{width:i,height:a,ground:o,playerX:s}=zg;r.fillStyle=Ug,r.fillRect(0,0,i,a);let c=(e,t,n,i,a=Hg,o=`left`)=>{r.fillStyle=a,r.font=`bold ${i}px monospace`,r.textAlign=o,r.fillText(e,t,n)};c(`KAFFEPAUSE`,42,54,20),c(`HI ${String(t).padStart(5,`0`)}   ${String(e.score).padStart(5,`0`)}`,i-42,54,22,Hg,`right`),r.strokeStyle=Wg,r.lineWidth=3;for(let[t,n]of[[310,120],[700,160],[1030,100]]){let i=((t-e.distance*.12)%1200+1200)%1200-80;r.beginPath(),r.moveTo(i,n),r.lineTo(i+16,n),r.lineTo(i+16,n-12),r.lineTo(i+42,n-12),r.lineTo(i+42,n-22),r.lineTo(i+64,n-22),r.lineTo(i+64,n-9),r.lineTo(i+84,n-9),r.lineTo(i+84,n),r.lineTo(i+100,n),r.stroke()}r.fillStyle=Wg,r.fillRect(35,o+2,i-70,3);for(let t=0;t<23;t++){let n=((t*61-e.distance)%i+i)%i;r.fillRect(n,o+15+t%3*8,t%2?9:4,2)}r.fillStyle=Hg;for(let t of e.obstacles){let e=Math.round(t.x),n=o-t.height,i=t.width;r.fillRect(e+i*.4,n,i*.26,t.height),r.fillRect(e,n+13,i*.2,t.height*.45),r.fillRect(e,n+t.height*.5,i*.5,9),r.fillRect(e+i*.8,n+6,i*.2,t.height*.4),r.fillRect(e+i*.55,n+t.height*.38,i*.45,9)}this.dinosaur(s,o-Math.round(e.height),e),(!n||e.status!==`running`)&&(r.fillStyle=Ug,r.fillRect(245,190,500,128),c(n?e.status===`over`?`AV! PRØV IGEN.`:e.status===`paused`?`PAUSE`:`KLAR TIL ET HOP?`:`LIGE EN LILLE PAUSE?`,i/2,226,30,Hg,`center`),c(n?e.status===`over`?`${e.score} POINT · HOP FOR AT GENSTARTE`:e.status===`paused`?`HOP FOR AT FORTSÆTTE`:`MELLEMRUM / ↑ / TRYK`:`▶ PLAY`,i/2,280,22,Hg,`center`)),c(`HOP OVER KAKTUSSERNE. HVOR LANGT NÅR DU?`,i/2,480,17,Hg,`center`),this.texture.needsUpdate=!0}dinosaur(e,t,n){let r=this.ctx,i=t-56;r.fillStyle=Hg,r.fillRect(e+23,i,29,23),r.fillRect(e+16,i+17,23,27),r.fillRect(e+7,i+25,22,15),r.fillRect(e,i+16,8,17),r.fillRect(e+34,i+29,12,5),r.fillRect(e+42,i+29,4,10);let a=n.status===`running`&&n.height===0?Math.floor(n.distance/35)%2:0;r.fillRect(e+13,i+39,8,a?10:17),r.fillRect(e+13,i+(a?46:52),14,4),r.fillRect(e+28,i+39,8,a?17:10),r.fillRect(e+28,i+(a?52:46),14,4),r.fillStyle=Ug,r.fillRect(e+42,i+5,4,4),r.fillRect(e+36,i+17,16,3),n.status===`over`&&(r.fillStyle=Ug,r.fillRect(e+39,i+7,10,3))}},Kg=class{navigation;game=new Vg;screen=new Gg;play=document.querySelector(`#tv-play`);dialog=document.querySelector(`#tv-dialog`);jump=document.querySelector(`#tv-jump`);pause=document.querySelector(`#tv-pause`);status=document.querySelector(`#tv-status`);center=new U;projected=new U;direction=new U;offset=new U;saved=null;best=0;dirty=!0;constructor(e,t){this.navigation=t;try{let e=Number(localStorage.getItem(`office-tv-best`));Number.isFinite(e)&&e>0&&(this.best=Math.floor(e))}catch{}e.material.map=this.screen.texture,e.material.needsUpdate=!0,e.getWorldPosition(this.center),this.play.addEventListener(`click`,()=>this.open()),this.jump.addEventListener(`click`,()=>this.action()),this.pause.addEventListener(`click`,()=>this.togglePause()),document.querySelector(`#tv-close`).addEventListener(`click`,()=>this.dialog.close()),this.dialog.addEventListener(`close`,()=>this.close()),this.dialog.addEventListener(`keydown`,e=>{e.code===`Space`||e.code===`ArrowUp`?(e.preventDefault(),e.repeat||this.action()):e.code===`KeyP`&&(e.preventDefault(),e.repeat||this.togglePause())}),this.dialog.addEventListener(`pointerdown`,e=>{e.button===0&&e.target===this.dialog&&(e.preventDefault(),this.action())});let n=()=>{this.active&&this.game.status===`running`&&(this.game.pause(),this.changed())};addEventListener(`blur`,n),document.addEventListener(`visibilitychange`,()=>{document.hidden&&n()}),this.screen.draw(this.game,this.best,!1)}get active(){return this.saved!==null}resize(){this.active&&this.frameScreen()}canPlay(){let e=this.navigation.camera;return e.getWorldDirection(this.direction),this.offset.copy(this.center).sub(e.position),this.projected.copy(this.center).project(e),this.navigation.isWalking&&e.position.x<this.center.x-.35&&this.offset.length()<2.8&&this.direction.dot(this.offset.normalize())>.85&&this.projected.z>-1&&this.projected.z<1&&Math.abs(this.projected.x)<.8&&Math.abs(this.projected.y)<.7}open(){if(this.active||!this.canPlay())return;let e=this.navigation.camera;this.saved={position:e.position.clone(),rotation:e.quaternion.clone(),fov:e.fov},this.navigation.suspend(!0),document.body.dataset.playing=`true`,this.play.hidden=!0,this.dialog.showModal(),this.jump.focus(),this.changed(),this.frameScreen()}frameScreen(){let e=this.navigation.camera,t=1.65,n=this.dialog.querySelector(`.tv-heading`).getBoundingClientRect().bottom+16,r=this.dialog.querySelector(`.tv-controls`).getBoundingClientRect().top-16,i=Math.min(.58,Math.max(60,r-n)/innerHeight),a=Math.max(.99/(2*t*i),1.84/(2*t*e.aspect*.84));e.fov=kt.radToDeg(2*Math.atan(a)),e.updateProjectionMatrix(),e.setViewOffset(innerWidth,innerHeight,0,(innerHeight-n-r)/2,innerWidth,innerHeight),e.position.copy(this.center).add(new U(-1.65,0,0)),e.lookAt(this.center),e.updateMatrixWorld(),this.dirty=!0}close(){if(!this.saved)return;this.game.pause();let e=this.navigation.camera;e.position.copy(this.saved.position),e.quaternion.copy(this.saved.rotation),e.fov=this.saved.fov,e.clearViewOffset(),e.updateProjectionMatrix(),e.updateMatrixWorld(),this.saved=null,this.navigation.suspend(!1),delete document.body.dataset.playing,this.navigation.canvas.focus({preventScroll:!0}),this.dirty=!0}action(){this.game.action(),this.changed()}togglePause(){this.game.status===`paused`?this.game.action():this.game.pause(),this.changed()}changed(){let e=this.game.status;this.jump.textContent=e===`over`?`Spil igen ↗`:e===`paused`?`Fortsæt ↗`:e===`ready`?`Start / hop ↗`:`Hop ↗`,this.pause.textContent=e===`paused`?`Fortsæt`:`Pause`,this.pause.disabled=e===`ready`||e===`over`,this.status.textContent=e===`over`?`${this.game.score} point. Rekord: ${this.best}. Prøv igen!`:e===`paused`?`Spillet er sat på pause.`:e===`ready`?`Hop over kaktusserne.`:`Spillet er i gang.`,this.dirty=!0}update(e){if(!this.active)this.play.hidden=!this.canPlay(),this.play.hidden||(this.projected.copy(this.center).add(new U(0,-.04,0)).project(this.navigation.camera),this.play.style.insetInlineStart=`${(this.projected.x+1)*innerWidth/2}px`,this.play.style.insetBlockStart=`${(1-this.projected.y)*innerHeight/2}px`);else if(this.game.status===`running`&&(this.game.update(e),this.dirty=!0),this.game.status===`over`&&this.dirty){if(this.game.score>this.best){this.best=this.game.score;try{localStorage.setItem(`office-tv-best`,String(this.best))}catch{}}this.changed()}return this.dirty?(this.screen.draw(this.game,this.best,this.active),this.dirty=!1,!0):!1}},qg={width:800,height:1140,playerY:940},Jg=1/120,Yg=(e,t,n)=>Math.max(t,Math.min(n,e)),Xg=class{status=`ready`;score=0;lives=3;wave=1;playerX=400;direction=1;marchIn=.6;fireIn=0;enemyFireIn=1.5;recovery=0;nextWaveIn=1.2;accumulator=0;stride=0;aliens=[];shots=[];shields=[];erasures=[];constructor(e=Math.random){this.random=e,this.populate()}populate(){this.aliens=Array.from({length:21},(e,t)=>({x:145+t%7*80,y:280+Math.floor(t/7)*70,row:Math.floor(t/7),column:t%7})),this.shields=[];for(let e of[170,400,630])for(let t=0;t<3;t++)for(let n=0;n<5;n++)t===2&&n>0&&n<4||this.shields.push({x:e+(n-2)*20,y:810+t*20});this.shots=[],this.erasures=[],this.direction=1,this.marchIn=.6,this.enemyFireIn=1.5,this.nextWaveIn=1.2,this.recovery=1.2}start(){this.status!==`running`&&(this.status!==`paused`&&(this.score=0,this.lives=3,this.wave=1,this.playerX=400,this.fireIn=this.accumulator=this.stride=0,this.populate(),this.recovery=0),this.status=`running`)}pause(){this.status===`running`&&(this.status=`paused`)}update(e,t={}){if(!(this.status!==`running`||!Number.isFinite(e)||e<=0))for(this.accumulator+=Math.min(e,.1);this.accumulator+1e-9>=Jg&&this.status===`running`;)this.accumulator-=Jg,this.tick(t)}tick({move:e=0,fire:t=!1,targetX:n=this.playerX+Yg(e,-1,1)*360*Jg}){if(this.playerX=Yg(n,55,745),this.recovery=Math.max(0,this.recovery-Jg),this.fireIn=Math.max(0,this.fireIn-Jg),this.erasures=this.erasures.filter(e=>(e.remaining-=Jg)>0),!this.aliens.length){if(this.shots=[],this.wave===3){this.status=`won`;return}this.nextWaveIn-=Jg,this.nextWaveIn<=0&&(this.wave++,this.populate());return}if(t&&this.fireIn<=0&&(this.shots.push({x:this.playerX,y:qg.playerY-28,enemy:!1}),this.fireIn=.06),this.marchIn-=Jg,this.marchIn<=0){let e=this.aliens.some(e=>e.x+this.direction*19<50||e.x+this.direction*19>750);e&&(this.direction*=-1);for(let t of this.aliens)e?t.y+=27:t.x+=this.direction*19;this.stride++,this.marchIn+=Math.max(.12,.58-(21-this.aliens.length)*.018-(this.wave-1)*.075)}if(this.aliens.some(e=>e.y+20>=qg.playerY-22)){this.status=`over`;return}if(this.shields=this.shields.filter(e=>!this.aliens.some(t=>Math.abs(t.x-e.x)<37&&Math.abs(t.y-e.y)<30)),this.enemyFireIn-=Jg,this.enemyFireIn<=0){let e=this.aliens[Math.min(this.aliens.length-1,Math.floor(this.random()*this.aliens.length))].column,t=this.aliens.filter(t=>t.column===e).at(-1);this.shots.filter(e=>e.enemy).length<5&&this.shots.push({x:t.x,y:t.y+24,enemy:!0}),this.enemyFireIn=Math.max(.4,1.1-this.wave*.13)+this.random()*.6}this.shots=this.shots.filter(e=>{e.y+=(e.enemy?260+this.wave*25:-740)*Jg;let t=this.shields.findIndex(t=>Math.abs(t.x-e.x)<13&&Math.abs(t.y-e.y)<16);if(t>=0)return this.shields.splice(t,1),!1;if(!e.enemy){let t=this.aliens.findIndex(t=>Math.abs(t.x-e.x)<26&&Math.abs(t.y-e.y)<22);if(t>=0){let[e]=this.aliens.splice(t,1);return this.score+=(3-e.row)*10,this.erasures.push({x:e.x,y:e.y,remaining:.24}),!1}}else if(Math.abs(e.x-this.playerX)<25&&Math.abs(e.y-qg.playerY)<23)return this.recovery<=0&&(this.lives--,this.recovery=1.2,this.lives||(this.status=`over`)),!1;return e.y>220&&e.y<995})}},Zg={left:100,right:700,top:580,bottom:790},Qg=([e,t])=>e>Zg.left&&e<Zg.right&&t>Zg.top&&t<Zg.bottom;function $g(e){let t=e.flat(),n=t.map(e=>e[0]),r=t.map(e=>e[1]),i=Math.min(...n),a=Math.max(...n),o=Math.min(...r),s=Math.max(...r),c=Math.min(56/Math.max(1,a-i),48/Math.max(1,s-o));return e.map(e=>e.map(([e,t])=>[(e-(i+a)/2)*c,(t-(o+s)/2)*c-2]))}var e_=class{ship=[];drawing=[];anchor=null;pendingFire=!1;constructor(e=Math.random){this.game=new Xg(e)}get canDraw(){return[`ready`,`over`,`won`].includes(this.game.status)}addStroke(e,t){return!this.canDraw||e.length<2||e.length>512||e.some(e=>!Number.isFinite(e[0])||!Number.isFinite(e[1]))||e.slice(1).reduce((t,n,r)=>t+Math.hypot(n[0]-e[r][0],n[1]-e[r][1]),0)<6?!1:(this.drawing.push(e.map(([e,t])=>[e,t])),this.drawing.length===5&&(this.ship=$g(this.drawing),this.drawing=[],this.game.start(),this.pendingFire=!1,this.anchor={lateral:t,x:this.game.playerX}),!0)}update(e,t,n,{fire:r=!1,autoFire:i=!1,steeringX:a}={}){if(!this.ship.length||this.canDraw)return;if(!t){this.game.pause(),this.anchor=null,this.pendingFire=!1;return}this.anchor||={lateral:n,x:this.game.playerX},this.game.status===`paused`&&this.game.start();let o=a??this.anchor.x+(n-this.anchor.lateral)*(345/.45);this.pendingFire||=r,this.game.update(e,{targetX:o,fire:i||this.pendingFire}),a!==void 0&&(this.anchor={lateral:n,x:this.game.playerX}),(this.game.fireIn>0||!this.game.aliens.length)&&(this.pendingFire=!1)}},t_=`#343a40`,n_=`#fffef9`,r_=`#1864ab`,i_=`#2b8a3e`,a_=`#6741a5`,o_=`#c92a2a`,s_=class{canvas=document.createElement(`canvas`);texture;c;constructor(e){this.canvas.width=qg.width,this.canvas.height=qg.height,this.c=this.canvas.getContext(`2d`),this.texture=new yi(this.canvas),this.texture.colorSpace=Re,this.texture.minFilter=c,this.texture.generateMipmaps=!1,document.fonts.load(`40px Whiteboard`).then(e).catch(()=>{})}stroke(e,t=t_,n=3,r=!1,i=!1,a=1){let o=this.c;if(o.save(),o.lineCap=`round`,o.lineJoin=`round`,o.strokeStyle=t,i){o.beginPath(),e.forEach(([e,t],n)=>n?o.lineTo(e,t):o.moveTo(e,t)),o.closePath(),o.save(),o.clip(),o.globalAlpha=.2,o.lineWidth=2;let t=e.map(e=>e[0]),n=e.map(e=>e[1]),r=Math.min(...t),i=Math.max(...t),a=Math.min(...n),s=Math.max(...n);for(let e=r-(s-a);e<i;e+=8)o.beginPath(),o.moveTo(e,s),o.lineTo(e+s-a,a),o.stroke();o.restore()}for(let t=0;t<2;t++)o.lineWidth=n*(t?.6:1),o.globalAlpha=t?.45:.94,o.beginPath(),e.forEach(([e,n],r)=>{let i=Math.sin(r*7.1+a*2.3+t)*1.3,s=Math.cos(r*4.7+a+t*2)*1.1;r?o.lineTo(e+i,n+s):o.moveTo(e+i,n+s)}),r&&o.closePath(),o.stroke();o.restore()}text(e,t,n,r,i=t_,a=`left`,o=0){let s=this.c;s.save(),s.translate(t,n),s.rotate(o),s.font=`${r}px Whiteboard, "Comic Sans MS", cursive`,s.textAlign=a,s.fillStyle=i,s.fillText(e,0,0),s.restore()}alien(e,t,n,r,i){let a=this.c;a.save(),a.translate(e,t);let o=[a_,i_,r_][n];this.stroke([[[-24,6],[-20,-8],[-10,-17],[0,-23],[10,-17],[20,-8],[24,6],[13,12],[-13,12]],[[-26,10],[-26,-3],[-16,-3],[-16,-14],[16,-14],[16,-3],[26,-3],[26,10],[15,10],[15,16],[-15,16],[-15,10]],[[-27,5],[-22,-11],[-11,-18],[11,-18],[22,-11],[27,5],[18,14],[-18,14]]][n],o,3,!0,!0,i);for(let e of[-1,1])n===1&&this.stroke([[e*12,-15],[e*18,-25],[e*24,-25]],o,2.5),this.stroke([[e*14,13],[e*19,r?24:17],[e*(r?26:10),24]],o,3),this.stroke([[e*8-2,-3],[e*8+2,-3],[e*8+2,2],[e*8-2,2]],o,2,!0);a.restore()}draw(e,t,n,r,i,a,o={}){let s=this.c,{hovered:c=!1,showDrawingArea:l=!1,autoFire:u=!1,pauseHint:d=`Kom tilbage til tavlen for at fortsætte`}=o,f=[`ready`,`over`,`won`].includes(e.status);if(s.fillStyle=n_,s.fillRect(0,0,800,1140),c&&this.stroke([[12,12],[788,12],[788,1128],[12,1128]],r_,5,!0),f){if(l||i.length||a.length||e.status!==`ready`){this.text(e.status===`over`?`De overtog mødet!`:e.status===`won`?`Tavlen er reddet!`:`Tegn dit rumskib`,400,520,40,r_,`center`,-.015),this.text(`${i.length}/5 streger · alle former virker`,400,561,28,t_,`center`);let{left:t,right:n,top:r,bottom:a}=Zg;s.save(),s.setLineDash([8,10]),this.stroke([[t,r],[n,r],[n,a],[t,a]],`#a3afb6`,2,!0),s.restore(),e.status!==`ready`&&this.text(`${e.score} point · tegn et nyt rumskib`,400,845,27,t_,`center`)}for(let e of[...i,a])e.length>1&&this.stroke(e,r_,4);this.texture.needsUpdate=!0;return}this.text(`SPACE INVADERS`,400,90,62,t_,`center`,-.015),this.stroke([[95,113],[300,117],[511,111],[699,115]],r_,3),this.text(`mødet må vente ...`,400,155,27,a_,`center`,.015),this.text(`POINT ${String(e.score).padStart(4,`0`)}`,48,210,27),this.text(`BØLGE ${e.wave}/3`,752,210,27,t_,`right`);for(let t of e.aliens)this.alien(t.x,t.y,t.row,n?0:e.stride%2,t.column+t.row*7);for(let t of e.shields)this.stroke([[t.x-9,t.y-9],[t.x+9,t.y-9],[t.x+9,t.y+9],[t.x-9,t.y+9]],i_,2,!0,!0,t.x);for(let t of e.shots)this.stroke(t.enemy?[[t.x-3,t.y-10],[t.x+3,t.y-3],[t.x-3,t.y+3],[t.x+3,t.y+10]]:[[t.x,t.y+10],[t.x+1,t.y-10]],t.enemy?o_:r_,3);if(!n)for(let t of e.erasures)for(let e=0;e<6;e++){let n=e*Math.PI/3;this.stroke([[t.x+Math.cos(n)*15,t.y+Math.sin(n)*15],[t.x+Math.cos(n)*27,t.y+Math.sin(n)*27]],a_,2)}let p=e.playerX,m=qg.playerY;for(let e of r)this.stroke(e.map(([e,t])=>[p+e,m+t]),r_,3.5);e.recovery>0&&e.status===`running`&&this.stroke([[p-37,m+20],[p-38,m-18],[p,m-40],[p+38,m-18],[p+37,m+20]],r_,1.5),this.stroke([[45,990],[281,993],[530,988],[755,992]],t_,2);for(let t=0;t<3;t++){let n=65+t*42;this.stroke([[n,1033],[n-14,1018],[n-13,1008],[n-5,1006],[n,1013],[n+6,1006],[n+14,1009],[n+13,1019]],t<e.lives?o_:`#b6b6b0`,2.5,!0,t<e.lives)}this.text(`REKORD ${String(t).padStart(4,`0`)}`,751,1031,25,t_,`right`),this.text(u?`Automatisk ild · mikrofonen er slukket`:`Sig “skyd”, “bang” eller “piyv”`,400,1080,27,r_,`center`),this.text(o.headSteering?`Styr med hovedet · gå væk for at holde pause`:`Gå til siderne · gå væk for at holde pause`,400,1120,23,t_,`center`),e.status===`paused`?(s.fillStyle=n_,s.fillRect(90,502,620,155),this.text(`Tuschpause.`,400,565,42,r_,`center`),this.text(d,400,620,27,t_,`center`)):e.aliens.length||this.text(`Ny bølge på vej ...`,400,600,38,r_,`center`),this.texture.needsUpdate=!0}},c_=class{sensitivity=1;noise=.004;elapsed=0;quiet=0;loud=0;cooldown=0;latched=!1;get ready(){return this.elapsed>=.65}get threshold(){return Math.max(.014,this.noise*3)/this.sensitivity}update(e,t){if(!Number.isFinite(e)||e<=0||!Number.isFinite(t))return!1;if(e=Math.min(e,.05),this.cooldown=Math.max(0,this.cooldown-e),!this.ready)return this.elapsed+=e,this.noise+=(t-this.noise)*(1-Math.exp(-e*8)),!1;if(t<Math.max(this.noise*1.35,this.threshold*.6))this.noise+=(t-this.noise)*(1-Math.exp(-e*2)),this.quiet+=e,this.loud=0,this.quiet>=.02&&(this.latched=!1);else{this.quiet=0,t>=this.threshold?this.loud+=e:this.loud=0;let n=!this.latched&&this.loud>=.015,r=this.loud>=.22;if((n||r)&&this.cooldown<=0)return this.latched=!0,this.cooldown=.075,!0}return!1}},l_={supported:()=>!!(globalThis.isSecureContext&&typeof navigator.mediaDevices?.getUserMedia==`function`&&typeof globalThis.AudioContext==`function`),createContext:()=>new AudioContext,requestStream:()=>navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!1},video:!1})},u_=class{state=`off`;message=``;level=0;detector=new c_;environment;generation=0;context=null;stream=null;source=null;analyser=null;samples=new Float32Array(1024);constructor(e=l_){this.environment=e}get active(){return[`requesting`,`calibrating`,`listening`].includes(this.state)}async start(){if(this.active)return;if(!this.environment.supported()){this.state=`unsupported`,this.message=`Lydskud kræver en browser med mikrofonadgang via HTTPS eller localhost.`;return}this.stop(),this.state=`requesting`,this.message=``;let e=this.generation;try{let t=this.environment.createContext();this.context=t;let n=t.resume().then(()=>null,e=>e),r=await this.environment.requestStream();if(e!==this.generation){r.getTracks().forEach(e=>e.stop());return}this.stream=r;let i=await n;if(e!==this.generation)return;if(i)throw i;if(t.state!==`running`||!r.getAudioTracks().some(e=>e.readyState===`live`))throw Error(`Audio unavailable`);this.analyser=t.createAnalyser(),this.analyser.fftSize=this.samples.length,this.source=t.createMediaStreamSource(r),this.source.connect(this.analyser),r.getAudioTracks().forEach(t=>t.addEventListener(`ended`,()=>{e===this.generation&&this.fail(`Mikrofonen blev afbrudt. Aktivér den igen for at fortsætte.`)},{once:!0})),this.state=`calibrating`}catch(t){if(e!==this.generation)return;let n=t instanceof Error?t.name:``;this.fail(n===`NotAllowedError`?`Ingen mikrofonadgang. Tillad mikrofonen i browseren, og prøv igen.`:n===`NotFoundError`?`Ingen mikrofon fundet. Tilslut en mikrofon, og prøv igen.`:`Mikrofonen kunne ikke starte. Prøv igen, eller spil uden mikrofon.`)}}fail(e){this.stop(),this.state=`error`,this.message=e}stop(){this.generation++,this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.source?.disconnect(),this.source=null,this.analyser=null,this.context&&this.context.close().catch(()=>{}),this.context=null,this.level=0;let e=this.detector.sensitivity;this.detector=new c_,this.detector.sensitivity=e,this.active&&(this.state=`off`)}update(e){if(!this.analyser)return!1;if(this.context?.state!==`running`)return this.fail(`Mikrofonen holder pause. Aktivér den igen for at fortsætte.`),!1;this.analyser.getFloatTimeDomainData(this.samples);let t=0;for(let e of this.samples)t+=e*e;let n=Math.sqrt(t/this.samples.length),r=this.detector.update(e,n);return this.level=Math.min(1,n/this.detector.threshold),this.state=this.detector.ready?`listening`:`calibrating`,r}},d_=class{state=`calibrating`;center=null;samples=[];lastSeen=-1/0;constructor(e=400){this.recenter(e)}recenter(e=this.targetX){this.targetX=this.desiredX=this.anchorX=e,this.center=null,this.samples=[],this.state=`calibrating`}observe(e,t){if(!Number.isFinite(e)){this.samples=[],this.state=`lost`;return}if(this.state===`lost`&&this.recenter(),this.lastSeen=t,this.center===null){if(this.samples.some(t=>Math.abs(t.position-e)>.035)&&(this.samples=[]),this.samples.push({position:e,time:t}),this.samples.length<6||t-this.samples[0].time<600)return;this.center=this.samples.reduce((e,t)=>e+t.position,0)/this.samples.length,this.samples=[],this.state=`tracking`}let n=e-this.center,r=Math.sign(n)*Math.max(0,Math.abs(n)-.006);this.desiredX=Math.max(55,Math.min(745,this.anchorX+345/.14*r))}update(e,t){return t-this.lastSeen>400&&(this.samples=[],this.state=`lost`),this.state===`tracking`&&(this.targetX+=(this.desiredX-this.targetX)*(1-Math.exp(-14*e))),this.targetX}},f_=`modulepreload`,p_=function(e){return`/3doffice/dist/`+e},m_={},h_=function(e){return e.pathname.endsWith(`.css`)},g_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=p_(t,n);let r=s(t);if(r.href in m_)return;m_[r.href]=!0;let i=h_(r);if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:f_,i||(o.as=`script`),o.crossOrigin=``,o.href=r.href,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),i)return new Promise((e,t)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},__={supported:()=>isSecureContext&&!!navigator.mediaDevices?.getUserMedia&&typeof Worker<`u`&&typeof OffscreenCanvas<`u`&&typeof createImageBitmap==`function`,requestStream:()=>navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:`user`,width:{ideal:320},height:{ideal:240},frameRate:{ideal:15,max:20}}}),createVideo:()=>{let e=document.createElement(`video`);return e.muted=!0,e.playsInline=!0,e},createTracker:async()=>(await g_(async()=>{let{createHeadTracker:e}=await import(`./head-camera-browser-CE7mejaJ.js`);return{createHeadTracker:e}},[])).createHeadTracker(),now:()=>performance.now()},v_=class{state=`off`;message=``;steering=new d_;environment;generation=0;stream=null;video=null;tracker=null;busy=!1;nextFrame=0;lastVideoTime=-1;constructor(e=__){this.environment=e}get active(){return[`requesting`,`loading`,`calibrating`,`tracking`,`lost`].includes(this.state)}get ready(){return this.state===`tracking`}get targetX(){return this.steering.targetX}async start(e=400){if(this.active)return;if(this.stop(),this.message=``,!this.environment.supported()){this.state=`unsupported`,this.message=`Kameraets hovedstyring understøttes ikke her. Du kan stadig gå til siderne.`;return}let t=this.generation;this.state=`requesting`,this.steering.recenter(e);try{let e=await this.environment.requestStream();if(t!==this.generation){e.getTracks().forEach(e=>e.stop());return}this.stream=e,e.getVideoTracks().forEach(e=>e.addEventListener(`ended`,()=>{t===this.generation&&this.fail(`Kameraet blev afbrudt. Aktivér det igen, eller gå til siderne.`)},{once:!0})),this.state=`loading`;let n=this.environment.createVideo();if(this.video=n,n.srcObject=e,await n.play(),t!==this.generation)return;let r=await this.environment.createTracker();if(t!==this.generation){r.close();return}this.tracker=r,this.state=`calibrating`,this.steering.lastSeen=this.environment.now()}catch(e){if(t!==this.generation)return;let n=e instanceof Error?e.name:``;this.fail(n===`NotAllowedError`?`Ingen adgang til kameraet. Tillad kamera i browseren, eller gå til siderne.`:n===`NotFoundError`?`Der er intet kamera tilgængeligt. Du kan stadig gå til siderne.`:`Kameraets hovedstyring kunne ikke starte. Prøv igen, eller gå til siderne.`)}}recenter(e=this.targetX){this.steering.recenter(e),this.steering.lastSeen=this.environment.now(),this.tracker&&(this.state=`calibrating`)}stop(){this.generation++,this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,this.video&&=(this.video.pause(),this.video.srcObject=null,null),this.tracker?.close(),this.tracker=null,this.busy=!1,this.nextFrame=0,this.lastVideoTime=-1,this.active&&(this.state=`off`)}fail(e){this.stop(),this.state=`error`,this.message=e}update(e){let t=this.tracker,n=this.video;if(!t||!n)return;let r=this.environment.now();if(this.steering.update(e,r),this.state=this.steering.state,this.busy||r<this.nextFrame||n.readyState<2||n.currentTime===this.lastVideoTime)return;this.busy=!0,this.nextFrame=r+1e3/15,this.lastVideoTime=n.currentTime;let i=this.generation;t.track(n,r).then(e=>{i===this.generation&&this.steering.observe(e,r)}).catch(()=>{i===this.generation&&this.fail(`Hovedstyringen blev afbrudt. Prøv igen, eller gå til siderne.`)}).finally(()=>{i===this.generation&&(this.busy=!1)})}},y_=class{board;navigation;reducedMotion;blocked;play=new e_;screen=new s_(()=>{this.dirty=!0});status=document.querySelector(`#whiteboard-status`);microphone=new u_;head=new v_;headButton=document.querySelector(`#whiteboard-head`);headRecenter=document.querySelector(`#whiteboard-head-recenter`);headMessage=document.querySelector(`#whiteboard-head-message`);audioPanel=document.querySelector(`#whiteboard-audio`);audioMessage=document.querySelector(`#whiteboard-audio-message`);micButton=document.querySelector(`#whiteboard-mic`);autoButton=document.querySelector(`#whiteboard-auto`);levelControls=document.querySelector(`#whiteboard-level-controls`);level=document.querySelector(`#whiteboard-level`);audioHint=document.querySelector(`#whiteboard-audio-hint`);autoFire=!1;ray=new ys;surfaces=[];center=new U;normal=new U;right=new U;projected=new U;offset=new U;gesture=null;pointer=null;drawing=[];hovered=!1;touchInput=matchMedia(`(any-pointer: coarse)`);dirty=!0;best=0;lastStatus=``;drawIn=0;sightIn=0;nearby=!1;focused=document.hasFocus();constructor(e,t,n,r,i){this.board=e,this.navigation=n,this.reducedMotion=r,this.blocked=i;try{let e=Number(localStorage.getItem(`office-whiteboard-best`));Number.isFinite(e)&&e>0&&(this.best=Math.floor(e))}catch{}e.material.map=this.screen.texture,e.material.needsUpdate=!0,t.updateMatrixWorld(!0),e.getWorldPosition(this.center),this.normal.set(0,0,1).applyNormalMatrix(new Nt().getNormalMatrix(e.matrixWorld)),this.right.setFromMatrixColumn(e.matrixWorld,0).setY(0).normalize(),t.traverse(e=>{e instanceof ti&&this.surfaces.push(e)});let a=n.canvas;this.micButton.addEventListener(`click`,()=>{this.available()&&!this.play.canDraw&&(n.clearInput(),a.focus({preventScroll:!0}),this.autoFire=!1,this.microphone.active?this.microphone.stop():this.microphone.start())}),this.autoButton.addEventListener(`click`,()=>{this.available()&&!this.play.canDraw&&(this.microphone.stop(),this.autoFire=!0,n.clearInput(),a.focus({preventScroll:!0}))}),this.headButton.addEventListener(`click`,()=>{this.available()&&!this.play.canDraw&&(n.clearInput(),a.focus({preventScroll:!0}),this.head.active?this.head.stop():this.head.start(this.play.game.playerX))}),this.headRecenter.addEventListener(`click`,()=>{this.head.recenter(this.play.game.playerX),n.clearInput(),a.focus({preventScroll:!0})}),document.querySelector(`#whiteboard-sensitivity`).addEventListener(`input`,e=>{this.microphone.detector.sensitivity=Number(e.target.value)}),a.addEventListener(`pointerdown`,e=>{if(this.gesture&&e.pointerId!==this.gesture.id){this.cancelDrawing(),e.stopImmediatePropagation();return}if(!e.isPrimary||e.button!==0||!this.play.canDraw||!this.available())return;let t=this.boardPoint(e,!0);t&&Qg(t)&&(e.preventDefault(),e.stopImmediatePropagation(),n.clearInput(),a.focus({preventScroll:!0}),this.drawing=[t],this.gesture={id:e.pointerId,position:n.camera.position.clone(),rotation:n.camera.quaternion.clone()},a.setPointerCapture(e.pointerId),a.dataset.whiteboardPen=`true`,this.dirty=!0)},{capture:!0}),a.addEventListener(`pointermove`,e=>{if(this.pointer=e.pointerType===`touch`?null:{clientX:e.clientX,clientY:e.clientY},!this.gesture){this.updateHover(this.nearby&&this.focused&&!this.blocked()?this.boardPoint(e,!0):null);return}if(e.pointerId!==this.gesture.id)return;e.preventDefault(),e.stopImmediatePropagation();let t=this.boardPoint(e,!1);if(!t||!Qg(t)||this.drawing.length>=512){this.cancelDrawing();return}let n=this.drawing.at(-1);Math.hypot(t[0]-n[0],t[1]-n[1])>2&&(this.drawing.push(t),this.dirty=!0)},{capture:!0}),a.addEventListener(`pointerup`,e=>{if(e.pointerId!==this.gesture?.id)return;e.preventDefault(),e.stopImmediatePropagation();let t=this.boardPoint(e,!0);if(!t||!Qg(t)||!this.available()){this.cancelDrawing();return}this.drawing.length<512&&this.drawing.push(t),this.releasePointer(),this.play.addStroke(this.drawing,this.lateralPosition()),this.drawing=[],this.updateHover(e.pointerType===`touch`?null:t),this.dirty=!0},{capture:!0});let o=()=>{this.gesture&&this.cancelDrawing()};a.addEventListener(`pointercancel`,o),a.addEventListener(`lostpointercapture`,o),a.addEventListener(`pointerleave`,()=>{this.pointer=null,this.updateHover(null)}),addEventListener(`blur`,()=>{this.focused=!1,this.pointer=null,this.updateHover(null),this.cancelDrawing(),this.stopDevices(),this.play.update(0,!1,0),this.dirty=!0}),addEventListener(`focus`,()=>{this.focused=!0,this.sightIn=0}),document.addEventListener(`visibilitychange`,()=>{this.sightIn=0,document.hidden&&(this.cancelDrawing(),this.stopDevices(),this.play.update(0,!1,0),this.dirty=!0)}),addEventListener(`pagehide`,()=>this.stopDevices()),a.addEventListener(`webglcontextlost`,()=>this.stopDevices()),r.addEventListener(`change`,()=>{this.dirty=!0})}stopDevices(){this.microphone.stop(),this.head.stop()}releasePointer(){let e=this.gesture?.id;this.gesture=null;let t=this.navigation.canvas;e!==void 0&&t.hasPointerCapture(e)&&t.releasePointerCapture(e),delete t.dataset.whiteboardPen}cancelDrawing(){this.releasePointer(),this.drawing=[],this.dirty=!0}updateHover(e){let t=e!==null;t!==this.hovered&&(this.hovered=t,this.dirty=!0),e&&this.play.canDraw&&Qg(e)?this.navigation.canvas.dataset.whiteboardPen=`true`:delete this.navigation.canvas.dataset.whiteboardPen}firstHit(){return this.ray.intersectObjects(this.surfaces,!1).find(e=>{for(let t=e.object;t;t=t.parent)if(!t.visible)return!1;let t=e.object.material;return(Array.isArray(t)?t:[t]).some(e=>e.visible&&(!e.transparent||e.opacity>=.5))})}boardPoint(e,t){let n=this.navigation.canvas.getBoundingClientRect();this.navigation.camera.updateMatrixWorld(),this.ray.setFromCamera(new H((e.clientX-n.left)/n.width*2-1,1-(e.clientY-n.top)/n.height*2),this.navigation.camera),this.ray.far=2.8;let r=t?this.firstHit():this.ray.intersectObject(this.board,!1)[0];return r?.object===this.board&&r.uv?[r.uv.x*800,(1-r.uv.y)*1140]:null}available(){if(this.blocked()||!this.focused||!this.navigation.isWalking)return!1;let e=this.navigation.camera;return this.offset.copy(e.position).sub(this.center),this.offset.length()>2.8||this.offset.dot(this.normal)<.3||(e.updateMatrixWorld(),this.projected.copy(this.center).project(e),this.projected.z<-1||this.projected.z>1||Math.abs(this.projected.x)>.95||Math.abs(this.projected.y)>.9)?!1:(this.offset.copy(this.center).sub(e.position).normalize(),this.ray.set(e.position,this.offset),this.ray.far=2.8,this.firstHit()?.object===this.board)}lateralPosition(){return this.offset.copy(this.navigation.camera.position).sub(this.center).dot(this.right)}update(e){this.sightIn-=e;let t=this.sightIn<=0;t&&(this.nearby=this.available(),this.sightIn=.12);let n=this.nearby&&this.focused&&this.navigation.isWalking&&!this.blocked();n?t&&this.pointer&&!this.gesture&&this.updateHover(this.boardPoint(this.pointer,!0)):this.updateHover(null),this.gesture&&(!n||this.gesture.position.distanceToSquared(this.navigation.camera.position)>1e-4||this.gesture.rotation.angleTo(this.navigation.camera.quaternion)>.01)&&this.cancelDrawing(),(!n||this.play.canDraw)&&(this.microphone.active||this.head.active)&&this.stopDevices(),this.head.update(e);let r=n&&!this.play.canDraw&&this.microphone.update(e),i=this.autoFire||this.microphone.state===`listening`;this.play.update(e,n&&i&&(!this.head.active||this.head.ready),this.lateralPosition(),{fire:r,autoFire:this.autoFire,steeringX:this.head.ready?this.head.targetX:void 0});let a=this.play.game;this.play.canDraw&&(this.microphone.active||this.head.active)&&this.stopDevices(),this.audioPanel.hidden=!n||this.play.canDraw,this.level.value=this.microphone.level,this.best=Math.max(this.best,a.score);let o=`${a.status}/${a.wave}/${a.lives}/${n}/${this.play.drawing.length}/${this.microphone.state}/${this.autoFire}/${this.head.state}`;if(o!==this.lastStatus){if(this.lastStatus=o,this.dirty=!0,a.status!==`running`)try{localStorage.setItem(`office-whiteboard-best`,String(this.best))}catch{}this.status.textContent=n?this.play.canDraw?`Tegn dit eget rumskib i kassen på tavlen. ${this.play.drawing.length} af 5 streger. Fem streger starter spillet; alle former kan bruges.`:`Whiteboard invasion: bølge ${a.wave} af 3, ${a.lives} liv. ${this.head.active?`Bevæg hovedet til siderne for at styre.`:`Gå til siderne for at styre.`} Du kan gå væk når som helst.`:``;let e=this.head;this.headButton.disabled=e.state===`unsupported`,this.headButton.textContent=e.state===`requesting`||e.state===`loading`?`Annuller kamera`:e.active?`Sluk hovedstyring`:`Aktivér hovedstyring`,this.headRecenter.hidden=![`tracking`,`calibrating`,`lost`].includes(e.state),this.headMessage.textContent=e.state===`requesting`?`Tillad kameraet i browseren.`:e.state===`loading`?`Kamera tændt · indlæser hovedstyring …`:e.state===`calibrating`?`Kamera tændt · se lige frem og hold hovedet roligt et øjeblik.`:e.state===`tracking`?`Kamera tændt · drej eller flyt hovedet til siderne.`:e.state===`lost`?`Kamera tændt · ansigtet er ude af syne. Se mod kameraet for at fortsætte.`:e.message||`Brug hovedet til at styre skibet med dit kamera.`;let t=this.microphone;this.micButton.disabled=t.state===`unsupported`,this.micButton.textContent=t.state===`requesting`?`Annuller`:t.active?`Sluk mikrofon`:`Aktivér mikrofon`,this.autoButton.hidden=this.autoFire||t.state===`listening`||t.state===`calibrating`,this.levelControls.hidden=t.state!==`listening`,this.audioMessage.textContent=this.autoFire?`Automatisk ild · mikrofonen er slukket.`:t.state===`requesting`?`Tillad mikrofonen i browseren for at bruge lydskud.`:t.state===`calibrating`?`Et øjebliks stilhed — finder rummets lydniveau …`:t.state===`listening`?`Mikrofon tændt · sig “skyd”, “bang” eller “piyv”`:t.message||`Dit rumskib er klar. Aktivér mikrofonen for at skyde.`,this.audioHint.textContent=t.state===`listening`?`Prøv “ratatat” eller et langt “brrrr” for salver. Justér følsomheden efter behov.`:`Korte lyde giver ét skud; “brrrr” giver salver. Mikrofonen slukker, når du går væk.`}return a.status===`running`&&(this.drawIn-=e,this.drawIn<=0&&(this.dirty=!0,this.drawIn=1/30)),this.dirty?(this.screen.draw(a,this.best,this.reducedMotion.matches,this.play.ship,this.play.drawing,this.drawing,{hovered:this.hovered,showDrawingArea:this.hovered||n&&this.touchInput.matches,autoFire:this.autoFire,headSteering:this.head.active,pauseHint:n?this.head.active&&!this.head.ready?`Se mod kameraet, og hold hovedet roligt`:`Aktivér mikrofonen, når du er klar`:void 0}),this.dirty=!1,!0):!1}},b_=Ld.filter(e=>e.islandIndex===5&&e.side===-1)[0],x_={x:b_.x-.045,z:b_.z+Pd.width/2+.32};function S_(e){let t=e%6;return{x:.36+t%3*.125,y:.7725+Math.floor(e/6)*.087,z:t<3?.29:0,rotation:Math.PI/2}}var C_=[[4.1,3.5,2],[4.1,4.4],[5.585,4.4],[5.585,14.35],[6.35,14.35],[6.35,15.85],[4.3,15.85],[4.3,15.96],[2,15.96],[2,20.4],[x_.x,20.4],[15.4,20.4,3],[2,20.4],[.3,20.4],[.3,18.8],[-25.3,18.8,3]].map(([e,t,n=0])=>({x:e,z:t,pause:n})),w_=[...C_,...C_.slice(1,-1).reverse()],T_={x:7.48,z:14.65},E_=C_[4],D_=C_[10],O_=1.2,k_=22,A_=.6,j_=[{x:C_[3].x,z:(J.entrance.minZ+J.entrance.maxZ)/2},{x:(J.rightDoor.minX+J.rightDoor.maxX)/2,z:(J.entrance.minZ+J.entrance.maxZ)/2},{x:(J.rightDoor.minX+J.rightDoor.maxX)/2,z:10.82,restroom:!0}],M_=class{x=w_[0].x;z=w_[0].z;heading=0;distance=0;moving=!1;paused=!1;target=1;waiting=0;coffeePresses=0;coffeeState=`idle`;coffeeTrip=[];coffeeResume=0;boostRemaining=0;cupsDelivered=0;placingProgress=0;restroomDoorClosure=0;get coffeeCupWaiting(){return this.coffeePresses===3&&(this.coffeeState===`fetching`||this.coffeeState.startsWith(`toilet-`))}routeTo(e){let t=this.coffeeTrip.map(e=>({x:e.x,z:e.z,drink:!1,place:!1})),n=t.length?this.coffeeResume:this.target,r=[1,-1].map(r=>{let i=r===1?n:(n-1+w_.length)%w_.length,a=t.at(-1)??this,o=0,s=[...t];for(let t=0;t<w_.length;t++){let t=w_[i];if(o+=Math.hypot(t.x-a.x,t.z-a.z),s.push({x:t.x,z:t.z,drink:!1,place:!1}),a=t,t.x===e.x&&t.z===e.z)break;i=(i+r+w_.length)%w_.length}return{points:s,distance:o,resume:(i+1)%w_.length}});return r[0].distance<=r[1].distance?r[0]:r[1]}orderCoffee(){return this.coffeePresses===3?this.coffeePresses:(this.coffeePresses++,this.coffeePresses===3&&this.coffeeState===`idle`&&this.fetchCoffee(),this.coffeePresses)}fetchCoffee(){let e=this.routeTo(E_);this.coffeeTrip=[...e.points,{x:E_.x,z:T_.z,drink:!1},{...T_,drink:!0},{x:E_.x,z:T_.z,drink:!1},{x:E_.x,z:E_.z,drink:!1}],this.coffeeResume=5,this.coffeeState=`fetching`,this.waiting=0}deliverCoffee(){let e=this.routeTo(D_);this.coffeeTrip=[...e.points,{...x_,place:!0},{x:D_.x,z:D_.z}],this.coffeeResume=e.resume,this.coffeeState=`returning`,this.boostRemaining=0,this.waiting=0}visitRestroom(){this.coffeeTrip=[...C_.slice(3,11).reverse(),...j_,...j_.slice(0,-1).reverse(),{...C_[3],finishRestroom:!0}],this.coffeeResume=4,this.coffeeState=`toilet-running`,this.waiting=0}update(e,t=!1){if(this.moving=!1,this.paused||!Number.isFinite(e)||e<=0)return;let n=Math.min(e,.1);for(;n>1e-8;){let e=Math.min(n,1/120);if(n-=e,this.waiting>0){if(this.coffeeState===`drinking`||this.coffeeState===`placing`){let t=Math.atan2(Math.sin(Math.PI-this.heading),Math.cos(Math.PI-this.heading));this.heading+=Math.max(-e*2.8,Math.min(e*2.8,t))}this.waiting=Math.max(0,this.waiting-e),this.coffeeState===`placing`?(this.placingProgress=1-this.waiting/O_,this.waiting===0&&(this.cupsDelivered++,this.coffeePresses=0,this.visitRestroom())):this.coffeeState===`drinking`&&this.waiting===0?(this.coffeeState=`boosted`,this.boostRemaining=k_):this.coffeeState===`toilet-closing`?(this.restroomDoorClosure=t?1:1-this.waiting/A_,(this.waiting===0||t)&&(this.coffeeState=`toilet-waiting`,this.waiting=30)):this.coffeeState===`toilet-waiting`&&this.waiting===0?(this.coffeeState=`toilet-opening`,this.waiting=A_):this.coffeeState===`toilet-opening`&&(this.restroomDoorClosure=t?0:this.waiting/A_,(this.waiting===0||t)&&(this.coffeeState=`toilet-leaving`,this.waiting=0));continue}let r=this.coffeeTrip.length>0,i=r?this.coffeeTrip[0]:w_[this.target],a=i.x-this.x,o=i.z-this.z,s=Math.hypot(a,o);if(s<1e-7){r?(this.coffeeTrip[0].drink&&(this.coffeeState=`drinking`,this.waiting=1.8),this.coffeeTrip[0].place&&(this.coffeeState=`placing`,this.waiting=O_,this.placingProgress=0),this.coffeeTrip[0].restroom&&(this.coffeeState=`toilet-closing`,this.waiting=A_),this.coffeeTrip.shift(),this.coffeeTrip.length||(this.target=this.coffeeResume),i.finishRestroom&&(this.coffeeState=`idle`,this.coffeePresses===3&&this.fetchCoffee())):(this.waiting=w_[this.target].pause,this.target=(this.target+1)%w_.length);continue}let c=Math.atan2(a,o),l=Math.atan2(Math.sin(c-this.heading),Math.cos(c-this.heading)),u=(this.coffeeState===`boosted`||this.coffeeState===`toilet-running`)&&!t,d=u?7:2.8;if(this.heading+=Math.max(-e*d,Math.min(e*d,l)),Math.abs(l)>.04)continue;let f=Math.min(s,e*(u?3.2:.82)),p=this.x+a/s*f,m=this.z+o/s*f;if(!cf(p,m,.3))return;this.x=p,this.z=m,this.distance+=f,this.moving=!0,this.coffeeState===`boosted`&&(this.boostRemaining-=f,this.boostRemaining<=0&&this.deliverCoffee())}}},N_=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='252'%20height='190'%20viewBox='0%200%20252%20190'%3e%3cg%20transform='translate(-18%20244)%20scale(0.1%20-0.1)'%20fill='%231d1d1b'%3e%3cpath%20d='M730%202426%20c-154%20-24%20-356%20-87%20-414%20-129%20l-16%20-12%2048%20-165%20c27%20-91%2053%20-164%2058%20-163%205%201%2045%2018%2089%2037%20335%20147%20712%2097%20727%20-95%20l3%20-34%20-120%20-8%20c-621%20-38%20-925%20-247%20-925%20-632%200%20-145%2053%20-268%20156%20-364%20118%20-111%20257%20-157%20445%20-148%20113%206%20226%2036%20305%2082%2055%2032%20129%2095%20158%20133%20l24%2033%20-5%20-43%20c-3%20-26%203%20-67%2014%20-103%20l19%20-60%20243%20-3%20243%20-2%20-6%2047%20c-4%2027%20-10%20275%20-14%20553%20l-8%20505%20-18%2075%20c-10%2041%20-38%20116%20-62%20167%20l-45%2092%20-70%2065%20c-79%2075%20-170%20125%20-285%20157%20l-79%2021%20-190%204%20c-122%202%20-220%20-2%20-275%20-10z%20m500%20-1014%20l0%20-108%20-26%20-51%20c-53%20-107%20-152%20-167%20-274%20-167%20-101%201%20-163%2032%20-198%2099%20-20%2039%20-20%20131%201%20171%2052%20100%20204%20160%20415%20163%20l82%201%200%20-108z'/%3e%3cg%20transform='translate(-6760%200)'%3e%3cpath%20d='M9039%202016%20c-90%20-19%20-159%20-84%20-189%20-180%20-16%20-51%20-8%20-181%2013%20-223%2081%20-154%20308%20-190%20430%20-69%2053%2054%2077%20119%2077%20211%200%20183%20-147%20299%20-331%20261z'/%3e%3cpath%20d='M9007%201256%20c-61%20-23%20-103%20-62%20-136%20-127%20l-31%20-62%200%20-77%200%20-76%2026%20-52%20c46%20-93%20132%20-142%20249%20-142%20150%200%20256%20114%20256%20275%200%20162%20-98%20267%20-256%20272%20-42%202%20-85%20-2%20-108%20-11z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,P_=`#287248`;function F_(e){let t=document.createElement(`canvas`);t.width=512,t.height=1024;let n=t.getContext(`2d`);n.fillStyle=P_,n.fillRect(0,0,512,1024);let r=new yi(t);r.colorSpace=Re,r.anisotropy=4;let i=new Image;return i.onload=()=>{let t=document.createElement(`canvas`);t.width=320,t.height=181;let a=t.getContext(`2d`);a.drawImage(i,0,0,t.width,t.height),a.globalCompositeOperation=`source-in`,a.fillStyle=`#f5f4e9`,a.fillRect(0,0,t.width,t.height),n.drawImage(t,96,260),r.needsUpdate=!0,e()},i.src=N_,r}function I_(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#f0efdf`,t.fillRect(0,0,512,512);let n=73,r=()=>(n=n*16807%2147483647,n/2147483647);for(let e=0;e<115;e++){let n=r()*512,i=r()*512,a=r()*Math.PI*2;t.save(),t.translate(n,i),t.rotate(a);let o=18+r()*29;t.strokeStyle=`#54726a`,t.lineWidth=1.2,t.beginPath(),t.moveTo(0,12),t.quadraticCurveTo(-4,-8,3,-o),t.stroke();for(let e=0;e<5;e++)for(let n of[-1,1]){let i=3-e*o/6;t.fillStyle=[`#315b6b`,`#608b94`,`#8eaaa3`,`#afab80`][Math.floor(r()*4)],t.beginPath(),t.moveTo(0,i),t.quadraticCurveTo(n*15,i-2,n*(8+r()*9),i-14),t.quadraticCurveTo(n*2,i-11,0,i),t.fill()}if(e%3==0){t.translate(9,-12),t.fillStyle=`#ccab72`;for(let e=0;e<5;e++)t.rotate(Math.PI*2/5),t.beginPath(),t.ellipse(0,5,3,6,0,0,Math.PI*2),t.fill();t.fillStyle=`#61706b`,t.beginPath(),t.arc(0,0,2,0,Math.PI*2),t.fill()}t.restore()}let i=new yi(e);return i.colorSpace=Re,i.anisotropy=4,i}var L_=class{group=new W;viewCamera=new Xo(67,768/424,.05,200);walk=new M_;deskCups=new W;body=new W;legs=[];arms=[];stride=0;cape=new qa(.44,1.02,12,22);dirty=!1;cup=new W;capeLift=0;cupTarget=new U;constructor(){this.group.name=`David i blomsterskjorte`,this.deskCups.name=`Davids kaffekopper på Thranes bord`,this.deskCups.position.set(b_.x,0,b_.z),this.deskCups.rotation.y=b_.rotation,this.group.add(this.body),this.viewCamera.position.set(0,1.702,.13),this.viewCamera.rotation.y=Math.PI,this.body.add(this.viewCamera);let e=(e,t=.85)=>new G({color:e,roughness:t}),t=e(`#c78f74`),n=e(`#51483c`),r=e(`#63594a`),i=e(`#655044`),a=e(`#c6b083`),o=e(`#ab956f`),s=e(`#25292a`),c=e(`#d6d8cc`),l=e(`#ede6d9`),u=new G({map:I_(),roughness:.95}),d=new Ja(1,20,14),f=(e,t,n,r,i,a,o,s)=>{let c=X(e,d,t,n,r,i);return c.scale.set(a,o,s),c},p=(e,t,n,r)=>{let i=new W;return i.position.set(t,n,r),e.add(i),i};Z(this.body,.43,.52,.29,0,1.22,0,u,.075),Z(this.body,.42,.1,.285,0,.975,0,u,.035),Q(this.body,.065,.075,.12,0,1.51,0,t),f(this.body,t,0,1.665,.005,.135,.175,.123),f(this.body,i,0,1.57,.036,.122,.083,.105),f(this.body,t,0,1.624,.108,.064,.052,.033),f(this.body,t,0,1.66,.13,.026,.044,.035),f(this.body,i,-.024,1.61,.135,.03,.013,.012),f(this.body,i,.024,1.61,.135,.03,.013,.012),Z(this.body,.046,.006,.006,0,1.592,.14,n,.002);for(let e of[-1,1]){f(this.body,t,e*.132,1.66,-.003,.027,.042,.022),f(this.body,n,e*.119,1.705,-.012,.021,.065,.084),f(this.body,l,e*.052,1.702,.111,.026,.012,.009),f(this.body,n,e*.051,1.702,.12,.009,.01,.005);let r=Z(this.body,.052,.012,.016,e*.051,1.728,.112,n,.004);r.rotation.z=e*-.1}f(this.body,n,0,1.789,-.024,.138,.071,.117),f(this.body,n,0,1.723,-.077,.129,.102,.063);for(let e=0;e<5;e++){let t=f(this.body,e%2?n:r,-.085+e*.039,1.805+Math.sin(e*.65)*.014,.009,.043,.036,.105);t.rotation.z=-.24,t.rotation.x=-.18}for(let e of[-1,1]){let t=Z(this.body,.09,.115,.018,e*.054,1.445,.143,u,.008);t.rotation.z=e*-.38,t.rotation.x=-.12}let m=new G({color:P_,roughness:.82}),h=new G({map:F_(()=>{this.dirty=!0}),roughness:.82});X(this.body,this.cape,h,0,0,0);let g=m.clone();g.side=1,X(this.body,this.cape,g,0,0,0).castShadow=!1;for(let e of[-1,1]){let t=Z(this.body,.075,.028,.26,e*.16,1.46,-.015,m,.012);t.rotation.z=e*-.12,f(this.body,o,e*.16,1.444,.123,.018,.018,.009)}this.cape.getAttribute(`position`).setUsage(We),this.poseCape(0),Z(this.body,.012,.37,.009,0,1.19,.148,l,.003);for(let e=0;e<5;e++)f(this.body,o,0,1.35-e*.068,.155,.007,.007,.004);let _=p(this.body,.047,1.346,.17);_.rotation.z=-.13;for(let e of[-1,1])Z(_,.035,.062,.012,e*.021,0,0,s,.012);Z(_,.016,.008,.012,0,.013,0,s,.003),Z(_,.008,.067,.008,-.035,.044,0,s,.003);for(let e of[-1,1]){let n=p(this.body,e*.235,1.397,0);Q(n,.061,.065,.2,0,-.075,0,u),f(n,t,0,-.218,0,.057,.105,.058);let r=p(n,0,-.285,0);r.rotation.x=-.1,f(r,t,0,-.095,.008,.048,.126,.047),f(r,t,0,-.231,.019,.044,.069,.033),f(r,t,-e*.032,-.212,.034,.019,.038,.02),this.arms.push(n);let i=p(this.body,e*.112,.94,0);Z(i,.199,.37,.24,0,-.137,0,a,.035),Z(i,.18,.025,.228,0,-.308,0,o,.009),Z(i,.004,.24,.135,e*.1,-.118,.018,o,.001),f(i,t,0,-.35,0,.072,.11,.076);let l=p(i,0,-.43,0);f(l,t,0,-.185,-.006,.06,.2,.061),f(l,t,0,-.4,.009,.041,.075,.042),f(l,t,0,-.464,.06,.052,.036,.108),Z(l,.126,.035,.26,0,-.488,.052,s,.016),Z(l,.122,.048,.098,0,-.444,.068,s,.02);for(let e=0;e<3;e++)Z(l,.124,.008,.011,0,-.417,.035+e*.026,c,.003);this.legs.push({hip:i,knee:l})}this.cup.name=`Deploy dobbelt`,X(this.cup,new Ka([[0,-.0125],[.034,-.0125],[.046,.0825],[.039,.0825],[.028,-.0045],[0,-.0045]].map(([e,t])=>new H(e,t)),20),l,0,0,0),Q(this.cup,.038,.038,.004,0,.069,0,n);let v=X(this.cup,new Ya(.027,.007,8,16),l,.046,.04,0);v.rotation.y=Math.PI/2,this.cup.position.set(0,-.49,.045),this.cup.visible=!1,this.arms[1].add(this.cup);let y=document.createElement(`canvas`);y.width=y.height=64;let b=y.getContext(`2d`),x=b.createRadialGradient(32,32,3,32,32,30);x.addColorStop(0,`#00000038`),x.addColorStop(1,`#00000000`),b.fillStyle=x,b.fillRect(0,0,64,64);let S=X(this.group,new qa(.8,.65),new Ur({map:new yi(y),transparent:!0,depthWrite:!1}),0,.012,0);S.rotation.x=-Math.PI/2,S.castShadow=S.receiveShadow=!1,this.group.position.set(this.walk.x,0,this.walk.z)}poseCape(e){let t=this.cape.getAttribute(`position`),n=this.cape.getAttribute(`uv`);for(let r=0;r<t.count;r++){let i=n.getX(r),a=1-n.getY(r),o=Math.cos(i*Math.PI*8)*(.006+a*.009),s=Math.sin(a*9-e*1.7+i*3)*a*a*.018*this.stride;t.setXYZ(r,(.5-i)*(.36+a*.07),1.45-a*(1.02-this.capeLift*.92)+Math.cos(i*Math.PI*6)*.012*a,-.157-a*(.025+this.capeLift*.94)-a*a*.14*this.stride+o+s)}t.needsUpdate=!0,this.cape.computeVertexNormals(),this.cape.computeBoundingSphere()}update(e,t=!1){let n=this.dirty;if(this.dirty=!1,this.walk.paused)return n;for(this.walk.update(e,t);this.deskCups.children.length<this.walk.cupsDelivered;){let e=S_(this.deskCups.children.length),t=this.cup.clone();t.name=`Efterladt kaffekop ${this.deskCups.children.length+1}`,t.visible=!0,t.children[1].visible=!1,t.position.set(e.x,e.y+.0125,e.z),t.rotation.set(0,e.rotation,0),this.deskCups.add(t)}let r=this.walk.distance*Math.PI*2/1.15;this.stride=kt.damp(this.stride,+!!this.walk.moving,12,e);let i=this.walk.coffeeState===`boosted`||this.walk.coffeeState===`toilet-running`;this.capeLift=kt.damp(this.capeLift,i&&this.walk.moving&&!t?1:0,5,e),this.poseCape(r),this.group.position.set(this.walk.x,0,this.walk.z),this.group.rotation.y=this.walk.heading,this.body.rotation.z=Math.cos(r)*.014*this.stride;let a=this.walk.coffeeState===`placing`,o=a?kt.smoothstep(this.walk.placingProgress,0,1):0;this.body.rotation.x=kt.damp(this.body.rotation.x,o*.45,8,e);let s=1/0;for(let e=0;e<2;e++){let t=Math.sin(r+e*Math.PI)*this.stride,n=-t*.36,i=Math.max(0,t)*.6;this.legs[e].hip.rotation.x=n,this.legs[e].knee.rotation.x=i,this.arms[e].rotation.x=t*.27;let a=n+i;s=Math.min(s,.94-.43*Math.cos(n)-.488*Math.cos(a)-.052*Math.sin(a)-.0175*Math.abs(Math.cos(a))-.13*Math.abs(Math.sin(a)))}if(this.cup.visible=[`drinking`,`boosted`,`returning`,`placing`].includes(this.walk.coffeeState),this.cup.position.set(0,-.49,.045),this.cup.visible&&(this.arms[1].rotation.x=this.walk.coffeeState===`drinking`?-1.9:kt.lerp(-.7,-.25,o),this.cup.rotation.x=-this.arms[1].rotation.x-this.body.rotation.x),this.body.position.y=.006-s,a){let e=S_(this.walk.cupsDelivered);this.deskCups.localToWorld(this.cupTarget.set(e.x,e.y+.0125,e.z)),this.arms[1].worldToLocal(this.cupTarget),this.cup.position.lerp(this.cupTarget,kt.smoothstep(this.walk.placingProgress,.2,.95))}return!0}},R_=1.4;function z_(e){let t=new W;t.name=`Den diskrete creeper`,e.add(t);let n=new G({color:`#598d39`,roughness:1}),r=new G({color:`#85ad50`,roughness:1}),i=new G({color:`#1b2919`,roughness:1});Z(t,.22,.32,.2,0,.36,0,n),Z(t,.34,.34,.34,0,.67,0,n);for(let e of[-.095,.095])for(let n of[-.09,.09])Z(t,.14,.19,.16,e,.115,n,r).name=`Creeperfod`;[`00000000`,`00000000`,`01100110`,`01100110`,`00011000`,`00111100`,`00100100`,`00000000`].forEach((e,n)=>[...e].forEach((e,r)=>{e===`1`&&Z(t,.043,.043,.006,(r-3.5)*.042,.67+(3.5-n)*.042,.172,i)}));for(let e=0;e<18;e++)Z(t,.041,.041,.006,(e*3%8-3.5)*.042,.67+(e*5%8-3.5)*.042,-.172,e%3?r:i);return t.position.set(Jp.x,0,Jp.z),t.scale.y=R_,t.rotation.y=-Math.PI/2,t}var B_=class{office;coffee;jesper;visitor;navigation;reducedMotion;blocked;creeper;follower=new cm;creeperFeet;ray=new ys;surfaces=[];projection=new U;point=new U;direction=new U;frustum=new _i;matrix=new en;sphere=new Cr(new U,.5*R_);gesture=null;cup=new W;label=document.createElement(`canvas`);labelTexture;coffeeState=`idle`;dirty=!0;constructor(e,t,n,r,i,a,o){this.office=e,this.coffee=t,this.jesper=n,this.visitor=r,this.navigation=i,this.reducedMotion=a,this.blocked=o,this.creeper=z_(e),this.creeperFeet=this.creeper.children.filter(e=>e.name===`Creeperfod`),this.label.width=512,this.label.height=128,this.labelTexture=new yi(this.label),this.labelTexture.colorSpace=Re;let s=X(t,new qa(.35,.088),new Ur({map:this.labelTexture,toneMapped:!1,side:2}),0,.43,.18);s.scale.x=-1,s.castShadow=s.receiveShadow=!1;let c=new G({color:`#eee8d6`});Q(this.cup,.045,.034,.09,0,.045,0,c),Q(this.cup,.039,.039,.004,0,.09,0,new G({color:`#4c2f20`})),this.cup.position.set(0,.065,.12),this.cup.visible=!1,t.add(this.cup),this.paintCoffee(),e.updateMatrixWorld(!0),e.traverse(e=>{e instanceof ti&&this.surfaces.push(e)});let l=i.canvas;l.addEventListener(`pointerdown`,e=>{if(!e.isPrimary||e.button!==0||this.gesture){this.gesture=null;return}this.gesture={id:e.pointerId,x:e.clientX,y:e.clientY,moved:!1}}),l.addEventListener(`pointermove`,e=>{this.gesture&&Math.hypot(e.clientX-this.gesture.x,e.clientY-this.gesture.y)>6&&(this.gesture.moved=!0)}),l.addEventListener(`pointerup`,e=>{let r=this.gesture;if(this.gesture=null,!r||r.id!==e.pointerId||r.moved||this.blocked()||!i.isWalking)return;let a=l.getBoundingClientRect();this.ray.setFromCamera(new H((e.clientX-a.left)/a.width*2-1,1-(e.clientY-a.top)/a.height*2),i.camera),this.ray.far=3.5;let o=this.firstHit();o&&(o.object.userData.coffeeButton&&this.belongsTo(o.object,t)?this.activate(`coffee`):o.object===n.screen&&o.uv&&n.hitFish(o.uv)&&this.activate(`salmon`))});let u=()=>{this.gesture=null};l.addEventListener(`pointercancel`,u),l.addEventListener(`lostpointercapture`,u),addEventListener(`blur`,u)}belongsTo(e,t){for(let n=e;n;n=n.parent)if(n===t)return!0;return!1}firstHit(){return this.ray.intersectObjects(this.surfaces,!1).find(e=>{for(let t=e.object;t;t=t.parent)if(!t.visible)return!1;let t=e.object.material;return(Array.isArray(t)?t:[t]).some(e=>e.visible&&(!e.transparent||e.opacity>=.5))})}clearSight(e,t){let n=this.navigation.camera.position;this.direction.copy(e).sub(n),this.ray.far=this.direction.length()+.01,this.ray.set(n,this.direction.normalize());let r=this.firstHit();return!r||this.belongsTo(r.object,t)}targetPoint(e){return e===`coffee`?this.coffee.localToWorld(this.point.set(0,.43,.18)):this.jesper.screen.getWorldPosition(this.point)}available(e){if(this.blocked()||!this.navigation.isWalking||e===`salmon`&&(!this.jesper.screen||this.jesper.catchState.phase!==`idle`))return!1;let t=this.targetPoint(e),n=this.navigation.camera;return n.position.distanceToSquared(t)>3.5**2||(this.projection.copy(t).project(n),this.projection.z<-1||this.projection.z>1||Math.abs(this.projection.x)>.85||Math.abs(this.projection.y)>.75)?!1:this.clearSight(t,e===`coffee`?this.coffee:this.jesper.screen)}paintCoffee(){let e=this.label.getContext(`2d`);e.fillStyle=`#142d26`,e.fillRect(0,0,512,128),e.fillStyle=`#c7e8ac`,e.font=`bold 45px monospace`,e.textAlign=`center`;let t=this.visitor.walk;e.fillText(t.coffeePresses<3?t.coffeePresses?`${t.coffeePresses} / 3 SHOTS`:`KAFFE?`:`DEPLOY DOBBELT`,256,79),this.labelTexture.needsUpdate=!0,this.dirty=!0}activate(e){if(this.available(e)){if(e===`salmon`)this.jesper.catchFish(this.reducedMotion.matches)&&(this.dirty=!0);else{let e=this.visitor.walk;e.orderCoffee(),this.cup.visible=e.coffeeCupWaiting,this.paintCoffee()}}}update(e){let t=this.dirty;if(this.dirty=!1,this.blocked())return t;let n=this.visitor.walk.coffeeState;if(n!==this.coffeeState&&(this.coffeeState=n,this.cup.visible=this.visitor.walk.coffeeCupWaiting,this.paintCoffee(),t=!0),!this.navigation.isWalking||this.reducedMotion.matches)return t;let r=this.navigation.camera;r.updateMatrixWorld(),this.matrix.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.matrix);let i=this.follower;this.sphere.center.set(i.x,.43*R_,i.z);let a=this.frustum.intersectsSphere(this.sphere)&&[.74,.4,.13].some(e=>(this.point.set(i.x,e*R_,i.z),this.frustum.containsPoint(this.point)&&this.clearSight(this.point,this.creeper)));return i.update(e,a,r.position,!0)&&(this.creeper.position.set(i.x,0,i.z),this.creeper.rotation.y=i.heading,this.creeperFeet.forEach((e,t)=>{e.rotation.x=Math.sin(i.distance*18)*.35*(t===0||t===3?1:-1)}),this.creeper.updateMatrixWorld(!0),t=!0),t}},V_={I:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],O:[[1,1],[1,1]],T:[[0,1,0],[1,1,1],[0,0,0]],S:[[0,1,1],[1,1,0],[0,0,0]],Z:[[1,1,0],[0,1,1],[0,0,0]],J:[[1,0,0],[1,1,1],[0,0,0]],L:[[0,0,1],[1,1,1],[0,0,0]]},H_=class{status=`ready`;board=Array.from({length:20},()=>Array(10).fill(``));piece=null;queue=[];score=0;lines=0;revision=0;fall=0;lockTime=0;remainder=0;constructor(e=Math.random){this.random=e}get level(){return 1+Math.floor(this.lines/10)}get interval(){return Math.max(.09,.8*.8**(this.level-1))}start(){this.status!==`running`&&(this.status!==`paused`&&(this.board=Array.from({length:20},()=>Array(10).fill(``)),this.score=0,this.lines=0,this.queue=[],this.fall=0,this.lockTime=0,this.remainder=0,this.spawn()),this.status=`running`,this.revision++)}pause(){this.status===`running`&&(this.status=`paused`,this.revision++)}spawn(){if(this.queue.length<2){let e=Object.keys(V_);for(let t=e.length-1;t>0;t--){let n=Math.floor(this.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}this.queue.push(...e)}let e=this.queue.shift(),t=V_[e].map(e=>[...e]);this.piece={kind:e,matrix:t,x:Math.floor((10-t[0].length)/2),y:0},this.fall=0,this.lockTime=0,this.fits(this.piece)||(this.status=`over`),this.revision++}fits(e){return e.matrix.every((t,n)=>t.every((t,r)=>!t||e.x+r>=0&&e.x+r<10&&e.y+n<20&&(e.y+n<0||!this.board[e.y+n][e.x+r])))}move(e,t=0){if(this.status!==`running`||!this.piece)return!1;let n={...this.piece,x:this.piece.x+e,y:this.piece.y+t};return this.fits(n)?(this.piece=n,this.revision++,!0):!1}rotate(){if(this.status!==`running`||!this.piece||this.piece.kind===`O`)return!1;let e=this.piece.matrix[0].map((e,t)=>this.piece.matrix.map(e=>e[t]).reverse());for(let t of[0,-1,-2])for(let n of[0,-1,1,-2,2]){let r={...this.piece,matrix:e,x:this.piece.x+n,y:this.piece.y+t};if(this.fits(r))return this.piece=r,this.revision++,!0}return!1}softDrop(){this.move(0,1)&&(this.score++,this.fall=0)}get ghostY(){if(!this.piece)return 0;let e=this.piece.y;for(;this.fits({...this.piece,y:e+1});)e++;return e}drop(){if(this.status!==`running`||!this.piece)return;let e=this.ghostY;this.score+=(e-this.piece.y)*2,this.piece.y=e,this.lock()}lock(){if(!this.piece)return;let e=this.piece;if(e.matrix.some((t,n)=>t.some(t=>t&&e.y+n<0))){this.status=`over`,this.revision++;return}e.matrix.forEach((t,n)=>t.forEach((t,r)=>{t&&(this.board[e.y+n][e.x+r]=e.kind)}));let t=this.board.filter(e=>e.some(e=>!e)),n=20-t.length;this.score+=[0,100,300,500,800][n]*this.level,this.lines+=n,this.board=[...Array.from({length:n},()=>Array(10).fill(``)),...t],this.spawn()}update(e){if(!(this.status!==`running`||!Number.isFinite(e)||e<=0))for(this.remainder+=Math.min(e,.25);this.remainder>=1/120&&this.status===`running`&&this.piece;)this.remainder-=1/120,this.fall+=1/120,this.fall>=this.interval&&(this.fall-=this.interval,this.move(0,1)),this.fits({...this.piece,y:this.piece.y+1})?this.lockTime=0:(this.lockTime+=1/120,this.lockTime>=.45&&this.lock())}},U_={I:`#16bedb`,O:`#eebd27`,T:`#aa60e8`,S:`#54c96c`,Z:`#f05f78`,J:`#5484ed`,L:`#ef953d`},W_=46,G_=20,K_=220,q_=class{canvas=document.createElement(`canvas`);context;texture;constructor(){this.canvas.width=500,this.canvas.height=1400,this.context=this.canvas.getContext(`2d`),this.texture=new yi(this.canvas),this.texture.colorSpace=Re}text(e,t,n,r){let i=this.context;i.font=`600 ${r}px monospace`,i.textAlign=`center`,i.lineWidth=4,i.strokeStyle=`rgba(15, 31, 35, .65)`,i.strokeText(e,t,n),i.fillStyle=`#f7fffc`,i.fillText(e,t,n)}block(e,t,n,r=!1,i=W_){let a=this.context;a.save(),a.fillStyle=U_[n],a.strokeStyle=U_[n],a.globalAlpha=r?.09:.52,a.fillRect(e+2,t+2,i-4,i-4),a.globalAlpha=r?.55:.95,a.lineWidth=r?2:3,a.strokeRect(e+2,t+2,i-4,i-4),r||(a.globalAlpha=.55,a.strokeStyle=`#ffffff`,a.lineWidth=2,a.beginPath(),a.moveTo(e+6,t+i-7),a.lineTo(e+6,t+6),a.lineTo(e+i-7,t+6),a.stroke()),a.restore()}draw(e,t,n=!1){let r=this.context;if(r.clearRect(0,0,500,1400),e.status===`ready`)this.text(`TETRIS`,250,570,58),this.text(`Tryk på ruden`,250,625,25),this.text(`eller Enter`,250,664,21),V_.T.forEach((e,t)=>e.forEach((e,n)=>{e&&this.block(181+n*W_,730+t*W_,`T`)}));else{this.text(`TETRIS`,250,92,52),this.text(`${e.score} POINT`,250,147,29),this.text(`${e.lines} RÆKKER · NIV. ${e.level}`,250,187,22),r.lineWidth=1,r.strokeStyle=`rgba(235, 255, 250, .2)`,r.beginPath();for(let e=0;e<=10;e++)r.moveTo(G_+e*W_,K_),r.lineTo(G_+e*W_,1140);for(let e=0;e<=20;e++)r.moveTo(G_,K_+e*W_),r.lineTo(480,K_+e*W_);r.stroke(),r.strokeStyle=`rgba(235, 255, 250, .65)`,r.lineWidth=3,r.strokeRect(G_,K_,460,920),e.board.forEach((e,t)=>e.forEach((e,n)=>{e&&this.block(G_+n*W_,K_+t*W_,e)}));let i=e.piece;if(i&&e.status!==`over`)for(let t of[!0,!1]){let n=t?e.ghostY:i.y;i.matrix.forEach((e,r)=>e.forEach((e,a)=>{e&&r+n>=0&&this.block(G_+(a+i.x)*W_,K_+(r+n)*W_,i.kind,t)}))}(e.status===`paused`||e.status===`over`)&&(r.fillStyle=`rgba(15, 31, 35, .48)`,r.fillRect(28,596,444,134),this.text(e.status===`paused`?`PAUSE`:`GAME OVER`,250,650,43),this.text(n?e.status===`paused`?`Fortsæt med P`:`Enter: spil igen`:`Tryk på ruden`,250,701,24));let a=e.queue[0];this.text(`NÆSTE`,130,1210,23),a&&V_[a].forEach((e,t)=>e.forEach((e,n)=>{e&&this.block(260+n*30,1170+t*30,a,!1,30)})),this.text(`REKORD ${t}`,250,1310,22)}this.texture.needsUpdate=!0}},J_=class{glass;navigation;blocked;game=new H_;screen=new q_;panel=document.querySelector(`#tetris-controls`);pauseButton=document.querySelector(`#tetris-pause`);restart=document.querySelector(`#tetris-restart`);status=document.querySelector(`#tetris-status`);ray=new ys;surfaces=[];center=new U;normal=new U;saved=null;gesture=null;best=0;drawn=-1;dirty=!0;constructor(e,t,n,r){this.glass=e,this.navigation=n,this.blocked=r,e.material.map=this.screen.texture,e.material.needsUpdate=!0,t.updateMatrixWorld(!0),e.getWorldPosition(this.center),this.normal.set(0,0,1).transformDirection(e.matrixWorld),t.traverse(e=>{e instanceof ti&&this.surfaces.push(e)});try{let e=Number(localStorage.getItem(`office-tetris-best`));Number.isFinite(e)&&e>0&&(this.best=Math.floor(e))}catch{}let i=n.canvas;i.addEventListener(`pointerdown`,e=>{if(!e.isPrimary){this.gesture=null;return}e.button===0&&!this.active&&this.canPlay()&&this.hitsGlass(e)&&(this.gesture={id:e.pointerId,x:e.clientX,y:e.clientY,position:n.camera.position.clone(),rotation:n.camera.quaternion.clone()})},{capture:!0}),i.addEventListener(`pointermove`,e=>{this.gesture&&Math.hypot(e.clientX-this.gesture.x,e.clientY-this.gesture.y)>7&&(this.gesture=null),!this.active&&this.canPlay()&&this.hitsGlass(e)?i.dataset.tetrisHover=`true`:delete i.dataset.tetrisHover}),i.addEventListener(`pointerup`,e=>{let t=this.gesture;this.gesture=null,!(!t||t.id!==e.pointerId||Math.hypot(e.clientX-t.x,e.clientY-t.y)>7)&&(t.position.distanceToSquared(n.camera.position)>1e-4||t.rotation.angleTo(n.camera.quaternion)>.025||this.canPlay()&&this.hitsGlass(e)&&this.open())});let a=()=>{this.gesture=null,delete i.dataset.tetrisHover};i.addEventListener(`pointercancel`,a),i.addEventListener(`lostpointercapture`,a),i.addEventListener(`pointerleave`,a),i.addEventListener(`keydown`,e=>this.key(e),{capture:!0}),this.panel.addEventListener(`keydown`,e=>this.key(e)),this.panel.querySelectorAll(`[data-tetris]`).forEach(e=>{e.addEventListener(`click`,()=>{if(!this.active||this.blocked())return;let t=e.dataset.tetris;t===`left`&&this.game.move(-1),t===`right`&&this.game.move(1),t===`rotate`&&this.game.rotate(),t===`down`&&this.game.softDrop(),t===`drop`&&this.game.drop(),i.focus({preventScroll:!0})})}),this.pauseButton.addEventListener(`click`,()=>this.togglePause()),this.restart.addEventListener(`click`,()=>{this.blocked()||this.game.start(),i.focus({preventScroll:!0})}),document.querySelector(`#tetris-close`).addEventListener(`click`,()=>this.close());let o=()=>{a(),this.game.pause()};addEventListener(`blur`,o),document.addEventListener(`visibilitychange`,()=>{document.hidden&&o()}),i.addEventListener(`webglcontextlost`,o),document.addEventListener(`focusin`,e=>{this.active&&e.target!==i&&!this.panel.contains(e.target)&&this.game.pause()}),new ResizeObserver(()=>this.resize()).observe(this.panel),this.screen.draw(this.game,this.best)}get active(){return this.saved!==null}canPlay(){let e=this.navigation.camera.position;return this.navigation.isWalking&&!this.blocked()&&md(ud,e.x,e.z)&&e.distanceTo(this.center)<3.2&&e.clone().sub(this.center).dot(this.normal)>.2}hitsGlass(e){let t=this.navigation.camera,n=this.navigation.canvas.getBoundingClientRect();t.updateMatrixWorld();let r=e?new H((e.clientX-n.left)/n.width*2-1,1-(e.clientY-n.top)/n.height*2):new H;return this.ray.setFromCamera(r,t),this.ray.far=3.2,this.ray.intersectObjects(this.surfaces,!1).find(e=>{for(let t=e.object;t;t=t.parent)if(!t.visible)return!1;if(e.object===this.glass)return!0;let t=e.object.material;return(Array.isArray(t)?t:[t]).some(e=>e.visible&&(!e.transparent||e.opacity>=.5))})?.object===this.glass}key(e){if(!(e.altKey||e.ctrlKey||e.metaKey||this.blocked())){if(!this.active){if(e.code!==`Enter`||e.repeat||!this.canPlay()||!this.hitsGlass())return;e.preventDefault(),e.stopImmediatePropagation(),this.open();return}if(!(e.target!==this.navigation.canvas&&[`Enter`,`Space`].includes(e.code))&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Space`,`KeyP`,`Escape`,`Enter`].includes(e.code)){if(e.preventDefault(),e.stopImmediatePropagation(),e.code===`Escape`){this.close();return}if(e.code===`KeyP`&&!e.repeat){this.togglePause();return}e.code===`Enter`&&!e.repeat&&this.game.start(),e.code===`ArrowLeft`&&this.game.move(-1),e.code===`ArrowRight`&&this.game.move(1),e.code===`ArrowDown`&&this.game.softDrop(),e.code===`ArrowUp`&&!e.repeat&&this.game.rotate(),e.code===`Space`&&!e.repeat&&this.game.drop()}}}open(){if(this.active||!this.canPlay())return;let e=this.navigation.camera;this.saved={position:e.position.clone(),rotation:e.quaternion.clone(),fov:e.fov},this.navigation.suspend(!0),this.panel.hidden=!1,document.body.dataset.tetrisPlaying=`true`,delete this.navigation.canvas.dataset.tetrisHover,this.navigation.canvas.setAttribute(`aria-describedby`,`tetris-instructions tetris-status`),this.game.start(),this.resize(),this.navigation.canvas.focus({preventScroll:!0}),this.dirty=!0}resize(){if(!this.active)return;let e=this.navigation.camera,t=1.6,n=document.querySelector(`.header`).getBoundingClientRect().bottom+12,r=this.panel.getBoundingClientRect().top-12,i=Math.max(60,r-n)/innerHeight,a=Math.max(2.3/(2*t*i),.83/(2*t*e.aspect*.85));e.fov=kt.radToDeg(2*Math.atan(a)),e.setViewOffset(innerWidth,innerHeight,0,(innerHeight-n-r)/2,innerWidth,innerHeight),e.position.copy(this.center).addScaledVector(this.normal,t),e.lookAt(this.center),e.updateProjectionMatrix(),e.updateMatrixWorld(),this.dirty=!0}togglePause(){this.active&&!this.blocked()&&this.game.status!==`over`&&(this.game.status===`running`?this.game.pause():this.game.start(),this.navigation.canvas.focus({preventScroll:!0}))}close(){if(!this.saved)return;this.game.pause(),this.saveBest();let e=this.navigation.camera;e.position.copy(this.saved.position),e.quaternion.copy(this.saved.rotation),e.fov=this.saved.fov,e.clearViewOffset(),e.updateProjectionMatrix(),e.updateMatrixWorld(),this.saved=null,this.panel.hidden=!0,delete document.body.dataset.tetrisPlaying,this.navigation.suspend(!1),this.navigation.canvas.setAttribute(`aria-describedby`,`navigation-hint`),this.navigation.canvas.focus({preventScroll:!0}),this.dirty=!0}saveBest(){try{localStorage.setItem(`office-tetris-best`,String(this.best))}catch{}}update(e){if(this.active&&(this.blocked()?this.game.pause():this.game.update(e)),!this.dirty&&this.drawn===this.game.revision)return!1;this.drawn=this.game.revision,this.dirty=!1,this.best=Math.max(this.best,this.game.score);let t=this.game.status;this.pauseButton.textContent=t===`paused`?`Fortsæt · P`:`Pause · P`,this.pauseButton.disabled=t===`over`,this.restart.hidden=t!==`over`,this.panel.querySelectorAll(`[data-tetris]`).forEach(e=>{e.disabled=t!==`running`});let n=t===`over`?`Game over · ${this.game.score} point`:t===`paused`?`Pause · fortsæt med P eller knappen`:`${this.game.score} point · ${this.game.lines} rækker`;return n!==this.status.textContent&&(this.status.textContent=n),t===`over`&&this.saveBest(),this.screen.draw(this.game,this.best,this.active),!0}},Y_=.045,X_=.62,Z_=[.49,-.49],Q_=(e,t)=>.1+e*.32-(e%2?-1:1)*t*.045,$_=1/120,ev=(e,t,n)=>Math.max(t,Math.min(n,e)),tv=class{constructor(e=e=>{}){this.onEscape=e,this.status=`idle`,this.lives=3,this.score=0,this.barrels=[],this.nextId=0,this.spawnIn=.7,this.accumulator=0,this.player=this.newPlayer()}newPlayer(){return{x:-.49,y:Q_(0,-.49),level:0,vy:0,jumping:!1,climbing:!1,climbFrom:0,climbTo:0,invulnerable:1.5,facing:1}}start(){this.status!==`running`&&(this.status!==`paused`&&(this.lives=3,this.score=0,this.player=this.newPlayer(),this.spawnIn=.7),this.status=`running`,this.accumulator=0)}pause(){this.status===`running`&&(this.status=`paused`)}stop(){this.status=`idle`,this.accumulator=0}jump(){this.status!==`running`||this.player.jumping||this.player.climbing||(this.player.jumping=!0,this.player.vy=1.5)}update(e,t={}){if(!Number.isFinite(e)||e<=0||this.status===`paused`||this.status!==`running`&&!this.barrels.length)return!1;this.accumulator+=Math.min(e,.25);let n=!1;for(;this.accumulator+1e-10>=$_;)this.accumulator-=$_,this.step($_,t),n=!0;return n}step(e,t){let n=this.player;if(this.status===`running`){this.spawnIn-=e,this.spawnIn<=0&&(this.barrels.push({id:this.nextId++,x:-.5,y:Q_(2,-.5)+Y_,level:2,falling:!1,vy:0,angle:0,scored:!1}),this.spawnIn+=3.1),n.invulnerable=Math.max(0,n.invulnerable-e);let r=Number(!!t.right)-Number(!!t.left),i=Number(!!t.up)-Number(!!t.down);if(!n.climbing&&!n.jumping&&i){let e=i>0?n.level:n.level-1;e>=0&&e<2&&Math.abs(n.x-Z_[e])<.085&&(n.x=Z_[e],n.climbing=!0,n.climbFrom=e,n.climbTo=e+1)}if(n.climbing){n.y+=i*.34*e;let t=Q_(n.climbFrom,n.x),r=Q_(n.climbTo,n.x);n.y>=r&&(n.y=r,n.level=n.climbTo,n.climbing=!1),n.y<=t&&(n.y=t,n.level=n.climbFrom,n.climbing=!1)}else{n.x=ev(n.x+r*.42*e,-.54,.54),r&&(n.facing=r);let t=Q_(n.level,n.x);n.jumping?(n.vy-=5.1*e,n.y+=n.vy*e,n.y<=t&&(n.y=t,n.vy=0,n.jumping=!1)):n.y=t}n.level===2&&n.x>=.48&&!n.climbing&&!n.jumping&&(this.status=`won`,this.score+=1e3)}for(let t of this.barrels){let r=t.level%2?-1:1;if(t.falling){t.vy-=4*e,t.y+=t.vy*e;let n=Q_(t.level,t.x)+Y_;t.y<=n&&(t.y=n,t.falling=!1,t.vy=0)}else if(t.x+=r*.34*e,t.y=Q_(t.level,t.x)+Y_,t.angle-=r*.34*e/Y_,Math.abs(t.x)>.62){if(t.level>0)t.level--,t.falling=!0,t.scored=!1;else{this.onEscape(t),t.level=-1;continue}}if(this.status!==`running`)continue;let i=Math.abs(t.x-n.x),a=n.y;!n.invulnerable&&i<.071&&t.y+.045>a+.018&&t.y-.045<a+.14?(this.lives--,this.lives?this.player=this.newPlayer():this.status=`over`,n.invulnerable=1.5):!t.scored&&n.jumping&&i<.07&&a>t.y+.045&&n.level===t.level&&(this.score+=100,t.scored=!0)}this.barrels=this.barrels.filter(e=>e.level>=0)}},nv=class{constructor({table:e,room:t,obstacles:n=[]}){this.table=e,this.room=t,this.obstacles=n,this.barrels=[],this.accumulator=0}add(e,t,n){let r=this.barrels.length;this.barrels.push({x:e,y:t,z:n,vx:.34,vy:0,vz:.18+r*.61803398875%1*.4,angle:0,heading:0,sleeping:!1,onTable:t>=this.table.height,revision:0})}nudge(e,t,n,r){let i=Math.hypot(n,r);if(!(i<.001))for(let a of this.barrels)a.y>.15||Math.hypot(a.x-e,a.z-t)>.28||(a.vx=n/i*.8,a.vz=r/i*.8,a.sleeping=!1)}update(e){if(!Number.isFinite(e)||e<=0||this.barrels.every(e=>e.sleeping))return!1;for(this.accumulator+=Math.min(e,.25);this.accumulator+1e-10>=$_;){this.accumulator-=$_;for(let e of this.barrels)e.sleeping||this.step(e,$_)}return!0}step(e,t){e.revision++;let n=Y_,r=this.table,i=this.room;e.x+=e.vx*t,e.z+=e.vz*t,e.vy-=5.5*t,e.y+=e.vy*t,(e.x<r.minX||e.x>r.maxX||e.z<r.minZ||e.z>r.maxZ)&&(e.onTable=!1);let a=(e.onTable?r.height:.025)+n;if(e.y<=a){e.y=a,e.vy=Math.abs(e.vy)>.25?-e.vy*.3:0;let n=Math.exp(-(e.onTable?.06:1.5)*t);e.vx*=n,e.vz*=n}if((e.x<i.minX+n||e.x>i.maxX-n)&&(e.x=ev(e.x,i.minX+n,i.maxX-n),e.vx*=-.45),(e.z<i.minZ+n||e.z>i.maxZ-n)&&(e.z=ev(e.z,i.minZ+n,i.maxZ-n),e.vz*=-.45),!e.onTable&&e.y<.2){for(let[t,r,i,a]of this.obstacles){if(e.x<=t-n||e.x>=r+n||e.z<=i-n||e.z>=a+n)continue;let o=[e.x-t+n,r+n-e.x,e.z-i+n,a+n-e.z],s=o.indexOf(Math.min(...o));s<2?(e.x=s===0?t-n:r+n,e.vx*=-.45):(e.z=s===2?i-n:a+n,e.vz*=-.45)}for(let t of this.barrels){if(t===e||t.onTable||Math.abs(t.y-e.y)>n)continue;let r=e.x-t.x,a=e.z-t.z,o=Math.hypot(r,a);if(o>=n*2)continue;let s=o>1e-5?r/o:1,c=o>1e-5?a/o:0,l=(.091-o)/2;e.x+=s*l,e.z+=c*l,t.x-=s*l,t.z-=c*l,t.sleeping=!1,t.revision++;for(let r of[e,t])r.x=ev(r.x,i.minX+n,i.maxX-n),r.z=ev(r.z,i.minZ+n,i.maxZ-n);let u=(e.vx-t.vx)*s+(e.vz-t.vz)*c;u<0&&(e.vx-=u*.65*s,e.vz-=u*.65*c,t.vx+=u*.65*s,t.vz+=u*.65*c)}}let o=Math.hypot(e.vx,e.vz);e.angle+=o*t/n,e.heading=Math.atan2(e.vx,e.vz),!e.onTable&&e.y===a&&e.vy===0&&o<.025&&(e.vx=e.vz=0,e.sleeping=!0)}},rv=Xd[0],iv=new U(rv.x-.4,.77,rv.z),av={minX:rv.x-rv.width/2,maxX:rv.x+rv.width/2,minZ:rv.z-rv.depth/2,maxZ:rv.z+rv.depth/2,height:.77},ov=e=>new G({color:e,roughness:.72}),sv=ov(`#cd3e4f`),cv=ov(`#edb756`),lv=ov(`#4caeae`),uv=ov(`#25303b`),dv=ov(`#714124`),fv=ov(`#d6a46c`),pv=ov(`#2858ad`),mv=ov(`#a8622f`),hv=ov(`#37434a`),gv=new Ti(Y_,Y_,.065,12).rotateX(Math.PI/2),_v=new Ya(Y_+.001,.004,4,12),vv=new Ci(.065,.008,.002);function yv(){let e=new W,t=new ti(gv,mv);t.castShadow=!0,e.add(t);for(let t of[-.025,.025]){let n=new ti(_v,hv);n.position.z=t,e.add(n)}for(let t of[-.033,.033]){let n=new ti(vv,cv);n.position.z=t,e.add(n)}return e}function bv(e){let t=new W;t.name=`Donkey Kong · bordspil`,t.position.copy(iv),e.add(t),Z(t,1.36,.035,.34,0,.018,0,uv,.012);for(let e of[-.61,.61])Z(t,.035,.85,.035,e,.44,-.12,uv);for(let e=0;e<3;e++){let n=e%2?.045:-.045,r=Z(t,X_*2,.035,.23,0,Q_(e,0)-.0175,0,sv);r.rotation.z=Math.atan(n);for(let n=0;n<10;n++){let r=-.58+n*.12;$(t,[r,Q_(e,r)-.032,.119],[r+.06,Q_(e,r+.06)-.004,.119],.004,cv)}}Z_.forEach((e,n)=>{let r=Q_(n,e),i=Q_(n+1,e);for(let n of[-1,1])$(t,[e+n*.038,r,.13],[e+n*.038,i+.03,.13],.006,lv);for(let n=r+.03;n<i+.02;n+=.045)$(t,[e-.038,n,.13],[e+.038,n,.13],.005,lv)});let n=new W;t.add(n),n.position.set(-.49,Q_(2,-.49),-.045),Z(n,.16,.16,.11,0,.12,0,dv,.02),Z(n,.095,.08,.105,0,.235,.01,dv,.015),Z(n,.077,.045,.025,0,.225,.068,fv,.008);for(let e of[-1,1])Z(n,.065,.15,.08,e*.105,.11,0,dv,.014).rotation.z=e*.2,Z(n,.065,.04,.11,e*.055,.025,.025,dv,.008),Z(n,.012,.012,.008,e*.022,.247,.084,uv);Z(n,.06,.07,.015,0,.13,.063,fv,.012);let r=new W;t.add(r);for(let e of[-1,1])Z(r,.022,.042,.035,e*.017,.025,0,pv),Z(r,.029,.014,.046,e*.018,.008,.008,uv),Z(r,.017,.05,.026,e*.04,.078,0,sv);Z(r,.055,.052,.038,0,.072,0,pv),Z(r,.05,.04,.041,0,.118,0,fv),Z(r,.064,.018,.052,0,.145,.005,sv),Z(r,.022,.009,.005,.011,.117,.024,uv);let i=.51,a=Q_(2,i);$(t,[i,a,-.06],[i,a+.24,-.06],.006,cv),Z(t,.095,.065,.008,.462,a+.2,-.06,cv);let o=document.createElement(`canvas`);o.width=1024,o.height=128;let s=o.getContext(`2d`);s.fillStyle=`#25303b`,s.fillRect(0,0,1024,128),s.fillStyle=`#edb756`,s.font=`bold 68px monospace`,s.textAlign=`center`,s.fillText(`DONKEY KONG`,512,78),s.font=`20px monospace`,s.fillStyle=`#fff1ca`,s.fillText(`KLIK / ENTER  ·  NÅ FLAGET`,512,110);let c=new yi(o);c.colorSpace=Re;let l=new ti(new qa(1.25,.156),new Ur({map:c,side:2}));return l.position.set(0,1.12,-.1),t.add(l),{group:t,player:r,gorilla:n}}var xv=class{parent;chunks=[];dummy=new On;pose=new On;size=128;prototype=yv();revisions=[];constructor(e){this.parent=e}update(e){e.forEach((e,t)=>{if(e.revision===this.revisions[t])return;this.revisions[t]=e.revision;let n=Math.floor(t/this.size),r=t%this.size;this.chunks[n]||(this.chunks[n]=this.prototype.children.map(e=>{let t=e,n=new pi(t.geometry,t.material,this.size);return n.count=0,n.castShadow=!0,n.frustumCulled=!1,this.parent.add(n),n}));let i=this.chunks[n];this.pose.position.set(e.x,e.y,e.z),this.pose.rotation.set(0,e.heading+Math.PI/2,0),this.pose.rotateZ(-e.angle),this.pose.updateMatrix(),i.forEach((e,t)=>{let n=this.prototype.children[t];n.updateMatrix(),this.dummy.matrix.multiplyMatrices(this.pose.matrix,n.matrix),e.setMatrixAt(r,this.dummy.matrix),e.count=Math.max(e.count,r+1),e.instanceMatrix.needsUpdate=!0})})}},Sv=class{office;navigation;blocked;model;debris=new nv({table:av,room:Kd});game=new tv(e=>this.debris.add(e.x+iv.x,e.y+iv.y,iv.z+.035));instances;barrelMeshes=new Map;panel=document.querySelector(`#kong-controls`);status=document.querySelector(`#kong-status`);victory=document.querySelector(`#kong-victory`);pauseButton=document.querySelector(`#kong-pause`);restartButton=document.querySelector(`#kong-restart`);playButton=document.querySelector(`#kong-play`);keys=new Set;ray=new ys;pointer=new H;center=iv.clone().add(new U(0,.55,0));previousCamera=new U;saved=null;gesture=null;dirty=!0;constructor(e,t,n){this.office=e,this.navigation=t,this.blocked=n,this.model=bv(e),this.instances=new xv(e),this.model.group.visible=!1,this.previousCamera.copy(t.camera.position);let r=t.canvas;this.playButton.addEventListener(`click`,()=>this.open()),r.addEventListener(`pointerdown`,e=>{e.isPrimary&&e.button===0&&!this.active&&this.canPlay()&&this.hitsModel(e)&&(this.gesture={id:e.pointerId,x:e.clientX,y:e.clientY,rotation:t.camera.quaternion.clone()})},{capture:!0}),r.addEventListener(`pointerup`,e=>{let n=this.gesture;this.gesture=null,!(!n||n.id!==e.pointerId||Math.hypot(e.clientX-n.x,e.clientY-n.y)>7)&&(n.rotation.angleTo(t.camera.quaternion)>.025||this.canPlay()&&this.hitsModel(e)&&this.open())}),r.addEventListener(`pointercancel`,()=>{this.gesture=null}),r.addEventListener(`lostpointercapture`,()=>{this.gesture=null}),r.addEventListener(`keydown`,e=>this.key(e),{capture:!0}),this.panel.addEventListener(`keydown`,e=>this.key(e)),addEventListener(`keyup`,e=>this.keys.delete(e.code));let i=()=>{this.keys.clear(),this.gesture=null,this.game.pause()};addEventListener(`blur`,i),document.addEventListener(`visibilitychange`,()=>{document.hidden&&i()}),r.addEventListener(`webglcontextlost`,i),document.addEventListener(`focusin`,e=>{this.active&&e.target!==r&&!this.panel.contains(e.target)&&i()}),this.panel.querySelectorAll(`[data-kong]`).forEach(e=>{let t=e.dataset.kong;e.addEventListener(`pointerdown`,n=>{this.active&&!this.blocked()&&n.button===0&&(n.preventDefault(),e.setPointerCapture(n.pointerId),r.focus({preventScroll:!0}),t===`Space`?this.game.jump():this.keys.add(t))});let n=()=>this.keys.delete(t);e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`lostpointercapture`,n),e.addEventListener(`click`,e=>{e.detail===0&&this.active&&!this.blocked()&&(t===`Space`?this.game.jump():(this.game.update(.1,{left:t===`ArrowLeft`,right:t===`ArrowRight`,up:t===`ArrowUp`,down:t===`ArrowDown`}),this.dirty=!0))}),e.addEventListener(`keyup`,n),e.addEventListener(`blur`,n)}),this.pauseButton.addEventListener(`click`,()=>this.togglePause()),this.restartButton.addEventListener(`click`,()=>{this.blocked()||(this.keys.clear(),this.game.start(),r.focus({preventScroll:!0}))}),document.querySelector(`#kong-close`).addEventListener(`click`,()=>this.close()),new ResizeObserver(()=>this.resize()).observe(this.panel)}get active(){return this.saved!==null}canPlay(){let e=this.navigation.camera.position;return!this.blocked()&&this.navigation.isWalking&&md(Kd,e.x,e.z)&&e.distanceTo(this.center)<2.8&&e.z>iv.z+.25}hitsModel(e){let t=this.navigation.camera,n=this.navigation.canvas.getBoundingClientRect();this.pointer.set(e?(e.clientX-n.left)/n.width*2-1:0,e?1-(e.clientY-n.top)/n.height*2:0),t.updateMatrixWorld(),this.office.updateMatrixWorld(!0),this.ray.setFromCamera(this.pointer,t),this.ray.far=2.8;let r=this.ray.intersectObject(this.office,!0).find(e=>{for(let t=e.object;t;t=t.parent)if(!t.visible)return!1;let t=e.object.material;return t&&(Array.isArray(t)?t:[t]).some(e=>e.visible&&(!e.transparent||e.opacity>.5))});for(let e=r?.object??null;e;e=e.parent)if(e===this.model.group)return!0;return!1}key(e){if(!(e.altKey||e.ctrlKey||e.metaKey||this.blocked())){if(!this.active){if(e.code!==`Enter`||e.repeat||this.playButton.hidden||!this.canPlay())return;e.preventDefault(),e.stopImmediatePropagation(),this.open();return}if(!(e.target!==this.navigation.canvas&&[`Enter`,`Space`].includes(e.code))&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Space`,`Escape`,`KeyP`,`Enter`].includes(e.code)){if(e.preventDefault(),e.stopImmediatePropagation(),e.code===`Escape`){this.close();return}if(e.code===`KeyP`&&!e.repeat){this.togglePause();return}e.code===`Enter`&&!e.repeat&&(this.keys.clear(),this.game.start()),e.code===`Space`&&!e.repeat&&this.game.jump(),e.code.startsWith(`Arrow`)&&this.keys.add(e.code)}}}open(){if(this.active||!this.canPlay())return;let e=this.navigation.camera;this.saved={position:e.position.clone(),rotation:e.quaternion.clone(),fov:e.fov},this.navigation.suspend(!0),this.panel.hidden=!1,this.playButton.hidden=!0,document.body.dataset.kongPlaying=`true`,this.navigation.canvas.setAttribute(`aria-describedby`,`kong-instructions kong-status`),this.game.start(),this.resize(),this.navigation.canvas.focus({preventScroll:!0}),this.dirty=!0}resize(){if(!this.active)return;let e=this.navigation.camera,t=document.querySelector(`.header`).getBoundingClientRect().bottom+10,n=this.panel.getBoundingClientRect().top-10,r=Math.max(80,n-t)/innerHeight,i=1.55,a=Math.max(1.65/(2*i*r),1.65/(2*i*e.aspect*.88));e.fov=kt.radToDeg(2*Math.atan(a)),e.setViewOffset(innerWidth,innerHeight,0,(innerHeight-t-n)/2,innerWidth,innerHeight),e.position.set(iv.x,1.62,iv.z+i),e.lookAt(iv.x,1.24,iv.z),e.updateProjectionMatrix(),e.updateMatrixWorld(),this.dirty=!0}togglePause(){!this.active||this.blocked()||[`over`,`won`].includes(this.game.status)||(this.keys.clear(),this.game.status===`running`?this.game.pause():this.game.start(),this.navigation.canvas.focus({preventScroll:!0}))}close(){if(!this.saved)return;this.game.stop(),this.keys.clear();let e=this.navigation.camera;e.position.copy(this.saved.position),e.quaternion.copy(this.saved.rotation),e.fov=this.saved.fov,e.clearViewOffset(),e.updateProjectionMatrix(),e.updateMatrixWorld(),this.saved=null,this.panel.hidden=!0,delete document.body.dataset.kongPlaying,this.navigation.suspend(!1),this.previousCamera.copy(e.position),this.navigation.canvas.setAttribute(`aria-describedby`,`navigation-hint`),this.navigation.canvas.focus({preventScroll:!0}),this.dirty=!0}update(e){let t=this.dirty;this.dirty=!1;let n=this.navigation.camera,r=this.active||this.navigation.isWalking&&md(Kd,n.position.x,n.position.z);if(this.model.group.visible!==r&&(this.model.group.visible=r,t=!0),this.active&&this.blocked()&&(this.keys.clear(),this.game.pause()),!this.blocked()){this.game.update(e,{left:this.keys.has(`ArrowLeft`),right:this.keys.has(`ArrowRight`),up:this.keys.has(`ArrowUp`),down:this.keys.has(`ArrowDown`)})&&(t=!0);let r=this.previousCamera.distanceTo(n.position);!this.active&&this.navigation.isWalking&&r<.2&&this.debris.nudge(n.position.x,n.position.z,n.position.x-this.previousCamera.x,n.position.z-this.previousCamera.z),this.debris.update(e)&&(this.instances.update(this.debris.barrels),t=!0)}this.previousCamera.copy(n.position);let i=this.center.clone().project(n);if(this.playButton.hidden=this.active||!this.canPlay()||Math.abs(i.x)>.8||Math.abs(i.y)>.7||i.z<-1||i.z>1,this.playButton.hidden||(this.playButton.style.insetInlineStart=`${(i.x+1)*innerWidth/2}px`,this.playButton.style.insetBlockStart=`${(1-i.y)*innerHeight/2}px`),t){let e=this.game.player;this.model.player.position.set(e.x,e.y,.035),this.model.player.rotation.y=e.facing<0?-.35:.35,this.model.player.scale.setScalar(e.invulnerable>0?.9:1);for(let e of this.game.barrels){if(!this.barrelMeshes.has(e.id)){let t=yv();this.model.group.add(t),this.barrelMeshes.set(e.id,t)}let t=this.barrelMeshes.get(e.id);t.position.set(e.x,e.y,.035),t.rotation.z=e.angle}for(let[e,t]of this.barrelMeshes)this.game.barrels.some(t=>t.id===e)||(this.model.group.remove(t),this.barrelMeshes.delete(e))}let a=this.game.status,o=a===`over`||a===`won`;this.victory.hidden=a!==`won`;let s=a===`over`?`Game over · ${this.game.score} point`:a===`won`?`Du vandt! · ${this.game.score} point`:a===`paused`?`Pause · fortsæt med P`:`${this.game.lives} liv · ${this.game.score} point`;return s!==this.status.textContent&&(this.status.textContent=s),this.pauseButton.textContent=a===`paused`?`Fortsæt · P`:`Pause · P`,this.pauseButton.disabled=o,this.restartButton.hidden=!o,this.panel.querySelectorAll(`[data-kong]`).forEach(e=>{e.disabled=a!==`running`}),t}},Cv=document.querySelector(`#scene`);document.querySelector(`#reload`).addEventListener(`click`,()=>location.reload());function wv(){Rg();let e=new Ln;e.background=new Fn(`#eeede8`);let t=new Xo(42,innerWidth/innerHeight,.05,300),n=new Uu({canvas:Cv,antialias:!0});n.setPixelRatio(Math.min(devicePixelRatio,1.75)),n.setSize(innerWidth,innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=1,n.toneMapping=4,n.toneMappingExposure=1.08;let r=new Lg(t,Cv);e.add(new Ro(`#f5f8ff`,`#d6cbbc`,2.6));let i=new ts(`#fff0da`,2.4);i.position.set(-12,36,22),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.target.position.set(-5.5,0,15),e.add(i.target),Object.assign(i.shadow.camera,{left:-32,right:32,top:32,bottom:-32}),i.shadow.normalBias=.035,i.shadow.bias=-15e-5,i.shadow.radius=3,e.add(i);let a=dg();e.add(a.office);let o=new gh(a.martinScreen,e,Cv),s=new L_;e.add(s.group,s.deskCups);let c=matchMedia(`(prefers-reduced-motion: reduce)`);s.walk.paused=c.matches,c.addEventListener(`change`,()=>{s.walk.paused=c.matches,c.matches&&a.jesperScreen.settleCatch(),_=!0});let l=new Kg(a.television,r),u=new ti(new qa(100,100),new Za({opacity:.12}));u.rotation.x=-Math.PI/2,u.position.y=-.265,u.receiveShadow=!0,e.add(u),document.querySelectorAll(`[data-view]`).forEach(e=>{e.addEventListener(`click`,()=>r.setView(e.dataset.view))}),document.querySelector(`#rotate`).addEventListener(`click`,()=>r.setTool(`rotate`)),document.querySelector(`#pan`).addEventListener(`click`,()=>r.setTool(`pan`)),document.querySelector(`#zoom-in`).addEventListener(`click`,()=>r.zoom(.82)),document.querySelector(`#zoom-out`).addEventListener(`click`,()=>r.zoom(1.22)),document.querySelector(`#reset`).addEventListener(`click`,()=>r.setView(`overview`));let d=document.querySelector(`#help-dialog`),f=new J_(a.tetrisGlass,a.office,r,()=>d.open||l.active||p.active||document.hidden),p=new Sv(a.office,r,()=>d.open||l.active||f.active||document.hidden),m=new y_(a.whiteboard,a.office,r,c,()=>d.open||l.active||f.active||p.active||document.hidden),h=new B_(a.office,a.coffee,a.jesperScreen,s,r,c,()=>d.open||l.active||f.active||p.active||document.hidden);document.querySelector(`#help`).addEventListener(`click`,()=>{r.clearInput(),d.showModal()}),d.addEventListener(`click`,e=>{if(e.target===d){let t=d.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&d.close()}});let g=document.querySelector(`#fullscreen`);g.hidden=!document.fullscreenEnabled,g.addEventListener(`click`,async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{document.querySelector(`#view-name`).textContent=`Fuld skærm er ikke tilgængelig`}}),document.addEventListener(`fullscreenchange`,()=>g.setAttribute(`aria-label`,document.fullscreenElement?`Afslut fuld skærm`:`Fuld skærm`)),Cv.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),n.setAnimationLoop(null),document.querySelector(`#error`).hidden=!1});let _=!0;Mo.onLoad=()=>{_=!0,a.holbechScreens.dirty=!0},r.controls.addEventListener(`change`,()=>{_=!0}),addEventListener(`resize`,()=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight),l.resize(),f.resize(),p.resize(),o.resize(),_=!0,r.view===`overview`&&r.setView(`overview`,!0)});let v=performance.now(),y=new U,b=new At;n.setAnimationLoop(i=>{let u=(i-v)/1e3,g=Math.min(u,.05);if(v=i,document.hidden)return;r.update(g),a.updateScreens(t,g,!c.matches&&!d.open&&!l.active&&!p.active)&&(_=!0),!l.active&&!d.open&&s.update(g,c.matches)&&(_=!0),a.updateRestroomDoor(s.walk.restroomDoorClosure)&&(_=!0),l.update(g)&&(_=!0),f.update(g)&&(_=!0),p.update(Math.min(u,.25))&&(_=!0);let x=r.isWalking;for(let e of a.walls)e.group.visible=x||(t.position[e.axis]-e.position)*e.inside>0;for(let e of a.roofs)e.visible=x;m.update(g)&&(_=!0),h.update(g)&&(_=!0),(_||!y.equals(t.position)||!b.equals(t.quaternion))&&(a.holbechScreens.render(n,e,a.walls,a.roofs,s),n.render(e,t),y.copy(t.position),b.copy(t.quaternion),_=!1),o.update(t,!d.open&&!l.active)})}try{wv()}catch(e){console.error(e),document.querySelector(`#error`).hidden=!1}