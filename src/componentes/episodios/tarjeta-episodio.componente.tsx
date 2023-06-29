import { FC } from 'react';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio:FC<{name:string,episode:string,date:string}> = ({name,episode,date}) => {

    return <div className="tarjeta-episodio">
            <h4>{name}</h4>
            <div>
                <span>{episode}</span>
                <span>{date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;