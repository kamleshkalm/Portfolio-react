import React, { useEffect, useState } from 'react'
import   './Ski.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Skills = () => {
  const [isProgrammingEnabled, setProgrammingEnabled] = useState(true);
  const [isProgrammingEnabledBE, setProgrammingEnabledBE] = useState(false);
  const [isProgrammingEnabledDB, setProgrammingEnabledDB] = useState(false);
  useEffect(()=>{
    Aos.init({duration:2000})
    },[])

  const handleFeClick = () => {
    setProgrammingEnabled(true);
    setProgrammingEnabledBE(false);
    setProgrammingEnabledDB(false);

  }; 
  const handleBeClick = () => {
    console.log("2nd button pressed");
    setProgrammingEnabledBE(true);
    setProgrammingEnabled(false);
    setProgrammingEnabledDB(false);

  }; 
  const handleDBClick = () => {
    console.log("3rd button pressed");

    setProgrammingEnabledDB(true);
    setProgrammingEnabledBE(false);
    setProgrammingEnabled(false);

  }; 
  
  return (
    <div id='skill' className='skmain'>
      <div className='sky' data-aos='fade-up'>Skills</div>
      <div className="skillhead">
        <div className='fe' data-aos='fade-up' onClick={handleFeClick}>Frontend</div>
        <div className='be' data-aos='fade-up' onClick={handleBeClick}>Backend</div>
        <div className='db' data-aos='fade-up' onClick={handleDBClick}>Database</div>

      </div>
      <div  className={isProgrammingEnabled ? 'programming' : 'hidden'}>
        <div className='imgc' data-aos='fade-up'>
      <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
      </div>
      <div className='imgc' data-aos='fade-up'>
       <img className='js' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
       </div>
                 <div className='imgc' data-aos='fade-up'> 
      <img className='anjs' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original-wordmark.svg" />
      </div>
                 <div className='imgc' data-aos='fade-up'>
      <img className='react' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
      </div>     
      </div>
      <div  className={isProgrammingEnabledBE ? 'backprogramming' : 'hidden'}>
      <div className='imgc' data-aos='fade-up'>
      <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />
      </div>
      <div className='imgc' data-aos='fade-up'>
      <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
      </div>
      <div className='imgc' data-aos='fade-up'>
      <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
      </div>
      <div className='imgc' data-aos='fade-up'>
      <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
      </div>

      </div>
      <div  className={isProgrammingEnabledDB ? 'dbprogramming' : 'hidden'}>
      <div className='imgc' data-aos='fade-up'>
      <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
      </div>
      <div className='imgc' data-aos='fade-up'>
      <img className='ango' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg" />
      </div>
      </div>

    </div>
  )
}

export default Skills
