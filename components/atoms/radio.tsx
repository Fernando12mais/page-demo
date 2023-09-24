export default function Radio({
  label,
  checked,
}: {
  label: string;
  checked: boolean;
}) {
  return (
    <label className='container-radio'>
      <span className='text-label ms-4 text-xs font-light'>{label}</span>
      <input checked={checked} type='radio' name='radio' />
      <span className='checkmark'></span>
    </label>
  );
}
