// Regexes from https://regexr.com/

export const isValidName = (name: string) => {
  const unallowedCharacters = new RegExp(
    /[!"#$%&()*+,\\/:;<=>?@\[\]^_`{|}~°ºᵃª]/,
  );
  const notOnlyDigits = new RegExp(/(?!^\d+$)^.+$/);
  return !unallowedCharacters.test(name) && notOnlyDigits.test(name);
};

export const isValidEmail = (email: string) => {
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/,
  );
  return emailRegex.test(email);
};

export const validateCheckbox = (): boolean => {
  // Get the id of the checkbox and the related error message
  const checkbox = document.getElementById('acceptTerms') as HTMLInputElement;
  const checkboxError = document.getElementById('newsletterCheckboxError');

  // If the checkbox is not checked, set an error message
  if (!checkbox?.checked && checkboxError) {
    checkboxError.innerHTML = 'Please check the box to accept the terms.';

    return false;
  }

  // Remove the error message if the checkbox is checked
  if (checkbox?.checked && checkboxError) {
    checkboxError.innerHTML = '';
  }

  return true;
};
