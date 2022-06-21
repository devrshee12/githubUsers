import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// const chartConfigs = {
//   type: 'column2d',
//   width: 600,
//   height: 400,
//   dataFormat: 'json',
//   dataSource: {/* see data tab */ },
// };


const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: 'column2d',
    width: 400,
    height: 400,
    dataFormat: 'json',
    dataSource: {

      data: data
    },
  };
  return <ReactFC {...chartConfigs} />;
}


export default ChartComponent;