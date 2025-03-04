import styles from "./Footer.module.scss";
import ftlogo from '../../../assests/profile.png';
import ftram from '../../../assests/ram.png';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import stLogo from "../../../assests/5_page-0001.jpg"

function Footer() {
   
    return (
        <div className={styles.outerfooter}>
            <div className={styles.mainfooter}>
                <div className={styles.footer1}>
                    <h4 className={styles.fh}><span>Head Office</span></h4>
                    <p className={styles.fp}>
                        <span>
                            Raghavendra Kandakur<br />
                            2/A 1103,<br />
                            SIDDHACHAL, Phase 6,<br />
                            Thane West 400601 <br />
                            Maharastra state, India
                        </span>
                    </p>
                    
        
                </div>

                <div className={styles.footer2}>
                    <h4 className={styles.fh2}><span>Sign up for our newsletter</span></h4>
                    <form>
                        <label className={styles.f2l}>Email<span className={styles.imp}>*</span></label>
                        <input type="email" placeholder="Work Email" />
                        <button className={styles.signup}>SIGN UP</button>
                    </form>
                </div>

                <div className={styles.footer3}>
                    <h4 className={styles.fh2}><span>Our Certifications</span></h4>
                    <h1><img className={styles.icon} src={stLogo} alt="im" /></h1>
                    <p className={styles.fp3}><span>ISO 9001:2015</span></p>
                    <p className={styles.fp3}><span>ISO 13485:2016</span></p>
                </div>

                <div className={styles.footer4}>
                    <div className={styles.fcontainer}>
                        <h4 className={styles.fh2}><span>Contact us</span></h4>
                        <a className={styles.cmail}href="mailto:raghu@ramadeus.com">Email: raghu@ramadeus.com</a>
                        <p className={styles.call}> +91-9082505570</p>
                        <p className={styles.dic}>A product by</p>
                        <div className={styles.plogo}>
                        <img  src={ftram} alt="powered logo"/>
                        </div>
                    </div>
                    <div className={styles.fop}>
                            <p className={styles.fpl}>Terms and Conditions | Privacy Policy | Quality and Environmental Policy | Press and Media Kit</p>
                            <p className={styles.fpl}>© 2021 UV Medico A/S.</p>
                    </div>
                </div>
            </div>

            <div className={styles.outer2}>
                <div className={styles.lastfooter}>
                    <div className={styles.logol}>
                        <img className={styles.pf} src={ftlogo} alt="footerlogo" />
                        
                    </div>
                    <div className={styles.social}>
                        <FaFacebook className={styles.sl} />
                        <FaTwitter className={styles.sl} />
                        <FaYoutube className={styles.sl} />
                        <FaLinkedin className={styles.sl} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
