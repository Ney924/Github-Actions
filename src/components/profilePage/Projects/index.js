import React from 'react';
import { EuiPageTemplate, EuiPageHeader, EuiButton } from '@elastic/eui';

import ImageSlider from './Slider'

const Projects = ({ button = <></> }) => {

   return (
      <EuiPageTemplate
         restrictWidth={false}
         template="empty"
         style={{ borderRadius : '5px' }}>
         <EuiPageHeader
            iconType="notebookApp"
            template="empty"
            pageTitle="Мои проекты"
            rightSideItems={[button, <EuiButton >Закрыть</EuiButton>]}
            bottomBorder
            style={{ marginBottom: '20px'}}
         />
         <div className='projects'>
            <ImageSlider />
         </div>
      </EuiPageTemplate>
   );
}

export default Projects;

