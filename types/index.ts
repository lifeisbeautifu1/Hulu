export interface IMovie {
  id: string;
  backdrop_path?: string;
  poster_path?: string;
  overview: string;
  title?: string;
  original_name?: string;
  vote_count: number;
  media_type: string;
  release_date?: string;
  first_air_date?: string;
}
