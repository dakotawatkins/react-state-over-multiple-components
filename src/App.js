import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  
  //create fontsize var and initialize to 12
  const [fontSize, setFontSize] = useState(12);
  //use setFontSize to change fontSize if 'increaseFontSize' is called (button is clicked).
  const increaseFontSize = () => setFontSize(val => val + 2);
  //add increaseFontSize to <Header> tag which will change fontSize whel the button is clicked
  //add fontSize to <Content> tag (increasefontsize will change fontsize from header button)
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} increaseFontSize={increaseFontSize} />
      <Content loggedIn={loggedIn} fontSize={fontSize} />
    </div>
  );
}

export default App;
