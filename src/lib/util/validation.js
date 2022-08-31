const EMAIL_REGEX = /[@]/;
const PW_MIN_LENGTH = 8;

export const validateEmail = email => {
  if (email.length === 0) return 'idle';
  if (EMAIL_REGEX.test(email)) return 'valid';
  return 'invalid';
};

export const validatePW = password => {
  if (password.length === 0) return 'idle';
  if (password.length >= PW_MIN_LENGTH) return 'valid';
  return 'invalid';
};
