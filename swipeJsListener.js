class SwipeJsListener {

    constructor() {
  
      this.xDown = null;
      this.yDown = null;
      this.callbackFuncObj = {};
      this.ctx = null;
  
    }
  
    _onTouchStart = (evt) => {
  
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    
    };
    
    _onTouchMove = (evt) => {
    
      if (!this.xDown || !this.yDown) return;
    
      const xDiff = this.xDown - evt.touches[0].clientX;
      const yDiff = this.yDown - evt.touches[0].clientY;
    
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
    
        if (xDiff > 0 && Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeLeft')) this.callbackFuncObj.callbackToSwipeLeft.call(this.ctx);
        else if (Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeRight')) this.callbackFuncObj.callbackToSwipeRight.call(this.ctx);
      
      } else {
    
        if (yDiff > 0 && Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeUp')) this.callbackFuncObj.callbackToSwipeUp.call(this.ctx);
        else if (Object.prototype.hasOwnProperty.call(this.callbackFuncObj, 'callbackToSwipeDown')) this.callbackFuncObj.callbackToSwipeDown.call(this.ctx);
    
      }
      
      this.xDown = null;
      this.yDown = null;
    
    };
    
    
    addSwipeListener = (ctx, callbackFuncObj) => {
  
      this.xDown = null;
      this.yDown = null;
      this.callbackFuncObj = callbackFuncObj;
      this.ctx = ctx;
      window.addEventListener('touchstart', this._onTouchStart);
      window.addEventListener('touchmove', this._onTouchMove);
    
    };
    
    removeSwipeListener = () => {
    
      this.xDown = null;
      this.yDown = null;
      this.callbackFuncObj = {};
      this.ctx = null;
      window.removeEventListener('touchstart', this._onTouchStart);
      window.removeEventListener('touchmove', this._onTouchMove);
    
    };
  
  }
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = SwipeJsListener;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return SwipeJsListener;
      });
    } else {
      window.SwipeJsListener = SwipeJsListener;
    }
  }