import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

import classes from './Person.module.css';

class Person extends Component {
    static contextType = AuthContext;

    render() {
        console.log('[Person.js] rendering.....');
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login....</p>}
                <p onClick={this.props.clicked}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                        </p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);