import { useEffect, useRef } from "react";

export const useUnmounted = () => {
  const unmounted = useRef(false);
  useEffect(
    () => () => {
      unmounted.current = true;
    },
    []
  );
  return unmounted;
};
export default useUnmounted;
