import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import  { addFavorite,deleteFavorite,search } from "../features/characters/charactersSlice";
import { AppDispatch } from "../store/store";
import { getAllCharacters } from "../features/characters/charactersService";
/**
 * Esta es la pagina principal. Aquí se deberá ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio:FC = () => {
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
      
        dispatch(getAllCharacters())
    
    }, [])
    
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=>{ dispatch(getAllCharacters()); dispatch(search(""))}}>Eliminar Filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio