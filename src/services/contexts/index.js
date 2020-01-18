import React from "react";

// Services
// Tools
import Cookie from "../tools/Cookie";

// Theme Context

const themeCookie = new Cookie("lang").getCookie();

const ThemeContext = React.createContext({
    theme: typeof themeCookie !== "object" ? themeCookie : "light",
    setTheme: () => {}
});

// Language Context

const languageCookie = new Cookie("theme").getCookie();

const LanguageContext = React.createContext({
    language: typeof languageCookie !== "object" ? languageCookie : "en-UK",
    setLanguage: () => {},
    languageConfig: {}
});

export { ThemeContext, LanguageContext };