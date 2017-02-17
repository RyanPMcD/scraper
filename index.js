var scrapeIt = require("scrape-it");


var schema = {
  'sub-nav': {
    listItem: '#nav li',
    name: 'Links',
    data: {
      link: 'a',

    }
  }
};

function callback(err, page) {
  return err ? console.error('error', err) : console.log('page', page);
}


scrapeIt(
  'http://www.flockboston.com/',
  schema,
  callback
);