import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getTotal(cosmetics);
    // console.log(cosmetics);

    // const cosmetics = [
    //     { id: 1, name: 'alta', price: 100 },
    //     { id: 2, name: 'palish', price: 200 },
    //     { id: 3, name: 'powder', price: 300 },
    //     { id: 4, name: 'churi', price: 400 },
    //     { id: 5, name: 'kharu', price: 500 },
    //     { id: 6, name: 'mala', price: 600 }
    // ]
    return (
        <div>

            <h1>Welcome to my Cosmetics Store</h1>
            <p>Money needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;