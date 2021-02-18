import React from 'react';

const BeerDetail = ({beer}) => {
    
   



    return(
        <>
        <div className='beer-detail'>
        <h1>{beer.name}</h1>
        <p><b>ABV:</b> {beer.abv}</p>
        <img src={beer.image_url} height='150'></img>
        </div>


        </>

    )      
}


export default BeerDetail;