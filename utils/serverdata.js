const fetch = require('node-fetch')
const folderQuery = `
query Docs($id: ID!) {
  root: Folder(id: $id) {
    id
    name
    folders {
      name
      id
      documents {
       _meta {
          id
          name
          updatedAt
          published
        }
        ... on DocPage {
          navName
          docs
          path
        }
      }
      folders {
        id
        name
        documents {
          _meta {
            id
            name
            updatedAt
            published
          }
          ... on DocPage {
            navName
            docs
            path
          }
        }
      }
    }
    documents {
      _meta {
        id
        updatedAt
        published
      }
    }
  }
}
`

const groupByPaths = (folders, state = {}, names = []) => {
  return folders.reduce((_state, folder) => {
    const name = [...names, folder.name.split(' ').join('-').toLowerCase()].join('/')
    const documents = [...folder.documents]
      .forEach(document => {
        _state[name + document.path] = document
      })

    if (folder.folders && folder.folders.length) {
      groupByPaths(folder.folders, _state, [...names, name])
    }
    return _state
  }, state)
}

export const formatRoutes = (resp) => {
  return groupByPaths(resp.data.root.folders)
}

export const getFolder = () => {
  return fetch('https://api.tipe.io/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: folderQuery,
      variables: {
        id: '5a9b7bb201dd4300134cd6dd'
      }
    }),
    headers: {
      'Content-Type': 'application/json',
      'Tipe-Id': process.env.TIPE_ID,
      Authorization: process.env.TIPE_API_KEY
    }
  })
    .then(res => res.json())
}
