




/*
     FILE ARCHIVED ON 9:02:16 oct. 18, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 0:03:05 nov. 25, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
google.maps.__gjsload__('stats', function(_){'use strict';var AZ=function(a,b,c){var d=[];_.Fc(a,function(a,c){d.push(c+b+a)});return d.join(c)},BZ=function(a,b,c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},CZ=function(a){var b={};_.Fc(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return AZ(b,":",",")},EZ=function(a,b,c,d){var e;e=_.N(_.R,23,500);var f;f=_.N(_.R,22,
2);this.C=a;this.F=b;this.G=e;this.l=f;this.B=c;this.m=d;this.f=new _.Ej;this.b=0;this.j=_.Ka();DZ(this)},DZ=function(a){window.setTimeout(function(){FZ(a);DZ(a)},Math.min(a.G*Math.pow(a.l,a.b),2147483647))},GZ=function(a,b,c){a.f.set(b,c)},FZ=function(a){var b=BZ(a.F,a.B,a.m,void 0);b.t=a.b+"-"+(_.Ka()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.fm()?"-if":""))});a.C.b({ev:"api_snap"},b);++a.b},HZ=function(a,b,c,d,e){this.m=a;this.C=b;this.l=c;this.f=d;this.j=e;this.b=
new _.Ej;this.B=_.Ka()},IZ=function(a,b,c){this.l=b;this.f=a+"/maps/gen_204";this.j=c},JZ=function(){this.b=new _.Ej},KZ=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.Ep;c+=a.bp});return c?b/c:0},LZ=function(a,b,c,d,e){this.B=a;this.C=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},MZ=function(a,b,c,d){this.j=a;_.z.bind(this.j,"set_at",this,this.l);_.z.bind(this.j,"insert_at",this,this.l);this.B=b;this.C=c;this.m=d;this.f=0;this.b={};this.l()},NZ=function(){this.j=_.P(_.R,6);this.b=new IZ(_.Mf[35]?
_.P(_.mf(_.R),11):_.Ov,_.Pi,window.document);new MZ(_.Bi,(0,_.p)(this.b.b,this.b),_.Yf,!!this.j);var a=_.P(new _.ff(_.R.data[3]),1);this.C=a.split(".")[1]||a;this.F={};this.B={};this.m={};this.G={};this.H=_.N(_.R,0,1);_.Oi&&(this.l=new EZ(this.b,this.C,this.H,this.j))};
HZ.prototype.F=function(a){var b=void 0,b=_.m(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.p)(function(){var a=BZ(this.C,this.l,this.f,this.j);a.t=_.Ka()-this.B;var b=this.b;_.Fj(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.I[g]}_.Ly(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};
IZ.prototype.b=function(a,b){b=b||{};var c=_.uk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=CZ(b);a=AZ(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.Mc.__gm_captureCSI)&&b(a)};JZ.prototype.f=function(a,b,c){this.b.set(_.yb(a),{Ep:b,bp:c})};LZ.prototype.F=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.az(this,this.G,500))};
LZ.prototype.G=function(){for(var a=BZ(this.C,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+((_.dl()||!_.cl())&&_.cl());this.b.length=0;this.B.b({ev:"api_mapft"},a)};MZ.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Go;a=a.timestamp-this.C;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.B({ev:"api_services"},c)}}};NZ.prototype.V=function(a){a=_.yb(a);this.F[a]||(this.F[a]=new LZ(this.b,this.C,this.H,this.j));return this.F[a]};NZ.prototype.T=function(a){a=_.yb(a);this.B[a]||(this.B[a]=new HZ(this.b,this.C,1,this.j));return this.B[a]};NZ.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.bA,GZ(this.l,a,function(){return b.ub()}));var b=this.m[a];return b}};NZ.prototype.M=function(a){if(this.l){this.G[a]||(this.G[a]=new JZ,GZ(this.l,a,function(){return KZ(b)}));var b=this.G[a];return b}};var OZ=new NZ;_.mc("stats",OZ);});
