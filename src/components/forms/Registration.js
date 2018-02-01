import React from 'react';

const RegistrationForm = (props) => {
  return (
    <div className="row justify-content-center main-row">
        <div className="form-style xs-whole-page">
            <h2 className="color-typo text-center">Register an Account</h2>
            <form>
              <input type="text" name="first_name" placeholder="First Name" />
              <input type="text" name="last_name" placeholder="Last Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input type="password" name="password_confirm" placeholder="Password Confirm" />
              <input type="button" value="Register" />
            </form>
          </div>
        </div>

  );
}

export default RegistrationForm;
