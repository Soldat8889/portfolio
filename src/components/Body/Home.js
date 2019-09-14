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
                                    <div className="Slider__background-element">
                                        The DAY
                                    </div>
                                    :
                                    <div className="Slider__background-element">
                                        The NIGHT
                                    </div>
                                }
                            </div>
                            <div className="Slider__title">
                                <h1 className="Slider__title_text">
                                    <Parallax
                                        speedX={0.05}
                                        speedY={0.05}
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

export default Home;