import { ComponentProps } from 'react';

export default function RoundedCheckmark(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-5 w-5 lg:h-10 lg:w-10'
      {...props}
    >
      <circle
        cx='10.5'
        cy='10'
        r='9'
        fill='#85BF55'
        stroke='#85BF55'
        strokeWidth='2'
      />
      <path
        d='M5.49976 10.5L8.82917 14L15.4998 7'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
