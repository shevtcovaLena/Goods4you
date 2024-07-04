// import { useState } from 'react'

import { Link, Outlet } from "react-router-dom";

function Root() {
  const cartCount = 0;
  return (
    <>
      <header>
        <div className="container">
          <Link to="/" id="logo">Goods4you</Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Catalog</Link>
              </li>
              <li>
                <Link to="/about">FAQ</Link>
              </li>
              <li>
                <Link to="/services" className="link-with-icon">
                  Cart
                  <span className="icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                      >
                        <use href="/src/assets/icons.svg#cart" />
                      </svg>
                    <div className="circle-badge">
                      <p>{cartCount}</p>
                    </div>
                  </span>
                </Link>
              </li>
              <li>Johnson Smith</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
      <div className="container">
          <Link to="/" id="logo">Goods4you</Link>
            <ul>
              <li>
                <Link to={"/"}>Catalog</Link>
              </li>
              <li>
                <Link to="/about">FAQ</Link>
              </li>              
            </ul>
        </div>
      </footer>
    </>
  );
}

export default Root;
