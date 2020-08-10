import React from 'react';
import './ToDo.css'

const ToDo = ({ id, todo, completed }) => {
  return (
    <li>{todo}</li>
  )
}

export default ToDo;