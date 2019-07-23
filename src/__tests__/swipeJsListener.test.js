import SwipeJsListener from '../swipeJsListener';
import { fireEvent, getByText } from '@testing-library/dom';
import "@testing-library/jest-dom/extend-expect"

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
    console.log('started')
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
  console.log('el', el);
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

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }
})

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
    const swipeCallback = direction => currentDirection = direction

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

    const touchstart = [{ pageX: 0, pageY: 0 }];
    const touchdest = [{ pageX: 513, pageY: 0 }];
    const window = (container.ownerDocument || container).defaultView;
    fireEvent.touchStart(container.firstChild, { touches: touchstart });
    fireEvent.touchMove(window, { touches: touchdest });
    fireEvent.touchEnd(window, { touches: touchdest });
    expect(currentDirection).toBe('down')
  })
})
