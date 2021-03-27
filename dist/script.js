import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import useStateInCustomProperties from "https://cdn.skypack.dev/use-state-in-custom-properties";

const App = () => {
  const [activeColor, setActiveColor] = useState("red");
  const CustomPropertiesWrapper = useStateInCustomProperties("box", {
    activeColor });

  return /*#__PURE__*/(
    React.createElement(CustomPropertiesWrapper, null, /*#__PURE__*/
    React.createElement("h1", { class: "is-size-4" }, "Active Color: ", activeColor), /*#__PURE__*/
    React.createElement("button", { onClick: () => setActiveColor("red") }, "Change to red"), " ", /*#__PURE__*/
    React.createElement("button", { onClick: () => setActiveColor("blue") }, "Change to blue")));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));