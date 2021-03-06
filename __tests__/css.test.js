import $ from 'src/blitz';

describe('css', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id ="blitz-container"></div>';
  });

  describe('two params are present', () => {
    test('should set style for each element in the collection', () => {
      const blitzContainer = $('#blitz-container');

      blitzContainer.css('background', 'red');

      expect(blitzContainer.css('background')).toEqual('red');
    });
  });

  describe('one param is present', () => {
    test('should get the value of a style property for the first element', () => {
      const blitzContainer = $('#blitz-container');

      blitzContainer.css('background', 'red');

      expect(blitzContainer.css('background')).toEqual('red');
    });

    test('should set multiple style properties for each element in the collection', () => {
      const blitzContainer = $('#blitz-container');

      blitzContainer.css({ background: 'red', color: 'white' });

      expect(blitzContainer.css('background')).toEqual('red');
      expect(blitzContainer.css('color')).toEqual('white');
    });
  });
});
