#!/usr/bin/node
const request = require('request');
const process = require('process');
const l = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2]

request(l, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode != 200) {
    console.error(`Response code : ${response.statusCode}`);
  } else {
    console.log(JSON.parse(body).tittle);
  }
});
