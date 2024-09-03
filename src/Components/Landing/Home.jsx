import React, { useEffect } from 'react';
import "./Homi.css";
import imgh from '../../assets/imghome.jpg';
import myImage from '../../assets/imkj.jpg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import pdd from '../../assets/Kamlesh_FullStackDeveloper.pdf';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleDownloadpdf = () => {
    const link = document.createElement('a');
    link.href = pdd;
    link.download = 'Kamlesh_Kumar_FullStackDeveloper_CV.pdf'; // Specify the file name
    link.click();
  };

  // Define the start date of your experience (e.g., January 2022)
  const startDate = new Date(2022, 0); // January 2022
  const currentDate = new Date();
  
  // Calculate total months of experience
  const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
                      (currentDate.getMonth() - startDate.getMonth());

  // Calculate years and remaining months
  const yearsOfExperience = Math.floor(totalMonths / 12);
  const monthsOfExperience = totalMonths % 12;

  return (
    <div className='hommain' id='home'>
      <div className='optpg'></div>
      <div className="half">
        <h1 className='htitle' data-aos='fade-down'>Hello, I'm Kamlesh</h1>
        <p className='description' data-aos='fade-up'>
          I'm a seasoned Full Stack Developer with expertise in .NET Core, Angular, React, and MSSQL, backed by {yearsOfExperience} years and {monthsOfExperience} months of hands-on experience.
          Reach out if you'd like to know more!
        </p>
        <div className="contactBttpd" onClick={handleDownloadpdf}>
          Download CV
        </div>
      </div>
      <div className="ohalf">
        <img className='menubtnn' data-aos='fade-up' src={imgh} alt="Home Banner" />
        <FloatingWhatsApp
          phoneNumber="+919639532262"
          accountName="Kamlesh Kumar"
          statusMessage="replies within 1 hour"
          avatar={myImage}
          className="wp"
        />
      </div>
    </div>
  );
}

export default Home;
