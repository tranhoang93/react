import React from 'react';
import Accordion from '../../Accordion/Accordion';
import AccordionItem from '../../Accordion/AccordionItem/AccordionItem';
import {ClassChampions} from '../../../database';

import classes from './Class.module.css';

const classChampions = props => {
  const accordionItem = ClassChampions.map(item => (
    <AccordionItem
      key={item.name}
      category="class"
      value={item.name}
      srcImg={item.img}
      iconClass={classes.ClassIcon}>{item.name}</AccordionItem>
  ));
  
  return (
    <Accordion title={props.title}>
      {accordionItem}
    </Accordion>
  )
}

export default classChampions;