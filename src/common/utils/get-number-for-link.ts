export const getNumberForLink = (phoneNumber: string) => {
  return phoneNumber.replace(/\D/g, "");
};
