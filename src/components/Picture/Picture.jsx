import { useState } from "react";

const Picture = (props) => {
  const {
    img: { name, format },
    className,
    alt,
    height,
  } = props;
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      <picture style={{ display: loaded ? "block" : "none" }}>
        <source
          srcSet={process.env.PUBLIC_URL + `/${name + ".webp"}`}
          type="image/webp"
        />
        <img
          className={className}
          src={process.env.PUBLIC_URL + `/${name + format}`}
          alt={alt}
          onLoad={handleLoaded}
        />
      </picture>
      <div style={{ display: loaded ? "none" : "block", height: height }}></div>
    </>
  );
};

export default Picture;
