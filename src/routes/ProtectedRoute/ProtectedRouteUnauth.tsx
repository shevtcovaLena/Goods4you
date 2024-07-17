import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../helpers/isAuth';

interface Props {
    element: React.ReactElement;
}  

export const ProtectedRouteAuth = ({ element } : Props) => {
  return isAuthenticated() ? <Navigate to="/" /> : {element} ;
};
