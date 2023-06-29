import { createAsyncThunk } from "@reduxjs/toolkit";
import episode from "../../componentes/interfaces/episodes";

export const getEpisodesByCharacter = createAsyncThunk('episode/character', async(episodesIds:string)=>{
    
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodesIds}`)
    if (response.ok) {
        return response.json()
    }
})