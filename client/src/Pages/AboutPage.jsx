export default function AboutPage() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Cosmos</h1>
          <p className="text-lg text-gray-600">
            Pushing the boundaries of space exploration.
          </p>
        </header>

        {/* About Content */}
        <section className="space-y-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left Section with Image */}
            <div className="lg:w-1/2">
              <img
                src="https://blog.gale.com/wp-content/uploads/2024/07/iStock-1693812103.jpg"
                alt="Space Exploration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Right Section with Description */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                Cosmos is dedicated to advancing humanity's exploration of the
                universe. We aim to create a decentralized platform for space
                enthusiasts, researchers, and explorers to collaborate, share
                knowledge, and contribute to the development of space
                technologies.
              </p>
              <p className="text-gray-600">
                Our mission is to break the boundaries of what we know about
                space, explore new frontiers, and provide tools that support
                innovative space projects. Whether you're a space enthusiast, a
                scientist, or just someone passionate about the stars, Cosmos is
                here to push the limits of space exploration.
              </p>
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cosmos envisions a future where space exploration is accessible to
              all. By fostering a collaborative, open-source environment, we
              hope to empower the next generation of space innovators to make
              groundbreaking discoveries, send human missions to Mars, and
              expand humanity's presence across the universe.
            </p>
          </div>

          {/* Team Section */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Jane Smith
                </h3>
                <p className="text-gray-600">Chief Scientist</p>
              </div>
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Alice Johnson
                </h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
