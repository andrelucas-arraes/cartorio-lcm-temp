import { useRef, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type noop = (...args: any[]) => any;


export function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);

  // Update ref in effect to avoid render side-effects
  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  // Use state to keep the function reference stable across renders
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [persistFn] = useState(() => ((...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return fnRef.current!(...(args as any));
  }) as T);

  return persistFn;
}
