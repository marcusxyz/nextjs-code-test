import { useState } from 'react';

interface InputFieldProps {
  key: string;
  name: string;
  placeholder: string;
  type: string;
  defaultValue?: string;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  key,
  name,
  placeholder,
  type,
  defaultValue = '',
  errorMessage,
  handleChange = () => null,
}) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  const handleKeyDown = (e: Record<string, any>) => {
    setInputValue(e.currentTarget.value);
    handleChange(e.currentTarget.value);
  };

  return (
    <div className="mb-4">
      <input
        className="w-full border bg-stone-100 p-4 uppercase"
        key={key}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleKeyDown}
        value={inputValue}
      />
      <span className="text-red-600">{errorMessage}</span>
    </div>
  );
};

export default InputField;
