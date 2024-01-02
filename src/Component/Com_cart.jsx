
import React, { useState, useEffect } from 'react';

import image from '../assets/Apple-iPhone-15-Pro-max.jpg'

const Com_cart = () => {
    const [cart, setcart] = useState([]);

    useEffect(() => {
      fetch('../../Product.json')
        .then((response) => response.json())
        .then((data) => setcart(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
 <div div class="container px-40">
    {
        cart.map((product)=>{
           return( <div className="flex border-b border-gray-300 mb-4 pb-4">
            <img src={image} alt={product.name} className="w-20 h-20 object-cover mr-4" />
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.size}</p>
              <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Qty:</label>
              <select className="border border-gray-300 rounded px-2 py-1">
                {[...Array(10).keys()].map((quantity) => (
                  <option key={quantity + 1} value={quantity + 1}>
                    {quantity + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          )
        })
    }
 
 </div>
    );  
};

export default Com_cart;