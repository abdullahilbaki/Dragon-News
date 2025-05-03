import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="mt-8">
      <h3 className="font-semibold">Find Us On</h3>
      <div
        className={`mt-4 border border-gray-300 rounded font-medium 
            text-gray-500 *:hover:text-black 
            *:hover:bg-gray-300 *:p-3 *:cursor-pointer *:flex *:items-center *:gap-2`}
      >
        <div className=" p-3 border-b border-gray-300">
          <span className="rounded-full p-2 bg-gray-100">
            <FaFacebookF className="text-blue-500" />
          </span>{" "}
          Facebook
        </div>
        <div className="border-b border-gray-300">
          <span className="rounded-full p-2 bg-gray-100">
            <FaTwitter className="text-blue-300" />
          </span>
          Twitter
        </div>
        <div className="border-gray-300">
          <span className="rounded-full p-2 bg-gray-100">
            <FaInstagram className="text-pink-500"/>
          </span>{" "}
          Instagram
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
