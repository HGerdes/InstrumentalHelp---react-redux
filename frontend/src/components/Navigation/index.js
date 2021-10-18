import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="loginNav" to="/login">Log In</NavLink>
        <NavLink className="signupNav" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink className="home" exact to="/instruments">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
