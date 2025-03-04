import { useNavigate } from 'react-router-dom';
import styles from './Zandair100p.module.scss';
import i100p from '../../assests/100p.jpg';
function Zandair100p() {
  const navigate = useNavigate();  
  return (
    <div className={styles.outer}>
     
      <div className={styles.name}>
        <h4>Zandair TM100p <span>Air purification for Pathology</span></h4>

      </div>
       {/* Image Section */}
       <div className={styles.image}  onClick={() => navigate('/product')} style={{ cursor: 'pointer' }}>
        <img src={i100p} alt="Zandair100p"/>
      </div>

      {/* Introduction */}
      <h6>
        Specifically designed to meet the rigorous demands of anatomical <br />
        pathology and forensic laboratories
      </h6>

      {/* Description */}
      <div className={styles.description}>
        <p className={styles.inner}>
          The ZANDAIR 100P Air Purification System 
          is a portable unit, specifically developed to 
          meet the demands in anatomical pathology 
          and forensic laboratories where formalin 
          and other toxic hydrocarbons are prevalent. 
          It is effective in areas where pathology 
          chemicals are used and refilled regularly for 
          automated and manual slide stainers and 
          processors. 
          <br></br>
          <br></br>
          The ZANDAIR 100P uses a 4-step process 
          to purify the air within the laboratory, using 
          two activated carbon filters, photo-catalytic 
          oxidation, and ultraviolet technology.
          <br></br>
          {/* <br></br> */}
          {/* A special attachment for personnel working 
          in small “Cut-up” and “cover slipping” areas 
          is available. An acrylic cover over the work 
          area directs airflow downward and contains 
          fumes from open containers. */}



        </p>
      

         <p className={styles.para}>
          A special attachment for personnel working 
          in small “Cut-up” and “cover slipping” areas 
          is available. An acrylic cover over the work 
          area directs airflow downward and contains 
          fumes from open containers.
        </p> 

      </div>

       

      {/* 4-Step Purification Process
      <div>
        <h6 className={styles.head}>
          The ZANDAIR 100P uses a 4-step process to purify the air within the laboratory
        </h6>
        <ul className={styles.headlist}>
          <li>
            1. The front position of the activated carbon filter, with a specially formulated mixture of
            proprietary compounds, absorbs all VOCs and CACs in the laboratory environment
          </li>
          <hr className={styles.hl} />
          <li>2. A second activated carbon filter increases the ‘dwell time’ providing higher adsorption of VOCs and CACs</li>
          <hr className={styles.hl} />
          <li>
            3. Photo-catalytic oxidation converts toxic compounds into benign constituents such as water
            (H₂O) and carbon dioxide (CO₂). The catalyst does not wear out or lose its effectiveness.
          </li>
          <hr className={styles.hl} />
          <li>
            4. Ultraviolet technology, combined with photo-catalytic oxidation, helps reduce germs spread
            through central heating and air-conditioning systems.
          </li>
          <hr className={styles.hl} />
        </ul>
      </div> */}
      
<div>
  <h6 className={styles.head}>
    The ZANDAIR 100P uses a 4-step process to purify the air within the laboratory.
  </h6>

  <p className={styles.headlist}>
    <strong>1.</strong> The front position of the activated carbon filter, with a specially formulated mixture of 
    proprietary compounds, absorbs all VOCs and CACs in the laboratory environment.
  </p>
  <hr className={styles.hl} />

  <p className={styles.headlist}>
    <strong>2.</strong> A second activated carbon filter increases the ‘dwell time’ providing higher adsorption of VOCs and CACs.
  </p>
  <hr className={styles.hl} />

  <p className={styles.headlist}>
    <strong>3.</strong> Photo-catalytic oxidation converts toxic compounds into benign constituents such as water 
    (H₂O) and carbon dioxide (CO₂). The catalyst does not wear out or lose its effectiveness.
  </p>
  <hr className={styles.hl} />

  <p className={styles.headlist}>
    <strong>4.</strong> Ultraviolet technology, combined with photo-catalytic oxidation, helps reduce germs spread 
    through central heating and air-conditioning systems.
  </p>
  <hr className={styles.hl} />
</div>

      <div className={styles.tableContainer}>
  <table className={styles.specTable}>
    <thead>
      <tr>
        <th colSpan="2">Specification</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["Dimensions", "55 cm X 46 cm X 20 cm"],
        ["Weight", "10.43 Kg"],
        ["Max air flow", "265 CFM / 7.5 m³ per minute"],
        ["Max watts", "110 watts"],
        ["Voltage", "120 V – 60 Hz / 220V – 50 Hz"],
        ["Blower", "Reversed – curved motorized impeller"],
        ["Catalyst", "Metal oxides"],
        ["U.V. range", "254 nm (produces no ozone)"],
        ["Gas adsorption", "Two stage activated carbon media"],
        ["Application", "2,000 sq. feet max. / 185 sq. meters"],
        ["Service", "U.V. lamps – 1 year, Filters – 6 months"],
        ["Warranty", "2 year limited warranty on all components excluding light and filters"],
      ].map(([key, value], index) => (
        <tr key={index}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div className={styles.tableContainer}>
  <table className={styles.orderTable}>
    <thead>
      <tr>
        <th>Order Code</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["FHTIZ100P220V", "ZANDAIR 100P, Air purifier, photo-catalytic chamber, 220V"],
        ["FHTIZRK203", "Replacement UV lamp 8w for ZANDAIR models 100C / 100P"],
        ["FHTIZRK401", "Replacement filter Set for ZANDAIR 100P includes: 2 x activated carbon filters"],
      ].map(([code, desc], index) => (
        <tr key={index}>
          <td>{code}</td>
          <td>{desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default Zandair100p;
