---
parent: gettingStarted
order: 7
---
## Going to production
In production, you'll want real content from your team.

1. **[Create an account on Tipe](https://tipe.io/signin?rel=docs) and then a new project**
2. **Push up your templates to your Tipe project**
```bash
tipe push --config tipe.js --project your-project-id --apikey your-api-key
```
3. **Invite your team to get started**
4. **Change SDK for Production**
```javascript
// add your project Id and api key and disabled offline API in a production environment
const tipe = require('@tipe/js')({
  offline: process.env.NODE_ENV !== 'production',
  project: YOUR_TIPE_PROJECT_ID,
  key: YOUR_TIPE_API_KEY
})
```
> If you've already hooked up all your components to recieve content using the offline API, then going to production won't require any code change to your components. The content your team will create will be the exact same shape as the content the offline API served when you were building your app 😎
