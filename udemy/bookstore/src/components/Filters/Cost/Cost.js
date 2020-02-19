import React from 'react';
import Accordion from '../../Accordion/Accordion';
import AccordionItem from '../../Accordion/AccordionItem/AccordionItem';
import {CostChampions} from '../../../database';
import goldicon from '../../../assets/icons/icon-gold.svg';

import classes from './Cost.module.css';

const cost = props => {
  const accordionItem = CostChampions.map(item => {
    return (
      <AccordionItem
        key={item}
        category="cost"
        value={item}
        srcImg={goldicon}
        iconClass={classes.GoldIcon}>{item}</AccordionItem>
    )
  });
  
  return (
    <Accordion title={props.title}>
      {accordionItem}
    </Accordion>
  );
}

export default cost;