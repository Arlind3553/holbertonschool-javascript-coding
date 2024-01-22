#!/usr/bin/node
const process = require('process');
const request = require('request');
const fs = require('fs');
const api = process.argv[2];
const filename = process.argv[3];

request(api, (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  fs.writeFile(filename, body, 'utf-8', (error) => {
    if (error) {
      console.error(error);
    }
  });
});
