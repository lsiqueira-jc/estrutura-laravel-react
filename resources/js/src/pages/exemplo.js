import React from "react";
import ReactDOM from "react-dom";

import Component from "../components/component";

function Example() {
    return <Component />;
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
