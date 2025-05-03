import swimming from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playground from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="mt-8 bg-gray-200 p-3 rounded space-y-3">
      <h3 className="font-semibold">Q-Zone</h3>
      <img src={swimming} alt="swimming" />
      <img src={classImage} alt="classImage" />
      <img src={playground} alt="playground" />
    </div>
  );
};

export default Qzone;
