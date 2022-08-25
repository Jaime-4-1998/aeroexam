import React from 'react'
const Buton = props => {
  return <div className="boton_cont">
             <button onClick={props.onClick} className='boton_desing'>
                {props.children}
            </button>;
        </div>
}
export default Buton