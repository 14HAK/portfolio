const TechnologyBtn = ({ children }) => {
  return (
    <>
      <button className='px-2 py-[1px] bg-slate-300 rounded-full text-slate-900 text-[13px] font-semibold'>
        {children}
      </button>
    </>
  );
};

export default TechnologyBtn;
