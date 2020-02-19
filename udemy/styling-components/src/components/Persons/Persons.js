import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { id: 'asfa1', name: 'Max', age: 28 },
                { id: 'vasdf1', name: 'Manu', age: 29 },
                { id: 'asdf11', name: 'Stephanie', age: 26 }
            ]
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {
            message: 'Snapshot'
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(prevProps, prevState, snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return (
            this.props.persons.map((person, index) => (
                <Person
                    clicked={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            ))
        );


    }
}

Persons.propTypes = {
    id: PropTypes.string
};

export default Persons;