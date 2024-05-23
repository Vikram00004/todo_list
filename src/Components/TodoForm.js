import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("")

  const handleSubmit = e =>{
    e.preventDefault(); // no reloading occur
    addTodo(value);// add the new list in todos
    setValue("") // when someone submit the change set new value as empty 
  }
  return (
    <div>
      <h1>Get Things Done!</h1>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder='What do you want to write today' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Something</button>
      </form>
    </div>
  )
}

export default TodoForm
