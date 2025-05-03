import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-gray-300 flex items-center justify-evenly flex-wrap gap-5 p-4 text-black h-auto'>
    <div className='m-2 list-none p-2 '>
        <li className='font-bold mb-3 text-xl'>Company</li>
        <li className='mb-3'>About Us</li>
        <li className='mb-3'>Service</li>
        <li className='mb-3'>Blog</li>
        <li className='mb-3'>Contect</li>
    </div>
    <div className='m-2 list-none p-2 '>
        <li className='font-bold mb-3 text-xl'>support</li>
        <li className='mb-3'>couunity</li>
        <li className='mb-3'>Resource</li>
        <li className='mb-3'>Privacy Policy</li>
        <li className='mb-3'>Careers</li>
    </div>
    <div className='m-2 list-none p-2 '>
        <h2>Get in Touct</h2>
        <p><span className='font-bold'>Phone:</span> : +91 1874596870</p>
        <p><span className='font-bold'>Email:</span> <a href="">e-commerce@example.com</a></p>
        <div>
            <i className="fa-brands fa-instagram bg-white rounded m-2 cursor-pointer p-1"></i>
            <i className="fa-brands fa-square-facebook  bg-white rounded m-2 cursor-pointer p-1"></i>
            <i className="fa-brands fa-twitter bg-white rounded m-2 cursor-pointer p-1"></i>
            <i className="fa-brands fa-github bg-white rounded m-2 cursor-pointer p-1"></i>
            <i className="fa-brands fa-linkedin-in bg-white rounded m-2 cursor-pointer p-1"></i>
        </div>

    </div>

    <div className='m-2 '>
        <h3>Feedback</h3>
        <form className='flex flex-col justify-center'>
            <input type="text" placeholder='Enter your Name' className='p-2 bg-white rounded text-black text-xl outline-none mb-2 w-xs' />
            <input type="email" placeholder='Enter email' className='p-2 bg-white rounded text-black text-xl outline-none mb-2 w-xs' />
            <input type="phone" placeholder='Enter contect No. ' className='p-2 bg-white rounded text-black text-xl outline-none mb-2 w-xs' />
            <textarea type="textarea" placeholder='your massege' row='5' className='p-2 bg-white rounded text-black text-xl outline-none mb-2 w-xs '></textarea>
            <button className='bg-sky-500 w-[100px] text-white font-bold p-2 rounded'>send</button>
        </form>
    </div>
    <div className=' m-2 '>
    <iframe 
    title='location'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771605954!2d77.93473300179923!3d30.32555080610747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1746194100122!5m2!1sen!2sin"
      allowFullScreen="" 
      loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className='w-full h-[400px] rounded'></iframe>
    </div>
    <p>create by <a href="https://www.linkedin.com/in/mahesh-singh-sangela-008aa4261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Mahesh Singh Sangela</a></p>
</div>
  )
}

export default Contact
