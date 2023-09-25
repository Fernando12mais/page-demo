import { ComponentProps } from 'react';

export default function Checkmark(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className='h-4 w-4 lg:h-[1.375rem] lg:w-[1.375rem]'
    >
      <path
        d='M2 8L5.99529 12L14 4'
        stroke='#2C7EF8'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
