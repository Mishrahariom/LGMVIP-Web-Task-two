import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

export default function TodoForm(props) {
   //state
    const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value)
  }


    const handlesubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 10000000),
            text:input,
            isComplete: false 
        })
        setInput('')
    }
    return (

        <form className='todo-from'>
            <input type="text" placeholder="Add a todo" onChange={handleChange} className="todo-input" value={input} name="text" />
            <button type="submit" onClick={handlesubmit} className="todo-btn">ADD TODO</button>
        </form>
    )
}
