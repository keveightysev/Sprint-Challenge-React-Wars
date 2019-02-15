import React from 'react';

import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.chars.map(char => 
            <Character char={char} movies={props.films} key={char.url}/>)}
        </div>
    );
}

export default CharacterList;