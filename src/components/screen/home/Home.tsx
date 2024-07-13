import { useEffect, useState } from "react";
import { LoginPage } from "../login/Login";
import { CreatePost } from "./CreatePost";
import "./homeStyle.css";
import mockPostData from "./mockData";
import { PostContainer } from "./Post";
import { ShowPageEnum } from "./utils";
import { RegisterPage } from "../register/Register";
import { useMyContext } from "../../../ContextProvider";

export const HomePage = () => {
  const { homeState: showPage} = useMyContext()

  return (
    <>
      <div
        className={`homeContainer ${
          showPage !== ShowPageEnum.HOME ? "homeBlur" : ""
        }`}
      >
        <h1 className="userDetailTag">Hello</h1>
        <p className="profileSubHeader">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>

        <CreatePost />
        {mockPostData.map((post) => (
          <PostContainer {...post} />
        ))}
      </div>

      {showPage === ShowPageEnum.LOGIN && (
        <div className="overlayContainer">
          <LoginPage source="home" />
        </div>
      )}

      {showPage === ShowPageEnum.REGISTER && (
        <div className="overlayContainer">
          <RegisterPage source="home" />
        </div>
      )}
    </>
  );
};
