'use strict';

import scrape from 'website-scraper';
import MyResourceSaver from './resourceSaver';
import rimraf from 'rimraf';
import cheerio from 'cheerio';
import config from './config.js';

const script = '<script>document.addEventListener("DOMContentLoaded", function(event) {console.log("DOM fully loaded and parsed");});</script>';

const options = {
  urls: config.urls,
  directory: config.directory
}

const perform = () => {
  scrape(options).then((result) => {
    console.log('Saved to ' + options.directory);
  }).catch((err) => {
    console.log(err);
  });
}

rimraf(options.directory, perform);

