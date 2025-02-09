import { useState } from "react";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const handleClick = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <>
            {showSidebar ? (
                <div className="absolute left-0 w-[20%] bg-green-200 h-full">
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
                    className="bg-black z-10 absolute text-white"
                    onClick={handleClick}
                >
                    icon
                </button>
            )}
        </>
    );
}
