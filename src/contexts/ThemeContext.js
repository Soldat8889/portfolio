import React from "react";
import Cookie from "./../utils/Cookie";

const themeCookie = new Cookie("lang").getCookie();

const ThemeContext = React.createContext({
    theme: typeof themeCookie !== "object" ? themeCookie : "light",
    setTheme: () => {}
});

export default ThemeContext;