import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Auth.css';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Your Password'
        },
        value: '',
        validation: {
            required: true,
            minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignup: false
  }

  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    } 
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
  }

  slug(value) {
    let slug = value.toLowerCase();
    slug = slug.replace(/_/gi, " ");
    return slug;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
        ...this.state.controls
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    
    this.setState({controls: updatedOrderForm});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => ({isSignup: !prevState.isSignup}));
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
        formElementsArray.push({
            id: key,
            config: this.state.controls[key]
        });
    }

    let form = <Spinner />;    
    if (!this.props.loading) {
      form = formElementsArray.map(formElement => (
        <Input 
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => this.inputChangedHandler(event, formElement.id)} />
      ));
    };

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (<p className={classes.Error}>{this.slug(this.props.error.message)}</p>);
    };

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />
    }
    
    return (
      <div className={classes.Wrap}>
        {authRedirect}
        <h2 className={classes.Title}>Authentication</h2>
        {errorMessage}
        <form className={classes.Form} onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error,
  isAuthenticated: state.auth.token !== null,
  buildingBurger: state.burgerBuilder.building,
  authRedirectPath: state.auth.authRedirectPath
});

const mapDispatchToProps = dispatch => ({
  onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
  onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);