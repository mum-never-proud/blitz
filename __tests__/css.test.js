import $ from '../src/blitz';

describe('css', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id ="blitz-container"></div>';
  });

  describe('two params are present', () => {
    test('should set background to red', () => {
      const blitzContainer = $('#blitz-container');

      blitzContainer.css('background', 'red');

      expect(blitzContainer.css('background')).toEqual('red');
    });
  });

  describe('one param is present', () => {
    test('should return value param type is a string', () => {
      const blitzContainer = $('#blitz-container');

      blitzContainer.css('background', 'red');

      expect(blitzContainer.css('background')).toEqual('red');
    });

    test('should set style when param type is an object', () => {
      const blitzContainer = $('#blitz-container');

      blitzContainer.css({ background: 'red', color: 'white' });

      expect(blitzContainer.css('background')).toEqual('red');
      expect(blitzContainer.css('color')).toEqual('white');
    });
  });
});
