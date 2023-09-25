import { ComponentProps } from 'react';

export default function Lock(props: ComponentProps<'svg'>) {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 13 13'
      fill='none'
      stroke='#696969'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_78_440)'>
        <path
          d='M9.625 5.99902H2.625C2.07272 5.99902 1.625 6.44674 1.625 6.99902V10.499C1.625 11.0513 2.07272 11.499 2.625 11.499H9.625C10.1773 11.499 10.625 11.0513 10.625 10.499V6.99902C10.625 6.44674 10.1773 5.99902 9.625 5.99902Z'
          stroke='inherit'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        <path
          d='M3.62598 5.99902V3.99902C3.62598 3.33598 3.88937 2.7001 4.35821 2.23126C4.82705 1.76242 5.46294 1.49902 6.12598 1.49902C6.78902 1.49902 7.4249 1.76242 7.89374 2.23126C8.36258 2.7001 8.62598 3.33598 8.62598 3.99902V5.99902'
          stroke='inherit'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_78_440'>
          <rect
            width='12'
            height='12'
            fill='white'
            transform='translate(0.5 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}
