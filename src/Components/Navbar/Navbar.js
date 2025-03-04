import React from 'react';
import { FaSearch  } from "react-icons/fa";
import styles from './Navbar.module.scss';
import { MdLanguage } from "react-icons/md";
import { Link } from 'react-router-dom';
import logo from "../../assests/hospilogo.png";
function Navbar(){
  
  return(
    <nav>
      <div className={styles.image}>
        <img src={logo} alt="company logo" />
      </div>
     
      <div className={styles.headerlinks}>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          {/* <li><Link to="/gallery">Gallery</Link></li> */}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
      <div className={styles.globallogos}>
        <a href="#language"><MdLanguage /></a> 
        <a href="search"><FaSearch /></a>
        <div className={styles.btn}>
        <button>Contact US</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { FaBars } from "react-icons/fa"; // Hamburger icon
// import { FaTimes } from "react-icons/fa"; // Close icon
// import { Link } from 'react-router-dom';
// import styles from './Navbar.module.scss';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav>
//       <div className={styles.image}>
//         <img src="hospilogo.png" alt="company logo" />
//       </div>

//       {/* Hamburger Menu Button */}
//       <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
//       </div>

//       {/* Sidebar Navigation Menu */}
//       <div className={`headerlinks ${menuOpen ? "show-menu" : ""}`}>
//         <ul>
//           <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//           <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
//           <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
//           <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
//           <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;






// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";
// import { MdLanguage } from "react-icons/md";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io"; 
// import styles from './Navbar.module.css';

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.image}>
//         <img src="hospilogo.png" alt="company logo" />
//       </div>

//       {/* Hamburger Icon / Close Icon */}
//       <div className={styles.ham} onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
//       </div>

//       {/* Header Links */}
//       <div className={`${styles.headerlinks} ${menuOpen ? styles.active : ""}`}>
//         <ul>
//           <li onClick={() => setMenuOpen(false)}>Home</li>
//           <li onClick={() => setMenuOpen(false)}>Product</li>
//           <li onClick={() => setMenuOpen(false)}>Gallery</li>
//           <li onClick={() => setMenuOpen(false)}>About</li>
//           <li onClick={() => setMenuOpen(false)}>Contact</li>
//         </ul>
//       </div>

//       {/* Icons & Contact Button */}
//       <div className={styles.globallogos}>
//         <a href="#language"><MdLanguage /></a> 
//         <a href="#search"><FaSearch /></a>
//         <button className={styles.btn}>Contact for Queries</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
