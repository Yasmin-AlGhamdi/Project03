  
import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login'

export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [token, setToken] = useState("")

    const responseFacebook = (response) => {
        if(response.status !=="unknown"){
            alert("You logged in successfully!")
            setName(response.name)
           setEmail(response.email)
           setPicture(response.picture.data.url )
            setToken(response.token)
         }
         else{
            alert("Your account info wrong!")
         }
      }

    return (
        <center>
          <h1 className="LoginPage">Login</h1>
          
         <FacebookLogin
    appId="385516509503717"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook} />, 
          {token ?
          <div>
            <h5>Welcome {name} </h5>
            <img src={picture} alt="Profile Pic"/>
            <h5> {email} is authorized</h5>
            </div>
            :null}
    </center>
      
    )
}