// Currency Format
export const formatCurrency = (amount) => {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
};

// Date Format
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN");
};

// Hide Account Number
export const maskAccountNumber = (accountNumber) => {
  return `XXXX XXXX ${accountNumber.slice(-4)}`;
};

// Generate Transaction ID
export const generateTransactionId = () => {
  return "TXN" + Date.now();
};