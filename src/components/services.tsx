import React, { useEffect, useRef } from 'react';
import { animate, inView, stagger } from 'motion';
type TransformYAxisTextProps = {
  sentence: string;
};
const TransformYAxisText = ({ sentence }: TransformYAxisTextProps) => {
  const sentenceContainerRef = useRef<HTMLSpanElement>(null);
  const sentenceRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!sentenceContainerRef.current) return;
    inView(sentenceContainerRef.current, () => {
      if (!sentenceRef.current) return;
      animate(
        sentenceRef.current,
        {
          opacity: 1,
          transform: 'none',
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    });
  }, []);
  return (
    <span
      ref={sentenceContainerRef}
      className="inline-block leading-[4vw] text-[2vw]  overflow-hidden"
    >
      <span
        ref={sentenceRef}
        className="inline-block leading-[4vw] text-[4vw] opacity-0 translate-y-[8vw]"
      >
        {sentence}
      </span>
    </span>
  );
};

const Services = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="mx-auto">
        <h3 className="text-3xl">Services I can help you with</h3>
        <div className="h-10"></div>
        <div className="flex flex-col">
          <TransformYAxisText sentence="Art direction, branding." />
          <TransformYAxisText sentence="Iconography, Illustration" />
          <TransformYAxisText sentence="Logo design, motion" />
          <TransformYAxisText sentence="ui, ux, websites" />
        </div>
      </div>
    </section>
  );
};

export default Services;
