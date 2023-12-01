import React from 'react'
import './home.css'
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='home-main'>
        <div className='home-bg-main'>
            <div className='home-bg'>
                <div className='bg-text'>
                    <h5 className='bg-t-1'>Extra 20% off auto applied on checkout </h5>
                    <div className='btn-main'>
                    <button className='bg-btn'>SHOP MEN<BsArrowRight className='icon'/></button>
                    <button className='bg-btn-2'>SHOP WOMEN <BsArrowRight className='icon'/></button>
                    <button className='bg-btn'>SHOP KIDS <BsArrowRight className='icon'/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home