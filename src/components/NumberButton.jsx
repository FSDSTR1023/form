import PropTypes from "prop-types";
import cx from "classnames";

export const NumberButton = ({ number, css, handleClick }) => {

  return (
    <button onClick={() => handleClick(number)} className={cx("bg-slate-200 hover:bg-slate-100 rounded-md text-slate-800 p-2", css)}>
      {number}
    </button>
  );
};

NumberButton.propTypes = {
  number: PropTypes.number,
  css: PropTypes.string,
  handleClick: PropTypes.func
};
