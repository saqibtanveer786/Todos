import React, { useContext, useEffect} from 'react'
import noteContext from '../../context/notecontext'
import NoteItem from './NoteItem'
export default function Notes() {
    const context = useContext(noteContext)
    const {notes,fetchNotes} = context
    useEffect(()=>{
       fetchNotes()
       // eslint-disable-next-line
      },[])
    return (
        <>
            <div className='container '>
                <div className='row'>
                   {notes&&context.notes.map((note) => {
                        return <NoteItem key={note._id} note={note}/>
                    })}
                </div>
            </div>
        </>
    )
}
