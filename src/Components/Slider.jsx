import React from 'react'
import SliderImg from '../assets/front-photo.png'
import Banner from '../assets/shopping-bag.jpg'

const Slider = () => {
    return (
        <div className=" bg-cover bg-top bg-no-repeat " >
            <div className='py-10' style={{ backgroundImage: `url(${Banner})` }}>
                <div className=" flex items-center justify-evenly flex-wrap ">
                    <div className='text-black text-center'>
                        <h1>"Style Meets Tech <br/> Shop Fashion & Gadgets in One Place!"</h1>
                        <h5>Look sharp, live smart — all in one shop!</h5>
                    </div>
                    <img src={SliderImg} className="w-md" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Slider;
