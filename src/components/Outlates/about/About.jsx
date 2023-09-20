import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className='flex justify-center items-center w-[100%] md:h-auto lg:h-screen m-auto bg-slate-900'>
      <main className='text-white  grid md:grid-cols-1 lg:grid-cols-2 w-7/12 gap-5'>
        <section className='p-5'>
          <div className='w-10/12 h-10/12 rounded-full bg-gradient-to-bl from-[#EB4A4C] via-red-200 to-[#EB4A4C] overflow-hidden'>
            <img
              src='https://raw.githubusercontent.com/14HAK/Mern-2023/master/profile_pic2-removebg-preview.png'
              alt=''
            />
          </div>
        </section>
        <section className='flex flex-col p-5 items-start'>
          <h3 className='text-4xl pb-2 uppercase font-bold'>
            Dulon <span className='text-[#eb4a4c]'>Mahadi</span>
          </h3>
          <h4 className='text-xl pb-5 capitalize font-semibold'>
            <span className='uppercase text-[#eb4a4c]'>mern</span> stack
            developer
          </h4>
          <p className='text-xl text-gray-300 pb-5'>
            Hi, i am Dulon Mahadi - As a MERN stack developer with a year of
            experience in web development. I have a strong foundation in
            JavaScript, React, Node-express, MongoDB, NPM, and so on. I'm
            passionate about creating scalable and efficient web applications.
            Always, I enjoy exploring new technologies and contributing to
            open-source projects.
          </p>
          <button
            onClick={() => window.my_modal_4.showModal()}
            className='btn px-7 py-2 rounded-lg text-xl bg-[#eb4a4c] flex items-center justify-center hover:text-slate-700 hover:bg-white capitalize'
          >
            <Link to={'/about'}>see more...</Link>
          </button>
        </section>
      </main>

      <dialog id='my_modal_4' className='modal'>
        <form
          method='dialog'
          className='modal-box overflow-y-auto hide-scrollbar w-auto bg-slate-800 max-w-5xl'
        >
          <h3 className='font-bold text-lg'>Hello!</h3>
          {/* ll */}
          <div className='w-full bg-gray-50 max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm'>
            <h3 className='text-3xl pb-2 uppercase font-bold'>
              Dulon <span className='text-[#eb4a4c]'>Mahadi</span>
            </h3>
            <h2 className='text-xl mt-5'>
              👋 {`I'm`} a fullStack MERN Developer.
            </h2>
            <h2 className='w-4/5 text-xl mt-5 opacity-80'>
              I have delivered world-class user experiences to millions of
              people. Well-versed with React, Javascript, Node-express, mongoDB
              and most of the Web frameworks.
            </h2>
            <div className='mt-2'>
              <div className='undefined flex flex-wrap mob:flex-nowrap link'>
                <Link to={'https://github.com/14HAK'}>
                  {' '}
                  <button
                    type='button'
                    className='text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  tablet:first:ml-0  cursor-none undefined link'
                  >
                    Github
                  </button>
                </Link>
                <Link to={'https://www.linkedin.com/in/dulon-mahadi-mern/'}>
                  <button
                    type='button'
                    className='text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100  tablet:first:ml-0  cursor-none undefined link'
                  >
                    LinkedIn
                  </button>
                </Link>
              </div>
            </div>
            <div className='mt-5'>
              <h1 className='text-3xl text-[#eb4a4c] font-bold'>Projects</h1>
              <div className='mt-5 w-full flex mob:flex-col desktop:flex-row justify-between'>
                <div className='text-lg font-bold'>
                  <h2>Summer Kids Sports</h2>
                  <h3 className='text-sm opacity-50'>23, Jun – 10, July</h3>
                  <Link
                    to={'https://summer-camp-client-f20fe.web.app'}
                    className='text-sm text-[#f35d5f] underline'
                    target='_blank'
                  >
                    preview
                  </Link>
                </div>
                <div className='w-3/5'>
                  <h2 className='text-lg font-bold'>Kids Toys Park</h2>
                  <h3 className='text-sm opacity-50'>06, Jun – 09, Jun</h3>
                  <Link
                    to={'https://assaignment-11-7fa53.web.app/home'}
                    className='text-sm text-[#f35d5f] underline'
                    target='_blank'
                  >
                    preview
                  </Link>
                </div>
              </div>
              <div className='mt-5 w-full flex mob:flex-col desktop:flex-row justify-between'>
                <div className='text-lg font-bold'>
                  <h2>Lobby of Chefs</h2>
                  <h3 className='text-sm opacity-50'>24, May – 26, Apr</h3>
                  <Link
                    to={'https://assaignment-10-b9ffb.web.app/home'}
                    className='text-sm text-[#f35d5f] underline'
                    target='_blank'
                  >
                    preview
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <h1 className='text-3xl text-[#eb4a4c] font-bold'>Education</h1>
              <div className='mt-2'>
                <h2 className='text-lg uppercase'>
                  The Peoples Uvivercity Of Bangladesh
                </h2>
                <h3 className='text-sm opacity-75'>2021 - Passing Year.</h3>
                <p className='text-sm mt-2 opacity-70'>
                  Bachelor of Science in Computer Science and Engineering_ (BSc
                  in CSE).
                  <br />
                  <span>CGPA: 3.17</span>
                </p>
              </div>
            </div>
            <div className='mt-5'>
              <h1 className='text-3xl text-[#eb4a4c] font-bold'>Skills</h1>
              <div className='flex mob:flex-col desktop:flex-row justify-between'>
                <div className='mt-2 mob:mt-5'>
                  <h2 className='text-lg font-bold'>Expert</h2>
                  <ul className=''>
                    <li className=''>HTML</li>
                    <li className=''>CSS</li>
                    <li className=''>JavaScript</li>
                    <li className=''>React</li>
                    <li className=''>React Hooks</li>
                  </ul>
                </div>
                <div className='mt-2 mob:mt-5'>
                  <h2 className='text-lg font-bold'>Comfort</h2>
                  <ul className=''>
                    <li className=''>Tailwind CSS</li>
                    <li className=''>React router</li>
                    <li className=''>
                      Tanstack Query V<sub>4</sub>
                    </li>
                    <li className=''>Redux, Redux ToolKit</li>
                    <li className=''>Node-express</li>
                    <li className=''>MongoDB</li>
                  </ul>
                </div>
                <div className='mt-2 mob:mt-5'>
                  <h2 className='text-lg font-bold'>Familiar</h2>
                  <ul className=''>
                    <li className=''>Next.js</li>
                    <li className=''>TypeScript</li>
                    <li className=''>Mysql</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* ll */}
          <div className='modal-action'>
            {/* if there is a button, it will close the modal */}
            <button className='btn'>Close</button>
          </div>
        </form>
      </dialog>
    </section>
  );
};

export default About;
