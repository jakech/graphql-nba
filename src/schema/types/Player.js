import { GraphQLObjectType, GraphQLString } from 'graphql'
import TeamType from './Team'

const PlayerType = new GraphQLObjectType({
    name: 'Player',
    description: '...',
    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: p => p.personId
        },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        team: {
            type: TeamType,
            resolve: (p, args, { loaders }) => loaders.team.id.load(p.teamId)
        }
    })
})

export default PlayerType
