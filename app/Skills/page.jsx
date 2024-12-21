"use client";

import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <div className="rounded-2xl flex flex-col gap-4 w-full h-full p-5 relative">
        <h1 className="text-5xl flex item gap-4 items-center tracking-widest font-custom z-10"><span className="text-itemcolor">~</span> <span className="text-gray-400">cd</span> <span>Skills</span></h1>
    </div>
  );
};

export default Skills;