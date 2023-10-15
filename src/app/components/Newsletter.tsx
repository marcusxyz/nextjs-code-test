'use client';
import NewsletterForm from './NewsletterForm';
import LandscapeImage from './LandscapeImage';
import { NewsletterProps } from '../types/newsletter';
import Checkbox from './Checkbox';

const Newsletter = ({ content }: NewsletterProps) => {
  const { title = '', description = '', imageUrl = '' } = content;

  return (
    <section className="my-32 w-full md:px-12 xl:px-20 2xl:px-80">
      <div className="mb-8 text-center">
        <h2 className="text-4xl uppercase lg:capitalize">{title}</h2>
        <p className="text-2xl">{description}</p>
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
        <LandscapeImage alt={title} src={imageUrl} />
        <div className="flex min-w-[50%] flex-col justify-center lg:bg-white lg:p-16">
          <NewsletterForm />
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between gap-8 py-8 lg:flex-row">
        <div className="flex items-center gap-4">
          <Checkbox
            id="acceptTerms"
            name="isTermsChecked"
            errorMessageId="newsletterCheckboxError"
            form="newsletter"
            label="Jag accepterar hantering av personuppgifter"
          />
        </div>
        <button
          type="submit"
          form="newsletter"
          className="w-auto border-2 border-transparent bg-orange-600 px-20 py-4 text-white hover:border-black hover:bg-white hover:text-black"
        >
          Sign up
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
