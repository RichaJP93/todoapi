import React from 'react'

const TodoCard = (props) => {
  
  const {todo} = props
  const { id, title, completed } = todo;

  return (
    <div>
      <h4>{ id }: { title }</h4>
      <h6>{ `Completed?: ${completed}` }</h6>
    </div>
  )
}

export default TodoCard;