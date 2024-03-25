function Button (props) {
    return (
        <div className="w-full">
            <button className="w-full text-white bg-dark-green py-2 px-4 rounded">{props.title}</button>
        </div>
    )
}

export default Button;