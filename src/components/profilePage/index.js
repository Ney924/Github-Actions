import React from 'react';
import Contacts from './Contacts';
import WorkExperience from './WorkExperience';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills/Index';
import Sections from './Sections';
import {  Redirect, Route } from 'react-router-dom';
import './style.css'

const ProfilePage = () => {
   return (
      <div className='profile'>
         <div className='profile-column'>
            <div className='profile-content'>
               <Redirect to={'/profilePage/profile'} /> 
               <Route path='/profilePage/profile' component={Profile} />
               <Route path='/profilePage/workExperience' component={WorkExperience} />
               <Route path='/profilePage/projects' component={Projects} />
               <Route path='/profilePage/skills' component={Skills} />
               <Route path='/profilePage/contacts' component={Contacts} />
            </div>
            <Sections />
         </div>
      </div>
   )
}

export default ProfilePage;