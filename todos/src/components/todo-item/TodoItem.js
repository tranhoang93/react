import React from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';

import Circle from './filled-circle.png';
import Success from './filled-success.png';
import './TodoItem.css';

class TodoItem extends React.Component {
  render() {
    const { targetId, name, isCompleted } = this.props.data;
    let urlImg = isCompleted ? Success : Circle;
    return (
      <div className="TodoItem" >
        <img
          src={urlImg}
          alt="checkbox"
          width={30}
          height={30}
          className="img-checkbox"
          onClick={this.props.onClick}
          />
        <span className={classNames("text", {completed: isCompleted})}>{name}</span>
        <Button close className="" onClick={this.props.onClick} data-target={targetId}></Button>
      </div>
    );
  }
}

export default TodoItem;
