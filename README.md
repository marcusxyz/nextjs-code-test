<img width="1183" alt="Screenshot 2023-10-15 at 14 49 42" src="https://github.com/marcusxyz/nextjs-code-test/assets/46654887/a66e72df-4ff8-4286-b806-e78e4b114424">

## nextjs-code-test
A Next.js code test for a job interview. 

## Installation

1. Clone the repo
2. Run `npm install` and `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
4. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## The assignment

- Create two components based on design
  - Category component (No functionality)
  - Newsletter component (With functionality, see details below)

- Functionality for Newsletter component
  - Validate the fields client side with error states
    - Firstname: Required
    - Lastname: Required
    - Email: Required | ValidEmail
   - Post the form fields to a Next.js API route when the form is submitted
     - Validate the fields again server side with the same requirements
       - If all fields is valid: Send back HTTP status `200` with success message
       - If some fields is invalid: Send back HTTP status `403` with info about the fields that is invalid
       - Handle the different status codes and field errors client side in the form


## Demo

Here is a live demo of the project: [nextjs-code-test.vercel.app](nextjs-code-test.vercel.app)

## Built with

- [Next.js](https://nextjs.org/) - A front-end framework that makes it easy to build fast websites with React.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- [Typescript](https://www.typescriptlang.org/) - An open-source language which builds on JavaScript by adding static type definitions.
