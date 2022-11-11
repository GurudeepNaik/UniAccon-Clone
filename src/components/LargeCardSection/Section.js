import React, { useRef } from "react";
import "./SectionStyle.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Card from "./Card";
import { sideScroll } from "../../utils/Scroll";

const Section = () => {
  const contentWrapper = useRef(null);
  const data = [
    {
      heading: "Most popular around the world",
      img: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200",
    },
    {
      heading: "Great for team building",
      img: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200",
    },
    {
      heading: "Fun for the family",
      img: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200",
    },
  ];
  return (
    <div>
      <div className="heading-container">
        <h1>New This Week</h1>
        <div className="arrow-btn-container">
          <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 800, -10)}}>
            <IoIosArrowBack />
          </button>
          <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 800, 10)}}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div id="grid-list" ref={contentWrapper}>{data.map((each,i)=> <Card key={i} data={each}/>)}</div>
    </div>
  );
};

export default Section;
