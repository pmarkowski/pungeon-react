const Button = ({children, className, onClick}) =>
    <button
        className={"p-2 rounded-sm " + className}
        onClick={onClick}>
            {children}
    </button>

export default Button;
