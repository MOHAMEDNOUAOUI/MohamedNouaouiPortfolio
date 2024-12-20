import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const PanelItem = ({page , text , icon}) => {
  const [state, setState] = useState();

  const pathname = usePathname();
  const isActive = pathname === page;

  useEffect(() => {
    
  }, []);

  return (
    <Link
    href={page}
    className={`text-[1.1rem] p-2 rounded-xl ps-3 ${
      !isActive
        ? 'bg-activecolor text-activeitemcolor'
        : 'bg-itembgcolor text-itemcolor'
    }`}
  >
    <span>{text}</span>
  </Link>
  );
};

export default PanelItem;