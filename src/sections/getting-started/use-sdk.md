---
parent: gettingStarted
order: 6
---
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
