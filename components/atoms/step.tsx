import RoundedCheckmark from '@/assets/icons/rounded-checkmark';
import { StepProps } from '@/models/step';

export default function Step({ number, status, text }: StepProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Icon number={number} status={status} />

      <span
        className={`text-xs capitalize leading-[110%] ${
          status == 'active' ? 'font-bold' : ''
        }`}
      >
        {text}
      </span>
    </div>
  );
}

function Icon({ number, status }: Pick<StepProps, 'number' | 'status'>) {
  if (status == 'done') return <RoundedCheckmark />;
  if (status == 'active')
    return (
      <div className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-sm text-background'>
        {number}
      </div>
    );

  return (
    <div className='flex h-5 w-5 items-center justify-center rounded-full border border-primary text-sm text-primary'>
      {number}
    </div>
  );
}
