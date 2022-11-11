import React, { useRef } from "react";
import { sideScroll } from "../../utils/Scroll";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./BtnScroll.css";
const BtnScroll = () => {
    const btnArr=["Great for groups","Family friendly","Animals","Art & writing","Baking","Cooking","Dance","Drinks","Entertainment","Fitness","History & culture","Magic","Music","Social impact","Wellness","Olympians & Paralympians","Designed for accessibility"]
    const contentWrapper = useRef(null);
  return (
    <section className="btn-section-container">
      <div className="left-section">
        <button className="btn-outline">Dates</button>
        <button className="btn-outline">Group Size</button>
        <button className="btn-outline">More Filters</button>
      </div>
      <div className="right-section">
      <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 500, -10)}}><IoIosArrowBack /></button>
      <div className="scroll-container" ref={contentWrapper}>{btnArr.map((each)=> <button className="scroll-btn">{each}</button> )}</div>
      <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 500, 10)}}><IoIosArrowForward /></button>
      </div>
    </section>
  );
};

export default BtnScroll;
