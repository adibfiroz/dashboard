"use client"

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    { name: '5', uv: 4000 },
    { name: '9', uv: 3000 },
    { name: '11', uv: 2000 },
    { name: '13', uv: 2780 },
    { name: '15', uv: 1890 },
    { name: '17', uv: 2390 },
    { name: '19', uv: 3490 },
    { name: '23', uv: 4500 },
    { name: '25', uv: 3000 },
    { name: '27', uv: 2000 },
];

const ActivityChart = () => (
    <ResponsiveContainer width="100%" height={250}>
        <BarChart
            data={data}
            className=''
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="uv" fill="#7294ff" />
        </BarChart>
    </ResponsiveContainer>
);

export default ActivityChart;
