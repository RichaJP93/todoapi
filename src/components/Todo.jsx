import React from 'react'
import { useParams } from 'react-router-dom'

const Todo = () => {
  const { id } = useParams();
  return (
    <p>{`This is the TODO component, the TODO id is ${id}`} </p>
  )
}

export default Todo;