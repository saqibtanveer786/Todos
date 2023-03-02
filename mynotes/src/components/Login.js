import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    let [info, setInfo] = useState({email:"", password:""})
   const  onchange = (e)=>{
        e.preventDefault()
        setInfo({...info, [e.target.name]: e.target.value})
    }
   const  onsubmit = async (e)=>{
        e.preventDefault()
        const data = await fetch('http://localhost:5000/api/v1/auth/login',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        const json = await data.json()
        console.log(json)
        if(json.authtoken){
        localStorage.setItem('authtoken', json.authtoken)
        navigate('/')
    }
    }
    return (
        <>
            <form onSubmit={onsubmit}>
                <div className='container my-3'>
                    <h1 className=''>Login</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput11" placeholder="Email" name='email' onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput12" placeholder="Password" name='password' onChange={onchange} />
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-primary' type='submit'>Login</button>
                    </div>
                </div>
            </form>
        </>
    )
}
