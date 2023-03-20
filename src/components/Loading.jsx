import React from "react";
import loadingGif from "../images/loading-load.gif";

function Loading() {
  return (
    <div>
      <img src={loadingGif} alt="loading" />
    </div>
  );
}

export default Loading;
