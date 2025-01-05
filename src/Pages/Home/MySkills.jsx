import { FaCode, FaMobileAlt, FaDatabase, FaBell, FaCogs } from "react-icons/fa";
import { SiFirebase, SiSwift, SiCplusplus, SiFlutter, SiDart } from "react-icons/si";
import { MdOutlineArchitecture } from "react-icons/md";
import { RiRouteLine } from "react-icons/ri";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GrNetwork } from "react-icons/gr";
import image1 from "../Home/Images/360_F_492926602_CKnORUWmU6cU6WyG0HCOHrjRYhSu9hJ1-removebg-preview.png"
import image2 from "../Home/Images/icon.png"

export default function MySkills() {
  return (
    <section className="mt-4 flex flex-col items-center justify-center bg-gray-50 py-10">
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Expertise</h2>
        <p className="text-gray-600 text-lg">
          A showcase of skills I have honed over the past 2 years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {/* Programming Languages */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <FaCode className="text-blue-500 text-5xl mb-4" />
          <p className="text-gray-700 font-medium">Programming Languages</p>
          <div className="flex space-x-4 mt-3 text-3xl">
            <SiDart className="text-blue-600" />
            <SiSwift className="text-orange-500" />
            <SiCplusplus className="text-blue-500" />
          </div>
        </div>

        {/* Frameworks */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <FaMobileAlt className="text-green-500 text-5xl mb-4" />
          <p className="text-gray-700 font-medium">Frameworks</p>
          <div className="flex space-x-4 mt-3 text-3xl">
            <SiFlutter className="text-blue-500" />
            <SiSwift className="text-orange-500" />
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <SiFirebase className="text-yellow-500 text-5xl mb-4" />
          <p className="text-gray-700 font-medium">Technologies</p>
          <div className="flex space-x-4 mt-3 text-3xl">
            <SiFirebase className="text-yellow-500" />
            <FaBell className="text-red-500" />
          </div>
        </div>

        {/* Architecture */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <MdOutlineArchitecture className="text-purple-600 text-5xl mb-4" />
          <p className="text-gray-700 font-medium">Architecture</p>
          <div className="flex space-x-4 mt-3 text-gray-800">
            <img src={image1} alt="MVC" className="w-14 h-14 rounded" />
            <img src={image2} alt="MVVM" className="w-12 h-12 rounded" />
          </div>
        </div>

       {/* Libraries */}
       <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <FaDatabase className="text-teal-500 text-4xl mb-4" />
          <p className="text-gray-700 font-medium">Libraries</p>
          <div className="grid grid-cols-4 gap-3 mt-3 text-3xl">
            <AiOutlineCloudServer className="text-blue-600" title="Dio" />
            <BiGitBranch className="text-green-500" title="GetX" />
            <FaBell className="text-red-500" title="FCM" />
            <GrNetwork className="text-gray-800" title="HTTP" />
            <SiFirebase className="text-orange-500" title="Alamofire" />
            <SiDart className="text-purple-600" title="Riverpod" />
            <RiRouteLine className="text-yellow-500" title="Go Route" />
          </div>
        </div>
      </div>
    </section>
  );
}