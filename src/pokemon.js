var Promise = require('bluebird'),
    request = require('request');

module.exports = {
  
  // your code here
  pokemon:PokemonAPI

}

// your code here

function Pokemon( name ) {

  if(name === undefined) {
    throw new Error('No Pokemon Name Provided');
  }

  return new Promise( function (resolve, reject) {
      resolve(name);
  })

}

var PokemonAPI = new Pokemon();