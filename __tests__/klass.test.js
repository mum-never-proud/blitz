import $ from 'src/blitz';

describe('klass', () => {
  test('should add the given class(es) to each element in the collection', () => {
    document.body.innerHTML = '<div id ="blitz-container"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1');
    blitzContainer.addClass('blitz-class-2', 'blitz-class-3');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1 blitz-class-2 blitz-class-3');
  });

  test('should remove the given class(es) from each element in the collection', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1 blitz-class-2"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.removeClass('blitz-class-0');
    blitzContainer.removeClass('blitz-class-1', 'blitz-class-2');

    expect(blitzContainer.elements[0].className).toEqual('');
  });

  test('should check if the first element in the collection has the given class', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    expect(blitzContainer.hasClass('blitz-class-0')).toBeTruthy();
    expect(blitzContainer.hasClass('blitz-class-10')).toBeFalsy();
  });

  test('should not add duplicate class', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-0 blitz-class-1');
  });

  test('should toggle the given class(es) of the first element in the collection', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.toggleClass('blitz-class-0');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1');

    blitzContainer.toggleClass('blitz-class-0');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1 blitz-class-0');
  });
});
