import $ from 'src/blitz';

const createMouseEvent = (eventType) => new MouseEvent(eventType, { bubbles: true });

describe('events', () => {
  let blitzContainer; let
    mockFx;

  beforeEach(() => {
    document.body.innerHTML = '<div></div><div></div>';
    blitzContainer = $('div');
    mockFx = jest.fn();
  });

  it('should add an event listener to all the selected elements', () => {
    blitzContainer.on('click', mockFx);
    blitzContainer.elements[0].click();
    blitzContainer.elements[1].click();

    expect(mockFx).toBeCalled();
    expect(mockFx).toHaveBeenCalledTimes(2);
  });

  it('should remove all event listeners', () => {
    blitzContainer.on('click', mockFx);
    blitzContainer.on('dblclick', mockFx);
    blitzContainer.off();

    blitzContainer.elements[0].click();
    blitzContainer.elements[0].dispatchEvent(createMouseEvent('dblclick'));

    expect(mockFx).not.toBeCalled();
  });

  it('should remove "selected" event from the element', () => {
    blitzContainer.on('click', mockFx);
    blitzContainer.on('dblclick', mockFx);
    blitzContainer.off('click');

    blitzContainer.elements[0].click();
    blitzContainer.elements[0].dispatchEvent(createMouseEvent('dblclick'));

    expect(mockFx).toHaveBeenCalledTimes(1);
  });

  it('should remove "selected" event callback from the element', () => {
    const mockFx2 = jest.fn();

    blitzContainer.on('click', mockFx);
    blitzContainer.on('click', mockFx2);
    blitzContainer.on('dblclick', mockFx);
    blitzContainer.off('click', mockFx);

    blitzContainer.elements[0].click();

    expect(mockFx).not.toBeCalled();
    expect(mockFx2).toHaveBeenCalledTimes(1);
  });
});
