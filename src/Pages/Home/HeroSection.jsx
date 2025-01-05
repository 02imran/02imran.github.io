// HeroSection Component
import Typewriter from "react-typewriter-effect";
import image2 from "../Home/Images/pngtree-man-avatar-image-for-profile-png-image_13001882.png"

export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="flex flex-col-reverse lg:grid lg:grid-cols-2 py-24 px-6 md:px-12 lg:px-20 items-center gap-8 bg-gray-50"
    >
      {/* Text Content */}
      <div className="flex flex-col items-start gap-6 text-center lg:text-left">
        <p className="text-lg md:text-xl font-bold text-gray-600">
          Hey, I'm Md Idrish Chowdhury
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          <span className="text-blue-500">Mobile App</span> <br />
          <Typewriter
            textStyle={{
              fontFamily: "inherit",
              fontWeight: "bold",
              color: "#1D4ED8",
            }}
            startDelay={200}
            cursorColor="#1D4ED8"
            multiText={[
              "Developer",
              "Designer",
              "Problem Solver",
            ]}
            multiTextLoop // This ensures the words keep looping
            multiTextDelay={1500}
            typeSpeed={50}
            deleteSpeed={30}
          />
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-8">
          2+ years of experience in mobile app development, specializing in
          Flutter and Swift UI. Skilled in Dart, Firebase, and Push Notifications.
          <br />
          Developed apps like Sheba sManager, Akash DTH, AEON Wallet, and Indieat Delivery.
        </p>
        <a
          href="https://ytshorts.savetube.me/1jeen2"
          className="mt-4"
        >
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Get The CV
          </button>
        </a>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center lg:justify-end">
        <img
          src={image2}
          alt="Hero Section"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
        />
      </div>
    </section>
  );
}
