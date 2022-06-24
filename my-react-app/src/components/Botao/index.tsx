import React, { ReactFragment} from "react";
import style from './Botao.module.scss';

type Params = {
    type?: "button" | "submit" | "reset" | undefined;
    children?: ReactFragment | undefined;
}

const Botao: React.FC<Params> = (props:Params) =>{   
    return(
        <button type={props.type} className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao