import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/action';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson clicked={this.props.onAddPerson} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({ prs: state.persons });
const mapDispatchToProps = dispatch => ({
    onAddPerson: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, personsData: { name: name, age: age } }),
    onDeletePerson: (id) => dispatch({ type: actionTypes.REMOVE_PERSON, personId: id })
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);