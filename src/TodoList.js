import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Todo from './Todo';
import './TodoList.css';

const TodoList =  ({data, classes}) => {
  const [todos, setTodos] = useState(data.todos);
  const inputAdd = useRef();

  const addItem = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: todos.length + 1, name: inputAdd.current.value, done: false}]);
  };

  const clickHandler = (id) => {
    setTodos(
      todos.map((item) => (
        (item.id === id) ? {...item, done: !item.done} : item
      ))
    )
  };

  const removeClickHandler = (id) => {
    setTodos(
      todos.filter((item) => (
        (item.id !== id)
      ))
    )
  };

  const todoElements = todos.map((item) => (
    <Todo
      classes={cn({'TodoList--is-done': item.done})}
      key={item.id}
      data={item}
      click={clickHandler}
      removeClick={removeClickHandler}
    />
  ));

  return (
    <div className={cn("TodoList", classes)}>
      <div>
        <h3>
        Todo List
      </h3>
      <div>
        <form onSubmit={addItem}>
          <input type="text" ref={inputAdd} />
          <input
            type="submit"
            value="+"/>
        </form>
      </div>
      </div>
      <div className="TodoList__list">
        {todoElements}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.string
};

export default TodoList;


