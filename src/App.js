import React, { Component } from "react";
import styled from "styled-components";
import Flex from './components/Flex'

//Views
import Dashboard from './views/Dashboard'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SideBar = styled(Flex)`
    height: 100vh;
    width: 20%;
    background: #f0f0f0;
`

const Container = styled(Flex)`
    height: 100%;
`

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Dashboard />,
    },
    {
        path: "/new/item",
        main: () => <h2>Add New Item</h2>,
    },
];

class App extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <SideBar centerVertically column>
                        <h3>Skin Tracker</h3>
                        <ul style={{ listStyleType: "none", padding: 10 }}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/new/item">New Item</Link>
                            </li>
                        </ul>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                />
                            ))}
                        </Switch>
                    </SideBar>
                    <div style={{ flex: 1 }}>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </Container>
            </Router>
        );
    }
}

export default App;
