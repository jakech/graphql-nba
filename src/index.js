import express from 'express'
import graphQLHTTP from 'express-graphql'
import schema from './schema'
import loaders from './loaders'

const app = express()

app.use(
    graphQLHTTP(res => {
        return {
            context: { loaders },
            schema,
            graphiql: true
        }
    })
)

app.listen(3000)
