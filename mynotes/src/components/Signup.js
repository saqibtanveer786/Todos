import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
    let [user, setUser] = useState({name:'',email:'',password:''})
    const onchange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})   
    }
    const onsubmit= async (e)=>{
        e.preventDefault()
        console.log(user)
    const token = await fetch(`http://localhost:5000/api/v1/auth/signup`,{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:user.name,email:user.email,password:user.password})
    })
    let json = await token.json()
    if(json){
        localStorage.setItem('authtoken',json.authtoken)
    }
    navigate('/')
    }
    return (
        <>
        <form onSubmit={onsubmit}>
            <div className='container my-3'>
                <h1 className=''>Sign Up</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput10" placeholder="Name" name='name' onChange={onchange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput11" placeholder="Email" name='email' onChange={onchange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput12" placeholder="Password" name='password' onChange={onchange}  />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary' type='submit'>Sign Up</button>
                </div>
            </div>
            </form>
        </>

    )
}
