import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
    tarefa: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}



function Lista({ tarefa, selecionaTarefa }: Props) {
   
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefa.map(item =>(
                    <Item  
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
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