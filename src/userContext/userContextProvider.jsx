import React, { useState } from "react";
import userContext from "./userContext";

export const userContextProvider = ({children})=>{

    const [user , setUser] = useState(null)
  // .provider is providing the values {user, setUser} to userContext and we can fetch those valies and methods 
  // in other components as per need via useContext(userContext)
    return(
        <userContext.Provider value={ {user, setUser}}>
            {children}
        </userContext.Provider>
    )
}