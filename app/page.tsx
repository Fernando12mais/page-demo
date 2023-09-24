import ArrowLeft from '@/assets/icons/arrow-left';
import LineRight from '@/assets/icons/line-right';
import McAfee from '@/assets/icons/mc-afee';
import NortonAntivirus from '@/assets/icons/norton-antivirus';
import RoundedPercentage from '@/assets/icons/rounded-percentage';
import Star from '@/assets/icons/star';
import Benefits from '@/components/atoms/benefits';
import Guarantee from '@/components/atoms/guarantee';
import PrimaryButton from '@/components/atoms/primary-button';
import Radio from '@/components/atoms/radio';
import Step from '@/components/atoms/step';
import UList from '@/components/atoms/u-list';
import { StepProps } from '@/models/step';
import { UListProps } from '@/models/u-list';
import Image from 'next/image';

export default function Home() {
  const steps: StepProps[] = [
    { number: 1, status: 'done', text: 'Cart Review' },
    { number: 2, status: 'done', text: 'Checkout' },
    { number: 3, status: 'active', text: 'Special Offer' },
    { number: 4, status: 'pending', text: 'Confirmation' },
  ];

  const stars = Array.from({ length: 5 });

  const listItems: UListProps['itens'] = [
    {
      content: [
        { text: 'Negative Ion Technology may ' },
        { text: 'help with allergens', bold: true },
      ],
    },
    {
      content: [
        { text: 'Designed for ' },
        { text: 'air rejuvenation', bold: true },
      ],
    },
    {
      content: [
        { text: 'Perfect for every room ', bold: true },
        { text: 'in all types of places.' },
      ],
    },
  ];

  return (
    <main className='mt-5 flex flex-col gap-6 px-5 pb-6 text-center'>
      <div className='flex items-center justify-between'>
        <Image
          src='/clarifion-logo.png'
          alt='logo image'
          width={106}
          height={20}
        />

        <div className='flex items-center gap-4'>
          <McAfee />
          <NortonAntivirus />
        </div>
      </div>

      <h1 className='mt-6'>Wait ! your order in progress.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur </p>

      <div className='flex justify-between gap-1'>
        {steps.map((step) => (
          <Step {...step} key={step.number} />
        ))}
      </div>

      <h2>
        <span className='text-primary'>ONE TIME ONLY</span> special price for 6
        extra Clarifion for only <span className='text-primary'>$14 each</span>{' '}
        ($84.00 total!)
      </h2>

      <Image
        src={'/clarifion-details.png'}
        alt='clarifion details image'
        width={800}
        height={600}
      />

      <div className='flex gap-4'>
        <div className='flex items-center justify-center rounded-lg bg-primary'>
          <Image
            src={'/clarifion-mini.png'}
            alt='clarifion-preview'
            width={80}
            height={80}
          />
        </div>
        <div className='flex flex-col gap-2.5'>
          <h3>Clarifion Air Ionizer</h3>
          <div className='flex items-center gap-px'>
            {stars.map((star, index) => (
              <Star key={index} />
            ))}
          </div>

          <label>
            <Radio checked={true} label='12 left in Stock' />
          </label>
        </div>

        <div className='ms-auto flex h-fit items-center gap-2'>
          <span className='text-tertiary decorated-text text-[.625rem] font-semibold'>
            $180
          </span>{' '}
          <span className='text-sm font-semibold text-primary'> $85 </span>
        </div>
      </div>
      <p className='text-center text-xs'>
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
      <UList itens={listItems} />

      <div className='bg-light flex items-center gap-4 px-4 py-3'>
        <RoundedPercentage className='flex-shrink-0' />
        <p className='text-start text-sm text-black'>
          Save <span className='text-primary'>53%</span> and get{' '}
          <span className='text-primary'>6 extra Clarifision</span> for only{' '}
          <span className='text-primary'>$14 Each</span>.
        </p>
      </div>

      <PrimaryButton>
        Yes - Claim my discount <LineRight />
      </PrimaryButton>

      <Benefits />
      <button className='mx-auto text-xs uppercase text-error underline underline-offset-2'>
        No thanks, I don’t want this.
      </button>

      <Guarantee />
    </main>
  );
}
