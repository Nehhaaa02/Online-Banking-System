import "./AdminUsers.css";
import { useEffect, useState } from "react";
import API from "../../services/api";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
const [roleFilter, setRoleFilter] = useState("all");
  const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
    const response = await API.delete(`/api/admin/users/${id}`);

    alert(response.data.message);

    setUsers(users.filter((user) => user._id !== id));
  } catch (error) {
    alert(error.response?.data?.message || "Delete Failed");
  }
};
const handleRoleChange = async (id, role) => {
  try {
    const response = await API.put(`/api/admin/users/${id}/role`, {
      role,
    });

    alert(response.data.message);

    setUsers(
      users.map((user) =>
        user._id === id ? { ...user, role } : user
      )
    );
  } catch (error) {
    alert(error.response?.data?.message || "Role Update Failed");
  }
};

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get("/api/admin/users");
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
 const filteredUsers = users.filter((user) => {
  const matchesSearch =
    user.fullName.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.phone.includes(search);

  const matchesRole =
    roleFilter === "all" || user.role === roleFilter;

  return matchesSearch && matchesRole;
});

  return (
    <div className="admin-users">
      <h1>All Users</h1>
      <div className="filter-container">
  <input
    type="text"
    placeholder="Search by Name, Email or Phone"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={roleFilter}
    onChange={(e) => setRoleFilter(e.target.value)}
  >
    <option value="all">All Users</option>
    <option value="user">Users</option>
    <option value="admin">Admins</option>
  </select>
</div>

      <div className="table-container">
  <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
  <select
    value={user.role}
    onChange={(e) => handleRoleChange(user._id, e.target.value)}
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</td>
    <td>
  <button onClick={() => handleDelete(user._id)}>
    Delete
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
 }

export default AdminUsers;