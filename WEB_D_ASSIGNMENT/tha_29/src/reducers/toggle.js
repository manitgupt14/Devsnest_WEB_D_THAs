

const toggle = ( state = false ,action) => {
        if(action.type === "TOGGLE")
        return !state;
        return state;
}

export default toggle;