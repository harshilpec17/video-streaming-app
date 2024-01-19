import React from "react";

const Video = ({ id }) => {
  return (
    <>
      <iframe
        width="1000"
        height="550"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Video;