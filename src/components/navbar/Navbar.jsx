import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavStyle.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <nav className='flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-white bg-slate-900'>
        <div>
          <Link
            to={
              'https://drive.google.com/u/0/uc?id=1Yslbz5KNN1NajereeT0VrbkbU4FuIU63&export=download'
            }
          >
            <button className='px-7 py-2 rounded-lg text-xl bg-[#eb4a4c] text-white flex items-center justify-center hover:text-slate-700 hover:bg-white capitalize no-underline'>
              Download resume
            </button>
          </Link>
        </div>

        <svg
          onClick={() => setToggle(!toggle)}
          xmlns='http://www.w3.org/2000/svg'
          id='menu-button'
          className='h-6 w-6 cursor-pointer md:hidden block'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>

        <div
          className={` ${
            toggle ? '' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
          id='menu'
        >
          <ul className='pt-4 text-white md:flex md:justify-between md:pt-0'>
            <li>
              <NavLink
                to={'/home'}
                className={`${({ isActive }) =>
                  isActive
                    ? 'active'
                    : ''} md:p-4 py-2 block hover:text-[#EB4A4C]`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                className='md:p-4 py-2 block hover:text-[#EB4A4C]'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/projects'}
                className='md:p-4 py-2 block hover:text-[#EB4A4C]'
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/skills'}
                className='md:p-4 py-2 block hover:text-[#EB4A4C]'
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/blog'}
                className='md:p-4 py-2 block hover:text-[#EB4A4C]'
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/contact'}
                className='md:p-4 py-2 block hover:text-[#EB4A4C]'
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
