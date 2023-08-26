import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className='flex justify-center items-center w-[100%] h-screen m-auto bg-slate-900'>
        <section className='text-white w-7/12 mx-auto my-auto p-10'>
          <h1 className='text-7xl pb-3 font-bold uppercase tracking-wider'>
            Dulon <span className='text-[#eb4a4c]'>Mahadi</span>
          </h1>
          <h3 className='text-4xl pb-5 text-gray-300 font-semibold capitalize'>
            <span className='uppercase text-[#eb4a4c]'>mern</span> stack
            developer
          </h3>
          <button className='px-7 py-2 rounded-lg text-xl bg-[#eb4a4c] flex items-center justify-center hover:text-slate-700 hover:bg-white capitalize'>
            <Link to={'/contact'}>get in touch</Link>
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
