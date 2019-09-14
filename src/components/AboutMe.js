import React from "react";

import AboutMeComponent from "./Body/AboutMe";

function AboutMe() {
    return (
        <React.Fragment>
            <div className="Slider" style={{transform: `translateY(-50%)`}}>
                <AboutMeComponent />
            </div>
            <div className="Article container">

            </div>
        </React.Fragment>
    );
}

export default AboutMe;