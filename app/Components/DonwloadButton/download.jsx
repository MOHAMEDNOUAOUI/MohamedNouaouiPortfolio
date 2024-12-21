import React, { useState, useEffect } from 'react';
import './download.css';
import { eurostyleNormal , robotoRegular } from '../../../lib/fonts';

const DownloadButton = () => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <div className={`fixed right-10 bottom-6 text-black cursor-pointer text-sm py-2 px-4 buttondesigned ${eurostyleNormal.className}`}>
        <a href="/MohamedNouaouiJ.pdf"
        download="MohamedNouaouiJ.pdf"
        >
          DOWNLOAD CV
        </a>
    </div>
  );
};

export default DownloadButton;