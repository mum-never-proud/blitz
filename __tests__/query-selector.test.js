import querySelector from '../src/util/query-selector';

describe('selector', function() {
  beforeEach(function() {
    document.body.innerHTML = '<div id="blitz-container" class="blitz-container" />';
  });

  test('select element by id', function() {
    expect(querySelector('#blitz-container').length).toEqual(1);
  });

  test('selects only one element by id', function() {
    document.body.innerHTML += '<div id="blitz-container" />';

    expect(querySelector('#blitz-container').length).toEqual(1);
  });

  test('select all elements by classname', function() {
    document.body.innerHTML += '<div class="blitz-container" />';

    expect(querySelector('.blitz-container').length).toEqual(2);
  });

  test('select all elements by tagname', function() {
    document.body.innerHTML += '<div />';

    expect(querySelector('div').length).toEqual(2);
  });

  test('complex queries', function() {
    document.body.innerHTML = '<div data-info="blitz-info" />';
    document.body.innerHTML += '<div id="blitz-container"><p id="blitz-para" /></div>'

    expect(querySelector('[data-info="blitz-info"]').length).toEqual(1);
    expect(querySelector('#blitz-container>#blitz-para').length).toEqual(1);
  });

  test('returns empty array when element not in DOM', function() {
    expect(querySelector('p').length).toEqual(0);
  });
});
