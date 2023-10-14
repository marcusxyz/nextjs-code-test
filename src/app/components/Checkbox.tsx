import React from 'react';

const Checkbox = () => {
  // if not check box is checked send error message and prevent form from submitting
  // if (!formData.acceptTerms) {
  //     errorMessages.acceptTerms = 'Please accept terms';

  // }

  return (
    <div className='flex items-center gap-4'>
      <input
        className='form-checkbox p-3 checked:bg-orange-600'
        type='checkbox'
        name='acceptTerms'
        id='accept-terms'
        // value={formData.acceptTerms}
      />
      <div className='flex flex-col'>
        <label htmlFor='acceptTerms' className='text-md form-check-label'>
          Jag accepterar hantering av personuppgifter
        </label>
        {/* <span className='text-red-600'>{errorMessages.acceptTerms}</span> */}
      </div>
    </div>
  );
};

export default Checkbox;
