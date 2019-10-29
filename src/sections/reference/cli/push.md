---
parent: cli
order: 3
---
## push
`$ tipe push`

Pushes your local content templates up to your Tipe project. Any changes will be reflected on the Tipe API and Dashboard. Any template errors will be printed out on the console.

### Usage
```
tipe push 

OPTIONS

  --apikey <key>          API Key                  optional                    
  --project <id>          Tipe project             optional                    
  --dry -d                Dry run                  optional      default: false
  --config -c <path>      Path to tipe config      required    
```

### Example
```
tipe push -c tipe.js -a APIKEY -p PROJECTID
```
