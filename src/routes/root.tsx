import { HelmetProvider } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import { fetchUserCartById } from "../redux/cart/cartThunkActions";
import { Navbar } from "../components";

function Root() {
  const dispatch = useAppDispatch();
  const cartInfo = useAppSelector((store) => store.cartSlice.cartInfo);
  const isLoading = useAppSelector((store) => store.cartSlice.isLoading);
  const userInfo = useAppSelector((store) => store.userSlice.userInfo);

  useEffect(() => {
    if (userInfo) {
      void dispatch(fetchUserCartById(userInfo.id));
    }
  }, [userInfo, dispatch]);

  return (
    <HelmetProvider>
      <header>
        <div className="container">
          <Link to="/" id="logo">
            Goods4you
          </Link>
          {userInfo && !isLoading && cartInfo && <Navbar cartInfo={cartInfo} userInfo={userInfo} />}
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
