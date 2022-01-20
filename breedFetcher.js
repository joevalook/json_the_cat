const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error !== null) {
      return callback(('error: the reuqest has failed! something must be wrong on our end oops '), null); // Print the error if one occurred
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(("That's not a valid breed!"), null);
    } else {
      return callback(null,(data[0]["description"]));
    }
  });
};

module.exports = { fetchBreedDescription };