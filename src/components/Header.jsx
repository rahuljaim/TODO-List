import React from "react";
import logo from "../asset/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="Todo list" height={20} width={20} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
