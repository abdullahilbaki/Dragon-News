import React from "react";
import { Link } from "react-router";

interface ErrorPageProps {
  code?: number;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  code = 404,
  message = "Page Not Found",
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-9xl font-bold text-pink-500">{code}</h1>
        <h2 className="text-3xl mt-4 mb-2 font-semibold">{message}</h2>
        <p className="mb-6 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-pink-500 text-white font-semibold rounded hover:bg-pink-400 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
