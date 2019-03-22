const vereafy = {};
vereafy.apiKey = "";

// Initializing 2FA Request
vereafy.init = (dataObj, callback) => {
  httpRequest(dataObj, "init").then(response => {
    callback(response);
  });
};

// Resending 2FA Request
vereafy.resend = (dataObj, callback) => {
  httpRequest(dataObj, "resend").then(response => {
    callback(response);
  });
};

// Completing 2FA Request
vereafy.complete = (dataObj, callback) => {
  httpRequest(dataObj, "complete").then(response => {
    callback(response);
  });
};

// Get Balance
vereafy.balance = callback => {
  httpRequest("", "tfabalance", "GET").then(response => {
    callback(response);
  });
};

// httpRequest to Cecula api
function httpRequest(dataObj, endpoint, method) {
  return new Promise(resolve => {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        resolve(this.responseText);
      }
    });
    if (method === "GET") {
      // GET request Endpoint
      xhr.open("GET", "https://api.cecula.com/account/" + endpoint);
      xhr.setRequestHeader("authorization", "Bearer " + vereafy.apiKey);
      xhr.send(data);
    } else {
      // POST request Endpoint
      var data = JSON.stringify(dataObj);
      xhr.open("POST", "https://api.cecula.com/twofactor/" + endpoint);
      xhr.setRequestHeader("authorization", "Bearer " + vereafy.apiKey);
      xhr.setRequestHeader("content-type", "application/json");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.send(data);
    }
  });
}
