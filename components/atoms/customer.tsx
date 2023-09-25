import Star from '@/assets/icons/star';
import Verify from '@/assets/icons/verify';
import { CustomerProps } from '@/models/customer';
import Image from 'next/image';

export default function Customer({ image, name, starCount }: CustomerProps) {
  const stars = Array.from({ length: starCount });
  return (
    <div className='flex gap-[.8125rem]'>
      <Image
        width={48}
        height={48}
        src={image}
        alt='customer picture'
        className='h-12 w-12 rounded-full'
      />

      <div className='flex flex-col justify-between'>
        <div className='flex items-center gap-1'>
          {stars.map((star, index) => (
            <Star key={index} />
          ))}
        </div>
        <div className='flex items-center gap-2'>
          <span>{name}</span>
          <Verify />
          <span className='text-success'>Verified Customer</span>
        </div>
      </div>
    </div>
  );
}
