import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './../index.css'

const data = [
  {
    name: 'June',
    Laptop: 4000,
    Mobile: 2400,
    Tablet: 2400,
  },
  {
    name: 'July',
    Laptop: 3000,
    Mobile: 1398,
    Tablet: 2210,
  },
  {
    name: 'Agust',
    Laptop: 2000,
    Mobile: 9800,
    Tablet: 2290,
  },
  {
    name: 'September',
    Laptop: 2780,
    Mobile: 3908,
    Tablet: 2000,
  },
  {
    name: 'October',
    Laptop: 1890,
    Mobile: 4800,
    Tablet: 2181,
  },
  {
    name: 'Novamber',
    Laptop: 2390,
    Mobile: 3800,
    Tablet: 2500,
  },
  {
    name: 'December',
    Laptop: 3490,
    Mobile: 4300,
    Tablet: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-area-chart-forked-5yjhcs';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Laptop" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Mobile" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Tablet" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
