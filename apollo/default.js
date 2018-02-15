import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {

  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        Authorization: ctx.env.TIPE_API_KEY,
        'Tipe-Id': ctx.env.TIPE_ID
      }
    })
    return forward(operation)
  })

  const httpLink = new HttpLink({
    uri: 'https://api.tipe.io/graphql'
  })

  const appLink = ApolloLink.from([
    middlewareLink,
    httpLink
  ])

  return {
    cache: new InMemoryCache(),
    link: appLink
  }
}
