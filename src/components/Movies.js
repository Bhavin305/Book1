import React, { useState } from 'react';
import data from '../data';
import Movie from './Movie';
import Video from './Video';

function Movies(props) {

    const [index, setIndex] = useState(null);

    const handleClick = (index) => {
        setIndex(index);
    }

    function movieRender(movie, currrentIndex) {
        if(props.filters.language.length && props.filters.genre.length) {
            if(props.filters.language.includes(data[1][movie].EventLanguage) && props.filters.genre.includes(data[1][movie].EventGenre) ){
                return <Movie movie={data[1][movie]} handleClick={handleClick}  currrentIndex={currrentIndex} />
            }
        } else if(props.filters2.length) {
            if(props.filters.language.includes(data[1][movie].EventLanguage) || props.filters.genre.includes(data[1][movie].EventGenre) ){
                return <Movie movie={data[1][movie]} handleClick={handleClick}  currrentIndex={currrentIndex} />
            }
        }
        else {
            return <Movie movie={data[1][movie]} handleClick={handleClick} currrentIndex={currrentIndex} />
        }
    }

    let showVideoOn = null;

    if (index !== null) {
        showVideoOn = Math.floor(index / 5) * 5;
    }
    const objKeys = Object.keys(data[1]);
    let requiredObjKey = '';
    if (index) {
        requiredObjKey = objKeys[index];
    }
    return(
        <div className="movies-wrapper">
            {
                objKeys.map((movie, currrentIndex) => {
                    return (
                        <>
                            { showVideoOn === currrentIndex ? <Video {...data[1][requiredObjKey]} /> : '' }
                            {movieRender(movie, currrentIndex)}
                        </>

                    );
                    
                })
            }
        </div>
    );
}

export default Movies;