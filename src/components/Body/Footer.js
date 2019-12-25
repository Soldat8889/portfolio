import React from "react";

// Utils
import { ScrollParallax } from "./../../utils/Parallax";

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
            <div className="Footer__content container">
                <div className="col-m-6">
                    <h2 className="Footer__title_2">Lucas SYHANATH</h2>
                </div>
                <div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;