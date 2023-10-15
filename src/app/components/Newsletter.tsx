'use client';
import NewsletterForm from './NewsletterForm';
import LandscapeImage from './LandscapeImage';
import { NewsletterProps } from '../types/newsletter';
import Checkbox from './Checkbox';

const Newsletter = ({ content }: NewsletterProps) => {
  const { title = '', description = '', imageUrl = '' } = content;

  return (
    <section className='w-full my-32 border border-red-600 md:px-12 xl:px-20 2xl:px-80'>
      <div className='mb-8 text-center'>
        <h2 className='text-4xl uppercase lg:capitalize'>{title}</h2>
        <p className='text-2xl'>{description}</p>
      </div>
      <div className='flex flex-col gap-12 lg:gap-0 lg:flex-row'>
        <LandscapeImage alt={title} src={imageUrl} />
        <div className='min-w-[50%] lg:bg-white flex flex-col justify-center lg:p-16'>
          <NewsletterForm />
        </div>
      </div>
      <div className='py-8 flex flex-col-reverse gap-8 lg:flex-row justify-between'>
        <div className='flex items-center gap-4'>
          <Checkbox
            id='acceptTerms'
            name='isTermsChecked'
            errorMessageId='newsletterCheckboxError'
            form='newsletter'
            label='Jag accepterar hantering av personuppgifter'
          />
        </div>
        <button
          type='submit'
          form='newsletter'
          className='w-auto text-white bg-orange-600 px-20 py-4 border-2 border-transparent hover:bg-white hover:text-black hover:border-black'
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
