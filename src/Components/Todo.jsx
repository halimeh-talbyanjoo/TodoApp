import React, { useState } from 'react'
import EditTodo from './EditTodo'

const Todo = (props) => {


  const [edit,setEdit]=useState(false)


  const editHandler=(text)=>{
    props.edit(props.item.key,text)
    setEdit(false)
  }

  return (
    <>
      {
        !edit  
        ?(
          <div className='col-6 mb-2'>
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>{props.item.text}</div>
              <div>
                <button type="button" class={`btn btn-sm mx-sm-1 ml-1 ${!props.item.done ? 'btn-success' : 'btn-warning' }`} onClick={()=> props.done(props.item.key)}>{props.item.done ? 'undone' : 'done'}</button>
                <button type="button" class="btn btn-info btn-sm mx-sm-1 ml-1" onClick={()=> setEdit(true)}>Edit</button>
                <button type="button" class="btn btn-danger btn-sm mx-sm-1" onClick={()=> props.delete(props.item.key)}>Deleted</button>
              </div>
        </div>
      </div>
        )
        :
        <EditTodo text={props.item.text}  edit={editHandler}/>
        
      }
    </>
    
  )
}

export default Todo
