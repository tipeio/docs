---
title: Getting started
date: 2018-09-15 07:42:34
slug: introduction/getting-started
---
import Next from '~/components/Next.vue'

## Goals
**On this page you'll learn how to**:

✅ Install the Tipe CLI

✅ Create content templates

✅ Prototype with the offline API

✅ Install the Tipe SDK

✅ Use the SDK to get content

✅ Going to production


## Install the Tipe CLI
The [Tipe CLI]() is used to interact with your Tipe project and its [templates](). You can install it with [Yarn]() or [NPM]()
```
npm i -g @tipe/cli
yarn global add @tipe/cli
```

## Create content templates
[Content templates]() describe the shape of the content you want to manage in your project. As a developer, you have complete control over the content templates. Content creators on your team will be able to create documents that are based from these templates.

**Create a file named `tipe.js` on the root on your project.**

```javascript
// tipe.js

module.exports = {
  templates: {
    home: {
      name: 'Home',
      fields: {
        heroImage: {
          name: 'Hero Image',
          type: 'image'
        },
        heroTitle: {
          name: 'Hero Title',
          type: 'text'
        },
        mainCtaButton: {
          name: 'Hero CTA'
          type: 'button'
        }
      }
    }
  }
}
```
## Prototype with the offline mock API
The Tipe CLI comes with an offline API that generates mock content based on your templates. Its great for prototyping your templates to get them just right. You also aren't stuck waiting on your content team to create content just so you can build your app.

**Start the offline API**
```
tipe serve
```
## Install the Tipe SDK
You can install the Tipe SDK with Yarn or NPM
```
npm i @tipe/js
yarn add @tipe/js
```

## Use the SDK to get content
The SDK can interact with the offline API to get mock content

```jsx
// app.js
const React = require('react')
const tipe = require('@tipe/js')({offline: true}) // use the offline API

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: {}
    }
  }
  componentDidMount() {
    tipe.document.list({template: 'home'})
      .then(result => this.setState({content: result.data[0]})) // .list() returns many documents
  }

  render() {

    return (
      <div style={{backgroundImage: `url(${this.content.fields.heroImage.value})`}}>

        <h1>{this.content.fields.heroTitle.value}</h1>

        <button>{this.content.fields.mainCtaButton}</button>

      <div>
    )
  }
}
```

## Going to production
In production, you'll want real content from your team.

1. **[Create an account on Tipe](https://tipe.io?rel=cli) and then a new project**
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

<Next message="Nice job 🏆. Keep going to learn how to get the best out of templates." to="/references/templates"/>
