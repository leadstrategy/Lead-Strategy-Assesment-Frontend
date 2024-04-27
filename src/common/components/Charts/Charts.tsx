import React from 'react';

//progressbar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBar = ({ percentage = 0, className = '', color = '#d05353ff' }) => {
  return (
    <div className={`progressBar ${className}`}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Text size
          textSize: '18px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 10,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: color,
          textColor: color,
        })}
      />
    </div>
  );
};
