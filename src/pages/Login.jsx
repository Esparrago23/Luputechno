import SectionLogin from "../components/organisms/SectionLogin";
import Img from "../components/atoms/Img";
function Login() {
    return(
        <div className="flex items-center p-2 space-x-2 ">
            <div>
                <Img image="Logo.png"></Img>
            </div>
            <div>
                <SectionLogin></SectionLogin>
            </div>
        </div>
    )
}
export default Login