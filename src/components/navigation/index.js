import React, { Component } from 'react';
import Logo from 'components/navigation/logo/index';
import Menu from 'components/navigation/menu/index';

class Navigation extends Component {

  state = {
    title: 'Welcome2!'
  }

  handleClick = () => {
    console.log('Yooo');
  }
  
  render() {
    return(
      <div className="Wrapper">
        <h1>{this.state.title}</h1>
        <Logo />
        <Menu
          link="http://google.com.br"
          text="Google"
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default Navigation;