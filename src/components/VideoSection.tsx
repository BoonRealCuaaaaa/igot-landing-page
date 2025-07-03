import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section className="w-full">
      <video className="w-full h-auto" autoPlay loop muted playsInline>
        <source src="/intro-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoSection;
