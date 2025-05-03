import React from 'react'
import productList from './Data'
import '../index.css'
import toast, { Toaster } from 'react-hot-toast';
import ElecBanner from './ElecBanner';


const Electroninc = ({setProductId}) => {


    const addToCart = (id) => {
        setProductId(id)
        toast.success('Product Added Successfully')
    }

    return (
        <>
        <ElecBanner />
        <div className=' flex flex-wrap items-center justify-center'>
                 <Toaster />
                {productList.map((product, index) => {
                    return (
                        <div key={index} className='product flex flex-col items-center justify-center bg-gray-300 m-4 px-0 py-4 w-xs rounded'>
                            <img src={product.image} alt="" className='p-2 w-[200px] h-[250px]' />

                            <div className='flex justify-between gap-2 items-center mt-2  w-50'>
                                <h6>{product.brand}</h6>
                                <h6>{product.model}</h6>
                            </div>

                            <div className='flex flex-col text-sm '>
                                <p className='m-0 text-blue-600 font-bold'>
                                    <span className='font-bold text-black mr-3'>₹</span>{product.price}-/
                                </p>
                                <p className='m-0'>{product.space}</p>
                                <p className='m-0'>{product.battery}</p>
                            </div>

                            <button id="button"
                            onClick={()=> addToCart (product.id)}
                            className='text-white p-2 rounded bg-green-600 mt-3 font-bold w-50'>
                             Add to Cart
                            </button>
                        </div>
                    );
                })}
                
            </div>
        
            </>
    )
}


export default Electroninc;










