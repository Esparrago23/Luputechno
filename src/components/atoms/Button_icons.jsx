import React from 'react'
function Button_icons({ onClick, children}) {
        return (
          <div>
          <button  onClick={onClick}>{children}</button>
          </div>
        );
    
}
export default Button_icons




