interface setter {
    loggedIn: boolean
}

interface getter {
    isAuthenticated: () => boolean;
}

const setAuth: setter = {
    loggedIn: false
}

const getAuth: getter = {
    isAuthenticated: () => !!setAuth.loggedIn
}

export default {
    setAuth,
    getAuth
}