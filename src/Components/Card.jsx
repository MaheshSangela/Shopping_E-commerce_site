import React from 'react'


const Card = ({ allProduct,setAllProduct }) => {

//increase the quantity of product
  const handleIncrease = (id) => {

    setAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id  ? { ...item, count: item.count + 1 } : item
      )
    );
  };
//decrease thequantity of product
  const handleDencrease = (id) => {

    setAllProduct((prevCart) =>
      prevCart.map((item) =>
          item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      )
    );
  };

//Remove product from Cart
  const removeProduct = (id) => {
    const filteredItem = allProduct.filter((item) => item.id !== id)
    setAllProduct(filteredItem)
  }



  return (

    <div className=' flex flex-wrap  justify-evenly'>

      {allProduct.map((product, index) => {
        return (

          <div key={index} className=' flex-col my-4 p-2 w-xl rounded shadow-2xl'>
            <div className='flex  '>
              <div className=' flex flex-col items-center'>
                <img src={product.image} alt="" className=' w-30' />
                <div className='flex items-center  flex-col w-[150px]'>
                  <h4>{product.brand}</h4>
                  <h5>{product.model}</h5>
                  
                </div>
              </div>

              
                <div className=' flex flex-col p-1'>
                  
                  <p className='m-0  text-sm '>{product.space}</p>
                  <p className='m-0  text-sm '>{product.camera}</p>
                  <h6>{product.title}</h6>
                   <h6>{product.category}</h6>
                   <p className='m-1 text-blue-600 font-bold'>
                    <span className='font-bold text-black mr-3'>₹</ span>{product.price}-/
                  </p>
                  <div className='flex p-1 mt-1 items-center '>
                    <button
                    onClick={() => handleDencrease(product.id)}
                    
                    className='mb-0 shadow font-bold  cursor-pointer  rounded  h-[30px] w-[25px]'>
                      
                      -</button>

                    <p className='mb-0 mx-2 p-2 rounded-xl'>{product.count}</p>
                    <button 
                    onClick={() => handleIncrease(product.id)}
                    className='mb-0  font-bold  cursor-pointer  rounded shadow h-[30px] w-[25px]'>+</button>
                  </div>
                </div>
             
              <div className=' ml-2 pt-2'>
                <div className=' flex justify-between'>
                  <p className='m-0  text-sm  '>{product.battery}</p>
                  <div
                  onClick={() => removeProduct(product.id)}
                  >
                    <i className="fa-solid fa-trash text-red-500 "></i>
                  </div>
                </div>
                <p className='m-0  text-sm '>{product.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      {allProduct.length == 0 && (
       
        <div className='mt-3 flex items-center flex-col'>
        <h1>No Product Available in Cart</h1>
        <p>Please add some product</p>
        
      </div>
      
      )}
      
    </div>

  )
}

export default Card
