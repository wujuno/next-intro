import Seo from "components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "9d27f56aff4179e9e209022baf4f7d7f";

interface IMovie {
    id: number
    original_title: string
}

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  useEffect(() => {
    (async () => {
      const {results} = await (
        await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)  
      ).json();
      setMovies(results);
    })()
  },[])
  console.log(movies);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}