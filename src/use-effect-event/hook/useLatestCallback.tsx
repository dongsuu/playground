import { useCallback, useEffect, useRef } from "react";

export function useLatestCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args: unknown[]) => callbackRef.current(...args), []);
}
