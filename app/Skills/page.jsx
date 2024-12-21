"use client";

import React, { useState, useEffect } from 'react';
import SkillItem from '../Components/Skillitem/skillitem';

const Skills = () => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <div className="rounded-2xl flex flex-col gap-4 w-full h-full p-5 relative">
        <h1 className="text-5xl flex item gap-4 items-center tracking-widest font-custom z-10"><span className="text-itemcolor">~</span> <span className="text-gray-400">cd</span> <span>Skills</span></h1>
    <p className='text-gray-400'>

    I am a <span className='text-itemcolor font-custom text-xl tracking-widest'>full-stack</span> developer with expertise in building scalable and efficient applications. On the back end, I specialize in <span className='text-itemcolor font-custom text-xl tracking-widest'>Java</span> with <span className='text-itemcolor font-custom text-xl tracking-widest'>Spring Boot</span>, creating robust APIs and microservices. For the front end, I work with modern frameworks like <span className='text-blue-500 font-custom text-xl tracking-widest'>React.js</span>, <span className='text-orange-400 font-custom text-xl tracking-widest'>next.js</span>, and <span className='text-red-500 font-custom text-xl tracking-widest'>Angular</span> to craft dynamic and responsive user interfaces. I have strong experience with databases, including <span className='text-xl font-custom tracking-widest text-white'> PostgreSQL</span> and MySQL, ensuring optimized data storage and retrieval. Passionate about learning, I constantly explore new tools and technologies to deliver innovative and effective solutions

    </p>

    <div className='w-full h-full font-custom'>
      <h2 className='text-2xl text-itemcolor'>GET STARTED</h2>
      <p className='text-gray-500'> Explore a wide range of technical expertise, from building modern web applications to developing scalable backend systems.</p>

        <div className="hoder w-full flex flex-col gap-1 ps-2 h-1/4">


        <div className="items w-full">
          <h2 className='text-xl uppercase tracking-widest'>Programming Languages / Markup and Style Languages:</h2>
          <div className='flex gap-3'>
          <SkillItem image="/images/skills/java.png" alt="java"></SkillItem>
          <SkillItem image="/images/skills/Typescript.png" alt="Typscript"></SkillItem>
          <SkillItem image="/images/skills/JavaScript.png" alt="JavaScript"></SkillItem>
          <SkillItem image="/images/skills/PHP.png" alt="PHP"></SkillItem>
          <SkillItem image="/images/skills/HTML.png" alt="HTML"></SkillItem>
          <SkillItem image="/images/skills/CSS.png" alt="CSS"></SkillItem>
          </div>
      </div>

      <div className="items w-full">
          <h2 className='text-xl uppercase tracking-widest'>Framework:</h2>
          <div className='flex gap-3'>
          <SkillItem image="/images/skills/SPRINGBOOT.png" alt="SPRINGBOOT"></SkillItem>
          <SkillItem image="/images/skills/ANGULAR.png" alt="ANGULAR"></SkillItem>
          <SkillItem image="/images/skills/REACT.png" alt="REACT"></SkillItem>
          <SkillItem image="/images/skills/NEXT.png" alt="NEXT"></SkillItem>
          <SkillItem image="/images/skills/LARAVEL.png" alt="LARAVEL"></SkillItem>
          </div>
      </div>

      <div className="items w-full">
          <h2 className='text-xl uppercase tracking-widest'>Others:</h2>
          <div className='flex gap-3'>
          <SkillItem image="/images/skills/DOCKER.png" alt="DOCKER"></SkillItem>
          <SkillItem image="/images/skills/POSTGRES.png" alt="POSTGRES"></SkillItem>
          <SkillItem image="/images/skills/MYSQL.png" alt="MYSQL"></SkillItem>
          <SkillItem image="/images/skills/GITHUB.png" alt="GITHUB"></SkillItem>
          <SkillItem image="/images/skills/INTELIJ.png" alt="INTELIJ"></SkillItem>
          <SkillItem image="/images/skills/VSCODE.png" alt="VSCODE"></SkillItem>
          </div>
      </div>

      </div>

      
    </div>

    
    </div>
  );
};

export default Skills;