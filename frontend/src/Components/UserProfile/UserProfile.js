import React, { useEffect } from "react";
import "./UserProfile.css";
import exit from "../../Images/exit.svg";
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
import userBackground from "../../Images/userBackground.svg";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const UserProfile = () => {
   const { user } = useAuthContext();
   const { logout } = useLogout();

   const handleClick = () => {
      logout();
   };

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
               

               <div className="user__profile__container__name">
                  <div>
                     <Link to="/HomePage">
                        <img src={ArrowBack} alt="#" />
                     </Link>
                  </div>
                  <p>Profile</p>
                  <img
                     src={exit}
                     alt=""
                     onClick={handleClick}
                     style={{ width: "26px", cursor: "pointer", color: "red" }}
                  />
               </div>
            </div>
            <div className="user_img_div">
               <img src={userimgnew} alt="" className="userImg" />
            </div>
         </div>
         <div className="userName">
            <p>{user.username}</p>
         </div>
         <div className="menu__container__all">
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
         </div>
      </div>
   );
};

export default UserProfile;
