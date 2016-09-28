let userReducer = function(user = {}, action) {
    console.log('user', user);
    switch (action.type) {
        case 'CREATE_USER_ID':
            return {
                username: user.username,
                id: action.id
            }
        default:
            return user;
    }
}

export default userReducer
