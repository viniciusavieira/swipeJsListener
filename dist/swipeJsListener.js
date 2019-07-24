"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var SwipeJsListener=function a(){var b=this;_classCallCheck(this,a),_defineProperty(this,"_onTouchStart",function(a){b.xDown=a.touches[0].clientX,b.yDown=a.touches[0].clientY}),_defineProperty(this,"_onTouchMove",function(a){var c=Math.abs,d="function"==typeof window.alert;if(d||b.xDown&&b.yDown){var e=b.xDown-a.touches[0].clientX,f=b.yDown-a.touches[0].clientY;c(e)>c(f)?0<e&&Object.prototype.hasOwnProperty.call(b.callbackFuncObj,"callbackToSwipeLeft")?b.callbackFuncObj.callbackToSwipeLeft.call(b.ctx):Object.prototype.hasOwnProperty.call(b.callbackFuncObj,"callbackToSwipeRight")&&b.callbackFuncObj.callbackToSwipeRight.call(b.ctx):0<f&&Object.prototype.hasOwnProperty.call(b.callbackFuncObj,"callbackToSwipeUp")?b.callbackFuncObj.callbackToSwipeUp.call(b.ctx):Object.prototype.hasOwnProperty.call(b.callbackFuncObj,"callbackToSwipeDown")&&b.callbackFuncObj.callbackToSwipeDown.call(b.ctx),b.xDown=null,b.yDown=null}}),_defineProperty(this,"addSwipeListener",function(a,c){b.xDown=null,b.yDown=null,b.callbackFuncObj=c,b.ctx=a,window.addEventListener("touchstart",b._onTouchStart),window.addEventListener("touchmove",b._onTouchMove)}),_defineProperty(this,"removeSwipeListener",function(){b.xDown=null,b.yDown=null,b.callbackFuncObj={},b.ctx=null,window.removeEventListener("touchstart",b._onTouchStart),window.removeEventListener("touchmove",b._onTouchMove)}),this.xDown=null,this.yDown=null,this.callbackFuncObj={},this.ctx=null};"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=SwipeJsListener:"function"==typeof define&&define.amd?define([],function(){return SwipeJsListener}):window.SwipeJsListener=SwipeJsListener;
