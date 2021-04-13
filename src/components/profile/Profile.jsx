import React from "react";
import Footer from "../dashboard/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import md5 from "md5";
import Header from "../dashboard/Header";
import "../../assets/styles/components/profile/Profile.scss";

const Profile = ({ login = {}, name =""}) => {
  const hash = md5(login.email);
  return (
    <React.Fragment>
      <Header />
      <div className="profile">
        <div className="profile-back1">&nbsp;</div>
        <div className="profile-back2">&nbsp;</div>
        <div className="content-profile">
          <div className="content-profile-1">
            <img
              className="profile-icon"
              src={`https://www.gravatar.com/avatar/${hash}?d=identicon&s=200`}
              alt="Profile Foto"
            />
          </div>
          <div className="content-profile-2">
            <div className="flex-column">
              <span className="profile-name">{name}</span>
              <span className="flex-center">
                <FontAwesomeIcon icon={faCrown} />
                &nbsp;Premium
                <br />
                <br />
              </span>
              <div className="flex-center">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                &nbsp;&nbsp;
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                &nbsp;&nbsp;
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                &nbsp;&nbsp;
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </div>
            </div>
            <div className="flex-center">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
