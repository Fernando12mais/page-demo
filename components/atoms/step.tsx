import RoundedCheckmark from '@/assets/icons/rounded-checkmark';
import { StepProps } from '@/models/step';

export default function Step({ number, status, text }: StepProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 lg:flex-row'>
      <Icon number={number} status={status} />
      <span
        className={`hidden text-xl lg:inline-block ${
          status == 'active' ? 'font-bold' : ''
        }`}
      >
        Step {number}:
      </span>
      <span
        className={`text-xs capitalize leading-[110%] lg:text-xl ${
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
      <div className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-sm text-background lg:h-10 lg:w-10 lg:text-xl'>
        {number}
      </div>
    );

  return (
    <div className='flex h-5 w-5 items-center justify-center rounded-full border border-primary text-sm text-primary lg:h-10 lg:w-10 lg:border-2 lg:text-xl'>
      {number}
    </div>
  );
}
