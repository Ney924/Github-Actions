import React from 'react';
import { EuiPageTemplate, EuiFlexGroup, EuiTitle, EuiPageHeader, EuiButton } from '@elastic/eui';
import './style.css';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import SkillsItem from './SkillsItem';
import { programmingLanguages, libraries, sundries } from './../../../data/skills/skillsItem'
import { NavLink } from 'react-router-dom';

const Skills = ({ button = <></> }) => {
   return (
      <EuiPageTemplate
         restrictWidth={false}
         template="empty"
         style={{ borderRadius: '5px', height: '100%' }}
      >
         <EuiPageHeader
            iconType="usersRolesApp"
            template="empty"
            pageTitle="Список технологий"
            rightSideItems={[button,
               <NavLink to='/profilePage/profile' activeClassName='active-link' className='text'>
                  <EuiButton>Закрыть</EuiButton>
               </NavLink>
            ]}
            bottomBorder
            style={{ marginBottom: '20px' }}
         />

         <div className='skills-page'>
            <div className='skills' >
               <div>
                  <EuiTitle><h2>Языки програмирования:</h2></EuiTitle>
                  <div className='skills-group'>
                     <EuiFlexGroup>
                        {programmingLanguages.map(el => <SkillsItem key={el.key} name={el.name} description={el.description} />)}
                     </EuiFlexGroup>
                  </div>
               </div>
               <div>
                  <EuiTitle><h2>Фреймворки и библиотеки:</h2></EuiTitle>
                  <div className='skills-group'>
                     <EuiFlexGroup>
                        {libraries.map(el => <SkillsItem key={el.key} name={el.name} description={el.description} />)}
                     </EuiFlexGroup>
                  </div>
               </div>
               <div>
                  <EuiTitle><h2>Разное:</h2></EuiTitle>
                  <div className='skills-group'>
                     <EuiFlexGroup>
                        {sundries.map(el => <SkillsItem key={el.key} name={el.name} description={el.description} />)}
                     </EuiFlexGroup>
                  </div>
               </div>
            </div>
         </div>
      </EuiPageTemplate>
   )
}

export default Skills;

