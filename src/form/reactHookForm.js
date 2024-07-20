import { useForm } from "react-hook-form";
import styles from "./reactHook.module.css";
const Example = () => {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values, "hooks form");
  };

  console.log(errors, "hooks errors");
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          className={styles.input}
          placeholder="Enter your email..."
          type="email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <span className={styles.error_css}>
          {errors.email && errors.email.message}
        </span>

        <input
          className={styles.input}
          placeholder="Enter your username..."
          {...register("username", {
            validate: (value) =>
              value.length >2 || "username must be greater than 2 characters",
          })}
        />
        <span className={styles.error_css}>
          {errors.username && errors.username.message}
        </span>

        <input
          className={styles.input}
          type="password"
          placeholder="Enter your password..."
          {...register("password", {
            validate: (value) =>
              value.length > 5 || "Password must be greater than 6 characters",
          })}
        />

        <span className={styles.error_css}>
          {errors.password && errors.password.message}
        </span>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Example;
