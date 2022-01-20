const request = require('request');
let breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  if (error !== null) {
    console.log('error: the reuqest has failed! something must be wrong on our end oops '); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("That's not a valid breed!");
  } else {
    console.log(data[0]["description"]);
  }
});