import React from "react";
import styles from "./login.module.css";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function Signup() {

  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
      username:"",
      confirm_password:"",
      organization:""
    },
    validationSchema : Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Password must be atleast 6 characters').required('Required'),
        username: Yup.string().min(3,"Please enter atleast 3 characters").required('Required'),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
        organization: Yup.string().min(3,"Please enter atleast 3 characters").required('Required'),
    }),    
    onSubmit : async (values) => {
        alert(JSON.stringify(values, null, 2));
      
    }
  })
 

  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <div className={styles.login_div}>
          <h2>Create your account</h2>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <input
              type="username"
              name="username"
              placeholder="Username"
              className={styles.input + " " + (
                formik.touched.username && formik.errors.username ? styles.bordererror : ""
              )}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              value={formik.values.username}    
            />
            {formik.touched.username && formik.errors.username && <div className={styles.error}> {formik.errors.username}</div>}
            <input
              type="text"
              name="email"
              placeholder="email"
              className={styles.input + " " + (
                formik.touched.email && formik.errors.email ? styles.bordererror : ""
              )}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              value={formik.values.email}    
            />
            {formik.touched.email && formik.errors.email && <div className={styles.error}> {formik.errors.email}</div>}
         
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input + " " + (
                formik.touched.password && formik.errors.password ? styles.bordererror : ""
            )}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              value={formik.values.password}    
            />
            {formik.touched.password && formik.errors.password && <div className={styles.error}> {formik.errors.password}</div>}
           
            <input
              name="confirm_password"
              type="confirm_password"
              placeholder="Confirm Password"
              className={styles.input + " " + (
                formik.touched.confirm_password && formik.errors.confirm_password ? styles.bordererror : ""
              )}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required  
              value={formik.values.confirm_password}    
            />
            {formik.touched.confirm_password && formik.errors.confirm_password && <div className={styles.error}> {formik.errors.confirm_password}</div>}
          
            <input
              name="organization"
              type="organization"
              placeholder="Organization"
              className={styles.input + " " + (
                formik.touched.organization && formik.errors.organization ? styles.bordererror : ""
              )}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              value={formik.values.organization}    
            />
            {formik.touched.organization && formik.errors.organization && <div className={styles.error}> {formik.errors.organization}</div>}
           
            <button className={styles.button} type="submit">
              Register
            </button>
            <div className={styles.linkContainer}>
              <a href="/" className={styles.link}>
                Login?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
