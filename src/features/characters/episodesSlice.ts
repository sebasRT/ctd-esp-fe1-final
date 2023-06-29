import { createSlice } from "@reduxjs/toolkit"
import episode, { episodesList } from "../../componentes/interfaces/episodes"
import { getEpisodesByCharacter } from "./episodesService"

const emptyEpisode: episode ={
    id: 1,
    name: "",
    air_date: "",
    episode: "",
    characters:[""],
    url:"",
    created:""
}

const episodesState: episodesList= {
    status: 'idle',
    episodes: [emptyEpisode]
}

const episodesSlice = createSlice({
    name: 'episodes',
    initialState: episodesState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEpisodesByCharacter.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.episodes = action.payload
            } )
            .addCase(getEpisodesByCharacter.pending, (state)=>{
                state.status = 'pending'
                state.episodes = []
            })
            .addCase(getEpisodesByCharacter.rejected, (state)=>{
                state.status = 'rejected'
                state.episodes = []
            })
        }

    })

export default episodesSlice.reducer