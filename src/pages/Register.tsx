import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="font-semibold text-xl text-center border-b border-gray-300 pb-4">
          Register your account
        </h3>
        <fieldset className="fieldset space-y-1">
          <label className="mt-2 label font-semibold text-black">
            Your Name
          </label>
          <input
            type="text"
            className="input bg-gray-200 border-0"
            placeholder="Enter your name"
          />

          <label className="mt-2 label font-semibold text-black">
            Photo URL
          </label>
          <input
            type="text"
            className="input bg-gray-200 border-0"
            placeholder="Enter your photo"
          />

          <label className="mt-2 label font-semibold text-black">Email</label>
          <input
            type="email"
            className="input bg-gray-200 border-0"
            placeholder="Enter your email address"
          />

          <label className="mt-2 label font-semibold text-black">
            Password{" "}
          </label>
          <input
            type="password"
            className="input bg-gray-200 border-0"
            placeholder="Enter your password"
          />

          <div className="flex items-center gap-2 my-2">
            <input id="default-checkbox" type="checkbox" className="w-4 h-4" />
            <label htmlFor="default-checkbox" className="font-medium ">
              Accept Term & Conditions
            </label>
          </div>
          <button className="btn btn-neutral mt-2">Register</button>
        </fieldset>
        <div className="mt-4 text-center">
          <p className="flex items-center justify-center gap-2">
            Already Have An Account?
            <Link
              to={"/auth/login"}
              className="link link-hover text-red-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
