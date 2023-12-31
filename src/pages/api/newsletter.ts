import { isValidEmail, isValidName } from '@/app/utils/form-validators';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message?: string;
  error?: string;
};

export const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  // Check if api is setup correctly
  if (req.method === 'GET') {
    return res
      .status(200)
      .json({ message: 'Newsletter API is up and running!' });
  }

  // Handle POST request
  if (req.method === 'POST') {
    const { email, firstName, lastName } = req.body;

    if (!isValidEmail(email)) {
      return res.status(403).json({ error: 'Invalid email address' });
    }

    if (!isValidName(firstName)) {
      return res.status(403).json({ error: 'Invalid first name' });
    }

    if (!isValidName(lastName)) {
      return res.status(403).json({ error: 'Invalid last name' });
    }

    return res
      .status(200)
      .json({ message: `Thanks for signing up! We'll keep you posted.` });
  }
  return res.status(405).json({ error: 'Method not allowed' });
};

export default handler;
