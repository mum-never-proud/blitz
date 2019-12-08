import $ from '../src/blitz';

describe('attr', function() {
  let blitzContainer;

  beforeEach(function() {
    document.body.innerHTML = '<div id ="blitz-container" title="replaceable title">replaceable content</div>';
  });

  test('should replace content of an element', function() {
    const text = 'blitz test text';

    blitzContainer = $('#blitz-container');

    blitzContainer.attr('title', text);
    expect(blitzContainer.elements[0].getAttribute('title')).toEqual(text);
  });

  test('should add multiple classes', function() {
    blitzContainer = $('#blitz-container');

    expect(blitzContainer.attr('title')).toEqual('replaceable title');
  });
});
