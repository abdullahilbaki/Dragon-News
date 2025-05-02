import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-semibold">Login With</h3>
      <div className="space-y-3 mt-4">
        <button className="btn btn-outline btn-info w-full">
          <FcGoogle className="text-lg" /> Login with Google
        </button>
        <button className="btn btn-neutral btn-outline w-full">
          <FaGithub className="text-lg" /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
