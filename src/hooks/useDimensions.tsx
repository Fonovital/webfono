import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    const scroollY = hasWindow ? window.scrollY : null;
    const scroollX = hasWindow ? window.scrollX: null;
    return {
      width,
      height,
      scroollY,
      scroollX,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('scroll',handleResize);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
  }, [hasWindow]);
  return windowDimensions;
}