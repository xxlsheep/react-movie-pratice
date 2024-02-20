import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(Object);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setInfo(json.data.movie);
    setLoading(false);
    // console.log(json.data);
  };
  console.log(info);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <div>
          <h1>{info.title}</h1>
          <img src={info.medium_cover_image} />
          <img src={info.medium_cover_image} />
          <p>
            Genres<p></p>{" "}
            {info.genres.map((g) => (
              <li>{g}</li>
            ))}
          </p>
          <p>Rating : {info.rating}</p>
          <p>runtime: {info.runtime}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
