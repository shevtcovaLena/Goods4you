import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useFetchUserByTokenQuery } from "../../redux/user/userApi";
import { Loader } from "../../components";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, unSetUser } from "../../redux/user/userSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

interface Props {
  element: React.ReactElement;
}

export const ProtectedRouteAuth = ({ element }: Props) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("authToken");

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useFetchUserByTokenQuery(token ?? "");

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  if (isLoading) {
    return <Loader variant="large" />;
  }

  if (isError) {
    if (
      (error as FetchBaseQueryError)?.status == 401 ||
      (error as FetchBaseQueryError)?.status == 403
    ) {
      dispatch(unSetUser());
    }
    return <Navigate to="/login" />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return element;
};
