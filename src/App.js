import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movies";


function Food({name, picture, rating}) {
  return (
   <div>
    <p>{name} 먹어요!</p>
    <p>{rating} 먹어요!</p>
    <p><img src={picture} alt={name}  /></p>
   </div>
  )
}



Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};


class App extends React.Component {
  state = {
    isLoading : true,
    movies :[]
  }

  getMovies = async () => {
    var { data : {data : { movies }}} =  await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); 
    console.log(movies);
    this.setState({ movies, isLoading : false });
    // this.setState({ movies });
  }
  componentDidMount() {
   this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;  //객체를 카피하여 변수를 생성 this.state의 isLoading 을 복사함.
    return (     
    
      <section className="container">
        {isLoading ? 
        <div className="loader">
          <span className="loader_txt">loading</span>
        </div>
        // () 있는것, 없는것 둘 다 가능
        //  (
        //  <div className="loader">
        //   <span className="loader_txt">loading</span>
        //  </div>
        //  )
        : 
        //  movies.map( movie => (
        //   <Movie 
        //     key = {movie.id} 
        //     id={movie.id} 
        //     year={movie.year} 
        //     title={movie.title} 
        //     summary={movie.summary}  
        //     poster={movie.medium_cover_image}
        //     genres={movie.genres} 
        //     />
        //     ))}
       
        (
          <div className="movies">
            {movies.map( movie => (
            <Movie 
              key = {movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary}  
              poster={movie.medium_cover_image}
              genres={movie.genres} 
              />
              ))}
          </div>
          )
      }      
      </section>
    )
  }
}



export default App;
