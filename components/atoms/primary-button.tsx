import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export default function PrimaryButton(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'flex items-center justify-center gap-4 rounded-[50px] bg-action p-4 text-sm font-bold uppercase text-background lg:gap-5 lg:text-xl',
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
