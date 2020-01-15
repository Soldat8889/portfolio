import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles/scss/main.scss";

// Template
import Routing from "./template/Routing";

// Contexts
import ThemeContext from "./contexts/ThemeContext";
import LanguageContext from "./contexts/LanguageContext";

// Utils
import Cookie from "./utils/Cookie";
import Topbar from "./components/Header/Topbar";
import OutModal from "./utils/OutModal";
import CounterAnimation from "./utils/CounterAnimation";

const themeCookie = new Cookie("theme").getCookie();
const languageCookie = new Cookie("lang").getCookie();

const modes = {
    "light": {
        "--main-icon-color": "#2e2e2e",
        "--main-icon-color-contrast": "#fefefe",
        "--main-txt-color": "#282828",
        "--main-txt-color-sub": "#555",
        "--main-bg-color": "#fff",
        "--main-bg-color-second": "#dfdfdf",
        "--main-bg-color-deep": "#fff",
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
        "--main-contrast-color": "#184f2d"
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

    useEffect(function loadHandler() {
        // https://codepen.io/ahsanrathore/post/accurate-page-progress-bar
        const html = document.documentElement;
        const loader = document.getElementById("loader");
        const loaderWrapper = document.getElementById("loader-percent-wrapper");
        const loaderPercent = document.getElementById("loader-percent");
        const loaderBar = document.getElementById("loader-bar");
        const loaderBarInitTop = loaderBar.parentElement.getBoundingClientRect().top;
        const icon = document.getElementById("loader-icon");

        // Development Mode
        if(process.env.NODE_ENV === "development") {
            html.classList.remove("on-load");
            loader.classList.add("is-hidden");

            return;
        }

        const perfTimeData = window.performance.timing;
        const time = -(perfTimeData.loadEventEnd - perfTimeData.navigationStart); // Calculate the page loading time

        const loaderProgress = new CounterAnimation(0, 100, time, loaderPercent, function () {
            let smTr = 300,
                meTr = 550,
                loTr = smTr + 400;

            setTimeout(() => {
                icon.classList.add("slide_bottom");
                loaderWrapper.classList.remove("is-visible_transitional");
                
                setTimeout(() => {
                    loaderBar.parentElement.style.transform = `translateY(-${loaderBarInitTop}px)`;

                    setTimeout(() => {
                        loaderBar.parentElement.style.width = "100vw";
                        icon.classList.remove("is-visible_transitional");

                        setTimeout(() => {
                            html.classList.remove("on-load");
                            loader.classList.remove("is-visible_transitional");
                            
                            setTimeout(() => {
                                loader.classList.add("is-hidden");
                            }, smTr);
                        }, loTr);
                    }, smTr);
                }, meTr);
            }, smTr);
        });
        
        loaderProgress.animate();

        const timer = setInterval(function() {
            loaderBar.style.width = `${loaderProgress.current}%`;

            loaderProgress.current === 100 && clearInterval(timer);
        }, loaderProgress.stepTime);

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

    useEffect(function componentDidMount() {
        setIsReady(true);
    }, []);

    if(!isReady) {
        return null;
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
                        <Topbar />
                        <Routing />
                    </OutModal>
                </LanguageContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

export default withRouter(App);
