import { useState, useEffect } from "react";

// Removes flickers after dispatching getUserDetails in multiple screens while navigating between them

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
