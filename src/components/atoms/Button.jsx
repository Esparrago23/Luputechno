function Button({title,onClick}) {
    return(
        <button className="bg-sky-500 hover:bg-sky-700 rounded-3xl" 
        onClick={onClick}>{title}</button>
    );
}
export default Button 