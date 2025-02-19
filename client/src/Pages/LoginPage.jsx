const videoFile = "/assets/856309-hd_1920_1080_30fps.mp4";
import Login from "../Components/Login";

export default function LoginPage() {
    return (
        <div className=" inset-0 z-[1]">
            {/* Background video */}
            <video className="video-bg absolute top-0 left-0 w-full h-full object-cover" src={videoFile} autoPlay loop muted />
            
            {/* Content Overlay */}
            <div className=" absolute top-0 left-0 w-full h-full bg-violet-300 bg-opacity-50 z-[1]">
                <div className="flex items-center justify-center h-full w-full z-[2]">
                    <div>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}
