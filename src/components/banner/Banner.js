import React, { useState } from "react";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import DownloadIcon from "@mui/icons-material/Download";

import "./Banner.scss";

export const Banner = () => {
  const [selectedRating, setSelectedRating] = useState(5);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const handleRatingClick = (newRating) => {
    setSelectedRating(newRating);
  };

  return (
    <div className="banner limit">
      <div className="banner__wrapper">
        <div className="banner__wrapper__items">
          <img
            src="https://s3-alpha-sig.figma.com/img/5e72/0641/89cfa6fd0978b07dba12f1d8ac78f58d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A7XRontlEsr6JrF2IsbQMlEsbHDMxxIa5wf19dZT2tVjOwBapqvzDz2V7H9HsY3sJRPr2upQvOPVCPjm03TFgbhv8LuwRIXvlOOuMqHCyfci-ZjEIRdtmWrlQHd-AvE0-AnjtGRsJVE1O-g0iIhfCHwKjtqzcJzAe4XULxGar0Ey67tmxqldeBa0F2cZwm~H3qv4z2ooywIOwpbQNDNd2o9uSCmUZwOGIpl~dl-o4iPApqY-UmdB1fEtHWL4R9xKkW5oV3nM75DdbOx67BxzQ6c3drP5Tcinx-m1TFGzQ5HEi3Swym2duRNx4ffLEx7~UWuoPUAyhKkLkHB3ePa8KA__"
            alt="banner"
            className="banner__wrapper__bg"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/33b9/13b2/d1d33203b8f7e265ad443cd98e24a712?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jX7ZgjONAsp6dA9WBV22JAyKbjt13k~aB-labtXAiz6hLFpw~WVp~9ugWoM~pvVpx63u2oxfiwiuJ-hacE7~HprVBRb2YkMDEUBLzDaspPuh0aUkDuyRb2PF6NYkEmnzJXYq5i7g3uaPDrBGEJMC~GeDhTAXjFZybS66kHJl~FrUbNklcRETKLDIqBkoMT2AMWeODH7UfbbQIg1ZIhBvP6fVfr42o53GI28cIdc8C-rgtyJzvYtIGucFrvD5~6-hpwXojduCcFlnVRhwS6y-QMPNiI906ZcT5mLLjPHEqVpEkWeq87gZy-LL8dqzdcdoi1yZxPbs1Wo6oFgwn4yYRQ__"
            alt="banner"
            className="banner__wrapper__logo"
          />
          <div className="banner__wrapper__download">
            <span>Lorem Ipsum is simply dummy</span>
            <div className="banner__wrapper__download__buttons">
              <button className="button button__phone">
                <AndroidIcon />
                Android
              </button>
              <button className="button button__phone">
                <AppleIcon />
                iOS
              </button>
              <button className="button button__pc">
                <DownloadIcon />
                Download on PC
              </button>
            </div>
          </div>
          <div className="banner__wrapper__rating">
            <div className="banner__wrapper__rating__circle">
              <span className="banner__wrapper__rating__circle__value">
                6.4
              </span>
            </div>
            <div className="banner__wrapper__rating__info">
              <span className="players">Players</span>
              <span>12 votes</span>
              <span>
                Your rating: <span>{selectedRating}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__subheader">
        <div className="banner__subheader__accordeon">
          <div className="banner__subheader__menu">
            <span>More info</span>
            <div className="menu-ic" onClick={toggleInfo}>
              <div className={`bar4 ${isInfoOpen ? "change" : ""}`}></div>
              <div className={`bar2 ${isInfoOpen ? "change" : ""}`}></div>
              <div className={`bar5 ${isInfoOpen ? "change" : ""}`}></div>
            </div>
          </div>
          {isInfoOpen && (
            <div
              className={`banner__subheader__info ${
                isInfoOpen ? "banner__subheader__info__open" : ""
              }`}
            >
              <ul>
                <li className="line">Lorem Ipsum is simply dummy</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
            </div>
          )}
        </div>
        <div className="banner__subheader__text">
          <span>Lorem Ipsum Is simply Dummy</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
          <span>item</span>
        </div>
        <div className="banner__subheader__scale">
          <span className="banner__subheader__scale__label">Note</span>
          <div className="banner__subheader__scale__items">
            {[...Array(10).keys()].map((number) => {
              const rating = number + 1;
              return (
                <span
                  key={rating}
                  className={rating > selectedRating ? "inactive" : ""}
                  onClick={() => handleRatingClick(rating)}
                >
                  {rating}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
