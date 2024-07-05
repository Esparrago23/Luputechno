import Label from "../atoms/Label";
import Img from "../atoms/Img";
import Button_icons from "../atoms/Button_icons";

function Principal(props) {
    return (
        <div className="flex flex-col items-center space-y-4">
            <div onClick={props.onClick} className="p-10 shadow-md ro-unded-lg bg-boton-icons">
                <Button_icons>
                    <Img image={props.image} />
                </Button_icons>
            </div>
            <div className="text-center">
                <Label text={props.text} />
            </div>
        </div>
    );
}

export default Principal;
