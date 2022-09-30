import Header from "./Header";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BeerDetails() {

    const { beerId } = useParams()
    console.log(beerId)

    const [beerObject, setBeerObject] = useState(null)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(res => setBeerObject(res.data))
            .catch(err => console.log(err))
    }, [beerId])

    return (
        <div>
            <Header />
            <div>
                {beerObject ? (
                    <div key={beerObject._id}>
                        <div>
                            <img src={beerObject.image_url} alt={beerObject.name} height="300px" />
                        </div>
                        <h2 style={{ display: 'flex', justifyContent: 'space-between', margin: '0px 800px' }}><span>{beerObject.name}</span> <span style={{ color: 'gray' }}>{beerObject.attenuation_level}</span></h2>
                        <h3 style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 800px' }}> <span style={{ color: 'gray' }}>{beerObject.tagline}</span>  <span>{beerObject.first_brewed}</span></h3>
                        <p style={{ margin: '5px 800px' }}>{beerObject.description}</p>
                        <p style={{ color: 'gray', textAlign: 'left', margin: '25px 800px' }}>{beerObject.contributed_by}</p>
                    </div>
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    );
}

export default BeerDetails