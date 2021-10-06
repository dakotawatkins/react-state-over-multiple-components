import React from "react";

function Content({ loggedIn, fontSize, increaseFontSize }) {
  return loggedIn && <p style={{fontSize: fontSize + 'px'}}>CONTENT</p>;
}

export default Content;
