import React, { Component } from 'react';
import Logo from 'components/navigation/logo/index';
import Menu from 'components/navigation/menu/index';

class Navigation extends Component {
  render() {
    return(
      <div className="Wrapper">
        <Logo />
        <Menu 
          link="http://google.com.br"
          text="Google"
        />
      </div>
    )
  }
}

export default Navigation;