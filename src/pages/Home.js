import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/aboutus';
import Footer from '../components/Footer';




function Home() {
  const backgroundImageStyle1 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const backgroundImageStyle2 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1617424771170-d333ef3d93d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fFBJWlpBfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const backgroundImageStyle3 = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1620001151082-88078e619216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxQSVpaQXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center h-screen" style={backgroundImageStyle1}>
        <div className='text-gray-900 text-9xl dark:text-white pt-52 font-black'>
          <span className='text-shadow-xl text-shadow-blue-dark'>
            Savor the cheesy goodness with every bite.
          </span>
        </div>
        <div className='pt-5'>
          <Link to="/menu">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md text-4xl">
            ORDER NOW
          </button>
        </Link>
        </div>
      </div>


      <div className=' flex flex-row'>
      <div className="bg-cover bg-no-repeat bg-center h-screen w-1/2" style={backgroundImageStyle2}>
           
      </div>

      <span className='w-1/2 text-red-800 text-6xl dark:text-white pt-56 font-black'>
          Our passion for pizza is as deep as the cheese on your favorite pie.
      </span>
      </div>


      <div className=' flex flex-row'>
        <span className='w-1/2 text-red-800 text-6xl dark:text-white pt-80 font-black'>
        Each pizza tells a story. Discover yours.
        </span>

        <div className="bg-cover bg-no-repeat bg-center h-screen w-1/2" style={backgroundImageStyle3}>
           
        </div>
      </div>
      <AboutUs />
      <Footer />

    </>
  );
}

export default Home;