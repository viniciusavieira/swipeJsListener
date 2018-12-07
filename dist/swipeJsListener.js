'use strict';

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SwipeJsListener = function SwipeJsListener() {
  var _this = this;

  _classCallCheck(this, SwipeJsListener);

  this._onTouchStart = function (evt) {
    _newArrowCheck(this, _this);

    this.xDown = evt.touches[0].clientX;
    this.yDown = evt.touches[0].clientY;
  }.bind(this);

  this._onTouchMove = function (evt) {
    _newArrowCheck(this, _this);

    if (!this.xDown || !this.yDown) return;

    var xDiff = this.xDown - evt.touches[0].clientX;
    var yDiff = this.yDown - evt.touches[0].clientY;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {

      if (xDiff > 0 && Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeLeft')) this.callbackFuncObj.callbackToSwipeLeft.call(this.ctx);else if (Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeRight')) this.callbackFuncObj.callbackToSwipeRight.call(this.ctx);
    } else {

      if (yDiff > 0 && Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeUp')) this.callbackFuncObj.callbackToSwipeUp.call(this.ctx);else if (Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeDown')) this.callbackFuncObj.callbackToSwipeDown.call(this.ctx);
    }

    this.xDown = null;
    this.yDown = null;
  }.bind(this);

  this.addSwipeListener = function (ctx, callbackFuncObj) {
    _newArrowCheck(this, _this);

    this.xDown = null;
    this.yDown = null;
    this.callbackFuncObj = callbackFuncObj;
    this.ctx = ctx;
    window.addEventListener('touchstart', this._onTouchStart);
    window.addEventListener('touchmove', this._onTouchMove);
  }.bind(this);

  this.removeSwipeListener = function () {
    _newArrowCheck(this, _this);

    this.xDown = null;
    this.yDown = null;
    this.callbackFuncObj = {};
    this.ctx = null;
    window.removeEventListener('touchstart', this._onTouchStart);
    window.removeEventListener('touchmove', this._onTouchMove);
  }.bind(this);

  this.xDown = null;
  this.yDown = null;
  this.callbackFuncObj = {};
  this.ctx = null;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SwipeJsListener;
} else {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return SwipeJsListener;
    });
  } else {
    window.SwipeJsListener = SwipeJsListener;
  }
}
