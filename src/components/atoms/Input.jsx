

function Input(props,{Children}) {
    return(
        <input type={props.type} 
        placeholder={props.placeholder}
        value={props.value} className="block w-full px-3 py-2 mt-1 bg-white border rounded-full shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
        ></input>
    )
}
export default Input 
