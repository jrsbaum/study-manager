import React, {Children} from "react";
import style from './Botao.module.scss';



interface Props {       
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
    
} 

function Botao ({ onClick, type }: Props) {
    
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className= {style.botao}
        >
            {Children}
        </button>
    )
}


export default Botao