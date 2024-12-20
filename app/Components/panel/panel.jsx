import React, { useState, useEffect } from 'react';
import PanelItem from '../panelitem/panelitem';

const Panel = () => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <div className='w-[20%] h-full flex flex-col'>
      Panel
      <PanelItem page="/Home" text="Home"></PanelItem>
    </div>
  );
};

export default Panel;