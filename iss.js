const request = require('request');

const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';
  
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

module.exports = { fetchMyIP };

const fetchCoordsByIP = function(ip, callback) {
  const url = `https://ipwho.is/${ip}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.success) {
      callback(data.message, null);
      return;
    }
    const coords = {
      latitude: data.latitude,
      longitude: data.longitude
    };
    callback(null, coords);
  });
}
 //////check to do list && instructions see:: week5 in courses