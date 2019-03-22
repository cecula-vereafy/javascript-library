$.getScript("./vereafy.js", () => {
  // Making Initialization Request
  vereafy.apiKey = "api_key";
  var sendData = { mobile: "mobile_no_to_be_verify" };
  vereafy.init(sendData, function(response) {
    // response will return a json
  });

  // Resend Request
  vereafy.apiKey = "api_key";
  var sendData = { pinRef: "Your_pinRef", token: "Your_token" };
  vereafy.complete(sendData, function(response) {
    // response will return a json
  });

  // Complete Request
  vereafy.apiKey = "api_key";
  var sendData = { pinRef: "Your_pinRef", token: "Your_token" };
  vereafy.complete(sendData, function(response) {
    // response will return a json
  });

  // Get Balance
  vereafy.apiKey = "api_key";
  vereafy.sendData(response => {
    // response will return a json
  });
});
