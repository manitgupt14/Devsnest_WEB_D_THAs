const IncCounter = (num: number) => {
    return {
        type : "INC_COUNTER",
        payload: num
    };
}

const DecCounter = (num : number) => {
    return {
        type : "DEC_COUNTER",
        payload: num
    };
}

export {IncCounter, DecCounter};