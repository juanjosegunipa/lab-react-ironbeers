import Header from "./Header";
import { useEffect, useState } from 'react';
import axios from 'axios';

function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => {
                console.log(res.data)
                setRandomBeer(res.data)
            }
            )
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header />
            <div>
                {randomBeer ? (
                    <div key={randomBeer._id}>
                        <div>
                            <img src={randomBeer.image_url} alt={randomBeer.name} height="300px" />
                        </div>
                        <h2 style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 800px' }}><span>{randomBeer.name}</span> <span style={{ color: 'gray' }}>{randomBeer.attenuation_level}</span></h2>
                        <h3 style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 800px' }}> <span style={{ color: 'gray' }}>{randomBeer.tagline}</span>  <span>{randomBeer.first_brewed}</span></h3>
                        <p style={{ margin: '5px 800px' }}>{randomBeer.description}</p>
                        <p style={{ color: 'gray', textAlign: 'left', margin: '25px 800px' }}>{randomBeer.contributed_by}</p>
                    </div>
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    );
}

export default RandomBeer