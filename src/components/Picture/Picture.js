import React, { useState } from "react";

const Picture = (props) => {
  const { webp, jpg, png, className, alt, height } = props;
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
  };
  return (
    <>
      <picture style={{ display: loaded ? "block" : "none" }}>
        <source
          srcSet={process.env.PUBLIC_URL + `/${webp}`}
          type="image/webp"
        />
        <source srcSet={process.env.PUBLIC_URL + `/${jpg}`} type="image/jpeg" />
        <source srcSet={process.env.PUBLIC_URL + `/${png}`} type="image/png" />
        <img
          className={className}
          src={process.env.PUBLIC_URL + `/${jpg}`}
          alt={alt}
          onLoad={handleLoaded}
        />
      </picture>
      <div style={{ display: loaded ? "none" : "block", height: height }}></div>
    </>
  );
};

export default Picture;
