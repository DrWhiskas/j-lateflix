export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids: number[];
  }
  
  export interface TVShow {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    vote_average: number;
    first_air_date: string;
    genre_ids: number[];
  }
  
  export type ContentItem = Movie | TVShow;
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export enum MediaType {
    MOVIE = 'movie',
    TV = 'tv'
  }