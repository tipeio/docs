---
parent: templates
order: 2
---
## Properties 

**Root**

| property  | type  | required  | description  |
|---|---|---|---:|
| id  | `String`  |  `true` | unique id of a template. Used on API responses  |
| name  | `String`  | `true`  | unique name of the template used on the Tipe dashboard  |
| disabled  | `Boolean`  | `false`  | prevent a template from being used on the dashboard to create documents. Documents already created will continue to be served from the API. |
| description  | `String`  |  `false` | template descritption to show on the dashboard |
| fields  | `Object`  |  `true` | fields object. Keyed by `field id`.  |
| refs  | `Object`  |  `false` | refs object. Keyed by `ref id`  |


**Field**

| property  | type  | required  | description  |
|---|---|---|---:|
| name  | `String`  |  `true` | field name used in the dashboard. Must be unique to the template.   |
| disabled  | `Boolean`  |  `false` | prevent field from being used on the dashboard. Field will continue to show in API responses.  |
| type  | `String`  |  `true` | Determines the field value type and field editor on the Tipe dashboard.  |


**Ref**

| property  | type  | required  | description  |
|---|---|---|---:|
| name  | `String`  |  `true` | field name used in the dashboard. Must be unique to the template.   |
| disabled  | `Boolean`  |  `false` | prevent field from being used on the dashboard. Field will continue to show in API responses.  |
| type  | `String`  |  `true` | Determines the field value type and field editor on the Tipe dashboard.  |
