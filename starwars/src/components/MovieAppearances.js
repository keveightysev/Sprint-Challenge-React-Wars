import React from 'react';

const MovieAppearances = props => {
    return props.char.films.map(film => {
        const movies = props.movies;
        let filmTitle = '';
        for (let i=0; i < movies.length; i++) {
            if (movies[i].url === film) {
               filmTitle = movies[i].title;
            }
        }
        return <li>{filmTitle}</li>
        })
}

export default MovieAppearances;