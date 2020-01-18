import React from "react";
import { Switch, Route } from "react-router-dom";

// Scenes
import Home    from "../Home";
import AboutMe from "../AboutMe";

function Routing() {
    return (
        <Switch>
            <Route 
                exact
                path="/"
                component={
                    props => (
                        <React.Fragment>
                            <Home {...props} />
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