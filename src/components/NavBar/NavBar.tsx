import "./navbar.css";

import { useState } from "react";

import Search from "../Search/Search.tsx";

function NavBar() {
  const [searchTerm, setSearhTerm] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <>
    <header className="header-navbar">
      <div className="header-container">
        <img className="navbar-logo" src="./logo.svg" alt="Website Logo" />
        <span>BingeBuddy</span>
      </div>

      <nav className="header-container">
        <p>Movies</p>
        <p>Series</p>
        <p>Discover</p>
      </nav>

      <Search searchTerm={searchTerm} setSearchTerm={setSearhTerm}/>

      <div className="header-container">
        <p>Dark mode</p>
        {isLoggedIn ? (
          <div className="header-container"> 
            <p>profile</p>
            <p>Logout</p>
          </div>
        ) : (
          <div className="header-container">
            <p>Login</p>
            <p>Sign Up</p>
          </div>
        )}
        
        
        
      </div>
    </header>
    </>
  );
}

export default NavBar;
