import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Dane() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            // 'http://www.omdbapi.com/?s=movies&apikey=2fc24d55'
            'https://fortnite-api.theapinetwork.com/store/get'
        );
        // console.log(data);
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);

    };
    return (

        <div>
            {items.map(data => (
                <p key={data.item.itemId}>
                    <Link to={`/dane/${data.itemId}`}> {data.item.name}</Link>
                </p>
            ))}
        </div>

    );
}
export default Dane;
