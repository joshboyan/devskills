import React from 'react';
// require `react-d3-basic` for Line chart component.
const LineChart = require('react-d3-basic').LineChart;

const width = 300;
const height = 200;
const margins = { left: 25, right: 5, top: 0, bottom: 50 };

// chart series
// field: is what field your data want to be selected
// name: the name of the field that display in legend
// color: what color is the line
const chartSeries = [      
  {
    field: 'twitter',
    name: 'Twitter',
    color: '#741472'
  },
  {
    field: 'indeed',
    name: 'Indeed',
    color: '#005F45'
  }
];

// your x accessor
const x = function(d) {
  return d.index;
}
    
const SkillChart = ({ chartData }) => {
  
  return (
    <div>
      <LineChart
        margins={ margins }
        data={ chartData }
        width={ width }
        height={ height }
        chartSeries={ chartSeries }
        x={ x }
      />    
    </div>
  )
}

export default SkillChart
