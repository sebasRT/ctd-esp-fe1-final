import { FC } from 'react';
import './paginacion.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { changePage } from '../../features/characters/charactersService';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion:FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const nextPage: string | null = useSelector((state: RootState)  => state.characters.info.next)
    const prevPage: string | null = useSelector((state: RootState)  => state.characters.info.prev)

    return <div className="paginacion">
        <button disabled={prevPage==null? true : false} className={"primary"} onClick={()=>dispatch(changePage(prevPage))}>Anterior</button>
        <button disabled={nextPage==null? true : false} className={"primary"} onClick={()=>dispatch(changePage(nextPage))}>Siguiente</button>
    </div>
}

export default Paginacion;