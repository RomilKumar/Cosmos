import { useState, useEffect } from "react";

// Space-related facts
const facts = [
  "A day on Venus is longer than a year. Venus takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
  "There are more stars in the universe than grains of sand on all the Earth's beaches. Astronomers estimate there are about 100 billion galaxies, each containing millions to billions of stars!",
  "A black hole isn't actually a 'hole'. It's a super-dense region in space with such strong gravity that not even light can escape.",
  "Space is completely silent. There is no atmosphere in space to carry sound, so astronauts need radios to communicate.",
  "Neutron stars are incredibly dense. A single teaspoon of neutron-star material would weigh about 6 billion tons.",
  "The largest volcano in the solar system is on Mars. Olympus Mons is nearly three times the height of Mount Everest!",
  "The Milky Way is on a collision course with Andromeda. In about 4 billion years, the two galaxies will merge to form a new galaxy.",
  "The universe is expanding. The galaxies are moving away from each other, and the further they are, the faster they move apart.",
  "Pluto isn’t technically a planet anymore. In 2006, it was reclassified as a 'dwarf planet' by the International Astronomical Union.",
  "The Hubble Space Telescope has taken over 1.4 million observations of the universe. It has captured some of the most detailed and breathtaking images of space."
];

export default function DoYouKnow() {
  const [currentFact, setCurrentFact] = useState(facts[0]);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFact((prevFact) => {
        const nextIndex = (facts.indexOf(prevFact) + 1) % facts.length;
        return facts[nextIndex];
      });
    }, 10000); // Change fact every 10 seconds

    return () => clearInterval(factInterval); // Clean up interval on unmount
  }, []);

  return (
    <div
  className="top-[25vh] right-0 w-full h-[50vh] p-20 bg-gradient-to-b from-blue-900 to-black text-white rounded-lg shadow-xl text-center flex"
>
  {/* Left Half: Placeholder for graphics */}
  <div className="w-1/2 flex justify-center items-center">
    {/* Add your graphic here */}
    <img src="path/to/your/graphic.jpg" alt="Space Graphic" className="object-contain w-full h-full" />
  </div>

  {/* Right Half: "Do You Know?" content */}
  <div className="w-1/2 flex flex-col justify-center items-center">
    <h2 className="text-3xl font-extrabold text-pink-700 mb-4">
      Do You Know?
    </h2>
    <p className="text-lg text-gray-300 italic">
      {currentFact}
    </p>
  </div>
</div>

  );
}
