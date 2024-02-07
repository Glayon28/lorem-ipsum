import React, { useState, useEffect } from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SearchIcon from "@mui/icons-material/Search";

import "./Header.scss";

export const AppHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="Header">
      <div className="Header__bar ">
        <div className="limit">
          <div className="Header__bar__wrapper ">
            <div className="Header__bar__wrapper__phones">
              <span>
                <PhoneIphoneIcon />
                Menu item 1
              </span>
              <span>
                <FilterAltIcon />
                Menu item 2
              </span>
              <span>
                <AndroidIcon />
                Menu item 3
              </span>
              <span>
                <AppleIcon />
                Menu item 4
              </span>
            </div>
            <div className="Header__bar__wrapper__links">
              <button>
                <FacebookIcon />
              </button>
              <button>
                <TwitterIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
              <button>
                <YouTubeIcon />
              </button>
              <button>
                <EmailIcon />
              </button>
              <button>
                <RssFeedIcon />
              </button>
            </div>
            <div className="theme__switch">
              <label className="theme__switch__wrapper" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={handleToggle}
                  checked={isDarkMode}
                />
                <div className="slider round">
                  <span className="icon">{isDarkMode ? "🌙" : "🔆"}</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="limit">
        <div className="Header__navbar">
          <div className="Header__navbar__logo">
            <img
              src={
                isDarkMode
                  ? "https://s3-alpha-sig.figma.com/img/4634/106c/7efe0055d6c943452f248bdf0def324c?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RaXv0D3DZzijl0R6Zb6Xy528DCzcfZM9OSW8t5xGHc-phcBhS-o8Zk9EbKpG2Pkzjc6BDtz4er6F~PDxvEIdY6ajh-ojT4XinSjJJ6hQ5igMxzK~XS5I5w6f9j8eSSUFB1CanfDNAazt1JBObb33nf-f5bUB2~m5oWAkhC1QzDG2~tn8tlCxwg9maw0NvRfd2BpBdvEj7Qfs2FNWpNPzGBtVdn8VG66bgverczU14Et0UEE3Dhly~b~CYwhBChsBY8wnuFvFV0FwVclXGbdZvGo7zW88MfV16peTLtL37YDUO44Kd3AUgzxekELp7dPDFmXwg15fWcyvPRni8Uuy8w__"
                  : "https://s3-alpha-sig.figma.com/img/a8a1/6aea/414f651a6e8cc9d65e2289b25e601886?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pp1WbNAgyx5P8vC4jDJhfny-fPWagifRgmXIJKDbleTuyaObmFYys43JjOlDtBJFc~Vu5Y8V2aZ9Uu3xy1yCjLOfulkZHV7WYLMpnS~eYfDWKquLi6QyGMxrcfimpHsqT6XyxzbigQD37wJ7taLx1dfyLmwiP0rvRdOmaN18tgG1MrY6VdH7pumL4ovvZCsdQyeKpyNjEHKX6SrzSAffqCMJ0c5zFILNIxXymJsnKcDdn1Y12FHPKdX8-sauB1NO8ccnV90x2UADJtvda5ljZ9gz8n9esqZKYNpTBCKKU24rTq9Uj1TPuAUcW3tkj2VqPmVe9OxDhvTphVkH3PMK~g__"
              }
              alt="logotype"
            />
          </div>
          <div className="Header__navbar__items">
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
            <span>Item</span>
          </div>
          <div className="Header__navbar__search">
            <form>
              <input type="text" placeholder="Search for" />
              <SearchIcon className="Header__navbar__search__icon" />
            </form>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar1 ${isMenuOpen ? "change" : ""}`}></div>
            <div className={`bar2 ${isMenuOpen ? "change" : ""}`}></div>
            <div className={`bar3 ${isMenuOpen ? "change" : ""}`}></div>
          </div>
          <div className={`menu ${isMenuOpen ? "menu__open" : ""}`}>
            <div className="menu__wrapper">
              <div className="Header__navbar__search menu-open">
                <form>
                  <input type="text" placeholder="Search for" />
                  <SearchIcon className="Header__navbar__search__icon" />
                </form>
              </div>
              <div className="Header__navbar__items menu-open">
                <span>Item</span>
                <span>Item</span>
                <span>Item</span>
                <span>Item</span>
                <span>Item</span>
                <span>Item</span>
                <span>Item</span>
                <span>Item</span>
              </div>
              <div className="Header__bar__wrapper__phones menu-open">
                <span>
                  <PhoneIphoneIcon />
                  Menu item 1
                </span>
                <span>
                  <FilterAltIcon />
                  Menu item 2
                </span>
                <span>
                  <AndroidIcon />
                  Menu item 3
                </span>
                <span>
                  <AppleIcon />
                  Menu item 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
