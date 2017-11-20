'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Team = require('./Team');

var _Team2 = _interopRequireDefault(_Team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayerType = new _graphql.GraphQLObjectType({
    name: 'Player',
    description: '...',
    fields: function fields() {
        return {
            id: {
                type: _graphql.GraphQLString,
                resolve: function resolve(p) {
                    return p.personId;
                }
            },
            firstName: { type: _graphql.GraphQLString },
            lastName: { type: _graphql.GraphQLString },
            team: {
                type: _Team2.default,
                resolve: function resolve(p, args, _ref) {
                    var loaders = _ref.loaders;
                    return loaders.team.id.load(p.teamId);
                }
            }
        };
    }
});

exports.default = PlayerType;