import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate} from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1") return <button className="text-lg text-blue-500 hover:text-blue-600 hover:underline" onClick={() => navigate(-1)}>&larr; Go back</button>;

  return (
    <Link
      to={to}
      className="text-lg text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
