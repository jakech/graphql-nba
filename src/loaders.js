import NBA from 'nba'
import DataLoader from 'dataloader'

function makeLoader(fn) {
    return new DataLoader(keys => Promise.all(keys.map(fn)))
}

function fetchPlayerInfo(id) {
    return NBA.stats.playerInfo({ PlayerID: id }).then(data => {
        const { commonPlayerInfo } = data
        return commonPlayerInfo[0]
    })
}

function fetchTeamInfo(id) {
    return NBA.stats.teamInfoCommon({ TeamID: id }).then(data => {
        const { teamInfoCommon } = data
        return teamInfoCommon[0]
    })
}

function fetchRoster(teamId) {
    return NBA.stats.commonTeamRoster({ TeamID: teamId }).then(data => {
        const { commonTeamRoster } = data
        return commonTeamRoster.map(p => p.playerId)
    })
}

function playerByName(name) {
    return fetchPlayerInfo(NBA.playerIdFromName(name))
}

function teamByName(name) {
    return fetchTeamInfo(NBA.teamIdFromName(name))
}

export default {
    player: {
        name: makeLoader(playerByName),
        id: makeLoader(fetchPlayerInfo)
    },
    team: {
        name: makeLoader(teamByName),
        id: makeLoader(fetchTeamInfo)
    },
    roster: makeLoader(fetchRoster)
}
