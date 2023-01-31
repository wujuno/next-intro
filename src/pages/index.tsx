import Seo from "components/Seo";
import { useEffect, useState } from "react";



interface IMovie {
    results:{
      id: number
      original_title: string
      poster_path:string
    }[] 
}

export default function Home({results}:IMovie) {
  return (
    <div className="container">
      <Seo title="Home" />
      
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
          <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor:pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const API_KEY = "9d27f56aff4179e9e209022baf4f7d7f";
  const {results} = await (
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)  
  ).json();
  return {
    props: {
      results
    }
  }
}