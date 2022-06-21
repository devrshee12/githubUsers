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
    type: 'pie3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "45%"
      },

      data: data
    },
  };
  return <ReactFC {...chartConfigs} />;
}


export default ChartComponent;