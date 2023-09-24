import { ComponentProps } from 'react';

export default function RoundedCheckmark(props: ComponentProps<'svg'>) {
  return (
    <svg
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle
        cx='10.5'
        cy='10'
        r='9'
        fill='#85BF55'
        stroke='#85BF55'
        stroke-width='2'
      />
      <path
        d='M5.49976 10.5L8.82917 14L15.4998 7'
        stroke='white'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
