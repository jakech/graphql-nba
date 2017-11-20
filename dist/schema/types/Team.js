'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nba = require('nba');

var _nba2 = _interopRequireDefault(_nba);

var _graphql = require('graphql');

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeamType = new _graphql.GraphQLObjectType({
    name: 'Team',
    description: '...',

    fields: function fields() {
        return {
            id: {
                type: _graphql.GraphQLString,
                resolve: function resolve(t) {
                    return t.teamId;
                }
            },
            name: {
                type: _graphql.GraphQLString,
                resolve: function resolve(t) {
                    return t.teamName;
                }
            },
            city: {
                type: _graphql.GraphQLString,
                resolve: function resolve(t) {
                    return t.teamCity;
                }
            },
            roster: {
                type: new _graphql.GraphQLList(_Player2.default),
                resolve: function resolve(t, args, _ref) {
                    var loaders = _ref.loaders;
                    return loaders.roster.load(t.teamId).then(loaders.player.id.loadMany.bind(loaders.player.id));
                }
            }
        };
    }
});

exports.default = TeamType;