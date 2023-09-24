import { ComponentProps } from 'react';

export default function PrimaryButton(props: ComponentProps<'button'>) {
  return (
    <button
      className='flex items-center justify-center gap-4 rounded-[50px] bg-action p-4 text-sm font-bold uppercase text-background'
      {...props}
    >
      {props.children}
    </button>
  );
}
