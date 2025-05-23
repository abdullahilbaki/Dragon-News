import { FormEvent, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/authContext";
import { FirebaseError } from "firebase/app";

const Login = () => {
  const [error, setError] = useState<string>("");
  const context = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  if (!context) {
    throw new Error("Must be used within an AuthProvider");
  }

  const { logIn, setUser } = context;

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const userCredential = await logIn(email, password);
      setUser(userCredential.user);
      navigate(location.state ? location.state : "/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        console.error("Unknown error occurred during Login");
      }
    }
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="font-semibold text-xl text-center border-b border-gray-300 pb-4">
          Login your account
        </h3>
        <form onSubmit={handleLogin} className="fieldset space-y-1">
          <label className="mt-4 label font-semibold text-black">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="input bg-gray-200 border-0"
            placeholder="Enter your email address"
            required
          />
          <label className="mt-4 label font-semibold text-black">
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            className="input bg-gray-200 border-0"
            placeholder="Enter your password"
            required
          />

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="flex items-center justify-center gap-2">
            Don't Have An Account?
            <Link
              to={"/auth/register"}
              className="link link-hover text-red-600"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
