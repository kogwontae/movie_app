import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  render() {
    const {isLoading, movies} = this.state;
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">'로딩중...'</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image} 
                genres={movie.genres} 
                />
        ))} 
      </div>
    )}
    </section>;
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }, 
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies: movies, isLoading: false });
  }

  componentDidMount() {
    //영화 데이터 로딩
    this.getMovies();
  }
}

export default Home;
