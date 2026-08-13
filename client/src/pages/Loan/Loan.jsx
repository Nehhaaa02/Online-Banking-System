import "./Loan.css";
import { useState } from "react";
import API from "../../services/api";

function Loan() {
  const [formData, setFormData] = useState({
    loanType: "",
    amount: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/api/loans/apply", formData);

      alert(response.data.message);

      setFormData({
        loanType: "",
        amount: "",
        duration: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Loan Application Failed");
    }
  };

  return (
    <div className="loan-page">
      <div className="loan-box">
        <h1>Loan Application</h1>

        <form onSubmit={handleSubmit}>
          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
          >
            <option value="">Select Loan Type</option>
            <option value="Personal">Personal</option>
            <option value="Home">Home</option>
            <option value="Education">Education</option>
            <option value="Car">Car</option>
          </select>

          <input
            type="number"
            name="amount"
            placeholder="Loan Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration (Years)"
            value={formData.duration}
            onChange={handleChange}
            required
          />

          <button type="submit">Apply Loan</button>
        </form>
      </div>
    </div>
  );
}

export default Loan;