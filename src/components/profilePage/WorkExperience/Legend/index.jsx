import React from 'react';
import './style.css'

const Legend = (props) => {
   return (
      <div className='legend'>
         <div className='legend-item legend-item-name'>
            {props.name}
         </div>
         <div className='legend-item'>
            {props.timeInterval}
         </div>
         <div className='legend-item'>
            {props.period}
         </div>
      </div >
   )
}

export default Legend;