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
import Comment from '@/components/molecules/comment';
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
    <main className='max-w-notebook mx-auto mt-5 flex flex-col gap-6 px-5 pb-6 text-center lg:gap-8 lg:px-0 lg:text-start'>
      <div className='flex items-center justify-between'>
        <Image
          className='hidden lg:block'
          src='/clarifion-logo.png'
          alt='logo image'
          width={192}
          height={36}
        />

        <Image
          className='lg:hidden'
          src='/clarifion-logo.png'
          alt='logo image'
          width={106}
          height={20}
        />

        <div className='my-5 flex items-center gap-4 lg:my-0 lg:gap-8'>
          <McAfee />
          <NortonAntivirus />
        </div>
      </div>

      <h1 className='text-center capitalize'>Wait ! your order in progress.</h1>
      <p className='text-center capitalize'>
        Lorem ipsum dolor sit amet, consectetur{' '}
      </p>

      <div className='flex justify-between gap-1 lg:mb-4 lg:mt-9'>
        {steps.map((step) => (
          <Step {...step} key={step.number} />
        ))}
      </div>
      <section className='flex flex-col gap-6 rounded-[10px] bg-[#fafafa] lg:gap-10 lg:p-10 xl:flex-row'>
        <h2 className='lg:hidden'>
          <span className='text-primary'>ONE TIME ONLY</span> special price for
          6 extra Clarifion for only{' '}
          <span className='text-primary'>$14 each</span> ($84.00 total!)
        </h2>
        <div className='flex flex-col gap-6'>
          <Image
            className='mx-auto lg:max-h-[591px] lg:max-w-[575px]'
            src={'/clarifion-details.png'}
            alt='clarifion details image'
            width={575}
            height={591}
          />
          <div className='hidden lg:block'>
            <Comment
              customer={{
                image: '/customer.png',
                starCount: 5,
                name: 'Ken T.',
              }}
              comment='As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.'
            />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h2 className='hidden lg:block'>
            <span className='text-primary'>ONE TIME ONLY</span> special price
            for 6 extra Clarifion for only{' '}
            <span className='text-primary'>$14 each</span> ($84.00 total!)
          </h2>

          <div className='flex gap-4'>
            <div className='flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-primary lg:h-[8.375rem] lg:w-[8.375rem]'>
              <Image
                src={'/clarifion-mini.png'}
                alt='clarifion-preview'
                width={134}
                height={134}
              />
            </div>
            <div className='flex flex-1 flex-col gap-2.5  lg:gap-3'>
              <div className='flex max-h-4 items-center'>
                <h3>Clarifion Air Ionizer</h3>
                <span className='text-tertiary decorated-text mr-2.5 ms-auto text-[.625rem] font-semibold lg:text-base'>
                  $180
                </span>{' '}
                <span className='max-h-4 text-sm font-semibold text-primary lg:text-[1.375rem] '>
                  {' '}
                  $84{' '}
                </span>
              </div>
              <div className='flex items-center gap-px'>
                {stars.map((star, index) => (
                  <Star key={index} />
                ))}
              </div>

              <label className='w-fit'>
                <Radio checked={true} label='12 left in Stock' />
              </label>
              <p className='hidden text-base leading-[140%] lg:block'>
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>

          <p className='text-xs lg:hidden'>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
          <UList itens={listItems} />

          <div className='bg-light flex items-center gap-4 px-4 py-3'>
            <RoundedPercentage className='flex-shrink-0' />
            <p className='text-start text-sm text-black lg:text-base'>
              Save <span className='text-primary'>53%</span> and get{' '}
              <span className='text-primary'>6 extra Clarifision</span> for only{' '}
              <span className='text-primary'>$14 Each</span>.
            </p>
          </div>
          <div>
            <PrimaryButton className='mb-3 w-full'>
              Yes - Claim my discount <LineRight />
            </PrimaryButton>

            <Benefits />
          </div>
          <button className='mx-auto text-xs uppercase text-error underline underline-offset-2 lg:text-[1.125rem]'>
            No thanks, I don’t want this.
          </button>

          <Guarantee />
        </div>
      </section>
    </main>
  );
}
