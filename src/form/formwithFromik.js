import React from "react";
import styles from "./login.module.css";
import { useFormik } from "formik";

export default function Login() {


  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be atleast 6 characters";
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
        alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.left_side}>
        <div className={styles.login_div}>
          <h2>Login</h2>

          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.input}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={styles.error}>{formik.errors.password}</div>
            ) : null}
            <button className={styles.button} type="submit">
             Submit
            </button>
            <div className={styles.linkContainer}>
              <a href="/signup" className={styles.link}>
                Sign Up?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
