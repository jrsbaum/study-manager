import React, {Children, ReactNode} from "react";
import style from './Botao.module.scss';


export interface Props {      
    children?: ReactNode | undefined; 
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
    
} 

function Botao ({ onClick, type, children }: Props) {
    
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className= {style.botao}
        >
            {children}
        </button>
    )
}


export default Botao