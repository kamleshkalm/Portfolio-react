import React from 'react'
import './Fut.css';
import { FaLocationArrow, FaMailBulk, FaMailchimp, FaMapMarked, FaMobile, FaMobileAlt, FaPhone, FaPhoneAlt, FaVoicemail } from 'react-icons/fa';
import { FaLocationCrosshairs, FaLocationDot, FaMapLocation, FaMobileButton } from 'react-icons/fa6';

const Foot = () => {
  return (
    <div className='botm'>
      <div className='connectme'>
        <a href="mailto:kamleshkalm980@gmail.com">
          <FaMailBulk />
        </a>
        <h3>kamleshkalm980@gmail.com</h3>
      </div>
      <div className='connectme'>
        <FaPhoneAlt />
        <h3>+91  9639532262</h3>
      </div>
      <div className='connectme'>
        <FaLocationDot />
        <h3> Uttarakhand ( INDIA )</h3>
      </div>


    </div>
  )
}

export default Foot
