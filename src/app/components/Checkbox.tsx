import { CheckboxProps } from '../types/general';

const Checkbox = ({
  id = '',
  name = '',
  errorMessageId = '',
  form = '',
  label = '',
}: CheckboxProps) => {
  return (
    <div className="flex items-center gap-4">
      <input
        className="form-checkbox:checked form-checkbox border-2 border-black p-3"
        type="checkbox"
        form={form}
        name={name}
        id={id}
      />
      <div className="flex flex-col">
        <label htmlFor={id} className="text-md form-check-label">
          {label}
        </label>
        {/* Error message is inserted from validateCheckbox() function */}
        {errorMessageId && (
          <span id={errorMessageId} className="text-red-600"></span>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
