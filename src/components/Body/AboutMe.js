import React, { Fragment } from "react";
import Parallax from "./../../utils/Parallax";
import { Link } from "react-router-dom";

// Contexts
import LanguageContext from "./../../contexts/LanguageContext";
import ThemeContext from "./../../contexts/ThemeContext";

function AboutMe(props) {
    return (
        <LanguageContext.Consumer>
            {({ languageConfig }) => (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <section className="Slider__section Slider_wrapper container" data-slide={props.slide}>
                            <div className="Home__background Home__background__scene_aboutme" style={theme === "dark" ? {backgroundColor: "#224f31"} : null}>
                                <Hero />
                            </div>
                            <div className="Slider__title Slider__box">
                                <h1 className="Slider__title_text Home__color_aboutme" style={{fontFamily: "Merriweather, serif"}}>
                                    {languageConfig.Slider.About.Title}                   
                                </h1>
                                <hr style={{borderTop: "1px solid #fff"}} />
                                <h2 className="Slider__subtitle_text">
                                    {languageConfig.Slider.About.Subtitle}
                                </h2>
                                <Link to="/aboutme" className="Slider__btn">
                                    {languageConfig.Slider.About.Btn}               
                                </Link>
                            </div>
                        </section>
                    )}
                </ThemeContext.Consumer>
            )}
        </LanguageContext.Consumer>
    );
}

function Hero() {
    return(
        <Fragment>
            <div className="Home__hero Home__hero_aboutme">
                <div className="Home__hero__banner"></div>
            </div>
            <div className="Home__background-element_mq Home__background-element_mq__particles">
                <Parallax
                    speedX={0.04}
                    speedY={0.02}
                    name="Home__background-element_mq__particles"
                >
                    <img src="/images/aboutme-illustrations/particles.svg" alt="Particles" />
                </Parallax>
            </div>
            <div className="Home__background-element_mq Home__background-element_mq__switch">
                <Parallax
                    speedX={0.06}
                    speedY={0.03}
                    name="Home__background-element_mq__switch"
                >
                    <img src="/images/aboutme-illustrations/switch.svg" alt="Switch" />
                </Parallax>
            </div>
            <div className="Home__background-element_mq Home__background-element_mq__samothrace">
                <Parallax
                    speedX={0.03}
                    speedY={0.03}
                    name="Home__background-element_mq__samothrace"
                >
                    <img src="/images/aboutme-illustrations/victory-of-samothrace.png" alt="The Victory of Samothrace" />
                </Parallax>
            </div>
            <div className="Home__background-element_mq Home__background-element_mq__skull">
                <Parallax
                    speedX={0.03}
                    speedY={0.02}
                    name="Home__background-element_mq__skull"
                >
                    <img src="/images/aboutme-illustrations/skull.png" alt="Skull" />
                </Parallax>
            </div>
            <div className="Home__background-element_mq Home__background-element_mq__circle__2">
                <Parallax
                    speedX={0.06}
                    speedY={0.05}
                    name="Home__background-element_mq__circle__2"
                >
                    <Circle />
                </Parallax>
            </div>
            <div className="Home__background-element_mq Home__background-element_mq__meal">
                <Parallax
                    speedX={0.06}
                    speedY={0.05}
                    name="Home__background-element_mq__meal"
                >
                    <img src="/images/aboutme-illustrations/meal.png" alt="Meal" />
                </Parallax>
            </div>
            <div className="Home__background-element_mq Home__background-element_mq__circle__1">
                <Parallax
                    speedX={0.03}
                    speedY={0.05}
                    name="Home__background-element_mq__circle__1"
                >
                    <Circle />
                </Parallax>
            </div>
        </Fragment>
    );
}

function Circle() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <defs>
                <clip-path id="_clipPath_GYfQiVUmkTBiU9XwoaJSH0E2EVYB9pLU">
                    <rect width="256" height="256" />
                </clip-path>
            </defs>
            <g clipPath="url(#_clipPath_GYfQiVUmkTBiU9XwoaJSH0E2EVYB9pLU)">
                <circle vectorEffect="non-scaling-stroke" cx="128" cy="128" r="128" />
            </g>
        </svg>
    );
}

export default AboutMe;