import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'
import '../../assets/iconfont/iconfont.js';

class Footer extends Component {
  render () {
    return (
      <section className='footer-container'>
        <NavLink className='guide-item' to='/msite'>
          <div className='icon-changyonglogo40 icon-style'></div>
          <span className='spec-text'>btn1</span>
        </NavLink>
        <NavLink className='guide-item' to='/profile'>
          <div className='icon-account icon-style'></div>
          <span>btn2</span>
        </NavLink>
        <NavLink className='guide-item' to=''>
          <div className='icon-changyonglogo40 icon-style'></div>
          <span>当歌</span>
        </NavLink>
        <NavLink className='guide-item' to='/my'>
          <div className='icon-account icon-style'></div>
          <span>我的</span>
        </NavLink>
      </section>
    )
  }
}

export default Footer