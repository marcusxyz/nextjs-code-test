export interface NewsletterMockdataProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface NewsletterProps {
  content: NewsletterMockdataProps;
}

export interface ErrorMessageProps {
  firstName: string;
  lastName: string;
  email: string;
}

export interface inputFieldsDataProps {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}
