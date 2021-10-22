import React from 'react';
import logo from "../Images/logo.png";
import "../Styles/Navabar.css";
const Navbar = ()=> {

    return (
        <>
        <nav class="navbar navbar-expand-lg">
        <img src={logo} alt="logo" id="logo"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FEATURE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SCREENSHOT</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">TESTIMONAL</a>
      </li>

      <li class="nav-item">
        <a class="nav-link disabled" href="#">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar
