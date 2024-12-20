import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PanelItem = ({page , text}) => {
  const [state, setState] = useState();

  useEffect(() => {
    
  }, []);

  return (
    <Link href={page}>
      {text}
    </Link>
  );
};

export default PanelItem;