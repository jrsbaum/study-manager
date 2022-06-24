import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.scss';



function Lista({ tarefas }: { tarefas: ITarefa[]}) {
   
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) =>(
                    <Item  
                        key={index}
                        {...item} /* se for consumir de uma api q vem mt coisa, usar a outra forma (
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        ) */
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista; 