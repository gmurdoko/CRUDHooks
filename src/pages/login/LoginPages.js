import React, { Component, useState } from "react";
import LoginForm from "./LoginForm";
import "./login.css";
import { postAuth } from "../../api/authApi/authService";

const LoginPages = (props) => {
    const [auth, setAuth] = useState({ username: "", password: "" });
    const handleChange = (event, field) => {
        const { name, value } = event.target;
        setAuth({ ...auth, [name]: value });
        console.log(auth);
    };
    const clickLogin = (event) => {
        event.preventDefault();
        postAuth(auth)
            .then((res) => {
                console.log(res);
                if (res.data !== null) {
                    // sessionStorage.setItem("auth-token", res.data.token);
                    props.onLogin(res.data);
                    resetAuth();
                }
            })
            .catch((error) => {
                alert("Username atau Password salah!");
                resetAuth();
                console.error(error);
            });
    };
    const resetAuth = () => {
        setAuth({ ...auth, username: "", password: "" });
    };

    return (
        <div className="container-fluid background">
            <div className="row col-md-12 justify-content-center">
                <div className="col-md-6" style={{ marginTop: "130px" }}>
                    <LoginForm
                        auth={auth}
                        handleChange={handleChange}
                        clickLogin={clickLogin}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPages;
