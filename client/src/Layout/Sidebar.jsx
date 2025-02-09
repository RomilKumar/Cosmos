import { useState } from "react";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const handleClick = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <div className="absolute left-0 w-[20%] top-0 h-full">
            {showSidebar ? (
                <div className="bg-green-200 h-full">
                    Sidebar
                <button
                className="bg-black text-white"
                onClick={handleClick}
            >
                icon
            </button>
            </div>
            ) : (
                <button
                    className="bg-black text-white"
                    onClick={handleClick}
                >
                    icon
                </button>
            )}
        </div>
    );
}
