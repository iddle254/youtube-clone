import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "./header.styles.css";

function Header() {
  const [input, setInput] = useState("");
  return (
    <div className="header">
      {/* hambuger
            logo
            search
            icons */}
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search"
          type="text"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Charles Motaroki"
          src="https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        />
      </div>
    </div>
  );
}

export default Header;
