# swipeListener
A small class to listen swipe events and invoke callbacks to them

Usage:
```
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

