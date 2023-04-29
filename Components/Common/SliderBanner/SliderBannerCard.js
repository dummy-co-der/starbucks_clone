import React from 'react';
import style from './SliderBannerCard.module.scss';

const SliderBannerCard = ({ data }) => {
  console.log(data);
  return (
    <div
      className={style.sliderBannerCard}
      style={{ backgroundImage: `url(${data.backgroundimage})` }}
    > 
    <div>
        
    </div>
      {/* other content */}
    </div>
  );
};

export default SliderBannerCard;