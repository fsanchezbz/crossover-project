import React from "react";
import logo from "../img/logo.png";

export default function Nav() {
  return (
    <header>
      <nav
        class="navbar navbar-expand-md navbar-light py-0 px-0 mx-0 mb-5 mb"
        id="nav"
      >
        <div class="nav container-fluid py-auto">
          <img
            class="navbar-brand"
            id="navbar-brand"
            src={logo}
            alt="logo"
            width="100"
            height="100"
          />
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            class="navbar-toggler mx-5"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex container-fluid justify-content-end text-center">
              <li class="nav-item px-5 pt-3">
                <a href="../" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item px-5 pt-3">
                <a href="../index.html#search-section" class="nav-link">
                  Search
                </a>
              </li>
              <li class="nav-item px-5 pt-3">
                <a href="../index.html#cards-section" class="nav-link">
                  Favorites
                </a>
              </li>
              <li class="nav-item px-5 pt-3">
                <a href="#" class="nav-link">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
