import React, {Component} from 'react';
import logo2 from '../materials/find-parrot-logo.png';

export class TopNavBar extends Component {

  render() {
    return(
      <div className="navbar">
      <img className="logo" src={logo2} alt="" />
      <a href="#signup">Sign Up</a>
      <a href="#contact">Login</a>
      <a href="#news">About Us</a>
      <a href="#home">All products</a>
      </div>
    )
  }
}

export default TopNavBar;
