import React from "react";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <h1>App 1 is mounted</h1>
            <Link to="/app2">Link to app 2</Link>
        </Router>
    )
}