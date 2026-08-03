import "./Account.css";
import { useEffect, useState } from "react";
import API from "../../services/api";
function Account() {
  const [account, setAccount] = useState({});

useEffect(() => {
  const fetchAccount = async () => {
    try {
      const response = await API.get("/accounts");
      console.log(response.data);
      setAccount(response.data.account);
    } catch (error) {
      console.log(error);
    }
  };

  fetchAccount();
}, []);
  return (
    <div className="account">
      <h1>My Account</h1>

      <div className="account-card">
       <p><strong>Full Name:</strong> {account.user?.fullName}</p>

<p><strong>Email:</strong> {account.user?.email}</p>

<p><strong>Phone:</strong> {account.user?.phone}</p>

<p><strong>Account Number:</strong> {account.accountNumber}</p>

<p><strong>Account Type:</strong> {account.accountType}</p>

<p><strong>IFSC Code:</strong> {account.ifscCode}</p>

<p><strong>Balance:</strong> ₹{account.balance}</p>
</div>
    </div>
  );
}

export default Account;