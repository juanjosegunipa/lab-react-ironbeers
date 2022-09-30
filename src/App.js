import logo from './logo.svg';
import './App.css';
import HomePage from './assets/components/HomePage';
import { Routes, Route, Link } from 'react-router-dom'
import BeerList from './assets/components/BeerList';
import BeerDetails from './assets/components/BeerDetails';
import RandomBeer from './assets/components/RandomBeer';
import CreateBeer from './assets/components/CreateBeer';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/beers' element={<BeerList />} />
        <Route path='/beers/:beerId' element={<BeerDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<CreateBeer />} />
      </Routes>
    </div>
  );
}

export default App;
