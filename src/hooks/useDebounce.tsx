import { useEffect, useState } from "react";

function useDebounce(changedValue, delayTime) {
  const [debouncedValue, setDebouncedValue] = useState(changedValue);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(changedValue);
    }, delayTime);

    return () => clearTimeout(timeoutId);
  }, [changedValue, delayTime]);

  return debouncedValue;
}

export default useDebounce;
