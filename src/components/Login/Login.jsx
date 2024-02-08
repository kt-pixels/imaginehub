import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    useEffect(()=> {
        let auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    }, [])

    const loggin = async ()=> {
        console.log('login successful', email);
        setEmail('')
        setPassword('')

        let getLoginInfo = await fetch('http://localhost:8000/login', {
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type' : 'application/json'}
        })

        let result = await getLoginInfo.json();

        console.log(result);

        if(result.name){
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/')
        }else{
            alert('email and password is incorrect')
            navigate('/login')
        }
    }

  return (
    <div className="singup-form">
      <h1 className="title">Loggin</h1>
      <form>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loggin}>Login</button>
      </form>
      <p>Don't have any account? <Link to='/sign-up'>SignUp</Link></p>
    </div>
  )
}

export default Login