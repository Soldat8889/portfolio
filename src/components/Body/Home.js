import React from "react";
import Parallax from "./../../utils/Parallax";

// Contexts
import LanguageContext from "./../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

function Home(props) {
    return (
        <LanguageContext.Consumer>
            {({ language, setLanguage, languageConfig }) => (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <section className="Slider__section Slider_wrapper container" data-slide={props.slide}>
                            <div className="Slider__background">
                                {theme === "light" ?
                                    <DayMode />
                                    :
                                    <NightMode />
                                }
                            </div>
                            <div className="Slider__title">
                                <h1 className="Slider__title_text">
                                    <Parallax
                                        speedX={0.08}
                                        speedY={0.08}
                                        name="Home__title"
                                    >
                                        SYHANATH Lucas <br />
                                        {languageConfig.Slider.Home.Title}
                                    </Parallax>
                                </h1>
                            </div>
                        </section>
                    )}
                </ThemeContext.Consumer>
            )}
        </LanguageContext.Consumer>
    );
}

function DayMode() {
    return (
        <div id="Slider__background-scene__dark" className="Slider__background-scene" style={{transform: "translateY(100%)"}}>
            <div className="Slider__background-element Slider__background-element__sun">
                <Parallax
                    speedX={0.03}
                    speedY={0.03}
                    name="Slider__background-element__sun"
                >
                    <img className="sun" src="/images/sun.svg" alt="Sun" />
                    <img className="sunbeams__1" src="/images/sunbeams__1.svg" alt="Sunbeams" />
                    <img className="sunbeams__2" src="/images/sunbeams__2.svg" alt="Sunbeams" />
                </Parallax>
            </div>
            {/* <div className="Slider__background-element Slider__background-element__stars">
                <Parallax
                    speedX={0.01}
                    speedY={0.01}
                    name="Slider__background-element__stars"
                >
                    <img src="/images/stars.svg" alt="Stars" />
                </Parallax>
            </div> */}
            {/* <div className="Slider__background-element Slider__background-element__cloud__1">
                <Parallax
                    speedX={0.055}
                    speedY={0.055}
                    name="Slider__background-element__cloud__1"
                >
                    <img src="/images/cloud__1.svg" alt="Cloud 1" />
                </Parallax>
            </div>
            <div className="Slider__background-element Slider__background-element__cloud__2">
                <Parallax
                    speedX={0.06}
                    speedY={0.06}
                    name="Slider__background-element__cloud__2"
                >
                    <img src="/images/cloud__2.svg" alt="Cloud 2" />
                </Parallax>
            </div>
            <div className="Slider__background-element Slider__background-element__cloud__3">
                <Parallax
                    speedX={0.045}
                    speedY={0.045}
                    name="Slider__background-element__cloud__3"
                >
                    <img src="/images/cloud__3.svg" alt="Cloud 3" />
                </Parallax>
            </div> */}
        </div>
    );
}

function NightMode() {
    return (
        <div id="Slider__background-scene__dark" className="Slider__background-scene" style={{transform: "translateY(100%)"}}>
            <div className="Slider__background-element Slider__background-element__moon">
                <Parallax
                    speedX={0.03}
                    speedY={0.03}
                    name="Slider__background-element__moon"
                >
                    <img src="/images/moon.svg" alt="Moon" />
                </Parallax>
            </div>
            <div className="Slider__background-element Slider__background-element__stars">
                <Parallax
                    speedX={0.01}
                    speedY={0.01}
                    name="Slider__background-element__stars"
                >
                    <img src="/images/stars.svg" alt="Stars" />
                </Parallax>
            </div>
            <div className="Slider__background-element Slider__background-element__cloud__1">
                <Parallax
                    speedX={0.055}
                    speedY={0.055}
                    name="Slider__background-element__cloud__1"
                >
                    <img src="/images/cloud__1.svg" alt="Cloud 1" />
                </Parallax>
            </div>
            <div className="Slider__background-element Slider__background-element__cloud__2">
                <Parallax
                    speedX={0.06}
                    speedY={0.06}
                    name="Slider__background-element__cloud__2"
                >
                    <img src="/images/cloud__2.svg" alt="Cloud 2" />
                </Parallax>
            </div>
            <div className="Slider__background-element Slider__background-element__cloud__3">
                <Parallax
                    speedX={0.045}
                    speedY={0.045}
                    name="Slider__background-element__cloud__3"
                >
                    <img src="/images/cloud__3.svg" alt="Cloud 3" />
                </Parallax>
            </div>
        </div>
    );
}

export default Home;