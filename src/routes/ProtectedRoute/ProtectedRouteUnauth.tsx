import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useFetchUserByTokenQuery } from "../../redux/user/userApi";
import { Loader } from "../../components";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/user/userSlice";

interface Props {
  element: React.ReactElement;
}

export const ProtectedRouteUnauth = ({ element }: Props) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("authToken");
  const {
    data: user,
    isLoading,
  } = useFetchUserByTokenQuery(token ?? "");

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  if (isLoading) {
    return <Loader variant="large" />;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return element;
};
