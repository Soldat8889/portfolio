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
import OutModal from "./utils/OutModal";

const themeCookie = new Cookie("theme").getCookie();
const languageCookie = new Cookie("lang").getCookie();

const modes = {
    "light": {
        "--main-icon-color": "#2e2e2e",
        "--main-icon-color-contrast": "#fefefe",
        "--main-txt-color": "#000",
        "--main-txt-color-sub": "#555",
        "--main-bg-color": "#fff",
        "--main-bg-color-second": "#dfdfdf",
        "--main-bg-color-deep": "#dfdfdf",
        "--main-bg-color-box": "#f0f0f0",
        "--main-shadow-color": "#191919",
        "--main-contrast-color": "#63B582"
    },
    "dark": {
        "--main-icon-color": "#fefefe",
        "--main-icon-color-contrast": "#dfdfdf",
        "--main-txt-color": "#f3f3f3",
        "--main-txt-color-sub": "#b8b8b8",
        "--main-bg-color": "#2b2b2b",
        "--main-bg-color-second": "#171717",
        "--main-bg-color-deep": "#111111",
        "--main-bg-color-box": "#1d1d1d",
        "--main-shadow-color": "#121212",
        "--main-contrast-color": "#63B582"
    }
};

// Convention Page.Component.Semantic1.Semantic...
// e.g. : {languageConfig.AboutMe.Who.Interest[interestIndex].Title}

const languageConfig = {
    "fr-FR": {
        "Slider": {
            "Home": {
                "Title": "Développeur web"
            },
            "About": {
                "Title": "À propos de moi",
                "Subtitle": "Intéressé aux jeux vidéo, le dessin & le développement web",
                "Btn": "Voir plus"
            }
        },
        "AboutMe": {
            "Who": {
                "Interest": {
                    0: {
                        "Title": "Développement web",
                        "Sub": "Développeur web front-end à mes heures perdues depuis bientôt deux ans."
                    },
                    1: {
                        "Title": "Jeux vidéo",
                        "Sub": "Joueur de jeux vidéo après de longues journées."
                    },
                    2: {
                        "Title": "Manger & Cuisiner",
                        "Sub": ""
                    },
                    3: {
                        "Title": "Voyager",
                        "Sub": ""
                    },
                    4: {
                        "Title": "Bingewatcher des séries",
                        "Sub": ""
                    },
                    5: {
                        "Title": "Dessiner",
                        "Sub": "Je dessine de temps en temps, quand quelque chose me vient à l'envie."
                    }
                }
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
                "Subtitle": "Interested in video games, drawing & web development",
                "Btn": "Show me more"
            }
        },
        "AboutMe": {
            "Who": {
                "Interest": {
                    0: {
                        "Title": "Web Development",
                        "Sub": "Front-end web developer in my spare time."
                    },
                    1: {
                        "Title": "Video games",
                        "Sub": "Video games player after long days."
                    },
                    2: {
                        "Title": "Eating & Cooking",
                        "Sub": ""
                    },
                    3: {
                        "Title": "Travelling",
                        "Sub": ""
                    },
                    4: {
                        "Title": "Bingewatching series",
                        "Sub": ""
                    },
                    5: {
                        "Title": "Drawing",
                        "Sub": "I draw sometimes, when I want to draw something."
                    }
                }
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
                    <OutModal>
                        <Navigation />
                        <Routing />
                    </OutModal>
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
