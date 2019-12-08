import $ from '../src/blitz';

describe('klass', function() {
  let blitzContainer;

  test('should add a class', function() {
    document.body.innerHTML = '<div id ="blitz-container" />';

    blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1');
    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1');
  });

  test('should add multiple classes', function() {
    document.body.innerHTML = '<div id ="blitz-container" />';

    blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1', 'blitz-class-2');
    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1 blitz-class-2');
  });

  test('should append to exisiting class if exist', function() {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0" />';

    blitzContainer = $('#blitz-container');

    blitzContainer.addClass('blitz-class-1');
    expect(blitzContainer.elements[0].className).toEqual('blitz-class-0 blitz-class-1');
  });

  test('should remove a class', function() {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0" />';

    blitzContainer = $('#blitz-container');

    blitzContainer.removeClass('blitz-class-0');
    expect(blitzContainer.elements[0].className).toEqual('');
  });

  test('should remove multiple classes', function() {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1" />';

    blitzContainer = $('#blitz-container');

    blitzContainer.removeClass('blitz-class-0', 'blitz-class-1');
    expect(blitzContainer.elements[0].className).toEqual('');
  });

  test('should return true if element has the given class', function() {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1" />';

    blitzContainer = $('#blitz-container');

    expect(blitzContainer.hasClass('blitz-class-0')).toBeTruthy();
  });

  test('should return false if element doesn\'t the given class', function() {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1" />';

    blitzContainer = $('#blitz-container');

    expect(blitzContainer.hasClass('blitz-class-10')).toBeFalsy();
  });

  test('should toggle a class', function() {
    document.body.innerHTML = '<div id ="blitz-container" class="blitz-class-0 blitz-class-1" />';

    blitzContainer = $('#blitz-container');
    blitzContainer.toggleClass('blitz-class-0')

    expect(blitzContainer.elements[0].className).toEqual('blitz-class-1');
  });
});
