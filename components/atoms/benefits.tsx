import Amex from '@/assets/icons/amex';
import ApplePay from '@/assets/icons/apple pay';
import GPay from '@/assets/icons/gpay';
import Lock from '@/assets/icons/lock';
import MasterCard from '@/assets/icons/mastercard';
import PayPal from '@/assets/icons/paypal';
import ShopPay from '@/assets/icons/shop-pay';
import Visa from '@/assets/icons/visa';

export default function Benefits() {
  return (
    <div className='border-border flex flex-col rounded-[.25rem] border px-4 py-2 lg:flex-row lg:gap-4'>
      <div className='flex items-center justify-center gap-3 whitespace-nowrap text-xs text-info'>
        <span>Free shipping</span>
        <span className='text-border'>|</span>
        <Lock className='m-0 inline-block' />
        <span> Secure 256-bit SSL encryption</span>
      </div>
      <span className='text-border hidden lg:inline-block'>|</span>
      <hr className='my-3 bg-info lg:hidden' />
      <div className='flex items-center justify-center gap-[.125rem]'>
        <Visa />
        <ShopPay />
        <PayPal />
        <MasterCard />
        <GPay />
        <ApplePay />
        <Amex />
      </div>
    </div>
  );
}
