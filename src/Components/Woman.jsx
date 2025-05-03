import React from 'react'
import clotsList from './Fashion'
import toast, { Toaster } from 'react-hot-toast';

const Woman = ({ setItemId }) => {


    const addToCart = (id) => {
        setItemId(id)
        toast.success('Product Added Successfully')
    }
 //filter the women,s category
        const womanProduct = clotsList.filter(
        product => product.category === "women's clothing" || product.category === "jewelery")


    return (
        <div className=' flex flex-wrap items-center justify-center'>
            <Toaster />
            {womanProduct.map((product, index) => {
                return (
                    <div key={index} className='product flex flex-col items-center justify-center bg-gray-300 m-4 px-0 py-4 w-xs rounded'>
                        <img src={product.image} alt="" className='p-2 w-[200px] h-[250px]' />

                        <div className='flex flex-col text-center gap-2 items-center   w-50'>
                            <h6>{product.title}</h6>
                            <h6>{product.category}</h6>
                        </div>

                        <div className='flex flex-col text-sm '>
                            <p className='m-0 text-blue-600 font-bold'>
                                <span className='font-bold text-black mr-3'>₹</span>{product.price}-/
                            </p>
                        </div>

                        <button id="button"
                            onClick={() => addToCart(product.id)}
                            className='text-white p-2 rounded bg-green-600 mt-3 font-bold w-50'>
                            Add to Cart
                        </button>
                    </div>
                );
            })}

        </div>
    )
}

export default Woman
