import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// Components
import Parallax from "../../../Animations/Parallax";

// Contexts
import { LanguageContext, ThemeContext } from "../../../../services/contexts";

function Circle() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <circle vectorEffect="non-scaling-stroke" cx="128" cy="128" r="128" />
        </svg>
    );
}

function AboutMeHero({ slide }) {
    return (
        <LanguageContext.Consumer>
            {({ languageConfig }) => (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <section className="Slider__section Slider_wrapper container" data-slide={slide}>
                            <div className="Hero__background Hero__background__scene_aboutme" style={theme === "dark" ? {backgroundColor: "unset"} : null}>
                                <Hero />
                            </div>
                            <div className="Slider__title Slider__box">
                                <h1 className="Slider__title_text Hero__color_aboutme" style={{fontFamily: "Lora, serif"}}>
                                    {languageConfig.Slider.About.Title}                   
                                </h1>
                                <hr style={{borderTop: "1px solid #fff"}} />
                                <h2 className="Slider__subtitle_text">
                                    {languageConfig.Slider.About.Subtitle}
                                </h2>
                                <Link to="/aboutme/" className="Slider__btn">
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

AboutMeHero.propTypes = {
    slide: PropTypes.number
};

function Hero() {
    return(
        <Fragment>
            <div className="Hero__display Hero__display_aboutme">
                <div className="Hero__display__banner"></div>
            </div>
            <div className="Hero__background-element_mq Hero__background-element_mq__particles">
                <Parallax
                    speedX={0.04}
                    speedY={0.02}
                    name="Hero__background-element_mq__particles"
                >
                    <img src="/images/aboutme-illustrations/particles.svg" alt="Particles" />
                </Parallax>
            </div>
            <div className="Hero__background-element_mq Hero__background-element_mq__switch">
                <Parallax
                    speedX={0.06}
                    speedY={0.03}
                    name="Hero__background-element_mq__switch"
                >
                    <img src="/images/aboutme-illustrations/switch.svg" alt="Switch" />
                </Parallax>
            </div>
            <div className="Hero__background-element_mq Hero__background-element_mq__samothrace">
                <Parallax
                    speedX={0.03}
                    speedY={0.03}
                    name="Hero__background-element_mq__samothrace"
                >
                    <img src="/images/aboutme-illustrations/victory-of-samothrace.png" alt="The Victory of Samothrace" />
                </Parallax>
            </div>
            <div className="Hero__background-element_mq Hero__background-element_mq__skull">
                <Parallax
                    speedX={0.03}
                    speedY={0.02}
                    name="Hero__background-element_mq__skull"
                >
                    <img src="/images/aboutme-illustrations/skull.png" alt="Skull" />
                </Parallax>
            </div>
            <div className="Hero__background-element_mq Hero__background-element_mq__circle__2">
                <Parallax
                    speedX={0.06}
                    speedY={0.05}
                    name="Hero__background-element_mq__circle__2"
                >
                    <Circle />
                </Parallax>
            </div>
            <div className="Hero__background-element_mq Hero__background-element_mq__meal">
                <Parallax
                    speedX={0.06}
                    speedY={0.05}
                    name="Hero__background-element_mq__meal"
                >
                    <img src="/images/aboutme-illustrations/meal.png" alt="Meal" />
                </Parallax>
            </div>
            <div className="Hero__background-element_mq Hero__background-element_mq__circle__1">
                <Parallax
                    speedX={0.03}
                    speedY={0.05}
                    name="Hero__background-element_mq__circle__1"
                >
                    <Circle />
                </Parallax>
            </div>
        </Fragment>
    );
}

export default AboutMeHero;