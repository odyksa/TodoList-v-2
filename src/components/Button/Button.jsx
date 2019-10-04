import React from 'react';
import './Button.css';

function Button({ title, onTogglePopUp }) {
   return (
      <div className="btn-wrap">
         <button
            className="btn"
            title={title}
            onClick={onTogglePopUp}
         >
            <i className="fa fa-plus" aria-hidden="true"></i>
         </button>
      </div>
   );
}

export default Button;