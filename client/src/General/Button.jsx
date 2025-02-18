export default function Button({btnText, className, ...props}) {
    return (
        <button
            {...props}
            className={`bg-red-400 rounded-md px-4 py-1.5 disabled:cursor-not-allowed ${className}`}
        >
            {btnText}
        </button>
    );
}
