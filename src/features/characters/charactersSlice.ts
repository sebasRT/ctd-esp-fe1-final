import { createSlice } from "@reduxjs/toolkit";
import character, { charactersList } from "../../componentes/interfaces/characters";
import { changePage, filterCharacterByName, getAllCharacters, getAllFavorites, getSelected } from "./charactersService";


const emptyCharacter: character = {
    id: 0,
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: {
        name: "",
        link: "",
    },
    location: {
        name: "",
        link: "",
    },
    image: "",
    episode: [""],
    url: "",
    created: "",

}

const initialState: charactersList = {
    status: 'idle',
    search: "",
    selected:  emptyCharacter,
    favorites: [],
    characters: [emptyCharacter],
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    }
};

const favs = localStorage.getItem('favsCharacters')

initialState.favorites = favs? JSON.parse(favs) as number[] : [];



const charactersSlice = createSlice({
    name: 'characters',   
    initialState,
    reducers: {
        search: (state, action) =>{ state.search = action.payload; },

        addFavorite: (state,action) => { state.favorites.push(action.payload);
            localStorage.setItem('favsCharacters',JSON.stringify(state.favorites))},

        deleteFavorite: (state,action)=>{ state.favorites.splice(state.favorites.indexOf(action.payload),1);
            localStorage.setItem('favsCharacters',JSON.stringify(state.favorites))},

        deleteAllFavorites: (state)=>{
            state.favorites = []
            state.characters = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCharacters.fulfilled,(state,action)=>{
                state.characters = action.payload.results
                state.info = action.payload.info 
                state.status = 'succeeded'
            } )
            .addCase(getAllCharacters.rejected,(state)=>{
                state.status = 'rejected'
            })
            .addCase(filterCharacterByName.fulfilled, (state, action) => {
                state.characters = action.payload.results
                state.info = action.payload.info                
                state.status = 'succeeded';
            })
            .addCase(filterCharacterByName.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(filterCharacterByName.rejected, (state) => {
                state.status = 'rejected';
            })
            .addCase(changePage.fulfilled, (state,action)=>{    
                state.status = 'succeeded';
                state.characters = action.payload.results
                state.info = action.payload.info
            })
            .addCase(getAllFavorites.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                if (action.payload[1]) {
                    state.characters = action.payload; 
                    state.info.pages = 1
                }else{
                    if (action.payload.id) {
                        state.characters = [action.payload]
                        state.info.pages = 1
                    }else{
                        state.info.pages = 0
                    }
            }})
            .addCase(getAllFavorites.pending,(state )=>{
                state.status = 'pending'
            })
            .addCase(getAllFavorites.rejected, (state)=>{
                state.status = 'rejected'
            })
            .addCase(getSelected.pending , (state)=>{
                state.status = 'pending'
            })
            .addCase(getSelected.fulfilled , (state,action)=>{
                state.status = 'succeeded'
                state.selected = action.payload
            })
            .addCase(getSelected.rejected, (state)=>{
                state.status = 'rejected'
            })
            ;

    },
});

export const {search, addFavorite,deleteFavorite,deleteAllFavorites} = charactersSlice.actions
export default charactersSlice.reducer;
