const validateRegister = ({ fullName, email, phone, password }) => {
  if (!fullName || !email || !phone || !password) {
    return "All fields are required";
  }

  if (!email.includes("@")) {
    return "Invalid Email";
  }

  if (phone.length !== 10) {
    return "Phone number must be 10 digits";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
};

module.exports = {
  validateRegister,
};