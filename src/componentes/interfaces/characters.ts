export default interface character{
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin : {
        name: string;
        link : string;
    };
    location:{
        name: string;
        link : string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}


export interface charactersList {
    status: 'idle' | 'succeeded' | 'pending' | 'rejected',
    search: string,
    selected: character,
    favorites: number[],
    characters: character[] ,
    info: {
        count: number, 
        pages: number, 
        next: string | null ,
        prev: null | string
    }
}
