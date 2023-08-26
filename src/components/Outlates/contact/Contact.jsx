const Contact = () => {
  return (
    <section className='text-white bg-slate-900 body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
            Contact Us
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div className='lg:w-1/2 md:w-2/3 mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label htmlFor='name' className='leading-7 text-lg text-white'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full bg-slate-100 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  placeholder='your name'
                />
              </div>
            </div>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label htmlFor='email' className='leading-7 text-lg text-white'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full bg-slate-100  rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  placeholder='your email'
                />
              </div>
            </div>
            <div className='p-2 w-full'>
              <div className='relative'>
                <label
                  htmlFor='message'
                  className='leading-7 text-lg text-white'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='w-full bg-slate-100 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  placeholder='message here...'
                ></textarea>
              </div>
            </div>
            <div className='p-2 w-full'>
              <button className='flex mx-auto text-white bg-[#eb4a4c] border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-slate-900 transition-transform rounded text-lg'>
                Button
              </button>
            </div>
            <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
              <a className='text-red-500'>dulonmolla88@gmail.com</a>
              <p className='leading-normal my-5'>
                1430, Siddirganj
                <br />
                Narayanganj, DHAKA
              </p>
              <span className='inline-flex'>
                <a className='text-white cursor-pointer'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z' />
                  </svg>
                </a>
                <a className='ml-4 text-white cursor-pointer'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z' />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
