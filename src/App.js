import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./components/router/Nav";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        );
    }
}

export default App;
