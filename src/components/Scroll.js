import React, { useEffect, useState } from 'react';

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      setScroll(scrollCheck);
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

export default function Scroller() {
  const scroll = useScrollHandler();

  return (
    <div style={{ color: scroll ? 'red' : 'green' }}>
      {Array(200)
        .fill()
        .map((_, i) => (
          <p key={i}>{i}</p>
        ))}
    </div>
  );
}
