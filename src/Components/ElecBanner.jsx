import React from 'react'
import EleBanner from '../assets/elec-banner.png'

const ElecBanner = () => {
  return (
    //  <div className=" bg-cover bg-top bg-no-repeat " >
                <div className='bg-sky-500 p-4'>
                    <div className=" flex items-center justify-evenly flex-wrap flex-col ">
                        <div className='text-black text-center'>
                            <h1>Style Meets Tech <br/> "Power Up Your Life with the Latest Tech!"</h1>
                            <h5>Look sharp, live smart — all in one shop!</h5>
                        </div>
                        <img src={EleBanner} className="w-lg" alt="..." />
                    </div>
                </div>
            // </div>
  )
}

export default ElecBanner;
