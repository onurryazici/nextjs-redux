"use client";

import Layout from "../../components/layout";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { login, logout, toggleModerator } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";

const ReduxDemoPage = () => {
  const storeUsernameValue = useAppSelector(
    (state) => state.authReducer.value.username
  );

  const [Username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogIn = () => {
    dispatch(login(Username));
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
  const onClickLogOut = () => {
    dispatch(logout());
  };

  return (
    <Layout>
      <InputText
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Kullanıcı adı"
        width={250}
      />

      <div className="flex-row">
        <Button label="Login" onClick={onClickLogIn} className="mr-3" />
        <Button label="Logout" onClick={onClickLogOut} className="mr-3" />
        <Button label="Toggle" onClick={onClickToggle} className="mr-3" />
      </div>
      <br />
      <br />

      <p>Redux Username : {storeUsernameValue}</p>
    </Layout>
  );
};

export default ReduxDemoPage;
