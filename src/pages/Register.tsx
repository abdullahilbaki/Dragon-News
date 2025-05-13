import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FirebaseError } from "firebase/app";
import { AuthContext } from "../contexts/authContext";

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");

  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Must be used within an AuthProvider");
  }
  const { createUser, setUser } = context;
  const handleRegisterSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const photo = formData.get("photo") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const terms = formData.get("terms") !== null;

    if (name.length < 5) {
      setNameError("Name should be at least 5 characters.");
      return;
    } else {
      setNameError("");
    }

    console.log({ name, photo, email, password, terms });

    try {
      const userCredential = await createUser(email, password);
      setUser(userCredential.user);
      setError("");
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      } else {
        console.error("Unknown error occurred during registration");
      }
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h3 className="font-semibold text-xl text-center border-b border-gray-300 pb-4">
          Register your account
        </h3>
        <form onSubmit={handleRegisterSubmit} className="fieldset space-y-1">
          {error && <p className="text-xs text-red-500">{error}</p>}

          <label className="mt-2 label font-semibold text-black">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="input bg-gray-200 border-0"
            placeholder="Enter your name"
            required
          />
          {nameError && <p className="text-xs text-red-500">{nameError}</p>}

          <label className="mt-2 label font-semibold text-black">
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            className="input bg-gray-200 border-0"
            placeholder="Enter your photo"
            required
          />

          <label className="mt-2 label font-semibold text-black">Email</label>
          <input
            type="email"
            name="email"
            className="input bg-gray-200 border-0"
            placeholder="Enter your email address"
            required
          />

          <label className="mt-2 label font-semibold text-black">
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            className="input bg-gray-200 border-0"
            placeholder="Enter your password"
            required
          />

          <div className="flex items-center gap-2 my-2">
            <input
              id="default-checkbox"
              type="checkbox"
              name="terms"
              className="w-4 h-4"
              required
            />
            <label htmlFor="default-checkbox" className="font-medium ">
              Accept Term & Conditions
            </label>
          </div>
          <button type="submit" className="btn btn-neutral mt-2">
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="flex items-center justify-center gap-2">
            Already Have An Account?
            <Link to={"/auth/login"} className="link link-hover text-red-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
