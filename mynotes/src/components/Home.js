import React, { useEffect } from 'react'
import AddNote from './subcomponents/AddNote'
import Notes from './subcomponents/Notes'
import {useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

 
    useEffect(() => {
      if(!localStorage.getItem('authtoken')){
      navigate('/login')
      
    console.log('no authtoken')
  }
  // eslint-disable-next-line
    }, [])
    
  return (
    <>
    <AddNote/>
    <Notes/>
    </>
  )
}
