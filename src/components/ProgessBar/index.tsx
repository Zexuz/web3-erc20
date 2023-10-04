import React, { useEffect } from "react";

interface ProgressBarProps {
  duration: number;
}

export const ProgressBar = ({ duration }: ProgressBarProps) => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1,
      );
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="h-2.5 w-full rounded-full bg-gray-300">
      <div
        className="h-2.5 rounded-full bg-blue-200 transition-all duration-200 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
