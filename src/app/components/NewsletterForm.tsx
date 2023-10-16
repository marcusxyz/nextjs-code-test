import { useState } from 'react';
import {
  isValidEmail,
  isValidName,
  validateCheckbox,
} from '../utils/form-validators';
import { NewsletterInputProps } from '../types/newsletter';
import { inputFieldsMockData } from '../mockData/inputFieldsMockData';

const initialFormData: NewsletterInputProps = {
  firstName: '',
  lastName: '',
  email: '',
};

const errorMessage: NewsletterInputProps = {
  firstName: '',
  lastName: '',
  email: '',
};

const NewsletterForm = () => {
  const [formData, setFormData] =
    useState<NewsletterInputProps>(initialFormData);
  const [errorMessages, setErrorMessages] =
    useState<NewsletterInputProps>(errorMessage);
  const [apiResponseMessage, setApiResponseMessage] = useState<string>('');

  const validate = (formValues: Record<string, any>) => {
    let error: NewsletterInputProps = {
      firstName: '',
      lastName: '',
      email: '',
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

    return error;
  };

  const handleChange = (e: Record<string, any>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    // Remove error message when user starts typing
    setErrorMessages({
      ...errorMessages,
      [e.currentTarget.name]: '',
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessages(validate(formData));

    // Use the validateCheckbox function to check if the checkbox is checked
    const isCheckboxChecked = validateCheckbox();

    // Prevent form submission if checkbox is not checked
    if (!isCheckboxChecked) {
      return;
    }

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
        const { message } = data;

        // Display success message to user
        setApiResponseMessage(message);
      }
    } catch (error) {
      setApiResponseMessage('Something went wrong. Please try again later.');
      return error;
    }
  };

  return (
    <form onSubmit={handleSubmit} id="newsletter">
      <div className="mb-4">
        {inputFieldsMockData.map(({ id, name, placeholder, type }) => (
          <div className="mb-4" key={id}>
            <input
              className="w-full border bg-stone-100 p-4 uppercase"
              id={id}
              name={name}
              placeholder={placeholder}
              type={type}
              onChange={handleChange}
            />
            <span className="mt-2 block text-red-600">
              {errorMessages[name as keyof NewsletterInputProps]}
            </span>
          </div>
        ))}
        <span className="mt-12 block text-lg">{apiResponseMessage}</span>
      </div>
    </form>
  );
};

export default NewsletterForm;
