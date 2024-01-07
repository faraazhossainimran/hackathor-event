import React from 'react';

const VideoBackground = () => {
  return (
    <div className="relative h-screen">
      <video
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        src="../../assests/vedios/stars.mp4"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      {/* Add other content on top of the video as needed */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">button</h1>
      </div>
    </div>
  );
};

export default VideoBackground;
