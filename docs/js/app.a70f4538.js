(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/knoxqr/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},3554:function(e,t,o){},a79c:function(e,t,o){"use strict";o("ab63")},ab63:function(e,t,o){},ba61:function(e,t,o){"use strict";o("3554")},cd49:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=Object(n["d"])('<div class="section is-small has-text-left"><h1 class="title">Attendance Forms</h1><ol type="1"><li>Follow the relevant link (below) to fill in the event name for your attendance form</li><li>Copy the link using the popup at the bottom of Google Sheets</li><li>Paste the copied link into the text box on this page</li><li>Download your QR code and print!</li></ol></div><div class="section is-small has-text-left"><h2 class="title">Forms!</h2><ul><li><a class="tag is-large is-info" href="https://docs.google.com/forms/d/1mBYws_dxEeOmWux2hmsDrDiZ30JLD8Vnoc1KoA5sJJU/prefill">LLC 2021</a></li></ul></div>',2);function a(e,t,o,a,i,c){var s=Object(n["m"])("QRCodeStyling");return Object(n["g"])(),Object(n["c"])(n["a"],null,[Object(n["e"])(s),r],64)}var i=o("d4ec"),c=o("262e"),s=o("2caf"),l=o("9ab4"),u=o("ce1f"),d=Object(n["r"])("data-v-2954985a");Object(n["j"])("data-v-2954985a");var p={class:"hello"},b=Object(n["e"])("section",{class:"hero"},[Object(n["e"])("div",{class:"hero-body"},[Object(n["e"])("p",{class:"title"}," Knox College QR Code Builder ")])],-1),f={id:"qr-code",ref:"qrCode"},O={class:"label"},h={class:"control"},j={class:"select"},v=Object(n["e"])("option",{value:"svg"},"SVG",-1),g=Object(n["e"])("option",{value:"png"},"PNG",-1),m=Object(n["e"])("option",{value:"jpeg"},"JPEG",-1),y=Object(n["e"])("option",{value:"webp"},"WEBP",-1);Object(n["h"])();var w=d((function(e,t,o,r,a,i){return Object(n["g"])(),Object(n["c"])("div",p,[b,Object(n["q"])(Object(n["e"])("input",{class:"input has-text-centered is-size-1","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.options.data=t}),placeholder:"Add data"},null,512),[[n["o"],e.options.data]]),Object(n["e"])("div",f,null,512),Object(n["e"])("label",O,[Object(n["e"])("div",h,[Object(n["e"])("div",j,[Object(n["q"])(Object(n["e"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.extension=t})},[v,g,m,y],512),[[n["n"],e.extension]])]),Object(n["e"])("button",{class:"button is-primary",onClick:t[3]||(t[3]=function(){return e.download&&e.download.apply(e,arguments)})},"Download")])])])})),x=o("ade3"),C=o("6ffa"),q=o.n(C),k=function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){return Object(i["a"])(this,o),t.apply(this,arguments)}return o}(u["b"]);k=Object(l["a"])([Object(u["a"])({mounted:function(){this.qrCode.append(this.$refs["qrCode"])},watch:Object(x["a"])({},"options.data",(function(){this.qrCode.update(this.options)})),methods:{download:function(){this.qrCode.download({extension:this.extension})}},data:function(){var e={width:300,height:300,type:"svg",data:"http://knox.edu/",image:"favicon.jpg",margin:0,qrOptions:{typeNumber:0,mode:"Byte",errorCorrectionLevel:"H"},imageOptions:{hideBackgroundDots:!0,imageSize:.5,margin:0,crossOrigin:"anonymous"},dotsOptions:{color:"#330066",type:"classy"},backgroundOptions:{color:"#ffffff"},cornersSquareOptions:{color:"#000000",type:"square"},cornersDotOptions:{color:"#000000",type:"dot"}};return{options:e,extension:"svg",qrCode:new q.a(e)}}})],k);var P=k;o("a79c");P.render=w,P.__scopeId="data-v-2954985a";var S=P,_=function(e){Object(c["a"])(o,e);var t=Object(s["a"])(o);function o(){return Object(i["a"])(this,o),t.apply(this,arguments)}return o}(u["b"]);_=Object(l["a"])([Object(u["a"])({components:{QRCodeStyling:S}})],_);var D=_;o("ba61");D.render=a;var J=D,B=o("5502"),G=Object(B["a"])({state:{},mutations:{},actions:{},modules:{}});Object(n["b"])(J).use(G).mount("#app")}});
//# sourceMappingURL=app.a70f4538.js.map