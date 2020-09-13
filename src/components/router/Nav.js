import React, { Component } from "react";
import { Redirect, withRouter, Switch, Route } from "react-router-dom";
import RoomPage from "../../pages/rooms/RoomPages";
import LoginPages from "../../pages/login/LoginPages";
import HomePage from "../../pages/home/HomePage";
import Notfound from "../../pages/home/HomePage";
import MyNavbar from "../navigate/MyNavbar";
const routes = [
    { id: 1, path: "/home", component: HomePage },
    { id: 2, path: "/list", component: RoomPage },
];
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activateMenu: "",
            auth: false,
        };
    }
    onLogin = (token) => {
        // localStorage.setItem("auth-token", token);
        sessionStorage.setItem("auth-token", token);
        this.setState({ ...this.state, auth: true });
        this.props.history.push({ pathname: "/home" });
    };
    onLogout = () => {
        // localStorage.removeItem("auth-token");
        sessionStorage.removeItem("auth-token");
        this.setState({
            auth: false,
        });
    };
    componentDidMount() {
        if (sessionStorage.getItem("auth-token") !== null) {
            this.setState({
                ...this.state,
                auth: true,
            });
            // <route.component {...props} />;
            this.props.history.push({ pathname: this.props.location.pathname });
            // this.props.routeList;
        } else {
            this.setState({ ...this.state, auth: false });
        }
    }

    render() {
        const isLoggedIn = this.state.auth;
        const routeList = routes.map((route) => {
            return (
                <Route
                    // exact
                    key={route.id}
                    path={route.path}
                    render={(props) => {
                        return this.state.auth ? (
                            <route.component {...props} />
                        ) : (
                            <Redirect to="/" />
                        );
                    }}
                />
            );
        });
        return (
            <div>
                {isLoggedIn ? (
                    <MyNavbar onLogout={this.onLogout} auth={this.state.auth} />
                ) : (
                    ""
                )}

                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => {
                            return (
                                <LoginPages {...props} onLogin={this.onLogin} />
                            );
                        }}
                    />
                    {routeList}
                    <Route
                        // exact
                        path="*"
                        render={(props) => {
                            return <Notfound />;
                        }}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Nav);
