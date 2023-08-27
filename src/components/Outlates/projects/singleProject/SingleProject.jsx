import TechnologyBtn from '../technology/TechnologyBtn';

const SingleProject = () => {
  return (
    <div>
      <div className='w-full p-4'>
        <div className='bg-slate-800 text-white p-3 rounded-lg'>
          <img
            className='h-52 rounded w-full object-cover object-center mb-6'
            src='https://dummyimage.com/720x400'
            alt='content'
          />
          <h3 className='tracking-widest text-xs font-medium title-font'>
            23, Jun – 10, July
          </h3>
          <h2 className='text-lg font-medium title-font mb-4'>Summer Camp</h2>
          <p className='leading-relaxed pb-3'>
            overview:this site actually a sports camping school. When every
            school have summer vacation then this Summer Camp school provide
            deferens type of sports for kid’s entertainment and developing and
            fresher mind in every child.
          </p>

          <span className='allTechnologies grid grid-cols-6 items-center gap-3'>
            <TechnologyBtn></TechnologyBtn>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
