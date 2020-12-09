class Shared {
    getToken () {
        return localStorage.getItem('token') || ''
    }

    setToken (token) {
        localStorage.setItem('token', token)
    }
}

class SharedModule {
    static shared = new Shared()

    static overloadShared (shared) {
        SharedModule.shared = shared
    }

    static getShared () {
        return SharedModule.shared
    }
}

export default SharedModule