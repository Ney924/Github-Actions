import React, { useState } from 'react';
import { EuiButtonIcon, EuiCard, EuiFlexItem } from '@elastic/eui';
import { SliderData } from '../../../../data/project/projectState'; //передать пропсами, это чёт калл
import './style.css';

const ImageSlider = () => {
   const [current, setCurrent] = useState(0)
   const length = SliderData.length

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }

   const prewSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }

   if (!Array.isArray(SliderData) || SliderData.length <= 0) {
      return null;
   }

   return (
      <div className='project-slider'>
         <EuiButtonIcon
            style={{ padding: '50px 30px', margin: '20px' }}
            display="base"
            iconType="arrowLeft"
            aria-label="Next" size='xl'
            onClick={prewSlide}
         />
         {SliderData.map((slide, key) => {
            return (
               <EuiFlexItem className={key === current ? 'project__slide-active' : 'project__slide'} key={key}>
                  {key === current && (
                     <EuiCard
                        textAlign="left"
                        image={<img src={slide.image} className='project__slide-img'/>}
                        description={slide.description}
                        size='xl'
                     >
                        <div>
                           <div className='project-slide__name'>
                              {slide.footer}
                           </div>
                           <a href={slide.link} target='_blank' className='project-slide__link'>Посмотреть на gitHub</a>
                        </div>
                     </EuiCard>
                  )}
               </EuiFlexItem>
            )
         })}
         <EuiButtonIcon
            style={{ padding: '50px 30px', margin: '20px' }}
            display="base"
            iconType="arrowRight"
            aria-label="Next" size='xl'
            onClick={nextSlide}
         />
      </div>
   );
}

export default ImageSlider;