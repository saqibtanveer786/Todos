import NoteContext from './notecontext'
import React, {useState} from 'react'




export default function NoteState(props) {
    
    const [notes, setNotes] = useState()

    //GETTING NOTES FROM DB
    const fetchNotes = async()=>{
      let getnotes = await fetch('http://localhost:5000/api/v1/notes/fetchnote', {
        method: 'get',
        headers:{
          'Content-Type': 'application/json',
          'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDllYmI5NTk2NjIzN2IwNjAwYmUxIn0sImlhdCI6MTY3Njk4NjgxOX0.04kkfbRm5OJ64oVHW75UC9uJARGWwCt9dwnOzgI5Cbs'
        }
      })
      let json = await getnotes.json()
      setNotes(json)
    }
    

    //ADDING A NOTE
    const addNote = async(title, description, tag)=>{
        const add = await fetch(`http://localhost:5000/api/v1/notes/addnote`,{
          method : 'post',
          headers:{
            'Content-Type': 'application/json',
            'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDllYmI5NTk2NjIzN2IwNjAwYmUxIn0sImlhdCI6MTY3Njk4NjgxOX0.04kkfbRm5OJ64oVHW75UC9uJARGWwCt9dwnOzgI5Cbs'
          },
          body:JSON.stringify({title,description,tag})
        })
        let response = await add.json()
        setNotes(notes.concat(response.note))
    }

    
    //Deleting Note
    const deleteNote = async(id)=>{
      console.log('deleting note with' + id)
      const deletenote = await fetch(`http://localhost:5000/api/v1/notes/deletenote`,{
        method:'delete',
        headers:{
          'Content-Type': 'application/json',
          'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDllYmI5NTk2NjIzN2IwNjAwYmUxIn0sImlhdCI6MTY3Njk4NjgxOX0.04kkfbRm5OJ64oVHW75UC9uJARGWwCt9dwnOzgI5Cbs',
          'id': id
        }})
        const json = await deletenote.json()
        console.log(json)
        const newnote = notes.filter((note)=>{return note._id!==id})
        setNotes(newnote)
    }
    
  return (
    <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, fetchNotes}}>
            {props.children}
    </NoteContext.Provider>
  )
}
