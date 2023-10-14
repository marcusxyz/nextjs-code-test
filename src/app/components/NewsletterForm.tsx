import { useState } from 'react';
import { isValidEmail, isValidName } from '../utils/form-validators';
import { ErrorMessageProps } from '../types/newsletter';
import { inputFieldsMockData } from '../mockData/inputFieldsMockData';

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  acceptTerms: '',
};

const errorMessage: ErrorMessageProps = {
  firstName: '',
  lastName: '',
  email: '',
  acceptTerms: '',
};

const NewsletterForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState(errorMessage);
  const [message, setMessage] = useState('');

  const validate = (formValues: Record<string, string>) => {
    let error: ErrorMessageProps = {
      firstName: '',
      lastName: '',
      email: '',
      acceptTerms: '',
    };

    // If user has entered first name, check if it's valid
    if (!isValidName(formValues.firstName)) {
      error.firstName = 'Please enter a valid first name';
    }

    // If user has entered last name, check if it's valid
    if (!isValidName(formValues.lastName)) {
      error.lastName = 'Please enter a valid last name';
    }

    // If user has entered email, check if it's valid
    if (!isValidEmail(formValues.email)) {
      error.email = 'Please enter a valid email';
    }

    // checkbox is not checked send error message
    if (!formValues.acceptTerms) {
      error.acceptTerms = 'Please check the box';
    }
    return error;
  };

  const handleChange = (e: Record<string, any>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 0) {
      setErrorMessages(validate(formData));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessages(validate(formData));

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('response', response);
        const { message } = data;
        setMessage(message); // Display success message to user
        setFormData(initialFormData); // Reset form
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
      return error;
    }
  };

  return (
    <form onSubmit={handleSubmit} id='newsletter'>
      <div className='mb-4'>
        {inputFieldsMockData.map(({ id, name, placeholder, type }) => (
          <div className='mb-4' key={id}>
            <input
              className='border bg-stone-100 p-4 w-full uppercase'
              id={id}
              name={name}
              placeholder={placeholder}
              type={type}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className='block mt-2 text-red-600'>
              {errorMessages[name as keyof ErrorMessageProps]}
            </span>
          </div>
        ))}
        <span className='block mt-12 text-lg'>{message}</span>
      </div>
    </form>
  );
};

export default NewsletterForm;
