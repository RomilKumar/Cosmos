export default function UpcomingProjectsPage() {
  const projects = [
    {
      title: "Mars Mission 2025",
      description:
        "A new exploration mission to Mars, aiming to gather samples and study the atmosphere.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLYA4OziWxzwlpVnAcelRaQoocgzo1sohNQ&s",
      date: "2025-09-15",
    },
    {
      title: "Lunar Base Construction",
      description:
        "Building a permanent lunar base for research and habitation, paving the way for human space travel.",
      image:
        "https://viterbischool.usc.edu/wp-content/uploads/2022/08/Lunar-Construction-without-Astronauts-1200x600-1.jpeg",
      date: "2026-04-12",
    },
    {
      title: "Space Telescope Launch",
      description:
        "Launching an advanced space telescope to observe distant galaxies and cosmic phenomena.",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/48248979-B95D-4B9F-A5A565B5C810FFE5_source.jpg",
      date: "2027-01-20",
    },
    // Add more projects here...
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Upcoming Projects
          </h1>
          <p className="text-lg text-gray-600">
            Discover the exciting missions coming up in the cosmos
          </p>
        </header>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-gray-500">Launch Date: {project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
