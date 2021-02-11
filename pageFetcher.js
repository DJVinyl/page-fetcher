const request = require('request')
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  // writeFile function with filename, content and callback function
  const size = Buffer.byteLength(JSON.stringify(body));
  fs.writeFile(args[1], body, function (err) {
  if (err) throw err;
  console.log(`Downloaded and saved ${size} to ${args[1]}`);
  });
});