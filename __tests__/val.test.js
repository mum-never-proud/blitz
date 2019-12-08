import $ from '../src/blitz';

describe('val', function() {
  let blitzInput;

  beforeEach(function() {
    document.body.innerHTML = '<input id ="blitz-input" type="text" value="replaceable content" />';
  });

  test('should replace content of an element', function() {
    const text = 'blitz test text';

    blitzInput = $('#blitz-input');

    blitzInput.val(text);
    expect(blitzInput.elements[0].value).toEqual(text);
  });

  test('should get content of an element', function() {
    blitzInput = $('#blitz-input');

    expect(blitzInput.val()).toEqual('replaceable content');
  });
});
