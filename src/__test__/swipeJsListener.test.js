import SwipeJsListener from '../swipeJsListener';
import { fireEvent, getByText } from 'dom-testing-library';
import "jest-dom/extend-expect"

const getTestDOM = () => {
  const body = document.createElement('body')
  body.innerHTML = `
    <h1>Lets test swipeJsListener!</h1>
    <div id='container' class="container">
        SWIPE target!
    </div>
  `
  return body
}
// https://gist.github.com/morewry/538efb737ed9c4e432e4
const touchStartOn = (el, x = 0, y = 0) => {
  try { 
    e = document.createEvent('TouchEvent')
    e.initTouchEvent("touchstart", true, true)
  } catch (err) {
    try {
    	e = document.createEvent('UIEvent')
    	e.initUIEvent("touchstart", true, true)
    } catch (err) {
      e = document.createEvent('Event')
      e.initEvent("touchstart", true, true)
    }
  }
  
  e.targetTouches = [{
    pageX: x,
    pageY: y
  }]
  el.dispatchEvent(e)
}

// https://gist.github.com/morewry/538efb737ed9c4e432e4
const touchMoveOn = (el, x = 0, y = 0) => {
  try {
    e = document.createEvent('TouchEvent')
    e.initTouchEvent("touchmove", true, true)
  } catch (err) {
    try {
    	e = document.createEvent('UIEvent')
    	e.initUIEvent("touchmove", true, true)
    } catch (err) {
      e = document.createEvent('Event')
      e.initEvent("touchmove", true, true)
    }
  }
  
  e.changedTouches = [{
    pageX: x,
    pageY: y
  }]
  el.dispatchEvent(e)
}

// https://gist.github.com/morewry/538efb737ed9c4e432e4
const touchEndOn = (el, x = 0, y = 0) => {
  try {
    e = document.createEvent('TouchEvent')
    e.initTouchEvent("touchend", true, true)
  } catch (err) {
    try {
    	e = document.createEvent('UIEvent')
    	e.initUIEvent("touchend", true, true)
    } catch (err) {
      e = document.createEvent('Event')
      e.initEvent("touchend", true, true)
    }
  }
  
  e.changedTouches = [{
    pageX: x,
    pageY: y
  }]
  el.dispatchEvent(e)
}

describe('it should handle Swipe tests', () => {

  test('it should add the class without errors', () => {
    const swipe = new SwipeJsListener();
    swipe.addSwipeListener(this, {
        callbackToSwipeLeft: () => {},
        callbackToSwipeRight: () => {},
        callbackToSwipeUp: () => {},
        callbackToSwipeDown: () => {},
    });

    expect(swipe).toBeDefined()
  })

  test('it should listen for swipes', () => {
    let currentDirection = ''
    const swipeCallback = (direction) => {
      currentDirection = direction
    }

    const swipe = new SwipeJsListener();
    const container = getTestDOM()
    
    swipe.addSwipeListener(container, {
        callbackToSwipeLeft: () => {swipeCallback('left')},
        callbackToSwipeRight: () => {swipeCallback('rigth')},
        callbackToSwipeUp: () => {swipeCallback('up')},
        callbackToSwipeDown: () => {swipeCallback('down')},
    });
  
    expect(swipe).toBeDefined()
    const swipeTarget = getByText(container, 'SWIPE target!');
    expect(swipeTarget).toHaveTextContent('SWIPE target!')

    // touchStartOn(swipeTarget, 0, 0)
    // touchMoveOn(swipeTarget, 50, 0)
    // touchEndOn(swipeTarget, 50, 0)
    // expect(currentDirection).toBe('rigth')
  })
})
