import React, { useState, useEffect } from 'react';

const Header = () => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <div className='w-full h-24 py-4 flex text-xl font-bold gap-2 font-custom'>
      Mohamed Nouaoui /<span className='font-normal'>Portfolio</span>
    </div>
  );
};

export default Header;