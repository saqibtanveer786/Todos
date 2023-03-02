import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('authtoken')
    navigate('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand bg-dark ">
        <div className="container-fluid">

          <Link className="navbar-brand text-light" to="/" alt="">MyNotes</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/" alt="">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about" alt="">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('authtoken') ? <form>
              <Link className='btn btn-primary btn-sm mx-1' to='/signup'>Sign Up</Link>
              <Link className='btn btn-primary btn-sm mx-1' to='/login'>Login</Link>
            </form> : <button className='btn btn-primary btn-sm' onClick={logoutHandler}>Log out</button>}
          </div>
        </div>
      </nav>
    </>
  )
}
