
import React, { useState, useEffect } from 'react';
const Com_Product = () => {

    const [products, setProducts] = useState([]);

 useEffect(() => {
      // Fetch data from JSON file
      fetch('../../phone.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
        
    return (
        <div class ="px-10 grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            {
                products.map((product)=>{

         return (    

     <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     <a href="#">
        <img class="rounded-t-lg" src="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12" alt="product image" />
    </a>
    <div class="px-5 pb-5">
    <a href="#">
            <h6 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.mobileName}</h6>
        </a>
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>

        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
    </div>
    ) 
      })
    
    
    }

        </div>
    );
};

export default Com_Product;