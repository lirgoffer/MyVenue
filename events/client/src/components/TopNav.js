import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div className="container">
        <div className="nav bg-light d-flex align-items-center">
      <div className="col-2">
        <h5 className="mb-0">MyVenue</h5>
      </div>
      <div className="col-10 d-flex flex-row justify-content-end">
      <Link className="nav-link color-primary" to="/">
        דף הבית
      </Link>
      <Link className="nav-link" to="/">
        עולמות אירועים
      </Link>
      <Link className="nav-link" to="/">
        קצת עלינו
      </Link>
      <Link className="nav-link" to="/contact">
        צור קשר
      </Link>
      {auth !== null && (
        <Link className="nav-link" to="/dashboard">
          דשבורד
        </Link>
      )}

      {auth !== null && (
        <a className="nav-link pointer" href="#" onClick={logout}>
          יציאה
        </a>
      )}

      {auth === null && (
        <>
          <Link className="nav-link" to="/login">
            התחברות
          </Link>
          <Link className="nav-link" to="/register">
            הרשמה
          </Link>
        </>
      )}
      </div>
    </div>
    </div>
  );
};

export default TopNav;
