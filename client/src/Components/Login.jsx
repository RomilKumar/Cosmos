import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../General/Button.jsx";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({
        searchInput: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            setDisabled(true);
            navigate("/");
            console.log({
                searchInput: inputs.searchInput,
                password: inputs.password,
            });
        } catch (err) {
            console.log(err);
            navigate("/server-error");
        } finally {
            setLoading(false);
            setDisabled(false);
        }
    };

    const handleMouseOver = (e) => {
        if (!inputs.searchInput || !inputs.password) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    };

    const inputFields = [
        {
            type: "text",
            name: "searchInput",
            id: "searchInput",
            placeholder: "Enter Username or Email",
            label: "Username or Email",
            required: true,
        },
        {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Enter password",
            label: "Password",
            required: true,
        },
    ];

    const inputElements = inputFields.map((field) => (
        <div className="my-4" key={field.name}>
            <div className="relative">
                <label
                    htmlFor={field.name}
                    className="absolute -top-2 left-2 text-sm bg-gray-900 px-1 text-purple-300"
                >
                    {field.required && <span className="text-pink-500">*</span>}
                    {field.label}
                </label>
            </div>
            <input
                type={field.type}
                name={field.name}
                id={field.id}
                placeholder={field.placeholder}
                onChange={handleChange}
                required={field.required}
                className="w-full outline-none border-2 border-pink-500 bg-gray-900 text-purple-200 p-2 rounded-md 
                focus:border-pink-500 focus:bg-gray-700 focus:ring-0 focus:shadow-md transition-all"
            />


            {error && <div className="text-pink-500 text-sm mt-1">{error}</div>}
        </div>
    ));

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                method="POST"
                onSubmit={handleSubmit}
                className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-2xl w-[450px] border border-gray-700"
            >
                {inputElements}
                <div className="text-center">
                    <Button
                        disabled={disabled}
                        onMouseOver={handleMouseOver}
                        btnText={loading ? "Loading..." : "Login"}
                        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-md hover:from-purple-700 hover:to-pink-600 transition-all"
                    />
                </div>
                <div className="text-center mt-3 text-sm text-purple-300">
                    Don't have an account?{" "}
                    <Link to={"/register"} className="text-pink-400 hover:text-pink-300">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
}