import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { NavLink } from 'react-router-dom'
import './style.css'

const StartingPage = (props) => {
   return (
      <div className='page'>
         <div className='text'>Привет!</div>
         <div className='text'>Меня зовут Аксёнов Илья и я web-разработчик</div>
         <NavLink to='/profilePage' activeClassName='active-link' className='text'>Обо мне</NavLink>
      </div>
   )
}

export default StartingPage;