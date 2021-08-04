import React, { useState } from 'react';
import Contacts from './Contacts';
import WorkExperience from './WorkExperience';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills/Index';
import Sections from './Sections';
import {  Route } from 'react-router-dom';
import './style.css'

const ProfilePage = () => {
   return (
      <div className='profile'>
         <div className='profile-column'>
            <div className='profile-content'>
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


//    const [page, setPage] = useState(0)
//    const PageCount = (num) => { setPage(num) };
// return (
//    <div className='profile'>
//       <div className='profile-column'>
//          <div className='profile-content'>
//             {page === 0 ? <Profile /> : null}
//             {page === 1 ? <WorkExperience /> : null}
//             {page === 2 ? <Projects /> : null}
//             {page === 3 ? <Skills /> : null}
//             {page === 4 ? <Contacts PageCount={PageCount}/> : null}
//          </div>
//          <Sections PageCount={PageCount} />
//       </div>
//    </div>
// )