# Eve GQL ESI

This project is the first in an attempt to create a public supergraph of Eve Online APIs.

Here we add GraphQL on top of ESI - nothing more, nothing less.

# Quickstart

These steps probably aren't enough.

1. Clone the repo
2. `npm install`
3. `npm run generate`
4. `npm start`

# Authentication

In order to make calls into this API you must be authenticated through EVE Online.

First get an access code:

https://login.eveonline.com/v2/oauth/authorize?response_type=code&client_id=f48027bf273c46e49cb417b201115e04&redirect_uri=http://localhost:3000/callback&scope=publicData

After authenticating this will produce a URL with a `code` query parmeter.

Then get a token:

https://login.eveonline.com/v2/oauth/token

With request body:

```
grant_type: "authorization_code"
code: "YOUR CODE"
```

This will return an access token you can send along in your requests as a bearer token.
