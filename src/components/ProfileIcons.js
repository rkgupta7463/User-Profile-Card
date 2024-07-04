import React from 'react';

const ProfileIcons = ({github,linked,portfolio}) => {
  return (
    <div>
        <div className="icon">
            <a href={linked} target='blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href={github} target='blank'><i className="fa-brands fa-github"></i></a>
            <a href={portfolio} target='blank'><i className="fa-solid fa-globe"></i></a>
        </div>    
    </div>
  )
};

export default ProfileIcons;
