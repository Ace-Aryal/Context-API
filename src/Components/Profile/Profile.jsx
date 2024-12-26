import React,{useContext} from "react";
import userContext from "../../userContect/userContext";

export default function Profile (){
    const {user} = useContext(userContext)
 
    if(!user) return <div>Please Login</div>

    return <div>Welcome {user}</div>
}
