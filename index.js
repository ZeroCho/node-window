var jsdom = require('jsdom');

if (typeof window === 'undefined') {
  window = jsdom.jsdom().defaultView;
}

module.exports = window;