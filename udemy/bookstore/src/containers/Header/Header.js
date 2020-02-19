import React, { Component } from 'react';
import NavDesktop from '../../components/Navigation/NavDesktop/NavDesktop';
import NavMobile from '../../components/Navigation/NavMobile/NavMobile';

import './Header.css';

class Header extends Component {
  state = {
    navMobile: false
  }

  navMobileClosedHandler = () => {
    this.setState({
      navMobile: false
    })
  }

  navMobileToggledHandler = () => {
    this.setState(prevState => (
      { navMobile: !prevState.navMobile }
    ))
  }
  
  render() {
    return (
      <header className="header">
        <NavDesktop />
        <NavMobile
          mobileBtnClicked={this.navMobileToggledHandler}
          active={this.state.navMobile} 
          closed={this.navMobileClosedHandler}/>
      </header>
    )
  }
}

export default Header;
