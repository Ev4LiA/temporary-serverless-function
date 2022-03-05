## First Function

#### netlify.toml

- Tell info to netlify

#### functions folder

- Contains function.js file.
- A function return a promise

- Below is another way beside the one written in the file to declare _exports.handler_

- What we return: _statusCode_, and _body_ (always a **string**, if it an **object**, we need to stringify it)

```Javascript
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: 'Hello',
  })
}
```

#### Status Code

- HTTP request: local computer sends a request to server
- HTTP response status code: _200 Ok_, _201 Creater_, _400 Bad Request_, _404 Not Found_, _500 Internal Server: Error_

## Redirects

- The original url is too long (_/.netlify/functions/..._). We will make it shorter with **Redirects**
- Redirect url to another url: _statusCode: 301_

```Javascript
[[redirects]]
from = '' // Redirect user from - short URL
to = '' // Redirect user to - long URL
sttusCode = 200 // Status Code
```
