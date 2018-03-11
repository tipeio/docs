import {getFolder, formatRoutes} from '../utils/serverdata'
import { getUser } from '../utils/user'

export const state = () => ({
  docsByRoutes: {},
  docsFolder: {},
  user: {}
})


export const mutations = {
  addDocsForRoutes (state, docs) {
    state.docsByRoutes = docs
  },
  addRootFolder (state, folder) {
    state.docsFolder = folder
  },
  addUser (state, user) {
    state.user = user
  }
}

export const actions = {
  getUser ({commit}) {
    return getUser()
      .then(user => {
        if (user) {
          commit('addUser', user)
          return user
        }
        return false
      })
  },
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
