import React from "react";
import Cookie from "./../utils/Cookie";

const languageCookie = new Cookie("theme").getCookie();

const LanguageContext = React.createContext({
    language: typeof languageCookie !== "object" ? languageCookie : "en-UK",
    setLanguage: () => {},
    languageConfig: {}
});

export default LanguageContext;