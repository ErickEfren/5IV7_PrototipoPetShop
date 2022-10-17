import React from 'react'
import Spinner from './Spinner';

const Card = ({ dog, loading, updateDog }) => {

    if(loading) return <Spinner />

    //console.log(dog);

    return (
        <div className="card bounce" onClick={() => updateDog(dog.breeds.id)}>
            <img 
                src={dog.url}
                alt="dog"
            />
            <p>
                {dog.breeds.name}
            </p>
        </div>
    )
}

export default Card