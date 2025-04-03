declare module '*/movies.json' {
  interface Classification {
    rating: string;
    advisoryContent: string[];
  }

  interface Cast {
    characterName: string;
    actorName: string;
  }

  interface Crew {
    directors: string[];
    producers: string[];
    writers: string[];
  }

  interface MovieData {
    id: string;
    title: string;
    year: number;
    duration: string;
    rating: string;
    quality: string;
    description: string;
    isTopMovie: boolean;
    similarContent: string[];
    posters: {
      portrait: {
        url: string;
        aspectRatio: string;
      };
      landscape: {
        url: string;
        aspectRatio: string;
      };
    };
    cast: Cast[];
    crew: Crew;
    classification: Classification;
  }

  interface Container {
    id: string;
    title: string;
    layout: 'landscape-card' | 'portrait-card';
    items: MovieData[];
  }

  interface ApiResponse {
    containers: Container[];
  }

  const value: ApiResponse;
  export default value;
} 