import React ,{useRef,useEffect} from 'react'
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  const toggleMenu = () =>{
    var x = document.querySelector(`.${styles.nav_list}`);
    console.log(x);
    if(x){
      x.classList.toggle(`${styles.active}`);
    }
  }

  const menuRef = useRef(); 
  useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          menuRef.current.classList.remove(styles.active);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []); 
    
  return (
    <div className={styles.header_css}>
        <nav className={styles.navbar}>
          <div className={styles.menu}>
            <span onClick={()=>toggleMenu()}>Menu</span>
            <ul className={styles.nav_list}  ref={menuRef}>
            <li> <Link to="/formWithFormik">Form-With-Formik</Link> </li>
            <li><Link to="/formWithFormikYup">Form-With-Formik-Yup</Link></li>
            <li><Link to="/">Form-With-Formik-Modules</Link></li>
            <li><Link to="/signup-react-hook-form">React-Hook-Form</Link></li>
            </ul>
            </div>
        </nav>
      
    </div>
  )
}
