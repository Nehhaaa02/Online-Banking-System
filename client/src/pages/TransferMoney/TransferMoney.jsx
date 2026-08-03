import "./TransferMoney.css";
import { useState } from "react";
import API from "../../services/api";

function TransferMoney() {
  const [formData, setFormData] = useState({
  receiver: "",
  amount: "",
});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTransfer = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/transactions/transfer", {
  receiver: formData.receiver,
  amount: Number(formData.amount),
});

      alert(response.data.message);

      setFormData({
        accountNumber: "",
        receiver: "",
        amount: "",
        description: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Transfer Failed");
    }
  };

  return (
    <div className="transfer">
      <h1>Transfer Money</h1>

      <form className="transfer-card" onSubmit={handleTransfer}>
        

        <input
          type="text"
          name="receiver"
          placeholder="Receiver Account Number"
          value={formData.receiver}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />

        

        <button type="submit">Transfer Money</button>
      </form>
    </div>
  );
}

export default TransferMoney;