import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      {/* alt는 이미지가 로드되지 않을 때 나타낼 텍스트다 */}
      <h2>
        <Link to={`/Movie/${id}`}>{title} </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>Genres {g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
