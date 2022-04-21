import React from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ColumnSeries,
} from 'react-jsx-highcharts'

const TotalUsers = () => {


  return (
    <HighchartsChart styledMode>
      <Chart  />
      <Tooltip valueSuffix="<b>{point.x}</b><br/>" />
      <Legend />

      <XAxis categories={['2005', '2010', '2015', '2020', '2025', '2030', '2035']} />

      <YAxis>
        <ColumnSeries stacking='normal' dataLabels={{enabled: false}} name="Male" data={[163, 203, 276, 408, 547, 729, 628]} />
        <ColumnSeries stacking='normal' dataLabels={{enabled: false}} name="Female" data={[102, 102, 120, 160, 230, 280, 460]} />
      </YAxis>
    </HighchartsChart>
  )
}

export const TotalUsersHOC = withHighcharts(TotalUsers, Highcharts)
