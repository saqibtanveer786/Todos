import React,{useContext} from 'react'
import noteContext from '../../context/notecontext'

export default function NoteItem(props) {
    const context = useContext(noteContext)
    const {deleteNote} = context
    const {note} = props
    return (
        <>
            <div className="card col-md-3 my-4 mx-1" style={{position: 'relative'}}>
                <div className="card-body">
                    <h6 className="card-title">{note.title}</h6>
                    <p className="card-text">{note.description}</p>
                    <span href="#" className="card-link">{note.tag}</span>
                    <button className='btn btn-danger btn-sm' onClick={(e)=>{e.preventDefault();deleteNote(note._id)}} style={{position:'absolute', top:-14}}>Delete</button>
                </div>
            </div>
        </>
    )
}
