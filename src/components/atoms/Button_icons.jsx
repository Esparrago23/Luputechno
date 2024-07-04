import React from 'react'
function Button_icons({ onClick, children, className}) {
        return (
          <div>
          <button className={className} onClick={onClick}>{children}</button>
          </div>
        );
    
}
export default Button_icons




