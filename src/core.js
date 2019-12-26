import extend from './util/extend';
import querySelector  from './util/query-selector';

import * as css from './mixins/css';
import * as dom from './mixins/dom';
import * as val from './mixins/val';
import * as html from './mixins/html';
import * as attr from './mixins/attr';
import * as klass from './mixins/klass';
import * as events from './mixins/events';

class Blitz {
  constructor(selector) {
    this.selector = selector;
    this.elements = querySelector(selector);

    return this;
  }
}

const $ = function(selector) {
  return new Blitz(selector);
}

$.fn = Blitz.prototype = {
  get length() {
    return this.elements.length;
  }
};

extend($.fn, css, klass, html, attr, dom, events, val);
extend($, { extend });

export default $;
