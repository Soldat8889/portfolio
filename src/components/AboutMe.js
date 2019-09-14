import React from "react";

import AboutMeComponent from "./Body/AboutMe";

function AboutMe() {
    return (
        <React.Fragment>
            <div className="Slider" style={{transform: `translateY(-50%)`}}>
                <AboutMeComponent />
            </div>
        </React.Fragment>
    );
}

export default AboutMe;