import {getFolder, formatRoutes} from '../utils/serverdata'

export const state = () => ({
  docsByRoutes: {},
  docsFolder: {}
})


export const mutations = {
  addDocsForRoutes (state, docs) {
    state.docsByRoutes = docs
  },
  addRootFolder (state, folder) {
    state.docsFolder = folder
  }
}


export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    return getFolder()
      .then(resp => {
        commit('addRootFolder', resp.data.root)
        const routes = formatRoutes(resp)
        commit('addDocsForRoutes', routes)
        return resp.data.root
      })
  }
}
