<<<<<<< HEAD
=======


>>>>>>> 445298277df5055225d8d15c1ac0832a807216f5
function Input(props) {
    return(
        <input type={props.type} 
        placeholder={props.placeholder}
        value={props.value} className="block w-full px-3 py-2 mt-1 bg-white border rounded-full shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
        onChange={props.onChange}
        ></input>
    )
}
export default Input 