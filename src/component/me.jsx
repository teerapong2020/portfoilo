import React from 'react';
import imgMe from "../assets/ME.jpg";

const Me = () => {
  return (
    <header className="bg-gray-900 text-white p-4 text-center">
      <img src={imgMe} alt="Teerapong" className="mx-auto rounded-full w-60 h-56 mb-4" />
      <h1 className="text-3xl font-bold">Teerapong Chueathong</h1>
      <div className='flex justify-center gap-2'>
      <p 
      className='my-4 text-xl font-bold text-blue-500'
      >Frontend </p>
       <p 
      className='my-4 text-xl font-bold'
      >Developer</p>
      </div>
      <p className='text-l'>I did not graduate directly in IT<br /> but I dream of creating a user-friendly web app</p>
    </header>
  );
}

export default Me;
