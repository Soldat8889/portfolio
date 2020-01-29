import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// Components
import Parallax from "../../../../services/animations/Parallax";
import Author from "../../../Article/components/Author";

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
    const isArticle = !slide;
    
    return (
        <LanguageContext.Consumer>
            {({ languageConfig }) => (
                <ThemeContext.Consumer>
                    {({theme}) => (
                        <section 
                            className={`${isArticle ? "Article__hero" : "Slider__section Slider_wrapper"}`} 
                            data-slide={slide}
                        >
                            <div className="Hero__background Hero__background__scene_aboutme" style={theme === "dark" ? {backgroundColor: "unset"} : null}>
                                <DynamicContent />
                            </div>
                            <div className="Hero__title Hero__box">
                                <h1 className="Hero__title_text Hero__color_aboutme">
                                    {languageConfig.Slider.About.Title}                   
                                </h1>
                                <hr className="Hero__delimiter" />
                                <h2 className="Hero__subtitle_text">
                                    {languageConfig.Slider.About.Subtitle}
                                </h2>
                                <Link 
                                    to="/aboutme/" 
                                    className="Hero__button" 
                                    rel={`${isArticle ? "nofollow" : "next"}`}
                                >
                                    {languageConfig.Slider.About.Btn}               
                                </Link>
                            </div>
                            {
                                isArticle ? <ArticleFooter /> : null
                            }
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

function DynamicContent() {
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

function ArticleFooter() {
    return (
        <div className="Article__hero__misc">
            <div className="Article__hero__misc__col">
                <a href="https://www.instagram.com/pata.tartiner/" className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://github.com/Soldat8889" className="fab fa-github" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://www.artstation.com/pata-tartiner" className="fab fa-artstation" target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="Article__hero__misc__col">
                <Author imagePath="/images/utils/author.jpg" author="SYHANATH Lucas" />
            </div>
        </div>
    );
}

export default AboutMeHero;