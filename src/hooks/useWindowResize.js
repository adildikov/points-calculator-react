import { useState, useEffect } from 'react';
import _debounce from 'lodash/debounce';

const useWindowResize = () => {
  const [{ width, height }, setDimensions] = useState(
      { width: window.innerWidth, height: window.innerHeight }
  );

  useEffect(() => {
    const resizeHandler = _debounce(
      () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      },
      500,
      { leading: false }
    );

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return { width, height };
};

export default useWindowResize;