import React ,{useState} from 'react'

const EditTodo = (props) => {
    const [text, setText]=useState(props.text)
    const inpuHandler=(e)=>{
        setText(e.target.value)
    }
  return (
    <div className='col-6 mb-2'>
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div><input className='form-control' type="text" value={text} onChange={inpuHandler} /></div>
            <div>
                <button type="button" class="btn btn-info btn-sm mx-sm-1 ml-1" onClick={()=> props.edit(text)}>Edit</button>
            </div>
        </div>
      
    </div>
  )
}

export default EditTodo
