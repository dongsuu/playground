import { useEffect, useEffectEvent, useState } from "react";

export function FocusCounterV4() {
  const [count, setCount] = useState(0);

  const callback = useEffectEvent(() => {
    console.log("[FocusCounterV4] count", count);
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
