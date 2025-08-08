import "./navbar.css";

import { useState } from "react";

import Search from "../Search/Search.tsx";
import Button from "../Button/Button.tsx";

function NavBar() {
  const [searchTerm, setSearhTerm] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <>
    <header className="header-navbar">
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="mask-svg mask-logo"/>
          <span>BingeBuddy</span>
        </div>

        <nav className="elements">
          <p>Movies</p>
          <p>Series</p>
          <p>Discover</p>
        </nav>
      </div>

      

      

      <div className="header-container">
        <Search searchTerm={searchTerm} setSearchTerm={setSearhTerm}/>

        <div className="elements"> 
          <Button btn_type="button" classname="icon moon"/>
          {isLoggedIn ? (
              <>
                <Button btn_type="button" classname="icon profile text primary-hover" text="Profile"/>
                <Button btn_type="button" classname="text error-hover" text="Logout" />
              </>
          ) : (
            <>
              <Button btn_type="button" classname="text primary-hover" text="Login" />
              <Button btn_type="button" classname="text filled" text="Sign Up" />
            </>
          )}

        </div> 
        
      </div>
    </header>
    </>
  );
}

export default NavBar;
