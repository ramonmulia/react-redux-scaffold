let loadReducer = function(load = false, action) {
    switch (action.type) {
        case 'APPLY_LOAD':
            return action.apply
        default:
            return false;
    }
}

export default loadReducer
