import $ from '../src/blitz';

describe('css', function() {
  let blitzContainer;

  beforeEach(function() {
    document.body.innerHTML = '<div id ="blitz-container" />';
    blitzContainer = $('#blitz-container');
  });

  describe('both params are present', function() {
    test('should set background to red', function() {
      blitzContainer.css('background', 'red');

      expect(blitzContainer.elements[0].style.background).toEqual('red');
    });
  });

  describe('when one param is present', function() {
    test('should return value param type is a string', function() {
      blitzContainer.css('background', 'red');

      expect(blitzContainer.css('background')).toEqual('red');
    });

    test('should set style when param type is an object', function() {
      blitzContainer.css({ background: 'red', color: 'white' });

      expect(blitzContainer.css('background')).toEqual('red');
      expect(blitzContainer.css('color')).toEqual('white');
    });
  });
});
