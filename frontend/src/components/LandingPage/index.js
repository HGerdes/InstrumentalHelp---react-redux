import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const LandingPage = () => {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (
        <Redirect to="/instruments" />
    );


    return (
        <div className="landingContainer">
            <div className="loginLink">
                <NavLink to="/logIn">Log In</NavLink>
            </div>
            <div className="Sign Up">
                <NavLink to="/signUp">Sign Up</NavLink>
            </div>

        </div>

    )
}

export default LandingPage;
