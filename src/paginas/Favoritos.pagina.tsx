import { FC, useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getAllFavorites } from "../features/characters/charactersService";
import { deleteAllFavorites } from "../features/characters/charactersSlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {
    const favorites: number[] = useSelector((state: RootState)=> state.characters.favorites)
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {

      dispatch(getAllFavorites(favorites))
    }, [])

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=>{
                dispatch(deleteAllFavorites())
            }}>Eliminar Todos</button>
        </div>
        <GrillaPersonajes />
    </div>
}

export default PaginaFavoritos