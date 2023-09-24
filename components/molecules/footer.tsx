import Lock from '@/assets/icons/lock';

export default function Footer() {
  return (
    <footer className='bg-on-background p-5 text-xs text-background'>
      <div className='flex justify-center gap-3 '>
        <span>Copyright (c) 2023</span> <span>|</span>
        <address>
          <a href='mailto:clarifionsupport@clarifion.com'>
            Clarifionsupport@clarifion.com
          </a>
        </address>
      </div>
      <span className='mt-6 flex items-center justify-center gap-4'>
        <Lock className='inline-block flex-shrink-0 stroke-background' />
        Secure 256-bit SSL encryption.
      </span>
    </footer>
  );
}
