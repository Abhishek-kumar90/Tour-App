import { useState } from 'react';
import Card from './Tours'

function Card(id,image,price,name,info){


    const[readmore , setreadmore] = useState(false);
    const discription = `${info.substring(0,200)}....`

    return (

        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4> 
            </div>

            <div className="discription">
                {discription}
                <span>
                {readmore ? `show more` : `read more`}
                </span>
            </div> 
        </div>

    );
}

export default Card;