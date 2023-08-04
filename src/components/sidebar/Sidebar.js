import './Sidebar.css';
import Niara8 from '../.././img/niara-8.png'
import Niara10 from '../.././img/niara-10.png'
import Niara11 from '../.././img/niara-11.png'
import Radio from '../.././img/radio.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='header-1 background'>
        <h2 className='heading-2'>
          Our world
        </h2>
        <div className='sidebar-img'>
          <img src={Niara8} alt='niara' className='niara-8'/>
        </div>
        <div className='header-text'>
          <h3>Nigeria is the Lord's</h3>
          <i>High Life Music</i>
        </div>
        <div className='radio'>
          <img src={Radio} alt='radio' />
        </div>
      </div>

      <div className='header-2 background'>
        <h2 className='heading-2'>
          Events
        </h2>
        <div className='content'>
          <div className='content-item'>
            <h4 className='heading-four'>High Life Music Album Launch</h4>
            <i>12 Mar 2019</i>
          </div>
          <div className='content-item'>
            <h4 className='heading-four'>World Blood Donor Day drive</h4>
            <i>12 Mar 2019</i>
          </div>
          <div className='content-item'>
            <h4 className='heading-four'>On Eagles Wings Prophetic Gathering</h4>
            <i>12 Mar 2019</i>
          </div>
        </div>
        <div className='all-events'>all enents</div>
      </div>

      <div className='header-3'>
        <h2 className='heading-2 store'>
          Store
        </h2>
        <div className='niara-10 sidebar-img'>
          <img src={Niara10} alt='niara' />
        </div>
        <h5 className='heading-5'>New series from carlton Williams</h5>
        <div className='niara-10 sidebar-img'>
          <img src={Niara11} alt='niara' />
        </div>
        <h5 className='heading-5'>Official High Life World Merch Store</h5>
      </div>

    </div>
  )
}

export default Sidebar
