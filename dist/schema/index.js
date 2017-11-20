'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nba = require('nba');

var _nba2 = _interopRequireDefault(_nba);

var _graphql = require('graphql');

var _Player = require('./types/Player');

var _Player2 = _interopRequireDefault(_Player);

var _Team = require('./types/Team');

var _Team2 = _interopRequireDefault(_Team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryType = new _graphql.GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: function fields() {
        return {
            player: {
                type: _Player2.default,
                args: {
                    id: { type: _graphql.GraphQLString },
                    name: { type: _graphql.GraphQLString }
                },
                resolve: function resolve(root, _ref, _ref2) {
                    var id = _ref.id,
                        name = _ref.name;
                    var loaders = _ref2.loaders;

                    return id ? loaders.player.id.load(id) : loaders.player.name.load(name);
                }
            },
            team: {
                type: _Team2.default,
                args: {
                    id: { type: _graphql.GraphQLString },
                    name: { type: _graphql.GraphQLString }
                },
                resolve: function resolve(root, _ref3, _ref4) {
                    var id = _ref3.id,
                        name = _ref3.name;
                    var loaders = _ref4.loaders;

                    return id ? loaders.team.id.load(id) : loaders.team.name.load(name);
                }
            }
        };
    }
});

exports.default = new _graphql.GraphQLSchema({
    query: QueryType
});