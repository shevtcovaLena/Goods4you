// import { useState } from 'react'

import { HelmetProvider } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { CartIcon } from "../components/Icons/Icons";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { useEffect } from "react";
import { fetchUserCartById } from "../features/cart/cartThunkActions";

function Root() {
  const dispatch = useAppDispatch();
  const cartInfo = useAppSelector((store) => store.cartSlice.cartInfo)
  
  useEffect(() =>{
    void dispatch(fetchUserCartById(33))
  }, [dispatch])
  
  
  return (
    <HelmetProvider>
      <header>
        <div className="container">
          <Link to="/" id="logo">Goods4you</Link>
          <nav>
            <ul>
              <li>
                <Link to="/#catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/#faq">FAQ</Link>
              </li>
              <li>
                <Link to="/cart" className="link-with-icon">
                  Cart
                  <span className="icon">
                      { CartIcon }
                    <div className="circle-badge">
                      <p>{cartInfo.totalQuantity}</p>
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
                <Link to="/#catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/#faq">FAQ</Link>
              </li>
            </ul>
        </div>
      </footer>
    </HelmetProvider>
  );
}

export default Root;
