import React from 'react';
import './style.css';
import { EuiFlexItem, EuiPanel, EuiIcon } from '@elastic/eui';

const Contact = (props) => {
   return (
      <EuiFlexItem>
         <EuiPanel style={{ height: '150px' }}>
            <div className='card'>
               <div className='contacts-name'>
                  <span className='contact-icon'>
                     <EuiIcon type={props.icon} size="l" />
                  </span>
                  <span className='contacts-item'> {props.name} </span>
               </div>
               <div className='contact-value'>
                  {props.value}
               </div>
            </div>
         </EuiPanel>
      </EuiFlexItem>
   )
}
export default Contact