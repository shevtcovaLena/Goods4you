import { HelmetProvider } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { Navbar } from "../components";
import { fetchUserCartById } from "../redux/cart/cartThunkActions";

function Root() {
  const dispatch = useAppDispatch();
  const {cartInfo} = useAppSelector((store) => store.cartSlice);
  const userInfo = useAppSelector((store) => store.userSlice.userInfo);
  
  useEffect(() => {
    if (userInfo) {
      const {id, token} = userInfo;
      void dispatch(fetchUserCartById({id, token}));
    }
  }, [userInfo, dispatch]);

  return (
    <HelmetProvider>
      <header>
        <div className="container">
          <Link to="/" id="logo">
            Goods4you
          </Link>
          {userInfo && cartInfo && <Navbar cartInfo={cartInfo} userInfo={userInfo} />}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <Link to="/" id="logo">
            Goods4you
          </Link>
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
