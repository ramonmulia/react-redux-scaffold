let actions = {
    createNewUserId: function() {
        return {
            type: 'CREATE_USER_ID',
            id: Math.round(Math.random() * 100)
        }
    },

    createNewUserIdIfOdd: function() {
        return (dispatch, getState) => {
            const {
                user
            } = getState()
            if (user.id % 2 === 0) {
                return
            }
            dispatch(actions.createNewUserId())
        }
    },

    createNewUserIdAsync: function() {
        return (dispatch) => {
            dispatch(actions.load(true))
            setTimeout(() => {
                dispatch(actions.createNewUserId())
                dispatch(actions.load(false))
            }, 2500)
        }
    },

    load: function(toggle, index) {
        return {
            type: 'APPLY_LOAD',
            apply: toggle
        }
    }
}

export default actions
