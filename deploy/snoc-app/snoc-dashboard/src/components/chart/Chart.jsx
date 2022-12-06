import React from 'react'
import {
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer } from 'recharts';
import './chart.scss'
const Chart = ({ aspect, title }) => {

  const data = [
    {
      name: 'January',
      total: 1200
    },
    {
      name: 'Febusary',
      total: 2100
    },
    {
      name: 'March',
      total: 1700
    },
    {
      name: 'April',
      total: 1100
    },
    {
      name: 'May',
      total: 1200
    },
    {
      name: 'June',
      total: 2000
    },
    {
      name: 'July',
      total: 1900
    },

  ];
  return (
    <div className='chart'>
      <h1 className="title">{title || "Revenue Summary"}</h1>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" className='chart-grid' />
      <Tooltip />
      <Area type="monotone" dataKey="total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Chart