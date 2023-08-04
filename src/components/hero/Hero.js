import './Hero.css'
import Blood from '../../img/tv-1.png'
import Arm from '../../img/arm.png'
import Atm from '../../img/atm.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className='img img-1'>
        <img src={Blood} alt='blood' className='blood' />
        <div className='effect'></div>
        </div>

        <div className='hero-text'>
          <div>
            <h1 className='heading-1'>
              <span>life</span> 
              <span>blood</span>
              </h1>
            <div className='red'></div>
          </div>
            <ul className='hero-list'>
                <li className='list-items left'>about</li>
                <li className='list-items center'>contact</li>
                <li className='list-items right'>events</li>
            </ul>
        </div>

        <div className='img img-2'>
          <img src={Arm} alt='/' className='arm' />
          <h2 className='img-text'>get involved</h2>
          <div className='effect'></div>
        </div>
        <div className='img img-3'>
          <img src={Atm} alt='Atm' className='atm' />
          <h2 className='img-text'>Give</h2>
          <div className='effect'></div>
        </div>
        <div className='img img-4'>
          <h2 className='img-text'>FAQ</h2>
        <div className='effect'></div>
        </div>
      
    </div>
  )
}


export default Hero;
