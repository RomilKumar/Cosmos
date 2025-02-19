export default function Header() {
    return (
        <header className="fixed top-0 w-full h-[15vh] bg-black flex items-center justify-between border-b-1 border-gray-500 z-1">
            {/* Left section (for logo or other elements) */}
            <div className="flex items-center pl-6">
                {/* Add your logo or other elements here */}
            </div>

            {/* Center section for navigation items */}
            <nav className="flex space-x-4 h-full items-center ml-6">
                <a
                    href="Home"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    Home
                </a>
                <a
                    href="about"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    About
                </a>
                <a
                    href="gallery"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    Gallery
                </a>
                <a
                    href="news"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    News
                </a>
                <a
                    href="blogs"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    Blogs
                </a>
                <a
                    href="upcoming-projects"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    Upcoming Projects
                </a>
                <a
                    href="contact-us"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    Contact Us
                </a>
                <a
                    href="social-media"
                    className="text-white hover:text-gray-400 text-lg font-medium border-2 border-gray-400 px-3 py-1.5 rounded-none flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-gray-800 whitespace-nowrap m-0"
                >
                    Social Media
                </a>
            </nav>

            {/* Right section for buttons (Log In / Sign Up) */}
            <div className="flex space-x-0 pr-6">
                <button className="text-white bg-gray-700 px-3 py-1.5 rounded-none hover:bg-gray-500 transition-all hover:scale-105 hover:shadow-lg">
                    <p className="text-lg font-semibold">Log In</p>
                </button>

                <button className="text-white bg-pink-700 px-3 py-1.5 rounded-none hover:bg-pink-500 transition-all hover:scale-105 hover:shadow-lg">
                    <p className="text-lg font-semibold">Sign Up</p>
                </button>
            </div>
        </header>
    );
}
