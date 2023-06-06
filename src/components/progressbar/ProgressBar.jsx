import React, { useState, useEffect } from "react";
import "./progressBar.css";

const ProgressBar = ({ value, background, color }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= value) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <div className="progress-bar" style={{ backgroundColor: "#2B2B36" }}>
      <div
        className="progress"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ProgressBar;
