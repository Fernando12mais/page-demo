import Image from 'next/image';

export default function Guarantee() {
  return (
    <div className='flex gap-4'>
      <div className='flex-shrink-0'>
        <Image
          src={'/satisfaction.png'}
          alt='guarantee logo'
          className='h-[3rem] w-[3rem] lg:h-[5.5rem] lg:w-[5.5rem]'
          width={88}
          height={88}
        />
      </div>
      <p className='text-start text-xs lg:text-base'>
        If you are not completely thrilled with your Clarifion - We have a{' '}
        <span className='font-bold'>30 day satisfaction guarantee</span>. Please
        refer to our return policy at the bottom of the page for more details.
        Happy Shopping!
      </p>
    </div>
  );
}
