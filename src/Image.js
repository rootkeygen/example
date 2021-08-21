import React from "react";
import PropTypes from "prop-types";

const Image = ({ img, position, preserveRatio }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${img})`,
      backgroundPosition: position,
      backgroundSize: preserveRatio === false ? "cover" : "contain",
      backgroundRepeat: "no-repeat"
    }}
  />
);

Image.propTypes = {
  img: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["center", "top", "bottom", "left", "right"]),
  preserveRatio: PropTypes.bool
};

Image.defaultProps = {
  position: "center",
  preserveRatio: true
};
export default Image;
