import React, { useEffect } from "react";
import "./UserProfile.css";
import ring from "../../Images/ring.svg";
import charge from "../../Images/charge.svg";
import ArrowBack from "../../Images/ArrowBack.svg";
import userimgnew from "../../Images/userimgnew.svg";
import userIcon from "../../Images/userIcon.svg";
import twousericon from "../../Images/twousericon.svg";
import data from "../../Images/data.svg";
import security from "../../Images/security.svg";
import message from "../../Images/message.svg";
import diamond from "../../Images/diamond.svg";
import { Link } from "react-router-dom";
import userBackground from '../../Images/userBackground.svg'

const UserProfile = () => {
  let index = localStorage.getItem("index");
  let name = JSON.parse(localStorage.getItem("user name"));
  let user_name = name[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="user__profile__container">
      <div
        className="user__profile__top"
        style={{
          backgroundImage: `url(${userBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div className="user__profile__container__charge">
            <p>9:41</p>
            <img src={charge} alt="" />
          </div>

          <div className="user__profile__container__name">
            <div>
              <Link to="/HomePage">
              <img src={ArrowBack} alt="#" /></Link>
            </div>
            <p>Profile</p>
            <img src={ring} alt="" />
          </div>
        </div>
        <div className="user_img_div">
        <img src={userimgnew} alt="" className="userImg" />
        </div>
      </div>
      <div  className="userName">
        <p>{user_name}</p>
      </div>
      <div className="menu__container_diamond">
        <img src={diamond} alt="" className="diamond" />
        <p>Invite Friends</p>
      </div>
      <div className="menu__container">
        <img src={userIcon} alt="" />
        <p>Account info</p>
      </div>
      <div className="menu__container">
        <img src={twousericon} alt="" />
        <p>Personal profile</p>
      </div>
      <div className="menu__container">
        <img src={message} alt="" />
        <p>Message center</p>
      </div>
      <div className="menu__container">
        <img src={security} alt="" />
        <p>Login and security</p>
      </div>
      <div className="menu__container_last">
        <img src={data} alt="" />
        <p className="last-p">Data and privacy</p>
      </div>
    </div>
  );
};

export default UserProfile;
