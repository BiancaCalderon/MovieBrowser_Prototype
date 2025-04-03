import movieData from '../data/movies.json';
import { MovieData, Container, ApiResponse } from '../types/movie.types';

export async function fetchMovieData(): Promise<ApiResponse> {
  // Simulamos una llamada a la API usando el JSON local
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movieData as ApiResponse);
    }, 1000); // Simulamos un delay de 1 segundo
  });
}

export function getFeaturedMovie(data: ApiResponse): MovieData | null {
  const topMovie = data.containers
    .flatMap(container => container.items)
    .find(movie => movie.isTopMovie);
  
  return topMovie || null;
}

export function getContainers(data: ApiResponse): Container[] {
  return data.containers;
} 