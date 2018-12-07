# swipeJsListener
A small class to listen swipe events and invoke callbacks to them

Usage:

You can download the js and include in your builder, or import it as a module if you use a module bundler like webpack.
```
<script src="path/to/swipeJsListener.js" type="text/javascript"></script>
OR
import SwipeListener from '../../../utils/SwipeListener';
```
And in your view or js you can use it(arrow functions are no obligatory).
```
onLeftSwipe = function() {
    console.log('On left swipe');
}
onRightSwipe = function() {
    console.log('On left swipe');
}
onUpSwipe = function() {
    console.log('On up swipe');
}
onDownSwipe = function() {
    console.log('On down swipe');
}

this.swipeJsListener = new SwipeJsListener();
this.swipeJsListener.addSwipeListener(document.querySelector('#container'), {
    callbackToSwipeLeft: this.onLeftSwipe,
    callbackToSwipeRight: this.onRightSwipe,
    callbackToSwipeUp: this.onUpSwipe,
    callbackToSwipeDown: this.onDownSwipe,
});
```

