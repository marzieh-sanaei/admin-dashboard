import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2019",
    clothes: 590,
    Electronics: 800,
    Books: 1400,
  },
  {
    name: "2020",
    clothes: 868,
    Electronics: 967,
    Books: 1506,
  },
  {
    name: "2021",
    clothes: 1397,
    Electronics: 1098,
    Books: 989,
  },
  {
    name: "2022",
    clothes: 1480,
    Electronics: 1200,
    Books: 1228,
  },
  {
    name: "2023",
    clothes: 1520,
    Electronics: 1108,
    Books: 1100,
  },
  {
    name: "2024",
    clothes: 1400,
    Electronics: 680,
    Books: 1700,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/composed-chart-of-same-data-3cs8ym";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="clothes" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="clothes" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
