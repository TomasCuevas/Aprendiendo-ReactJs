import '../styles/styles.css';

export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <span>First name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <span>Last name is required</span>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <span>Email is required</span>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <span>Password is required</span>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
