import React from 'react'
import banner from "../assets/banner.jpg"
import banner2 from "../assets/banner2.webp"
import banner3 from "../assets/banner3.webp"
import banner4 from "../assets/banner4.webp"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position: "absolute",
              left: "50px",
              top: "50%",
              transform: "translatey(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "black",
              borderRight: "3px white solid",
              padding: "10px 0",
              cursor: "pointer",
              opacity: "0"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
    <section>
        <Slider {...settings}>
          <div className="">
            <img src={banner} alt="" />
          </div>
          <div className="">
            <img src={banner2} alt="" />
          </div>
          <div className="">
            <img src={banner3} alt="" />
          </div>
          <div className="">
            <img src={banner4} alt="" />
          </div>
        </Slider>
    </section>
  )
}

export default Banner
