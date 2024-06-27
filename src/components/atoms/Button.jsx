function Button({title,onClick}) {
    return(
        <button className="w-full py-1 text-white bg-blue-500 rounded-full hover:bg-blue-600" 
        onClick={onClick}>{title}</button>
    );
}
export default Button 