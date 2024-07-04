import { Children } from "react";

function Button({title,onClick,className, Children}) {
    return(
        <button className={className} onClick={onClick}>{title}{Children}</button>
    );
}
export default Button 