import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const PanelItem = ({page , text , Icon : Icon}) => {
  const [state, setState] = useState();

  const pathname = usePathname();
  const isActive = pathname === page;

  useEffect(() => {
    
  }, []);

  return (
    <Link
    href={page}
    className={`text-[1.1rem] p-2 rounded-xl ps-3 flex items-center gap-2 ${
      !isActive
        ? 'bg-activecolor text-activeitemcolor'
        : 'bg-itembgcolor text-itemcolor'
    }`}
  >
    {Icon && <Icon className="text-lg text-center" />}
    <span className='tracking-widest font-custom text-[1.1rem] text-center'>{text}</span>
  </Link>
  );
};

export default PanelItem;