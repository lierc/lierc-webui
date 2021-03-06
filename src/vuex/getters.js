import _ from 'lodash'

export function getActiveChannel(state) {
    return state.activeChannel
}

export function getActiveChannelConnectionId(state) {
    let connectionId = ''

    _.forEach(state.connections, function(connection, id) {
        if (_.includes(connection.channels, state.activeChannel)) {
            connectionId = id
            return true
        }
    })

    return connectionId
}

export function getChannels(state) {
    return _.sortBy(_.flatMap(state.connections, function(c) {
        return c.channels
    }), ['name'])
}

export function getConnections(state) {
    return state.connections
}

export function getServiceConnections(state) {
    return state.lierc.connections
}

export function getServiceUser(state) {
    return state.lierc.email
}

export function userIsAuthenticated(state) {
    return state.lierc.isAuthenticated
}
