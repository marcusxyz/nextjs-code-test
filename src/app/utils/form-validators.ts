// Regexes from https://regexr.com/

export const isValidName = (name: string) => {
  const unallowedCharacters = new RegExp(
    /[!"#$%&()*+,\\/:;<=>?@\[\]^_`{|}~°ºᵃª]/
  );
  const notOnlyDigits = new RegExp(/(?!^\d+$)^.+$/);
  return !unallowedCharacters.test(name) && notOnlyDigits.test(name);
};

export const isValidEmail = (email: string) => {
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/
  );
  return emailRegex.test(email);
};
