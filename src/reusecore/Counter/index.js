import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setViewPortEntered(true);
      }
    },
  });

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <span
            className={className}
            ref={(node) => {
              countUpRef.current = node;
              ref(node);
            }}
          />
        );
      }}
    </CountUp>
  );
};

export default Counter;
