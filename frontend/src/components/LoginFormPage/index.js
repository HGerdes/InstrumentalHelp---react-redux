import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import { useHistory } from "react-router-dom";

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    //prevents refresh, handles errors, tests if authenticated
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password})).catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
                setErrors(data.errors);
            }
        })
    }

    const demoUserLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({
            credential: "RondaldMacDondald",
            password: "password"
        }))

    }

    return (
        <form onSubmit = {handleSubmit}>
            <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className="username">
            <label>
                Username or Email
                <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </label>
            <label>
                Password
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
        </div>
        <button type="submit">Log In</button>
        <div className="DemoUser">
                    <button onClick={demoUserLogin}>Demo User</button>
            </div>
        </form>
    );
}

export default LoginFormPage;
