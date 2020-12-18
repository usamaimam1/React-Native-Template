import * as actions from './types'

export const SetUser = function (user) {
    return { type: actions.SET_USER, payload: { user: user } }
}
export const ResetUser = function () {
    return { type: actions.RESET_USER }
}