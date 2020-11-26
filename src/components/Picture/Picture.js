import React, { useState } from "react";
import supportsWebP from "supports-webp";

const Picture = (props) => {
  const { webp, jpg, png, className, alt, height } = props;
  const [loaded, setLoaded] = useState(false);
  const [support, setSupport] = useState(true);
  const handleLoaded = () => {
    setLoaded(true);
  };

  supportsWebP.then((supported) => {
    if (supported) {
      setSupport(true);
    } else {
      setSupport(false);
    }
  });

  return (
    <>
      <picture style={{ display: loaded ? "block" : "none" }}>
        {support && (
          <source
            srcSet={process.env.PUBLIC_URL + `/${webp}`}
            type="image/webp"
          />
        )}
        {jpg && (
          <source
            srcSet={process.env.PUBLIC_URL + `/${jpg}`}
            type="image/jpeg"
          />
        )}
        {png && (
          <source
            srcSet={process.env.PUBLIC_URL + `/${png}`}
            type="image/png"
          />
        )}
        <img
          className={className}
          src={process.env.PUBLIC_URL + `/${jpg ? jpg : png}`}
          alt={alt}
          onLoad={handleLoaded}
        />
      </picture>
      <div style={{ display: loaded ? "none" : "block", height: height }}></div>
    </>
  );
};

export default Picture;
