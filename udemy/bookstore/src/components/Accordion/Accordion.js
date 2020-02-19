import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';

import {FaAngleDown} from 'react-icons/fa';
import classes from './Accordion.module.css';

class AccordionMain extends Component {
  state = {
    active: false
  }

  clickedHandler = () => {
    this.setState(prevState => ({active: !prevState.active}))
  }

  render() {
    let activeClass = this.state.active ? `${classes.Header} ${classes.Active}` : classes.Header;

    return (
      <Accordion>
        <Card className={classes.Wrap}>
          <Accordion.Toggle as={Card.Header} className={activeClass} onClick={this.clickedHandler} eventKey="0">
            <p className={classes.Text}>{this.props.title}</p>
            <FaAngleDown className={classes.Icon} />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={classes.Body}>
              <ul className={classes.List}>
                {this.props.children}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}

export default AccordionMain;