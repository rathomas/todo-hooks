import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Todo.css';

const Todo = ({data, click, removeClick, classes}) => {
  const onClickHandler = (e) => {
    click(data.id);
  };
  const onRemoveClickHandler = (e) => {
    removeClick(data.id);
  };

  return (
    <div className={cn('Todo', classes)}>
      <div onClick={onClickHandler}>
        {data.name}
      </div>
      <div className="Todo__remove" onClick={onRemoveClickHandler}>-</div>
    </div>
  );
};

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.string,
  click: PropTypes.func.isRequired,
  removeClick: PropTypes.func.isRequired
};

export default Todo;