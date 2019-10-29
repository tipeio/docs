---
parent: config
order: 2
---
## Examples

### Simple Example
The most simplest version of a `tipe.js` config file needs to contain only 1 property:

* `templates`

The `templates` property should be a valid obeject of [templates](https://tipe/io/docs/reference/templates). 

```javascript
module.exports = {
  templates: {
    // ... your templates here
  }
}
```
> You don't need a Tipe account to use templates, becuase the Tipe CLI can use the templates to create an offline mock API.


### Property Reference
Here are all the properties that a `tipe.js` config file uses:

* `templates` (required): Object of valid content templates
* `offlineDBPath`: relative path for the offline API to store mock documents
