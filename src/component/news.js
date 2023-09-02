import React from "react";
import Image from "next/image";
import "./component.css";
const slideStyles = {
  maxWidth: "517px",
  height: "457px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export const News = ({ img }) => {
  return (
    <div className="news">
      <div className="news-left">
        <div className="text">
          Annual Function, Cinema Nippon, India-Japan Students`&apos Conference,
          Publish Newsletters, Nihongo Quiz Etc.
        </div>
        <div className="more-btn">More</div>
      </div>
      <div className="news-right">
        <Image src={img} style={slideStyles}></Image>
      </div>
    </div>
  );
};
