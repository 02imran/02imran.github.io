import image1 from "../Home/Images/1.jpg";
import image2 from "../Home/Images/2.jpg";
import image3 from "../Home/Images/3.jpg";
import image4 from "../Home/Images/4.jpg";

import image5 from "../Home/Images/5.jpg";
import image6 from "../Home/Images/6.jpg";

import image7 from "../Home/Images/7.jpg";

import image8 from "../Home/Images/8.jpg";
import image9 from "../Home/Images/9.jpg";
import image10 from "../Home/Images/10.jpg";
import image11 from "../Home/Images/11.jpg";



export default function MyPortfolio() {
  const projects = [
    {
      title: "Sheba sManager",
      description:
        "Developed a service marketplace app for Sheba.xyz, enabling simplified home service and fintech solutions.",
      link: "https://play.google.com/store/apps/details?id=xyz.sheba.managerapp&hl=en&gl=US",
      images: [image1, image5,image6], 
    },
    {
      title: "Akash DTH",
      description:
        "Implemented features for program guides, favorite channel listings, program reminders, and parental control for AKASH DTH service.",
      link: "https://play.google.com/store/apps/details?id=com.redtech.myakash",
      images: [image2, image7 ], 
    },
    {
      title: "NGPIMS",
      description: "Contributed to the development of the Next Generation Personal Information Management System for Bangladesh Police.",
      images: [image3, image8, image9],
      link: "https://play.google.com/store/apps/details?id=bd.gov.police.ngpims",
    },
    {
      title: "AEON Wallet",
      description: "Developed a mobile money platform for AEON Specialized Bank (Cambodia), enabling QR code payments and digital transactions in Khmer Riel.",
      // images: [image4, image10, image11 ],
      link: "https://www.aeonwallet.com.kh/",
    },
    {
      title: "Digicash",
      description: "Built a digital wallet for DIGITEL in South Sudan, facilitating QR code payments in South Sudanese pounds.",
      link: "https://www.digicash.com.ss/",
      // images: [image2, image4,],
    },
    {
      title: "Indieat Delivery",
      description: "Created a food delivery app, allowing users to order food from local restaurants.",
      link: "https://www.indieat.com/",
      // images: [image2, image4,],
    },
    {
      title: "Yippekart",
      description: "Developed an e-commerce app for ordering clothing items.",
      link: "https://www.yippekart.com/",
      // images: [image2, image4,],
    },
    {
      title: "AEON India Customer IOS",
      img:{image1},
      description: "Currently working on a mobile money platform for AEON Specialized Bank (India), enabling QR code payments in Indian Rupees.",
      link: "https://apps.apple.com/us/app/aeon-wallet-cambodia/id1328330562",
      images: [image4, image10, image11 ],
    },
  ];

  return (
    <section className="py-10 bg-gray-50" id="MyPortfolio">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Recent Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
        {projects?.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Images Section */}
        <div className="grid grid-cols-3 lg:gap-0 gap-2 w-full h-48 bg-gray-200">
          {item.images?.map((img, imgIndex) => (
            <div key={imgIndex} className="flex items-center justify-center">
              <img
                src={img}
                alt={`${item.title} Image ${imgIndex + 1}`}
                className="object-cover h-full w-auto max-h-48"
              />
            </div>
          ))}
        </div>
        {/* Text Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {item.description.length > 100
              ? `${item.description.substring(0, 200)}...`
              : item.description}
          </p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            View Live App
          </a>
        </div>
      </div>
        ))}
      </div>
    </section>
  );
}
