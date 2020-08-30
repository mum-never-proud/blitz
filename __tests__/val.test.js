import $ from 'src/blitz';

describe('val', () => {
  beforeEach(() => {
    document.body.innerHTML = '<input id ="blitz-input" type="text" value="replaceable content"></div>';
  });

  test('should replace content of an element', () => {
    const text = 'blitz test text';
    const blitzInput = $('#blitz-input');

    blitzInput.val(text);

    expect(blitzInput.elements[0].value).toEqual(text);
  });

  test('should get content of an element', () => {
    const blitzInput = $('#blitz-input');

    expect(blitzInput.val()).toEqual('replaceable content');
  });
});
