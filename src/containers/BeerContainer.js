import React, {useState, useEffect} from 'react';
import BeerList from '../components/BeerList'
import BeerDetail from '../components/BeerDetail'

const BeerContainer = () => {
    
    const [beers, setBeers] = useState([])
    const [selectedBeers, setSelectedBeers] = useState(0)

    const getBeers = () => {
        console.log('fetching beers...')
        fetch('https://api.punkapi.com/v2/beers')
        .then(result => result.json())
        .then(data => setBeers(data))
    }

    useEffect(() => {
        getBeers()
    }, [])

    const handleSelectedBeers = (beer) => {
        setSelectedBeers(beer)
    }




    return (
    <>
    <h1>This is the beer container!</h1>
    <div className="beer-container"></div>
    <BeerList beers={beers} onBeerSelect={handleSelectedBeers}/>
    <BeerDetail beer={selectedBeers}/>
    
    </>

    )
}


export default BeerContainer;