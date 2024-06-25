import Navbar from "../components/molecules/navbar"

function HomeTem({children}) {
    return(
        <>
        <Navbar></Navbar>
        {children}
        
        </>
    )
}
export default HomeTem