import Login from "../Components/Login";

export default function LoginPage() {
    return (
        <div className=" flex items-center justify-center h-full w-full z-[1]">
            <div>
                <h2 className="font-semibold text-2xl text-center my-4 text-white">
                    Login
                </h2>
                <Login />
            </div>
        </div>
    );
}
