import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  

  return (
    <div className="container mt-3">
        <div className="mt-5">
            <h4>צור קשר</h4>
        </div>
    </div>
  );
};

export default Contact;
