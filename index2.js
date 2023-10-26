const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes);  // You can further format this if needed
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
