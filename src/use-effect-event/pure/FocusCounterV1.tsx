import { useEffect, useState } from "react";

export function FocusCounterV1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const callback = () => {
      console.log("[FocusCounterV1] count", count);
      setCount(count + 1);
    };

    window.addEventListener("focus", callback);

    return () => {
      window.removeEventListener("focus", callback);
    };
  }, [count]);

  return <div>{count}</div>;
}
