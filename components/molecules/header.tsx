'use client';
import ArrowLeft from '@/assets/icons/arrow-left';
import CheckmarkStarburst from '@/assets/icons/checkmark-starburst';
import Heart from '@/assets/icons/heart';
import SyncCheck from '@/assets/icons/sync-check';
import Truck from '@/assets/icons/truck';
import { useCallback, useEffect, useRef, useState } from 'react';

type ActiveItem = {
  index: number;
  from: 'left' | 'right';
};

const headerItems = [
  { text: '30-DAY SATISFACTION GUARANTEE', icon: <CheckmarkStarburst /> },
  { text: 'Free delivery on orders over $40.00', icon: <Truck /> },
  {
    text: '50.000+ HAPPY CUSTOMERS',
    icon: <Heart />,
  },
  { text: '100% Money Back Guarantee', icon: <SyncCheck /> },
];
export default function Header() {
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    index: 0,
    from: 'right',
  });

  const activeHeader = headerItems.find(
    (item, index) => index == activeItem.index
  );

  const handleChangeItem = useCallback((item: ActiveItem) => {
    const isLastItem = headerItems.length - 1 == item.index;
    const isFirstItem = item.index == 0;

    if (isLastItem && item.from == 'right')
      return setActiveItem({ ...item, index: 0 });
    if (isFirstItem && item.from == 'left')
      return setActiveItem({ ...item, index: headerItems.length - 1 });

    return setActiveItem({
      ...item,
      index: item.from == 'right' ? item.index + 1 : item.index - 1,
    });
  }, []);

  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleChangeItem(activeItem);
    }, 5000);

    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [activeItem, handleChangeItem]);
  return (
    <div className='bg-on-background'>
      <header className='max-w-notebook sticky top-[-1px] z-10 mx-auto flex items-center justify-between  gap-2 overflow-hidden px-5 py-2.5 text-xs text-background lg:px-2'>
        <button
          className='lg:hidden'
          onClick={() =>
            handleChangeItem({ from: 'left', index: activeItem.index })
          }
        >
          <ArrowLeft />
        </button>
        {headerItems.map((item) => (
          <div key={item.text} className='hidden items-center gap-2 lg:flex'>
            {item.icon}

            <span>{item.text}</span>
          </div>
        ))}

        <div
          key={activeHeader?.text}
          className={`${
            activeItem.from == 'right'
              ? 'animate-comeFromLeft'
              : 'animate-comeFromRight'
          } flex items-center gap-2 lg:hidden`}
        >
          {activeHeader?.icon}
          <span>{activeHeader?.text}</span>
        </div>

        <button
          className='lg:hidden'
          onClick={() =>
            handleChangeItem({ from: 'right', index: activeItem.index })
          }
        >
          <ArrowLeft className='rotate-180' />
        </button>
      </header>
    </div>
  );
}
