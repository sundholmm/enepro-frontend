import React from "react";

const Picture = (props) => {
  const { webp, jpg, png, className, alt } = props;
  return (
    <picture>
      <source srcSet={process.env.PUBLIC_URL + `/${webp}`} type="image/webp" />
      <source srcSet={process.env.PUBLIC_URL + `/${jpg}`} type="image/jpeg" />
      <source srcSet={process.env.PUBLIC_URL + `/${png}`} type="image/png" />
      <img
        className={className}
        src={process.env.PUBLIC_URL + `/${jpg}`}
        alt={alt}
      />
    </picture>
  );
};

export default Picture;
