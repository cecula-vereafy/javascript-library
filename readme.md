## Vereafy JavaScript Library

- Introduction
- How to Get API Key
- Initialization
- Resend
- Completion
- Get Balance

---

Vereafy is an SMS based 2-factor authentication services that uses machine learning to understand the causes of OTP delivery failures and resolves them instantly to ensure your login and sign up OTPs deliver.

### Introduction

The Vereafy JavaScript Library Project was created to enable JavaScript developers integrate seamlessly with the Vereafy API.

### How to use this library

- First download the file into your project directory
- Replace the vereafy.apiKey with your api key inside the string
- Require this file in your project file
- Call any of the function you want to use in your file and put in the parameters and a callback function
- The parameters are passed as dataObj and are inputed in a JSON format /({"mobile":"23470xxxxxx"})/

### How to Get API Key

Your API Key is first generated when you register an app. To register an app,
Login to the Developers Dashboard, Navigate to Apps > Add, Type the name of your app and click **Submit**. The app will be registered and a new API Key will be generated. Copy the API key into your project

### or

click [developer.cecular.com](https://developer.cecula.com/docs/introduction/generating-api-key) to get started

### Initialization

The Vereafy 2fa initialization can be as simple as the following lines of code and Replace the values of sendData and vereafy.apiKey with your parameters

```js
vereafy.apiKey = "api_key";
var sendData = { mobile: "mobile_no_to_be_verify" };
vereafy.init(sendData, function(response) {
  // response will return a json as seen below
});
```

The Initialization method returns a response that should look like this:

```json
{
  "status": "success",
  "pinRef": 1293488527
}
```

### Resend

In a case where your app users get impatient and hits the retry link on your app form, just call the resend method this way: Replace the values of sendData and vereafy.apiKey with your parameters

```js
vereafy.apiKey = "api_key";
var sendData = { mobile: "2347085160602" };
vereafy.resend(sendData, function(response) {
  // response will return a json as seen below
});
```

The Resend method returns a response that should look like this:

```json
{
  "status": "success",
  "pinRef": 1293488527
}
```

### Completion

The Vereafy 2fa completion can be as simple as the following lines of code: Replace the values of sendData and vereafy.apiKey with your parameters

```js
var sendData = { pinRef: "Your_pinRef", token: "Your_token" };
vereafy.complete(sendData, function(response) {
  // response will return a json as seen below
});
```

The Completion method returns a response that should look like this if the parameters are correct:

```json
{
  "response": "success"
}
```

### Get Balance

To get your balance on Vereafy, the getbalance method is used this way: This method requires no parameter: Replace the value of vereafy.apiKey with your parameters

```js
vereafy.apiKey = "api_key";
vereafy.sendData(response => {
  // response will return a json as seen below
});
```

The get balance method returns a response that should look like:

```json
{
  "balance": 200
}
```
