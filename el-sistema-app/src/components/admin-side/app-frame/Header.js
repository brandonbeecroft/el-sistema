import React, { Component } from 'react';
import './style.css';
import menu from '../../../img/menu.png';

export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      showSide: true
    }
  }
  clickHam = function () {
    this.props.toggleSide(); 
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="hamburger" onClick={ (e) => this.props.toggleSide() }>
          <img src={menu} className='menu-img'></img>
        </div>
        <h3 className="nav-title">El Sistema Pittsburg - Website Administration</h3>
      </div>
    )
  }
}
