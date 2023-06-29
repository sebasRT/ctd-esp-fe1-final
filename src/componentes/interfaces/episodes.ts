export default interface episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

export  interface episodesList {
    status: 'idle' | 'succeeded' | 'pending' | 'rejected',
    episodes: episode[]
}