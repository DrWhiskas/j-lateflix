import axios from "axios";
import type { Movie, TVShow, Genre, MediaType } from '../types/types';
const API_KEY = 'c4f917fd34e5c45d1b5637d34e290598';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Image sizes
export const posterSizes = {
    small: 'w185',
    medium: 'w342',
    large: 'w500',
    original: 'original'
  };
  
  export const backdropSizes = {
    small: 'w300',
    medium: 'w780',
    large: 'w1280',
    original: 'original'
  };
  
  export const getImageUrl = (path: string, size = posterSizes.medium): string => {
    if (!path) return '/placeholder.jpg';
    return `${IMAGE_BASE_URL}/${size}${path}`;
  };
  
  // Movies
  export const getTrending = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  };
  
  export const getPopularMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
  };
  
  export const getTopRatedMovies = async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
      return [];
    }
  };
  
  // TV Shows
  export const getPopularTVShows = async (): Promise<TVShow[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching popular TV shows:', error);
      return [];
    }
  };
  
  export const getTopRatedTVShows = async (): Promise<TVShow[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching top-rated TV shows:', error);
      return [];
    }
  };
  
  // Get content details
  export const getMovieDetails = async (id: number): Promise<Movie> => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie details for ID ${id}:`, error);
      throw error;
    }
  };
  
  export const getTVShowDetails = async (id: number): Promise<TVShow> => {
    try {
      const response = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching TV show details for ID ${id}:`, error);
      throw error;
    }
  };
  
  export const getGenres = async (type: MediaType): Promise<Genre[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/genre/${type}/list?api_key=${API_KEY}`);
      return response.data.genres;
    } catch (error) {
      console.error(`Error fetching genres for ${type}:`, error);
      return [];
    }
  };
  
  export const searchContent = async (query: string, type: MediaType): Promise<Movie[] | TVShow[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`);
      return response.data.results;
    } catch (error) {
      console.error(`Error searching ${type} with query "${query}":`, error);
      return [];
    }
  };