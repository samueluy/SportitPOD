import React, { useState, useEffect } from "react";

const Timer = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const now = new Date();
    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      12,
      0,
      0
    );
    if (now.getTime() > targetTime.getTime()) {
      targetTime.setDate(targetTime.getDate() + 1);
    }
    const timeUntilReset = targetTime.getTime() - now.getTime();

    const interval = setInterval(() => {
      const updatedCountdown = targetTime.getTime() - new Date().getTime();
      setCountdown(updatedCountdown);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatCountdown = (countdown) => {
    const seconds = Math.floor((countdown / 1000) % 60);
    const minutes = Math.floor((countdown / 1000 / 60) % 60);
    const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h1>Next POTD:</h1>
      <p>{formatCountdown(countdown)}</p>
    </div>
  );
};

export default Timer;
