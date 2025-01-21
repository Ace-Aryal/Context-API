import React,{useContext} from "react";
import UserContext from "../userContext/UserContext";

export default function Profile (){
    const {user} = useContext(UserContext) // provides the value we sent via provider
 
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}
