import React, { useState } from "react";
const Context = React.createContext();

export default Context;

const wait = (time) => {
  return new Promise ( (resolve) => {
      setTimeout(resolve,time)
  })
}

export function Authco ({children}){
    const [togg ,setTogg] = useState(false);
    const [loadd,setLoadd] =useState(false);
    const logger = {
        loggin : togg,
        load : loadd,
        login : () => {
          setLoadd(true)
          wait(1000).then( () => {
            setTogg(true);
            setLoadd(false)
          })
        },
        logout : () => {
          setLoadd(true)
          wait(1000).then( () => {
            setTogg(false);
            setLoadd(false)
          })
        }
    }
    return (
      <Context.Provider value={logger}>
      {children}
      </Context.Provider>
    );
}