
import styles from './ZandairPcoc.module.scss';
import i100pcoc from '../../assests/pcco3.jpg';
function ZandairPcoc() {
return (
    <div className={styles.outer}>
      
      <div className={styles.name}>
        <h4>Zandair pcoctm3 <span>Air purification Unit</span></h4>

      </div>

      {/* Image Section */}
      <div className={styles.image}>
        <img src={i100pcoc} alt="ZandairPco"/>
      </div>
      {/* Introduction */}
      <h6>
      In-duct medical laboratory purification system photo catalytic air purifier 
      </h6>

      {/* Description */}
      <div className={styles.description}>
        <p className={styles.inner}>
          The PCOC™3 is the ultimate fixed 
          system for highly efficient air purification  
          in medical laboratories, and other 
          facilities, which have extreme demands   
          on superior air quality. 
          <br></br>
          <br></br>
          Photo-catalytic oxidizing (PCO)  
          technology converts and neutralises 
          Volatile Organic Compounds (VOC),  
          odours, fumes, and toxic chemicals to 
          benign water and carbon dioxide   
          by-products.  <br />
          <br></br>
          Our patented process to affix TiO2 to a 
        solid substrate for this TiO2 to interact 
        with UVC radiation has the advantage
        that the wave length used does not get
        adsorbed by the oxygen molecules, 
        thus does not create any ozone – O3
        (tri-oxygen). Naturally occurring ozone in 
        the atmosphere is converted by the TiO2
 
        / UV interaction into normal di-oxygen 
       (O2) or other ambient gases which then 
        get converted to benign matter, including 
        diatomic oxygen (O2) which forms 20.9%  
        of our ambient atmosphere.
        </p>
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
        ["Dimensions", " 659 mm x 670 mm x 585 mm"],
        ["Weight", "36 Kg"],
        ["Max air flow", " 1500 CFM 42.5 m3 / min  Max Air Flow: 1200 CFM 34 m3 / min"],
        ["Max face velocity", " 625 FPM 190 m / min"],
        ["Power", " 220-240 V / 50-60 Hz / 1.8 Amps 150 watts or 220 V / 50 Hz / 0.9 Amps 150 watts"],
        [" Fuse", " Replace only with AGC-2"],
        ["Catalyst", " TiO2 19.5 m2"],
        ["U.V. range", " 253.7 NM U.V. range"],
        ["Power consumption", " 6 UVC lamps at 20 watt each = 120 watt/hour"],
        ["Application", " 230 m2"],
        ["Service", "U.V. lamps – 1 year, Filters – 6 months U.V lamps‐every 12 months Service, replace only with LTO 16 UV lamps. filter – every 6 months."],
        [" Air flow resistance", " 0.024 inches of water column = 5, 98 Pascal for a single PCO chamber"],
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
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.cell}>CFM</th>
            <th className={styles.cell}>m³/m</th>
            <th className={styles.cell}>SP</th>
            <th className={styles.cell}>Pascal</th>
            <th className={styles.cell}>FPM</th>
            <th className={styles.cell}>m/s</th>
          </tr>
        </thead>
        <tbody>
        {[
    { CFM: 2000, cubicMeterPerMin: 56.63, SP: 0.21, Pascal: 52.30, FPM: 578, mps: 2.93 },
    { CFM: 1500, cubicMeterPerMin: 42.48, SP: 0.09, Pascal: 22.42, FPM: 432, mps: 2.20 },
    { CFM: 1000, cubicMeterPerMin: 28.32, SP: 0.03, Pascal: 7.47, FPM: 288, mps: 1.46 },
    { CFM: 900, cubicMeterPerMin: 25.49, SP: 0.02, Pascal: 5.98, FPM: 259, mps: 1.32 },
    { CFM: 600, cubicMeterPerMin: 16.99, SP: 0.01, Pascal: 2.99, FPM: 173, mps: 0.88 },
     ].map((row, index) => (
            <tr key={index} className={styles.row}>
              <td className={styles.cell}>{row.CFM}</td>
              <td className={styles.cell}>{row.cubicMeterPerMin}</td>
              <td className={styles.cell}>{row.SP}</td>
              <td className={styles.cell}>{row.Pascal}</td>
              <td className={styles.cell}>{row.FPM}</td>
              <td className={styles.cell}>{row.mps}</td>
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
        [" FHTIZPCOC™3", " ZANDAIR PCOC™3 In Duct Air Purifier System"],
        [" FHTIZRK016", "Replacement MERV-11 Electrostatic Filter for PCOC3. "],
        ["FHTIZRK019", " Replacement Set of Two UV Lamps 22W...3 Sets required for each PCOC™3"],
        [" FHTIZRK025", " Replacement MERV-13 Electrostatic Filter"],
        [" FHTIZRK026", " Replacement Potassium Permanganate Filter"],
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
)};

export default ZandairPcoc;