"use client";

import React from 'react';
import Point from '../Components/point/point';
import './education.css'

const HomePage = () => {
  return (
    <div className="rounded-2xl flex flex-col gap-4 w-full h-full p-5 relative">
        <h1 className="text-5xl flex item gap-4 items-center tracking-widest font-custom z-10"><span className="text-itemcolor">~</span> <span className="text-gray-400">cd</span> <span>Education</span></h1>

        <div className='bac w-full h-fit'>
          <div className="topside py-4 flex gap-2 items-center  w-full h-1/4 border border-gray-600 border-r">
          <div className='flex'>
            <Point></Point>
            <Point></Point>
            <Point></Point>
          </div>
          <h3 className='font-custom text-xl tracking-wider text-gray-500'>Baccalaureate in Physics.</h3>
          </div>


          <div className="bottomsie p-2 w-full border border-gray-600 border-t-0">

            <p className='text-gray-400 text-sm'>Year of Completion: <span className='text-itemcolor'>[ 2020 - 2021 ]</span></p>
            <p className="text-gray-200 text-xl">High School of Science, AL OUAZZANI  <span className='text-itemcolor'>[Safi]</span></p>

          </div>
        </div>


        <div className='bac w-full h-fit'>
          <div className="topside py-4 flex gap-2 items-center  w-full h-1/4 border border-gray-600 border-r">
          <div className='flex'>
            <Point></Point>
            <Point></Point>
            <Point></Point>
          </div>
          <h3 className='font-custom text-xl tracking-wider text-gray-500'>Formation YOUCODE. <span className='text-itemcolor'>(en cours)</span></h3>
          </div>


          <div className="bottomsie p-2 w-full border border-gray-600 border-t-0">

            <p className='text-gray-400 text-sm'>Year of Completion: <span className='text-itemcolor'>[ 2023 - 2025 ]</span></p>
            <p className="text-gray-200 text-xl">Developpement Web and Mobile - Youcode Safi <span className='text-itemcolor'>[OCP / Simplon.co]</span></p>

          </div>
        </div>
    </div>
  );
};

export default HomePage;