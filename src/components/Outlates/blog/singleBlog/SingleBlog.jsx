const SingleBlog = () => {
  return (
    <>
      <div className='flex flex-col rounded-md items-start bg-slate-800 text-white p-5 col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'>
        <img
          src='https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1613283743682%2F5wWjMdq3O.png%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng'
          className='object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-'
        />
        <p className='bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inlineBlock'>
          SUMMER CAMP
        </p>
        <a className='text-lg font-bold sm:text-xl md:text-2xl'>
          Improving your day to the MAX
        </a>
        <p className='text-sm text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <div className='pt-2 pr-0 pb-0 pl-0'>
          <a className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline'>
            Jack Sparrow
          </a>
          <p className='inline text-xs font-medium mt-0 mr-1 mb-0 ml-1'>
            · 23rd, March 2021 ·
          </p>
          <p className='inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1'>
            1hr 20min. read
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
