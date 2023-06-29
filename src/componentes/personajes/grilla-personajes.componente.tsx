import { FC } from 'react';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes: FC = () => {
    const characters = useSelector( (state: RootState)  => state.characters)
    
    return <div className="grilla-personajes">
        {
            characters.status === "pending" ?
            <h3>buscando</h3>
            :
            characters.status === 'rejected'? <h3>lo sentimos, ha ocurrido un problema cargando los recursos.</h3>:
            characters.info.pages === 0?
            <h3>no se han encontrado resultados</h3>
            :
            characters.characters.map((character)=><TarjetaPersonaje key={character.id}
             img={character.image} name={character.name} id={character.id}
            ></TarjetaPersonaje>)

        }
    </div>
}
 
export default GrillaPersonajes;