export const validateOpaqueToken = (token: string) => {
  const regex = /^[a-f0-9]{64}$/i;
  const isValid = regex.test(token);

  return isValid;
};
