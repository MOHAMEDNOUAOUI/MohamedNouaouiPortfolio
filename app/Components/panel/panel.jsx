"use client";

import React, { useState, useEffect } from 'react';
import PanelItem from '../panelitem/panelitem';
import { TbSmartHome } from "react-icons/tb";
import { IoFlagOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { GrNodes } from "react-icons/gr";

import { eurostyleNormal } from '../../../lib/fonts';

const Panel = () => {
  const [state, setState] = useState();


  useEffect(() => {
    
  }, []);

  return (
    <div className={`w-[20%] h-full flex flex-col gap-4 ${eurostyleNormal.className}`}>
      
      <div>
      <PanelItem page="/" text="Home" Icon={TbSmartHome}></PanelItem>
      <PanelItem page="/GettingStarted" text="Education" Icon={IoFlagOutline}></PanelItem>
      </div>
      
      <div className='flex flex-col'>
        <p className='ps-4 text-sm text-gray-400 tracking-widest uppercase'>Instalation</p>
        <PanelItem page="/Skills" text="Skills" Icon={BiWorld }></PanelItem>
        <PanelItem page="/Projects" text="Projects" Icon={GrNodes }></PanelItem>
      </div>
    </div>
  );
};

export default Panel;