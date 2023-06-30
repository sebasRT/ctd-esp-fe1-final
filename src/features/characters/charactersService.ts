import { createAsyncThunk } from "@reduxjs/toolkit";
import character from "../../componentes/interfaces/characters";

/**
 * obtiene todos los personajes de la API
 */
export const getAllCharacters = createAsyncThunk('character/all',async ()=>{
    const response = await fetch(`https://rickandmortyapi.com/api/character`)

    if (response.status === 404) {
        return {info: {
            pages: 0,
            next: null,
            prev: null
        },
        results: [
            {}]}
    }
    const data = await response.json();
    return data;

})


/**
 * devuelve los personajes filtrados por String
 */
export const filterCharacterByName = createAsyncThunk('character/filtered', async (name: string) => {
  
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        if (response.status === 404) {
            return {info: {
                pages: 0,
                next: null,
                prev: null
            },
            results: [
                {}]}
        }
        const data = await response.json();
        return data;
});



/**
 * devuelve los personajes de la pagina seleccionada
 */
export const changePage = createAsyncThunk('character/filtered/page', async (page: string | null) => {
    if (typeof page === 'string') {
       
            const characters = await fetch(page)
            .then(res => res)
            .then(data => data)

            return characters.json()
    
    }
})


/**
 * devuelve un array con los datos de los personajes favoritos y en caso no haber niguno devuelve un array vacio
 * @param favorites recibe un array con los ids de los personajes favoritos
 */
export const getAllFavorites = createAsyncThunk('character/filtered/favorites',async (favorites: number[]) => {

        const characters = await fetch(`https://rickandmortyapi.com/api/character/${favorites}`)        
        if (characters.ok) { 
             return characters.json()
        }else{
            return [{}]
        }

  
})

/**
 * @async
 * @param id requiere el ID del personaje seleccionado
 * @returns los datos del personaje seleccionado
 */
export const getSelected = createAsyncThunk('character/selected', async(id: number)=>{
    
        const character = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        if (character.ok) { 
             return character.json()
        }

   
})