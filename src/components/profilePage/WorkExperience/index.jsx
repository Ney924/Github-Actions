import React from 'react';
import { EuiPageTemplate, EuiPageHeader, EuiButton, EuiFlexGrid } from '@elastic/eui';
import { NavLink } from 'react-router-dom';
import { Experience } from './../../../data/workExperience/workExperience';
import WorkExperienceGrafic from './Grafics';
import Legend from './Legend';
import './style.css'

const WorkExperience = ({ button = <></> }) => {
   return (
      <EuiPageTemplate
         restrictWidth={false}
         template="empty"
         style={{ borderRadius: '5px', height: '100%' }}
      >
         <EuiPageHeader
            iconType="devToolsApp"
            template="empty"
            pageTitle="Опыт работы"
            rightSideItems={[button,
               <NavLink to='/profilePage/profile' activeClassName='active-link' className='text'>
                  <EuiButton>Закрыть</EuiButton>
               </NavLink>
            ]}
            bottomBorder
            style={{ marginBottom: '20px' }}
         />
         <EuiFlexGrid columns={2}>
            <WorkExperienceGrafic />
            <div className='workExperience__info'>
               <div className='workExperience__header'>
                  Здесь перечисленны все компании, в которых я работал:
               </div>
               {Experience.map(el => {
                  return (
                     <Legend
                        name={el.name}
                        timeInterval={el.timeInterval}
                        period={el.period}
                     />
                  )
               })}
            </div>

         </EuiFlexGrid>
      </EuiPageTemplate>
   )
}
export default WorkExperience;