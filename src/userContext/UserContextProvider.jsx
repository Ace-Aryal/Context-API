import React, { useState } from "react";
import UserContext from "./UserContext";

export const UserContextProvider = ({children})=>{

    const [ user , setUser] = useState(null)
  // .provider is providing the values {user, setUser} to userContext and we can fetch those valies and methods 
  // in other components as per need via useContext(userContext)
    return(
        <UserContext.Provider value={ {user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}