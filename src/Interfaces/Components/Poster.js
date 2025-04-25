import React from 'react'
import hr from '../../Assets/logo/hor.png'
const Poster = (props) => {
    return (
        <div className="uper flex justify-center item-center  mb-12  mx-auto  relative z-10  "  id={props.id}>
            <div className=' flex flex-col z-10 absolute  lg:top-16 md:top-12 sm:top-10 top-6'>

                <h6 className='text-cyan-900 text-center font-[600] text-[1.5rem] sm:text-[2rem] gfont md:text-[2.2rem] lg:text-[3.25rem]'>{props.name}</h6>
                <img src={hr} alt="horizentol line" className='w-52' />
            </div>
            <h1 className="text-blue-800  text-center opacity-[0.4] font-[600] md:mx-5 text-[3.25rem] sm:text-[5rem] md:text-[6rem] lg:text-[8.25rem]">{props.info}</h1>
        </div>
    )
}

export default Poster



