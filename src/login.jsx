import React from "react"
import "./Login.css"

function Login() {
    return (
      <>
      <form className='login-form' action="post">
      <h1 className='head'>Log in</h1>
        <input type="text" placeholder="Enter User Name/Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button className='btn'>Log in</button> <br />
        <a className='forget' href="">forgotten password</a>
        <hr />
        <a href=""><button>Create new account</button></a>
        </form>
      </>
    )
  }
  
  export default Login