import { useEffect, useState } from "react";

const checkWebPSupport = (callback) => {
  const img = new Image();

  img.src =
    "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";

  img.onload = () => {
    const result = img.width > 0 && img.height > 0;
    callback(result);
  };

  img.onerror = () => {
    callback(false);
  };
};

const useWebP = () => {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    checkWebPSupport((result) => {
      setSupported(result);
    });
  }, []);

  return supported;
};

export default useWebP;
