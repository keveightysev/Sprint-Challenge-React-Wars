import React from 'react';
import './StarWars.css';
import MovieAppearances from './MovieAppearances';

const Character = props => {
    return (
        <div className="char-card">
            <h2>{props.char.name}</h2>
            <div className="char-lists">
            <div className="left">
                <h3>Appears in:</h3>
                <ul>
                    <MovieAppearances char={props.char} movies={props.movies} />             
                </ul>
            </div>
            <div className="right">
                <h3>Physical Attributes</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Birth Year:</td>
                        <td>{props.char.birth_year}</td>
                    </tr>
                    <tr>
                        <td>Eye Color:</td>
                        <td>{props.char.eye_color}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{props.char.gender}</td>
                    </tr>
                    <tr>
                        <td>Height:</td>
                        <td>{props.char.height}</td>
                    </tr>
                    <tr>
                        <td>Mass:</td>
                        <td>{props.char.mass}</td>
                    </tr>
                    <tr>
                        <td>Skin Color:</td>
                        <td>{props.char.skin_color}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default Character;