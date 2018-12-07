# swipeJsListener
A small class to listen swipe events and invoke callbacks to them

Usage:

You can download the js and include in your builder, or import it as a module if you use a module bundler like webpack.
```
<script src="path/to/swipeListener.js" type="text/javascript"></script>
OR
import SwipeListener from '../../../utils/SwipeListener';
```
And in your view or js you can use it(arrow functions are no obligatory).
```
config = () => {
  this.swipeJsListener = new SwipeJsListener();
  this.swipeJsListener.addSwipeListener(this, {
    callbackToSwipeLeft: this.onLeftSwipe,
    callbackToSwipeRight: this.onRightSwipe,
    callbackToSwipeUp: this.onUpSwipe,
    callbackToSwipeDown: this.onDownSwipe,
  });
}

remove = () => {
  this.swipeJsListener.removeSwipeListener();
}

onLeftSwipe = () => { 
  console.log('On left swipe');
}
onLeftSwipe = () => { 
  console.log('On left swipe');
}
onUpSwipe = () => {
  console.log('On up swipe');
}
onDownSwipe = () => {
  console.log('On down swipe');
}
```

