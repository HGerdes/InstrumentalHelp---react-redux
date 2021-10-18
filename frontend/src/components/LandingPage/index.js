import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../store/session"
import "./LandingPage.css";

const LandingPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

    if (sessionUser !== undefined) {
        history.push("/instruments");
        return null;
    }


    return (
        <div className="landingContainer">
            <div className="loginLink">
                <NavLink className="login" to="/logIn">Log In</NavLink>
            </div>
            <div className="Sign Up">
                <NavLink className="signup" to="/signUp">Sign Up</NavLink>
            </div>

        </div>
    )
}

export default LandingPage;
