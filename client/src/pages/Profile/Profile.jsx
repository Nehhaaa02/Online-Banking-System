import "./Profile.css";
import { useEffect, useState } from "react";
import API from "../../services/api";

function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get("/api/users/profile");

        setFormData({
          fullName: response.data.user.fullName,
          email: response.data.user.email,
          phone: response.data.user.phone,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.put("/api/users/profile", {
        fullName: formData.fullName,
        phone: formData.phone,
      });

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };
    
  return (
    <div className="profile">
      
      <h1>Profile</h1>

      <form className="profile-card" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input type="email" value={formData.email} disabled />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;