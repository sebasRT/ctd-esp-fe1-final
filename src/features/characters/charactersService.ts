import { createAsyncThunk } from "@reduxjs/toolkit";
import character from "../../componentes/interfaces/characters";

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




export const changePage = createAsyncThunk('character/filtered/page', async (page: string | null) => {
    if (typeof page === 'string') {
       
            const characters = await fetch(page)
            .then(res => res)
            .then(data => data)

            return characters.json()
    
    }
})



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
 * @example dispatch(getSelected(1))
 */
export const getSelected = createAsyncThunk('character/selected', async(id: number)=>{
    
        const character = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        if (character.ok) { 
             return character.json()
        }

   
})