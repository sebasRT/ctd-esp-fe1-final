import { FC, useEffect, useState } from 'react';
import './filtros.css';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {  search } from '../../features/characters/charactersSlice';
import { filterCharacterByName } from '../../features/characters/charactersService';

const Filtros: FC = () => {     
    const dispatch: AppDispatch = useDispatch();
    const searchValue = useSelector( (state: RootState)  => state.characters.search)
    

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={searchValue}
         onChange={(e)=>{dispatch(search(e.target.value));dispatch(filterCharacterByName(e.target.value))}}
         />
    </div>
}

export default Filtros;