import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-black h-80'> 
        <div className='text-white text-2xl font-extrabold font-serif text-6xl pt-4'>
            {"FlavorWagon Express"}
        </div>
        <div className='text-white pt-4 text-3xl'>
            {"TIMMINGS: 10AM TO 10PM DAILY"}
        </div>
        <div className='pt-5'>
            <Link to="/menu">
                <button className='text-black pt-2 bg-white hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md text-4xl'>
                    MENU
                </button>
            </Link>
        </div>


       
        
    </footer>
  )
}
