import React, { Fragment, useEffect } from "react";
import Parallax from "./../../utils/Parallax";
import { Link } from "react-router-dom";

// Contexts
import LanguageContext from "./../../contexts/LanguageContext";

function AboutMe(props) {
    return (
        <LanguageContext.Consumer>
            {({ languageConfig }) => (
                <section className="Slider__section Slider_wrapper container" data-slide={props.slide}>
                    <div className="Home__background Home__background__scene_aboutme">
                        <Hero />
                    </div>
                    <div className="Slider__title Slider__box">
                        <h1 className="Slider__title_text" style={{fontFamily: "Merriweather, serif"}}>
                            {languageConfig.Slider.About.Title}                   
                        </h1>
                        <hr />
                        <h2 className="Slider__subtitle_text">
                            {languageConfig.Slider.About.Subtitle}
                        </h2>
                        <Link to="/aboutme" className="Slider__btn">
                            {languageConfig.Slider.About.Btn}               
                        </Link>
                    </div>
                </section>
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
            <div className="Home__background-element Home__background-element__particles">
                <Parallax
                    speedX={0.04}
                    speedY={0.02}
                    name="Home__background-element__particles"
                >
                    <img src="/images/aboutme-illustrations/particles.svg" alt="Particles" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__switch">
                <Parallax
                    speedX={0.06}
                    speedY={0.03}
                    name="Home__background-element__switch"
                >
                    <img src="/images/aboutme-illustrations/switch.svg" alt="Switch" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__samothrace">
                <Parallax
                    speedX={0.03}
                    speedY={0.03}
                    name="Home__background-element__samothrace"
                >
                    <img src="/images/aboutme-illustrations/victory-of-samothrace.png" alt="The Victory of Samothrace" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__skull">
                <Parallax
                    speedX={0.03}
                    speedY={0.02}
                    name="Home__background-element__skull"
                >
                    <img src="/images/aboutme-illustrations/skull.png" alt="Skull" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__circle__2">
                <Parallax
                    speedX={0.06}
                    speedY={0.05}
                    name="Home__background-element__circle__2"
                >
                    <img src="/images/aboutme-illustrations/circle.svg" alt="Circle 2" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__meal">
                <Parallax
                    speedX={0.06}
                    speedY={0.05}
                    name="Home__background-element__meal"
                >
                    <img src="/images/aboutme-illustrations/meal.png" alt="Meal" />
                </Parallax>
            </div>
            <div className="Home__background-element Home__background-element__circle__1">
                <Parallax
                    speedX={0.03}
                    speedY={0.05}
                    name="Home__background-element__circle__1"
                >
                    <img src="/images/aboutme-illustrations/circle.svg" alt="Circle 1" />
                </Parallax>
            </div>
        </Fragment>
    );
}

export default AboutMe;