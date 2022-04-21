import React from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  Legend,
  PieSeries,
} from 'react-jsx-highcharts'

const TotalVisitors = () => {
  const pieData = [
    {
      name: 'Above 18',
      y: 23,
    },
    {
      name: 'Below 18',
      y: 13,
    }
  ]

  return (
    <HighchartsChart>
      <Chart type="spline"/>
      <Legend />
        <PieSeries
          name="Total consumption"
          data={pieData}
          center={[100, 80]}
          size={100}
          showInLegend={false}
        />
    </HighchartsChart>
  )
}

export const TotalVisitorsHOC = withHighcharts(TotalVisitors, Highcharts)
