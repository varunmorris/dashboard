import Highcharts from 'highcharts' // Highcharts 7+
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Tooltip,
  Legend,
  LineSeries,
} from 'react-jsx-highcharts'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const RecentReports = () => (
  <HighchartsChart styledMode>
    <Chart />

    <Title>Git Hub Practice</Title>

    <Legend
      layout="vertical"
      align="right"
      verticalAlign="middle"
      borderWidth={0}
    />

    <Tooltip valueSuffix=" ($Million)" shared />

    <XAxis categories={MONTHS}>
      <XAxis.Title>Sales</XAxis.Title>
    </XAxis>

    <YAxis>
      <YAxis.Title>Sales ($Million)</YAxis.Title>
      <LineSeries
        name="2018 Report"
        data={[
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
        ]}
      />
      <LineSeries
        name="2019 Report"
        data={[
          22.1, 22.1, 21.0, 18.4, 15.3, 12.9, 12.0, 13.2, 15.3, 17.7, 19.5,
          21.2,
        ]}
      />
    </YAxis>
  </HighchartsChart>
)

export const RecentReportsHOC = withHighcharts(RecentReports, Highcharts)
