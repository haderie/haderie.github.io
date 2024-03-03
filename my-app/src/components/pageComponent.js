import React, { useRef } from 'react';

const PageComponents = () => {
  const aboutMeRef = useRef(null);

  return (
    <div>
      {/* About Me button */}
      <button onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}>
        About Me
      </button>

      
      <div ref={aboutMeRef}>
        <p>This is all about me</p>
      </div>

      {/* other component content... */}
    </div>
  );
};

export default PageComponents;
