import React from 'react';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import { EuiButton, EuiPageTemplate, EuiPageHeader, EuiFlexGrid, EuiFlexItem, EuiPanel } from '@elastic/eui';
import { contacts } from './../../../data/contacts/contacts';
import Contact from './ContactItem';

const Contacts = ({ button = <></> }, props) => {

   const back = () => {
      props.PageCount()
   } 

   return (
      <EuiPageTemplate
         restrictWidth={false}
         template="empty"
         style={{ borderRadius: '5px', height: '100%' }}
      >
         <EuiPageHeader
            iconType="watchesApp"
            template="empty"
            pageTitle="Контакты"
            rightSideItems={[button, <EuiButton onClick={back}>Закрыть</EuiButton>]}
            bottomBorder
            style={{ marginBottom: '20px'}}
         />
         <EuiFlexGrid columns={2}>
            {contacts.map(el => {
               return (
                  <Contact
                     name={el.name}
                     value={el.value}
                     icon={el.icon}
                  />
               )
            }
            )}
         </EuiFlexGrid>
      </EuiPageTemplate>
   )
}

export default Contacts;