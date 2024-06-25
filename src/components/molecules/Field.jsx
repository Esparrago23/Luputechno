import Input from "../atoms/Input";
import Label from "../atoms/Label";

function Field(props) {
    return(
        <div>
            <div>
                <Label text={props.text}></Label>
            </div>
            <div>
                <Input  type={props.type} placeholder={props.placeholder} ></Input>
            </div>
        </div>
        
    )
}
export default Field