"use client"

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ value }: any) => {
    return (
        <div className='w-24 h-24 rounded-full mx-auto'>
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: `rgba(62, 152, 199, ${value / 100})`,
                    trailColor: '#283365',
                    textSize: '18px',
                })}
            />
            <div className=' text-[8px]' style={{ textAlign: 'center', color: '#fff', marginTop: '-40px' }}>
                <div>Goal</div>
                <div>Completed</div>
            </div>

        </div>
    );
};

export default CircularProgress;
