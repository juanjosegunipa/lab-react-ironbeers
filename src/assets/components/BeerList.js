import Header from './Header'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function BeerList() {

    const [allBeers, setAllBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(json => setAllBeers(json.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Header />
            <div>
                {
                    allBeers.map(singleBeer => {
                        return (
                            <Link to={`/beers/${singleBeer._id}`} style={{
                                color: "black",
                                textDecoration: "none"
                            }} >
                                <div key={singleBeer._id} style={
                                    {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginLeft: '360px',
                                        marginRight: '360px',
                                        border: '1px solid rgb(99, 99, 99)',
                                        padding: '20px'
                                    }
                                }>
                                    <div>
                                        <img src={singleBeer.image_url} alt={singleBeer.name} height="100" />
                                    </div>
                                    <div style={{ textAlign: 'left', marginLeft: '50px' }}>
                                        <h3>{singleBeer.name}</h3>
                                        <h4>{singleBeer.tagline}</h4>
                                        <p>Created by: {singleBeer.name}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div >
    );
}

export default BeerList;