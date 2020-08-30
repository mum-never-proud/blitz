import $ from 'src/blitz';

describe('val', () => {
  beforeEach(() => {
    document.body.innerHTML = '<input id ="blitz-input" type="text" value="replaceable content"></div>';
  });

  test('should set the value of each element in the collection', () => {
    const text = 'blitz test text';
    const blitzInput = $('#blitz-input');

    blitzInput.val(text);

    expect(blitzInput.elements[0].value).toEqual(text);
  });

  test('should get the value from the first element in the collection', () => {
    const blitzInput = $('#blitz-input');

    expect(blitzInput.val()).toEqual('replaceable content');
  });
});
