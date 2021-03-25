import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      const response = res.data;
      setTodoDetails(response);
    });
  }, []);

  //destructring response object from state, 
  //renaming id from response to not conflict with id from params
  const { id: todoId, userId, title, completed } = todoDetails;
  
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>{`Todo id: ${todoId}`}</h1>
          <h1>{`Todo user ID: ${userId}`}</h1>
          <h1>{`Title: ${title}`}</h1>
          <h1>{`Completed: ${completed}`}</h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;