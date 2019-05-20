import React from "react";
import ReactDOM from "react-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

import "./styles.css";

const data = [
  {
    name: "Monday",
    uv: 4000,
    Logins: 200,
    amt: 2400
  },
  {
    name: "Tuesday",
    uv: 3000,
    Logins: 400,
    amt: 2210
  },
  {
    name: "Wensday",
    uv: 2000,
    Logins: 122,
    amt: 2290
  },
  {
    name: "Thursday",
    uv: 2780,
    Logins: 100,
    amt: 2000
  },
  {
    name: "Friday",
    uv: 1890,
    Logins: 234,
    amt: 2181
  },
  {
    name: "Saturday",
    uv: 2390,
    Logins: 500,
    amt: 2500
  },
  {
    name: "Sunday",
    uv: 3490,
    Logins: 720,
    amt: 2100
  }
];

function App() {
  return (
    <div className="App">
      <BarChart width={630} height={250} data={data}>
        <CartesianGrid baselineShift="2 2" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Logins" fill="#21729b" />
      </BarChart>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
