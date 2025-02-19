export default function NewsPage() {
  return (
    <div className="bg-gray-100 py-12">
      {/* News Page Container */}
      <div className="container mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Latest News</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest news from Cosmos
          </p>
        </header>

        {/* Featured News */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured News Item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/D5612AQHsC0z7IUstDA/article-cover_image-shrink_720_1280/0/1702035235425?e=2147483647&v=beta&t=kFZ-A_kmdY1SOwThNWNDY-WSDlnzNaWsVC0VYbJnjmA"
                alt="Featured News 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Exciting New Updates in Cosmos
                </h2>
                <p className="text-gray-700 mb-4">
                  Discover the latest advancements in the Cosmos platform and
                  what it means for developers.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>

            {/* Featured News Item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://www.apu.apus.edu/images/site/apu/why-should-we-explore-space.jpeg"
                alt="Featured News 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  New Space Exploration Features in Cosmos
                </h2>
                <p className="text-gray-700 mb-4">
                  Explore new space exploration features powered by the Cosmos
                  platform, now available to the public.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Recent Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Article Item */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D5612AQGjeO80k4CHuQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697928778518?e=2147483647&v=beta&t=7JKrIH5kkwUkJTrXlEM0yixlrtLSpx3O3GpIZXmkwJg"
                alt="Article 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Cosmos and AI: The Future of Exploration
                </h4>
                <p className="text-gray-700 mb-4">
                  AI is revolutionizing the way we explore space. Here's how
                  Cosmos is making a difference.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>

            {/* Article Item */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1IGV5yZ8ixDf-39EYcobJPzzgd-xDZcywjQ&s"
                alt="Article 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Breaking Barriers in Space Research
                </h4>
                <p className="text-gray-700 mb-4">
                  Breaking down the most recent discoveries in space research
                  and their significance for humanity.
                </p>
                <a href="#" className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>

            {/* Article Item */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/642450c002b7b4001dfd86e2.png"
                alt="Article 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">
                  Advancements in Space Navigation
                </h4>
                <p className="text-gray-700 mb-4">
                  Explore the latest advancements in space navigation
                  technology, powered by Cosmos' new updates.
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
