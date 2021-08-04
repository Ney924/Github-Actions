import React from 'react';
import { EuiPageTemplate, EuiPageHeader, EuiButton, EuiFlexGrid } from '@elastic/eui';
import WorkExperienceGrafic from './Grafics';
import { Experience } from './../../../data/workExperience/workExperience';

import './style.css'
import Legend from './Legend';

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
            rightSideItems={[button, <EuiButton >Закрыть</EuiButton>]}
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