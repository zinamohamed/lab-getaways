import React, {useState, useEffect } from 'react';
import { getSinglePlace } from '../services/placesApi';

const Details = (props) => { 
    const [places, setPlace] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSinglePlace(props.match.params.id).then(setPlace)
            .finally(() => setLoading(false))

    }, [])

    return (
        <div>
            {loading 
                ?
            <h2>Loading...</h2>
                :
            <div>
                <p>{places.name}</p>
                <img src={places.image} alt="image"/>
                <p>{places.description}</p>
                <p>{places.pricePerNight}</p>
                <p>Pet Policy: {places.petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</p>
                {places.pool ? <p>Pool Accesible! 🏊 </p> : null}
                {places.wifi ? <p>Free Wifi! 📶 </p> : null}
            </div>
            }
        </div>
    )
}

export default Details