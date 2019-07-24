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
    swipe.removeSwipeListener();
  })

  test('it should listen for swipe right', () => {
    let currentDirection = ''
    const swipeCallback = direction => {
      console.log('direction', direction)
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

    const touchstart = [{ clientX: 0, clientY: 0 }];
    const touchdest = [{ clientX: 513, clientY: 0 }];
    const window = (container.ownerDocument || container).defaultView;
    fireEvent.touchStart(window, { touches: touchstart });
    fireEvent.touchMove(window, { touches: touchdest });
    fireEvent.touchEnd(window, { touches: touchdest });
    
    expect(currentDirection).toBe('rigth');
    swipe.removeSwipeListener();

  })

  test('it should listen for swipe left', () => {
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

    const touchstart = [{ clientX: 0, clientY: 0 }];
    const touchdest = [{ clientX: -500, clientY: 0 }];
    const window = (container.ownerDocument || container).defaultView;
    fireEvent.touchStart(window, { touches: touchstart });
    fireEvent.touchMove(window, { touches: touchdest });
    fireEvent.touchEnd(window, { touches: touchdest });
    expect(currentDirection).toBe('left');
    swipe.removeSwipeListener();
  })

  test('it should listen for swipe left', () => {
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

    const touchstart = [{ clientX: 0, clientY: 0 }];
    const touchdest = [{ clientX: 0, clientY: -500 }];
    const window = (container.ownerDocument || container).defaultView;
    fireEvent.touchStart(window, { touches: touchstart });
    fireEvent.touchMove(window, { touches: touchdest });
    fireEvent.touchEnd(window, { touches: touchdest });
    expect(currentDirection).toBe('up');
    swipe.removeSwipeListener();
  })

  test('it should listen for swipe left', () => {
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

    const touchstart = [{ clientX: 0, clientY: 0 }];
    const touchdest = [{ clientX: 0, clientY: 500 }];
    const window = (container.ownerDocument || container).defaultView;
    fireEvent.touchStart(window, { touches: touchstart });
    fireEvent.touchMove(window, { touches: touchdest });
    fireEvent.touchEnd(window, { touches: touchdest });
    expect(currentDirection).toBe('down');
    swipe.removeSwipeListener();
  })
})
