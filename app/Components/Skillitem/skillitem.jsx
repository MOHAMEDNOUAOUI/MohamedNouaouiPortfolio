import React, { useState, useEffect } from 'react';
import './skillitem.css';


const SkillItem = ({image , alt}) => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <div className='itemskill items-center flex justify-center rounded-lg h-[3.5rem] w-[3.5rem]'>
        <img className='w-3/4' src={image} alt={alt} />
    </div>
  );
};

export default SkillItem;