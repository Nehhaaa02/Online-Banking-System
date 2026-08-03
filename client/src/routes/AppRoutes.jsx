import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Account from "../pages/Account/Account";
import TransferMoney from "../pages/TransferMoney/TransferMoney";
import TransactionHistory from "../pages/TransactionHistory/TransactionHistory";
import Loan from "../pages/Loan/Loan";
import NotFound from "../pages/NotFound/NotFound";
import ChangePassword from "../pages/changePassword/changePassword";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminUsers from "../pages/AdminUsers/AdminUsers";
import AdminLoans from "../pages/AdminLoans/AdminLoans";
import AdminTransactions from "../pages/AdminTransactions/AdminTransactions";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/account"
  element={
    <ProtectedRoute>
      <Account />
    </ProtectedRoute>
  }
/>

<Route
  path="/transfer"
  element={
    <ProtectedRoute>
      <TransferMoney />
    </ProtectedRoute>
  }
/>

<Route
  path="/transactions"
  element={
    <ProtectedRoute>
      <TransactionHistory />
    </ProtectedRoute>
  }
/>

<Route
  path="/loan"
  element={
    <ProtectedRoute>
      <Loan />
    </ProtectedRoute>
  }
/>
<Route
  path="/change-password"
  element={
    <ProtectedRoute>
      <changePassword />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/users"
  element={
    <ProtectedRoute>
      <AdminUsers />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/loans"
  element={
    <ProtectedRoute>
      <AdminLoans />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin/transactions"
  element={
    <ProtectedRoute>
      <AdminTransactions />
    </ProtectedRoute>
  }
/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  
}

export default AppRoutes;