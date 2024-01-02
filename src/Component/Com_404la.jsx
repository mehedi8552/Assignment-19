import React from 'react';
import pic from '../assets/1084.jpg'
import NavBar from '../Pages/NavBar';
const Com_404la = () => {
    return (
        <NavBar>
            <div class=" flex bg-cover bg-left">

<div class=" w-1/2 h-screen pt-52 pl-40">
<h1 class=" text-9xl">Oops!</h1>
<h2 class="text-7xl pt-5 ">Page not found!</h2>
<p class = " pt-5">You could either go back or go to homepage</p>

<div class= " pt-10 text-2xl">
    <button class= " text-white bg-blue-500 border border-blue-500  px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:border-black hover:text-black rounded-3xl">GO BACK</button>
    <button class=" ml-10 text-white bg-blue-500 border border-blue-500  px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:border-black hover:text-black rounded-3xl">HOME PAGE</button>
    </div>
</div>
<div class=" h-116 bg-contain bg-left bg-no-repeat w-1/2 h-screen bg-[url('/src/assets/1084.jpg')]">

</div>
</div>
        </NavBar>
    );
};

export default Com_404la;