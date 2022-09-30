import { Link } from 'react-router-dom'
import beersImage from '../beers.png'
import randomBeerImage from '../random-beer.png'
import newBeerImage from '../new-beer.png'

function HomePage() {
    return (
        <div>
            <h1>Lab-IronBeers with react</h1>
            <div>
                <div className="home-links">
                    <Link to="/beers" style={{
                        color: "black",
                        textDecoration: "none"
                    }}>
                        <div>
                            <img src={beersImage} alt='beers' />
                        </div>
                        <div className='link-text'>
                            <h2>All Beers</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, leo ut laoreet vulputate, velit neque laoreet tellus, eget finibus risus nunc porttitor augue. Donec imperdiet congue quam ut dignissim. Cras pretium arcu ut finibus consequat. Quisque in lorem a felis maximus laoreet. Praesent porttitor imperdiet urna, eget dignissim nunc imperdiet at. Proin et ante sit amet nulla viverra tempor. Etiam ante metus, consectetur et est a, tincidunt posuere purus. Morbi a tellus elementum, pellentesque augue ut, tempus ex. Ut vel lobortis mi. Fusce vitae dui ac enim imperdiet dapibus. Nunc maximus sed sem in mollis. Proin et lobortis nibh, quis molestie quam. Sed facilisis erat in dolor dignissim, sit amet pretium urna rhoncus.</p>
                        </div>
                    </Link>
                </div>
                <div className="home-links">
                    <Link to="/random-beer" style={{
                        color: "black",
                        textDecoration: "none"
                    }}>
                        <div>
                            <img src={randomBeerImage} alt='beers' />
                        </div>
                        <div className='link-text'>
                            <h2>Random Beer</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, leo ut laoreet vulputate, velit neque laoreet tellus, eget finibus risus nunc porttitor augue. Donec imperdiet congue quam ut dignissim. Cras pretium arcu ut finibus consequat. Quisque in lorem a felis maximus laoreet. Praesent porttitor imperdiet urna, eget dignissim nunc imperdiet at. Proin et ante sit amet nulla viverra tempor. Etiam ante metus, consectetur et est a, tincidunt posuere purus. Morbi a tellus elementum, pellentesque augue ut, tempus ex. Ut vel lobortis mi. Fusce vitae dui ac enim imperdiet dapibus. Nunc maximus sed sem in mollis. Proin et lobortis nibh, quis molestie quam. Sed facilisis erat in dolor dignissim, sit amet pretium urna rhoncus.</p>
                        </div>
                    </Link>
                </div>
                <div className="home-links">
                    <Link to="/new-beer" style={{
                        color: "black",
                        textDecoration: "none"
                    }}>
                        <div>
                            <img src={newBeerImage} alt='beers' />
                        </div>
                        <div className='link-text'>
                            <h2>New Beer</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, leo ut laoreet vulputate, velit neque laoreet tellus, eget finibus risus nunc porttitor augue. Donec imperdiet congue quam ut dignissim. Cras pretium arcu ut finibus consequat. Quisque in lorem a felis maximus laoreet. Praesent porttitor imperdiet urna, eget dignissim nunc imperdiet at. Proin et ante sit amet nulla viverra tempor. Etiam ante metus, consectetur et est a, tincidunt posuere purus. Morbi a tellus elementum, pellentesque augue ut, tempus ex. Ut vel lobortis mi. Fusce vitae dui ac enim imperdiet dapibus. Nunc maximus sed sem in mollis. Proin et lobortis nibh, quis molestie quam. Sed facilisis erat in dolor dignissim, sit amet pretium urna rhoncus.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;