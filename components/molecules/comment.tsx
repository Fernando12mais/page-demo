import { CommentProps } from '@/models/comment';
import Customer from '../atoms/customer';

export default function Comment({ comment, customer }: CommentProps) {
  return (
    <div className='flex flex-col gap-[1.125rem] rounded-[.625rem] bg-background p-6'>
      <Customer {...customer} />
      <p className='text-base'>“{comment}”</p>
    </div>
  );
}
