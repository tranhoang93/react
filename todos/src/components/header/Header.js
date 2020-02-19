import React from 'react';
import { Input } from 'reactstrap';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header"  >
        <Input
          type="text"
          value={this.props.data}
          onChange={this.props.onChange}
          onKeyUp={this.props.onKeyUp}
          placeholder="What needs to be done?"
          />
      </div>
    );
  }
}

export default Header;
