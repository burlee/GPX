import styles from './Header.scss';
import Logo from '../ASSETS/Logo.png'
import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    menuIsOpen: false,
    rotate: 0,
    rightPos: -300,
    top: 0
  }

  rotateIconFn = () => {
    const { rotate } = this.state;

    if(rotate === 45){
      this.setState({
        menuIsOpen: !this.state.menuIsOpen, 
        rotate: 0,
        top: 0,
        rightPos: -300
      })
    }else{
      this.setState({
        menuIsOpen: !this.state.menuIsOpen, 
        rotate: 45,
        top: 11,
        rightPos: 0
      })
    }
  }

  render() {

    const { rotate, top, menuIsOpen, rightPos} = this.state;

    return (
      <div className={styles.Header}>
        <div className={styles.MenuIcon} onClick={this.rotateIconFn}>
          <div style={{transform: `rotate(${rotate}deg)`, position: 'relative', top: top+`px`}}></div>
          {menuIsOpen ? null : <div></div>}
          <div style={{transform: `rotate(${-rotate}deg)`}}></div>
        </div>
        <img src={Logo} alt="Main Logo"/>
          <nav className={styles.Navigation} style={{right: `${rightPos}px`}}>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Galery</li>
            </ul>
          </nav>
      </div>
    )
  }
}
