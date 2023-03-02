import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('authtoken')) {
      navigate('/login')
      console.log('no authtoken')
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div>About</div>
  )
}
