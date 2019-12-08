import $ from '../src/blitz';

describe('klass', function() {
  let blitzContainer;

  beforeEach(function() {
    document.body.innerHTML = '<div id ="blitz-container">replaceable content</div>';
  });

  test('should replace content of an element', function() {
    const text = 'blitz test text';

    blitzContainer = $('#blitz-container');

    blitzContainer.html(text);
    expect(blitzContainer.elements[0].innerHTML).toEqual(text);
  });

  test('should get content of an element', function() {
    blitzContainer = $('#blitz-container');

    expect(blitzContainer.html()).toEqual('replaceable content');
  });
});
