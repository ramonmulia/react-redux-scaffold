let loadReducer = function(load = {}, action) {
    switch (action.type) {
        case 'APPLY_LOAD':
            return action.apply
        default:
            return '';
    }
}

export default loadReducer
