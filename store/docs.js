export const state = () => ({
  docs: {}
})

export const mutations = {
  addDocs (state, docs) {
    state.docs = docs
  }
}
