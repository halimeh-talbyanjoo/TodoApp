import React , {useState}from 'react'

const FormAddTodo = ({add}) => {
    const [text,setText]=useState("")
    const formhandler=(e)=>{
        e.preventDefault()
        add(text)
        setText('')
    
      }
      
  return (
    <form className='form-inline' onSubmit={formhandler}>
        <div className='form-group d-flex '>
            <input type="text" className='form-control mx-sm-3 ml-3' placeholder='i want to do ...'  value={text} onChange={e => setText(e.target.value)} />
            <button type='submit' className='btn btn-primary '>add</button>
        </div>
    </form>
  )
}

export default FormAddTodo
