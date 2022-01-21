import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sePic from '../src/images/Z63_0081_work-websize.jpg'
import thirdPic from '../src/images/Z63_0257_work-websize.jpg'
import Pic4 from '../src/images/Z63_0471_work-1-websize.jpg'
import Pic5 from '../src/images/Z63_0510_work-1-websize.jpg'
import Pic6 from '../src/images/Z63_0562_work-1-websize.jpg'
import Pic7 from '../src/images/Z63_0698_work-1-websize.jpg'
import Pic8 from '../src/images/Z63_1360_work-1-websize.jpg'
import Pic9 from '../src/images/Z63_1777_work-1-websize.jpg'
import Pic10 from '../src/images/Z63_2287_work-websize.jpg'
import Pic11 from '../src/images/Z63_2867_work-1-websize.jpg'
import Pic12 from '../src/images/Z63_2907_work-1-websize.jpg'
import Pic13 from '../src/images/Z63_3168_work-1-websize.jpg'
import Pic14 from '../src/images/Z63_3231_work-websize.jpg'
import Pic15 from '../src/images/Z63_3262_work-1-websize.jpg'
import Pic16 from '../src/images/Z63_3365_work-1-websize.jpg'


function CarouselPage() {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={sePic} className="firstPic"></img>

      </div>
      <div>
        <img src={thirdPic} className="firstPic"></img>

      </div>
      <div>
        <img src={Pic4} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic5} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic6} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic7} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic8} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic9} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic10} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic11} className="firstPic"></img>
      </div>

      <div>
        <img src={Pic12} className="firstPic"></img>
      </div>
            <div>
        <img src={Pic13} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic14} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic15} className="firstPic"></img>
      </div>
      <div>
        <img src={Pic16} className="firstPic"></img>
      </div>
        </Slider>
  )
}

export default CarouselPage