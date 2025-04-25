import React from 'react'
import cvbanner from '../../Assets/logo/team-image.webp'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div class="bg-gradient-to-r from-blue-800 to-indigo-900 font-[sans-serif] my-20 mx-auto w-[1500px]" >
    <div class="relative my-40 overflow-hidden" data-aos="fade-right">
      <div class="max-w-screen-xl mx-auto  sm:px-6 lg:py-32 lg:px-8">
        <div class="relative z-10 text-center lg:text-left">
          <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
            Welcome to the
            <br class="xl:hidden" />
            <span class="text-indigo-400"> CV Maker</span>
          </h1>
          <p class="max-w-md mx-auto text-lg text-gray-300 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
          Fill in the blanks, choose a template and download your CV in minutes.
          </p>

          <div class="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
           
            <div>
              <button onClick={()=>{navigate('/form')}} class="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-blue-500 hover:bg-blue-400 transition duration-150 ease-in-out">
                Create Your CV Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={cvbanner} alt="Delicious Food" />
      </div>
    </div>
  </div>
  )
}

export default Banner
