import '../mainContent/Section.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Lifeblood9 from '../.././img/lifeblood-9.png';
import Lifeblood10 from '../.././img/lifeblood-10.png';


 export const ImgCarousel1 = ({Lifeblood1, Lifeblood2}) => {
  return (
    <div className='sliders' name='carousel'>
      <Carousel 
        className='carousel' 
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div className='b-card'>
          <img src={Lifeblood1} alt='/'/>
          <h3 className='heading-3'>30 blood donation myths prevalent in nigeria</h3>
        </div>
        <div className='b-card'>
          <img src={Lifeblood2} alt='/'/>
          <h3 className='heading-3'>Life Blood Nigeria Testimonials - Docuseries</h3>
        </div>
      </Carousel>
    </div>
  )
}

export const ImgCarousel2 = ({Lifeblood3,Lifeblood4, Lifeblood5, Lifeblood6, Lifeblood7,Lifeblood8}) => {
  return (
    <div className='sliders' name='carousel'>
      <Carousel 
        className='carousel' 
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
          <div className='s-card'>
            <img src={Lifeblood3} alt='lifeblood-3' className='s-card-img' />
            <h4 className='heading-4'>Blood count boosters</h4>
          </div>
          <div className='s-card'>
              <img src={Lifeblood4} alt='lifeblood-4' className='s-card-img' />
              <h4 className='heading-4'>World blood donor day celebration</h4>
          </div>
          <div className='s-card'>
              <img src={Lifeblood5} alt='lifeblood-5' className='s-card-img' />
              <h4 className='heading-4'>Testimonials - Hows keji was saved by a blood donor</h4>
          </div>
          <div className='s-card'>
              <img src={Lifeblood6} alt='lifeblood-6' className='s-card-img' />
              <h4 className='heading-4'>Blood Donationn sensitization in ipaja</h4>
          </div>
          <div className='s-card'>
              <img src={Lifeblood7} alt='lifeblood-7' className='s-card-img' />
              <h4 className='heading-4'>All you need to know about blood types and groups</h4>
          </div>
          <div className='s-card'>
              <img src={Lifeblood8} alt='lifeblood-8' className='s-card-img' />
              <h4 className='heading-4'>world blood Donor 2019 celebration</h4>
          </div>
      </Carousel>
    </div>
  )
}


 export const ImgCarousel3 = () => {
  return (
    <div className='sliders' name='carousel'>
      <Carousel 
        className='carousel' 
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
        <div className='b-card'>
              <img src={Lifeblood9} alt='lifeblood-9' className='section-img'/>
              <h3 className='heading-3'>The definitive article on blood diseases</h3>
          </div>
          <div className='b-card'>
              <img src={Lifeblood10} alt='lifeblood-10' className='section-img'/>
              <h3 className='heading-3'>Testimonials - Baby Temi's got her groove back</h3>
          </div>
      </Carousel>
    </div>
  )
}





