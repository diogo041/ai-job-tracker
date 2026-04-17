type AuthMode = "sign-in" | "sign-up";

type AuthFormProps = {
  mode: AuthMode;
};

export function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "sign-up";

  return (
    <form className="auth-form">
      {isSignUp ? (
        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Enter your full name" />
        </div>
      ) : null}

      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" placeholder="Enter your email" />
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder={isSignUp ? "Create a password" : "Enter your password"}
        />
      </div>

      {isSignUp ? (
        <div className="form-field">
          <label htmlFor="goal">Primary goal</label>
          <select id="goal" name="goal" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option value="internship">Find an internship</option>
            <option value="full-time">Find a full-time role</option>
            <option value="career-switch">Switch careers</option>
          </select>
        </div>
      ) : null}

      {!isSignUp ? (
        <div className="auth-helper-row">
          <label className="checkbox-row">
            <input type="checkbox" name="remember" />
            <span>Remember me</span>
          </label>

          <a href="#">Forgot password?</a>
        </div>
      ) : null}

      <button type="submit" className="auth-submit">
        {isSignUp ? "Create account" : "Sign in"}
      </button>

      <p className="auth-switch-text">
        {isSignUp ? "Already have an account?" : "New here?"}{" "}
        <a href={isSignUp ? "/sign-in" : "/sign-up"}>
          {isSignUp ? "Sign in" : "Create an account"}
        </a>
      </p>
    </form>
  );
}
