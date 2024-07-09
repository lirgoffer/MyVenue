import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  

  return (
    <div className="container mt-3">
        <div className="mt-5">
            <h4>ברוכים הבאים ל- MyVenue!</h4>
            <p>כאן תוכלו למצוא את אולם האירועים האידיאלי עבורכם</p>
            <Link to="/">
                <button>בואו נתחיל</button>
            </Link>
        </div>
    </div>
  );
};

export default Main;
