import React, { useState, useEffect } from 'react';
import './iconsbutton.css';


const IconButton = ({Icon : Icon , link }) => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
        <a href={link} target='_blank' className={`buttondesigned p-3`}>
            {Icon && <Icon className="text-2xl text-center text-black"/>}
        </a>
  );
};

export default IconButton;