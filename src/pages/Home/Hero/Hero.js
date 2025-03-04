import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.scss';
function Hero() {
  const navigate=useNavigate();

  
    return (
    <div className={styles.container}>
      {/* Background Video */}
      <video 
        className={styles.video} 
        autoPlay 
        loop 
        muted
      >
        <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to Our Page</h1>
        <p className={styles.description}>HospiSteril is founded with objective of bringing paradigm shift in the way business is conducted, instead of from operating in selected segment , <br></br>our aim is to start from working from the conceptual stage to give logical conclusion by operationalizing the same in to business entity.</p>
        <div className={styles.btooo}>

        <button className={styles.button} onClick={()=>navigate('/about')}>
          Learn more About Us
        </button>
        <button className={styles.button} onClick={()=>navigate('/contact')} >CONTACT US</button>
      </div>
      </div>
    </div>
    );
}

export default Hero;