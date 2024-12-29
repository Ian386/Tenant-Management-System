import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/DashboardComponents/Nav";

const Dashboard = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Ensure only authenticated users can access the Dashboard
  if (!isAuthenticated) {
    navigate("/Login");
    return null; // Prevent further rendering until redirection
  }

  return (
    <>
      <Nav />
      <div className="dashboard-content">
        <h3>Welcome Admin</h3>
        <Link
          to="/Send Alert"
          state={{ from: "/Dashboard" }} // Pass state to restrict access
        >
          Send Alert
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
