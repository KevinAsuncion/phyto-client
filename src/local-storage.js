export const loadAuthToken = () => {
    return window.localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        window.localStorage.setItem('authToken', authToken);
    } catch (e) { }
};

export const clearAuthToken = () => {
    try {
        window.localStorage.removeItem('authToken');
    } catch (e) { }
};
