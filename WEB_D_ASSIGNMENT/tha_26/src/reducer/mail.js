const MailReducer = (state = "" , action) => {
    if(action.type === "MailChange")
    return action.payload;

    return state;
};

export default MailReducer;
