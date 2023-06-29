import { FC, useEffect, useState } from 'react';
import './boton-favorito.css';

interface BotonFavoritoProps {
  esFavorito: boolean;
  onClick: () => void;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {BotonFavoritoProps} props - Las propiedades del componente
 * @returns {JSX.Element} Un elemento JSX
 */
const BotonFavorito: FC<BotonFavoritoProps> = ({ esFavorito, onClick }: BotonFavoritoProps): JSX.Element => {

    const [favorito, setFavorito] = useState(false)
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"


    useEffect(() => {
      setFavorito(esFavorito)
    
    }, [])
    
  return (
    <div className="boton-favorito" onClick={onClick}>
      <img src={src} alt="favorito" />
    </div>
  );
};

export default BotonFavorito;
