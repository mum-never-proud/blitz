import $ from 'src/blitz';

describe('klass', () => {
  test('should add a class', () => {
    document.body.innerHTML = '<div id ="blitz-container"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1');
  });

  test('should add multiple classes', () => {
    document.body.innerHTML = '<div id ="blitz-container"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1', 'blitz-class-2');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1 blitz-class-2');
  });

  test('should append to exisiting class if exist', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-0 blitz-class-1');
  });

  test('should remove a class', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.removeClass('blitz-class-0');

    expect(blitzContainer.elements[0].className).toEqual('');
  });

  test('should remove multiple classes', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.removeClass('blitz-class-0', 'blitz-class-1');

    expect(blitzContainer.elements[0].className).toEqual('');
  });

  test('should return true if element has the given class', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    expect(blitzContainer.hasClass('blitz-class-0')).toBeTruthy();
  });

  test('should return false if element doesn\'t the given class', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    expect(blitzContainer.hasClass('blitz-class-10')).toBeFalsy();
  });

  test('should not add duplicate class', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-0 blitz-class-1');
  });

  test('should toggle a class', () => {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1"></div>';
    const blitzContainer = $('#blitz-container');

    blitzContainer.toggleClass('blitz-class-0');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1');

    blitzContainer.toggleClass('blitz-class-0');

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1 blitz-class-0');
  });
});
