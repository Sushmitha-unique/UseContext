import React from "react";
import ReactDOM from "react-dom";
import Styleprovider from "./Styleprovider";
import App from "./App"
ReactDOM.render(
    <Styleprovider>
        <App/>
    </Styleprovider>, document.getElementById("root")
)