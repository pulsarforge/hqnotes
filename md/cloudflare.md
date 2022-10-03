---
title: cloudflare workers
links: 
    - https://pulsarforge.io
tags:
    - Cloudflare
    - Workers
    - Edge
    - Deployments
latest: 10-01
---

Deployed from: Cloudflare, Workers, Edge, Deployments.


Install npm module and make it globally available
```cmd
npm install -g wrangler
```


Auth in cloudflare
```cmd
wrangler login
```


Create the wrangler.toml file
```cmd
wrangler init <YOUR_WORKER>
```


Use template to deploy website (Optional)
```cmd
npm init cloudflare my-app https://github.com/cloudflare/worker-sites-template
```
[Workers Templates & Docs](https://developers.cloudflare.com/workers/get-started/quickstarts/)


Command for development purposes
```cmd
wrangler dev
```


Config your wrangler.toml with the needed params according to your needs.

Publish your cloudflare worker
```cmd
wrangler publish
```

Learn - Code - Ship.