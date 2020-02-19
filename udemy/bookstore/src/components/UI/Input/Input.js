import React, { Component } from 'react';
import classes from './Input.module.css';

class Input extends Component {
  render() {
    let elm = null;

    console.log(this.props.value);

    switch (this.props.tag) {
      case 'input':
        elm = <input         
          className={classes.input}
          disabled={this.props.disabled}
          value={this.props.value}
          onChange={this.props.onChange}
          {...this.props.config}
        />
        break;
      case 'textarea':
        elm = <textarea
          value={this.props.value}
          onChange={this.props.onChange}
          className={classes.Textarea}
          disabled={this.props.disabled}
          {...this.props.config}
        />
        break;
      case 'select':
        elm = (
          <select
          value={this.props.value}
          onChange={this.props.onChange}
          className={classes.Select} >
            {this.props.config.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )
        break;
      default:
        elm = <input
          className={classes.input}
          value={this.props.value}
          onChange={this.props.onChange}
          {...this.props.config}
        />
        break;
    }

    return (
      elm
    );
  }
}

export default Input;