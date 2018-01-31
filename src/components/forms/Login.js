import React from 'react';

const LoginForm = (props) => {
  return (
    <div class="row justify-content-center main-row">
        <div class="form-style xs-whole-page">
            <h2 className="color-typo text-center">Login</h2>
            <form>
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input type="button" value="Login" />
            </form>
          </div>
        </div>

  );
}

export default LoginForm;
