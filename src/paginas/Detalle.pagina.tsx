import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { FC, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import  { charactersList } from "../componentes/interfaces/characters";
import { Link } from "react-router-dom";
import { getEpisodesByCharacter } from "../features/characters/episodesService";
import { episodesList } from "../componentes/interfaces/episodes";
import { addFavorite, deleteFavorite } from "../features/characters/charactersSlice";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle: FC = () => {
    const favorites = useSelector((state: RootState)  => state.characters.favorites)
    const [fav, setFav] = useState(false)

    const dispatch: AppDispatch = useDispatch()
    const stateCharacters: charactersList = useSelector((state:RootState)=>{ return state.characters})
    const selectedCharacter = stateCharacters.selected

    const stateEpisodes: episodesList = useSelector((state: RootState)=>state.episodes)
    const id = selectedCharacter.id
    const episodesIds = selectedCharacter.episode.map((e)=> e.substring(40))

useEffect(() => {
if (episodesIds.length > 0) {
    dispatch(getEpisodesByCharacter(episodesIds.join(',')))
}  

}, [selectedCharacter])

useEffect(() => {
    setFav(favorites.includes(id))

  }, [favorites])

    return (
        
            <div className="container">
        {
        stateCharacters.status === 'pending'? <h3>Cargando...</h3>:
        selectedCharacter.id === 0? <h3>por favor selecciona un personaje <Link to={'/'}>Aqui</Link></h3> : 
        <>
        <h3>{selectedCharacter.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={selectedCharacter.image} alt={selectedCharacter.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{selectedCharacter.name}</p>
                    <p>Planeta: {selectedCharacter.origin.name}</p>
                    <p>Genero: {selectedCharacter.gender}</p>
                    <p>id: {id}</p>
                </div>
                <BotonFavorito onClick={()=>{
                if (fav) {
                    dispatch(deleteFavorite(id))
                }else{dispatch(addFavorite(id))}}}

                esFavorito={fav} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {
                stateEpisodes.episodes.length > 0?
                stateEpisodes.episodes.map((e)=><TarjetaEpisodio key={e.id} name={e.name} episode={e.episode} date={e.air_date}></TarjetaEpisodio>)
                :
                <h3>no se han encontrado episodios</h3>
            }
        </div></>
}
        </div>
)
}

export default PaginaDetalle