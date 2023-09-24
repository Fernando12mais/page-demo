'use client';
import ArrowLeft from '@/assets/icons/arrow-left';
import CheckmarkStarburst from '@/assets/icons/checkmark-starburst';
import Image from 'next/image';
export default function Header() {
  return (
    <header className='flex gap-2 bg-on-background px-5 py-2.5 text-background'>
      <ArrowLeft />

      <CheckmarkStarburst />

      <span>30-DAY SATISFACTION GUARANTEE</span>

      <ArrowLeft />
    </header>
  );
}
