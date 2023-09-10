const https = require('https');

function checkInternetConnection(uri) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const request = https.get(uri, (response) => {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      if (elapsedTime < 500) {
        resolve('good');
      } else if (elapsedTime < 5000) {
        resolve('fine');
      } else {
        reject('terrible');
      }

      response.on('data', () => {}); // Consume the response data
    });

    request.on('error', () => {
      reject('terrible');
    });

    request.end();
  });
}

const uri = 'https://www.google.com';

checkInternetConnection(uri)
  .then((result) => {
    console.log(`Internet connection is ${result}`);
  })
  .catch((error) => {
    console.error(`Internet connection is ${error}`);
  });