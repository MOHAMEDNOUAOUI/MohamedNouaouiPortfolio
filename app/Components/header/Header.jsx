import React, { useState, useEffect } from 'react';

const Header = () => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <div className='w-full h-24 py-4 flex text-xl font-bold gap-2 font-custom'>
    <span className='font-normal text-md tracking-wider'>Portfolio  <span className='text-gray-500'>/</span> <span className='text-itemcolor'>v0.1</span></span>
    </div>
  );
};

export default Header;