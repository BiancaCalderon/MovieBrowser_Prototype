export interface Classification {
  rating: string;
  advisoryContent: string[];
}

export interface Cast {
  characterName: string;
  actorName: string;
}

export interface Crew {
  directors: string[];
  producers: string[];
  writers: string[];
}

export interface MovieData {
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

export interface Container {
  id: string;
  title: string;
  layout: 'portrait-card' | 'landscape-card';
  items: MovieData[];
}

export interface ApiResponse {
  containers: Container[];
} 