export const validateEmailInput = (email) => {
  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  if (!email || regex.test(email) === false) {
    return {
      isValid: false,
      errorMessage: 'Email is not valid',
    };
  }
  return {
    isValid: true,
    errorMessage: '',
  };
};