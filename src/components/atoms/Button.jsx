import { Children } from "react";

function Button({title,onClick,className, Children}) {
    return(
        <button className={className} onClick={onClick}>{title}</button>
    );
}
export default Button 