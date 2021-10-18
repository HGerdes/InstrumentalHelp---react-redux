import { NavLink } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="landingContainer">
            <div className="loginLink">
                <NavLink className="login" to="/logIn">Log In</NavLink>
            </div>
            <div className="Sign Up">
                <NavLink className="signup" to="/signUp">Sign Up</NavLink>
            </div>
            <div className="Instruments">
                <NavLink className="instruments" to="/instruments">Go review some instruments!</NavLink>
            </div>

        </div>
    )
}

export default LandingPage;
