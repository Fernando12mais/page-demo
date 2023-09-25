import Checkmark from '@/assets/icons/checkmark';
import { UListProps } from '@/models/u-list';

export default function UList({ itens }: UListProps) {
  return (
    <ul>
      {itens.map((item, index) => (
        <li
          className='flex items-center gap-3 text-xs leading-[160%] text-info lg:text-base'
          key={index}
        >
          <Checkmark />
          <div>
            {item.content.map((content, ind) => (
              <span key={ind} className={content.bold ? 'font-bold' : ''}>
                {content.text}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
