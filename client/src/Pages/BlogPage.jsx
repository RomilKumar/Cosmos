export default function BlogPage() {
  return (
    <div className="bg-gray-100 py-12">
      {/* Blog Page Container */}
      <div className="container mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
          <p className="text-lg text-gray-600">
            Explore the latest news, articles, and updates from Cosmos
          </p>
        </header>

        {/* Featured Blog Post */}
        <section className="mb-12">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E12AQFXQw-l2a_W5w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714469430271?e=2147483647&v=beta&t=KJUwkAxB4jvEFXNz9FjVVYeS8FG9ly1bdEUs9OII1ec"
              alt="Featured Blog Post"
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold mb-4">
                Exploring the Future of Space with Cosmos
              </h2>
              <p className="text-gray-700 mb-4">
                A deep dive into the latest advancements in space exploration,
                featuring technologies integrated into the Cosmos platform.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </section>

        {/* Blog Grid (Recent Posts) */}
        <section>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Recent Blog Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Blog Post Item */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0OGjN7jSZt6p9qIt_lLbaF9abTFJH6nwiA&s"
                alt="Blog Post 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Cosmos: Breaking Barriers in Space Research
                </h4>
                <p className="text-gray-700 mb-4">
                  Discover how Cosmos is pushing the boundaries of space
                  research and making new discoveries possible.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Post Item */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.scimag.news/wp-content/uploads/2025/02/compressed_img-Q9VKmrHAgrweJHyjjEoh90Hl.png"
                alt="Blog Post 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  The Role of AI in Space Exploration
                </h4>
                <p className="text-gray-700 mb-4">
                  A look at how AI is being used to improve navigation and
                  research in space exploration with Cosmos.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>

            {/* Blog Post Item */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuM3UaYhZl_xm86X5T3vDLjF1sy1QEh2wXlQ&s"
                alt="Blog Post 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Advancements in Space Navigation Technology
                </h4>
                <p className="text-gray-700 mb-4">
                  How recent technological advancements are reshaping space
                  navigation and exploration with Cosmos.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
