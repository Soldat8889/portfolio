import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import "./styles/scss/main.scss";

// Contexts
import ThemeContext from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContext";

// Routes / Components
import Slider from "./components/Slider";
import AboutMe from "./components/AboutMe";

// Utils
import Cookie from "./utils/Cookie";
import Navigation from "./components/Header/Navigation";

const themeCookie = new Cookie("theme").getCookie();
const languageCookie = new Cookie("lang").getCookie();

const modes = {
    "light": {
        "--main-icon-color": "#2e2e2e",
        "--main-icon-color-contrast": "#fefefe",
        "--main-txt-color": "#555",
        "--main-bg-color": "#fff",
        "--main-bg-color-second": "#dfdfdf",
        "--main-bg-color-box": "#f0f0f0",
        "--main-shadow-color": "#191919"
    },
    "dark": {
        "--main-icon-color": "#fefefe",
        "--main-icon-color-contrast": "#dfdfdf",
        "--main-txt-color": "#fff",
        "--main-bg-color": "#2b2b2b",
        "--main-bg-color-second": "#171717",
        "--main-bg-color-box": "#1d1d1d",
        "--main-shadow-color": "#191919"
    }
};

const languageConfig = {
    "fr-FR": {
        "Slider": {
            "Home": {
                "Title": "Développeur web"
            },
            "About": {
                "Title": "À propos de moi",
                "Btn": "Voir plus"
            }
        }
    },
    "en-UK": {
        "Slider": {
            "Home": {
                "Title": "Web developer"
            },
            "About": {
                "Title": "About me",
                "Btn": "Show me more"
            }
        }
    }
};

function App() {
    const [isReady, setIsReady] = useState(false);
    const [theme, setTheme] = useState(typeof themeCookie !== "object" ? themeCookie : "light");
    const [language, setLanguage] = useState(typeof languageCookie !== "object" ? languageCookie : "en-UK");

    useEffect(function componentDidMount() {
        setIsReady(true);
    }, [isReady]);
    
    useEffect(function applyTheme() {
        const rootVariable = document.documentElement.style;

        document.cookie = new Cookie("theme", theme, 365).setCookie();

        // eslint-disable-next-line no-unused-vars
        for (const entries of Object.entries(modes[theme])) {
            rootVariable.setProperty(entries[0], entries[1]);
        }
    }, [theme]);

    useEffect(function applyLanguage() {
        document.cookie = new Cookie("lang", language, 365).setCookie();
    }, [language]);

    if(!isReady) {
        return "Loading";
    } else {
        return (
            <ThemeContext.Provider value={{
                theme,
                setTheme
            }}>
                <LanguageContext.Provider value={{
                    language,
                    setLanguage,
                    languageConfig: languageConfig[language]
                }}>
                    <div className="page-content page-part-wrapper">
                        <Navigation />
                        <Routing />
                    </div>
                </LanguageContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Routing() {
    return (
        <Switch>
            <Route 
                exact
                path="/"
                component={
                    props => (
                        <React.Fragment>
                            <Slider {...props} />
                        </React.Fragment>
                    )
                }
            />
            <Route 
                path="/aboutme"
                component={
                    props => (
                        <React.Fragment>
                            <AboutMe {...props} />
                        </React.Fragment>
                    )
                }
            />
        </Switch>
    );
}

export default withRouter(App);
