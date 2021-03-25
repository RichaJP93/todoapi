import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import TodoCard from './TodoCard'

const Todos = () => {

  //useState hook used to set todos in state,
  //setTodos can be used by other parts of the code to update the state
  const [todos, setTodos] = useState();

  //useEfect hook called when component mounted, 
  //no return statement so will not run when component unmounted,
  //array is empty so has no other conditions to run again
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const response = res.data;
      setTodos(response);
    });
  }, []);

  return (
    <>
      {todos ? 
        (
          <div>
            {todos.slice(0, 10).map((todo) => (
              <TodoCard key={todo.id} todo={todo}/>
            ))}
          </div>
        ) 
        : <CircularProgress />
      }
    </>
  )
}

export default Todos;