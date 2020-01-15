import React from "react";
import { Switch, Route } from "react-router-dom";

// Routes
import Slider from "./../components/Slider";
import AboutMe from "./../components/AboutMe";

function Routing() {
    return (
        <Switch>
            <Route 
                exact
                path="/"
                component={
                    props => (
                        <React.Fragment>
                            <Slider {...props} />
                        </React.Fragment>
                    )
                }
            />
            <Route 
                path="/aboutme/"
                component={
                    props => (
                        <React.Fragment>
                            <AboutMe {...props} />
                        </React.Fragment>
                    )
                }
            />
        </Switch>
    );
}

export default Routing;