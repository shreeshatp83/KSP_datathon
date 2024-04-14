import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUserRole } from '../utils/auth';

const PrivateRoute = ({ allowedRoles, children }) => {
  const userRole = getUserRole();

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;