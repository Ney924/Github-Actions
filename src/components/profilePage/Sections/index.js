import React from 'react';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import { EuiButton, EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem, EuiSpacer, } from '@elastic/eui';
import { sections } from './../../../data/sections';
import './style.css'
import Card from './OneCard';


const Sections = (props) => {
   return (
      <div className='section'>
         <EuiFlexGroup direction="column" gutterSize="m" style={{ height: '70%', marginBot: '20px', boxSizing: 'border-box' }}>
            {sections.map(el => {
               return (
                  <Card
                     key={el.key}
                     PageCount={props.PageCount}
                     iconType={el.iconType}
                     title={el.title}
                     description={el.description}
                     urlName={el.urlName}
                  />
               )
            })}
         </EuiFlexGroup>
      </div>
   );
}

export default Sections;



// <EuiFlexItem >
// <EuiCard
//    icon={<EuiIcon size="xxl" type="heartbeatApp" />}
//    title="Опыт работы"
//    description="Программистом и не только"
//    display="subdued"
//    footer={
//       <div>
//          <EuiButton aria-label="Перейти" onClick={()=> props.PageCount(1)}>Перейти</EuiButton>
//          <EuiSpacer size="xs" />
//       </div>
//    }
// />
// </EuiFlexItem>
// <EuiFlexItem>
// <EuiCard
//    icon={<EuiIcon size="xxl" type="notebookApp" />}
//    title="Мои проекты"
//    description="на gitHub"
//    footer={
//       <div>
//          <EuiButton aria-label="Посмотреть" onClick={()=> props.PageCount(2)}>Посмотреть</EuiButton>
//          <EuiSpacer size="xs" />
//       </div>
//    }
// />
// </EuiFlexItem>
// <EuiFlexItem>
// <EuiCard
//    icon={<EuiIcon size="xxl" type="watchesApp" />}
//    title="Навыки"
//    description="стек технологий"
//    footer={
//       <div>
//          <EuiButton aria-label="Перейти" onClick={()=> props.PageCount(3)}>Перейти</EuiButton>
//          <EuiSpacer size="xs" />
//       </div>
//    }
// />
// </EuiFlexItem>
// <EuiFlexItem>
// <EuiCard
//    icon={<EuiIcon size="xxl" type="watchesApp" />}
//    title="Контакты"
//    description="со мной можно связаться как Вам удобно"
//    footer={
//       <div>
//          <EuiButton aria-label="Посмотреть" onClick={()=> props.PageCount(4)}>Посмотреть</EuiButton>
//          <EuiSpacer size="xs" />
//       </div>
//    }
// />
// </EuiFlexItem>
