import React from 'react'
import './Login.css'

function Signup() {
  return (
    <>
    <form className='login-form' id='sign-up' action="post">
      <h1 className='head'>Sign up</h1>
        <input type="text" placeholder="Enter Full Name" /> <br />
        <input type="text" placeholder="Enter Email Address" /> <br />
        <input type="text" placeholder="Enter Gender" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button className='btn'>Submit</button> <br />
        <hr />
        <a id='sign' href=""> Have an account <span>Login</span></a>

        </form>
    </>
  )
}

export default Signup
