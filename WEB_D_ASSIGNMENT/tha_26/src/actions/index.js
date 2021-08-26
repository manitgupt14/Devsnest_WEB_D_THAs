

const Username = (item) =>{
    return {
        type: "NameChange",
        payload: item,
    };
};

const   Usermail = (val) => {
    return {
        type : "MailChange",
        payload : val ,
    };
};

export {Username ,Usermail} ;