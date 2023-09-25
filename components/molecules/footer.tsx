import Lock from '@/assets/icons/lock';

export default function Footer() {
  return (
    <div className='bg-on-background '>
      <footer className='max-w-notebook mx-auto flex flex-col gap-6 p-5 text-xs text-background lg:flex-row lg:justify-between lg:px-2'>
        <div className='flex justify-center gap-3 '>
          <span>Copyright (c) 2023</span> <span>|</span>
          <address className='not-italic'>
            <a href='mailto:clarifionsupport@clarifion.com'>
              Clarifionsupport@clarifion.com
            </a>
          </address>
        </div>
        <span className='flex items-center justify-center gap-4'>
          <Lock className='inline-block flex-shrink-0 stroke-background' />
          Secure 256-bit SSL encryption.
        </span>
      </footer>
    </div>
  );
}
