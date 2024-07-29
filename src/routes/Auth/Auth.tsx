import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Button, Loader } from "../../components";
import { IFormData } from "../../types/types";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginUserMutation } from "../../redux/user/userApi";
import { setUser } from "../../redux/user/userSlice";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const initFormData = {
  username: "",
  password: "",
};

export function Auth() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IFormData>(initFormData);
  const dispatch = useAppDispatch();
  const [login, { isLoading, isError }] = useLoginUserMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await login(formData).unwrap();
      localStorage.setItem("authToken", user.token);
      dispatch(setUser(user));
      navigate("/");
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign in | Goods4you </title>
      </Helmet>
      <section className={`container ${styles.loginbox}`}>
        <h1>Sign in</h1>
        {!isLoading && !isError && (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="login" className={styles.hidden}>
              Login
            </label>
            <input
              type="text"
              name="username"
              id="login"
              placeholder="Login"
              onChange={handleChange}
            />
            <label htmlFor="password" className={styles.hidden}>
              Login
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <Button
              content="Sign in"
              width={178}
              height={62}
              role="submit"
            ></Button>
          </form>
        )}
        {isLoading && <Loader variant="large" />}
        {isError && <ErrorPage />}
      </section>
    </>
  );
}
