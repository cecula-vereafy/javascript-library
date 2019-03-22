## Vereafy Javascript Library

- Introduction
- Initialization
- Resend
- Completion
- Get Balance
- Introduction

---

Vereafy is an SMS based 2-factor authentication services that uses machine learning to understand the causes of OTP delivery failures and resolves them instantly to ensure your login and sign up OTPs deliver.

- Introduction
  The Vereafy JavaScript Library Project was created to enable JavaScript developers integrate seamlessly with the Vereafy API.

- Initialization
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

- Resend
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

- Completion
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
