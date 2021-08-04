import React from 'react';
import { EuiButton, EuiCard, EuiIcon, EuiFlexItem,  EuiSpacer, } from '@elastic/eui';


const Card = (props) => {
   const index = props.index
   return (
      <EuiFlexItem >
            <EuiCard
               icon={<EuiIcon size="xxl" type= {props.iconType}/>}
               title={props.title}
               description={props.description}
               display="subdued"
               footer={
                  <div>
                     <EuiButton aria-label="Перейти" onClick={()=> props.PageCount(index)}>Перейти</EuiButton>
                     <EuiSpacer size="xs" />
                  </div>
               }
            />
         </EuiFlexItem>
   )
}

export default Card;