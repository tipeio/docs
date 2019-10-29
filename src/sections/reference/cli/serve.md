---
parent: cli
order: 4
---
## serve
`$ tipe serve`

Starts a local API with generated documents based on your content templates in your Tipe config file. 

Use this command with the Tipe SDK to prototype your content templates before pushing them up to your Tipe project. Also allows you to build your app without having to wait for real content from your team.

Server will create a json file on the current directory to store the mock content. The API restarts whenever you make changes to your templates.

### Usage
```
tipe serve 

--port <port>           Port for offline mock API      optional      default: 8300     
--config -c <path>      Path to config file            optional      default: "tipe.js"
--watch -w <watch>      Watch tipe.js for changes      optional      default: true    
```

### Example
```
tipe serve -c tipe.js --port PORT
```
