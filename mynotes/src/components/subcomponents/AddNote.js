import React, { useContext, useState } from 'react'
import noteContext from '../../context/notecontext'

export default function AddNote(props) {
    const context = useContext(noteContext)
    // const {addNote} = context
    let[ note, setNote] = useState({ title: "", description: "", tag: "" })
    const onchange = async(e) => {
        e.preventDefault()
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            <div className='container my-3'>
        <form onSubmit={(e)=>{e.preventDefault();context.addNote(note.title, note.description, note.tag)}}>
                <h1 className=''>Add a Note</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" name='title' onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" onChange={onchange} name='description'></textarea>
                </div>
                <div>
                    <label className="form-label">Tag</label>
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name='tag' onChange={onchange}>
                        <option>Open this select menu</option>
                        <option value="Personal">Personal</option>
                        <option value="Important">Important</option>
                    </select>
                </div>
            <button className='btn btn-primary my-4' type='submit' disabled={!note.title||!note.description}>Add Note</button>
            </form>
            </div>
        </>
    )
}
