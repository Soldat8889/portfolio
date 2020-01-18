import React from "react";
import { Link } from "react-router-dom";

// Utils
import { ScrollParallax } from "../Animations/Parallax";

function Footer() {
    return (
        <footer className="Footer page-part-wrapper">
            <div className="Footer__parallax-background">
                <ScrollParallax
                    name="Footer__parallax-background"
                    speedX={0}
                    speedY={0.5}
                >
                    <img src="/images/test.jpg" alt="Meal" className="Footer__parallax-background__image" />
                </ScrollParallax>
            </div>
            <div className="Footer__wrapper container">
                <div className="Footer__content">
                    <h2 className="Footer__title_1">Lucas SYHANATH</h2>
                    <div className="Footer__section_top col-m-6">
                        <div className="center-hv">
                            <h3 className="Footer__title_2 Footer__title_labeled">Where can you find me? <span role="img" aria-label="Way of paws">🐾</span></h3>
                        </div>
                        <ul className="Footer__list_inline">
                            <li className="Footer__list__item_inline col-m-4">
                                <a href="https://www.instagram.com/pata.tartiner/">
                                    <span className="Footer__list__item_label" style={{backgroundColor: "#a4386a"}}>
                                        <i className="fab fa-instagram Footer__list__item_icon"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="Footer__list__item_inline col-m-4">
                                <a href="https://github.com/Soldat8889">
                                    <span className="Footer__list__item_label" style={{backgroundColor: "#24292E"}}>
                                        <i className="fab fa-github Footer__list__item_icon"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="Footer__list__item_inline col-m-4">
                                <a href="https://www.artstation.com/pata-tartiner">
                                    <span className="Footer__list__item_label" style={{backgroundColor: "#1297cf"}}>
                                        <i className="fab fa-artstation Footer__list__item_icon"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer__section col-m-6">
                        <div className="Footer__grid">
                            <div className="col-s-6">
                                <h3 className="Footer__title_3">Explore <span role="img" aria-label="Globe">🌍</span></h3>
                                <ul className="Footer__list">
                                    <li className="Footer__list__item">
                                        <Link to="/">Homepage</Link>
                                    </li>
                                    <li className="Footer__list__item">
                                        <Link to="/aboutme/">About Me</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-s-6">
                                <h3 className="Footer__title_3">Legal <span role="img" aria-label="Justice">⚖</span></h3>
                                <ul className="Footer__list">
                                    <li className="Footer__list__item">
                                        <Link to="/terms/">Terms & Conditions</Link>
                                    </li>
                                    <li className="Footer__list__item">
                                        <Link to="/privacy/">Privacy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="Footer__grid">
                            <div className="col-s-6">
                                <h3 className="Footer__title_3">Contact <span role="img" aria-label="Maibox">📮</span></h3>
                                <ul className="Footer__list">
                                    <li className="Footer__list__item">
                                        <a href="mailto:lucas.syhanath@gmail.com" className="email">lucas.syhanath@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;