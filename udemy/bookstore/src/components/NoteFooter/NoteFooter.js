import React from 'react';

import classes from './NoteFooter.module.css';

const noteFooter = prop => {
  return (
    <div className={classes.Wrap}>
      <p className={classes.Text}>TFTACTICS.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</p>
    </div>
  )
}

export default noteFooter;