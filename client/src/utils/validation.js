// Email Validation
export const isValidEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

// Password Validation
export const isValidPassword = (password) => {
  return password.length >= 6;
};

// Phone Validation
export const isValidPhone = (phone) => {
  return /^\d{10}$/.test(phone);
};

// Confirm Password Validation
export const isPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

// Amount Validation
export const isValidAmount = (amount) => {
  return Number(amount) > 0;
};