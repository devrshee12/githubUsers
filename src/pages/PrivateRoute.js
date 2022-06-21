import React from 'react';
import { Route, Navigate , Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Dashboard';

const PrivateRoute = () => {
  const {isAuthenticated, user} = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    isUser ? <Dashboard/> : <Navigate to="/login" /> 
  );
};
export default PrivateRoute;
