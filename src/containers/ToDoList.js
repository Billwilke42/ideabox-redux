import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';
import './ToDoList.css'

const ToDoList = ({ todos }) => {
  const displayTodos = todos.map(todo => {
    return (
      <Todo
        {...todo}
        key={todo.id}
      />
    )
  })

  return (
    <div className='list-container'>
      <ul>
        {displayTodos}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);