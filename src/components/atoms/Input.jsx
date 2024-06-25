function Input(props) {
    return(
        <input type={props.type} 
        placeholder={props.placeholder}
        value={props.value} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 " 
        ></input>
    )
}
export default Input 