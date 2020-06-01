export function authReducer(state, action) {
    switch (action.type) {
        case "login":
            // Do something
            return { user: { username: 'example'}, expiresAt: Date.now() + 1000000 };
        case "logout":
            // Do something
            return { user: {}, expiresAt: null };
        default:
            return state;
    }
}