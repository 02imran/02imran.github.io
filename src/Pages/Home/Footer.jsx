import { FaLinkedinIn, FaTwitter, FaGithub, FaFacebookF } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../Home/Images/1.jpg";
import image2 from "../Home/Images/2.jpg";
import image3 from "../Home/Images/3.jpg";
import image4 from "../Home/Images/4.jpg";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="grid mx-auto xl:ml-36 lg:ml-36 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-8 py-8">
          {/* Get In Touch Section */}
          <div>
            <h1 className="text-xl font-bold mb-4 font-montserrat">Get In Touch</h1>
            <ul className="space-y-5">
              <li className="flex items-center gap-2">
                <FaLocationArrow />
                <p>Dhaka, Bangladesh</p>
              </li>
              <li className="flex items-center gap-2">
                <MdAttachEmail />
                <p>example@example.com</p>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <p>+44 020 3882 4451</p>
              </li>
            </ul>
          </div>

          {/* About Me Section */}
          <div>
            <h1 className="text-xl font-bold mb-4 font-montserrat">About Me</h1>
            <p>
              2+ years of experience in mobile app development, specializing in Flutter and Swift UI.
            </p>
          </div>

          {/* Recent Projects Section */}
          <div>
            <h1 className="text-xl font-bold mb-4 font-montserrat">Recent Projects</h1>
            <div className="grid grid-cols-3 gap-4">
              <a href="https://project1.live" target="_blank" rel="noopener noreferrer">
                <img
                  src={image4}
                  alt="Project 1"
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-32"
                />
              </a>
              <a href="https://project2.live" target="_blank" rel="noopener noreferrer">
                <img
                  src={image3}
                  alt="Project 2"
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-32"
                />
              </a>
              <a href="https://project3.live" target="_blank" rel="noopener noreferrer">
                <img
                  src={image1}
                  alt="Project 3"
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-32"
                />
              </a>
              <a href="https://project4.live" target="_blank" rel="noopener noreferrer">
                <img
                  src={image2}
                  alt="Project 4"
                  className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover h-32"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t-2 border-gray-700 mt-8 py-4 px-2 flex flex-col md:flex-row justify-evenly items-center">
          <p className="text-center md:text-left">
            Proudly powered by © 2024{" "}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="https://www.facebook.com/UKadmissionservice">
              <FaFacebookF className="text-lg text-blue-600 hover:text-gray-400 transition-colors duration-300" />
            </Link>
            <Link to="https://twitter.com">
              <FaTwitter className="text-lg text-blue-600 hover:text-gray-400 transition-colors duration-300" />
            </Link>
            <Link to="https://github.com">
              <FaGithub className="text-lg text-blue-600 hover:text-gray-400 transition-colors duration-300" />
            </Link>
            <Link to="https://www.linkedin.com">
              <FaLinkedinIn className="text-lg text-blue-600 hover:text-gray-400 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
