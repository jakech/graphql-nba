import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql'

import PlayerType from './types/Player'
import TeamType from './types/Team'

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
        player: {
            type: PlayerType,
            args: {
                id: { type: GraphQLString },
                name: { type: GraphQLString }
            },
            resolve: (root, { id, name }, { loaders }) => {
                return id
                    ? loaders.player.id.load(id)
                    : loaders.player.name.load(name)
            }
        },
        team: {
            type: TeamType,
            args: {
                id: { type: GraphQLString },
                name: { type: GraphQLString }
            },
            resolve: (root, { id, name }, { loaders }) => {
                return id
                    ? loaders.team.id.load(id)
                    : loaders.team.name.load(name)
            }
        }
    })
})

export default new GraphQLSchema({
    query: QueryType
})
