# swipeListener
A small class to listen swipe events and invoke callbacks to them

Usage:

You can download the js and include in your builder, or import it as a module if you use a module bundler like webpack.
```
<script src="path/to/swipeListener.js" type="text/javascript"></script>


config = () => {
  this.swipeListener = new SwipeListener();
  this.swipeListener.addSwipeListener(this, {
    callbackToSwipeLeft: this.onLeftSwipe,
    callbackToSwipeRight: this.onRightSwipe,
    callbackToSwipeUp: this.onUpSwipe,
    callbackToSwipeDown: this.onDownSwipe,
  });
}

remove = () => {
  this.removeSwipeListener();
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

