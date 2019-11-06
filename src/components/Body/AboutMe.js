import React from "react";
import { Link } from "react-router-dom";

// Contexts
import LanguageContext from "./../../contexts/LanguageContext";

function AboutMe(props) {
    return (
        <LanguageContext.Consumer>
            {({ language, setLanguage, languageConfig }) => (
                <section className="Slider__section Slider_wrapper container" data-slide={props.slide}>
                    <div className="Slider__background">
                        <img className="Slider__image" src="/images/victory-of-samothrace.png" alt="The Victory of Samothrace, recreates by me" />
                    </div>
                    <div className="Slider__title">
                        <h1 className="Slider__title_text">
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

export default AboutMe;