import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled=false, to, type,onClick}) {
  const base =
    "mt-4 inline-block text-center text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " py-3 px-4 sm:px-5 sm:py-2.5 text-xs m-auto",
    round:base+"text-sm px-2.5 py-1 sm:px-3.5 sm:py-2",
    secondary:
      "mt-4 inline-block text-center rounded-full border-2 border-stone-300 px-4 py-3 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
