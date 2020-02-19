import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/action/action';
import { MdClose } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import classes from './Search.module.css';

class Search extends Component {
  state = {
    focus: false
  }

  blurHandler = () => {
    setTimeout(() => {
      if (this.state.focus) {
          this.setState({
              focus: false,
          });
      }
    }, 0);
  }

  focusHandler = () => {
    if (!this.state.focus) {
      this.setState({
          focus: true,
      });
    }
  }

  render() {
    const classname = this.state.focus ? `${classes.Wrap} ${this.props.className} ${classes.Focused}` : `${classes.Wrap} ${this.props.className}`;
    const classCloseIcon = (this.props.search === "") ? classes.CloseIcon : `${classes.Active} ${classes.CloseIcon}`;
    
    return (
      <div className={classname} >
        <label className={classes.Row}>
          <GoSearch className={classes.SearchIcon} />
          <input 
            className={classes.Input}
            placeholder={this.props.placeholder}
            value={this.props.search}
            onChange={event => this.props.onSearch(event)}
            onBlur={this.blurHandler} 
            onFocus={this.focusHandler}/>
          <MdClose onClick={() => this.props.onDelete()} className={classCloseIcon}/>
        </label>
      </div>
    )
  } 
};

const mapStateToProps = state => ({
  search: state.search.value
});

const mapDispatchToProps = dispatch => ({
  onSearch: (event) => dispatch({ type: actionType.SEARCH, value: event.target.value}),
  onDelete: () => dispatch({type: actionType.DELETE})
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);