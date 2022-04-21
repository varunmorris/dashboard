import React from 'react'
import Highcharts from 'highcharts'
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  ColumnSeries,
  Legend,
} from 'react-jsx-highcharts'

const Tasks = () => {
  return (
    <HighchartsChart styledMode>
      <Chart />

      <Title>Tasks</Title>

      <Legend />

      <XAxis categories={['2015', '2016', '2017', '2018', '2019']} />

      <YAxis>
        <ColumnSeries name="Total" data={[30, 20, 10, 30, 40]} />
        <ColumnSeries name="To do" data={[20, 30, 50, 70, 60]} />
        <ColumnSeries name="Completed" data={[40, 30, 30, 90, 60]} />
        <ColumnSeries name="Overdue" data={[40, 30, 30, 90, 60]} />
      </YAxis>
    </HighchartsChart>
  )
}

export const TasksHOC = withHighcharts(Tasks, Highcharts)
