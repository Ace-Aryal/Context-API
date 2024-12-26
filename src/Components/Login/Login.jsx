import React,{useContext, useState} from "react";
import userContext from "../userContext/userContext";
function Login () {
const [username ,setUsername] = useState("")
const [password,setPassword ] = useState("")

const {setUser} = useContext(userContext)
const handleSubmit = e=>{
    e.preventDefault()

}
    return(
        <div>
            <h2>Login</h2>
            <input onChange={(e)=>{
                e.preventDefault()
                setUsername(e.target.value)                
            }
        }
             type="text" name="" id="" value={username} placeholder="Username"/>
            <input type="password" 
            onChange={(e)=>{
                e.preventDefault()
                setPassword(e.target.value)
            }}
            name="" id="" placeholder="password" value={password} />
            <button onClick={handleSubmit}  type="submit">Submit</button>
        </div>
    )

}

export default Login