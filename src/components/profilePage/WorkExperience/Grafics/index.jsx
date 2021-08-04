import React from 'react';
import '@elastic/charts/dist/theme_only_light.css';
import { Chart, Partition, PartitionLayout } from '@elastic/charts';
import {colorsItem} from './../../../../data/workExperience/workExperience';
import './style.css';

const WorkExperienceGrafic = () => {
   return (
      <div className='grafics'>
         <Chart className="story-chart">
            <Partition
               id="spec_1"
               data={[
                  { sitc1: 'ООО НПФ Сосны', exportVal: 47 },
                  { sitc1: 'ООО Битроботикс', exportVal: 14 },
                  { sitc1: 'Учебные проекты', exportVal: 4 },
                  { sitc1: 'Comindware', exportVal: 4 },
               ]}
               valueAccessor={(d) => d.exportVal}
               layers={[
                  {
                     groupByRollup: (d) => d.sitc1,
                     fillLabel: { textInvertible: true },
                     shape: {
                        fillColor: (d) => colorsItem[d.sortIndex],
                     },
                  },
               ]}
               config={{ partitionLayout: PartitionLayout.sunburst, linkLabel: { maximumSection: 10000 } }}
            />
         </Chart>
      </div>
   )
}

export default WorkExperienceGrafic;
