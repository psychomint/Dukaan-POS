import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ErrorGIF from "../../asset/error.lottie";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-800">
      <div className="p-6 bg-white dark:bg-gray-700 text-center rounded-2xl shadow-lg">
        <DotLottieReact src={ErrorGIF} loop autoplay />
        <h1 className="text-xl font-semibold text-gray-700 dark:text-white mt-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mb-6">
          Please try again or go back to the homepage.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg focus:ring focus:ring-blue-300 focus:outline-none transition-all"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
