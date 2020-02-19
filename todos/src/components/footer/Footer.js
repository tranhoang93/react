import React from 'react';
import { Badge } from 'reactstrap';
import classNames from 'classnames';

import './Footer.css';

class Footer extends React.Component {

  render() {
    const status = this.props.status;
    const data = this.props.children;
    const allAmount = data.length;
    const activeAmount = data.reduce( (count, elt) => count = !elt.isCompleted ? count + 1 : count, 0);
    const completedAmount = allAmount - activeAmount;

    return (
      <div className="Footer" >
        <button
          className={classNames("btn", {active: status === "all"})}
          onClick={this.props.onClick}
          data-status="all"
          >
          All
          <Badge color="primary">{allAmount}</Badge>
        </button>
        <button
          className={classNames("btn", {active: status === "active"})}
          onClick={this.props.onClick}
          data-status="active"
          >
          Active
          <Badge color="danger">{activeAmount}</Badge>
        </button>
        <button
          className={classNames("btn", {active: status === "completed"})}
          onClick={this.props.onClick}
          data-status="completed"
          >
          Completed
          <Badge color="success">{completedAmount}</Badge>
        </button>
        <button
          className={classNames("btn", "clear-completed", {disabled: !completedAmount})}
          onClick={this.props.onClick}
          data-status="clear-completed"
          >
          clear completed
        </button>

      </div>
    );
  }
}

export default Footer;
