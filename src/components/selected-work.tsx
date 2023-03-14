import { animate, inView, scroll } from 'motion';
import React, { useEffect, useRef } from 'react';

const SelectedWork = () => {
  const selectedWorkContainerRef = useRef<HTMLSpanElement>(null);
  const selectedWorkRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!selectedWorkContainerRef.current) return;
    inView(selectedWorkContainerRef.current, () => {
      if (!selectedWorkRef.current) return;
      scroll(
        animate(
          selectedWorkRef.current,
          {
            x: [-200, 200],
          },
          {
            duration: 4,
          }
        ),
        {
          target: selectedWorkRef.current,
        }
      );
    });
  });
  return (
    <section
      ref={selectedWorkContainerRef}
      className="h-screen overflow-hidden flex items-center justify-center"
    >
      <h2 ref={selectedWorkRef} className="uppercase text-[12vw]">
        Selected Work
      </h2>
    </section>
  );
};

export default SelectedWork;
