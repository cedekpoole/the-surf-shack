import { useEffect, useRef } from "react";

export function useOutsideClick(callback, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside, listenCapturing);
    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside,
        listenCapturing
      );
    };
  }, [ref, callback, listenCapturing]);
  return ref;
}
