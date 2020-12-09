function emptyAction () {
    // console.log('Current execute action is empty!')
}

class Actions {
    actions = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    }

    /**
     * 
     * @param {设置actions} actions 
     */
    setActions (actions) {
        // console.log('actions', actions)
        this.actions = actions
    }

    /**
     * 映射
     * @param  {...any} args 
     */
    onGlobalStateChange (...args) {
        return this.actions.onGlobalStateChange(...args)
    }

    setGlobalState (...args) {
        return this.actions.setGlobalState(...args)
    }
}

const actions = new Actions()

export default actions