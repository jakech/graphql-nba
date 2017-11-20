'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _loaders = require('./loaders');

var _loaders2 = _interopRequireDefault(_loaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _expressGraphql2.default)(function (res) {
    return {
        context: { loaders: _loaders2.default },
        schema: _schema2.default,
        graphiql: true
    };
}));

app.listen(3000);