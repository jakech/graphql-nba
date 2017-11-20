'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nba = require('nba');

var _nba2 = _interopRequireDefault(_nba);

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeLoader(fn) {
    return new _dataloader2.default(function (keys) {
        return Promise.all(keys.map(fn));
    });
}

function fetchPlayerInfo(id) {
    return _nba2.default.stats.playerInfo({ PlayerID: id }).then(function (data) {
        var commonPlayerInfo = data.commonPlayerInfo;

        return commonPlayerInfo[0];
    });
}

function fetchTeamInfo(id) {
    return _nba2.default.stats.teamInfoCommon({ TeamID: id }).then(function (data) {
        var teamInfoCommon = data.teamInfoCommon;

        return teamInfoCommon[0];
    });
}

function fetchRoster(teamId) {
    return _nba2.default.stats.commonTeamRoster({ TeamID: teamId }).then(function (data) {
        var commonTeamRoster = data.commonTeamRoster;

        return commonTeamRoster.map(function (p) {
            return p.playerId;
        });
    });
}

function playerByName(name) {
    return fetchPlayerInfo(_nba2.default.playerIdFromName(name));
}

function teamByName(name) {
    return fetchTeamInfo(_nba2.default.teamIdFromName(name));
}

exports.default = {
    player: {
        name: makeLoader(playerByName),
        id: makeLoader(fetchPlayerInfo)
    },
    team: {
        name: makeLoader(teamByName),
        id: makeLoader(fetchTeamInfo)
    },
    roster: makeLoader(fetchRoster)
};