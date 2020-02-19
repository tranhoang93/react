import React from 'react';
import NoteFooter from '../../components/NoteFooter/NoteFooter';
import NavFooter from '../../components/Navigation/NavFooter/NavFooter';
import BotFooter from '../../components/BotFooter/BotFooter';

import './Footer.css';

const footer = () => (
  <footer className="footer">
    <div className="container">
      <NavFooter />
      <div className="divider"></div>
      <NoteFooter />
      <BotFooter />
    </div>
  </footer>
);

export default footer;