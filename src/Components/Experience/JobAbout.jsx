import React, { useEffect } from 'react'
import   './Jobs.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import pdd from  '../../assets/Kamlesh_FullStackDeveloper.pdf';


const JobAbout = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
    },[])
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = pdd;
      link.download = 'Kamlesh_FullStackDeveloper.pdf';
      link.click();
    };
  return (
    
    <div id='experince' className='jobmain'>
<div className='exp' data-aos='fade-up'>Expereince</div>
<div className='exsplit'>

<div className='wfull'>

<img src='https://miro.medium.com/v2/resize:fit:850/1*zVnWJtyGOX_kUIDm6ccCfQ.gif'  />

</div>
<div className="expshow" data-aos='fade-up'>
  <div className='cdet'>
  <div className="circ"></div>
  <div className="cnam"><a href='https://techfeature.in/' > Tech Features </a></div>
  
  </div>
  
   <div className='info'>
    <ul>
      <li>Full-Stack Developer</li>
      <li>Jan 2024 - Present</li>
      <li>Worked on TFM (Tech Feature Management System)</li>
      <li>Worked on Pahadi Dukan (E-commerce platform)</li>
      <li>Created Chat Application</li>
      <li>Created Chat Bot</li>
    </ul>
    <div className="contactBtt" onClick={handleDownload}>
      Download CV
    </div>
  </div>
</div>
</div>


    </div>
    
  )
}

export default JobAbout
