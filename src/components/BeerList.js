import React from 'react';

const BeerList = ({beers, onBeerSelect}) => {

    const beerListItems = beers.map((beer, index) => {
        return(
            <li onClick={() => {onBeerSelect(beer)}} key={index}>{beer.name}</li>

        )
    })



    return (
        <>
        <ul>
           {beerListItems}
        </ul>
        </>
    )
}

export default BeerList;