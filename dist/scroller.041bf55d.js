parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"6rmp":[function(require,module,exports) {
var e=!1,t=document.querySelector(".scroller");function o(o){var n=Math.max(0,Math.min(o,document.querySelector(".wrpr").offsetWidth));"img-before"===e&&(document.querySelector(".img-before").style.clipPath="inset(0 0 0 "+n+"px)",t.style.left=n-25+"px")}t.addEventListener("mousedown",function(){e="img-before",t.classList.add("scrolling")}),document.body.addEventListener("mouseup",function(){e=!1,t.classList.remove("scrolling")}),document.body.addEventListener("mouseleave",function(){e=!1,t.classList.remove("scrolling")}),document.body.addEventListener("mousemove",function(t){if(e){var n=t.pageX;o(n-=document.querySelector(".wrpr").getBoundingClientRect().left)}}),e="img-before",o(document.querySelector(".img-before").style.width),e=!1,t.addEventListener("touchstart",function(){e="img-before",t.classList.add("scrolling")}),document.body.addEventListener("touchend",function(){e=!1,t.classList.remove("scrolling")}),document.body.addEventListener("touchcancel",function(){e=!1,t.classList.remove("scrolling")}),document.querySelector(".wrpr").addEventListener("touchmove",function(t){if(e){t.preventDefault();var n=t.touches[0].pageX;o(n-=document.querySelector(".wrpr").getBoundingClientRect().left)}});
},{}]},{},["6rmp"], null)
//# sourceMappingURL=scroller.041bf55d.map