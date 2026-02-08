import { useEffect, useState } from "react";
import { useLatestCallback } from "../hook/useLatestCallback";

export function FocusCounterV3() {
  const [count, setCount] = useState(0);

  const callback = useLatestCallback(() => {
    console.log("[FocusCounterV3] count", count);
    setCount(count + 1);
  });

  useEffect(() => {
    window.addEventListener("focus", callback);

    return () => {
      window.removeEventListener("focus", callback);
    };
  }, []);

  return <div>{count}</div>;
}
