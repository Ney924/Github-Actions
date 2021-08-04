import React from 'react';
import { EuiButton, EuiCard, EuiIcon, EuiFlexItem, EuiSpacer, } from '@elastic/eui';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
   return (
      <EuiFlexItem >
         <EuiCard
            icon={<EuiIcon size="xxl" type={props.iconType} />}
            title={props.title}
            description={props.description}
            display="subdued"
            footer={
               <div>
                  <NavLink
                     to={props.urlName}
                     activeClassName='active-link'
                     className='text'
                  >
                     <EuiButton aria-label="Перейти">Перейти</EuiButton>
                  </NavLink>
                  <EuiSpacer size="xs" />
               </div>
            }
         />
      </EuiFlexItem>
   )
}

export default Card;




//  <div>
//  <EuiButton aria-label="Перейти" onClick={() => props.PageCount(index)}>Перейти</EuiButton>
//  <EuiSpacer size="xs" />
//  </div> 