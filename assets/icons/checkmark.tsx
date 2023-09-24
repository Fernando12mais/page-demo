import { ComponentProps } from 'react';

export default function Checkmark(props: ComponentProps<'svg'>) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2 8L5.99529 12L14 4'
        stroke='#2C7EF8'
        stroke-width='2.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}