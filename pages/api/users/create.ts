// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NowRequest, NowResponse } from '@vercel/node'
import { ApolloServer, gql } from 'apollo-server-micro'

// export default (req: NowRequest, res: NowResponse) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/users/create' })