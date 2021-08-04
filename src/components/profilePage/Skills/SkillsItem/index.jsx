import React from 'react';
import { EuiBetaBadge } from '@elastic/eui';

const SkillsItem = (props) => {
   return (
      <EuiBetaBadge
         key={props.key}
         label={props.name}
         className='item'
         tooltipContent={props.description} style={{ margin: '0 5px' }}
      />
   )
}

export default SkillsItem;