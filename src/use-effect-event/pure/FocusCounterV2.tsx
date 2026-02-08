import { useEffect, useRef, useState } from "react";

export function FocusCounterV2() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const callback = () => {
      console.log("[FocusCounterV2] count", countRef.current);
      setCount(countRef.current + 1);

      // useEffect에서 count와 countRef 동기화 처리
      // countRef.current = countRef.current + 1;
    };

    window.addEventListener("focus", callback);

    return () => {
      window.removeEventListener("focus", callback);
    };
  }, [count]);

  return <div>{count}</div>;
}
