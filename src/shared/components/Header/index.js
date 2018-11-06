import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <span className="left">Repo LeaderBoard</span>
        <div className="right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}

export default Header
