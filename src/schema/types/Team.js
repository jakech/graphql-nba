import NBA from 'nba'
import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import PlayerType from './Player'

const TeamType = new GraphQLObjectType({
    name: 'Team',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: t => t.teamId
        },
        name: {
            type: GraphQLString,
            resolve: t => t.teamName
        },
        city: {
            type: GraphQLString,
            resolve: t => t.teamCity
        },
        roster: {
            type: new GraphQLList(PlayerType),
            resolve: (t, args, { loaders }) =>
                loaders.roster
                    .load(t.teamId)
                    .then(loaders.player.id.loadMany.bind(loaders.player.id))
        }
    })
})

export default TeamType
