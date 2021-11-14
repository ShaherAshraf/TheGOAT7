import Scrollbar from 'smooth-scrollbar';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { useRef, useEffect } from 'react';

SmoothScrollbar.use(OverscrollPlugin);

const options = {
  damping: 0.07,
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: true,
  delegateTo: window,
  plugins: { overscroll: { effect: 'bounce', damping: 0.12 } },
};

const useScroll = () => {
  const bodyScrollBar = useRef();
  const trackRef = useRef();

  const styleScrollTrack = () => {
    trackRef.current = document.querySelector('.scrollbar-track-y');
    trackRef.current.style.width = '16px';
    trackRef.current.style.zIndex = 9999;
    trackRef.current.firstElementChild.style.backgroundColor = '#ef4444';
    trackRef.current.firstElementChild.style.width = '100%';
    trackRef.current.firstElementChild.style.borderRadius = 0;
  };

  useEffect(() => {
    bodyScrollBar.current = Scrollbar.init(document.querySelector('.scroller'), options);
    styleScrollTrack();
  }, []);

  return { bodyScrollBar };
};

export default useScroll;
