import express from 'express'
import graphQLHTTP from 'express-graphql'
import schema from './schema'
import loaders from './loaders'
import path from 'path'

const app = express()

app.use(
    '/api',
    graphQLHTTP(res => {
        return {
            context: { loaders },
            schema,
            graphiql: true
        }
    })
)

app.use('/', express.static(path.join(__dirname, '/client')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/client/index.html')))

app.listen(3000)
