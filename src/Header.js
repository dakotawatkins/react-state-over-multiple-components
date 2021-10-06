import React from "react";

function Header({ loggedIn, handleLoggedInClick, increaseFontSize }) {
  return (
    <>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>

      <button onClick={increaseFontSize}>
        Increase Font Size
      </button>
    </>
  );
}

export default Header;