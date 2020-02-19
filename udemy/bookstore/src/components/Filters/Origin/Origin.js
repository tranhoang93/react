import React from 'react';
import Accordion from '../../Accordion/Accordion';
import AccordionItem from '../../Accordion/AccordionItem/AccordionItem';
import { OriginChampions } from '../../../database';

import classes from './Origin.module.css';

const originChampions = props => {
  const accordionItem = OriginChampions.map(item => (
    <AccordionItem
      key={item.name}
      category="origin"
      value={item.name}
      srcImg={item.img}
      iconClass={classes.OriginIcon}>{item.name}</AccordionItem>
  ));

  return (
    <Accordion title={props.title}>
      {accordionItem}
    </Accordion>
  )
}

export default originChampions;