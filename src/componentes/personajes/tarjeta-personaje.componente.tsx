import { FC, useEffect, useState } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { addFavorite, deleteFavorite } from '../../features/characters/charactersSlice';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { getSelected } from '../../features/characters/charactersService';
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje: FC<{img: string, name: string , id: number}> = ({img, name, id}) => {

    const favorites = useSelector((state: RootState)  => state.characters.favorites)
    const [fav, setFav] = useState(false)
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
      setFav(favorites.includes(id))

    }, [favorites])
     
    const goToDetails = ()=>{
        dispatch(getSelected(id))
        navigate('/detalle')
        
    }
    return <div className="tarjeta-personaje" >
        <img src={img} alt={name} onClick={()=>goToDetails()} />
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito onClick={()=>{
                if (fav) {
                    dispatch(deleteFavorite(id))
                }else{dispatch(addFavorite(id))}
            }} esFavorito={fav} />
        </div>
    </div>
}

export default TarjetaPersonaje;