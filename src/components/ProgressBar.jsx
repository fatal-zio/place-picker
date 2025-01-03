import { useState, useEffect } from "react";

export default function ProgressBar({ timeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((previousTime) => previousTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timeout} />;
}
