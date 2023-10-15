interface CheckboxProps {
  id: string;
  name: string;
  errorMessageId: string;
  form?: string;
  label: string;
}

const Checkbox = ({
  id = '',
  name = '',
  errorMessageId = '',
  form = '',
  label = '',
}: CheckboxProps) => {
  return (
    <div className='flex items-center gap-4'>
      <input
        className='form-checkbox p-3 checked:bg-orange-600'
        type='checkbox'
        form={form}
        name={name}
        id={id}
      />
      <div className='flex flex-col'>
        <label htmlFor={id} className='text-md form-check-label'>
          {label}
        </label>
        {/* Error message is inserted from validateCheckbox() function */}
        {errorMessageId && (
          <span id={errorMessageId} className='text-red-600'></span>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
