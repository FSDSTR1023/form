import PropTypes from "prop-types";
import cx from "classnames";

export const Button = ({ content, css, handleClick }) => {
  return (
    <button onClick={() => handleClick(content)} className={cx("bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white p-2", css)}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  css: PropTypes.string,
  handleClick: PropTypes.func
};
