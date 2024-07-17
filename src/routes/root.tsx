// import { useState } from 'react'

import { HelmetProvider } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
// import { CartIcon } from "../components/Icons/Icons";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { fetchUserCartById } from "../redux/cart/cartThunkActions";
import { Navbar } from "../components";

function Root() {
  const dispatch = useAppDispatch();
  const cartInfo = useAppSelector((store) => store.cartSlice.cartInfo)
  
  useEffect(() =>{
    void dispatch(fetchUserCartById(23))
  }, [dispatch])  
  
  return (
    <HelmetProvider>
      <header>
        <div className="container">
          <Link to="/" id="logo">Goods4you</Link>
          <Navbar cartInfo={cartInfo}/>
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
