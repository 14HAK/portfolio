const Progress = ({ skill }) => {
  // console.log(skill);
  return (
    <div className='flex w-[100%] ml-20 items-center'>
      <h1 className='text-white font-bold pt-5 mr-2'>{skill?.skillName}</h1>
      <div className='mt-2 h-4 relative w-5/12 lg:w-6/12 rounded-full overflow-hidden'>
        <div className=' w-full h-full bg-gray-200 absolute '></div>
        <div
          style={{ width: `${skill?.coverage}%` }}
          className='h-full bg-gradient-to-r from-[#eb4a4c] via-[#eb4a4c] to-indigo-600 absolute'
        ></div>
      </div>
      <span className='text-xs font-semibold bg-[#eb4a4c] text-white ml-2 p-1 rounded-full'>
        {skill?.coverage}%
      </span>
    </div>
  );
};

export default Progress;
