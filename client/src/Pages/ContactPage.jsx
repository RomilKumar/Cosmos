import { useState, useEffect } from 'react';

const contact_bg = "/assets/contact_bg.jpeg";
const mankiratpic = "/assets/mankiratpic.png";
const priyanshupic = "/assets/priyanshupic.png";
const vasundharapic = "/assets/vasundharapic.png";

export default function ContactPage() {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const membersData = [
    {
      name: "Mankirat Singh",
      description: "Frontend Developer with expertise in React, Tailwind CSS, and creative UI design.",
      image: mankiratpic,
    },
    {
      name: "Priyanshu Singh",
      description: "Backend Developer, proficient in Node.js, Express, and database management.",
      image: priyanshupic,
    },
    {
      name: "Vasundhara Gupta",
      description: "UI/UX Designer with a focus on creating seamless, user-friendly experiences.",
      image: vasundharapic,
    },
  ];

  // Function to go to the next team member
  const nextMember = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % membersData.length);
  };

  const currentMember = membersData[currentMemberIndex];

  // Adjust the image size based on the current member
  const getImageSize = () => {
    if (currentMember.name === "Mankirat Singh") {
      return { maxWidth: '800px' }; // Full size for Mankirat
    } else if (currentMember.name === "Priyanshu Singh") {
      return { maxWidth: '270px' }; // Specific size for Priyanshu
    } else if (currentMember.name === "Vasundhara Gupta") {
      return { maxWidth: '350px' }; // Specific size for Vasundhara
    } else {
      return { maxWidth: '700px' }; // Default size if needed
    }
  };

  // Automatically change team members every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextMember(); // Change to the next member
    }, 3000); // 3 seconds interval

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div 
        className="bg-cover bg-center w-screen h-screen m-0 relative"
        style={{ backgroundImage: `url(${contact_bg})` }}
      >
        {/* "Meet Our Team!" Section at the Top */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-7xl font-bold">
          Meet Our Team!
        </div>

        {/* Text Section on Left */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-xs">
          <h1 className="text-6xl font-bold">{currentMember.name}</h1>
          <p className="mt-2 text-gray-300">
            {currentMember.description}
          </p>
        </div>

        {/* Image Section on Right */}
        <img 
          src={currentMember.image} 
          alt={`${currentMember.name} Pic`} 
          className="absolute top-1/2 right-30 transform -translate-y-1/2"
          style={getImageSize()} // Apply dynamic image size here
        />

        {/* Right Swipe Button */}
        <button
          onClick={nextMember}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-4xl w-16 h-16 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out z-10"
        >
          &gt;
        </button>
      </div>
    </>
  );
}
