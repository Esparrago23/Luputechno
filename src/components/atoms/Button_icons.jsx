
function Button_icons({ onClick, children}) {

        return (
          <button  onClick={onClick} className="p-40 shadow-md ro-unded-lg bg-boton-icons">
            {children}
          </button>
        );
    
}

export default Button_icons