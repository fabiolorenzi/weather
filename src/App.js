import React from "react";
import {Switch, Route} from "react-router-dom";

import Weather from "./components/Weather.jsx";

function App() {
    return(
        <div>
            <Switch>
                <Route path="/weather" exact component={Weather} />
            </Switch>
        </div>
    );
};

export default App;
