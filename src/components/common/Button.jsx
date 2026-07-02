function Button({
    children,
    onClick,
    type = "button",
    className = "",
}) {
    return(
        <button 
        type={type}
        onClick={onClick}
        className={`rounded-lg px-4 py-2 font-medium transition ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;