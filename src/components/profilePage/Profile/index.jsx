import React from 'react';
import './style.css';

const Profile = () => {
   return (
      <div>
         <h1 className='profile-names-data'>АКСЕНОВ ИЛЬЯ</h1>
         <h4 className='profile-names-data profile-names-data-max'>FRONTEND DEVELOPER</h4>
         <div className='profile-names-data'>
            <a href='https://hh.ru/resume/385aff95ff08ccd7010039ed1f7150554d6a6b' target='blank' >посмотреть резюме</a>
         </div>
      </div>
   )
}

export default Profile;