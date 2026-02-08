import { useEffect, useState } from "react";

/**
 * 문제 상황 재현 컴포넌트
 */
export function FocusCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const callback = () => {
      console.log("[FocusCounter] count", count);
      setCount(count + 1);
    };
    window.addEventListener("focus", callback);

    return () => {
      window.removeEventListener("focus", callback);
    };
  }, []);

  return <div>{count}</div>;
}
