export interface NewsletterMockdataProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface NewsletterProps {
  content: NewsletterMockdataProps;
}

export interface NewsletterInputProps {
  firstName: string;
  lastName: string;
  email: string;
}

export interface InputFieldsDataProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}
