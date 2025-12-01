import React from 'react';
import '../scss/_index.scss';

const ExpertiseIcon = ({ icon, label }) => {
  return (
    <div className="expertise-icon">
      <i className={`icon ${icon}`}></i>
      <p>{label}</p>
    </div>
  );
};

export default ExpertiseIcon;
