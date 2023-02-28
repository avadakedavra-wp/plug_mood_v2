import React from "react";
import ReactECharts from '@echarts-wrapper/react';



export default function PieCharts(){
    const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'right'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 20, name: 'รายได้จากสปอนเซอร์' },
              { value: 50, name: 'รายได้จากผู้ใช้งาน' },
              { value: 30, name: 'อื่นๆ' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      return(
        <>
        <ReactECharts
            option={option}s
            notMerge={true}
            lazyUpdate={true}
        />
    </>
      );
}