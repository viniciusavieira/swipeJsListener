# swipeJsListener
A small class to listen swipe events and invoke callbacks to them

Usage:

Install with Npm

```
npm i swipe-js-listener
```

It should be compatible with bundlers like webpack using mobule.exports as also to projects using require/amd.
```
import SwipeJsListener from 'SwipeJsListener';
```

```
require('swipeJsListener');
```

You can also download the JS in the dist folder and include in your project, it already supports the necessary Polyfills.
```
<script src="path/swipeJsListener.js" type="text/javascript"></script>
```

And in your view or js you can use it, the first argument is the context(this) and the second is an Object that can contains keys pointing to the callbacks, you can pass only the keys you use, you're not obliged to pass all the keys as parameters in the Object.

```
//Scope declaration only to show context.
(function() {
    
    remove = function() {
        this.swipeJsListener.removeSwipeListener();
    }

    onLeftSwipe = function() {
        console.log('On left swipe');
    }
    onRightSwipe = function() {
        console.log('On right swipe');
    }
    onUpSwipe = function() {
        console.log('On up swipe');
    }
    onDownSwipe = function() {
        console.log('On down swipe');
    }
    
    this.swipeJsListener = new SwipeJsListener();
    this.swipeJsListener.addSwipeListener(this, {
        callbackToSwipeLeft: onLeftSwipe,
        callbackToSwipeRight: onRightSwipe,
        callbackToSwipeUp: onUpSwipe,
        callbackToSwipeDown: onDownSwipe,
    });
    
})();
```

