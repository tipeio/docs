import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {

  const middlewareLink = new ApolloLink((operation, forward) => {
    console.log(ctx.env)
    operation.setContext({
      headers: {
        Authorization: ctx.env.TIPE_API_KEY,
        'Tipe-Id': ctx.env.TIPE_ID
      }
    })
    return forward(operation)
  })

  const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql'
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
