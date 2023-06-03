import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState();

  function currentTime() { return new Date().toISOString().substring(11, 19); }

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(currentTime());
    }, 1000);

    return () => clearInterval(clockInterval);
  });

  return <div>Clock: {time}</div>;
}
