import React from 'react'
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div className={styles.header_css}>
        <nav className={styles.navbar}>
            <ul>
            <li> <Link to="/formWithFormik">Form-With-Formik</Link> </li>
            <li><Link to="/formWithFormikYup">Form-With-Formik-Yup</Link></li>
            <li><Link to="/">Form-With-Formik-Modules</Link></li>
            <li><Link to="/signup-react-hook-form">React-Hook-Form</Link></li>
            </ul>
        </nav>
      
    </div>
  )
}
