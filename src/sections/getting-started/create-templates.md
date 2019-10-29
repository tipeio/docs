---
parent: gettingStarted
order: 3
---

## Create content templates
[Content templates](https://tipe.io/docs/reference/template) describe the shape of the content you want to manage in your project. As a developer, you have complete control over the content templates. Content creators on your team will be able to create documents that are based from these templates.

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
          name: 'Hero CTA',
          type: 'button'
        }
      }
    }
  }
}
```
