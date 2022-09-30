import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Cookie from "js-cookie";
import { authAction } from "../redux/AuthSlice";
import { notifyAction } from "../redux/NotifySlice";
import { useEffect } from "react";
import { addCart } from "../redux/CartSlice";

const NavBar = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const __next__cart01__devat = JSON.parse(
      localStorage.getItem("__next__cart01__devat")
    );
    if (__next__cart01__devat) {
      __next__cart01__devat.map((cart) => {
          dispatch(addCart(cart));
    });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("__next__cart01__devat", JSON.stringify(cart));
  }, [cart]);

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return " ";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch(authAction({}));
    dispatch(notifyAction({ success: "Logged out!" }));
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <Image
            src={
              authState &&
              authState.auth &&
              authState.auth.user &&
              authState.auth.user.avatar
            }
            alt="avatar"
            width="30"
            height="30"
            style={{
              borderRadius: "50%",
              marginRight: "3px",
            }}
          />
          <span className="ml-1">
            {authState &&
              authState.auth &&
              authState.auth.user &&
              authState.auth.user.name}
          </span>
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">
            Profile
          </a>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">DEVAT</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/cart">
              <a className={"nav-link" + isActive("/cart")}>
                <i
                  className="fa-solid fa-cart-shopping position-relative"
                  arial-hidden="true"
                >
                  <span
                    className="position-absolute"
                    style={{
                      padding: "3px 6px",
                      background: "#ed143dc2",
                      borderRadius: "50%",
                      top: "-10px",
                      right: "-10px",
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {cart.length}
                  </span>
                </i>
                <span className="ml-1">Cart</span>
              </a>
            </Link>
          </li>

          {Object.keys(authState).length === 0 ||
          Object.keys(authState.auth).length === 0 ? (
            <li className="nav-item cursor-pointer">
              <Link href="/signin">
                <a className={"nav-link" + isActive("/signin")}>
                  <i className="fas fa-user" aria-hidden="true"></i>
                  <span className="ml-1">Sign in</span>
                </a>
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
