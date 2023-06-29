import { configureStore} from "@reduxjs/toolkit";
import charactersReducer from '../features/characters/charactersSlice'
import createSagaMiddleware from 'redux-saga'
import episodesSlice from "../features/characters/episodesSlice";
// import { bringCharactersSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware( )

const store = configureStore({
reducer: {
    characters:  charactersReducer,
    episodes: episodesSlice,
},
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

// sagaMiddleware.run(bringCharactersSaga)

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;