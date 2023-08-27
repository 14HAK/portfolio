const Progress = () => {
  return (
    <div className='w-[100%] ml-[25%] flex items-center'>
      <h1 className='text-white font-bold pt-5 mr-2'>Html</h1>
      <div className='mt-2 h-4 relative w-8/12 rounded-full overflow-hidden'>
        <div className=' w-full h-full bg-gray-200 absolute '></div>
        <div className=' h-full w-[75%] bg-[#eb4a4c] absolute'></div>
      </div>
      <span className='text-xs font-semibold bg-[#eb4a4c] text-white ml-2 p-1 rounded-full'>
        80%
      </span>
    </div>
  );
};

export default Progress;
