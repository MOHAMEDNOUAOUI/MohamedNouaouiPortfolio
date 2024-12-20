import React, { useState, useEffect } from 'react';
import PanelItem from '../panelitem/panelitem';
const Panel = () => {
  const [state, setState] = useState();


  useEffect(() => {
    
  }, []);

  return (
    <div className='w-[18%] h-full flex flex-col gap-3'>
      <PanelItem page="/" text="Home"></PanelItem>
      <PanelItem page="/GettingStarted" text="Geting started"></PanelItem>
    </div>
  );
};

export default Panel;