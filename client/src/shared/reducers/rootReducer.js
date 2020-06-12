const initState = {
    isLoggedIn: false,
    userProfile: null,
    userId: null,
    token: null
}

const rootReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOGIN':
            // const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
            return{
                ...state,
                isLoggedIn: !!action.payload.token,
                userProfile: action.payload.user,
                userId: action.payload.userId,
                token: action.payload.token
            }
        case 'LOGOUT':
            return{
                ...state,
                isLoggedIn: false,
                userProfile: null,
                userId: null,
                token: null
            }
        default:
            return state;
    }
}

export default rootReducer;