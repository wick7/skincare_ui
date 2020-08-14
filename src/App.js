import React, { Component } from "react";
import styled from "styled-components";
import Flex from './components/Flex'

//Views
import Dashboard from './views/Dashboard'
import Form from './views/Form'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled(Flex)`
  background: gray;
  height: 100vh;
  width: 100%;
  overflow: auto;
`
const SideBar = styled(Flex)` 
  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  overflow-x: hidden;
  padding-top: 20px;
`

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Dashboard />,
    },
    {
        path: "/new/item",
        main: () => <Form />,
    },
];

class App extends Component {
    render() {
        return (
            <Router>
                <div>
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
            </Router>
        );
    }
}

export default App;
