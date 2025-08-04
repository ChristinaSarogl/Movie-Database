type MovieInfo = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MoviesProps = {
  movie: MovieInfo;
};

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}


export type {MovieInfo, MoviesProps, SearchProps};