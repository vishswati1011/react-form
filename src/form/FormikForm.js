import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styles from "./formik.module.css";
import { AllUserContext } from '../context/allUserContext';
import { useContext } from 'react';
import Users from "../users/users";
const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div className={styles.grid}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={styles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>*&nbsp;{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className={styles.grid}>
      <label className="checkbox-input">
        <input className={styles.input} type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={styles.error}>*&nbsp;{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.grid}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className={styles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>*&nbsp;{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {

  const {addUsers} = useContext(AllUserContext);
  const [count,setCount] = React.useState(0);

  return  (
    <>
    <h1>Add User </h1>
    <h2>Count : {count} </h2>
    <button onClick={()=>setCount(count+1)}> increase</button>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          addUsers(values);
            setTimeout(() => {            
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
        }}
      >
        <Form className={styles.form_div}>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
            className={styles.input}
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button className={styles.submit_button} type="submit">Submit</button>
        </Form>
      </Formik>
      <Users/>
    </>
  );
};

export default SignupForm;