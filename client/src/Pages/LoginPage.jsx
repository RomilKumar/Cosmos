const videoFile = "/assets/856309-hd_1920_1080_30fps.mp4";
import Login from "../Components/Login";
import "../Styles/login.css";

export default function LoginPage() {
    return (
        <div className="login relative">
            {/* Background video */}
            <video className="video-bg absolute top-0 left-0 w-full h-full object-cover" src={videoFile} autoPlay loop muted />
            
            {/* Content Overlay */}
            <div className="content-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1]">
                <div className="flex items-center justify-center h-full w-full z-[2]">
                    <div>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}
