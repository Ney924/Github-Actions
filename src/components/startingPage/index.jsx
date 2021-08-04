import React from 'react';
import '@elastic/eui/dist/eui_theme_light.css';
import { NavLink } from 'react-router-dom'
import './style.css'

const StartingPage = (props) => {
   return (
      <div className='page'>
         <div>Привет!</div>
         <div className='text'>Меня зовут Аксенов Илья</div>
         <div  className='text'>и я frontend-разработчик</div>
         <NavLink to='/profilePage' activeClassName='active-link' className='text'>Обо мне</NavLink>
      </div>
   )
}

export default StartingPage;