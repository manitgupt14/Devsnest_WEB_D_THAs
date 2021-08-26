const LoginReducer = (state = "" , action) => {
        if(action.type === "NameChange")
        state=action.payload ;
        return state;
};


export default LoginReducer;