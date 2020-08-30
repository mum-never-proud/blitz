import querySelector from 'utils/query-selector';

describe('selector', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="blitz-container" class="blitz-container"></div>';
  });

  test('select element by id', () => {
    expect(querySelector('#blitz-container').length).toEqual(1);
  });

  test('selects only one element by id', () => {
    document.body.innerHTML += '<div id="blitz-container"></div>';

    expect(querySelector('#blitz-container').length).toEqual(1);
  });

  test('select all elements by classname', () => {
    document.body.innerHTML += '<div class="blitz-container"></div>';

    expect(querySelector('.blitz-container').length).toEqual(2);
  });

  test('select all elements by tagname', () => {
    document.body.innerHTML += '<div></div>';

    expect(querySelector('div').length).toEqual(2);
  });

  test('complex queries', () => {
    document.body.innerHTML = '<div data-info="blitz-info"></div>';
    document.body.innerHTML += '<div id="blitz-container"><p id="blitz-para"></p></div>';

    expect(querySelector('[data-info="blitz-info"]').length).toEqual(1);
    expect(querySelector('#blitz-container>#blitz-para').length).toEqual(1);
  });

  test('returns empty array when element not in DOM', () => {
    expect(querySelector('p').length).toEqual(0);
  });
});
