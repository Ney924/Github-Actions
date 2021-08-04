import React, { useState } from 'react';
import Contacts from './Contacts';
import WorkExperience from './WorkExperience';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills/Index';
import Sections from './Sections';
import './style.css'

const ProfilePage = () => {
   const [page, setPage] = useState(0)

   const PageCount = (num) => { setPage(num) };

   return (
      <div className='profile'>
         <div className='profile-column'>
            <div className='profile-content'>
               {page === 0 ? <Profile /> : null}
               {page === 1 ? <WorkExperience /> : null}
               {page === 2 ? <Projects /> : null}
               {page === 3 ? <Skills /> : null}
               {page === 4 ? <Contacts PageCount={PageCount}/> : null}
            </div>
            <Sections PageCount={PageCount} />
         </div>
      </div>
   )
}

export default ProfilePage;