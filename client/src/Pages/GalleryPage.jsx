export default function GalleryPage() {
  const galleries = [
    {
      id: 1,
      title: "Gallery 1",
      description: "Gallery 1 Description",
      img: "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg",
      link: "https://www.va.gov/",
    },
    {
      id: 2,
      title: "Gallery 2",
      description: "Gallery 2 Description",
      img: "https://static.scientificamerican.com/dam/m/57fc603972fdb/original/GettyImages-2166462891_WEB.jpg?m=1732209326.208",
      link: "https://www.va.gov/",
    },
    {
      id: 3,
      title: "Gallery 3",
      description: "Gallery 3 Description",
      img: "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg",
      link: "https://www.va.gov/",
    },

    {
      id: 4,
      title: "Gallery 4",
      description: "Gallery 4 Description",
      img: "https://static.scientificamerican.com/dam/m/57fc603972fdb/original/GettyImages-2166462891_WEB.jpg?m=1732209326.208",
      link: "https://www.va.gov/",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Heading Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Galleries</h1>
        <p className="text-lg text-gray-600">Post Type Description</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {galleries.map((gallery) => (
          <div
            key={gallery.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110 hover:shadow-xl shadow-gray-200"
          >
            <a href={gallery.link} className="block">
              <img
                src={gallery.img}
                alt={gallery.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{gallery.title}</h3>
                <p className="text-gray-600">{gallery.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
