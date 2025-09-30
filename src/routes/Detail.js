import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

   if (loading) return <h1 className="detail__loading">Loading...</h1>;
  if (!movie) return <h1 className="detail__error">영화 정보를 불러올 수 없습니다.</h1>;

  return (
    <div className="detail__container">
    
      <div
        className="detail__banner"
       
      >
        <div className="detail__overlay" />
        <h1 className="detail__bannerTitle">{movie.title}</h1>
      </div>

     
      <div className="detail__card">
        <img
          src={movie.large_cover_image}
          alt={movie.title}
          className="detail__poster"
        />

        <div className="detail__info">
          <h2>
            {movie.title} <span>({movie.year})</span>
          </h2>
          <p className="detail__rating">⭐ {movie.rating} / 10</p>
          <p>⏱ {movie.runtime} 분</p>
          <p>🌐 {movie.language.toUpperCase()}</p>
      

          <div className="detail__genres">
            {movie.genres?.map((g) => (
              <span key={g} className="detail__genre">
                {g}
              </span>
            ))}
          </div>

          {movie.yt_trailer_code && (
            <a
              className="detail__trailerBtn"
              href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}
              target="_blank"
              rel="noreferrer"
            >
              🎬 트레일러 보기
            </a>
          )}
        </div>
      </div>

      
      <div className="detail__description">
        <h3>줄거리</h3>
        <p>{movie.description_full}</p>
      </div>
    </div>
  );
}

export default Detail;
