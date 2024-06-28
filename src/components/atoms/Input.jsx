

function Input(props,{Children}) {
    return(
        <input type={props.type} placeholder={props.placeholder} value={props.value} >{Children}</input>
    )
}
export default Input 
