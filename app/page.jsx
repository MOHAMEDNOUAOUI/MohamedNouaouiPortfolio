"use client";

import './page.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import SlidePage from "./Components/slidepage/slidepage";

import { FaGithub } from "react-icons/fa";
import IconButton from './Components/ButtonNavigate/IconButton';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import Point from './Components/point/point';

export default function Home() {

  return (
    <div className="flex flex-col gap-4 w-full h-full p-5 relative">
        <h1 className="text-5xl flex item gap-4 items-center tracking-widest font-custom z-10"><span className="text-itemcolor">~</span> <span className="text-gray-400">cd</span> <span>Introduction</span><Point></Point></h1>
        <div className="entry ps-5 text-base font-light font-Roboto tracking-wide z-10">
        <p className="tracking-wider text-md"><span className="text-xl text-gray-500">Hi!</span> My name is <span className="text-2xl text-itemcolor font-custom">Mohamed Nouaoui</span>, and I am a passionate Full Stack Developer based on Earth, driven by the endless possibilities of technology. With a strong foundation in both front-end and back-end development, I specialize in creating seamless, user-friendly web applications that solve real-world problems</p>
        </div>

      <div className='base w-full h-full rounded-3xl p-3 bg-itembgcolor relative'>
          
          <h2 className='relative z-10 font-custom text-2xl tracking-wider '><span className="text-itemcolor">~ </span><span>sudo</span> <span>pacman</span> <span className='text-itemcolor'>-S</span> <span className='text-2xl'>You can find me on</span> </h2>

          <div className='middle gap-1'>
            <div className="linkdin flex items-center justify-center">
            <IconButton Icon={FaLinkedin} link="https://www.linkedin.com/in/mohamed-nouaoui/" customClass="linkdin"></IconButton>
            </div>
            <div className="instagram flex items-center justify-center">
            <IconButton Icon={FaInstagram} link="https://www.instagram.com/moha.medvita/" customClass="Instagram"></IconButton>
            </div>
            <div className="coding flex items-center justify-center">
            <IconButton Icon={FaLaptopCode} link="https://www.codingame.com/profile/5ed4d47da2eab36364ac4855a98dd7646007775" customClass="codinggame"></IconButton>
            </div>
            <div className="github flex items-center justify-center">
            <IconButton Icon={FaGithub} link="https://github.com/MOHAMEDNOUAOUI"></IconButton>
            </div>
          </div>
      </div>
    </div>
  );
}
