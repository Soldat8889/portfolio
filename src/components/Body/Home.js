import React, { Fragment, useEffect } from "react";
import Parallax from "./../../utils/Parallax";

// Contexts
import LanguageContext from "./../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

function Home(props) {
    return (
        <LanguageContext.Consumer>
            {({ languageConfig }) => (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <section className="Slider__section Slider_wrapper container" data-slide={props.slide}>
                            <div className={`Home__background ${theme === "light" ? "Home__background__scene_light" : "Home__background__scene_dark"}`}>
                                {theme === "light" ?
                                    <DayMode />
                                    :
                                    <NightMode />
                                }
                            </div>
                            <div className="Slider__title">
                                <h1 className="Slider__title_text" style={{color: "#fff"}}>
                                    <Parallax
                                        speedX={0.08}
                                        speedY={0.08}
                                        name="Slider__title"
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
        <Fragment>
            <div className="Home__background-element Home__background-element__sun">
                <Parallax
                    speedX={0.03}
                    speedY={0.03}
                    name="Home__background-element__sun"
                >
                    <img className="sun" src="/images/home-illustrations/sun.svg" alt="Sun" />
                    <img className="sunbeams__1" src="/images/home-illustrations/sunbeams__1.svg" alt="Sunbeams Layer 1" />
                    <img className="sunbeams__2" src="/images/home-illustrations/sunbeams__2.svg" alt="Sunbeams Layer 2" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__mountains">
                <img src="/images/home-illustrations/mountains.svg" alt="Mountains" />
            </div>
            <div className="Home__background-element Home__background-element__fog__day">
                <Parallax
                    speedX={0.08}
                    speedY={0.02}
                    name="Home__background-element__fog__day"
                >
                    <img src="/images/home-illustrations/fog__day.svg" alt="Fog" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__cloud__2">
                <Parallax
                    speedX={0.06}
                    speedY={0.06}
                    name="Home__background-element__cloud__2"
                >
                    <img src="/images/home-illustrations/cloud__1__day.svg" alt="Cloud 1 day" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__cloud__3">
                <Parallax
                    speedX={0.045}
                    speedY={0.045}
                    name="Home__background-element__cloud__3"
                >
                    <img src="/images/home-illustrations/cloud__2__day.svg" alt="Cloud 2 day" />
                </Parallax>
            </div>
        </Fragment>
    );
}

function NightMode() {
    return (
        <Fragment>
            <div className="Home__background-element Home__background-element__stars">
                <Parallax
                    speedX={0.01}
                    speedY={0.01}
                    name="Home__background-element__stars"
                >
                    <img src="/images/home-illustrations/stars.svg" alt="Stars" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__moon">
                <Parallax
                    speedX={0.03}
                    speedY={0.03}
                    name="Home__background-element__moon"
                >
                    <img src="/images/home-illustrations/moon.svg" alt="Moon" style={{animation: "80s positive_rotate infinite linear"}}/>
                    <img src="/images/home-illustrations/moon__shadow.svg" alt="Moon Shadow" className="Home__background-element__moon__shadow" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__fog__night">
                <Parallax
                    speedX={0.08}
                    speedY={0.08}
                    name="Home__background-element__fog__night"
                >
                    <img src="/images/home-illustrations/fog__night.svg" alt="Fog" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__cloud__1">
                <Parallax
                    speedX={0.055}
                    speedY={0.055}
                    name="Home__background-element__cloud__1"
                >
                    <img src="/images/home-illustrations/cloud__1.svg" alt="Cloud 1 night" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__cloud__2">
                <Parallax
                    speedX={0.06}
                    speedY={0.06}
                    name="Home__background-element__cloud__2"
                >
                    <img src="/images/home-illustrations/cloud__2.svg" alt="Cloud 2 night" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__cloud__3">
                <Parallax
                    speedX={0.045}
                    speedY={0.045}
                    name="Home__background-element__cloud__3"
                >
                    <img src="/images/home-illustrations/cloud__3.svg" alt="Cloud 3 night" />
                </Parallax>
            </div>
        </Fragment>
    );
}

export default Home;