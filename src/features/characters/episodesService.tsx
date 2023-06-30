import { createAsyncThunk } from "@reduxjs/toolkit";
import episode from "../../componentes/interfaces/episodes";

/**
 * obtiene la informacion de todos los episodios de acuerdo al personaje seleccionado
 */
export const getEpisodesByCharacter = createAsyncThunk('episode/character', async(episodesIds:string)=>{    

    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodesIds}`)
    if (response.ok) {
        if (episodesIds.includes(",")) {
            return response.json()
        }else{
            return [await response.json()]
        }
    }
})