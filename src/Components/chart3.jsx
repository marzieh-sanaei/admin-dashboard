import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'SUN', value: 400 },
  { name: 'MON', value: 300 },
  { name: 'TUE', value: 300 },
  { name: 'WED', value: 200 },
  { name: 'THU', value: 278 },
  { name: 'FRI', value: 189 },
];

const data02 = [
  { name: 'July', value: 2400 },
  { name: 'August', value: 4567 },
  { name: 'September', value: 1398 },
  { name: 'October', value: 9800 },
  { name: 'November', value: 3908 },
  { name: 'December', value: 4800 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#11d6b4"
            label
          />
          <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#11d6b4" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
