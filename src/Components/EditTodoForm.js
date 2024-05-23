import React,{useState} from 'react'

const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue] = useState(task.task)

  const handleSubmit = e =>{
    e.preventDefault(); // no reloading occur
    editTodo(value,task.id);// add the new list in todos
    setValue("") // when someone submit the change set new value as empty 
  }
  return (
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>update Task</button>
      </form>
  )
}

export default EditTodoForm
