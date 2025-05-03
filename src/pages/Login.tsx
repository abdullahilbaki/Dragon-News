import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="font-semibold text-xl text-center border-b border-gray-300 pb-4">
          Login your account
        </h3>
        <fieldset className="fieldset space-y-1">
          <label className="mt-4 label font-semibold text-black">
            Email address
          </label>
          <input
            type="email"
            className="input bg-gray-200 border-0"
            placeholder="Enter your email address"
          />
          <label className="mt-4 label font-semibold text-black">
            Password{" "}
          </label>
          <input
            type="password"
            className="input bg-gray-200 border-0"
            placeholder="Enter your password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <div className="mt-4 text-center">
          <p className="flex items-center justify-center gap-2">
            Don't Have An Account?
            <Link to={"/auth/register"} className="link link-hover text-red-600">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
